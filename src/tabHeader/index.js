import{useState as f,useEffect as N,useRef as m}from"react";var R=()=>![typeof window,typeof document].includes("undefined"),c=R;var X=(t,r)=>Object.prototype.hasOwnProperty.call(t??{},r),h=X;var H=t=>{let r=typeof t=="function"?t():t;return h(r,"current")},b=H;var T=t=>{if(c())return t=b(t)?t.current:t??document.body,t.getBoundingClientRect?.()},s=T;if(typeof document<"u"&&!window.__HUXY__?.has("f9b7bb")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.tabs-header-wrap {
  --color: #40a9ff;
  position: relative;
  border-bottom: 3px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
}
.tabs-header-wrap .tabs-header {
  display: block;
  user-select: none;
  margin: 0;
  padding: 0;
}
.tabs-header-wrap .tabs-header::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.tabs-header-wrap .tabs-header.flex {
  display: flex;
}
.tabs-header-wrap .tabs-header.flex .th-item {
  flex: 1;
  text-align: center;
}
.tabs-header-wrap .tabs-header .th-item {
  display: block;
  float: left;
  position: relative;
  cursor: pointer;
  border-right: 1px solid transparent;
  margin-right: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.tabs-header-wrap .tabs-header .th-item:last-of-type {
  border: 0;
  margin-right: 0;
}
.tabs-header-wrap .tabs-header .th-item:hover,
.tabs-header-wrap .tabs-header .th-item.active {
  color: var(--color);
}
.tabs-header-wrap .th-track {
  height: 3px;
  position: absolute;
  left: 0;
  bottom: -3px;
  color: var(--color);
  background-color: currentColor;
  transition: all 0.3s;
}
.tabs-header-wrap .th-track::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: currentColor;
}
`,document.head.appendChild(t),window.__HUXY__.add("f9b7bb")}import{jsx as a,jsxs as B}from"react/jsx-runtime";var U=t=>a("div",{style:{padding:"6px 15px"},children:t}),Y=({activekey:t,tabs:r=[],switchTab:i,trackColor:u,flex:w,ref:g,...x})=>{let[o,y]=f(t??r[0]?.key),[k,v]=f({}),d=m({}),l=m();N(()=>{let e=d.current[o];e&&p(e)},[]);let p=e=>{let{left:n,width:C}=s(e),P=s(l.current).left;v({left:n-P,width:C})},_=(e,n)=>{e.stopPropagation(),y(n),typeof i=="function"&&i(n),p(e.currentTarget)};return B("div",{className:"tabs-header-wrap",...x,ref:g,children:[a("ul",{className:`tabs-header${w?" flex":""}`,ref:l,children:r.map(e=>a("li",{ref:n=>d.current[e.key]=n,className:`th-item${o===e.key?" active":""}`,onClick:n=>_(n,e.key),children:typeof e.renderTabs=="function"?e.renderTabs(e,o===e.key):U(e.value)},e.key))}),a("div",{className:"th-track",style:{...k,color:u}})]})},F=Y;export{F as default};
