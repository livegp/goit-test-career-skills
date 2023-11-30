import{s as d,b as f,r as i,j as s}from"./index-6553302e.js";import{Q as l}from"./react-toastify.esm-59dbd6c9.js";import{f as g}from"./fetch-f3c05134.js";import h from"./Loader-1fc127eb.js";import{N as u}from"./NoDataMessage-e2cc3cba.js";const p=d.ul`
  display: grid;
  gap: 25px;
  grid-row: 5 / 6;
  grid-column: 1 / 4;
  text-align: justify;
  color: rgba(var(--text), 1);
  transition: var(--trans);

  h3 {
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.2;
  }

  @media (width <= 576px) {
    grid-row: 6 / 7;
    grid-column: 1 / 3;
  }
`;function R(){const{id:t}=f(),[e,o]=i.useState([]),[n,a]=i.useState(!0);return i.useEffect(()=>{t&&g("movieReviews","","",t).then(r=>(o(r.results),a(!1),r)).catch(r=>{l.error(`Error fetching data: ${r.message}`),a(!1)})},[t]),n?s.jsx(h,{}):Array.isArray(e)&&e.length>0?s.jsx(p,{children:e.map(({id:r,author:m,content:c})=>s.jsxs("li",{children:[s.jsxs("h3",{children:[m,":"]}),s.jsx("p",{children:c})]},r))}):s.jsx(u,{})}export{R as default};
