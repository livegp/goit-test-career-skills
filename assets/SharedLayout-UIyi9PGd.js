import{s as t,j as r,r as a,L as g,N as p,G as l,c as h,O as x}from"./index-0kBqfsQt.js";import{F as m}from"./index.esm-I5El1JWx.js";import f from"./Loader-UTf8uHxY.js";const u=t.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
`,c=t.div`
  max-width: 1160px;
  height: 100%;
  width: 100%;
  padding: 25px 10px;
  margin: 0 auto;

  /* display: grid; */
  justify-items: center;
  gap: 25px;
`,v=t.footer`
  color: rgba(var(--bg-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  a {
    color: rgba(var(--bg-primary), 1);
    transition: var(--trans);

    &:hover {
      color: #f7f7f7;
    }
  }
`;function b(){return r.jsx(v,{children:r.jsx(c,{children:r.jsxs("p",{children:[" ","© 2023 AutoMarket App. All rights reserved. Designed and Developed by"," ",r.jsx("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/oleksandr-pishta",children:"Oleksandr Pishta"})]})})})}const j=t.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);
`,y=t(c)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 100%;
  padding: 15px;
  gap: 25px;
`,w=t.div`
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
`;function k(){const[e,o]=a.useState(window.innerWidth);return a.useEffect(()=>{const n=()=>{o(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]),r.jsx(w,{children:r.jsxs(g,{to:"/",children:[r.jsx(m,{}),e>=600&&r.jsx("p",{children:"AutoMarket"})]})})}const L=t.nav`
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
`,s=t(p)`
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
`;function z(){return r.jsx(L,{children:r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(s,{to:"/",children:"Home"})}),r.jsx("li",{children:r.jsx(s,{to:"/catalog",children:"Catalog"})}),r.jsx("li",{children:r.jsx(s,{to:"/favorites",children:"Favorites"})})]})})}function M(e){return l({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"}}]})(e)}function T(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"}}]})(e)}const C=t.label`
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
`,d=h`   
  0% {
    transform: rotate(-360deg) scale(0);
    opacity: 0;
  }

  75% {
    transform: rotate(25deg);
  }
`,S=t(M)`
  animation: ${d} 0.5s;
`,B=t(T)`
  animation: ${d} 0.5s;
`;function E(){const[e,o]=a.useState(()=>{const i=window.matchMedia("(prefers-color-scheme: dark)").matches;return localStorage.getItem("theme")||(i?"dark":"light")});a.useEffect(()=>{localStorage.setItem("theme",e)},[e]),a.useEffect(()=>{const{body:i}=document;i.dataset.theme=e},[e]);const n=()=>{o(e==="light"?"dark":"light")};return r.jsxs(C,{children:[r.jsx("input",{type:"checkbox",onChange:n,checked:e==="dark"}),e==="dark"?r.jsx(S,{}):r.jsx(B,{})]})}function F(){return r.jsx(j,{children:r.jsxs(y,{children:[r.jsx(k,{}),r.jsx(z,{}),r.jsx(E,{})]})})}const W=t.main`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;function N(){return r.jsx(W,{children:r.jsx(c,{children:r.jsx(a.Suspense,{fallback:r.jsx(f,{}),children:r.jsx(x,{})})})})}function I(){return r.jsxs(u,{children:[r.jsx(F,{}),r.jsx(N,{}),r.jsx(b,{})]})}export{I as default};
