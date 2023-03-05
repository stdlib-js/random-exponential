<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Exponential Random Numbers

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.



<section class="usage">

## Usage

```javascript
import exponential from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-exponential@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-exponential@esm/index.mjs';
```

#### exponential( shape, lambda\[, options] )

Returns an [ndarray][@stdlib/ndarray/ctor] containing pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.

```javascript
var arr = exponential( [ 3, 3 ], 2.0 );
// returns <ndarray>
```

The function has the following parameters:

-   **shape**: output array shape.
-   **lambda**: rate parameter.
-   **options**: function options.

If provided an empty `shape`, the function returns a zero-dimensional [ndarray][@stdlib/ndarray/ctor].

```javascript
var arr = exponential( [], 2.0 );
// returns <ndarray>

var shape = arr.shape;
// returns []

var v = arr.get();
// returns <number>
```

Distribution parameters may be either scalars or [ndarrays][@stdlib/ndarray/ctor]. When providing an [ndarray][@stdlib/ndarray/ctor], the [ndarray][@stdlib/ndarray/ctor] must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the specified output array `shape`.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var lambda = array( [ [ [ 2.0 ] ], [ [ 5.0 ] ] ] );
// returns <ndarray>

var shape = lambda.shape;
// returns [ 2, 1, 1 ]

var arr = exponential( [ 2, 3, 3 ], lambda );
// returns <ndarray>
```

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.
-   **order**: array order (i.e., memory layout), which is either `row-major` (C-style) or `column-major` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed array dimensions. For a list of supported modes, see [`ndarray`][@stdlib/ndarray/ctor]. Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions. If provided fewer modes than dimensions, an [ndarray][@stdlib/ndarray/ctor] instance recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: `boolean` indicating whether an array should be **read-only**. Default: `false`.

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a `float64` data type. To return an [ndarray][@stdlib/ndarray/ctor] having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var arr = exponential( [ 3, 3 ], 2.0, opts );
// returns <ndarray>

var dt = arr.dtype;
// returns 'generic'
```

#### exponential.assign( out, lambda )

Fills an [ndarray][@stdlib/ndarray/ctor] with pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.

```javascript
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@esm/index.mjs';

var arr = zeros( [ 3, 3 ] );
// returns <ndarray>

var out = exponential.assign( arr, 2.0 );
// returns <ndarray>

var bool = ( out === arr );
// returns true
```

Distribution parameters may be either scalars or [ndarrays][@stdlib/ndarray/ctor]. When providing an [ndarray][@stdlib/ndarray/ctor], the [ndarray][@stdlib/ndarray/ctor] must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output [ndarray][@stdlib/ndarray/ctor].

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@esm/index.mjs';

var lambda = array( [ [ [ 2.0 ] ], [ [ 5.0 ] ] ] );
// returns <ndarray>

var shape = lambda.shape;
// returns [ 2, 1, 1 ]

var arr = zeros( [ 2, 3, 3 ] );
// returns <ndarray>

var out = exponential.assign( arr, lambda );
// returns <ndarray>
```

#### exponential.factory( \[options] )

Returns a function for generating pseudorandom numbers drawn from an [exponential][@stdlib/random/base/exponential] distribution.

```javascript
var random = exponential.factory();

var out = random( [ 3, 3 ], 2.0 );
// returns <ndarray>

var sh = out.shape;
// returns [ 3, 3 ]
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.
-   **dtype**: default output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic". Default: `'float64'`.
-   **order**: default array order (i.e., memory layout), which is either `row-major` (C-style) or `column-major` (Fortran-style). Default: `'row-major'`.
-   **mode**: default specifying how to handle indices which exceed array dimensions. For a list of supported modes, see [`ndarray`][@stdlib/ndarray/ctor]. Default: `'throw'`.
-   **submode**: default specifying for each dimension how to handle subscripts which exceed array dimensions. If the number of modes is less than the number of dimensions, an [ndarray][@stdlib/ndarray/ctor] instance recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: default indicating whether an array should be **read-only**. Default: `false`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var opts = {
    'prng': minstd.normalized
};
var random = exponential.factory( opts );

var out = random( [ 3, 3 ], 2.0 );
// returns <ndarray>
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = exponential.factory( opts );

var out = random( [ 3, 3 ], 2.0, opts );
// returns <ndarray>
```

The returned function accepts the following `options`, each of which overrides the respective default:

-   **dtype**: output array data type. Must be a [real-valued floating-point data type][@stdlib/array/typed-real-float-dtypes] or "generic".
-   **order**: array order (i.e., memory layout), which is either `row-major` (C-style) or `column-major` (Fortran-style).
-   **mode**: specifies how to handle indices which exceed array dimensions. For a list of supported modes, see [`ndarray`][@stdlib/ndarray/ctor].
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions. If the number of modes is less than the number of dimensions, an [ndarray][@stdlib/ndarray/ctor] instance recycles modes using modulo arithmetic.
-   **readonly**: `boolean` indicating whether an array should be **read-only**.

To override the default output array data type, set the `dtype` option.

```javascript
var random = exponential.factory();

var out = random( [ 3, 3 ], 2.0 );
// returns <ndarray>

var dt = out.dtype;
// returns 'float64'

var opts = {
    'dtype': 'generic'
};
out = random( [ 3, 3 ], 2.0, opts );
// returns <ndarray>

dt = out.dtype;
// returns 'generic'
```

#### exponential.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = exponential.PRNG;
// returns <Function>
```

#### exponential.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = exponential.seed;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});

var seed = random.seed;
// returns null
```

#### exponential.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = exponential.seedLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});

var len = random.seedLength;
// returns null
```

#### exponential.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = exponential.state;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});

var state = random.state;
// returns null
```

#### exponential.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = exponential.stateLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});

var len = random.stateLength;
// returns null
```

#### exponential.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = exponential.byteLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle' ).normalized;

var random = exponential.factory({
    'prng': minstd
});

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the `factory` method does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import logEach from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@esm/index.mjs';
import toArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import exponential from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-exponential@esm/index.mjs';

// Create a function for generating random arrays originating from the same state:
var random = exponential.factory({
    'state': exponential.state,
    'copy': true
});

// Generate 3 one-dimensional arrays:
var x1 = random( [ 5 ], 2.0 );
var x2 = random( [ 5 ], 2.0 );
var x3 = random( [ 5 ], 2.0 );

// Print the contents:
logEach( '%f, %f, %f', toArray( x1 ), toArray( x2 ), toArray( x3 ) );

// Create another function for generating random arrays with the original state:
random = exponential.factory({
    'state': exponential.state,
    'copy': true
});

// Generate a two-dimensional array which replicates the above pseudorandom number generation sequence:
var x4 = random( [ 3, 5 ], 2.0 );

// Convert to a list of nested arrays:
var arr = toArray( x4 );

// Print the contents:
console.log( '' );
logEach( '%f, %f, %f', arr[ 0 ], arr[ 1 ], arr[ 2 ] );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-exponential.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-exponential

[test-image]: https://github.com/stdlib-js/random-exponential/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-exponential/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-exponential/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-exponential?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-exponential.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-exponential/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-exponential/tree/deno
[umd-url]: https://github.com/stdlib-js/random-exponential/tree/umd
[esm-url]: https://github.com/stdlib-js/random-exponential/tree/esm
[branches-url]: https://github.com/stdlib-js/random-exponential/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-exponential/main/LICENSE

[@stdlib/random/base/exponential]: https://github.com/stdlib-js/random-base-exponential/tree/esm

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array-typed-real-float-dtypes/tree/esm

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/esm

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/esm

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/esm

</section>

<!-- /.links -->
