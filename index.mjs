// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-exponential@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-array@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@esm/index.mjs";var L="float64",G="row-major",N=x();function P(e,t){return v(t)?w(t,"dtype")&&(e.dtype=t.dtype,N.indexOf(e.dtype)<0)?new TypeError(y("null3t","dtype",N.join('", "'),e.dtype)):(w(t,"order")&&(e.order=t.order),w(t,"mode")&&(e.mode=t.mode),w(t,"submode")&&(e.submode=t.submode),w(t,"readonly")&&(e.readonly=t.readonly),null):new TypeError(y("null2h",t))}function R(){var v,w,x,N;if(w={dtype:L,order:G},arguments.length>0){if(v=arguments[0],x=m.factory(v),N=P(w,v))throw N}else x=m;return v&&v.prng?(e(R,"seed",null),e(R,"seedLength",null),r(R,"state",d(null),o),e(R,"stateLength",null),e(R,"byteLength",null)):(t(R,"seed",T),t(R,"seedLength",k),r(R,"state",z,F),t(R,"stateLength",S),t(R,"byteLength",V)),e(R,"PRNG",x.PRNG),e(R,"assign",E),R;function R(e,t,r){var d,o,m,b,v,L,G,N,R,E;if(!s(e))throw new TypeError(y("null62",e));if((b=f(e))<0)throw new TypeError("invalid argument. First argument must be an array-like object containing nonnegative integers.");if(E={},arguments.length>2&&(m=P(E,r)))throw m;if(N=E.dtype||w.dtype,v=E.order||w.order,i(t))d=t,L=!0;else{if(!n(t))throw new TypeError(y("invalid argument. Second argument must be either a scalar or an ndarray-like object. Value: `%s`.",t));0===t.shape.length?(d=t.get(),L=!0):(d=c(t,e),L=!1)}return 0===b?(0===e.length?((o="generic"===N?[0]:new(a(N))(1))[0]=x(d),R=[0]):(o="generic"===N?[]:new(a(N))(b),R=u(e,v)),new g(N,o,e,R,0,v,E)):L?("generic"===N?o=l(b,T):(o=new(a(N))(b),j([o],[b],[1],T)),R=u(e,v),new g(N,o,e,R,0,v,E)):(o="generic"===N?p(b):new(a(N))(b),R=u(e,v),G=new g(N,o,e,R,0,v,E),h([d,G],x),G);function T(){return x(d)}}function E(e,t){var r,s,d,o;if(!n(e))throw new TypeError(y("null67",e));if(o=e.shape,i(t))"generic"===(d=e.dtype)?s=[t]:(s=new(a(d="float64"))(1))[0]=t,r=new b(d,s,o,p(o.length),0,"row-major");else{if(!n(t))throw new TypeError(y("invalid argument. Second argument must be either a scalar or an ndarray-like object. Value: `%s`.",t));r=c(t,o)}return h([r,e],x),e}function T(){return R.PRNG.seed}function k(){return R.PRNG.seedLength}function S(){return R.PRNG.stateLength}function V(){return R.PRNG.byteLength}function z(){return R.PRNG.state}function F(e){R.PRNG.state=e}}N.push("generic");var E=R();e(E,"factory",R);export{E as default,R as factory};
//# sourceMappingURL=index.mjs.map