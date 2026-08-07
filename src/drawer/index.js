var v=Object.defineProperty;var k=(e,r)=>{for(var t in r)v(e,t,{get:r[t],enumerable:!0})};import{isValidElement as U,cloneElement as D,Children as M}from"react";import{useState as N}from"react";import{useEffect as _,useRef as H}from"react";var C=(e,r=[])=>{let t=H(!1);_(()=>{if(!t.current)t.current=!0;else return e()},r)},m=C;var z=(e,r=450)=>{let[t,a]=N(e);return m(()=>{let o;return e||r===0?a(e):o=setTimeout(()=>a(e),r),()=>o&&clearTimeout(o)},[e]),[t,a]},u=z;import{createPortal as E}from"react-dom";var S=({children:e,mountNode:r=document.body})=>E(e,r),g=S;import{jsx as w,jsxs as F}from"react/jsx-runtime";var I={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},P={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},X=(e,r)=>e.style.overflow=r?"hidden":"",Y=({open:e,close:r,delay:t=300,children:a,mountNode:o=document.body,hasMask:l=!0,style:y,className:h="h-mask",relative:p})=>{let[d]=u(e,t);X(o,d);let s=p?"absolute":"fixed";return w(g,{mountNode:o,children:w("div",{children:d?F("div",{className:h,style:{...I,position:s},children:[l?w("div",{style:{...P,position:s},onClick:c=>r?.(c)}):null,M.map(a,c=>U(c)?D(c,{style:{position:"relative",zIndex:100001,...c.props.style}}):c)]}):null})})},x=Y;var n={};k(n,{default:()=>A,drawerContainer:()=>j,drawerContent:()=>B,drawerFooter:()=>q,drawerHeader:()=>R,drawerWrap:()=>O,icoClose:()=>V,left:()=>$,open:()=>T,right:()=>W});if(typeof document<"u"&&!window.__HUXY__?.has("ce63fc")){window.__HUXY__=window.__HUXY__||new Set;let e=document.createElement("style");e.textContent=`@keyframes animate-drawer-right-in {
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
`,document.head.appendChild(e),window.__HUXY__.add("ce63fc")}var O="hy-ce63fc-drawer-wrap",T="hy-ce63fc-open",W="hy-ce63fc-right",$="hy-ce63fc-left",j="hy-ce63fc-drawer-container",B="hy-ce63fc-drawer-content",R="hy-ce63fc-drawer-header",V="hy-ce63fc-ico-close",q="hy-ce63fc-drawer-footer",A={drawerWrap:"hy-ce63fc-drawer-wrap","drawer-wrap":"hy-ce63fc-drawer-wrap",open:"hy-ce63fc-open",right:"hy-ce63fc-right",left:"hy-ce63fc-left",drawerContainer:"hy-ce63fc-drawer-container","drawer-container":"hy-ce63fc-drawer-container",drawerContent:"hy-ce63fc-drawer-content","drawer-content":"hy-ce63fc-drawer-content",drawerHeader:"hy-ce63fc-drawer-header","drawer-header":"hy-ce63fc-drawer-header",icoClose:"hy-ce63fc-ico-close","ico-close":"hy-ce63fc-ico-close",drawerFooter:"hy-ce63fc-drawer-footer","drawer-footer":"hy-ce63fc-drawer-footer"};import{jsx as i,jsxs as b}from"react/jsx-runtime";var G=({open:e,close:r,footer:t,header:a,className:o,style:l,children:y,width:h="300px",mountNode:p,position:d="right",relative:s})=>{let c=["drawer-wrap",d,e?"open":"",...o?.split(" ")??[]].filter(Boolean).map(f=>n[f]).join(" ");return i(x,{open:e,close:r,delay:250,hasMask:!0,relative:s,mountNode:p,className:"huxy-drawer",children:i("div",{className:c,style:{width:h,position:s?"absolute":"fixed","--footerHeight":t?"44px":"0px","--headerHeight":a?"44px":"0px",...l},children:b("div",{className:void 0,children:[a?b("div",{className:void 0,children:[d==="right"?i("span",{className:`link ${void 0}`,onClick:f=>r?.(f)}):null,i("div",{children:a}),d==="left"?i("span",{className:`link ${void 0}`,onClick:f=>r?.(f)}):null]}):null,i("div",{className:void 0,children:y}),t?i("div",{className:void 0,children:t}):null]})})})},se=G;export{se as default};
