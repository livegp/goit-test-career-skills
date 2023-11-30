import{s as d,P as t,a as q,j as e,L,r as p}from"./index-6Ym-LLNm.js";import w from"./Loader-stAxNtb2.js";import{Q as S}from"./react-toastify.esm-mJlMkzvY.js";import{f as T}from"./fetch-5rLrg05K.js";const E=d.li`
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow:
      0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    object-fit: cover;
    transition: var(--trans);

    &:hover {
      transform: scale(1.03);
      cursor: pointer;
    }
  }
`,P="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700";function m({post:r}){const{id:o,poster_path:a,title:c}=r,l=q(),n=a?`https://image.tmdb.org/t/p/w500${a}`:P;return e.jsx(E,{children:e.jsx(L,{to:`/movies/${o}`,state:{from:l},children:e.jsx("img",{src:n,width:250,alt:c,role:"presentation"})})})}m.propTypes={post:t.shape({id:t.number.isRequired,poster_path:t.string,title:t.string.isRequired}).isRequired};const _=d.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(273px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`,k=d.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;
  color: rgba(var(--text), 1);
  transition: var(--trans);
`,$=d.button`
  display: flex;
  margin: 25px auto 0;
  padding: 8px 16px;
  border-radius: 4px;
  text-align: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  max-width: 180px;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: rgba(var(--text-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  &:hover,
  &:focus {
    background-color: rgba(var(--accent), 0.7);
    color: rgba(var(--text-primary), 1);
  }
`;function h({onLoadMore:r}){return e.jsx($,{onClick:r,children:"Load more"})}h.propTypes={onLoadMore:t.func.isRequired};function C({results:r,title:o,loading:a,onLoadMore:c,total:l}){const i=Array.isArray(r)&&r.length>0;return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:o}),i&&e.jsx(_,{children:r.map(n=>e.jsx(m,{post:n},n.id))}),a&&e.jsx(w,{}),!a&&r.length<l&&e.jsx(h,{onLoadMore:c})]})}C.propTypes={results:t.arrayOf(t.shape({id:t.number.isRequired,poster_path:t.string,title:t.string.isRequired}).isRequired).isRequired,title:t.string.isRequired,loading:t.bool.isRequired,onLoadMore:t.func.isRequired,total:t.number.isRequired};const U=(r,o,a=1)=>{const[c,l]=p.useState([]),[i,n]=p.useState(a),[f,b]=p.useState(0),[R,u]=p.useState(!1),[x,y]=p.useState(o),g=p.useCallback(()=>{u(!0),T(r,x,i).then(s=>(b(s.total_results),l(j=>i===1?s.results:[...j,...s.results]),u(!1),s)).catch(s=>{S.error(`Error fetching data: ${s.message}`),u(!1)})},[r,x,i]),v=()=>{n(s=>s+1)};return p.useEffect(()=>{x!==o&&(n(1),l([]),y(o)),g()},[o,i,x,g]),{results:c,loading:R,total:f,handleLoadMore:v}};export{C as G,U as u};
