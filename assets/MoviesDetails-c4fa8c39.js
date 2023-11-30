import{s as t,N as w,L as j,j as r,b as k,r as o,a as L,O as y}from"./index-6553302e.js";import{b as R,c as S}from"./index.esm-b547c335.js";import{Q as E}from"./react-toastify.esm-59dbd6c9.js";import{f as O}from"./fetch-f3c05134.js";import l from"./Loader-1fc127eb.js";const B=t.div`
  display: grid;
  grid-template: auto auto 1fr auto auto / 1fr 3fr auto;
  gap: 25px;
  height: 100%;
  font-size: 16px;

  @media (width <= 576px) {
    grid-template: auto auto auto auto auto auto auto / 1fr auto;
  }
`,C=t.img`
  width: 100%;
  height: 100%;
  grid-row: 1 / 4;
  grid-column: 1 / 2;
  border-radius: 4px;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  object-fit: cover;

  @media (width <= 576px) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
`,D=t.h1`
  font-size: 20px;
  font-weight: bold;
  grid-row: 1 / 2;
  grid-column: 2 / 4;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  @media (width <= 576px) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
`,_=t.p`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
`,$=t.p`
  display: flex;
  grid-row: 2 / 3;
  grid-column: 3 / 4;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  @media (width <= 576px) {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }
`,z=t.p`
  text-align: justify;
  line-height: 1.2;
  grid-row: 3 / 4;
  grid-column: 2 / 4;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  @media (width <= 576px) {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }
`,A=t.ul`
  grid-row: 4 / 5;
  grid-column: 1 / 2;
  display: flex;
  gap: 25px;
  justify-content: space-between;

  li {
    width: 100%;
  }

  @media (width <= 576px) {
    grid-row: 5 / 6;
    grid-column: 1 / 3;
  }
`,x=t(w)`
  text-align: center;
  border-radius: 4px;
  padding: 8px 16px;
  display: block;
  background-color: rgba(var(--accent), 0.2);
  color: rgba(var(--text), 1);
  transition: var(--trans);

  &:hover {
    background-color: rgba(var(--text), 0.7);
    color: rgba(var(--text-primary), 1);

    &.active {
      background-color: rgba(var(--accent), 0.7);
      color: rgba(var(--text-primary), 1);
    }
  }

  &.active {
    background-color: rgba(var(--accent), 1);
    color: rgba(var(--text-primary), 1);
    transition: var(--trans);
  }
`,F=t(j)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 25px;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  :hover {
    color: rgba(var(--text), 0.7);
  }
`,I=t.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;function P({to:i}){return r.jsx(F,{to:i,children:r.jsxs(I,{children:[r.jsx(R,{size:"24"}),r.jsx("p",{children:"Back"})]})})}const T="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function U(){var d;const{id:i}=k(),[n,g]=o.useState(),[p,e]=o.useState(!1),u=L(),m=o.useRef(((d=u.state)==null?void 0:d.from)??"/");if(o.useEffect(()=>{i&&(e(!0),O("movieDetails","","",i).then(a=>(e(!1),g(a),a)).catch(a=>{throw E.error(`Error fetching data: ${a.message}`),e(!1),a}))},[i]),!i||p||!n)return r.jsx(l,{});const{title:s,genres:h,vote_average:v,overview:f,poster_path:c}=n,b=c?`https://image.tmdb.org/t/p/w500${c}`:T;return r.jsxs(r.Fragment,{children:[r.jsx(P,{to:m.current}),r.jsxs(B,{children:[r.jsx(C,{src:b,alt:s}),r.jsx(D,{children:s}),r.jsx(_,{children:h.map(({name:a})=>a).join(", ")}),r.jsxs($,{children:[r.jsx(S,{})," ",v.toFixed(1)]}),r.jsx(z,{children:f}),r.jsxs(A,{children:[r.jsx("li",{children:r.jsx(x,{to:"cast",children:"Cast"})}),r.jsx("li",{children:r.jsx(x,{to:"reviews",children:"Reviews"})})]}),r.jsx(o.Suspense,{fallback:r.jsx(l,{}),children:r.jsx(y,{})})]})]})}function J(){return r.jsx(U,{})}export{J as default};
