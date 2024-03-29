/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils-define-nonenumerable-read-write-accessor' );
var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var isndarrayLike = require( '@stdlib/assert-is-ndarray-like' );
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var constantFunction = require( '@stdlib/utils-constant-function' );
var noop = require( '@stdlib/utils-noop' );
var base = require( '@stdlib/random-base-exponential' );
var ctors = require( '@stdlib/array-typed-real-float-ctors' );
var filledBy = require( '@stdlib/array-base-filled-by' );
var zeros = require( '@stdlib/array-base-zeros' );
var nullaryStrided = require( '@stdlib/strided-base-nullary' );
var unary = require( '@stdlib/ndarray-base-unary' );
var broadcastArray = require( '@stdlib/ndarray-base-broadcast-array' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var numel = require( '@stdlib/ndarray-base-numel' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var basendarray = require( '@stdlib/ndarray-base-ctor' );
var format = require( '@stdlib/string-format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a function for generating pseudorandom numbers drawn from an exponential distribution.
*
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {string} [options.dtype="float64"] - default data type
* @param {string} [options.order="row-major"] - default memory layout (either row-major or column-major)
* @param {string} [options.mode="throw"] - default specifying how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode=["throw"]] - default specifying how to handle subscripts which exceed array dimensions on a per dimension basis
* @param {boolean} [options.readonly=false] - default indicating whether an array should be read-only
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Function} function for creating arrays
*
* @example
* var rand = factory({
*     'dtype': 'generic',
*     'order': 'column-major'
* });
* // returns <Function>
*
* var arr = rand( [ 10 ], 2.0 );
* // returns <ndarray>
*
* @example
* var rand = factory({
*     'dtype': 'generic',
*     'order': 'column-major'
* });
* // returns <Function>
*
* var arr = rand( [ 10 ], 2.0, {
*     'dtype': 'float32'
* });
* // returns <ndarray>
*/
function factory() {
	var options;
	var opts;
	var prng;
	var err;

	opts = {
		'dtype': defaults.dtype,
		'order': defaults.order
	};

	if ( arguments.length > 0 ) {
		options = arguments[ 0 ];
		prng = base.factory( options );
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		prng = base;
	}
	if ( options && options.prng ) {
		setReadOnly( rand, 'seed', null );
		setReadOnly( rand, 'seedLength', null );
		setReadWriteAccessor( rand, 'state', constantFunction( null ), noop );
		setReadOnly( rand, 'stateLength', null );
		setReadOnly( rand, 'byteLength', null );
	} else {
		setReadOnlyAccessor( rand, 'seed', getSeed );
		setReadOnlyAccessor( rand, 'seedLength', getSeedLength );
		setReadWriteAccessor( rand, 'state', getState, setState );
		setReadOnlyAccessor( rand, 'stateLength', getStateLength );
		setReadOnlyAccessor( rand, 'byteLength', getStateSize );
	}
	setReadOnly( rand, 'PRNG', prng.PRNG );
	setReadOnly( rand, 'assign', assign );
	return rand;

	/**
	* Returns pseudorandom numbers drawn from an exponential distribution with rate parameter `lambda`.
	*
	* @private
	* @param {NonNegativeIntegerArray} shape - array shape
	* @param {(PositiveNumber|ndarrayLike)} lambda - rate parameter
	* @param {Options} [options] - function options
	* @param {string} [options.dtype] - array data type
	* @param {string} [options.order] - memory layout (either row-major or column-major)
	* @param {string} [options.mode] - specifies how to handle indices which exceed array dimensions
	* @param {StringArray} [options.submode] - specifies how to handle subscripts which exceed array dimensions on a per dimension basis
	* @param {boolean} [options.readonly] - boolean indicating whether an array should be read-only
	* @throws {TypeError} first argument must be a valid shape
	* @throws {TypeError} must provide valid distribution parameters
	* @throws {TypeError} distribution parameters and the desired shape must be broadcast compatible
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ndarray} output array
	*/
	function rand( shape, lambda, options ) {
		var param1;
		var ctor;
		var buf;
		var err;
		var len;
		var ord;
		var FLG;
		var out;
		var dt;
		var st;
		var sh;
		var o;

		if ( !isArrayLikeObject( shape ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array-like object containing nonnegative integers. Value: `%s`.', shape ) );
		}
		len = numel( shape );
		if ( len < 0 ) {
			throw new TypeError( 'invalid argument. First argument must be an array-like object containing nonnegative integers.' );
		}
		o = {};
		if ( arguments.length > 2 ) {
			err = validate( o, options );
			if ( err ) {
				throw err;
			}
		}
		dt = o.dtype || opts.dtype;
		ord = o.order || opts.order;

		// Check whether we've been provided a scalar distribution parameter...
		if ( isNumber( lambda ) ) {
			param1 = lambda;
			FLG = true;
		} else if ( isndarrayLike( lambda ) ) {
			sh = lambda.shape;

			// Check whether the distribution parameter is a zero-dimensional array...
			if ( sh.length === 0 ) {
				param1 = lambda.get();
				FLG = true;
			} else {
				// Broadcast the distribution parameter to the desired shape:
				param1 = broadcastArray( lambda, shape );
				FLG = false;
			}
		} else {
			throw new TypeError( format( 'invalid argument. Second argument must be either a scalar or an ndarray-like object. Value: `%s`.', lambda ) );
		}
		// Handles special cases involving (1) zero-dimensional output ndarrays and (2) shapes having at least one dimension of size zero...
		if ( len === 0 ) {
			// Check for a zero-dimensional shape...
			if ( shape.length === 0 ) {
				// If the output array is a zero-dimensional ndarray, we generate a single random variate...
				if ( dt === 'generic' ) {
					buf = [ 0.0 ];
				} else {
					ctor = ctors( dt );
					buf = new ctor( 1 );
				}
				buf[ 0 ] = prng( param1 );
				st = [ 0 ];
			} else {
				// If the output array has one or more dimensions of size zero, we avoid allocating any memory, and instead return an empty ndarray...
				if ( dt === 'generic' ) {
					buf = [];
				} else {
					ctor = ctors( dt );
					buf = new ctor( len );
				}
				st = shape2strides( shape, ord );
			}
			return new ndarray( dt, buf, shape, st, 0, ord, o );
		}
		// If provided a scalar distribution parameter, we can simply fill a linear buffer with pseudorandom numbers (as all pseudorandom numbers are drawn from the same distribution) and then wrap as an ndarray...
		if ( FLG ) {
			if ( dt === 'generic' ) {
				buf = filledBy( len, wrapper );
			} else {
				ctor = ctors( dt );
				buf = new ctor( len );
				nullaryStrided( [ buf ], [ len ], [ 1 ], wrapper );
			}
			st = shape2strides( shape, ord );
			return new ndarray( dt, buf, shape, st, 0, ord, o );
		}
		// We've been provided an ndarray, so we need to broadcast and perform element-wise iteration...

		// Allocate a data buffer...
		if ( dt === 'generic' ) {
			buf = zeros( len );
		} else {
			ctor = ctors( dt );
			buf = new ctor( len );
		}
		// Create the output array:
		st = shape2strides( shape, ord );
		out = new ndarray( dt, buf, shape, st, 0, ord, o );

		// Fill the output array with pseudorandom numbers:
		unary( [ param1, out ], prng );

		return out;

		/**
		* Applies parameters to a pseudorandom number generator function.
		*
		* @private
		* @returns {number} pseudorandom number
		*/
		function wrapper() {
			return prng( param1 );
		}
	}

	/**
	* Fills an ndarray with pseudorandom numbers drawn from an exponential distribution with rate parameter `lambda`.
	*
	* @private
	* @param {ndarrayLike} out - output array
	* @param {(PositiveNumber|ndarrayLike)} lambda - rate parameter
	* @throws {TypeError} first argument must be an ndarray
	* @throws {TypeError} must provide valid distribution parameters
	* @throws {TypeError} distribution parameters and the output array must be broadcast compatible
	* @returns {ndarray} output array
	*/
	function assign( out, lambda ) { // TODO: consider reordering arguments to make `out` last
		var param1;
		var ctor;
		var buf;
		var dt;
		var sh;

		if ( !isndarrayLike( out ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an ndarray-like object. Value: `%s`.', out ) );
		}
		sh = out.shape;

		// Check whether we've been provided a scalar distribution parameter...
		if ( isNumber( lambda ) ) {
			// Wrap the scalar in a broadcasted ndarray...
			dt = out.dtype;
			if ( dt === 'generic' ) {
				buf = [ lambda ];
			} else {
				dt = 'float64';
				ctor = ctors( dt );
				buf = new ctor( 1 );
				buf[ 0 ] = lambda;
			}
			param1 = new basendarray( dt, buf, sh, zeros( sh.length ), 0, 'row-major' );
		} else if ( isndarrayLike( lambda ) ) {
			// Broadcast the distribution parameter to the desired shape:
			param1 = broadcastArray( lambda, sh );
		} else {
			throw new TypeError( format( 'invalid argument. Second argument must be either a scalar or an ndarray-like object. Value: `%s`.', lambda ) );
		}
		// Fill the output array with pseudorandom numbers:
		unary( [ param1, out ], prng );

		return out;
	}

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		return rand.PRNG.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rand.PRNG.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rand.PRNG.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rand.PRNG.byteLength;
	}

	/**
	* Returns the current pseudorandom number generator state.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rand.PRNG.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.PRNG.state = s;
	}
}


// EXPORTS //

module.exports = factory;
