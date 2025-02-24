// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.2-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-exponential@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-ctors@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled-by@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zeros@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-nullary@v0.3.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-array@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@v0.2.2-esm/index.mjs";var T="float64",E="row-major",L=x();function G(e,t){return u(t)?w(t,"dtype")&&(e.dtype=t.dtype,L.indexOf(e.dtype)<0)?new TypeError(b("1eT4S","dtype",L.join('", "'),e.dtype)):(w(t,"order")&&(e.order=t.order),w(t,"mode")&&(e.mode=t.mode),w(t,"submode")&&(e.submode=t.submode),w(t,"readonly")&&(e.readonly=t.readonly),null):new TypeError(b("1eT2V",t))}function N(){var u,w,x,L;if(w={dtype:T,order:E},arguments.length>0){if(u=arguments[0],x=m.factory(u),L=G(w,u))throw L}else x=m;return u&&u.prng?(e(N,"seed",null),e(N,"seedLength",null),r(N,"state",i(null),o),e(N,"stateLength",null),e(N,"byteLength",null)):(t(N,"seed",(function(){return N.PRNG.seed})),t(N,"seedLength",(function(){return N.PRNG.seedLength})),r(N,"state",(function(){return N.PRNG.state}),(function(e){N.PRNG.state=e})),t(N,"stateLength",(function(){return N.PRNG.stateLength})),t(N,"byteLength",(function(){return N.PRNG.byteLength}))),e(N,"PRNG",x.PRNG),e(N,"assign",(function(e,t){var r,s,i,o;if(!n(e))throw new TypeError(b("1eT5t",e));if(o=e.shape,d(t))"generic"===(i=e.dtype)?s=[t]:(s=new(l(i="float64"))(1))[0]=t,r=new g(i,s,o,p(o.length),0,"row-major");else{if(!n(t))throw new TypeError(b("1eTEI",t));r=f(t,o)}return h([r,e],x),e})),N;function N(e,t,r){var i,o,m,g,u,T,E,L,N,P;if(!s(e))throw new TypeError(b("1eT5o",e));if((g=v(e))<0)throw new TypeError(b("1eTD2"));if(P={},arguments.length>2&&(m=G(P,r)))throw m;if(L=P.dtype||w.dtype,u=P.order||w.order,d(t))i=t,T=!0;else{if(!n(t))throw new TypeError(b("1eTEI",t));0===t.shape.length?(i=t.get(),T=!0):(i=f(t,e),T=!1)}return 0===g?(0===e.length?((o="generic"===L?[0]:new(l(L))(1))[0]=x(i),N=[0]):(o="generic"===L?[]:new(l(L))(g),N=c(e,u)),new y(L,o,e,N,0,u,P)):T?("generic"===L?o=a(g,R):(o=new(l(L))(g),j([o],[g],[1],R)),N=c(e,u),new y(L,o,e,N,0,u,P)):(o="generic"===L?p(g):new(l(L))(g),N=c(e,u),E=new y(L,o,e,N,0,u,P),h([i,E],x),E);function R(){return x(i)}}}L.push("generic");var P=N();e(P,"factory",N);export{P as default,N as factory};
//# sourceMappingURL=index.mjs.map
