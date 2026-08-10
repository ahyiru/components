import{useRef as $}from"react";if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`@keyframes before {
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
`,document.head.appendChild(n),window.__HUXY__.add("cab66a")}import{jsx as l}from"react/jsx-runtime";var U=({global:n,absolute:e})=>l("div",{className:`spinner${n?" global":""}${e?" absolute":""}`,children:l("figure",{className:"spinning"})}),p=U;var X=(n,e)=>Object.prototype.hasOwnProperty.call(n??{},e),h=X;var Y=n=>{let e=typeof n=="function"?n():n;return h(e,"current")},d=Y;if(typeof document<"u"&&!window.__HUXY__?.has("07a33c")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.clear::after {
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
`,document.head.appendChild(n),window.__HUXY__.add("07a33c")}var m="hy-07a33c-panel";var c="hy-07a33c-panel-body";var f="hy-07a33c-panel-header";var b="hy-07a33c-panel-title";var y="hy-07a33c-panel-plugins";var g="hy-07a33c-link";import{jsx as a,jsxs as w}from"react/jsx-runtime";var C=n=>n?.filter?.(e=>typeof e=="function"),z=({loading:n,title:e,plugins:u,children:x,className:r,ref:t,...v})=>{let _=$(),i=C(u),o=i?.length,k=r?` ${r}`:"",s=d(()=>t)?t:_;return w("div",{className:`${m}${k}`,...v,ref:s,children:[(e||o)&&w("div",{className:f,children:[e&&a("h4",{className:b,children:e}),o&&a("div",{className:y,children:i.map((H,P)=>a("span",{className:`link ${g}`,children:a(H,{panel:s})},P))})]}),a("div",{className:c,children:x}),n&&a(p,{})]})},D=z;export{D as default};
