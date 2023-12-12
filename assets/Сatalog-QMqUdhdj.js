import{r as g,t as T,s as P,P as u,j as y,u as fe}from"./index-0kBqfsQt.js";import{F as he}from"./index.esm-I5El1JWx.js";import ye from"./Loader-UTf8uHxY.js";function ue(e){var t,s,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(s=ue(e[t]))&&(o&&(o+=" "),o+=s);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function z(){for(var e,t,s=0,o="";s<arguments.length;)(e=arguments[s++])&&(t=ue(e))&&(o&&(o+=" "),o+=t);return o}const W=e=>typeof e=="number"&&!isNaN(e),Q=e=>typeof e=="string",_=e=>typeof e=="function",Z=e=>Q(e)||_(e)?e:null,se=e=>g.isValidElement(e)||Q(e)||_(e)||W(e);function ve(e,t,s){s===void 0&&(s=300);const{scrollHeight:o,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=o+"px",c.transition=`all ${s}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(t,s)})})}function ee(e){let{enter:t,exit:s,appendPosition:o=!1,collapse:c=!0,collapseDuration:i=300}=e;return function(n){let{children:r,position:C,preventExitTransition:h,done:v,nodeRef:f,isIn:R}=n;const a=o?`${t}--${C}`:t,p=o?`${s}--${C}`:s,m=g.useRef(0);return g.useLayoutEffect(()=>{const l=f.current,d=a.split(" "),L=w=>{w.target===f.current&&(l.dispatchEvent(new Event("d")),l.removeEventListener("animationend",L),l.removeEventListener("animationcancel",L),m.current===0&&w.type!=="animationcancel"&&l.classList.remove(...d))};l.classList.add(...d),l.addEventListener("animationend",L),l.addEventListener("animationcancel",L)},[]),g.useEffect(()=>{const l=f.current,d=()=>{l.removeEventListener("animationend",d),c?ve(l,v,i):v()};R||(h?d():(m.current=1,l.className+=` ${p}`,l.addEventListener("animationend",d)))},[R]),T.createElement(T.Fragment,null,r)}}function ie(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const j={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(o=>o!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},Y=e=>{let{theme:t,type:s,...o}=e;return T.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...o})},oe={info:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return T.createElement(Y,{...e},T.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return T.createElement("div",{className:"Toastify__spinner"})}};function xe(e){const[,t]=g.useReducer(a=>a+1,0),[s,o]=g.useState([]),c=g.useRef(null),i=g.useRef(new Map).current,n=a=>s.indexOf(a)!==-1,r=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:a=>i.get(a)}).current;function C(a){let{containerId:p}=a;const{limit:m}=r.props;!m||p&&r.containerId!==p||(r.count-=r.queue.length,r.queue=[])}function h(a){o(p=>a==null?[]:p.filter(m=>m!==a))}function v(){const{toastContent:a,toastProps:p,staleId:m}=r.queue.shift();R(a,p,m)}function f(a,p){let{delay:m,staleId:l,...d}=p;if(!se(a)||function(N){return!c.current||r.props.enableMultiContainer&&N.containerId!==r.props.containerId||i.has(N.toastId)&&N.updateId==null}(d))return;const{toastId:L,updateId:w,data:x}=d,{props:b}=r,B=()=>h(L),$=w==null;$&&r.count++;const I={...b,style:b.toastStyle,key:r.toastKey++,...Object.fromEntries(Object.entries(d).filter(N=>{let[q,O]=N;return O!=null})),toastId:L,updateId:w,data:x,closeToast:B,isIn:!1,className:Z(d.className||b.toastClassName),bodyClassName:Z(d.bodyClassName||b.bodyClassName),progressClassName:Z(d.progressClassName||b.progressClassName),autoClose:!d.isLoading&&(A=d.autoClose,V=b.autoClose,A===!1||W(A)&&A>0?A:V),deleteToast(){const N=ie(i.get(L),"removed");i.delete(L),j.emit(4,N);const q=r.queue.length;if(r.count=L==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),q>0){const O=L==null?r.props.limit:1;if(q===1||O===1)r.displayedToast++,v();else{const S=O>q?q:O;r.displayedToast=S;for(let k=0;k<S;k++)v()}}else t()}};var A,V;I.iconOut=function(N){let{theme:q,type:O,isLoading:S,icon:k}=N,M=null;const F={theme:q,type:O};return k===!1||(_(k)?M=k(F):g.isValidElement(k)?M=g.cloneElement(k,F):Q(k)||W(k)?M=k:S?M=oe.spinner():(X=>X in oe)(O)&&(M=oe[O](F))),M}(I),_(d.onOpen)&&(I.onOpen=d.onOpen),_(d.onClose)&&(I.onClose=d.onClose),I.closeButton=b.closeButton,d.closeButton===!1||se(d.closeButton)?I.closeButton=d.closeButton:d.closeButton===!0&&(I.closeButton=!se(b.closeButton)||b.closeButton);let D=a;g.isValidElement(a)&&!Q(a.type)?D=g.cloneElement(a,{closeToast:B,toastProps:I,data:x}):_(a)&&(D=a({closeToast:B,toastProps:I,data:x})),b.limit&&b.limit>0&&r.count>b.limit&&$?r.queue.push({toastContent:D,toastProps:I,staleId:l}):W(m)?setTimeout(()=>{R(D,I,l)},m):R(D,I,l)}function R(a,p,m){const{toastId:l}=p;m&&i.delete(m);const d={content:a,props:p};i.set(l,d),o(L=>[...L,l].filter(w=>w!==m)),j.emit(4,ie(d,d.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(r.containerId=e.containerId,j.cancelEmit(3).on(0,f).on(1,a=>c.current&&h(a)).on(5,C).emit(2,r),()=>{i.clear(),j.emit(3,r)}),[]),g.useEffect(()=>{r.props=e,r.isToastActive=n,r.displayedToast=s.length}),{getToastToRender:function(a){const p=new Map,m=Array.from(i.values());return e.newestOnTop&&m.reverse(),m.forEach(l=>{const{position:d}=l.props;p.has(d)||p.set(d,[]),p.get(d).push(l)}),Array.from(p,l=>a(l[0],l[1]))},containerRef:c,isToastActive:n}}function ae(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function be(e){const[t,s]=g.useState(!1),[o,c]=g.useState(!1),i=g.useRef(null),n=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=g.useRef(e),{autoClose:C,pauseOnHover:h,closeToast:v,onClick:f,closeOnClick:R}=e;function a(x){if(e.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",L),document.addEventListener("touchmove",d),document.addEventListener("touchend",L);const b=i.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=b.getBoundingClientRect(),b.style.transition="",n.x=ae(x.nativeEvent),n.y=le(x.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function p(x){if(n.boundingRect){const{top:b,bottom:B,left:$,right:I}=n.boundingRect;x.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=$&&n.x<=I&&n.y>=b&&n.y<=B?l():m()}}function m(){s(!0)}function l(){s(!1)}function d(x){const b=i.current;n.canDrag&&b&&(n.didMove=!0,t&&l(),n.x=ae(x),n.y=le(x),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,b.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function L(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",L);const x=i.current;if(n.canDrag&&n.didMove&&x){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return c(!0),void e.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${e.draggableDirection}(0)`,x.style.opacity="1"}}g.useEffect(()=>{r.current=e}),g.useEffect(()=>(i.current&&i.current.addEventListener("d",m,{once:!0}),_(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const x=r.current;_(x.onClose)&&x.onClose(g.isValidElement(x.children)&&x.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||l(),window.addEventListener("focus",m),window.addEventListener("blur",l)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",l))}),[e.pauseOnFocusLoss]);const w={onMouseDown:a,onTouchStart:a,onMouseUp:p,onTouchEnd:p};return C&&h&&(w.onMouseEnter=l,w.onMouseLeave=m),R&&(w.onClick=x=>{f&&f(x),n.canCloseOnClick&&v()}),{playToast:m,pauseToast:l,isRunning:t,preventExitTransition:o,toastRef:i,eventHandlers:w}}function de(e){let{closeToast:t,theme:s,ariaLabel:o="close"}=e;return T.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:c=>{c.stopPropagation(),t(c)},"aria-label":o},T.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},T.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Te(e){let{delay:t,isRunning:s,closeToast:o,type:c="default",hide:i,className:n,style:r,controlledProgress:C,progress:h,rtl:v,isIn:f,theme:R}=e;const a=i||C&&h===0,p={...r,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:a?0:1};C&&(p.transform=`scaleX(${h})`);const m=z("Toastify__progress-bar",C?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${R}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":v}),l=_(n)?n({rtl:v,type:c,defaultClassName:m}):z(m,n);return T.createElement("div",{role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:l,style:p,[C&&h>=1?"onTransitionEnd":"onAnimationEnd"]:C&&h<1?null:()=>{f&&o()}})}const Ee=e=>{const{isRunning:t,preventExitTransition:s,toastRef:o,eventHandlers:c}=be(e),{closeButton:i,children:n,autoClose:r,onClick:C,type:h,hideProgressBar:v,closeToast:f,transition:R,position:a,className:p,style:m,bodyClassName:l,bodyStyle:d,progressClassName:L,progressStyle:w,updateId:x,role:b,progress:B,rtl:$,toastId:I,deleteToast:A,isIn:V,isLoading:D,iconOut:N,closeOnClick:q,theme:O}=e,S=z("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${h}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":q}),k=_(p)?p({rtl:$,position:a,type:h,defaultClassName:S}):z(S,p),M=!!B||!r,F={closeToast:f,type:h,theme:O};let X=null;return i===!1||(X=_(i)?i(F):g.isValidElement(i)?g.cloneElement(i,F):de(F)),T.createElement(R,{isIn:V,done:A,position:a,preventExitTransition:s,nodeRef:o},T.createElement("div",{id:I,onClick:C,className:k,...c,style:m,ref:o},T.createElement("div",{...V&&{role:b},className:_(l)?l({type:h}):z("Toastify__toast-body",l),style:d},N!=null&&T.createElement("div",{className:z("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},N),T.createElement("div",null,n)),X,T.createElement(Te,{...x&&!M?{key:`pb-${x}`}:{},rtl:$,theme:O,delay:r,isRunning:t,isIn:V,closeToast:f,hide:v,type:h,style:w,className:L,controlledProgress:M,progress:B||0})))},te=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ce=ee(te("bounce",!0));ee(te("slide",!0));ee(te("zoom"));ee(te("flip"));const ce=g.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:o,isToastActive:c}=xe(e),{className:i,style:n,rtl:r,containerId:C}=e;function h(v){const f=z("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":r});return _(i)?i({position:v,rtl:r,defaultClassName:f}):z(f,Z(i))}return g.useEffect(()=>{t&&(t.current=o.current)},[]),T.createElement("div",{ref:o,className:"Toastify",id:C},s((v,f)=>{const R=f.length?{...n}:{...n,pointerEvents:"none"};return T.createElement("div",{className:h(v),style:R,key:`container-${v}`},f.map((a,p)=>{let{content:m,props:l}=a;return T.createElement(Ee,{...l,isIn:c(l.toastId),style:{...l.style,"--nth":p+1,"--len":f.length},key:`toast-${l.key}`},m)}))}))});ce.displayName="ToastContainer",ce.defaultProps={position:"top-right",transition:Ce,autoClose:5e3,closeButton:de,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let re,H=new Map,G=[],Re=1;function pe(){return""+Re++}function Le(e){return e&&(Q(e.toastId)||W(e.toastId))?e.toastId:pe()}function U(e,t){return H.size>0?j.emit(0,e,t):G.push({content:e,options:t}),t.toastId}function J(e,t){return{...t,type:t&&t.type||e,toastId:Le(t)}}function K(e){return(t,s)=>U(t,J(e,s))}function E(e,t){return U(e,J("default",t))}E.loading=(e,t)=>U(e,J("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),E.promise=function(e,t,s){let o,{pending:c,error:i,success:n}=t;c&&(o=Q(c)?E.loading(c,s):E.loading(c.render,{...s,...c}));const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},C=(v,f,R)=>{if(f==null)return void E.dismiss(o);const a={type:v,...r,...s,data:R},p=Q(f)?{render:f}:f;return o?E.update(o,{...a,...p}):E(p.render,{...a,...p}),R},h=_(e)?e():e;return h.then(v=>C("success",n,v)).catch(v=>C("error",i,v)),h},E.success=K("success"),E.info=K("info"),E.error=K("error"),E.warning=K("warning"),E.warn=E.warning,E.dark=(e,t)=>U(e,J("default",{theme:"dark",...t})),E.dismiss=e=>{H.size>0?j.emit(1,e):G=G.filter(t=>e!=null&&t.options.toastId!==e)},E.clearWaitingQueue=function(e){return e===void 0&&(e={}),j.emit(5,e)},E.isActive=e=>{let t=!1;return H.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},E.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(o,c){let{containerId:i}=c;const n=H.get(i||re);return n&&n.getToast(o)}(e,t);if(s){const{props:o,content:c}=s,i={delay:100,...o,...t,toastId:t.toastId||e,updateId:pe()};i.toastId!==e&&(i.staleId=e);const n=i.render||c;delete i.render,U(n,i)}},0)},E.done=e=>{E.update(e,{progress:1})},E.onChange=e=>(j.on(4,e),()=>{j.off(4,e)}),E.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},j.on(2,e=>{re=e.containerId||e,H.set(re,e),G.forEach(t=>{j.emit(0,t.content,t.options)}),G=[]}).on(3,e=>{H.delete(e.containerId||e),H.size===0&&j.off(0).off(1).off(5)});const Ie=P.li`
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
`,we=P.div`
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
`,_e=P.div`
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
`;function ne({children:e,onClick:t}){return y.jsx(Ne,{onClick:t,children:e})}ne.propTypes={children:u.string.isRequired,onClick:u.func};ne.defaultProps={onClick:void 0};const je=P.label`
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
`;function qe(){const[e,t]=g.useState(!1),s=o=>{const c=o.target.checked;t(c)};return y.jsxs(je,{checked:e,children:[y.jsx("input",{checked:e,type:"checkbox",onChange:s}),y.jsx("div",{children:y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("g",{id:"normal",children:y.jsx("path",{id:"Vector",d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})}function ge({data:e}){const{img:t,make:s,mileage:o,model:c,type:i,year:n,rentalPrice:r,address:C,rentalCompany:h,functionalities:v}=e,f=C.split(","),R=f[1].trim(),a=f[2]?f[2].trim():"",p=v[0];return y.jsxs(Ie,{children:[y.jsx(qe,{}),y.jsxs("div",{children:[y.jsx(we,{children:t?y.jsx("img",{src:t,width:250,alt:s,role:"presentation"}):y.jsx(he,{})}),y.jsxs(_e,{children:[y.jsxs(Oe,{children:[y.jsxs("p",{children:[s," ",y.jsx("span",{children:c}),", ",n]}),y.jsx("p",{children:r})]}),y.jsxs(ke,{children:[R," | ",a," | ",h," | ",i," | ",o," |"," ",p]})]})]}),y.jsx(ne,{children:"Learn more"})]})}ge.propTypes={data:u.shape({id:u.number.isRequired,year:u.number.isRequired,make:u.string.isRequired,model:u.string.isRequired,type:u.string.isRequired,img:u.string,description:u.string,fuelConsumption:u.string,engineSize:u.string,accessories:u.arrayOf(u.string),functionalities:u.arrayOf(u.string).isRequired,rentalPrice:u.string.isRequired,rentalCompany:u.string.isRequired,address:u.string.isRequired,rentalConditions:u.string,mileage:u.number.isRequired}).isRequired};const Me=P.ul`
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
`;function me({data:e,handleLoadMore:t}){return y.jsxs(y.Fragment,{children:[y.jsx(Me,{children:e==null?void 0:e.map(s=>y.jsx(ge,{data:s},s.id))}),y.jsx(ne,{onClick:t,children:"Load more"})]})}me.propTypes={data:u.arrayOf(u.shape({id:u.number.isRequired,year:u.number.isRequired,make:u.string.isRequired,model:u.string.isRequired,type:u.string.isRequired,img:u.string,description:u.string,fuelConsumption:u.string,engineSize:u.string,accessories:u.arrayOf(u.string),functionalities:u.arrayOf(u.string).isRequired,rentalPrice:u.string.isRequired,rentalCompany:u.string.isRequired,address:u.string.isRequired,rentalConditions:u.string,mileage:u.number.isRequired}).isRequired).isRequired,handleLoadMore:u.func.isRequired};function ze(){const[e,t]=g.useState(1),[s,o]=g.useState([]),{data:c,error:i,isLoading:n,isSuccess:r}=fe({page:e,limit:3});g.useEffect(()=>{r&&c&&o(h=>{const v=c.filter(f=>!h.some(R=>R.id===f.id));return[...h,...v]})},[r,c]),g.useEffect(()=>{i&&E.error(`An error occurred while receiving data: ${i.message}`)},[i]);const C=g.useCallback(()=>{t(h=>h+1)},[]);return y.jsxs(y.Fragment,{children:[n&&y.jsx(ye,{}),r&&(s==null?void 0:s.length)>0&&y.jsx(me,{data:s,isSuccess:r,handleLoadMore:C})]})}export{ze as default};
