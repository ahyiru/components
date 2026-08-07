var C=Object.defineProperty;var N=(o,t)=>{for(var e in t)C(o,e,{get:t[e],enumerable:!0})};import{isValidElement as P,cloneElement as X,Children as Y}from"react";import{useState as H}from"react";import{useEffect as M,useRef as z}from"react";var E=(o,t=[])=>{let e=z(!1);M(()=>{if(!e.current)e.current=!0;else return o()},t)},g=E;var S=(o,t=450)=>{let[e,l]=H(o);return g(()=>{let a;return o||t===0?l(o):a=setTimeout(()=>l(o),t),()=>a&&clearTimeout(a)},[o]),[e,l]},b=S;import{createPortal as U}from"react-dom";var I=({children:o,mountNode:t=document.body})=>U(o,t),v=I;import{jsx as h,jsxs as T}from"react/jsx-runtime";var $={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},D={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},F=(o,t)=>o.style.overflow=t?"hidden":"",O=({open:o,close:t,delay:e=300,children:l,mountNode:a=document.body,hasMask:f=!0,style:w,className:c="h-mask",relative:y})=>{let[s]=b(o,e);F(a,s);let m=y?"absolute":"fixed";return h(v,{mountNode:a,children:h("div",{children:s?T("div",{className:c,style:{...$,position:m},children:[f?h("div",{style:{...D,position:m},onClick:r=>t?.(r)}):null,Y.map(l,r=>P(r)?X(r,{style:{position:"relative",zIndex:100001,...r.props.style}}):r)]}):null})})},_=O;var n={};N(n,{btn:()=>p,default:()=>A,left:()=>u,modalContainer:()=>B,modalContent:()=>V,modalFooter:()=>q,modalHeader:()=>R,modalWrap:()=>W,open:()=>j,right:()=>x});if(typeof document<"u"&&!window.__HUXY__?.has("475379")){window.__HUXY__=window.__HUXY__||new Set;let o=document.createElement("style");o.textContent=`@keyframes animate-modal-in {
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
`,document.head.appendChild(o),window.__HUXY__.add("475379")}var W="hy-475379-modal-wrap",j="hy-475379-open",B="hy-475379-modal-container",R="hy-475379-modal-header",V="hy-475379-modal-content",q="hy-475379-modal-footer",p="hy-475379-btn",u="hy-475379-left",x="hy-475379-right",A={modalWrap:"hy-475379-modal-wrap","modal-wrap":"hy-475379-modal-wrap",open:"hy-475379-open",modalContainer:"hy-475379-modal-container","modal-container":"hy-475379-modal-container",modalHeader:"hy-475379-modal-header","modal-header":"hy-475379-modal-header",modalContent:"hy-475379-modal-content","modal-content":"hy-475379-modal-content",modalFooter:"hy-475379-modal-footer","modal-footer":"hy-475379-modal-footer",btn:"hy-475379-btn",left:"hy-475379-left",right:"hy-475379-right"};import{jsx as d,jsxs as k}from"react/jsx-runtime";var G=({open:o,close:t,hasMask:e=!0,cancelText:l="\u53D6\u6D88",submit:a,submitText:f="\u786E\u5B9A",title:w="Modal \u5F39\u7A97",className:c,children:y,delay:s=250,...m})=>{let r=["modal-wrap",o?"open":"",...c?.split(" ")??[]].filter(Boolean).map(i=>n[i]).join(" ");return d(_,{open:o,close:t,delay:s,hasMask:e,className:"huxy-modal",children:d("div",{className:r,...m,children:k("div",{className:void 0,children:[d("div",{className:void 0,children:w}),d("div",{className:void 0,children:y}),k("div",{className:void 0,children:[d("div",{className:`${p} ${u}`,onClick:i=>t?.(i),children:l}),d("div",{className:`${p} ${x}`,onClick:i=>a?.(i),children:f})]})]})})})},mo=G;export{mo as default};
