import{r as g,t as T,s as P,P as u,j as h,u as fe}from"./index-gCqsv9Z1.js";import{F as he}from"./index.esm-4Ts0lg7r.js";import ye from"./Loader-33wfuWuM.js";function ue(e){var t,s,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=ue(e[t]))&&(o&&(o+=" "),o+=s);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function A(){for(var e,t,s=0,o="";s<arguments.length;)(e=arguments[s++])&&(t=ue(e))&&(o&&(o+=" "),o+=t);return o}const W=e=>typeof e=="number"&&!isNaN(e),Q=e=>typeof e=="string",w=e=>typeof e=="function",Z=e=>Q(e)||w(e)?e:null,ne=e=>g.isValidElement(e)||Q(e)||w(e)||W(e);function ve(e,t,s){s===void 0&&(s=300);const{scrollHeight:o,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=o+"px",c.transition=`all ${s}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(t,s)})})}function ee(e){let{enter:t,exit:s,appendPosition:o=!1,collapse:c=!0,collapseDuration:i=300}=e;return function(n){let{children:r,position:C,preventExitTransition:x,done:y,nodeRef:m,isIn:L}=n;const a=o?`${t}--${C}`:t,p=o?`${s}--${C}`:s,f=g.useRef(0);return g.useLayoutEffect(()=>{const l=m.current,d=a.split(" "),R=_=>{_.target===m.current&&(l.dispatchEvent(new Event("d")),l.removeEventListener("animationend",R),l.removeEventListener("animationcancel",R),f.current===0&&_.type!=="animationcancel"&&l.classList.remove(...d))};l.classList.add(...d),l.addEventListener("animationend",R),l.addEventListener("animationcancel",R)},[]),g.useEffect(()=>{const l=m.current,d=()=>{l.removeEventListener("animationend",d),c?ve(l,y,i):y()};L||(x?d():(f.current=1,l.className+=` ${p}`,l.addEventListener("animationend",d)))},[L]),T.createElement(T.Fragment,null,r)}}function ie(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const j={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(o=>o!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},Y=e=>{let{theme:t,type:s,...o}=e;return T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...o})},se={info:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return T.createElement("div",{className:"Toastify__spinner"})}};function xe(e){const[,t]=g.useReducer(a=>a+1,0),[s,o]=g.useState([]),c=g.useRef(null),i=g.useRef(new Map).current,n=a=>s.indexOf(a)!==-1,r=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:a=>i.get(a)}).current;function C(a){let{containerId:p}=a;const{limit:f}=r.props;!f||p&&r.containerId!==p||(r.count-=r.queue.length,r.queue=[])}function x(a){o(p=>a==null?[]:p.filter(f=>f!==a))}function y(){const{toastContent:a,toastProps:p,staleId:f}=r.queue.shift();L(a,p,f)}function m(a,p){let{delay:f,staleId:l,...d}=p;if(!ne(a)||function(N){return!c.current||r.props.enableMultiContainer&&N.containerId!==r.props.containerId||i.has(N.toastId)&&N.updateId==null}(d))return;const{toastId:R,updateId:_,data:v}=d,{props:b}=r,B=()=>x(R),$=_==null;$&&r.count++;const I={...b,style:b.toastStyle,key:r.toastKey++,...Object.fromEntries(Object.entries(d).filter(N=>{let[q,O]=N;return O!=null})),toastId:R,updateId:_,data:v,closeToast:B,isIn:!1,className:Z(d.className||b.toastClassName),bodyClassName:Z(d.bodyClassName||b.bodyClassName),progressClassName:Z(d.progressClassName||b.progressClassName),autoClose:!d.isLoading&&(z=d.autoClose,V=b.autoClose,z===!1||W(z)&&z>0?z:V),deleteToast(){const N=ie(i.get(R),"removed");i.delete(R),j.emit(4,N);const q=r.queue.length;if(r.count=R==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),q>0){const O=R==null?r.props.limit:1;if(q===1||O===1)r.displayedToast++,y();else{const S=O>q?q:O;r.displayedToast=S;for(let k=0;k<S;k++)y()}}else t()}};var z,V;I.iconOut=function(N){let{theme:q,type:O,isLoading:S,icon:k}=N,M=null;const F={theme:q,type:O};return k===!1||(w(k)?M=k(F):g.isValidElement(k)?M=g.cloneElement(k,F):Q(k)||W(k)?M=k:S?M=se.spinner():(X=>X in se)(O)&&(M=se[O](F))),M}(I),w(d.onOpen)&&(I.onOpen=d.onOpen),w(d.onClose)&&(I.onClose=d.onClose),I.closeButton=b.closeButton,d.closeButton===!1||ne(d.closeButton)?I.closeButton=d.closeButton:d.closeButton===!0&&(I.closeButton=!ne(b.closeButton)||b.closeButton);let D=a;g.isValidElement(a)&&!Q(a.type)?D=g.cloneElement(a,{closeToast:B,toastProps:I,data:v}):w(a)&&(D=a({closeToast:B,toastProps:I,data:v})),b.limit&&b.limit>0&&r.count>b.limit&&$?r.queue.push({toastContent:D,toastProps:I,staleId:l}):W(f)?setTimeout(()=>{L(D,I,l)},f):L(D,I,l)}function L(a,p,f){const{toastId:l}=p;f&&i.delete(f);const d={content:a,props:p};i.set(l,d),o(R=>[...R,l].filter(_=>_!==f)),j.emit(4,ie(d,d.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(r.containerId=e.containerId,j.cancelEmit(3).on(0,m).on(1,a=>c.current&&x(a)).on(5,C).emit(2,r),()=>{i.clear(),j.emit(3,r)}),[]),g.useEffect(()=>{r.props=e,r.isToastActive=n,r.displayedToast=s.length}),{getToastToRender:function(a){const p=new Map,f=Array.from(i.values());return e.newestOnTop&&f.reverse(),f.forEach(l=>{const{position:d}=l.props;p.has(d)||p.set(d,[]),p.get(d).push(l)}),Array.from(p,l=>a(l[0],l[1]))},containerRef:c,isToastActive:n}}function ae(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function be(e){const[t,s]=g.useState(!1),[o,c]=g.useState(!1),i=g.useRef(null),n=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=g.useRef(e),{autoClose:C,pauseOnHover:x,closeToast:y,onClick:m,closeOnClick:L}=e;function a(v){if(e.draggable){v.nativeEvent.type==="touchstart"&&v.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",R),document.addEventListener("touchmove",d),document.addEventListener("touchend",R);const b=i.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=b.getBoundingClientRect(),b.style.transition="",n.x=ae(v.nativeEvent),n.y=le(v.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function p(v){if(n.boundingRect){const{top:b,bottom:B,left:$,right:I}=n.boundingRect;v.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=$&&n.x<=I&&n.y>=b&&n.y<=B?l():f()}}function f(){s(!0)}function l(){s(!1)}function d(v){const b=i.current;n.canDrag&&b&&(n.didMove=!0,t&&l(),n.x=ae(v),n.y=le(v),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,b.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function R(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",R),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",R);const v=i.current;if(n.canDrag&&n.didMove&&v){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return c(!0),void e.closeToast();v.style.transition="transform 0.2s, opacity 0.2s",v.style.transform=`translate${e.draggableDirection}(0)`,v.style.opacity="1"}}g.useEffect(()=>{r.current=e}),g.useEffect(()=>(i.current&&i.current.addEventListener("d",f,{once:!0}),w(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const v=r.current;w(v.onClose)&&v.onClose(g.isValidElement(v.children)&&v.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||l(),window.addEventListener("focus",f),window.addEventListener("blur",l)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",f),window.removeEventListener("blur",l))}),[e.pauseOnFocusLoss]);const _={onMouseDown:a,onTouchStart:a,onMouseUp:p,onTouchEnd:p};return C&&x&&(_.onMouseEnter=l,_.onMouseLeave=f),L&&(_.onClick=v=>{m&&m(v),n.canCloseOnClick&&y()}),{playToast:f,pauseToast:l,isRunning:t,preventExitTransition:o,toastRef:i,eventHandlers:_}}function de(e){let{closeToast:t,theme:s,ariaLabel:o="close"}=e;return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:c=>{c.stopPropagation(),t(c)},"aria-label":o},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Te(e){let{delay:t,isRunning:s,closeToast:o,type:c="default",hide:i,className:n,style:r,controlledProgress:C,progress:x,rtl:y,isIn:m,theme:L}=e;const a=i||C&&x===0,p={...r,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:a?0:1};C&&(p.transform=`scaleX(${x})`);const f=A("Toastify__progress-bar",C?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${L}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":y}),l=w(n)?n({rtl:y,type:c,defaultClassName:f}):A(f,n);return T.createElement("div",{role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:l,style:p,[C&&x>=1?"onTransitionEnd":"onAnimationEnd"]:C&&x<1?null:()=>{m&&o()}})}const Ee=e=>{const{isRunning:t,preventExitTransition:s,toastRef:o,eventHandlers:c}=be(e),{closeButton:i,children:n,autoClose:r,onClick:C,type:x,hideProgressBar:y,closeToast:m,transition:L,position:a,className:p,style:f,bodyClassName:l,bodyStyle:d,progressClassName:R,progressStyle:_,updateId:v,role:b,progress:B,rtl:$,toastId:I,deleteToast:z,isIn:V,isLoading:D,iconOut:N,closeOnClick:q,theme:O}=e,S=A("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${x}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":q}),k=w(p)?p({rtl:$,position:a,type:x,defaultClassName:S}):A(S,p),M=!!B||!r,F={closeToast:m,type:x,theme:O};let X=null;return i===!1||(X=w(i)?i(F):g.isValidElement(i)?g.cloneElement(i,F):de(F)),T.createElement(L,{isIn:V,done:z,position:a,preventExitTransition:s,nodeRef:o},T.createElement("div",{id:I,onClick:C,className:k,...c,style:f,ref:o},T.createElement("div",{...V&&{role:b},className:w(l)?l({type:x}):A("Toastify__toast-body",l),style:d},N!=null&&T.createElement("div",{className:A("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},N),T.createElement("div",null,n)),X,T.createElement(Te,{...v&&!M?{key:`pb-${v}`}:{},rtl:$,theme:O,delay:r,isRunning:t,isIn:V,closeToast:m,hide:y,type:x,style:_,className:R,controlledProgress:M,progress:B||0})))},te=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ce=ee(te("bounce",!0));ee(te("slide",!0));ee(te("zoom"));ee(te("flip"));const ce=g.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:o,isToastActive:c}=xe(e),{className:i,style:n,rtl:r,containerId:C}=e;function x(y){const m=A("Toastify__toast-container",`Toastify__toast-container--${y}`,{"Toastify__toast-container--rtl":r});return w(i)?i({position:y,rtl:r,defaultClassName:m}):A(m,Z(i))}return g.useEffect(()=>{t&&(t.current=o.current)},[]),T.createElement("div",{ref:o,className:"Toastify",id:C},s((y,m)=>{const L=m.length?{...n}:{...n,pointerEvents:"none"};return T.createElement("div",{className:x(y),style:L,key:`container-${y}`},m.map((a,p)=>{let{content:f,props:l}=a;return T.createElement(Ee,{...l,isIn:c(l.toastId),style:{...l.style,"--nth":p+1,"--len":m.length},key:`toast-${l.key}`},f)}))}))});ce.displayName="ToastContainer",ce.defaultProps={position:"top-right",transition:Ce,autoClose:5e3,closeButton:de,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let oe,H=new Map,G=[],Re=1;function pe(){return""+Re++}function Le(e){return e&&(Q(e.toastId)||W(e.toastId))?e.toastId:pe()}function U(e,t){return H.size>0?j.emit(0,e,t):G.push({content:e,options:t}),t.toastId}function J(e,t){return{...t,type:t&&t.type||e,toastId:Le(t)}}function K(e){return(t,s)=>U(t,J(e,s))}function E(e,t){return U(e,J("default",t))}E.loading=(e,t)=>U(e,J("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),E.promise=function(e,t,s){let o,{pending:c,error:i,success:n}=t;c&&(o=Q(c)?E.loading(c,s):E.loading(c.render,{...s,...c}));const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},C=(y,m,L)=>{if(m==null)return void E.dismiss(o);const a={type:y,...r,...s,data:L},p=Q(m)?{render:m}:m;return o?E.update(o,{...a,...p}):E(p.render,{...a,...p}),L},x=w(e)?e():e;return x.then(y=>C("success",n,y)).catch(y=>C("error",i,y)),x},E.success=K("success"),E.info=K("info"),E.error=K("error"),E.warning=K("warning"),E.warn=E.warning,E.dark=(e,t)=>U(e,J("default",{theme:"dark",...t})),E.dismiss=e=>{H.size>0?j.emit(1,e):G=G.filter(t=>e!=null&&t.options.toastId!==e)},E.clearWaitingQueue=function(e){return e===void 0&&(e={}),j.emit(5,e)},E.isActive=e=>{let t=!1;return H.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},E.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(o,c){let{containerId:i}=c;const n=H.get(i||oe);return n&&n.getToast(o)}(e,t);if(s){const{props:o,content:c}=s,i={delay:100,...o,...t,toastId:t.toastId||e,updateId:pe()};i.toastId!==e&&(i.staleId=e);const n=i.render||c;delete i.render,U(n,i)}},0)},E.done=e=>{E.update(e,{progress:1})},E.onChange=e=>(j.on(4,e),()=>{j.off(4,e)}),E.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},j.on(2,e=>{oe=e.containerId||e,H.set(oe,e),G.forEach(t=>{j.emit(0,t.content,t.options)}),G=[]}).on(3,e=>{H.delete(e.containerId||e),H.size===0&&j.off(0).off(1).off(5)});const Ie=P.li`
  position: relative;
  display: grid;
  align-content: space-between;
  border-radius: 12px;
  box-shadow:
    0px 1px 3px 0px rgba(var(--bg-innert), 0.2),
    0px 1px 1px 0px rgba(var(--bg-innert), 0.14),
    0px 2px 1px -1px rgba(var(--bg-innert), 0.12);
  transition: var(--trans);

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
  }
`,_e=P.div`
  display: grid;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 12px;
  align-content: center;
  justify-content: center;
  background-color: rgba(var(--accent), 0.5);
  transition: var(--trans);

  svg {
    width: 100px;
    height: 100px;
    fill: rgba(var(--bg-primary), 1);
    transition: var(--trans);
  }
`,we=P.div`
  display: grid;
  gap: 8px;
  padding: 14px 5px 28px 5px;
`,Oe=P.div`
  display: flex;
  justify-content: space-between;
  color: rgba(var(--bg-innert), 0.8);
  font-weight: 500;
  line-height: 24px;
  transition: var(--trans);

  span {
    color: rgba(var(--accent), 1);
  }
`,ke=P.p`
  text-align: justify;
  color: rgba(var(--bg-innert), 0.6);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  transition: var(--trans);
`,Ne=P.button`
  display: block;
  padding: 12px;
  border-radius: 12px;
  text-align: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  max-width: 100%;
  box-shadow:
    0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: rgba(var(--bg-primary), 1);
  background-color: rgba(var(--accent), 1);
  transition: var(--trans);

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    background-color: rgba(var(--accent), 0.7);
    color: rgba(var(--text-primary), 1);
  }
