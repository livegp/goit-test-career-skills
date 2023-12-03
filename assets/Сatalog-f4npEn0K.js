import{r as g,t as b,s as P,j as y,P as c,u as fe}from"./index-Zl5mY3pD.js";import{F as he}from"./index.esm-hrmcn96W.js";import ye from"./Loader-WTd7Cu3A.js";function ce(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ce(e[t]))&&(s&&(s+=" "),s+=o);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function z(){for(var e,t,o=0,s="";o<arguments.length;)(e=arguments[o++])&&(t=ce(e))&&(s&&(s+=" "),s+=t);return s}const W=e=>typeof e=="number"&&!isNaN(e),Q=e=>typeof e=="string",w=e=>typeof e=="function",Z=e=>Q(e)||w(e)?e:null,ne=e=>g.isValidElement(e)||Q(e)||w(e)||W(e);function ve(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:u}=e;requestAnimationFrame(()=>{u.minHeight="initial",u.height=s+"px",u.transition=`all ${o}ms`,requestAnimationFrame(()=>{u.height="0",u.padding="0",u.margin="0",setTimeout(t,o)})})}function ee(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:u=!0,collapseDuration:l=300}=e;return function(n){let{children:r,position:C,preventExitTransition:T,done:v,nodeRef:f,isIn:R}=n;const i=s?`${t}--${C}`:t,p=s?`${o}--${C}`:o,m=g.useRef(0);return g.useLayoutEffect(()=>{const a=f.current,d=i.split(" "),L=_=>{_.target===f.current&&(a.dispatchEvent(new Event("d")),a.removeEventListener("animationend",L),a.removeEventListener("animationcancel",L),m.current===0&&_.type!=="animationcancel"&&a.classList.remove(...d))};a.classList.add(...d),a.addEventListener("animationend",L),a.addEventListener("animationcancel",L)},[]),g.useEffect(()=>{const a=f.current,d=()=>{a.removeEventListener("animationend",d),u?ve(a,v,l):v()};R||(T?d():(m.current=1,a.className+=` ${p}`,a.addEventListener("animationend",d)))},[R]),b.createElement(b.Fragment,null,r)}}function re(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const j={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(s=>s!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},Y=e=>{let{theme:t,type:o,...s}=e;return b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s})},oe={info:function(e){return b.createElement(Y,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return b.createElement(Y,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return b.createElement(Y,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return b.createElement(Y,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return b.createElement("div",{className:"Toastify__spinner"})}};function xe(e){const[,t]=g.useReducer(i=>i+1,0),[o,s]=g.useState([]),u=g.useRef(null),l=g.useRef(new Map).current,n=i=>o.indexOf(i)!==-1,r=g.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:i=>l.get(i)}).current;function C(i){let{containerId:p}=i;const{limit:m}=r.props;!m||p&&r.containerId!==p||(r.count-=r.queue.length,r.queue=[])}function T(i){s(p=>i==null?[]:p.filter(m=>m!==i))}function v(){const{toastContent:i,toastProps:p,staleId:m}=r.queue.shift();R(i,p,m)}function f(i,p){let{delay:m,staleId:a,...d}=p;if(!ne(i)||function(N){return!u.current||r.props.enableMultiContainer&&N.containerId!==r.props.containerId||l.has(N.toastId)&&N.updateId==null}(d))return;const{toastId:L,updateId:_,data:h}=d,{props:x}=r,B=()=>T(L),$=_==null;$&&r.count++;const I={...x,style:x.toastStyle,key:r.toastKey++,...Object.fromEntries(Object.entries(d).filter(N=>{let[q,O]=N;return O!=null})),toastId:L,updateId:_,data:h,closeToast:B,isIn:!1,className:Z(d.className||x.toastClassName),bodyClassName:Z(d.bodyClassName||x.bodyClassName),progressClassName:Z(d.progressClassName||x.progressClassName),autoClose:!d.isLoading&&(A=d.autoClose,V=x.autoClose,A===!1||W(A)&&A>0?A:V),deleteToast(){const N=re(l.get(L),"removed");l.delete(L),j.emit(4,N);const q=r.queue.length;if(r.count=L==null?r.count-r.displayedToast:r.count-1,r.count<0&&(r.count=0),q>0){const O=L==null?r.props.limit:1;if(q===1||O===1)r.displayedToast++,v();else{const F=O>q?q:O;r.displayedToast=F;for(let k=0;k<F;k++)v()}}else t()}};var A,V;I.iconOut=function(N){let{theme:q,type:O,isLoading:F,icon:k}=N,M=null;const S={theme:q,type:O};return k===!1||(w(k)?M=k(S):g.isValidElement(k)?M=g.cloneElement(k,S):Q(k)||W(k)?M=k:F?M=oe.spinner():(X=>X in oe)(O)&&(M=oe[O](S))),M}(I),w(d.onOpen)&&(I.onOpen=d.onOpen),w(d.onClose)&&(I.onClose=d.onClose),I.closeButton=x.closeButton,d.closeButton===!1||ne(d.closeButton)?I.closeButton=d.closeButton:d.closeButton===!0&&(I.closeButton=!ne(x.closeButton)||x.closeButton);let D=i;g.isValidElement(i)&&!Q(i.type)?D=g.cloneElement(i,{closeToast:B,toastProps:I,data:h}):w(i)&&(D=i({closeToast:B,toastProps:I,data:h})),x.limit&&x.limit>0&&r.count>x.limit&&$?r.queue.push({toastContent:D,toastProps:I,staleId:a}):W(m)?setTimeout(()=>{R(D,I,a)},m):R(D,I,a)}function R(i,p,m){const{toastId:a}=p;m&&l.delete(m);const d={content:i,props:p};l.set(a,d),s(L=>[...L,a].filter(_=>_!==m)),j.emit(4,re(d,d.props.updateId==null?"added":"updated"))}return g.useEffect(()=>(r.containerId=e.containerId,j.cancelEmit(3).on(0,f).on(1,i=>u.current&&T(i)).on(5,C).emit(2,r),()=>{l.clear(),j.emit(3,r)}),[]),g.useEffect(()=>{r.props=e,r.isToastActive=n,r.displayedToast=o.length}),{getToastToRender:function(i){const p=new Map,m=Array.from(l.values());return e.newestOnTop&&m.reverse(),m.forEach(a=>{const{position:d}=a.props;p.has(d)||p.set(d,[]),p.get(d).push(a)}),Array.from(p,a=>i(a[0],a[1]))},containerRef:u,isToastActive:n}}function ie(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ae(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function be(e){const[t,o]=g.useState(!1),[s,u]=g.useState(!1),l=g.useRef(null),n=g.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,r=g.useRef(e),{autoClose:C,pauseOnHover:T,closeToast:v,onClick:f,closeOnClick:R}=e;function i(h){if(e.draggable){h.nativeEvent.type==="touchstart"&&h.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",d),document.addEventListener("mouseup",L),document.addEventListener("touchmove",d),document.addEventListener("touchend",L);const x=l.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=x.getBoundingClientRect(),x.style.transition="",n.x=ie(h.nativeEvent),n.y=ae(h.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=x.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=x.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function p(h){if(n.boundingRect){const{top:x,bottom:B,left:$,right:I}=n.boundingRect;h.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=$&&n.x<=I&&n.y>=x&&n.y<=B?a():m()}}function m(){o(!0)}function a(){o(!1)}function d(h){const x=l.current;n.canDrag&&x&&(n.didMove=!0,t&&a(),n.x=ie(h),n.y=ae(h),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),x.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,x.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function L(){document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",L);const h=l.current;if(n.canDrag&&n.didMove&&h){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return u(!0),void e.closeToast();h.style.transition="transform 0.2s, opacity 0.2s",h.style.transform=`translate${e.draggableDirection}(0)`,h.style.opacity="1"}}g.useEffect(()=>{r.current=e}),g.useEffect(()=>(l.current&&l.current.addEventListener("d",m,{once:!0}),w(e.onOpen)&&e.onOpen(g.isValidElement(e.children)&&e.children.props),()=>{const h=r.current;w(h.onClose)&&h.onClose(g.isValidElement(h.children)&&h.children.props)}),[]),g.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||a(),window.addEventListener("focus",m),window.addEventListener("blur",a)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",a))}),[e.pauseOnFocusLoss]);const _={onMouseDown:i,onTouchStart:i,onMouseUp:p,onTouchEnd:p};return C&&T&&(_.onMouseEnter=a,_.onMouseLeave=m),R&&(_.onClick=h=>{f&&f(h),n.canCloseOnClick&&v()}),{playToast:m,pauseToast:a,isRunning:t,preventExitTransition:s,toastRef:l,eventHandlers:_}}function ue(e){let{closeToast:t,theme:o,ariaLabel:s="close"}=e;return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:u=>{u.stopPropagation(),t(u)},"aria-label":s},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Te(e){let{delay:t,isRunning:o,closeToast:s,type:u="default",hide:l,className:n,style:r,controlledProgress:C,progress:T,rtl:v,isIn:f,theme:R}=e;const i=l||C&&T===0,p={...r,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:i?0:1};C&&(p.transform=`scaleX(${T})`);const m=z("Toastify__progress-bar",C?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${R}`,`Toastify__progress-bar--${u}`,{"Toastify__progress-bar--rtl":v}),a=w(n)?n({rtl:v,type:u,defaultClassName:m}):z(m,n);return b.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:a,style:p,[C&&T>=1?"onTransitionEnd":"onAnimationEnd"]:C&&T<1?null:()=>{f&&s()}})}const Ee=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:u}=be(e),{closeButton:l,children:n,autoClose:r,onClick:C,type:T,hideProgressBar:v,closeToast:f,transition:R,position:i,className:p,style:m,bodyClassName:a,bodyStyle:d,progressClassName:L,progressStyle:_,updateId:h,role:x,progress:B,rtl:$,toastId:I,deleteToast:A,isIn:V,isLoading:D,iconOut:N,closeOnClick:q,theme:O}=e,F=z("Toastify__toast",`Toastify__toast-theme--${O}`,`Toastify__toast--${T}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":q}),k=w(p)?p({rtl:$,position:i,type:T,defaultClassName:F}):z(F,p),M=!!B||!r,S={closeToast:f,type:T,theme:O};let X=null;return l===!1||(X=w(l)?l(S):g.isValidElement(l)?g.cloneElement(l,S):ue(S)),b.createElement(R,{isIn:V,done:A,position:i,preventExitTransition:o,nodeRef:s},b.createElement("div",{id:I,onClick:C,className:k,...u,style:m,ref:s},b.createElement("div",{...V&&{role:x},className:w(a)?a({type:T}):z("Toastify__toast-body",a),style:d},N!=null&&b.createElement("div",{className:z("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},N),b.createElement("div",null,n)),X,b.createElement(Te,{...h&&!M?{key:`pb-${h}`}:{},rtl:$,theme:O,delay:r,isRunning:t,isIn:V,closeToast:f,hide:v,type:T,style:_,className:L,controlledProgress:M,progress:B||0})))},te=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ce=ee(te("bounce",!0));ee(te("slide",!0));ee(te("zoom"));ee(te("flip"));const le=g.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:s,isToastActive:u}=xe(e),{className:l,style:n,rtl:r,containerId:C}=e;function T(v){const f=z("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":r});return w(l)?l({position:v,rtl:r,defaultClassName:f}):z(f,Z(l))}return g.useEffect(()=>{t&&(t.current=s.current)},[]),b.createElement("div",{ref:s,className:"Toastify",id:C},o((v,f)=>{const R=f.length?{...n}:{...n,pointerEvents:"none"};return b.createElement("div",{className:T(v),style:R,key:`container-${v}`},f.map((i,p)=>{let{content:m,props:a}=i;return b.createElement(Ee,{...a,isIn:u(a.toastId),style:{...a.style,"--nth":p+1,"--len":f.length},key:`toast-${a.key}`},m)}))}))});le.displayName="ToastContainer",le.defaultProps={position:"top-right",transition:Ce,autoClose:5e3,closeButton:ue,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let se,H=new Map,G=[],Le=1;function de(){return""+Le++}function Re(e){return e&&(Q(e.toastId)||W(e.toastId))?e.toastId:de()}function U(e,t){return H.size>0?j.emit(0,e,t):G.push({content:e,options:t}),t.toastId}function J(e,t){return{...t,type:t&&t.type||e,toastId:Re(t)}}function K(e){return(t,o)=>U(t,J(e,o))}function E(e,t){return U(e,J("default",t))}E.loading=(e,t)=>U(e,J("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),E.promise=function(e,t,o){let s,{pending:u,error:l,success:n}=t;u&&(s=Q(u)?E.loading(u,o):E.loading(u.render,{...o,...u}));const r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},C=(v,f,R)=>{if(f==null)return void E.dismiss(s);const i={type:v,...r,...o,data:R},p=Q(f)?{render:f}:f;return s?E.update(s,{...i,...p}):E(p.render,{...i,...p}),R},T=w(e)?e():e;return T.then(v=>C("success",n,v)).catch(v=>C("error",l,v)),T},E.success=K("success"),E.info=K("info"),E.error=K("error"),E.warning=K("warning"),E.warn=E.warning,E.dark=(e,t)=>U(e,J("default",{theme:"dark",...t})),E.dismiss=e=>{H.size>0?j.emit(1,e):G=G.filter(t=>e!=null&&t.options.toastId!==e)},E.clearWaitingQueue=function(e){return e===void 0&&(e={}),j.emit(5,e)},E.isActive=e=>{let t=!1;return H.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},E.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(s,u){let{containerId:l}=u;const n=H.get(l||se);return n&&n.getToast(s)}(e,t);if(o){const{props:s,content:u}=o,l={delay:100,...s,...t,toastId:t.toastId||e,updateId:de()};l.toastId!==e&&(l.staleId=e);const n=l.render||u;delete l.render,U(n,l)}},0)},E.done=e=>{E.update(e,{progress:1})},E.onChange=e=>(j.on(4,e),()=>{j.off(4,e)}),E.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},j.on(2,e=>{se=e.containerId||e,H.set(se,e),G.forEach(t=>{j.emit(0,t.content,t.options)}),G=[]}).on(3,e=>{H.delete(e.containerId||e),H.size===0&&j.off(0).off(1).off(5)});const Ie=P.li`
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
`,Ne=P.label`
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
  }
`;function je(){const[e,t]=g.useState(!1),o=s=>{const u=s.target.checked;t(u)};return y.jsxs(Ne,{checked:e,children:[y.jsx("input",{checked:e,type:"checkbox",onChange:o}),y.jsx("div",{children:y.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:y.jsx("g",{id:"normal",children:y.jsx("path",{id:"Vector",d:"M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})})]})}const qe=P.button`
  padding: 8px 16px;
  border-radius: 12px;
  text-align: center;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  max-width: 100%;
  height: 44px;
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
`;function pe({onLoadMore:e}){return y.jsx(qe,{onClick:e,children:"Load more"})}pe.propTypes={onLoadMore:c.func.isRequired};function me({data:e}){const{img:t,make:o,mileage:s,model:u,type:l,year:n,rentalPrice:r,address:C,rentalCompany:T,functionalities:v}=e,f=C.split(","),R=f[1].trim(),i=f[2]?f[2].trim():"",p=v[0];return y.jsxs(Ie,{children:[y.jsx(je,{}),y.jsxs("div",{children:[y.jsx(_e,{children:t?y.jsx("img",{src:t,width:250,alt:o,role:"presentation"}):y.jsx(he,{})}),y.jsxs(we,{children:[y.jsxs(Oe,{children:[y.jsxs("p",{children:[o," ",y.jsx("span",{children:u}),", ",n]}),y.jsx("p",{children:r})]}),y.jsxs(ke,{children:[R," | ",i," | ",T," | ",l," | ",s," |"," ",p]})]})]}),y.jsx(pe,{children:"Learn more"})]})}me.propTypes={data:c.shape({id:c.number.isRequired,year:c.number.isRequired,make:c.string.isRequired,model:c.string.isRequired,type:c.string.isRequired,img:c.string,description:c.string,fuelConsumption:c.string,engineSize:c.string,accessories:c.arrayOf(c.string),functionalities:c.arrayOf(c.string).isRequired,rentalPrice:c.string.isRequired,rentalCompany:c.string.isRequired,address:c.string.isRequired,rentalConditions:c.string,mileage:c.number.isRequired}).isRequired};const Me=P.ul`
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
`;function ge({data:e}){return y.jsx(Me,{children:e.map(t=>y.jsx(me,{data:t},t.id))})}ge.propTypes={data:c.arrayOf(c.shape({id:c.number.isRequired,year:c.number.isRequired,make:c.string.isRequired,model:c.string.isRequired,type:c.string.isRequired,img:c.string,description:c.string,fuelConsumption:c.string,engineSize:c.string,accessories:c.arrayOf(c.string),functionalities:c.arrayOf(c.string).isRequired,rentalPrice:c.string.isRequired,rentalCompany:c.string.isRequired,address:c.string.isRequired,rentalConditions:c.string,mileage:c.number.isRequired}).isRequired).isRequired};function ze(){const{data:e,error:t,isLoading:o}=fe();return y.jsxs(y.Fragment,{children:[o&&y.jsx(ye,{}),t&&y.jsx("div",{children:E.error("Error deleting contact:",t)}),!o&&!t&&y.jsx(ge,{data:e})]})}export{ze as default};
