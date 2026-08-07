var i=Object.defineProperty;var h=(a,n)=>{for(var o in n)i(a,o,{get:n[o],enumerable:!0})};var e={};h(e,{anico:()=>t,bottom:()=>d,close:()=>l,default:()=>g,hline:()=>r,pause:()=>y,play:()=>s,right:()=>p});if(typeof document<"u"&&!window.__HUXY__?.has("ac55d9")){window.__HUXY__=window.__HUXY__||new Set;let a=document.createElement("style");a.textContent=`/*@height:2px;
@width:18px;
// @bgcolor:currentColor;
@bgcolor:#00b4cf;

@ratio:1.4142;
@rotate:45deg;
@scale:@ratio / (@ratio + 1);
@maigin:@height * 3;
@ty:@width / 4 - @height / @ratio;
@tx:@width / 4 + @height / @ratio;
@anitime:.3s;
*/
.hy-ac55d9-anico {
  --height: 2px;
  --width: 18px;
  --ratio: 1.4142;
  --rotate: 45deg;
  --anitime: 0.3s;
  --scale: calc(var(--ratio) / (var(--ratio) + 1));
  --maigin: calc(var(--height) * 3);
  --ty: calc(var(--width) / 4 - var(--height) / var(--ratio));
  --tx: calc(var(--width) / 4 + var(--height) / var(--ratio));
  position: relative;
  display: inline-block;
  height: 100%;
  width: var(--width);
}
.hy-ac55d9-anico .hy-ac55d9-hline,
.hy-ac55d9-anico .hy-ac55d9-hline::before,
.hy-ac55d9-anico .hy-ac55d9-hline::after {
  position: absolute;
  background-color: var(--linkHoverColor, currentColor);
  border-radius: 2px;
  transform: translateZ(0);
}
.hy-ac55d9-anico .hy-ac55d9-hline {
  width: var(--width);
  height: var(--height);
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform var(--anitime), background-color var(--anitime);
}
.anico .hy-ac55d9-hline::before,
.anico .hy-ac55d9-hline::after {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: currentColor;
  transition: transform var(--anitime);
}
.anico .hy-ac55d9-hline::before {
  transform: translateY(calc(0px - var(--maigin)));
}
.anico .hy-ac55d9-hline::after {
  transform: translateY(var(--maigin));
}
.anico .hy-ac55d9-hline.hy-ac55d9-close {
  background-color: rgba(255, 255, 255, 0);
}
.anico .hy-ac55d9-hline.hy-ac55d9-close::before {
  transform: rotate(var(--rotate));
}
.anico .hy-ac55d9-hline.hy-ac55d9-close::after {
  transform: rotate(calc(0deg - var(--rotate)));
}
.anico .hy-ac55d9-hline.right::before {
  transform: translateX(var(--tx)) translateY(calc(0px - var(--ty))) rotate(var(--rotate)) scaleX(var(--scale));
}
.anico .hy-ac55d9-hline.right::after {
  transform: translateX(var(--tx)) translateY(var(--ty)) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.anico .hy-ac55d9-hline.hy-ac55d9-bottom {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}
.anico .hy-ac55d9-hline.hy-ac55d9-bottom::before {
  transform: translateX(calc(0px - var(--tx))) translateY(calc(0px - var(--ty))) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.anico .hy-ac55d9-hline.hy-ac55d9-bottom::after {
  transform: translateX(calc(0px - var(--tx))) translateY(var(--ty)) rotate(var(--rotate)) scaleX(var(--scale));
}
.anico .hy-ac55d9-hline.hy-ac55d9-play {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  background-color: rgba(0, 0, 0, 0);
}
.anico .hy-ac55d9-hline.hy-ac55d9-play::before {
  transform-origin: 0 0;
}
.anico .hy-ac55d9-hline.hy-ac55d9-play::after {
  transform-origin: 100% 100%;
}
.anico .hy-ac55d9-hline.hy-ac55d9-play.hy-ac55d9-pause {
  background-color: var(--linkHoverColor, currentColor);
  transform: translateX(-75%) translateY(-50%) rotate(-90deg);
}
.anico .hy-ac55d9-hline.hy-ac55d9-play.hy-ac55d9-pause::before {
  transform: rotate(60deg);
}
.anico .hy-ac55d9-hline.hy-ac55d9-play.hy-ac55d9-pause::after {
  transform: rotate(-60deg);
}
@media screen and (max-width: 1024px) {
  .anico .hline.hy-ac55d9-right {
    background-color: rgba(255, 255, 255, 0);
  }
  .anico .hline.hy-ac55d9-right::before {
    transform: rotate(45deg);
  }
  .anico .hline.hy-ac55d9-right::after {
    transform: rotate(-45deg);
  }
}
`,document.head.appendChild(a),window.__HUXY__.add("ac55d9")}var t="hy-ac55d9-anico",r="hy-ac55d9-hline",l="hy-ac55d9-close",d="hy-ac55d9-bottom",s="hy-ac55d9-play",y="hy-ac55d9-pause",p="hy-ac55d9-right",g={anico:"hy-ac55d9-anico",hline:"hy-ac55d9-hline",close:"hy-ac55d9-close",bottom:"hy-ac55d9-bottom",play:"hy-ac55d9-play",pause:"hy-ac55d9-pause",right:"hy-ac55d9-right"};import{jsx as c}from"react/jsx-runtime";var f=a=>c("span",{className:t,children:c("span",{className:[r,...(a.type||"").split(" ").map(n=>e[n]).filter(Boolean)].join(" ")})}),v=f;export{v as default};
