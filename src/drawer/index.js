var N=Object.defineProperty;var z=(e,r)=>{for(var n in r)N(e,n,{get:r[n],enumerable:!0})};import{isValidElement as X,cloneElement as Y,Children as F}from"react";import{useState as D}from"react";import{useEffect as E,useRef as S}from"react";var U=(e,r=[])=>{let n=S(!1);E(()=>{if(!n.current)n.current=!0;else return e()},r)},v=U;var M=(e,r=450)=>{let[n,t]=D(e);return v(()=>{let a;return e||r===0?t(e):a=setTimeout(()=>t(e),r),()=>a&&clearTimeout(a)},[e]),[n,t]},k=M;import{createPortal as I}from"react-dom";var P=({children:e,mountNode:r=document.body})=>I(e,r),_=P;import{jsx as w,jsxs as j}from"react/jsx-runtime";var O={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},T={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},W=(e,r)=>e.style.overflow=r?"hidden":"",$=({open:e,close:r,delay:n=300,children:t,mountNode:a=document.body,hasMask:l=!0,style:b,className:p="h-mask",relative:h})=>{let[i]=k(e,n);W(a,i);let d=h?"absolute":"fixed";return w(_,{mountNode:a,children:w("div",{children:i?j("div",{className:p,style:{...O,position:d},children:[l?w("div",{style:{...T,position:d},onClick:o=>r?.(o)}):null,F.map(t,o=>X(o)?Y(o,{style:{position:"relative",zIndex:100001,...o.props.style}}):o)]}):null})})},H=$;var g={};z(g,{default:()=>A,"drawer-container":()=>y,"drawer-content":()=>m,"drawer-footer":()=>x,"drawer-header":()=>u,"drawer-wrap":()=>B,drawerContainer:()=>y,drawerContent:()=>m,drawerFooter:()=>x,drawerHeader:()=>u,drawerWrap:()=>B,"ico-close":()=>f,icoClose:()=>f,left:()=>q,open:()=>R,right:()=>V});if(typeof document<"u"&&!window.__HUXY__?.has("ce63fc")){window.__HUXY__=window.__HUXY__||new Set;let e=document.createElement("style");e.textContent=`@keyframes animate-drawer-right-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes animate-drawer-right-out {
  0% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-drawer-left-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes animate-drawer-left-out {
  0% {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
.hy-ce63fc-drawer-wrap {
  --headerHeight: 44px;
  --footerHeight: 0px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  background: #ffffff;
  width: 300px;
  opacity: 0;
  overflow: auto;
  transform: translate3d(0, 0, 0);
  animation: animate-drawer-right-out 0.25s forwards;
}
.drawer-wrap.hy-ce63fc-open {
  animation: animate-drawer-right-in 0.25s forwards;
}
.drawer-wrap.hy-ce63fc-right {
  top: 0;
  bottom: 0;
  left: 100%;
  animation: animate-drawer-right-out 0.25s forwards;
}
.drawer-wrap.hy-ce63fc-right.hy-ce63fc-open {
  animation: animate-drawer-right-in 0.25s forwards;
}
.drawer-wrap.hy-ce63fc-left {
  top: 0;
  bottom: 0;
  right: 100%;
  left: auto;
  animation: animate-drawer-left-out 0.25s forwards;
}
.drawer-wrap.hy-ce63fc-left.hy-ce63fc-open {
  animation: animate-drawer-left-in 0.25s forwards;
}
.hy-ce63fc-drawer-container {
  position: relative;
  height: 100%;
}
.hy-ce63fc-drawer-container .hy-ce63fc-drawer-content {
  height: calc(100% - var(--headerHeight) - var(--footerHeight));
}
.hy-ce63fc-drawer-container .hy-ce63fc-drawer-header {
  font-weight: 500;
  font-size: 1.6rem;
  padding: 12px 16px;
  height: var(--headerHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  background: #fff;
}
.hy-ce63fc-drawer-container .hy-ce63fc-drawer-header .hy-ce63fc-ico-close {
  position: relative;
  font-size: 2.2rem;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;
  border-color: rgba(0, 0, 0, 0.02);
}
.drawer-container .hy-ce63fc-drawer-header .hy-ce63fc-ico-close:before {
  content: '\\00D7';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.drawer-container .hy-ce63fc-drawer-header .hy-ce63fc-ico-close:hover {
  border-color: rgba(0, 0, 0, 0.1);
}
.hy-ce63fc-drawer-container .hy-ce63fc-drawer-footer {
  height: var(--footerHeight);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,document.head.appendChild(e),window.__HUXY__.add("ce63fc")}var B="hy-ce63fc-drawer-wrap";var R="hy-ce63fc-open",V="hy-ce63fc-right",q="hy-ce63fc-left",y="hy-ce63fc-drawer-container";var m="hy-ce63fc-drawer-content";var u="hy-ce63fc-drawer-header";var f="hy-ce63fc-ico-close";var x="hy-ce63fc-drawer-footer";var A={drawerWrap:"hy-ce63fc-drawer-wrap","drawer-wrap":"hy-ce63fc-drawer-wrap",open:"hy-ce63fc-open",right:"hy-ce63fc-right",left:"hy-ce63fc-left",drawerContainer:"hy-ce63fc-drawer-container","drawer-container":"hy-ce63fc-drawer-container",drawerContent:"hy-ce63fc-drawer-content","drawer-content":"hy-ce63fc-drawer-content",drawerHeader:"hy-ce63fc-drawer-header","drawer-header":"hy-ce63fc-drawer-header",icoClose:"hy-ce63fc-ico-close","ico-close":"hy-ce63fc-ico-close",drawerFooter:"hy-ce63fc-drawer-footer","drawer-footer":"hy-ce63fc-drawer-footer"};import{jsx as c,jsxs as C}from"react/jsx-runtime";var G=({open:e,close:r,footer:n,header:t,className:a,style:l,children:b,width:p="300px",mountNode:h,position:i="right",relative:d})=>{let o=["drawer-wrap",i,e?"open":"",...a?.split(" ")??[]].filter(Boolean).map(s=>g[s]).join(" ");return c(H,{open:e,close:r,delay:250,hasMask:!0,relative:d,mountNode:h,className:"huxy-drawer",children:c("div",{className:o,style:{width:p,position:d?"absolute":"fixed","--footerHeight":n?"44px":"0px","--headerHeight":t?"44px":"0px",...l},children:C("div",{className:y,children:[t?C("div",{className:u,children:[i==="right"?c("span",{className:`link ${f}`,onClick:s=>r?.(s)}):null,c("div",{children:t}),i==="left"?c("span",{className:`link ${f}`,onClick:s=>r?.(s)}):null]}):null,c("div",{className:m,children:b}),n?c("div",{className:x,children:n}):null]})})})},se=G;export{se as default};
