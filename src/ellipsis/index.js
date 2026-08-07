var T=Object.defineProperty;var C=(t,o)=>{for(var r in o)T(t,r,{get:o[r],enumerable:!0})};import{useState as W,useEffect as q,useRef as D}from"react";var S=()=>![typeof window,typeof document].includes("undefined"),p=S;var L=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),d=L;var Y=t=>d(t).indexOf("element")>-1,c=Y;var B=(t,o={},r=!1)=>{if(c(t)){if(r){let n="";Object.keys(o).map(e=>{n+=`${e}: ${o[e]};`}),t.style=n;return}Object.keys(o).map(n=>t.style.setProperty(n,o[n]))}},y=B;var _=(t,o)=>Object.prototype.hasOwnProperty.call(t??{},o),u=_;var E=t=>{let o=typeof t=="function"?t():t;return u(o,"current")},a=E;var k=(t,o,r)=>{if(!p())return;r=a(r)?r.current:r??document.body;let n=document.createElement("span");n.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),o&&y(n,o),n.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(n);let e=n.getBoundingClientRect();return r.removeChild(n),e},b=k;var O=t=>{if(p())return t=a(t)?t.current:t??document.body,t.getBoundingClientRect?.()},m=O;var h={};C(h,{default:()=>N,ellipsis:()=>s,huxyTooltip:()=>P,huxyTooltipBottomLeft:()=>U,huxyTooltipBottomRight:()=>H,huxyTooltipRightTop:()=>X,huxyTooltipTopLeft:()=>j,huxyTooltipTopRight:()=>$});if(typeof document<"u"&&!window.__HUXY__?.has("3b8d64")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-3b8d64-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
.hy-3b8d64-huxy-tooltip {
  position: relative;
  width: 100%;
}
.huxy-tooltip:hover::before,
.huxy-tooltip:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip:hover::before {
  transform: translateY(0);
}
.huxy-tooltip:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-tooltip::before,
.huxy-tooltip::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip::before {
  content: attr(tooltip);
  z-index: 10002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-tooltip::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.hy-3b8d64-huxy-tooltip-topRight {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.huxy-tooltip-topRight[tooltip] {
  position: relative;
  width: 100%;
}
.huxy-tooltip-topRight[tooltip]:hover::before,
.huxy-tooltip-topRight[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-topRight[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-tooltip-topRight[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-tooltip-topRight[tooltip]::before,
.huxy-tooltip-topRight[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-topRight[tooltip]::before {
  content: attr(tooltip);
  z-index: 10002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-tooltip-topRight[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-tooltip-topRight[tooltip]::before {
  left: 0;
  bottom: calc(100% + var(--arrowSize));
}
.huxy-tooltip-topRight[tooltip]::after {
  left: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.hy-3b8d64-huxy-tooltip-topLeft {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.huxy-tooltip-topLeft[tooltip] {
  position: relative;
  width: 100%;
}
.huxy-tooltip-topLeft[tooltip]:hover::before,
.huxy-tooltip-topLeft[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-topLeft[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-tooltip-topLeft[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-tooltip-topLeft[tooltip]::before,
.huxy-tooltip-topLeft[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-topLeft[tooltip]::before {
  content: attr(tooltip);
  z-index: 10002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-tooltip-topLeft[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-tooltip-topLeft[tooltip]::before {
  right: 0;
  bottom: calc(100% + var(--arrowSize));
}
.huxy-tooltip-topLeft[tooltip]::after {
  right: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.hy-3b8d64-huxy-tooltip-bottomRight {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.huxy-tooltip-bottomRight[tooltip] {
  position: relative;
  width: 100%;
}
.huxy-tooltip-bottomRight[tooltip]:hover::before,
.huxy-tooltip-bottomRight[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-bottomRight[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-tooltip-bottomRight[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-tooltip-bottomRight[tooltip]::before,
.huxy-tooltip-bottomRight[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-bottomRight[tooltip]::before {
  content: attr(tooltip);
  z-index: 10002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-tooltip-bottomRight[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-tooltip-bottomRight[tooltip]::before {
  left: 0;
  top: calc(100% + var(--arrowSize));
}
.huxy-tooltip-bottomRight[tooltip]::after {
  left: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.hy-3b8d64-huxy-tooltip-bottomLeft {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.huxy-tooltip-bottomLeft[tooltip] {
  position: relative;
  width: 100%;
}
.huxy-tooltip-bottomLeft[tooltip]:hover::before,
.huxy-tooltip-bottomLeft[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-bottomLeft[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-tooltip-bottomLeft[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-tooltip-bottomLeft[tooltip]::before,
.huxy-tooltip-bottomLeft[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-bottomLeft[tooltip]::before {
  content: attr(tooltip);
  z-index: 10002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-tooltip-bottomLeft[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-tooltip-bottomLeft[tooltip]::before {
  right: 0;
  top: calc(100% + var(--arrowSize));
}
.huxy-tooltip-bottomLeft[tooltip]::after {
  right: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.hy-3b8d64-huxy-tooltip-rightTop {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.huxy-tooltip-rightTop[tooltip] {
  position: relative;
  width: 100%;
}
.huxy-tooltip-rightTop[tooltip]:hover::before,
.huxy-tooltip-rightTop[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-rightTop[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-tooltip-rightTop[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-tooltip-rightTop[tooltip]::before,
.huxy-tooltip-rightTop[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-tooltip-rightTop[tooltip]::before {
  content: attr(tooltip);
  z-index: 10002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-tooltip-rightTop[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-tooltip-rightTop[tooltip]::before {
  top: 0;
  left: calc(100% + var(--arrowSize));
}
.huxy-tooltip-rightTop[tooltip]::after {
  top: var(--position);
  left: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
`,document.head.appendChild(t),window.__HUXY__.add("3b8d64")}var s="hy-3b8d64-ellipsis",P="hy-3b8d64-huxy-tooltip",$="hy-3b8d64-huxy-tooltip-topRight",j="hy-3b8d64-huxy-tooltip-topLeft",H="hy-3b8d64-huxy-tooltip-bottomRight",U="hy-3b8d64-huxy-tooltip-bottomLeft",X="hy-3b8d64-huxy-tooltip-rightTop",N={ellipsis:"hy-3b8d64-ellipsis",huxyTooltip:"hy-3b8d64-huxy-tooltip","huxy-tooltip":"hy-3b8d64-huxy-tooltip",huxyTooltipTopRight:"hy-3b8d64-huxy-tooltip-topRight","huxy-tooltip-topRight":"hy-3b8d64-huxy-tooltip-topRight",huxyTooltipTopLeft:"hy-3b8d64-huxy-tooltip-topLeft","huxy-tooltip-topLeft":"hy-3b8d64-huxy-tooltip-topLeft",huxyTooltipBottomRight:"hy-3b8d64-huxy-tooltip-bottomRight","huxy-tooltip-bottomRight":"hy-3b8d64-huxy-tooltip-bottomRight",huxyTooltipBottomLeft:"hy-3b8d64-huxy-tooltip-bottomLeft","huxy-tooltip-bottomLeft":"hy-3b8d64-huxy-tooltip-bottomLeft",huxyTooltipRightTop:"hy-3b8d64-huxy-tooltip-rightTop","huxy-tooltip-rightTop":"hy-3b8d64-huxy-tooltip-rightTop"};import{jsx as g}from"react/jsx-runtime";var A=({title:t,placement:o="topRight",children:r,ellipsis:n,className:e,...i})=>g("span",{className:`${h[`huxy-tooltip-${o}`]}${e?` ${e}`:""}`,tooltip:t??r,...i,children:g("span",{className:n?s:"",children:r})}),v=A;import{jsx as l}from"react/jsx-runtime";var F={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},G=t=>{let{children:o,style:r}=t,n=typeof o=="string",e=n?o:o?.props?.title??o?.props?.children,i=D(),[f,w]=W(!0);return q(()=>{if(i.current){let{width:z}=b(e,null,i.current.parentNode),{width:R}=m(i.current),x=~~z>~~R;x!==f&&w(x)}},[e]),l("span",{ref:i,style:{display:"flex",width:"100%",...r},children:f?n?l(v,{...t,ellipsis:!0}):l("span",{style:F,children:o}):n?o:o?.props?.children})},I=t=>t.children==null?"":l(G,{...t}),bt=I;export{bt as default};
