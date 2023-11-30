import{s as _,j as p,G as Ve,r as u,L as Mt,N as Rt,g as Lt,u as Pt,c as kt,O as Dt}from"./index-6553302e.js";import{I as Nt,A as pr,a as Bt}from"./index.esm-b547c335.js";import Vt from"./Loader-1fc127eb.js";import{Q as Ut}from"./react-toastify.esm-59dbd6c9.js";const zt=_.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Ue=_.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,Ht=_.footer`
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  a {
    color: #dfe3ee;
    transition: var(--trans);

    &:hover {
      color: #f7f7f7;
    }
  }
`;function Gt(){return p.jsx(Ht,{children:p.jsx(Ue,{children:p.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const Wt=_.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,Kt=_(Ue)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`,Yt=_.button`
  order: 5;
  margin-top: 0;
  padding: 0px;
  border-width: 0;
  cursor: pointer;
  display: block;
  flex-basis: auto;
  align-items: center;
  background-color: transparent;
  transition: var(--trans);

  svg {
    display: block;
    width: 40px;
    height: 40px;
    stroke: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      stroke: rgba(var(--bg-primary), 0.7);
    }
  }

  @media (width <= 576px) {
    display: none;
  }
`;function Zt(){return p.jsx(Yt,{type:"button",children:p.jsx(Nt,{})})}function qt(e){return Ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(e)}const Xt=_.div`
  order: 1;
  flex-grow: 0;
  margin-right: 25px;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }

    a {
      color: rgba(var(--bg-primary), 0.7);
    }
  }

  a {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`;function Jt(){const[e,r]=u.useState(window.innerWidth);return u.useEffect(()=>{const t=()=>{r(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),p.jsx(Xt,{children:p.jsxs(Mt,{to:"/",children:[p.jsx(qt,{}),e>=600&&p.jsx("p",{children:"Movies"})]})})}const Qt=_.label`
  order: 6;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;

  &:hover span,
  &:hover span::before,
  &:hover span::after {
    background-color: rgba(var(--bg-primary), 0.7);
  }

  &:hover input:checked span::before {
    width: 10px;
  }

  input {
    opacity: 0;
    display: none;
    pointer-events: none;

    &:checked ~ span {
      background-color: transparent;
    }

    &:checked ~ span::before {
      top: 0;
      transform: rotate(45deg);
    }

    &:checked ~ span::after {
      top: 0;
      transform: rotate(-45deg);
    }

    &:checked:hover ~ span {
      transform: rotate(-90deg);
    }
  }

  span {
    position: relative;
    display: block;
    width: 25px;
    height: 3px;
    background-color: rgba(var(--bg-primary), 1);
    transition: var(--trans);

    &::after,
    &:before {
      position: absolute;
      left: 0;
      width: 25px;
      height: 100%;
      background-color: rgba(var(--bg-primary), 1);
      transition: var(--trans);
      content: '';
    }

    &::after {
      top: 8px;
    }

    &:before {
      top: -8px;
    }
  }
`;function en(){const[e,r]=u.useState(!1),t=n=>{r(n.target.checked)};return p.jsxs(Qt,{htmlFor:"menu-check",children:[p.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:e,onChange:t}),p.jsx("span",{})]})}const rn=_.nav`
  display: block;
  margin-top: 0;
  position: static;
  order: 2;
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    gap: 5px;
  }
`,hr=_(Rt)`
  display: block;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 8px;
  order: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  color: rgba(var(--bg-primary), 1);
  transition: var(--trans);

  &:hover {
    border: 2px solid rgba(var(--bg-primary), 1);

    &.active {
      background-color: rgba(var(--bg-primary), 0.7);
      border: 2px solid rgba(var(--bg-primary), 0);
    }
  }

  &.active {
    background-color: rgba(var(--bg-primary), 1);
    color: rgba(var(--accent), 1);
  }
  /* @media (width <= 576px) {
    display: none;
  } */
`;function tn(){return p.jsx(rn,{children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(hr,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(hr,{to:"/movies",children:"Movies"})})]})})}var nn=function(r){return an(r)&&!on(r)};function an(e){return!!e&&typeof e=="object"}function on(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||un(e)}var sn=typeof Symbol=="function"&&Symbol.for,cn=sn?Symbol.for("react.element"):60103;function un(e){return e.$$typeof===cn}function ln(e){return Array.isArray(e)?[]:{}}function ge(e,r){return r.clone!==!1&&r.isMergeableObject(e)?oe(ln(e),e,r):e}function fn(e,r,t){return e.concat(r).map(function(n){return ge(n,t)})}function dn(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=ge(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=ge(r[i],t):n[i]=oe(e[i],r[i],t)}),n}function oe(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||fn,t.isMergeableObject=t.isMergeableObject||nn;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):dn(e,r,t):ge(r,t)}oe.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return oe(n,i,t)},{})};var Re=oe,pn=typeof global=="object"&&global&&global.Object===Object&&global;const zr=pn;var hn=typeof self=="object"&&self&&self.Object===Object&&self,gn=zr||hn||Function("return this")();const D=gn;var vn=D.Symbol;const V=vn;var Hr=Object.prototype,bn=Hr.hasOwnProperty,yn=Hr.toString,ae=V?V.toStringTag:void 0;function mn(e){var r=bn.call(e,ae),t=e[ae];try{e[ae]=void 0;var n=!0}catch{}var i=yn.call(e);return n&&(r?e[ae]=t:delete e[ae]),i}var Tn=Object.prototype,Sn=Tn.toString;function En(e){return Sn.call(e)}var xn="[object Null]",jn="[object Undefined]",gr=V?V.toStringTag:void 0;function Y(e){return e==null?e===void 0?jn:xn:gr&&gr in Object(e)?mn(e):En(e)}function Gr(e,r){return function(t){return e(r(t))}}var wn=Gr(Object.getPrototypeOf,Object);const ze=wn;function Z(e){return e!=null&&typeof e=="object"}var _n="[object Object]",An=Function.prototype,Cn=Object.prototype,Wr=An.toString,$n=Cn.hasOwnProperty,On=Wr.call(Object);function vr(e){if(!Z(e)||Y(e)!=_n)return!1;var r=ze(e);if(r===null)return!0;var t=$n.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Wr.call(t)==On}var br=Array.isArray,yr=Object.keys,In=Object.prototype.hasOwnProperty,Fn=typeof Element<"u";function Le(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=br(e),n=br(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Le(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var h=e instanceof Date,v=r instanceof Date;if(h!=v)return!1;if(h&&v)return e.getTime()==r.getTime();var y=e instanceof RegExp,$=r instanceof RegExp;if(y!=$)return!1;if(y&&$)return e.toString()==r.toString();var O=yr(e);if(o=O.length,o!==yr(r).length)return!1;for(i=o;i--!==0;)if(!In.call(r,O[i]))return!1;if(Fn&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&e.$$typeof)&&!Le(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var Mn=function(r,t){try{return Le(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Lt(Mn);var Rn=!0;function Ln(e,r){if(!Rn){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Pn(){this.__data__=[],this.size=0}function Kr(e,r){return e===r||e!==e&&r!==r}function ve(e,r){for(var t=e.length;t--;)if(Kr(e[t][0],r))return t;return-1}var kn=Array.prototype,Dn=kn.splice;function Nn(e){var r=this.__data__,t=ve(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():Dn.call(r,t,1),--this.size,!0}function Bn(e){var r=this.__data__,t=ve(r,e);return t<0?void 0:r[t][1]}function Vn(e){return ve(this.__data__,e)>-1}function Un(e,r){var t=this.__data__,n=ve(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function B(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}B.prototype.clear=Pn;B.prototype.delete=Nn;B.prototype.get=Bn;B.prototype.has=Vn;B.prototype.set=Un;function zn(){this.__data__=new B,this.size=0}function Hn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function Gn(e){return this.__data__.get(e)}function Wn(e){return this.__data__.has(e)}function ue(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Kn="[object AsyncFunction]",Yn="[object Function]",Zn="[object GeneratorFunction]",qn="[object Proxy]";function Yr(e){if(!ue(e))return!1;var r=Y(e);return r==Yn||r==Zn||r==Kn||r==qn}var Xn=D["__core-js_shared__"];const Oe=Xn;var mr=function(){var e=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Jn(e){return!!mr&&mr in e}var Qn=Function.prototype,ea=Qn.toString;function q(e){if(e!=null){try{return ea.call(e)}catch{}try{return e+""}catch{}}return""}var ra=/[\\^$.*+?()[\]{}|]/g,ta=/^\[object .+?Constructor\]$/,na=Function.prototype,aa=Object.prototype,ia=na.toString,oa=aa.hasOwnProperty,sa=RegExp("^"+ia.call(oa).replace(ra,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ca(e){if(!ue(e)||Jn(e))return!1;var r=Yr(e)?sa:ta;return r.test(q(e))}function ua(e,r){return e==null?void 0:e[r]}function X(e,r){var t=ua(e,r);return ca(t)?t:void 0}var la=X(D,"Map");const se=la;var fa=X(Object,"create");const ce=fa;function da(){this.__data__=ce?ce(null):{},this.size=0}function pa(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var ha="__lodash_hash_undefined__",ga=Object.prototype,va=ga.hasOwnProperty;function ba(e){var r=this.__data__;if(ce){var t=r[e];return t===ha?void 0:t}return va.call(r,e)?r[e]:void 0}var ya=Object.prototype,ma=ya.hasOwnProperty;function Ta(e){var r=this.__data__;return ce?r[e]!==void 0:ma.call(r,e)}var Sa="__lodash_hash_undefined__";function Ea(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ce&&r===void 0?Sa:r,this}function K(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}K.prototype.clear=da;K.prototype.delete=pa;K.prototype.get=ba;K.prototype.has=Ta;K.prototype.set=Ea;function xa(){this.size=0,this.__data__={hash:new K,map:new(se||B),string:new K}}function ja(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function be(e,r){var t=e.__data__;return ja(r)?t[typeof r=="string"?"string":"hash"]:t.map}function wa(e){var r=be(this,e).delete(e);return this.size-=r?1:0,r}function _a(e){return be(this,e).get(e)}function Aa(e){return be(this,e).has(e)}function Ca(e,r){var t=be(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=xa;U.prototype.delete=wa;U.prototype.get=_a;U.prototype.has=Aa;U.prototype.set=Ca;var $a=200;function Oa(e,r){var t=this.__data__;if(t instanceof B){var n=t.__data__;if(!se||n.length<$a-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function te(e){var r=this.__data__=new B(e);this.size=r.size}te.prototype.clear=zn;te.prototype.delete=Hn;te.prototype.get=Gn;te.prototype.has=Wn;te.prototype.set=Oa;function Ia(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var Fa=function(){try{var e=X(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Tr=Fa;function Zr(e,r,t){r=="__proto__"&&Tr?Tr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Ma=Object.prototype,Ra=Ma.hasOwnProperty;function qr(e,r,t){var n=e[r];(!(Ra.call(e,r)&&Kr(n,t))||t===void 0&&!(r in e))&&Zr(e,r,t)}function ye(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var h=r[o],v=n?n(t[h],e[h],h,t,e):void 0;v===void 0&&(v=e[h]),i?Zr(t,h,v):qr(t,h,v)}return t}function La(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Pa="[object Arguments]";function Sr(e){return Z(e)&&Y(e)==Pa}var Xr=Object.prototype,ka=Xr.hasOwnProperty,Da=Xr.propertyIsEnumerable,Na=Sr(function(){return arguments}())?Sr:function(e){return Z(e)&&ka.call(e,"callee")&&!Da.call(e,"callee")};const Ba=Na;var Va=Array.isArray;const le=Va;function Ua(){return!1}var Jr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Er=Jr&&typeof module=="object"&&module&&!module.nodeType&&module,za=Er&&Er.exports===Jr,xr=za?D.Buffer:void 0,Ha=xr?xr.isBuffer:void 0,Ga=Ha||Ua;const Qr=Ga;var Wa=9007199254740991,Ka=/^(?:0|[1-9]\d*)$/;function Ya(e,r){var t=typeof e;return r=r??Wa,!!r&&(t=="number"||t!="symbol"&&Ka.test(e))&&e>-1&&e%1==0&&e<r}var Za=9007199254740991;function et(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Za}var qa="[object Arguments]",Xa="[object Array]",Ja="[object Boolean]",Qa="[object Date]",ei="[object Error]",ri="[object Function]",ti="[object Map]",ni="[object Number]",ai="[object Object]",ii="[object RegExp]",oi="[object Set]",si="[object String]",ci="[object WeakMap]",ui="[object ArrayBuffer]",li="[object DataView]",fi="[object Float32Array]",di="[object Float64Array]",pi="[object Int8Array]",hi="[object Int16Array]",gi="[object Int32Array]",vi="[object Uint8Array]",bi="[object Uint8ClampedArray]",yi="[object Uint16Array]",mi="[object Uint32Array]",E={};E[fi]=E[di]=E[pi]=E[hi]=E[gi]=E[vi]=E[bi]=E[yi]=E[mi]=!0;E[qa]=E[Xa]=E[ui]=E[Ja]=E[li]=E[Qa]=E[ei]=E[ri]=E[ti]=E[ni]=E[ai]=E[ii]=E[oi]=E[si]=E[ci]=!1;function Ti(e){return Z(e)&&et(e.length)&&!!E[Y(e)]}function He(e){return function(r){return e(r)}}var rt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ie=rt&&typeof module=="object"&&module&&!module.nodeType&&module,Si=ie&&ie.exports===rt,Ie=Si&&zr.process,Ei=function(){try{var e=ie&&ie.require&&ie.require("util").types;return e||Ie&&Ie.binding&&Ie.binding("util")}catch{}}();const re=Ei;var jr=re&&re.isTypedArray,xi=jr?He(jr):Ti;const ji=xi;var wi=Object.prototype,_i=wi.hasOwnProperty;function tt(e,r){var t=le(e),n=!t&&Ba(e),i=!t&&!n&&Qr(e),o=!t&&!n&&!i&&ji(e),s=t||n||i||o,h=s?La(e.length,String):[],v=h.length;for(var y in e)(r||_i.call(e,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ya(y,v)))&&h.push(y);return h}var Ai=Object.prototype;function Ge(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Ai;return e===t}var Ci=Gr(Object.keys,Object);const $i=Ci;var Oi=Object.prototype,Ii=Oi.hasOwnProperty;function Fi(e){if(!Ge(e))return $i(e);var r=[];for(var t in Object(e))Ii.call(e,t)&&t!="constructor"&&r.push(t);return r}function nt(e){return e!=null&&et(e.length)&&!Yr(e)}function We(e){return nt(e)?tt(e):Fi(e)}function Mi(e,r){return e&&ye(r,We(r),e)}function Ri(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Li=Object.prototype,Pi=Li.hasOwnProperty;function ki(e){if(!ue(e))return Ri(e);var r=Ge(e),t=[];for(var n in e)n=="constructor"&&(r||!Pi.call(e,n))||t.push(n);return t}function Ke(e){return nt(e)?tt(e,!0):ki(e)}function Di(e,r){return e&&ye(r,Ke(r),e)}var at=typeof exports=="object"&&exports&&!exports.nodeType&&exports,wr=at&&typeof module=="object"&&module&&!module.nodeType&&module,Ni=wr&&wr.exports===at,_r=Ni?D.Buffer:void 0,Ar=_r?_r.allocUnsafe:void 0;function Bi(e,r){if(r)return e.slice();var t=e.length,n=Ar?Ar(t):new e.constructor(t);return e.copy(n),n}function it(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}function Vi(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function ot(){return[]}var Ui=Object.prototype,zi=Ui.propertyIsEnumerable,Cr=Object.getOwnPropertySymbols,Hi=Cr?function(e){return e==null?[]:(e=Object(e),Vi(Cr(e),function(r){return zi.call(e,r)}))}:ot;const Ye=Hi;function Gi(e,r){return ye(e,Ye(e),r)}function st(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Wi=Object.getOwnPropertySymbols,Ki=Wi?function(e){for(var r=[];e;)st(r,Ye(e)),e=ze(e);return r}:ot;const ct=Ki;function Yi(e,r){return ye(e,ct(e),r)}function ut(e,r,t){var n=r(e);return le(e)?n:st(n,t(e))}function Zi(e){return ut(e,We,Ye)}function qi(e){return ut(e,Ke,ct)}var Xi=X(D,"DataView");const Pe=Xi;var Ji=X(D,"Promise");const ke=Ji;var Qi=X(D,"Set");const De=Qi;var eo=X(D,"WeakMap");const Ne=eo;var $r="[object Map]",ro="[object Object]",Or="[object Promise]",Ir="[object Set]",Fr="[object WeakMap]",Mr="[object DataView]",to=q(Pe),no=q(se),ao=q(ke),io=q(De),oo=q(Ne),G=Y;(Pe&&G(new Pe(new ArrayBuffer(1)))!=Mr||se&&G(new se)!=$r||ke&&G(ke.resolve())!=Or||De&&G(new De)!=Ir||Ne&&G(new Ne)!=Fr)&&(G=function(e){var r=Y(e),t=r==ro?e.constructor:void 0,n=t?q(t):"";if(n)switch(n){case to:return Mr;case no:return $r;case ao:return Or;case io:return Ir;case oo:return Fr}return r});const Ze=G;var so=Object.prototype,co=so.hasOwnProperty;function uo(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&co.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var lo=D.Uint8Array;const Rr=lo;function qe(e){var r=new e.constructor(e.byteLength);return new Rr(r).set(new Rr(e)),r}function fo(e,r){var t=r?qe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var po=/\w*$/;function ho(e){var r=new e.constructor(e.source,po.exec(e));return r.lastIndex=e.lastIndex,r}var Lr=V?V.prototype:void 0,Pr=Lr?Lr.valueOf:void 0;function go(e){return Pr?Object(Pr.call(e)):{}}function vo(e,r){var t=r?qe(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var bo="[object Boolean]",yo="[object Date]",mo="[object Map]",To="[object Number]",So="[object RegExp]",Eo="[object Set]",xo="[object String]",jo="[object Symbol]",wo="[object ArrayBuffer]",_o="[object DataView]",Ao="[object Float32Array]",Co="[object Float64Array]",$o="[object Int8Array]",Oo="[object Int16Array]",Io="[object Int32Array]",Fo="[object Uint8Array]",Mo="[object Uint8ClampedArray]",Ro="[object Uint16Array]",Lo="[object Uint32Array]";function Po(e,r,t){var n=e.constructor;switch(r){case wo:return qe(e);case bo:case yo:return new n(+e);case _o:return fo(e,t);case Ao:case Co:case $o:case Oo:case Io:case Fo:case Mo:case Ro:case Lo:return vo(e,t);case mo:return new n;case To:case xo:return new n(e);case So:return ho(e);case Eo:return new n;case jo:return go(e)}}var kr=Object.create,ko=function(){function e(){}return function(r){if(!ue(r))return{};if(kr)return kr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Do=ko;function No(e){return typeof e.constructor=="function"&&!Ge(e)?Do(ze(e)):{}}var Bo="[object Map]";function Vo(e){return Z(e)&&Ze(e)==Bo}var Dr=re&&re.isMap,Uo=Dr?He(Dr):Vo;const zo=Uo;var Ho="[object Set]";function Go(e){return Z(e)&&Ze(e)==Ho}var Nr=re&&re.isSet,Wo=Nr?He(Nr):Go;const Ko=Wo;var Yo=1,Zo=2,qo=4,lt="[object Arguments]",Xo="[object Array]",Jo="[object Boolean]",Qo="[object Date]",es="[object Error]",ft="[object Function]",rs="[object GeneratorFunction]",ts="[object Map]",ns="[object Number]",dt="[object Object]",as="[object RegExp]",is="[object Set]",os="[object String]",ss="[object Symbol]",cs="[object WeakMap]",us="[object ArrayBuffer]",ls="[object DataView]",fs="[object Float32Array]",ds="[object Float64Array]",ps="[object Int8Array]",hs="[object Int16Array]",gs="[object Int32Array]",vs="[object Uint8Array]",bs="[object Uint8ClampedArray]",ys="[object Uint16Array]",ms="[object Uint32Array]",S={};S[lt]=S[Xo]=S[us]=S[ls]=S[Jo]=S[Qo]=S[fs]=S[ds]=S[ps]=S[hs]=S[gs]=S[ts]=S[ns]=S[dt]=S[as]=S[is]=S[os]=S[ss]=S[vs]=S[bs]=S[ys]=S[ms]=!0;S[es]=S[ft]=S[cs]=!1;function he(e,r,t,n,i,o){var s,h=r&Yo,v=r&Zo,y=r&qo;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ue(e))return e;var $=le(e);if($){if(s=uo(e),!h)return it(e,s)}else{var O=Ze(e),f=O==ft||O==rs;if(Qr(e))return Bi(e,h);if(O==dt||O==lt||f&&!i){if(s=v||f?{}:No(e),!h)return v?Yi(e,Di(s,e)):Gi(e,Mi(s,e))}else{if(!S[O])return i?e:{};s=Po(e,O,h)}}o||(o=new te);var w=o.get(e);if(w)return w;o.set(e,s),Ko(e)?e.forEach(function(C){s.add(he(C,r,t,C,e,o))}):zo(e)&&e.forEach(function(C,j){s.set(j,he(C,r,t,j,e,o))});var R=y?v?qi:Zi:v?Ke:We,I=$?void 0:R(e);return Ia(I||e,function(C,j){I&&(j=C,C=e[j]),qr(s,j,he(C,r,t,j,e,o))}),s}var Ts=4;function Br(e){return he(e,Ts)}function pt(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var Ss="[object Symbol]";function Xe(e){return typeof e=="symbol"||Z(e)&&Y(e)==Ss}var Es="Expected a function";function Je(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Es);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Je.Cache||U),t}Je.Cache=U;var xs=500;function js(e){var r=Je(e,function(n){return t.size===xs&&t.clear(),n}),t=r.cache;return r}var ws=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_s=/\\(\\)?/g,As=js(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(ws,function(t,n,i,o){r.push(i?o.replace(_s,"$1"):n||t)}),r});const Cs=As;var $s=1/0;function Os(e){if(typeof e=="string"||Xe(e))return e;var r=e+"";return r=="0"&&1/e==-$s?"-0":r}var Is=1/0,Vr=V?V.prototype:void 0,Ur=Vr?Vr.toString:void 0;function ht(e){if(typeof e=="string")return e;if(le(e))return pt(e,ht)+"";if(Xe(e))return Ur?Ur.call(e):"";var r=e+"";return r=="0"&&1/e==-Is?"-0":r}function Fs(e){return e==null?"":ht(e)}function gt(e){return le(e)?pt(e,Os):Xe(e)?[e]:it(Cs(Fs(e)))}function x(){return x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},x.apply(this,arguments)}function ee(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var me=u.createContext(void 0);me.displayName="FormikContext";var Ms=me.Provider;me.Consumer;function vt(){var e=u.useContext(me);return e||Ln(!1),e}var M=function(r){return typeof r=="function"},Te=function(r){return r!==null&&typeof r=="object"},Rs=function(r){return String(Math.floor(Number(r)))===r},Fe=function(r){return Object.prototype.toString.call(r)==="[object String]"},Ls=function(r){return u.Children.count(r)===0},Me=function(r){return Te(r)&&M(r.then)};function F(e,r,t,n){n===void 0&&(n=0);for(var i=gt(r);e&&n<i.length;)e=e[i[n++]];return n!==i.length&&!e||e===void 0?t:e}function W(e,r,t){for(var n=Br(e),i=n,o=0,s=gt(r);o<s.length-1;o++){var h=s[o],v=F(e,s.slice(0,o+1));if(v&&(Te(v)||Array.isArray(v)))i=i[h]=Br(v);else{var y=s[o+1];i=i[h]=Rs(y)&&Number(y)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function bt(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],h=e[s];Te(h)?t.get(h)||(t.set(h,!0),n[s]=Array.isArray(h)?[]:{},bt(h,r,t,n[s])):n[s]=r}return n}function Ps(e,r){switch(r.type){case"SET_VALUES":return x({},e,{values:r.payload});case"SET_TOUCHED":return x({},e,{touched:r.payload});case"SET_ERRORS":return H(e.errors,r.payload)?e:x({},e,{errors:r.payload});case"SET_STATUS":return x({},e,{status:r.payload});case"SET_ISSUBMITTING":return x({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return x({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return x({},e,{values:W(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return x({},e,{touched:W(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return x({},e,{errors:W(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return x({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return x({},e,{touched:bt(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return x({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return x({},e,{isSubmitting:!1});default:return e}}var z={},pe={};function ks(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,h=e.isInitialValid,v=e.enableReinitialize,y=v===void 0?!1:v,$=e.onSubmit,O=ee(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=x({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:$},O),w=u.useRef(f.initialValues),R=u.useRef(f.initialErrors||z),I=u.useRef(f.initialTouched||pe),C=u.useRef(f.initialStatus),j=u.useRef(!1),L=u.useRef({});u.useEffect(function(){return j.current=!0,function(){j.current=!1}},[]);var Se=u.useState(0),Ee=Se[1],fe=u.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pe,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fe.current,m=u.useCallback(function(a){var c=fe.current;fe.current=Ps(c,a),c!==fe.current&&Ee(function(l){return l+1})},[]),Qe=u.useCallback(function(a,c){return new Promise(function(l,d){var g=f.validate(a,c);g==null?l(z):Me(g)?g.then(function(b){l(b||z)},function(b){d(b)}):l(g)})},[f.validate]),xe=u.useCallback(function(a,c){var l=f.validationSchema,d=M(l)?l(c):l,g=c&&d.validateAt?d.validateAt(c,a):Bs(a,d);return new Promise(function(b,A){g.then(function(){b(z)},function(N){N.name==="ValidationError"?b(Ns(N)):A(N)})})},[f.validationSchema]),er=u.useCallback(function(a,c){return new Promise(function(l){return l(L.current[a].validate(c))})},[]),rr=u.useCallback(function(a){var c=Object.keys(L.current).filter(function(d){return M(L.current[d].validate)}),l=c.length>0?c.map(function(d){return er(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(g,b,A){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(g=W(g,c[A],b)),g},{})})},[er]),Tt=u.useCallback(function(a){return Promise.all([rr(a),f.validationSchema?xe(a):{},f.validate?Qe(a):{}]).then(function(c){var l=c[0],d=c[1],g=c[2],b=Re.all([l,d,g],{arrayMerge:Vs});return b})},[f.validate,f.validationSchema,rr,Qe,xe]),k=P(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),Tt(a).then(function(c){return j.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});u.useEffect(function(){s&&j.current===!0&&H(w.current,f.initialValues)&&k(w.current)},[s,k]);var ne=u.useCallback(function(a){var c=a&&a.values?a.values:w.current,l=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},g=a&&a.status?a.status:C.current?C.current:f.initialStatus;w.current=c,R.current=l,I.current=d,C.current=g;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var A=f.onReset(T.values,fr);Me(A)?A.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);u.useEffect(function(){j.current===!0&&!H(w.current,f.initialValues)&&y&&(w.current=f.initialValues,ne(),s&&k(w.current))},[y,f.initialValues,ne,s,k]),u.useEffect(function(){y&&j.current===!0&&!H(R.current,f.initialErrors)&&(R.current=f.initialErrors||z,m({type:"SET_ERRORS",payload:f.initialErrors||z}))},[y,f.initialErrors]),u.useEffect(function(){y&&j.current===!0&&!H(I.current,f.initialTouched)&&(I.current=f.initialTouched||pe,m({type:"SET_TOUCHED",payload:f.initialTouched||pe}))},[y,f.initialTouched]),u.useEffect(function(){y&&j.current===!0&&!H(C.current,f.initialStatus)&&(C.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var tr=P(function(a){if(L.current[a]&&M(L.current[a].validate)){var c=F(T.values,a),l=L.current[a].validate(c);return Me(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),xe(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),St=u.useCallback(function(a,c){var l=c.validate;L.current[a]={validate:l}},[]),Et=u.useCallback(function(a){delete L.current[a]},[]),nr=P(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?k(T.values):Promise.resolve()}),ar=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ir=P(function(a,c){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?k(l):Promise.resolve()}),de=u.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=P(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?k(W(T.values,a,c)):Promise.resolve()}),or=u.useCallback(function(a,c){var l=c,d=a,g;if(!Fe(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,A=b.type,N=b.name,Ce=b.id,$e=b.value,It=b.checked,sc=b.outerHTML,dr=b.options,Ft=b.multiple;l=c||N||Ce,d=/number|range/.test(A)?(g=parseFloat($e),isNaN(g)?"":g):/checkbox/.test(A)?zs(F(T.values,l),It,$e):dr&&Ft?Us(dr):$e}l&&J(l,d)},[J,T.values]),je=P(function(a){if(Fe(a))return function(c){return or(c,a)};or(a)}),Q=P(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?k(T.values):Promise.resolve()}),sr=u.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,g=l.id,b=l.outerHTML,A=c||d||g;Q(A,!0)},[Q]),we=P(function(a){if(Fe(a))return function(c){return sr(c,a)};sr(a)}),cr=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ur=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),lr=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),_e=P(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=jt(),d===void 0)return}catch(g){throw g}return Promise.resolve(d).then(function(g){return j.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(j.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(j.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),xt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),_e().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),fr={resetForm:ne,validateForm:k,validateField:tr,setErrors:ar,setFieldError:de,setFieldTouched:Q,setFieldValue:J,setStatus:ur,setSubmitting:lr,setTouched:nr,setValues:ir,setFormikState:cr,submitForm:_e},jt=P(function(){return $(T.values,fr)}),wt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),ne()}),_t=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(w.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),At=u.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return de(a,l)}}},[J,Q,de]),Ct=u.useCallback(function(a){var c=Te(a),l=c?a.name:a,d=F(T.values,l),g={name:l,value:d,onChange:je,onBlur:we};if(c){var b=a.type,A=a.value,N=a.as,Ce=a.multiple;b==="checkbox"?A===void 0?g.checked=!!d:(g.checked=!!(Array.isArray(d)&&~d.indexOf(A)),g.value=A):b==="radio"?(g.checked=d===A,g.value=A):N==="select"&&Ce&&(g.value=g.value||[],g.multiple=!0)}return g},[we,je,T.values]),Ae=u.useMemo(function(){return!H(w.current,T.values)},[w.current,T.values]),$t=u.useMemo(function(){return typeof h<"u"?Ae?T.errors&&Object.keys(T.errors).length===0:h!==!1&&M(h)?h(f):h:T.errors&&Object.keys(T.errors).length===0},[h,Ae,T.errors,f]),Ot=x({},T,{initialValues:w.current,initialErrors:R.current,initialTouched:I.current,initialStatus:C.current,handleBlur:we,handleChange:je,handleReset:wt,handleSubmit:xt,resetForm:ne,setErrors:ar,setFormikState:cr,setFieldTouched:Q,setFieldValue:J,setFieldError:de,setStatus:ur,setSubmitting:lr,setTouched:nr,setValues:ir,submitForm:_e,validateForm:k,validateField:tr,isValid:$t,dirty:Ae,unregisterField:Et,registerField:St,getFieldProps:Ct,getFieldMeta:_t,getFieldHelpers:At,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Ot}function Ds(e){var r=ks(e),t=e.component,n=e.children,i=e.render,o=e.innerRef;return u.useImperativeHandle(o,function(){return r}),u.createElement(Ms,{value:r},t?u.createElement(t,r):i?i(r):n?M(n)?n(r):Ls(n)?null:u.Children.only(n):null)}function Ns(e){var r={};if(e.inner){if(e.inner.length===0)return W(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(r,s.path)||(r=W(r,s.path,s.message))}}return r}function Bs(e,r,t,n){t===void 0&&(t=!1);var i=Be(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Be(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||vr(i)?Be(i):i!==""?i:void 0}):vr(e[n])?r[n]=Be(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Vs(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var h=t.clone!==!1,v=h&&t.isMergeableObject(o);n[s]=v?Re(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Re(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Us(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function zs(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function P(e){var r=u.useRef(e);return Hs(function(){r.current=e}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}function Gs(e){var r=e.validate,t=e.name,n=e.render,i=e.children,o=e.as,s=e.component,h=e.className,v=ee(e,["validate","name","render","children","as","component","className"]),y=vt(),$=ee(y,["validate","validationSchema"]),O=$.registerField,f=$.unregisterField;u.useEffect(function(){return O(t,{validate:r}),function(){f(t)}},[O,f,t,r]);var w=$.getFieldProps(x({name:t},v)),R=$.getFieldMeta(t),I={field:w,form:$};if(n)return n(x({},I,{meta:R}));if(M(i))return i(x({},I,{meta:R}));if(s){if(typeof s=="string"){var C=v.innerRef,j=ee(v,["innerRef"]);return u.createElement(s,x({ref:C},w,j,{className:h}),i)}return u.createElement(s,x({field:w,form:$},v,{className:h}),i)}var L=o||"input";if(typeof L=="string"){var Se=v.innerRef,Ee=ee(v,["innerRef"]);return u.createElement(L,x({ref:Se},w,Ee,{className:h}),i)}return u.createElement(L,x({},w,v,{className:h}),i)}var yt=u.forwardRef(function(e,r){var t=e.action,n=ee(e,["action"]),i=t??"#",o=vt(),s=o.handleReset,h=o.handleSubmit;return u.createElement("form",x({onSubmit:h,ref:r,onReset:s,action:i},n))});yt.displayName="Form";const Ws=_.div`
  position: relative;
  width: 100%;
  max-width: ${e=>e.isSearching?300:40}px;
  height: 40px;
  background-color: transparent;
  /* border: 2px solid rgba(var(--bg-primary), 1); */
  border-bottom-width: ${e=>e.isSearching?1:0}px;
  border-style: solid;
  border-color: rgba(var(--bg-primary), 1);
  /* border-radius: 4px; */
  align-items: center;
  overflow: hidden;
  order: 2;
  display: flex;
  justify-content: space-between;
  transition: var(--trans);

  &:hover {
    border-color: rgba(var(--bg-primary), 0.7);
  }
`,Ks=_.label`
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Ys=_(Gs)`
  /* padding: 0 40px 0 40px; */
  padding-left: ${e=>e.isSearching?40:0}px;
  padding-right: ${e=>e.isSearching?40:0}px;
  position: absolute;
  border: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  font-size: 20px;
  color-scheme: dark;
  color: rgba(var(--text-primary), 0.7);
  background-color: transparent;
  transition: var(--trans);
  outline: none;
  /* border: 1px solid transparent; */

  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
  }

  &::placeholder {
    font: inherit;
    font-size: 18px;
    background-color: transparent;
    color: rgba(var(--text-primary), 0.7);
    transition: var(--trans);
  }
`,Zs=_.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 0;
  left: 0;
  padding: 0;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: transparent;
  /* transition: var(--trans); */

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }

    &::after {
      opacity: 1;
      transform: scale(1);
      transition: var(--trans);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transform: scale(0.6);
    opacity: 0;
    transition: var(--trans);
  }

  svg {
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`,qs=_.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  padding: 0;
  border: none;
  z-index: 1;
  cursor: pointer;
  background-color: transparent;
  order: 3;

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }

    &::after {
      opacity: 1;
      transform: scale(1);
      transition: var(--trans);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-color: #000;
    transform: scale(0.6);
    opacity: 0;
    transition: var(--trans);
  }

  svg {
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`;function Xs(){const[e,r]=u.useState(!1),t=()=>r(!e),n=Pt(),i=({search:o},s)=>{if(o.trim()===""){Ut.error("Please enter a word to search for");return}n(`movies?query=${encodeURIComponent(o)}`),s.resetForm()};return p.jsxs(Ws,{isSearching:e,children:[e?p.jsx(Ds,{initialValues:{search:""},onSubmit:i,children:p.jsxs(yt,{children:[p.jsx(Zs,{type:"submit",value:"submit",children:p.jsx(pr,{size:30})}),p.jsx(Ks,{htmlFor:"search"}),p.jsx(Ys,{type:"text",id:"search",name:"search",placeholder:"Search",isSearching:e})]})}):void 0,p.jsx(qs,{onClick:t,children:e?p.jsx(Bt,{size:30}):p.jsx(pr,{size:30})})]})}function Js(e){return Ve({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"}}]})(e)}function Qs(e){return Ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"}}]})(e)}const ec=_.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  order: 3;
  cursor: pointer;
  user-select: none;

  svg {
    font-size: 30px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }

  &:hover {
    svg {
      fill: rgba(var(--bg-primary), 0.7);
    }
  }

  input {
    cursor: pointer;
    opacity: 0;
    display: none;
  }
`,mt=kt`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,rc=_(Js)`
  animation: ${mt} 0.5s;
`,tc=_(Qs)`
  animation: ${mt} 0.5s;
`;function nc(){const[e,r]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",e)},[e]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=e},[e]);const t=()=>{r(e==="light"?"dark":"light")};return p.jsxs(ec,{className:"switcher",children:[p.jsx("input",{type:"checkbox",onChange:t,checked:e==="dark"}),e==="dark"?p.jsx(rc,{}):p.jsx(tc,{})]})}function ac(){return p.jsx(Wt,{children:p.jsxs(Kt,{children:[p.jsx(Jt,{}),p.jsx(tn,{}),p.jsx(Xs,{}),p.jsx(nc,{}),p.jsx(Zt,{}),p.jsx(en,{})]})})}const ic=_.main``;function oc(){return p.jsx(ic,{children:p.jsx(Ue,{children:p.jsx(u.Suspense,{fallback:p.jsx(Vt,{}),children:p.jsx(Dt,{})})})})}function dc(){return p.jsxs(zt,{children:[p.jsx(ac,{}),p.jsx(oc,{}),p.jsx(Gt,{})]})}export{dc as default};