`;function re({children:e,onClick:t}){return h.jsx(Ne,{onClick:t,children:e})}re.propTypes={children:u.string.isRequired,onClick:u.func.isRequired};const je=P.label`
  display: block;
  top: 14px;
  right: 14px;
  position: absolute;
  cursor: pointer;
  font-size: 20px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  div {
    top: 0;
    left: 0;
  }

  svg {
    fill: ${({checked:e})=>e===!0?"rgba(var(--accent), 1)":"none"};
    stroke: ${({checked:e})=>e===!0?"rgba(var(--accent), 1)":"rgba(var(--bg-primary), 1)"};
    transition: var(--trans);
  }
`;function qe(){const[e,t]=g.useState(!1),s=o=>{const c=o.target.checked;t(c)};return h.jsxs(je,{checked:e,children:[h.jsx("input",{checked:e,type:"checkbox",onChange:s}),h.jsx("div",{children:h.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:h.jsx("g",{id:"normal",children:h.jsx("path",{id:"Vector",d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})}function ge({data:e}){const{img:t,make:s,mileage:o,model:c,type:i,year:n,rentalPrice:r,address:C,rentalCompany:x,functionalities:y}=e,m=C.split(","),L=m[1].trim(),a=m[2]?m[2].trim():"",p=y[0];return h.jsxs(Ie,{children:[h.jsx(qe,{}),h.jsxs("div",{children:[h.jsx(_e,{children:t?h.jsx("img",{src:t,width:250,alt:s,role:"presentation"}):h.jsx(he,{})}),h.jsxs(we,{children:[h.jsxs(Oe,{children:[h.jsxs("p",{children:[s," ",h.jsx("span",{children:c}),", ",n]}),h.jsx("p",{children:r})]}),h.jsxs(ke,{children:[L," | ",a," | ",x," | ",i," | ",o," |"," ",p]})]})]}),h.jsx(re,{children:"Learn more"})]})}ge.propTypes={data:u.shape({id:u.number.isRequired,year:u.number.isRequired,make:u.string.isRequired,model:u.string.isRequired,type:u.string.isRequired,img:u.string,description:u.string,fuelConsumption:u.string,engineSize:u.string,accessories:u.arrayOf(u.string),functionalities:u.arrayOf(u.string).isRequired,rentalPrice:u.string.isRequired,rentalCompany:u.string.isRequired,address:u.string.isRequired,rentalConditions:u.string,mileage:u.number.isRequired}).isRequired};const Me=P.ul`
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
`;P.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;
  color: rgba(var(--text), 1);
  transition: var(--trans);
`;function me({data:e,handleLoadMore:t}){return h.jsxs(h.Fragment,{children:[h.jsx(Me,{children:e.map(s=>h.jsx(ge,{data:s},s.id))}),h.jsx(re,{onClick:t,children:"Load more"})]})}me.propTypes={data:u.arrayOf(u.shape({id:u.number.isRequired,year:u.number.isRequired,make:u.string.isRequired,model:u.string.isRequired,type:u.string.isRequired,img:u.string,description:u.string,fuelConsumption:u.string,engineSize:u.string,accessories:u.arrayOf(u.string),functionalities:u.arrayOf(u.string).isRequired,rentalPrice:u.string.isRequired,rentalCompany:u.string.isRequired,address:u.string.isRequired,rentalConditions:u.string,mileage:u.number.isRequired}).isRequired).isRequired,handleLoadMore:u.func.isRequired};function Ae(){const[e,t]=g.useState(1),[s,o]=g.useState([]),c=g.useMemo(()=>({page:e,limit:12}),[e]),{data:i,error:n,isLoading:r,isSuccess:C,refetch:x}=fe(c,{refetchOnMountOrArgChange:!1});g.useEffect(()=>{n&&E.error(`An error occurred while receiving data: ${n.message}`),i&&o(m=>i.length>0?[...m,...i]:m)},[n,i]),g.useEffect(()=>{x(c)},[e,x,c]);const y=g.useCallback(()=>{t(m=>m+1)},[]);return h.jsxs(h.Fragment,{children:[r&&h.jsx(ye,{}),C&&s.length>0&&h.jsx(me,{data:s,handleLoadMore:y})]})}export{Ae as default};
