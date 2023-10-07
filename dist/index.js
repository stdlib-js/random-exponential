"use strict";var w=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var T=w(function(be,ae){ae.exports={dtype:"float64",order:"row-major"}});var F=w(function(Le,x){
var ie=require('@stdlib/array-typed-real-float-dtypes/dist'),k=ie();k.push("generic");x.exports=k
});var D=w(function(Pe,z){
var ue=require('@stdlib/assert-is-plain-object/dist'),m=require('@stdlib/assert-has-own-property/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),A=F();function se(a,e){return ue(e)?m(e,"dtype")&&(a.dtype=e.dtype,A.indexOf(a.dtype)<0)?new TypeError(V('1eT4S',"dtype",A.join('", "'),a.dtype)):(m(e,"order")&&(a.order=e.order),m(e,"mode")&&(a.mode=e.mode),m(e,"submode")&&(a.submode=e.submode),m(e,"readonly")&&(a.readonly=e.readonly),null):new TypeError(V('1eT2V',e));}z.exports=se
});var G=w(function(Re,M){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=require('@stdlib/utils-define-nonenumerable-read-only-accessor/dist'),Y=require('@stdlib/utils-define-nonenumerable-read-write-accessor/dist'),oe=require('@stdlib/assert-is-array-like-object/dist'),S=require('@stdlib/assert-is-ndarray-like/dist'),B=require('@stdlib/assert-is-number/dist').isPrimitive,ve=require('@stdlib/utils-constant-function/dist'),de=require('@stdlib/utils-noop/dist'),W=require('@stdlib/random-base-exponential/dist'),h=require('@stdlib/array-typed-real-float-ctors/dist'),le=require('@stdlib/array-base-filled-by/dist'),C=require('@stdlib/array-base-zeros/dist'),fe=require('@stdlib/strided-base-nullary/dist'),H=require('@stdlib/ndarray-base-unary/dist'),I=require('@stdlib/ndarray-base-broadcast-array/dist'),j=require('@stdlib/ndarray-base-shape2strides/dist'),ge=require('@stdlib/ndarray-base-numel/dist'),E=require('@stdlib/ndarray-ctor/dist'),ce=require('@stdlib/ndarray-base-ctor/dist'),L=require('@stdlib/error-tools-fmtprodmsg/dist'),J=T(),K=D();function ye(){var a,e,l,P;if(e={dtype:J.dtype,order:J.order},arguments.length>0){if(a=arguments[0],l=W.factory(a),P=K(e,a),P)throw P}else l=W;return a&&a.prng?(y(t,"seed",null),y(t,"seedLength",null),Y(t,"state",ve(null),de),y(t,"stateLength",null),y(t,"byteLength",null)):(b(t,"seed",_),b(t,"seedLength",$),Y(t,"state",te,ne),b(t,"stateLength",ee),b(t,"byteLength",re)),y(t,"PRNG",l.PRNG),y(t,"assign",Z),t;function t(r,i,q){var o,u,n,d,v,f,p,R,s,g,N,c;if(!oe(r))throw new TypeError(L('1eT5o',r));if(v=ge(r),v<0)throw new TypeError(format('1eTD2'));if(c={},arguments.length>2&&(d=K(c,q),d))throw d;if(s=c.dtype||e.dtype,f=c.order||e.order,B(i))o=i,p=!0;else if(S(i))N=i.shape,N.length===0?(o=i.get(),p=!0):(o=I(i,r),p=!1);else throw new TypeError(L('1eTEI',i));if(v===0)return r.length===0?(s==="generic"?n=[0]:(u=h(s),n=new u(1)),n[0]=l(o),g=[0]):(s==="generic"?n=[]:(u=h(s),n=new u(v)),g=j(r,f)),new E(s,n,r,g,0,f,c);if(p)return s==="generic"?n=le(v,O):(u=h(s),n=new u(v),fe([n],[v],[1],O)),g=j(r,f),new E(s,n,r,g,0,f,c);return s==="generic"?n=C(v):(u=h(s),n=new u(v)),g=j(r,f),R=new E(s,n,r,g,0,f,c),H([o,R],l),R;function O(){return l(o)}}function Z(r,i){var q,o,u,n,d;if(!S(r))throw new TypeError(L('1eT5t',r));if(d=r.shape,B(i))n=r.dtype,n==="generic"?u=[i]:(n="float64",o=h(n),u=new o(1),u[0]=i),q=new ce(n,u,d,C(d.length),0,"row-major");else if(S(i))q=I(i,d);else throw new TypeError(L('1eTEI',i));return H([q,r],l),r}function _(){return t.PRNG.seed}function $(){return t.PRNG.seedLength}function ee(){return t.PRNG.stateLength}function re(){return t.PRNG.byteLength}function te(){return t.PRNG.state}function ne(r){t.PRNG.state=r}}M.exports=ye
});var U=w(function(Se,Q){
var qe=G(),we=qe();Q.exports=we
});var me=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),X=U(),he=G();me(X,"factory",he);module.exports=X;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
