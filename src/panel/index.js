import{useRef as U}from"react";if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,document.head.appendChild(n),window.__HUXY__.add("cab66a")}import{jsx as p}from"react/jsx-runtime";var k=({global:n,absolute:e})=>p("div",{className:`spinner${n?" global":""}${e?" absolute":""}`,children:p("figure",{className:"spinning"})}),h=k;var H=(n,e)=>Object.prototype.hasOwnProperty.call(n??{},e),d=H;var P=n=>{let e=typeof n=="function"?n():n;return d(e,"current")},m=P;if(typeof document<"u"&&!window.__HUXY__?.has("07a33c")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.clear::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.hy-07a33c-panel {
  --radius: 2px;
  position: relative;
  background: var(--panelBgColor);
  border-radius: var(--radius);
  height: 100%;
  z-index: 1;
  /*&:hover{
    box-shadow:0px 2px 5px hsla(0,0%,80%,.7);
  }*/
}
.panel.hy-07a33c-shadow1 {
  box-shadow: 0 0 3rem rgba(100, 200, 255, 0.5) inset;
}
.panel.hy-07a33c-shadow2 {
  border-color: rgba(0, 180, 220, 0.5);
  box-shadow: 0 0 2rem rgba(0, 180, 220, 0.5) inset;
}
.hy-07a33c-panel .hy-07a33c-panel-body {
  padding: 10px 12px;
  border-radius: var(--radius);
}
.panel .hy-07a33c-panel-body::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.hy-07a33c-panel .hy-07a33c-panel-header {
  padding: 8px 12px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.panel .hy-07a33c-panel-header::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.hy-07a33c-panel .hy-07a33c-panel-header .hy-07a33c-panel-title {
  flex: 1;
  width: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hy-07a33c-panel .hy-07a33c-panel-header .hy-07a33c-panel-plugins {
  flex-shrink: 0;
}
.hy-07a33c-panel .hy-07a33c-panel-header .hy-07a33c-panel-plugins .hy-07a33c-link {
  text-align: right;
  font-size: 1.8rem;
}
.panel .hy-07a33c-panel-header .hy-07a33c-panel-plugins .hy-07a33c-link:not(:first-of-type) {
  margin-left: 10px;
}
.panel .hy-07a33c-panel-header + .hy-07a33c-panel-body {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,document.head.appendChild(n),window.__HUXY__.add("07a33c")}var c="hy-07a33c-panel";var f="hy-07a33c-link";import{jsx as r,jsxs as b}from"react/jsx-runtime";var X=n=>n?.filter?.(e=>typeof e=="function"),Y=({loading:n,title:e,plugins:y,children:g,className:i,ref:t,...w})=>{let u=U(),o=X(y),s=o?.length,x=i?` ${i}`:"",l=m(()=>t)?t:u;return b("div",{className:`${c}${x}`,...w,ref:l,children:[(e||s)&&b("div",{className:void 0,children:[e&&r("h4",{className:void 0,children:e}),s&&r("div",{className:void 0,children:o.map((v,_)=>r("span",{className:`link ${f}`,children:r(v,{panel:l})},_))})]}),r("div",{className:void 0,children:g}),n&&r(h,{})]})},V=Y;export{V as default};
