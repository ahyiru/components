var h=Object.defineProperty;var s=(t,n)=>{for(var o in n)h(t,o,{get:n[o],enumerable:!0})};var i={};s(i,{default:()=>u,ellipsis:()=>r,huxyTooltip:()=>x,huxyTooltipBottomLeft:()=>d,huxyTooltipBottomRight:()=>b,huxyTooltipRightTop:()=>c,huxyTooltipTopLeft:()=>y,huxyTooltipTopRight:()=>f});if(typeof document<"u"&&!window.__HUXY__?.has("3b8d64")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-3b8d64-ellipsis {
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
`,document.head.appendChild(t),window.__HUXY__.add("3b8d64")}var r="hy-3b8d64-ellipsis",x="hy-3b8d64-huxy-tooltip",f="hy-3b8d64-huxy-tooltip-topRight",y="hy-3b8d64-huxy-tooltip-topLeft",b="hy-3b8d64-huxy-tooltip-bottomRight",d="hy-3b8d64-huxy-tooltip-bottomLeft",c="hy-3b8d64-huxy-tooltip-rightTop",u={ellipsis:"hy-3b8d64-ellipsis",huxyTooltip:"hy-3b8d64-huxy-tooltip","huxy-tooltip":"hy-3b8d64-huxy-tooltip",huxyTooltipTopRight:"hy-3b8d64-huxy-tooltip-topRight","huxy-tooltip-topRight":"hy-3b8d64-huxy-tooltip-topRight",huxyTooltipTopLeft:"hy-3b8d64-huxy-tooltip-topLeft","huxy-tooltip-topLeft":"hy-3b8d64-huxy-tooltip-topLeft",huxyTooltipBottomRight:"hy-3b8d64-huxy-tooltip-bottomRight","huxy-tooltip-bottomRight":"hy-3b8d64-huxy-tooltip-bottomRight",huxyTooltipBottomLeft:"hy-3b8d64-huxy-tooltip-bottomLeft","huxy-tooltip-bottomLeft":"hy-3b8d64-huxy-tooltip-bottomLeft",huxyTooltipRightTop:"hy-3b8d64-huxy-tooltip-rightTop","huxy-tooltip-rightTop":"hy-3b8d64-huxy-tooltip-rightTop"};import{jsx as p}from"react/jsx-runtime";var g=({title:t,placement:n="topRight",children:o,ellipsis:a,className:e,...l})=>p("span",{className:`${i[`huxy-tooltip-${n}`]}${e?` ${e}`:""}`,tooltip:t??o,...l,children:p("span",{className:a?r:"",children:o})}),m=g;export{m as default};
