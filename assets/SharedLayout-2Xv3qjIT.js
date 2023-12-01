import{s as _,j as f,G as tr,r as u,L as Mt,N as Lt,g as Rt,u as Pt,c as kt,O as Dt}from"./index-8moHTFG-.js";import Nt from"./Loader-2bBLVaeC.js";import{Q as Bt}from"./react-toastify.esm-thHY6BB4.js";const Ut=_.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,zr=_.div`
  max-width: 1160px;
  padding: 25px 10px;
  margin: 0 auto;
`,Vt=_.footer`
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
`;function zt(){return f.jsx(Vt,{children:f.jsx(zr,{children:f.jsxs("p",{children:[" ","© 2023 AutoMarket App. All rights reserved. Designed and Developed by"," ",f.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const Ht=_.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,Gt=_(zr)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`;function Wt(r){return tr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M192 176v-40a40 40 0 0140-40h160a40 40 0 0140 40v240a40 40 0 01-40 40H240c-22.09 0-48-17.91-48-40v-40"}},{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M288 336l80-80-80-80M80 256h272"}}]})(r)}const Kt=_.button`
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
`;function Yt(){return f.jsx(Kt,{type:"button",children:f.jsx(Wt,{})})}function qt(r){return tr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"}}]})(r)}const Xt=_.div`
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
`;function Zt(){const[r,e]=u.useState(window.innerWidth);return u.useEffect(()=>{const t=()=>{e(window.innerWidth)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),f.jsx(Xt,{children:f.jsxs(Mt,{to:"/",children:[f.jsx(qt,{}),r>=600&&f.jsx("p",{children:"AutoMarket"})]})})}const Jt=_.label`
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
`;function Qt(){const[r,e]=u.useState(!1),t=n=>{e(n.target.checked)};return f.jsxs(Jt,{htmlFor:"menu-check",children:[f.jsx("input",{id:"menu-check","aria-hidden":"true",type:"checkbox",checked:r,onChange:t}),f.jsx("span",{})]})}const rn=_.nav`
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
`,Ir=_(Lt)`
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
`;function en(){return f.jsx(rn,{children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Ir,{to:"/",children:"Home"})}),f.jsx("li",{children:f.jsx(Ir,{to:"/catalog",children:"Catalog"})}),f.jsx("li",{children:f.jsx(Ir,{to:"/favorites",children:"Favorites"})})]})})}var tn=function(e){return nn(e)&&!an(e)};function nn(r){return!!r&&typeof r=="object"}function an(r){var e=Object.prototype.toString.call(r);return e==="[object RegExp]"||e==="[object Date]"||sn(r)}var on=typeof Symbol=="function"&&Symbol.for,cn=on?Symbol.for("react.element"):60103;function sn(r){return r.$$typeof===cn}function un(r){return Array.isArray(r)?[]:{}}function vr(r,e){return e.clone!==!1&&e.isMergeableObject(r)?cr(un(r),r,e):r}function ln(r,e,t){return r.concat(e).map(function(n){return vr(n,t)})}function fn(r,e,t){var n={};return t.isMergeableObject(r)&&Object.keys(r).forEach(function(i){n[i]=vr(r[i],t)}),Object.keys(e).forEach(function(i){!t.isMergeableObject(e[i])||!r[i]?n[i]=vr(e[i],t):n[i]=cr(r[i],e[i],t)}),n}function cr(r,e,t){t=t||{},t.arrayMerge=t.arrayMerge||ln,t.isMergeableObject=t.isMergeableObject||tn;var n=Array.isArray(e),i=Array.isArray(r),o=n===i;return o?n?t.arrayMerge(r,e,t):fn(r,e,t):vr(e,t)}cr.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return cr(n,i,t)},{})};var Pr=cr,dn=typeof global=="object"&&global&&global.Object===Object&&global;const ze=dn;var pn=typeof self=="object"&&self&&self.Object===Object&&self,hn=ze||pn||Function("return this")();const D=hn;var gn=D.Symbol;const U=gn;var He=Object.prototype,vn=He.hasOwnProperty,bn=He.toString,ir=U?U.toStringTag:void 0;function yn(r){var e=vn.call(r,ir),t=r[ir];try{r[ir]=void 0;var n=!0}catch{}var i=bn.call(r);return n&&(e?r[ir]=t:delete r[ir]),i}var mn=Object.prototype,Tn=mn.toString;function Sn(r){return Tn.call(r)}var xn="[object Null]",jn="[object Undefined]",he=U?U.toStringTag:void 0;function Y(r){return r==null?r===void 0?jn:xn:he&&he in Object(r)?yn(r):Sn(r)}function Ge(r,e){return function(t){return r(e(t))}}var En=Ge(Object.getPrototypeOf,Object);const Hr=En;function q(r){return r!=null&&typeof r=="object"}var wn="[object Object]",_n=Function.prototype,An=Object.prototype,We=_n.toString,$n=An.hasOwnProperty,Cn=We.call(Object);function ge(r){if(!q(r)||Y(r)!=wn)return!1;var e=Hr(r);if(e===null)return!0;var t=$n.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&We.call(t)==Cn}var ve=Array.isArray,be=Object.keys,On=Object.prototype.hasOwnProperty,In=typeof Element<"u";function kr(r,e){if(r===e)return!0;if(r&&e&&typeof r=="object"&&typeof e=="object"){var t=ve(r),n=ve(e),i,o,c;if(t&&n){if(o=r.length,o!=e.length)return!1;for(i=o;i--!==0;)if(!kr(r[i],e[i]))return!1;return!0}if(t!=n)return!1;var h=r instanceof Date,v=e instanceof Date;if(h!=v)return!1;if(h&&v)return r.getTime()==e.getTime();var y=r instanceof RegExp,C=e instanceof RegExp;if(y!=C)return!1;if(y&&C)return r.toString()==e.toString();var O=be(r);if(o=O.length,o!==be(e).length)return!1;for(i=o;i--!==0;)if(!On.call(e,O[i]))return!1;if(In&&r instanceof Element&&e instanceof Element)return r===e;for(i=o;i--!==0;)if(c=O[i],!(c==="_owner"&&r.$$typeof)&&!kr(r[c],e[c]))return!1;return!0}return r!==r&&e!==e}var Fn=function(e,t){try{return kr(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const H=Rt(Fn);var Mn=!0;function Ln(r,e){if(!Mn){if(r)return;var t="Warning: "+e;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function Rn(){this.__data__=[],this.size=0}function Ke(r,e){return r===e||r!==r&&e!==e}function br(r,e){for(var t=r.length;t--;)if(Ke(r[t][0],e))return t;return-1}var Pn=Array.prototype,kn=Pn.splice;function Dn(r){var e=this.__data__,t=br(e,r);if(t<0)return!1;var n=e.length-1;return t==n?e.pop():kn.call(e,t,1),--this.size,!0}function Nn(r){var e=this.__data__,t=br(e,r);return t<0?void 0:e[t][1]}function Bn(r){return br(this.__data__,r)>-1}function Un(r,e){var t=this.__data__,n=br(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this}function B(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}B.prototype.clear=Rn;B.prototype.delete=Dn;B.prototype.get=Nn;B.prototype.has=Bn;B.prototype.set=Un;function Vn(){this.__data__=new B,this.size=0}function zn(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t}function Hn(r){return this.__data__.get(r)}function Gn(r){return this.__data__.has(r)}function lr(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var Wn="[object AsyncFunction]",Kn="[object Function]",Yn="[object GeneratorFunction]",qn="[object Proxy]";function Ye(r){if(!lr(r))return!1;var e=Y(r);return e==Kn||e==Yn||e==Wn||e==qn}var Xn=D["__core-js_shared__"];const Fr=Xn;var ye=function(){var r=/[^.]+$/.exec(Fr&&Fr.keys&&Fr.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function Zn(r){return!!ye&&ye in r}var Jn=Function.prototype,Qn=Jn.toString;function X(r){if(r!=null){try{return Qn.call(r)}catch{}try{return r+""}catch{}}return""}var ra=/[\\^$.*+?()[\]{}|]/g,ea=/^\[object .+?Constructor\]$/,ta=Function.prototype,na=Object.prototype,aa=ta.toString,ia=na.hasOwnProperty,oa=RegExp("^"+aa.call(ia).replace(ra,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ca(r){if(!lr(r)||Zn(r))return!1;var e=Ye(r)?oa:ea;return e.test(X(r))}function sa(r,e){return r==null?void 0:r[e]}function Z(r,e){var t=sa(r,e);return ca(t)?t:void 0}var ua=Z(D,"Map");const sr=ua;var la=Z(Object,"create");const ur=la;function fa(){this.__data__=ur?ur(null):{},this.size=0}function da(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e}var pa="__lodash_hash_undefined__",ha=Object.prototype,ga=ha.hasOwnProperty;function va(r){var e=this.__data__;if(ur){var t=e[r];return t===pa?void 0:t}return ga.call(e,r)?e[r]:void 0}var ba=Object.prototype,ya=ba.hasOwnProperty;function ma(r){var e=this.__data__;return ur?e[r]!==void 0:ya.call(e,r)}var Ta="__lodash_hash_undefined__";function Sa(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=ur&&e===void 0?Ta:e,this}function K(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}K.prototype.clear=fa;K.prototype.delete=da;K.prototype.get=va;K.prototype.has=ma;K.prototype.set=Sa;function xa(){this.size=0,this.__data__={hash:new K,map:new(sr||B),string:new K}}function ja(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null}function yr(r,e){var t=r.__data__;return ja(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Ea(r){var e=yr(this,r).delete(r);return this.size-=e?1:0,e}function wa(r){return yr(this,r).get(r)}function _a(r){return yr(this,r).has(r)}function Aa(r,e){var t=yr(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this}function V(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}V.prototype.clear=xa;V.prototype.delete=Ea;V.prototype.get=wa;V.prototype.has=_a;V.prototype.set=Aa;var $a=200;function Ca(r,e){var t=this.__data__;if(t instanceof B){var n=t.__data__;if(!sr||n.length<$a-1)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new V(n)}return t.set(r,e),this.size=t.size,this}function nr(r){var e=this.__data__=new B(r);this.size=e.size}nr.prototype.clear=Vn;nr.prototype.delete=zn;nr.prototype.get=Hn;nr.prototype.has=Gn;nr.prototype.set=Ca;function Oa(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r}var Ia=function(){try{var r=Z(Object,"defineProperty");return r({},"",{}),r}catch{}}();const me=Ia;function qe(r,e,t){e=="__proto__"&&me?me(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t}var Fa=Object.prototype,Ma=Fa.hasOwnProperty;function Xe(r,e,t){var n=r[e];(!(Ma.call(r,e)&&Ke(n,t))||t===void 0&&!(e in r))&&qe(r,e,t)}function mr(r,e,t,n){var i=!t;t||(t={});for(var o=-1,c=e.length;++o<c;){var h=e[o],v=n?n(t[h],r[h],h,t,r):void 0;v===void 0&&(v=r[h]),i?qe(t,h,v):Xe(t,h,v)}return t}function La(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}var Ra="[object Arguments]";function Te(r){return q(r)&&Y(r)==Ra}var Ze=Object.prototype,Pa=Ze.hasOwnProperty,ka=Ze.propertyIsEnumerable,Da=Te(function(){return arguments}())?Te:function(r){return q(r)&&Pa.call(r,"callee")&&!ka.call(r,"callee")};const Na=Da;var Ba=Array.isArray;const fr=Ba;function Ua(){return!1}var Je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Se=Je&&typeof module=="object"&&module&&!module.nodeType&&module,Va=Se&&Se.exports===Je,xe=Va?D.Buffer:void 0,za=xe?xe.isBuffer:void 0,Ha=za||Ua;const Qe=Ha;var Ga=9007199254740991,Wa=/^(?:0|[1-9]\d*)$/;function Ka(r,e){var t=typeof r;return e=e??Ga,!!e&&(t=="number"||t!="symbol"&&Wa.test(r))&&r>-1&&r%1==0&&r<e}var Ya=9007199254740991;function rt(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Ya}var qa="[object Arguments]",Xa="[object Array]",Za="[object Boolean]",Ja="[object Date]",Qa="[object Error]",ri="[object Function]",ei="[object Map]",ti="[object Number]",ni="[object Object]",ai="[object RegExp]",ii="[object Set]",oi="[object String]",ci="[object WeakMap]",si="[object ArrayBuffer]",ui="[object DataView]",li="[object Float32Array]",fi="[object Float64Array]",di="[object Int8Array]",pi="[object Int16Array]",hi="[object Int32Array]",gi="[object Uint8Array]",vi="[object Uint8ClampedArray]",bi="[object Uint16Array]",yi="[object Uint32Array]",x={};x[li]=x[fi]=x[di]=x[pi]=x[hi]=x[gi]=x[vi]=x[bi]=x[yi]=!0;x[qa]=x[Xa]=x[si]=x[Za]=x[ui]=x[Ja]=x[Qa]=x[ri]=x[ei]=x[ti]=x[ni]=x[ai]=x[ii]=x[oi]=x[ci]=!1;function mi(r){return q(r)&&rt(r.length)&&!!x[Y(r)]}function Gr(r){return function(e){return r(e)}}var et=typeof exports=="object"&&exports&&!exports.nodeType&&exports,or=et&&typeof module=="object"&&module&&!module.nodeType&&module,Ti=or&&or.exports===et,Mr=Ti&&ze.process,Si=function(){try{var r=or&&or.require&&or.require("util").types;return r||Mr&&Mr.binding&&Mr.binding("util")}catch{}}();const er=Si;var je=er&&er.isTypedArray,xi=je?Gr(je):mi;const ji=xi;var Ei=Object.prototype,wi=Ei.hasOwnProperty;function tt(r,e){var t=fr(r),n=!t&&Na(r),i=!t&&!n&&Qe(r),o=!t&&!n&&!i&&ji(r),c=t||n||i||o,h=c?La(r.length,String):[],v=h.length;for(var y in r)(e||wi.call(r,y))&&!(c&&(y=="length"||i&&(y=="offset"||y=="parent")||o&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||Ka(y,v)))&&h.push(y);return h}var _i=Object.prototype;function Wr(r){var e=r&&r.constructor,t=typeof e=="function"&&e.prototype||_i;return r===t}var Ai=Ge(Object.keys,Object);const $i=Ai;var Ci=Object.prototype,Oi=Ci.hasOwnProperty;function Ii(r){if(!Wr(r))return $i(r);var e=[];for(var t in Object(r))Oi.call(r,t)&&t!="constructor"&&e.push(t);return e}function nt(r){return r!=null&&rt(r.length)&&!Ye(r)}function Kr(r){return nt(r)?tt(r):Ii(r)}function Fi(r,e){return r&&mr(e,Kr(e),r)}function Mi(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e}var Li=Object.prototype,Ri=Li.hasOwnProperty;function Pi(r){if(!lr(r))return Mi(r);var e=Wr(r),t=[];for(var n in r)n=="constructor"&&(e||!Ri.call(r,n))||t.push(n);return t}function Yr(r){return nt(r)?tt(r,!0):Pi(r)}function ki(r,e){return r&&mr(e,Yr(e),r)}var at=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ee=at&&typeof module=="object"&&module&&!module.nodeType&&module,Di=Ee&&Ee.exports===at,we=Di?D.Buffer:void 0,_e=we?we.allocUnsafe:void 0;function Ni(r,e){if(e)return r.slice();var t=r.length,n=_e?_e(t):new r.constructor(t);return r.copy(n),n}function it(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e}function Bi(r,e){for(var t=-1,n=r==null?0:r.length,i=0,o=[];++t<n;){var c=r[t];e(c,t,r)&&(o[i++]=c)}return o}function ot(){return[]}var Ui=Object.prototype,Vi=Ui.propertyIsEnumerable,Ae=Object.getOwnPropertySymbols,zi=Ae?function(r){return r==null?[]:(r=Object(r),Bi(Ae(r),function(e){return Vi.call(r,e)}))}:ot;const qr=zi;function Hi(r,e){return mr(r,qr(r),e)}function ct(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r}var Gi=Object.getOwnPropertySymbols,Wi=Gi?function(r){for(var e=[];r;)ct(e,qr(r)),r=Hr(r);return e}:ot;const st=Wi;function Ki(r,e){return mr(r,st(r),e)}function ut(r,e,t){var n=e(r);return fr(r)?n:ct(n,t(r))}function Yi(r){return ut(r,Kr,qr)}function qi(r){return ut(r,Yr,st)}var Xi=Z(D,"DataView");const Dr=Xi;var Zi=Z(D,"Promise");const Nr=Zi;var Ji=Z(D,"Set");const Br=Ji;var Qi=Z(D,"WeakMap");const Ur=Qi;var $e="[object Map]",ro="[object Object]",Ce="[object Promise]",Oe="[object Set]",Ie="[object WeakMap]",Fe="[object DataView]",eo=X(Dr),to=X(sr),no=X(Nr),ao=X(Br),io=X(Ur),G=Y;(Dr&&G(new Dr(new ArrayBuffer(1)))!=Fe||sr&&G(new sr)!=$e||Nr&&G(Nr.resolve())!=Ce||Br&&G(new Br)!=Oe||Ur&&G(new Ur)!=Ie)&&(G=function(r){var e=Y(r),t=e==ro?r.constructor:void 0,n=t?X(t):"";if(n)switch(n){case eo:return Fe;case to:return $e;case no:return Ce;case ao:return Oe;case io:return Ie}return e});const Xr=G;var oo=Object.prototype,co=oo.hasOwnProperty;function so(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&co.call(r,"index")&&(t.index=r.index,t.input=r.input),t}var uo=D.Uint8Array;const Me=uo;function Zr(r){var e=new r.constructor(r.byteLength);return new Me(e).set(new Me(r)),e}function lo(r,e){var t=e?Zr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}var fo=/\w*$/;function po(r){var e=new r.constructor(r.source,fo.exec(r));return e.lastIndex=r.lastIndex,e}var Le=U?U.prototype:void 0,Re=Le?Le.valueOf:void 0;function ho(r){return Re?Object(Re.call(r)):{}}function go(r,e){var t=e?Zr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}var vo="[object Boolean]",bo="[object Date]",yo="[object Map]",mo="[object Number]",To="[object RegExp]",So="[object Set]",xo="[object String]",jo="[object Symbol]",Eo="[object ArrayBuffer]",wo="[object DataView]",_o="[object Float32Array]",Ao="[object Float64Array]",$o="[object Int8Array]",Co="[object Int16Array]",Oo="[object Int32Array]",Io="[object Uint8Array]",Fo="[object Uint8ClampedArray]",Mo="[object Uint16Array]",Lo="[object Uint32Array]";function Ro(r,e,t){var n=r.constructor;switch(e){case Eo:return Zr(r);case vo:case bo:return new n(+r);case wo:return lo(r,t);case _o:case Ao:case $o:case Co:case Oo:case Io:case Fo:case Mo:case Lo:return go(r,t);case yo:return new n;case mo:case xo:return new n(r);case To:return po(r);case So:return new n;case jo:return ho(r)}}var Pe=Object.create,Po=function(){function r(){}return function(e){if(!lr(e))return{};if(Pe)return Pe(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}();const ko=Po;function Do(r){return typeof r.constructor=="function"&&!Wr(r)?ko(Hr(r)):{}}var No="[object Map]";function Bo(r){return q(r)&&Xr(r)==No}var ke=er&&er.isMap,Uo=ke?Gr(ke):Bo;const Vo=Uo;var zo="[object Set]";function Ho(r){return q(r)&&Xr(r)==zo}var De=er&&er.isSet,Go=De?Gr(De):Ho;const Wo=Go;var Ko=1,Yo=2,qo=4,lt="[object Arguments]",Xo="[object Array]",Zo="[object Boolean]",Jo="[object Date]",Qo="[object Error]",ft="[object Function]",rc="[object GeneratorFunction]",ec="[object Map]",tc="[object Number]",dt="[object Object]",nc="[object RegExp]",ac="[object Set]",ic="[object String]",oc="[object Symbol]",cc="[object WeakMap]",sc="[object ArrayBuffer]",uc="[object DataView]",lc="[object Float32Array]",fc="[object Float64Array]",dc="[object Int8Array]",pc="[object Int16Array]",hc="[object Int32Array]",gc="[object Uint8Array]",vc="[object Uint8ClampedArray]",bc="[object Uint16Array]",yc="[object Uint32Array]",S={};S[lt]=S[Xo]=S[sc]=S[uc]=S[Zo]=S[Jo]=S[lc]=S[fc]=S[dc]=S[pc]=S[hc]=S[ec]=S[tc]=S[dt]=S[nc]=S[ac]=S[ic]=S[oc]=S[gc]=S[vc]=S[bc]=S[yc]=!0;S[Qo]=S[ft]=S[cc]=!1;function gr(r,e,t,n,i,o){var c,h=e&Ko,v=e&Yo,y=e&qo;if(t&&(c=i?t(r,n,i,o):t(r)),c!==void 0)return c;if(!lr(r))return r;var C=fr(r);if(C){if(c=so(r),!h)return it(r,c)}else{var O=Xr(r),d=O==ft||O==rc;if(Qe(r))return Ni(r,h);if(O==dt||O==lt||d&&!i){if(c=v||d?{}:Do(r),!h)return v?Ki(r,ki(c,r)):Hi(r,Fi(c,r))}else{if(!S[O])return i?r:{};c=Ro(r,O,h)}}o||(o=new nr);var w=o.get(r);if(w)return w;o.set(r,c),Wo(r)?r.forEach(function($){c.add(gr($,e,t,$,r,o))}):Vo(r)&&r.forEach(function($,E){c.set(E,gr($,e,t,E,r,o))});var L=y?v?qi:Yi:v?Yr:Kr,I=C?void 0:L(r);return Oa(I||r,function($,E){I&&(E=$,$=r[E]),Xe(c,E,gr($,e,t,E,r,o))}),c}var mc=4;function Ne(r){return gr(r,mc)}function pt(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}var Tc="[object Symbol]";function Jr(r){return typeof r=="symbol"||q(r)&&Y(r)==Tc}var Sc="Expected a function";function Qr(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(Sc);var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var c=r.apply(this,n);return t.cache=o.set(i,c)||o,c};return t.cache=new(Qr.Cache||V),t}Qr.Cache=V;var xc=500;function jc(r){var e=Qr(r,function(n){return t.size===xc&&t.clear(),n}),t=e.cache;return e}var Ec=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wc=/\\(\\)?/g,_c=jc(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(Ec,function(t,n,i,o){e.push(i?o.replace(wc,"$1"):n||t)}),e});const Ac=_c;var $c=1/0;function Cc(r){if(typeof r=="string"||Jr(r))return r;var e=r+"";return e=="0"&&1/r==-$c?"-0":e}var Oc=1/0,Be=U?U.prototype:void 0,Ue=Be?Be.toString:void 0;function ht(r){if(typeof r=="string")return r;if(fr(r))return pt(r,ht)+"";if(Jr(r))return Ue?Ue.call(r):"";var e=r+"";return e=="0"&&1/r==-Oc?"-0":e}function Ic(r){return r==null?"":ht(r)}function gt(r){return fr(r)?pt(r,Cc):Jr(r)?[r]:it(Ac(Ic(r)))}function j(){return j=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},j.apply(this,arguments)}function rr(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,o;for(o=0;o<n.length;o++)i=n[o],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}var Tr=u.createContext(void 0);Tr.displayName="FormikContext";var Fc=Tr.Provider;Tr.Consumer;function vt(){var r=u.useContext(Tr);return r||Ln(!1),r}var M=function(e){return typeof e=="function"},Sr=function(e){return e!==null&&typeof e=="object"},Mc=function(e){return String(Math.floor(Number(e)))===e},Lr=function(e){return Object.prototype.toString.call(e)==="[object String]"},Lc=function(e){return u.Children.count(e)===0},Rr=function(e){return Sr(e)&&M(e.then)};function F(r,e,t,n){n===void 0&&(n=0);for(var i=gt(e);r&&n<i.length;)r=r[i[n++]];return n!==i.length&&!r||r===void 0?t:r}function W(r,e,t){for(var n=Ne(r),i=n,o=0,c=gt(e);o<c.length-1;o++){var h=c[o],v=F(r,c.slice(0,o+1));if(v&&(Sr(v)||Array.isArray(v)))i=i[h]=Ne(v);else{var y=c[o+1];i=i[h]=Mc(y)&&Number(y)>=0?[]:{}}}return(o===0?r:i)[c[o]]===t?r:(t===void 0?delete i[c[o]]:i[c[o]]=t,o===0&&t===void 0&&delete n[c[o]],n)}function bt(r,e,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(r);i<o.length;i++){var c=o[i],h=r[c];Sr(h)?t.get(h)||(t.set(h,!0),n[c]=Array.isArray(h)?[]:{},bt(h,e,t,n[c])):n[c]=e}return n}function Rc(r,e){switch(e.type){case"SET_VALUES":return j({},r,{values:e.payload});case"SET_TOUCHED":return j({},r,{touched:e.payload});case"SET_ERRORS":return H(r.errors,e.payload)?r:j({},r,{errors:e.payload});case"SET_STATUS":return j({},r,{status:e.payload});case"SET_ISSUBMITTING":return j({},r,{isSubmitting:e.payload});case"SET_ISVALIDATING":return j({},r,{isValidating:e.payload});case"SET_FIELD_VALUE":return j({},r,{values:W(r.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return j({},r,{touched:W(r.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return j({},r,{errors:W(r.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return j({},r,e.payload);case"SET_FORMIK_STATE":return e.payload(r);case"SUBMIT_ATTEMPT":return j({},r,{touched:bt(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return j({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return j({},r,{isSubmitting:!1});default:return r}}var z={},hr={};function Pc(r){var e=r.validateOnChange,t=e===void 0?!0:e,n=r.validateOnBlur,i=n===void 0?!0:n,o=r.validateOnMount,c=o===void 0?!1:o,h=r.isInitialValid,v=r.enableReinitialize,y=v===void 0?!1:v,C=r.onSubmit,O=rr(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),d=j({validateOnChange:t,validateOnBlur:i,validateOnMount:c,onSubmit:C},O),w=u.useRef(d.initialValues),L=u.useRef(d.initialErrors||z),I=u.useRef(d.initialTouched||hr),$=u.useRef(d.initialStatus),E=u.useRef(!1),R=u.useRef({});u.useEffect(function(){return E.current=!0,function(){E.current=!1}},[]);var xr=u.useState(0),jr=xr[1],dr=u.useRef({values:d.initialValues,errors:d.initialErrors||z,touched:d.initialTouched||hr,status:d.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=dr.current,m=u.useCallback(function(a){var s=dr.current;dr.current=Rc(s,a),s!==dr.current&&jr(function(l){return l+1})},[]),re=u.useCallback(function(a,s){return new Promise(function(l,p){var g=d.validate(a,s);g==null?l(z):Rr(g)?g.then(function(b){l(b||z)},function(b){p(b)}):l(g)})},[d.validate]),Er=u.useCallback(function(a,s){var l=d.validationSchema,p=M(l)?l(s):l,g=s&&p.validateAt?p.validateAt(s,a):Nc(a,p);return new Promise(function(b,A){g.then(function(){b(z)},function(N){N.name==="ValidationError"?b(Dc(N)):A(N)})})},[d.validationSchema]),ee=u.useCallback(function(a,s){return new Promise(function(l){return l(R.current[a].validate(s))})},[]),te=u.useCallback(function(a){var s=Object.keys(R.current).filter(function(p){return M(R.current[p].validate)}),l=s.length>0?s.map(function(p){return ee(p,F(a,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(l).then(function(p){return p.reduce(function(g,b,A){return b==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||b&&(g=W(g,s[A],b)),g},{})})},[ee]),Tt=u.useCallback(function(a){return Promise.all([te(a),d.validationSchema?Er(a):{},d.validate?re(a):{}]).then(function(s){var l=s[0],p=s[1],g=s[2],b=Pr.all([l,p,g],{arrayMerge:Bc});return b})},[d.validate,d.validationSchema,te,re,Er]),k=P(function(a){return a===void 0&&(a=T.values),m({type:"SET_ISVALIDATING",payload:!0}),Tt(a).then(function(s){return E.current&&(m({type:"SET_ISVALIDATING",payload:!1}),m({type:"SET_ERRORS",payload:s})),s})});u.useEffect(function(){c&&E.current===!0&&H(w.current,d.initialValues)&&k(w.current)},[c,k]);var ar=u.useCallback(function(a){var s=a&&a.values?a.values:w.current,l=a&&a.errors?a.errors:L.current?L.current:d.initialErrors||{},p=a&&a.touched?a.touched:I.current?I.current:d.initialTouched||{},g=a&&a.status?a.status:$.current?$.current:d.initialStatus;w.current=s,L.current=l,I.current=p,$.current=g;var b=function(){m({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:l,touched:p,status:g,values:s,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(d.onReset){var A=d.onReset(T.values,de);Rr(A)?A.then(b):b()}else b()},[d.initialErrors,d.initialStatus,d.initialTouched,d.onReset]);u.useEffect(function(){E.current===!0&&!H(w.current,d.initialValues)&&y&&(w.current=d.initialValues,ar(),c&&k(w.current))},[y,d.initialValues,ar,c,k]),u.useEffect(function(){y&&E.current===!0&&!H(L.current,d.initialErrors)&&(L.current=d.initialErrors||z,m({type:"SET_ERRORS",payload:d.initialErrors||z}))},[y,d.initialErrors]),u.useEffect(function(){y&&E.current===!0&&!H(I.current,d.initialTouched)&&(I.current=d.initialTouched||hr,m({type:"SET_TOUCHED",payload:d.initialTouched||hr}))},[y,d.initialTouched]),u.useEffect(function(){y&&E.current===!0&&!H($.current,d.initialStatus)&&($.current=d.initialStatus,m({type:"SET_STATUS",payload:d.initialStatus}))},[y,d.initialStatus,d.initialTouched]);var ne=P(function(a){if(R.current[a]&&M(R.current[a].validate)){var s=F(T.values,a),l=R.current[a].validate(s);return Rr(l)?(m({type:"SET_ISVALIDATING",payload:!0}),l.then(function(p){return p}).then(function(p){m({type:"SET_FIELD_ERROR",payload:{field:a,value:p}}),m({type:"SET_ISVALIDATING",payload:!1})})):(m({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),Promise.resolve(l))}else if(d.validationSchema)return m({type:"SET_ISVALIDATING",payload:!0}),Er(T.values,a).then(function(p){return p}).then(function(p){m({type:"SET_FIELD_ERROR",payload:{field:a,value:F(p,a)}}),m({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),St=u.useCallback(function(a,s){var l=s.validate;R.current[a]={validate:l}},[]),xt=u.useCallback(function(a){delete R.current[a]},[]),ae=P(function(a,s){m({type:"SET_TOUCHED",payload:a});var l=s===void 0?i:s;return l?k(T.values):Promise.resolve()}),ie=u.useCallback(function(a){m({type:"SET_ERRORS",payload:a})},[]),oe=P(function(a,s){var l=M(a)?a(T.values):a;m({type:"SET_VALUES",payload:l});var p=s===void 0?t:s;return p?k(l):Promise.resolve()}),pr=u.useCallback(function(a,s){m({type:"SET_FIELD_ERROR",payload:{field:a,value:s}})},[]),J=P(function(a,s,l){m({type:"SET_FIELD_VALUE",payload:{field:a,value:s}});var p=l===void 0?t:l;return p?k(W(T.values,a,s)):Promise.resolve()}),ce=u.useCallback(function(a,s){var l=s,p=a,g;if(!Lr(a)){a.persist&&a.persist();var b=a.target?a.target:a.currentTarget,A=b.type,N=b.name,Cr=b.id,Or=b.value,It=b.checked,cs=b.outerHTML,pe=b.options,Ft=b.multiple;l=s||N||Cr,p=/number|range/.test(A)?(g=parseFloat(Or),isNaN(g)?"":g):/checkbox/.test(A)?Vc(F(T.values,l),It,Or):pe&&Ft?Uc(pe):Or}l&&J(l,p)},[J,T.values]),wr=P(function(a){if(Lr(a))return function(s){return ce(s,a)};ce(a)}),Q=P(function(a,s,l){s===void 0&&(s=!0),m({type:"SET_FIELD_TOUCHED",payload:{field:a,value:s}});var p=l===void 0?i:l;return p?k(T.values):Promise.resolve()}),se=u.useCallback(function(a,s){a.persist&&a.persist();var l=a.target,p=l.name,g=l.id,b=l.outerHTML,A=s||p||g;Q(A,!0)},[Q]),_r=P(function(a){if(Lr(a))return function(s){return se(s,a)};se(a)}),ue=u.useCallback(function(a){M(a)?m({type:"SET_FORMIK_STATE",payload:a}):m({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),le=u.useCallback(function(a){m({type:"SET_STATUS",payload:a})},[]),fe=u.useCallback(function(a){m({type:"SET_ISSUBMITTING",payload:a})},[]),Ar=P(function(){return m({type:"SUBMIT_ATTEMPT"}),k().then(function(a){var s=a instanceof Error,l=!s&&Object.keys(a).length===0;if(l){var p;try{if(p=Et(),p===void 0)return}catch(g){throw g}return Promise.resolve(p).then(function(g){return E.current&&m({type:"SUBMIT_SUCCESS"}),g}).catch(function(g){if(E.current)throw m({type:"SUBMIT_FAILURE"}),g})}else if(E.current&&(m({type:"SUBMIT_FAILURE"}),s))throw a})}),jt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),Ar().catch(function(s){console.warn("Warning: An unhandled error was caught from submitForm()",s)})}),de={resetForm:ar,validateForm:k,validateField:ne,setErrors:ie,setFieldError:pr,setFieldTouched:Q,setFieldValue:J,setStatus:le,setSubmitting:fe,setTouched:ae,setValues:oe,setFormikState:ue,submitForm:Ar},Et=P(function(){return C(T.values,de)}),wt=P(function(a){a&&a.preventDefault&&M(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&M(a.stopPropagation)&&a.stopPropagation(),ar()}),_t=u.useCallback(function(a){return{value:F(T.values,a),error:F(T.errors,a),touched:!!F(T.touched,a),initialValue:F(w.current,a),initialTouched:!!F(I.current,a),initialError:F(L.current,a)}},[T.errors,T.touched,T.values]),At=u.useCallback(function(a){return{setValue:function(l,p){return J(a,l,p)},setTouched:function(l,p){return Q(a,l,p)},setError:function(l){return pr(a,l)}}},[J,Q,pr]),$t=u.useCallback(function(a){var s=Sr(a),l=s?a.name:a,p=F(T.values,l),g={name:l,value:p,onChange:wr,onBlur:_r};if(s){var b=a.type,A=a.value,N=a.as,Cr=a.multiple;b==="checkbox"?A===void 0?g.checked=!!p:(g.checked=!!(Array.isArray(p)&&~p.indexOf(A)),g.value=A):b==="radio"?(g.checked=p===A,g.value=A):N==="select"&&Cr&&(g.value=g.value||[],g.multiple=!0)}return g},[_r,wr,T.values]),$r=u.useMemo(function(){return!H(w.current,T.values)},[w.current,T.values]),Ct=u.useMemo(function(){return typeof h<"u"?$r?T.errors&&Object.keys(T.errors).length===0:h!==!1&&M(h)?h(d):h:T.errors&&Object.keys(T.errors).length===0},[h,$r,T.errors,d]),Ot=j({},T,{initialValues:w.current,initialErrors:L.current,initialTouched:I.current,initialStatus:$.current,handleBlur:_r,handleChange:wr,handleReset:wt,handleSubmit:jt,resetForm:ar,setErrors:ie,setFormikState:ue,setFieldTouched:Q,setFieldValue:J,setFieldError:pr,setStatus:le,setSubmitting:fe,setTouched:ae,setValues:oe,submitForm:Ar,validateForm:k,validateField:ne,isValid:Ct,dirty:$r,unregisterField:xt,registerField:St,getFieldProps:$t,getFieldMeta:_t,getFieldHelpers:At,validateOnBlur:i,validateOnChange:t,validateOnMount:c});return Ot}function kc(r){var e=Pc(r),t=r.component,n=r.children,i=r.render,o=r.innerRef;return u.useImperativeHandle(o,function(){return e}),u.createElement(Fc,{value:e},t?u.createElement(t,e):i?i(e):n?M(n)?n(e):Lc(n)?null:u.Children.only(n):null)}function Dc(r){var e={};if(r.inner){if(r.inner.length===0)return W(e,r.path,r.message);for(var i=r.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var c=o;F(e,c.path)||(e=W(e,c.path,c.message))}}return e}function Nc(r,e,t,n){t===void 0&&(t=!1);var i=Vr(r);return e[t?"validateSync":"validate"](i,{abortEarly:!1,context:n||i})}function Vr(r){var e=Array.isArray(r)?[]:{};for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=String(t);Array.isArray(r[n])===!0?e[n]=r[n].map(function(i){return Array.isArray(i)===!0||ge(i)?Vr(i):i!==""?i:void 0}):ge(r[n])?e[n]=Vr(r[n]):e[n]=r[n]!==""?r[n]:void 0}return e}function Bc(r,e,t){var n=r.slice();return e.forEach(function(o,c){if(typeof n[c]>"u"){var h=t.clone!==!1,v=h&&t.isMergeableObject(o);n[c]=v?Pr(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[c]=Pr(r[c],o,t):r.indexOf(o)===-1&&n.push(o)}),n}function Uc(r){return Array.from(r).filter(function(e){return e.selected}).map(function(e){return e.value})}function Vc(r,e,t){if(typeof r=="boolean")return!!e;var n=[],i=!1,o=-1;if(Array.isArray(r))n=r,o=r.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!e;return e&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var zc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?u.useLayoutEffect:u.useEffect;function P(r){var e=u.useRef(r);return zc(function(){e.current=r}),u.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}function Hc(r){var e=r.validate,t=r.name,n=r.render,i=r.children,o=r.as,c=r.component,h=r.className,v=rr(r,["validate","name","render","children","as","component","className"]),y=vt(),C=rr(y,["validate","validationSchema"]),O=C.registerField,d=C.unregisterField;u.useEffect(function(){return O(t,{validate:e}),function(){d(t)}},[O,d,t,e]);var w=C.getFieldProps(j({name:t},v)),L=C.getFieldMeta(t),I={field:w,form:C};if(n)return n(j({},I,{meta:L}));if(M(i))return i(j({},I,{meta:L}));if(c){if(typeof c=="string"){var $=v.innerRef,E=rr(v,["innerRef"]);return u.createElement(c,j({ref:$},w,E,{className:h}),i)}return u.createElement(c,j({field:w,form:C},v,{className:h}),i)}var R=o||"input";if(typeof R=="string"){var xr=v.innerRef,jr=rr(v,["innerRef"]);return u.createElement(R,j({ref:xr},w,jr,{className:h}),i)}return u.createElement(R,j({},w,v,{className:h}),i)}var yt=u.forwardRef(function(r,e){var t=r.action,n=rr(r,["action"]),i=t??"#",o=vt(),c=o.handleReset,h=o.handleSubmit;return u.createElement("form",j({onSubmit:h,ref:e,onReset:c,action:i},n))});yt.displayName="Form";function Gc(r){return tr({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(r)}function Ve(r){return tr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]})(r)}const Wc=_.div`
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
`,Kc=_.label`
  position: absolute;
  width: 0px;
  height: 0px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`,Yc=_(Hc)`
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
`,qc=_.button`
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
`,Xc=_.button`
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
`;function Zc(){const[r,e]=u.useState(!1),t=()=>e(!r),n=Pt(),i=({search:o},c)=>{if(o.trim()===""){Bt.error("Please enter a word to search for");return}n(`movies?query=${encodeURIComponent(o)}`),c.resetForm()};return f.jsxs(Wc,{isSearching:r,children:[r?f.jsx(kc,{initialValues:{search:""},onSubmit:i,children:f.jsxs(yt,{children:[f.jsx(qc,{type:"submit",value:"submit",children:f.jsx(Ve,{size:30})}),f.jsx(Kc,{htmlFor:"search"}),f.jsx(Yc,{type:"text",id:"search",name:"search",placeholder:"Search",isSearching:r})]})}):void 0,f.jsx(Xc,{onClick:t,children:r?f.jsx(Gc,{size:30}):f.jsx(Ve,{size:30})})]})}function Jc(r){return tr({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"}}]})(r)}function Qc(r){return tr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"}}]})(r)}const rs=_.label`
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
`,es=_(Jc)`
  animation: ${mt} 0.5s;
`,ts=_(Qc)`
  animation: ${mt} 0.5s;
`;function ns(){const[r,e]=u.useState(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(n?"dark":"light")});u.useEffect(()=>{localStorage.setItem("theme",r)},[r]),u.useEffect(()=>{const{body:n}=document;n.dataset.theme=r},[r]);const t=()=>{e(r==="light"?"dark":"light")};return f.jsxs(rs,{className:"switcher",children:[f.jsx("input",{type:"checkbox",onChange:t,checked:r==="dark"}),r==="dark"?f.jsx(es,{}):f.jsx(ts,{})]})}function as(){return f.jsx(Ht,{children:f.jsxs(Gt,{children:[f.jsx(Zt,{}),f.jsx(en,{}),f.jsx(Zc,{}),f.jsx(ns,{}),f.jsx(Yt,{}),f.jsx(Qt,{})]})})}const is=_.main``;function os(){return f.jsx(is,{children:f.jsx(zr,{children:f.jsx(u.Suspense,{fallback:f.jsx(Nt,{}),children:f.jsx(Dt,{})})})})}function fs(){return f.jsxs(Ut,{children:[f.jsx(as,{}),f.jsx(os,{}),f.jsx(zt,{})]})}export{fs as default};
