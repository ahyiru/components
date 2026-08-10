var E=Object.defineProperty;var H=(o,t)=>{for(var e in t)E(o,e,{get:t[e],enumerable:!0})};import{isValidElement as D,cloneElement as F,Children as O}from"react";import{useState as P}from"react";import{useEffect as S,useRef as U}from"react";var I=(o,t=[])=>{let e=U(!1);S(()=>{if(!e.current)e.current=!0;else return o()},t)},k=I;var X=(o,t=450)=>{let[e,r]=P(o);return k(()=>{let n;return o||t===0?r(o):n=setTimeout(()=>r(o),t),()=>n&&clearTimeout(n)},[o]),[e,r]},C=X;import{createPortal as Y}from"react-dom";var $=({children:o,mountNode:t=document.body})=>Y(o,t),N=$;import{jsx as y,jsxs as R}from"react/jsx-runtime";var T={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},W={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},j=(o,t)=>o.style.overflow=t?"hidden":"",B=({open:o,close:t,delay:e=300,children:r,mountNode:n=document.body,hasMask:p=!0,style:_,className:c="h-mask",relative:f})=>{let[i]=C(o,e);j(n,i);let s=f?"absolute":"fixed";return y(N,{mountNode:n,children:y("div",{children:i?R("div",{className:c,style:{...T,position:s},children:[p?y("div",{style:{...W,position:s},onClick:a=>t?.(a)}):null,O.map(r,a=>D(a)?F(a,{style:{position:"relative",zIndex:100001,...a.props.style}}):a)]}):null})})},M=B;var v={};H(v,{btn:()=>m,default:()=>A,left:()=>g,"modal-container":()=>h,"modal-content":()=>u,"modal-footer":()=>w,"modal-header":()=>x,"modal-wrap":()=>V,modalContainer:()=>h,modalContent:()=>u,modalFooter:()=>w,modalHeader:()=>x,modalWrap:()=>V,open:()=>q,right:()=>b});if(typeof document<"u"&&!window.__HUXY__?.has("475379")){window.__HUXY__=window.__HUXY__||new Set;let o=document.createElement("style");o.textContent=`@keyframes animate-modal-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-modal-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.hy-475379-modal-wrap {
  position: fixed;
  background: #ffffff;
  border-radius: 12px;
  min-width: 333px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  animation: animate-modal-out 0.25s forwards;
}
.modal-wrap.hy-475379-open {
  animation: animate-modal-in 0.25s forwards;
}
.hy-475379-modal-container {
  position: relative;
}
.hy-475379-modal-container .hy-475379-modal-header {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 20px 12px 0;
}
.hy-475379-modal-container .hy-475379-modal-content {
  padding: 8px 12px 24px;
}
.hy-475379-modal-container .hy-475379-modal-footer {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
.hy-475379-modal-container .hy-475379-modal-footer .hy-475379-btn {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  height: 100%;
}
.modal-container .hy-475379-modal-footer .hy-475379-btn.hy-475379-left {
  color: #666666;
  border-right: 1px solid #edeff2;
}
.modal-container .hy-475379-modal-footer .hy-475379-btn.hy-475379-right {
  color: #036dff;
}
`,document.head.appendChild(o),window.__HUXY__.add("475379")}var V="hy-475379-modal-wrap";var q="hy-475379-open",h="hy-475379-modal-container";var x="hy-475379-modal-header";var u="hy-475379-modal-content";var w="hy-475379-modal-footer";var m="hy-475379-btn",g="hy-475379-left",b="hy-475379-right",A={modalWrap:"hy-475379-modal-wrap","modal-wrap":"hy-475379-modal-wrap",open:"hy-475379-open",modalContainer:"hy-475379-modal-container","modal-container":"hy-475379-modal-container",modalHeader:"hy-475379-modal-header","modal-header":"hy-475379-modal-header",modalContent:"hy-475379-modal-content","modal-content":"hy-475379-modal-content",modalFooter:"hy-475379-modal-footer","modal-footer":"hy-475379-modal-footer",btn:"hy-475379-btn",left:"hy-475379-left",right:"hy-475379-right"};import{jsx as d,jsxs as z}from"react/jsx-runtime";var G=({open:o,close:t,hasMask:e=!0,cancelText:r="\u53D6\u6D88",submit:n,submitText:p="\u786E\u5B9A",title:_="Modal \u5F39\u7A97",className:c,children:f,delay:i=250,...s})=>{let a=["modal-wrap",o?"open":"",...c?.split(" ")??[]].filter(Boolean).map(l=>v[l]).join(" ");return d(M,{open:o,close:t,delay:i,hasMask:e,className:"huxy-modal",children:d("div",{className:a,...s,children:z("div",{className:h,children:[d("div",{className:x,children:_}),d("div",{className:u,children:f}),z("div",{className:w,children:[d("div",{className:`${m} ${g}`,onClick:l=>t?.(l),children:r}),d("div",{className:`${m} ${b}`,onClick:l=>n?.(l),children:p})]})]})})})},mo=G;export{mo as default};
