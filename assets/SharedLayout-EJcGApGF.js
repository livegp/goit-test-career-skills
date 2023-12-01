import{s as _,j as p,G as Ur,r as u,L as Mt,N as Rt,g as Lt,u as Pt,c as kt,O as Dt}from"./index-QI9hAGkQ.js";import{I as Nt,A as pe,a as Bt}from"./index.esm-V4WFThE6.js";import Ut from"./Loader-o2ajiVM7.js";import{Q as Vt}from"./react-toastify.esm-B00oEsp2.js";const zt=_.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,Vr=_.div`
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
`;function Gt(){return p.jsx(Ht,{children:p.jsx(Vr,{children:p.jsxs("p",{children:[" ","© 2023 Movies App. All rights reserved. Designed and Developed by"," ",p.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const Wt=_.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,Kt=_(Vr)`
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
`;function Zt(){return p.jsx(Yt,{type:"button",children:p.jsx(Nt,{})})}function qt(r){return Ur({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"}}]})(r)}const Xt=_.div`
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
`;function Jt(){const[r,e]=u.useState(window.innerWidth);return u.useEffect(()=>{const t=()=>{e(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),p.jsx(Xt,{children:p.jsxs(Mt,{to:"/",children:[p.jsx(qt,{}),r>=600&&p.jsx("p",{children:"Movies"})]})})}const Qt=_.label`
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
`;function rn(){const[r,e]=u.useState(!1),t=n=>{e(n.target.checked)};return p.jsxs(Qt,{htmlFor:"menu-check",children:[p.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:r,onChange:t}),p.jsx("span",{})]})}const en=_.nav`
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
`,he=_(Rt)`
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
`;function tn(){return p.jsx(en,{children:p.jsxs("ul",{children:[p.jsx("li",{children:p.jsx(he,{to:"/",children:"Home"})}),p.jsx("li",{children:p.jsx(he,{to:"/movies",children:"Movies"})})]})})}var nn=function(e){return an(e)&&!on(e)};function an(r){return!!r&&typeof r=="object"}function on(r){var e=Object.prototype.toString.call(r);return e==="[object RegExp]"||e==="[object Date]"||un(r)}var sn=typeof Symbol=="function"&&Symbol.for,cn=sn?Symbol.for("react.element"):60103;function un(r){return r.$$typeof===cn}function ln(r){return Array.isArray(r)?[]:{}}function gr(r,e){return e.clone!==!1&&e.isMergeableObject(r)?or(ln(r),r,e):r}function fn(r,e,t){return r.concat(e).map(function(n){return gr(n,t)})}function dn(r,e,t){var n={};return t.isMergeableObject(r)&&Object.keys(r).forEach(function(i){n[i]=gr(r[i],t)}),Object.keys(e).forEach(function(i){!t.isMergeableObject(e[i])||!r[i]?n[i]=gr(e[i],t):n[i]=or(r[i],e[i],t)}),n}function or(r,e,t){t=t||{},t.arrayMerge=t.arrayMerge||fn,t.isMergeableObject=t.isMergeableObject||nn;var n=Array.isArray(e),i=Array.isArray(r),o=n===i;return o?n?t.arrayMerge(r,e,t):dn(r,e,t):gr(e,t)}or.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return or(n,i,t)},{})};var Rr=or,pn=typeof global=="object"&&global&&global.Object===Object&&global;const ze=pn;var hn=typeof self=="object"&&self&&self.Object===Object&&self,gn=ze||hn||Function("return this")();const D=gn;var vn=D.Symbol;const U=vn;var He=Object.prototype,bn=He.hasOwnProperty,yn=He.toString,ar=U?U.toStringTag:void 0;function mn(r){var e=bn.call(r,ar),t=r[ar];try{r[ar]=void 0;var n=!0}catch{}var i=yn.call(r);return n&&(e?r[ar]=t:delete r[ar]),i}var Tn=Object.prototype,Sn=Tn.toString;function xn(r){return Sn.call(r)}var jn="[object Null]",En="[object Undefined]",ge=U?U.toStringTag:void 0;function Y(r){return r==null?r===void 0?En:jn:ge&&ge in Object(r)?mn(r):xn(r)}function Ge(r,e){return function(t){return r(e(t))}}var wn=Ge(Object.getPrototypeOf,Object);const zr=wn;function Z(r){return r!=null&&typeof r=="object"}var _n="[object Object]",An=Function.prototype,$n=Object.prototype,We=An.toString,Cn=$n.hasOwnProperty,On=We.call(Object);function ve(r){if(!Z(r)||Y(r)!=_n)return!1;var e=zr(r);if(e===null)return!0;var t=Cn.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&We.call(t)==On}var be=Array.isArray,ye=Object.keys,In=Object.prototype.hasOwnProperty,Fn=typeof Element<"u";function Lr(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){var t=be(r),n=be(e),i,o,s;if(t&&n){if(o=r.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!Lr(r[i],e[i]))return!1;return!0}if(t!=n)return!1;var h=r instanceof Date,v=e instanceof Date;if(h!=v)return!1;if(h&&v)return r.getTime()==e.getTime();var y=r instanceof RegExp,C=e instanceof RegExp;if(y!=C)return!1;if(y&&C)return r.toString()==e.toString();var O=ye(r);if(o=O.length,o!==ye(e).length)return!1;for(i=o;i--!==0;)if(!In.call(e,O[i]))return!1;if(Fn&&r instanceof Element&&e instanceof Element)return r===e;for(i=o;i--!==0;)if(s=O[i],!(s==="_owner"&&r.$$typeof)&&!Lr(r[s],e[s]))return!1;return!0}return r!==r&&e!==e}var Mn=function(e,t){try{return Lr(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Lt(Mn);var Rn=!0;function Ln(r,e){if(!Rn){if(r)return;var t="Warning: "+e;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Pn(){this.__data__=[],this.size=0}function Ke(r,e){return r===e||r!==r&&e!==e}function vr(r,e){for(var t=r.length;t--;)if(Ke(r[t][0],e))return t;return-1}var kn=Array.prototype,Dn=kn.splice;function Nn(r){var e=this.__data__,t=vr(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():Dn.call(e,t,1),--this.size,!0}function Bn(r){var e=this.__data__,t=vr(e,r);return t<0?void 0:e[t][1]}function Un(r){return vr(this.__data__,r)>-1}function Vn(r,e){var t=this.__data__,n=vr(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}function B(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}B.prototype.clear=Pn;B.prototype.delete=Nn;B.prototype.get=Bn;B.prototype.has=Un;B.prototype.set=Vn;function zn(){this.__data__=new B,this.size=0}function Hn(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}function Gn(r){return this.__data__.get(r)}function Wn(r){return this.__data__.has(r)}function ur(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var Kn="[object AsyncFunction]",Yn="[object Function]",Zn="[object GeneratorFunction]",qn="[object Proxy]";function Ye(r){if(!ur(r))return!1;var e=Y(r);return e==Yn||e==Zn||e==Kn||e==qn}var Xn=D["__core-js_shared__"];const Or=Xn;var me=function(){var r=/[^.]+$/.exec(Or&&Or.keys&&Or.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function Jn(r){return!!me&&me in r}var Qn=Function.prototype,ra=Qn.toString;function q(r){if(r!=null){try{return ra.call(r)}catch{}try{return r+""}catch{}}return""}var ea=/[\\^$.*+?()[\]{}|]/g,ta=/^\[object .+?Constructor\]$/,na=Function.prototype,aa=Object.prototype,ia=na.toString,oa=aa.hasOwnProperty,sa=RegExp("^"+ia.call(oa).replace(ea,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ca(r){if(!ur(r)||Jn(r))return!1;var e=Ye(r)?sa:ta;return e.test(q(r))}function ua(r,e){return r==null?void 0:r[e]}function X(r,e){var t=ua(r,e);return ca(t)?t:void 0}var la=X(D,"Map");const sr=la;var fa=X(Object,"create");const cr=fa;function da(){this.__data__=cr?cr(null):{},this.size=0}function pa(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var ha="__lodash_hash_undefined__",ga=Object.prototype,va=ga.hasOwnProperty;function ba(r){var e=this.__data__;if(cr){var t=e[r];return t===ha?void 0:t}return va.call(e,r)?e[r]:void 0}var ya=Object.prototype,ma=ya.hasOwnProperty;function Ta(r){var e=this.__data__;return cr?e[r]!==void 0:ma.call(e,r)}var Sa="__lodash_hash_undefined__";function xa(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=cr&&e===void 0?Sa:e,this}function K(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}K.prototype.clear=da;K.prototype.delete=pa;K.prototype.get=ba;K.prototype.has=Ta;K.prototype.set=xa;function ja(){this.size=0,this.__data__={hash:new K,map:new(sr||B),string:new K}}function Ea(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}function br(r,e){var t=r.__data__;return Ea(e)?t[typeof e=="string"?"string":"hash"]:t.map}function wa(r){var e=br(this,r).delete(r);return this.size-=e?1:0,e}function _a(r){return br(this,r).get(r)}function Aa(r){return br(this,r).has(r)}function $a(r,e){var t=br(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}function V(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}V.prototype.clear=ja;V.prototype.delete=wa;V.prototype.get=_a;V.prototype.has=Aa;V.prototype.set=$a;var Ca=200;function Oa(r,e){var t=this.__data__;if(t instanceof B){var n=t.__data__;if(!sr||n.length<Ca-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new V(n)}return t.set(r,e),this.size=t.size,this}function tr(r){var e=this.__data__=new B(r);this.size=e.size}tr.prototype.clear=zn;tr.prototype.delete=Hn;tr.prototype.get=Gn;tr.prototype.has=Wn;tr.prototype.set=Oa;function Ia(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}var Fa=function(){try{var r=X(Object,"defineProperty");return r({},"",{}),r}catch{}}();const Te=Fa;function Ze(r,e,t){e=="__proto__"&&Te?Te(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var Ma=Object.prototype,Ra=Ma.hasOwnProperty;function qe(r,e,t){var n=r[e];(!(Ra.call(r,e)&&Ke(n,t))||t===void 0&&!(e in r))&&Ze(r,e,t)}function yr(r,e,t,n){var i=!t;t||(t={});for(var o=-1,s=e.length;++o<s;){var h=e[o],v=n?n(t[h],r[h],h,t,r):void 0;v===void 0&&(v=r[h]),i?Ze(t,h,v):qe(t,h,v)}return t}function La(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var Pa="[object Arguments]";function Se(r){return Z(r)&&Y(r)==Pa}var Xe=Object.prototype,ka=Xe.hasOwnProperty,Da=Xe.propertyIsEnumerable,Na=Se(function(){return arguments}())?Se:function(r){return Z(r)&&ka.call(r,"callee")&&!Da.call(r,"callee")};const Ba=Na;var Ua=Array.isArray;const lr=Ua;function Va(){return!1}var Je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xe=Je&&typeof module=="object"&&module&&!module.nodeType&&module,za=xe&&xe.exports===Je,je=za?D.Buffer:void 0,Ha=je?je.isBuffer:void 0,Ga=Ha||Va;const Qe=Ga;var Wa=9007199254740991,Ka=/^(?:0|[1-9]\d*)$/;function Ya(r,e){var t=typeof r;return e=e??Wa,!!e&&(t=="number"||t!="symbol"&&Ka.test(r))&&r>-1&&r%1==0&&r<e}var Za=9007199254740991;function rt(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Za}var qa="[object Arguments]",Xa="[object Array]",Ja="[object Boolean]",Qa="[object Date]",ri="[object Error]",ei="[object Function]",ti="[object Map]",ni="[object Number]",ai="[object Object]",ii="[object RegExp]",oi="[object Set]",si="[object String]",ci="[object WeakMap]",ui="[object ArrayBuffer]",li="[object DataView]",fi="[object Float32Array]",di="[object Float64Array]",pi="[object Int8Array]",hi="[object Int16Array]",gi="[object Int32Array]",vi="[object Uint8Array]",bi="[object Uint8ClampedArray]",yi="[object Uint16Array]",mi="[object Uint32Array]",x={};x[fi]=x[di]=x[pi]=x[hi]=x[gi]=x[vi]=x[bi]=x[yi]=x[mi]=!0;x[qa]=x[Xa]=x[ui]=x[Ja]=x[li]=x[Qa]=x[ri]=x[ei]=x[ti]=x[ni]=x[ai]=x[ii]=x[oi]=x[si]=x[ci]=!1;function Ti(r){return Z(r)&&rt(r.length)&&!!x[Y(r)]}function Hr(r){return function(e){return r(e)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ir=et&&typeof module=="object"&&module&&!module.nodeType&&module,Si=ir&&ir.exports===et,Ir=Si&&ze.process,xi=function(){try{var r=ir&&ir.require&&ir.require("util").types;return r||Ir&&Ir.binding&&Ir.binding("util")}catch{}}();const er=xi;var Ee=er&&er.isTypedArray,ji=Ee?Hr(Ee):Ti;const Ei=ji;var wi=Object.prototype,_i=wi.hasOwnProperty;function tt(r,e){var t=lr(r),n=!t&&Ba(r),i=!t&&!n&&Qe(r),o=!t&&!n&&!i&&Ei(r),s=t||n||i||o,h=s?La(r.length,String):[],v=h.length;for(var y in r)(e||_i.call(r,y))&&!(s&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ya(y,v)))&&h.push(y);return h}var Ai=Object.prototype;function Gr(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||Ai;return r===t}var $i=Ge(Object.keys,Object);const Ci=$i;var Oi=Object.prototype,Ii=Oi.hasOwnProperty;function Fi(r){if(!Gr(r))return Ci(r);var e=[];for(var t in Object(r))Ii.call(r,t)&&t!="constructor"&&e.push(t);return e}function nt(r){return r!=null&&rt(r.length)&&!Ye(r)}function Wr(r){return nt(r)?tt(r):Fi(r)}function Mi(r,e){return r&&yr(e,Wr(e),r)}function Ri(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Li=Object.prototype,Pi=Li.hasOwnProperty;function ki(r){if(!ur(r))return Ri(r);var e=Gr(r),t=[];for(var n in r)n=="constructor"&&(e||!Pi.call(r,n))||t.push(n);return t}function Kr(r){return nt(r)?tt(r,!0):ki(r)}function Di(r,e){return r&&yr(e,Kr(e),r)}var at=typeof exports=="object"&&exports&&!exports.nodeType&&exports,we=at&&typeof module=="object"&&module&&!module.nodeType&&module,Ni=we&&we.exports===at,_e=Ni?D.Buffer:void 0,Ae=_e?_e.allocUnsafe:void 0;function Bi(r,e){if(e)return r.slice();var t=r.length,n=Ae?Ae(t):new r.constructor(t);return r.copy(n),n}function it(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function Ui(r,e){for(var t=-1,n=r==null?0:r.length,i=0,o=[];++t<n;){var s=r[t];e(s,t,r)&&(o[i++]=s)}return o}function ot(){return[]}var Vi=Object.prototype,zi=Vi.propertyIsEnumerable,$e=Object.getOwnPropertySymbols,Hi=$e?function(r){return r==null?[]:(r=Object(r),Ui($e(r),function(e){return zi.call(r,e)}))}:ot;const Yr=Hi;function Gi(r,e){return yr(r,Yr(r),e)}function st(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Wi=Object.getOwnPropertySymbols,Ki=Wi?function(r){for(var e=[];r;)st(e,Yr(r)),r=zr(r);return e}:ot;const ct=Ki;function Yi(r,e){return yr(r,ct(r),e)}function ut(r,e,t){var n=e(r);return lr(r)?n:st(n,t(r))}function Zi(r){return ut(r,Wr,Yr)}function qi(r){return ut(r,Kr,ct)}var Xi=X(D,"DataView");const Pr=Xi;var Ji=X(D,"Promise");const kr=Ji;var Qi=X(D,"Set");const Dr=Qi;var ro=X(D,"WeakMap");const Nr=ro;var Ce="[object Map]",eo="[object Object]",Oe="[object Promise]",Ie="[object Set]",Fe="[object WeakMap]",Me="[object DataView]",to=q(Pr),no=q(sr),ao=q(kr),io=q(Dr),oo=q(Nr),G=Y;(Pr&&G(new Pr(new ArrayBuffer(1)))!=Me||sr&&G(new sr)!=Ce||kr&&G(kr.resolve())!=Oe||Dr&&G(new Dr)!=Ie||Nr&&G(new Nr)!=Fe)&&(G=function(r){var e=Y(r),t=e==eo?r.constructor:void 0,n=t?q(t):"";if(n)switch(n){case to:return Me;case no:return Ce;case ao:return Oe;case io:return Ie;case oo:return Fe}return e});const Zr=G;var so=Object.prototype,co=so.hasOwnProperty;function uo(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&co.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var lo=D.Uint8Array;const Re=lo;function qr(r){var e=new r.constructor(r.byteLength);return new Re(e).set(new Re(r)),e}function fo(r,e){var t=e?qr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var po=/\w*$/;function ho(r){var e=new r.constructor(r.source,po.exec(r));return e.lastIndex=r.lastIndex,e}var Le=U?U.prototype:void 0,Pe=Le?Le.valueOf:void 0;function go(r){return Pe?Object(Pe.call(r)):{}}function vo(r,e){var t=e?qr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var bo="[object Boolean]",yo="[object Date]",mo="[object Map]",To="[object Number]",So="[object RegExp]",xo="[object Set]",jo="[object String]",Eo="[object Symbol]",wo="[object ArrayBuffer]",_o="[object DataView]",Ao="[object Float32Array]",$o="[object Float64Array]",Co="[object Int8Array]",Oo="[object Int16Array]",Io="[object Int32Array]",Fo="[object Uint8Array]",Mo="[object Uint8ClampedArray]",Ro="[object Uint16Array]",Lo="[object Uint32Array]";function Po(r,e,t){var n=r.constructor;switch(e){case wo:return qr(r);case bo:case yo:return new n(+r);case _o:return fo(r,t);case Ao:case $o:case Co:case Oo:case Io:case Fo:case Mo:case Ro:case Lo:return vo(r,t);case mo:return new n;case To:case jo:return new n(r);case So:return ho(r);case xo:return new n;case Eo:return go(r)}}var ke=Object.create,ko=function(){function r(){}return function(e){if(!ur(e))return{};if(ke)return ke(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const Do=ko;function No(r){return typeof r.constructor=="function"&&!Gr(r)?Do(zr(r)):{}}var Bo="[object Map]";function Uo(r){return Z(r)&&Zr(r)==Bo}var De=er&&er.isMap,Vo=De?Hr(De):Uo;const zo=Vo;var Ho="[object Set]";function Go(r){return Z(r)&&Zr(r)==Ho}var Ne=er&&er.isSet,Wo=Ne?Hr(Ne):Go;const Ko=Wo;var Yo=1,Zo=2,qo=4,lt="[object Arguments]",Xo="[object Array]",Jo="[object Boolean]",Qo="[object Date]",rs="[object Error]",ft="[object Function]",es="[object GeneratorFunction]",ts="[object Map]",ns="[object Number]",dt="[object Object]",as="[object RegExp]",is="[object Set]",os="[object String]",ss="[object Symbol]",cs="[object WeakMap]",us="[object ArrayBuffer]",ls="[object DataView]",fs="[object Float32Array]",ds="[object Float64Array]",ps="[object Int8Array]",hs="[object Int16Array]",gs="[object Int32Array]",vs="[object Uint8Array]",bs="[object Uint8ClampedArray]",ys="[object Uint16Array]",ms="[object Uint32Array]",S={};S[lt]=S[Xo]=S[us]=S[ls]=S[Jo]=S[Qo]=S[fs]=S[ds]=S[ps]=S[hs]=S[gs]=S[ts]=S[ns]=S[dt]=S[as]=S[is]=S[os]=S[ss]=S[vs]=S[bs]=S[ys]=S[ms]=!0;S[rs]=S[ft]=S[cs]=!1;function hr(r,e,t,n,i,o){var s,h=e&Yo,v=e&Zo,y=e&qo;if(t&&(s=i?t(r,n,i,o):t(r)),s!==void 0)return s;if(!ur(r))return r;var C=lr(r);if(C){if(s=uo(r),!h)return it(r,s)}else{var O=Zr(r),f=O==ft||O==es;if(Qe(r))return Bi(r,h);if(O==dt||O==lt||f&&!i){if(s=v||f?{}:No(r),!h)return v?Yi(r,Di(s,r)):Gi(r,Mi(s,r))}else{if(!S[O])return i?r:{};s=Po(r,O,h)}}o||(o=new tr);var w=o.get(r);if(w)return w;o.set(r,s),Ko(r)?r.forEach(function($){s.add(hr($,e,t,$,r,o))}):zo(r)&&r.forEach(function($,E){s.set(E,hr($,e,t,E,r,o))});var R=y?v?qi:Zi:v?Kr:Wr,I=C?void 0:R(r);return Ia(I||r,function($,E){I&&(E=$,$=r[E]),qe(s,E,hr($,e,t,E,r,o))}),s}var Ts=4;function Be(r){return hr(r,Ts)}function pt(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}var Ss="[object Symbol]";function Xr(r){return typeof r=="symbol"||Z(r)&&Y(r)==Ss}var xs="Expected a function";function Jr(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(xs);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=r.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Jr.Cache||V),t}Jr.Cache=V;var js=500;function Es(r){var e=Jr(r,function(n){return t.size===js&&t.clear(),n}),t=e.cache;return e}var ws=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,_s=/\\(\\)?/g,As=Es(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(ws,function(t,n,i,o){e.push(i?o.replace(_s,"$1"):n||t)}),e});const $s=As;var Cs=1/0;function Os(r){if(typeof r=="string"||Xr(r))return r;var e=r+"";return e=="0"&&1/r==-Cs?"-0":e}var Is=1/0,Ue=U?U.prototype:void 0,Ve=Ue?Ue.toString:void 0;function ht(r){if(typeof r=="string")return r;if(lr(r))return pt(r,ht)+"";if(Xr(r))return Ve?Ve.call(r):"";var e=r+"";return e=="0"&&1/r==-Is?"-0":e}function Fs(r){return r==null?"":ht(r)}function gt(r){return lr(r)?pt(r,Os):Xr(r)?[r]:it($s(Fs(r)))}function j(){return j=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},j.apply(this,arguments)}function rr(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var mr=u.createContext(void 0);mr.displayName="FormikContext";var Ms=mr.Provider;mr.Consumer;function vt(){var r=u.useContext(mr);return r||Ln(!1),r}var M=function(e){return typeof e=="function"},Tr=function(e){return e!==null&&typeof e=="object"},Rs=function(e){return String(Math.floor(Number(e)))===e},Fr=function(e){return Object.prototype.toString.call(e)==="[object String]"},Ls=function(e){return u.Children.count(e)===0},Mr=function(e){return Tr(e)&&M(e.then)};function F(r,e,t,n){n===void 0&&(n=0);for(var i=gt(e);r&&n<i.length;)r=r[i[n++]];return n!==i.length&&!r||r===void 0?t:r}function W(r,e,t){for(var n=Be(r),i=n,o=0,s=gt(e);o<s.length-1;o++){var h=s[o],v=F(r,s.slice(0,o+1));if(v&&(Tr(v)||Array.isArray(v)))i=i[h]=Be(v);else{var y=s[o+1];i=i[h]=Rs(y)&&Number(y)>=0?[]:{}}}return(o===0?r:i)[s[o]]===t?r:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function bt(r,e,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(r);i<o.length;i++){var s=o[i],h=r[s];Tr(h)?t.get(h)||(t.set(h,!0),n[s]=Array.isArray(h)?[]:{},bt(h,e,t,n[s])):n[s]=e}return n}function Ps(r,e){switch(e.type){case"SET_VALUES":return j({},r,{values:e.payload});case"SET_TOUCHED":return j({},r,{touched:e.payload});case"SET_ERRORS":return H(r.errors,e.payload)?r:j({},r,{errors:e.payload});case"SET_STATUS":return j({},r,{status:e.payload});case"SET_ISSUBMITTING":return j({},r,{isSubmitting:e.payload});case"SET_ISVALIDATING":return j({},r,{isValidating:e.payload});case"SET_FIELD_VALUE":return j({},r,{values:W(r.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return j({},r,{touched:W(r.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return j({},r,{errors:W(r.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return j({},r,e.payload);case"SET_FORMIK_STATE":return e.payload(r);case"SUBMIT_ATTEMPT":return j({},r,{touched:bt(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return j({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},r,{isSubmitting:!1});default:return r}}var z={},pr={};function ks(r){var e=r.validateOnChange,t=e===void 0?!0:e,n=r.validateOnBlur,i=n===void 0?!0:n,o=r.validateOnMount,s=o===void 0?!1:o,h=r.isInitialValid,v=r.enableReinitialize,y=v===void 0?!1:v,C=r.onSubmit,O=rr(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=j({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:C},O),w=u.useRef(f.initialValues),R=u.useRef(f.initialErrors||z),I=u.useRef(f.initialTouched||pr),$=u.useRef(f.initialStatus),E=u.useRef(!1),L=u.useRef({});u.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var Sr=u.useState(0),xr=Sr[1],fr=u.useRef({values:f.initialValues,errors:f.initialErrors||z,touched:f.initialTouched||pr,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=fr.current,m=u.useCallback(function(a){var c=fr.current;fr.current=Ps(c,a),c!==fr.current&&xr(function(l){return l+1})},[]),Qr=u.useCallback(function(a,c){return new Promise(function(l,d){var g=f.validate(a,c);g==null?l(z):Mr(g)?g.then(function(b){l(b||z)},function(b){d(b)}):l(g)})},[f.validate]),jr=u.useCallback(function(a,c){var l=f.validationSchema,d=M(l)?l(c):l,g=c&&d.validateAt?d.validateAt(c,a):Bs(a,d);return new Promise(function(b,A){g.then(function(){b(z)},function(N){N.name==="ValidationError"?b(Ns(N)):A(N)})})},[f.validationSchema]),re=u.useCallback(function(a,c){return new Promise(function(l){return l(L.current[a].validate(c))})},[]),ee=u.useCallback(function(a){var c=Object.keys(L.current).filter(function(d){return M(L.current[d].validate)}),l=c.length>0?c.map(function(d){return re(d,F(a,d))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(d){return d.reduce(function(g,b,A){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(g=W(g,c[A],b)),g},{})})},[re]),Tt=u.useCallback(function(a){return Promise.all([ee(a),f.validationSchema?jr(a):{},f.validate?Qr(a):{}]).then(function(c){var l=c[0],d=c[1],g=c[2],b=Rr.all([l,d,g],{arrayMerge:Us});return b})},[f.validate,f.validationSchema,ee,Qr,jr]),k=P(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),Tt(a).then(function(c){return E.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:c})),c})});u.useEffect(function(){s&&E.current===!0&&H(w.current,f.initialValues)&&k(w.current)},[s,k]);var nr=u.useCallback(function(a){var c=a&&a.values?a.values:w.current,l=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},d=a&&a.touched?a.touched:I.current?I.current:f.initialTouched||{},g=a&&a.status?a.status:$.current?$.current:f.initialStatus;w.current=c,R.current=l,I.current=d,$.current=g;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:d,status:g,values:c,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var A=f.onReset(T.values,fe);Mr(A)?A.then(b):b()}else b()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);u.useEffect(function(){E.current===!0&&!H(w.current,f.initialValues)&&y&&(w.current=f.initialValues,nr(),s&&k(w.current))},[y,f.initialValues,nr,s,k]),u.useEffect(function(){y&&E.current===!0&&!H(R.current,f.initialErrors)&&(R.current=f.initialErrors||z,m({type:"SET_ERRORS",payload:f.initialErrors||z}))},[y,f.initialErrors]),u.useEffect(function(){y&&E.current===!0&&!H(I.current,f.initialTouched)&&(I.current=f.initialTouched||pr,m({type:"SET_TOUCHED",payload:f.initialTouched||pr}))},[y,f.initialTouched]),u.useEffect(function(){y&&E.current===!0&&!H($.current,f.initialStatus)&&($.current=f.initialStatus,m({type:"SET_STATUS",payload:f.initialStatus}))},[y,f.initialStatus,f.initialTouched]);var te=P(function(a){if(L.current[a]&&M(L.current[a].validate)){var c=F(T.values,a),l=L.current[a].validate(c);return Mr(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:d}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(f.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),jr(T.values,a).then(function(d){return d}).then(function(d){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(d,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),St=u.useCallback(function(a,c){var l=c.validate;L.current[a]={validate:l}},[]),xt=u.useCallback(function(a){delete L.current[a]},[]),ne=P(function(a,c){m({type:"SET_TOUCHED",payload:a});var l=c===void 0?i:c;return l?k(T.values):Promise.resolve()}),ae=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),ie=P(function(a,c){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var d=c===void 0?t:c;return d?k(l):Promise.resolve()}),dr=u.useCallback(function(a,c){m({type:"SET_FIELD_ERROR",payload:{field:a,value:c}})},[]),J=P(function(a,c,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:c}});var d=l===void 0?t:l;return d?k(W(T.values,a,c)):Promise.resolve()}),oe=u.useCallback(function(a,c){var l=c,d=a,g;if(!Fr(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,A=b.type,N=b.name,$r=b.id,Cr=b.value,It=b.checked,sc=b.outerHTML,de=b.options,Ft=b.multiple;l=c||N||$r,d=/number|range/.test(A)?(g=parseFloat(Cr),isNaN(g)?"":g):/checkbox/.test(A)?zs(F(T.values,l),It,Cr):de&&Ft?Vs(de):Cr}l&&J(l,d)},[J,T.values]),Er=P(function(a){if(Fr(a))return function(c){return oe(c,a)};oe(a)}),Q=P(function(a,c,l){c===void 0&&(c=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:c}});var d=l===void 0?i:l;return d?k(T.values):Promise.resolve()}),se=u.useCallback(function(a,c){a.persist&&a.persist();var l=a.target,d=l.name,g=l.id,b=l.outerHTML,A=c||d||g;Q(A,!0)},[Q]),wr=P(function(a){if(Fr(a))return function(c){return se(c,a)};se(a)}),ce=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),ue=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),le=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),_r=P(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var c=a instanceof Error,l=!c&&Object.keys(a).length===0;if(l){var d;try{if(d=Et(),d===void 0)return}catch(g){throw g}return Promise.resolve(d).then(function(g){return E.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(E.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(E.current&&(m({type:"SUBMIT_FAILURE"}),c))throw a})}),jt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),_r().catch(function(c){console.warn("Warning: An unhandled error was caught from submitForm()",c)})}),fe={resetForm:nr,validateForm:k,validateField:te,setErrors:ae,setFieldError:dr,setFieldTouched:Q,setFieldValue:J,setStatus:ue,setSubmitting:le,setTouched:ne,setValues:ie,setFormikState:ce,submitForm:_r},Et=P(function(){return C(T.values,fe)}),wt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),nr()}),_t=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(w.current,a),initialTouched:!!F(I.current,a),initialError:F(R.current,a)}},[T.errors,T.touched,T.values]),At=u.useCallback(function(a){return{setValue:function(l,d){return J(a,l,d)},setTouched:function(l,d){return Q(a,l,d)},setError:function(l){return dr(a,l)}}},[J,Q,dr]),$t=u.useCallback(function(a){var c=Tr(a),l=c?a.name:a,d=F(T.values,l),g={name:l,value:d,onChange:Er,onBlur:wr};if(c){var b=a.type,A=a.value,N=a.as,$r=a.multiple;b==="checkbox"?A===void 0?g.checked=!!d:(g.checked=!!(Array.isArray(d)&&~d.indexOf(A)),g.value=A):b==="radio"?(g.checked=d===A,g.value=A):N==="select"&&$r&&(g.value=g.value||[],g.multiple=!0)}return g},[wr,Er,T.values]),Ar=u.useMemo(function(){return!H(w.current,T.values)},[w.current,T.values]),Ct=u.useMemo(function(){return typeof h<"u"?Ar?T.errors&&Object.keys(T.errors).length===0:h!==!1&&M(h)?h(f):h:T.errors&&Object.keys(T.errors).length===0},[h,Ar,T.errors,f]),Ot=j({},T,{initialValues:w.current,initialErrors:R.current,initialTouched:I.current,initialStatus:$.current,handleBlur:wr,handleChange:Er,handleReset:wt,handleSubmit:jt,resetForm:nr,setErrors:ae,setFormikState:ce,setFieldTouched:Q,setFieldValue:J,setFieldError:dr,setStatus:ue,setSubmitting:le,setTouched:ne,setValues:ie,submitForm:_r,validateForm:k,validateField:te,isValid:Ct,dirty:Ar,unregisterField:xt,registerField:St,getFieldProps:$t,getFieldMeta:_t,getFieldHelpers:At,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return Ot}function Ds(r){var e=ks(r),t=r.component,n=r.children,i=r.render,o=r.innerRef;return u.useImperativeHandle(o,function(){return e}),u.createElement(Ms,{value:e},t?u.createElement(t,e):i?i(e):n?M(n)?n(e):Ls(n)?null:u.Children.only(n):null)}function Ns(r){var e={};if(r.inner){if(r.inner.length===0)return W(e,r.path,r.message);for(var i=r.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;F(e,s.path)||(e=W(e,s.path,s.message))}}return e}function Bs(r,e,t,n){t===void 0&&(t=!1);var i=Br(r);return e[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Br(r){var e=Array.isArray(r)?[]:{};for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=String(t);Array.isArray(r[n])===!0?e[n]=r[n].map(function(i){return Array.isArray(i)===!0||ve(i)?Br(i):i!==""?i:void 0}):ve(r[n])?e[n]=Br(r[n]):e[n]=r[n]!==""?r[n]:void 0}return e}function Us(r,e,t){var n=r.slice();return e.forEach(function(o,s){if(typeof n[s]>"u"){var h=t.clone!==!1,v=h&&t.isMergeableObject(o);n[s]=v?Rr(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Rr(r[s],o,t):r.indexOf(o)===-1&&n.push(o)}),n}function Vs(r){return Array.from(r).filter(function(e){return e.selected}).map(function(e){return e.value})}function zs(r,e,t){if(typeof r=="boolean")return!!e;var n=[],i=!1,o=-1;if(Array.isArray(r))n=r,o=r.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!e;return e&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Hs=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function P(r){var e=u.useRef(r);return Hs(function(){e.current=r}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}function Gs(r){var e=r.validate,t=r.name,n=r.render,i=r.children,o=r.as,s=r.component,h=r.className,v=rr(r,["validate","name","render","children","as","component","className"]),y=vt(),C=rr(y,["validate","validationSchema"]),O=C.registerField,f=C.unregisterField;u.useEffect(function(){return O(t,{validate:e}),function(){f(t)}},[O,f,t,e]);var w=C.getFieldProps(j({name:t},v)),R=C.getFieldMeta(t),I={field:w,form:C};if(n)return n(j({},I,{meta:R}));if(M(i))return i(j({},I,{meta:R}));if(s){if(typeof s=="string"){var $=v.innerRef,E=rr(v,["innerRef"]);return u.createElement(s,j({ref:$},w,E,{className:h}),i)}return u.createElement(s,j({field:w,form:C},v,{className:h}),i)}var L=o||"input";if(typeof L=="string"){var Sr=v.innerRef,xr=rr(v,["innerRef"]);return u.createElement(L,j({ref:Sr},w,xr,{className:h}),i)}return u.createElement(L,j({},w,v,{className:h}),i)}var yt=u.forwardRef(function(r,e){var t=r.action,n=rr(r,["action"]),i=t??"#",o=vt(),s=o.handleReset,h=o.handleSubmit;return u.createElement("form",j({onSubmit:h,ref:e,onReset:s,action:i},n))});yt.displayName="Form";const Ws=_.div`
  position: relative;
  width: 100%;
  max-width: ${r=>r.isSearching?300:40}px;
  height: 40px;
  background-color: transparent;
  /* border: 2px solid rgba(var(--bg-primary), 1); */
  border-bottom-width: ${r=>r.isSearching?1:0}px;
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
  padding-left: ${r=>r.isSearching?40:0}px;
  padding-right: ${r=>r.isSearching?40:0}px;
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
`;function Xs(){const[r,e]=u.useState(!1),t=()=>e(!r),n=Pt(),i=({search:o},s)=>{if(o.trim()===""){Vt.error("Please enter a word to search for");return}n(`movies?query=${encodeURIComponent(o)}`),s.resetForm()};return p.jsxs(Ws,{isSearching:r,children:[r?p.jsx(Ds,{initialValues:{search:""},onSubmit:i,children:p.jsxs(yt,{children:[p.jsx(Zs,{type:"submit",value:"submit",children:p.jsx(pe,{size:30})}),p.jsx(Ks,{htmlFor:"search"}),p.jsx(Ys,{type:"text",id:"search",name:"search",placeholder:"Search",isSearching:r})]})}):void 0,p.jsx(qs,{onClick:t,children:r?p.jsx(Bt,{size:30}):p.jsx(pe,{size:30})})]})}function Js(r){return Ur({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"}}]})(r)}function Qs(r){return Ur({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"}}]})(r)}const rc=_.label`
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
`,ec=_(Js)`
  animation: ${mt} 0.5s;
`,tc=_(Qs)`
  animation: ${mt} 0.5s;
`;function nc(){const[r,e]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",r)},[r]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=r},[r]);const t=()=>{e(r==="light"?"dark":"light")};return p.jsxs(rc,{className:"switcher",children:[p.jsx("input",{type:"checkbox",onChange:t,checked:r==="dark"}),r==="dark"?p.jsx(ec,{}):p.jsx(tc,{})]})}function ac(){return p.jsx(Wt,{children:p.jsxs(Kt,{children:[p.jsx(Jt,{}),p.jsx(tn,{}),p.jsx(Xs,{}),p.jsx(nc,{}),p.jsx(Zt,{}),p.jsx(rn,{})]})})}const ic=_.main``;function oc(){return p.jsx(ic,{children:p.jsx(Vr,{children:p.jsx(u.Suspense,{fallback:p.jsx(Ut,{}),children:p.jsx(Dt,{})})})})}function dc(){return p.jsxs(zt,{children:[p.jsx(ac,{}),p.jsx(oc,{}),p.jsx(Gt,{})]})}export{dc as default};
