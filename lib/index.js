var ee=Object.defineProperty;var O=(t,n)=>{for(var e in n)ee(t,e,{get:n[e],enumerable:!0})};var pt={};O(pt,{anico:()=>ct,bottom:()=>re,close:()=>oe,default:()=>he,hline:()=>ut,pause:()=>ae,play:()=>ie,right:()=>le});if(typeof document<"u"&&!window.__HUXY__?.has("ac55d9")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`/*@height:2px;
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
`,document.head.appendChild(t),window.__HUXY__.add("ac55d9")}var ct="hy-ac55d9-anico",ut="hy-ac55d9-hline",oe="hy-ac55d9-close",re="hy-ac55d9-bottom",ie="hy-ac55d9-play",ae="hy-ac55d9-pause",le="hy-ac55d9-right",he={anico:"hy-ac55d9-anico",hline:"hy-ac55d9-hline",close:"hy-ac55d9-close",bottom:"hy-ac55d9-bottom",play:"hy-ac55d9-play",pause:"hy-ac55d9-pause",right:"hy-ac55d9-right"};import{jsx as Lt}from"react/jsx-runtime";var de=t=>Lt("span",{className:ct,children:Lt("span",{className:[ut,...(t.type||"").split(" ").map(n=>pt[n]).filter(Boolean)].join(" ")})}),ft=de;import{useState as pe,useEffect as fe}from"react";var se=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),Yt=se;var ce=t=>new Promise((n,e)=>{let o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>n(o.result)),o.addEventListener("error",r=>e(r))}),$t=ce;var ue=async t=>{if(!Yt(t))return t;let e=await(await fetch(decodeURIComponent(t))).blob();return await $t(e)},Ut=ue;var xe=t=>{let[n,e]=pe(t);return fe(()=>{(async r=>{let i=await Ut(r);e(i)})(t)},[t]),n},Xt=xe;import{jsx as me}from"react/jsx-runtime";var ye=({src:t,...n})=>{let e=Xt(t);return me("img",{...n,src:e})},ge=ye;import{flushSync as $e}from"react-dom";import{useState as gt,useRef as Ue}from"react";import{useEffect as At,useRef as we}from"react";var be=(t,n)=>{let e=we();At(()=>{e.current=t},[t]),At(()=>{if(n){let o=setInterval(()=>e.current(),n);return()=>clearInterval(o)}},[n])},Dt=be;import{useEffect as Le}from"react";var ke=()=>![typeof window,typeof document].includes("undefined"),g=ke;var ve=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),nt=ve;var ze=t=>nt(t).indexOf("element")>-1,A=ze;var Ce=(t=null)=>g()?A(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},E=Ce;var _e=(t=()=>{},n=60)=>{let e=null;return function(...o){clearTimeout(e),e=setTimeout(()=>t.apply(this,o),n)}},et=_e;var He=(t,n)=>Object.prototype.hasOwnProperty.call(t??{},n),Ft=He;var Se=t=>{let n=typeof t=="function"?t():t;return Ft(n,"current")},x=Se;var Be=(t,n)=>{let e=[],o=t.children??[];for(let r=0,i=o.length;r<i;r++){let a=o[r];a.className.indexOf(n)>-1&&e.push(a)}return e.length===0?null:e.length===1?e[0]:e},xt=Be;var Re=(t,n)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");let e=document.createElement("object");return e.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),e.setAttribute("class","resize-sensor"),e.onload=()=>{e.contentDocument.defaultView.addEventListener("resize",n,!1),n()},e.type="text/html",t.appendChild(e),e.data="about:blank",e},Ie=(t,n=60)=>{if(!g())return;t=x(t)?t.current:t??document.body;let e=xt(t,"resize-sensor"),o=[],r=et(()=>o.map(h=>h(t)),n),i=h=>{xt(t,"resize-sensor")||(e=Re(t,r)),o.indexOf(h)===-1&&o.push(h)},a=h=>{let d=o.indexOf(h);d!==-1&&o.splice(d,1),o.length===0&&e&&l()},l=()=>{e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",r,!1),e.parentNode.removeChild(e),e=void 0,o=[])};return{element:t,bind:i,unbind:a,destroy:l}},Mt=Ie;import{useEffect as Te,useState as We,useCallback as Ee,useRef as Ne}from"react";var Pe=(t={})=>{let n=Ne(0),[e,o]=We(t),r=Ee(i=>{cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>o(i))},[]);return Te(()=>()=>cancelAnimationFrame(n.current),[]),[e,r]},ot=Pe;var Ye=(t=null,n=60)=>{let[e,o]=ot({});return Le(()=>{let r=typeof t=="function"?t():t,i=x(r)?r.current:r,{bind:a,destroy:l}=Mt(i,n);return a(()=>i&&o(E(i))),()=>l()},[]),e},Ot=Ye;if(typeof document<"u"&&!window.__HUXY__?.has("e7324b")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-e7324b-huxy-carousel {
  --bar-color: #fff;
  --bar-width: 16px;
  position: relative;
  overflow: hidden;
}
.hy-e7324b-huxy-carousel-wrap {
  transition: transform 0.5s cubic-bezier(0.24, 0.14, 0.17, 1.07);
}
.hy-e7324b-carousel-item {
  float: left;
}
.hy-e7324b-carousel-switch {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.hy-e7324b-carousel-switch .hy-e7324b-dot {
  display: inline-block;
  margin: 0 5px;
  width: var(--bar-width);
  height: 4px;
  border-radius: 2px;
  background: var(--bar-color);
  opacity: 0.3;
  cursor: pointer;
}
.hy-e7324b-carousel-switch .hy-e7324b-dot.hy-e7324b-active {
  width: calc(var(--bar-width) + 8px);
  opacity: 1;
}
`,document.head.appendChild(t),window.__HUXY__.add("e7324b")}var qt="hy-e7324b-dot",yt="hy-e7324b-active";import{jsx as rt,jsxs as De}from"react/jsx-runtime";var Xe=({children:t,active:n=0,delay:e=5e3,className:o,...r})=>{let[i,a]=gt(n+1),[l,h]=gt(!1),d=Ue(),[u,c]=gt(""),{width:s}=Ot(()=>d);t=Array.isArray(t)?t:[t];let y=t[0],p=[t[t.length-1],...t,y],f=p.length;Dt(()=>{let w=i+1;w=w===f?1:w,c(""),a(w),w===f-1&&setTimeout(()=>{c("none"),a(1)},500)},l?null:e);let m=(w,b)=>{b.stopPropagation(),c(""),a(w),$e(()=>h(!0)),h(!1)},C={width:`${f*s}px`,transform:`translateX(${-s*i}px)`,transition:u};return De("div",{className:`${void 0}${o?` ${o}`:""}`,...r,ref:d,children:[rt("div",{className:void 0,style:C,children:p.map((w,b)=>rt("div",{className:`${void 0} ${i===b?yt:""}`,style:{width:`${s}px`},children:w},`huxy-carousel-${b}`))}),rt("div",{className:void 0,children:t.map((w,b)=>rt("span",{className:`${qt} ${i===b+1?yt:""}`,onClick:T=>m(b+1,T)},`huxy-carousel-switch-${b}`))})]})},Ae=Xe;import{jsx as Me}from"react/jsx-runtime";var q=(t,n)=>{let e="",o="";if(typeof n=="number"&&(e=`col-${t}-${n}`),typeof n=="object"){let{span:r,offset:i}=n;e=r?`col-${t}-${r}`:"",o=i?`offset-${t}-${i}`:""}return{sp:e,os:o}},Fe=({span:t,offset:n,xl:e,lg:o,md:r,sm:i,xs:a,style:l,width:h,auto:d,offsetWidth:u="0px",className:c,ref:s,...y})=>{let v=c?` ${c}`:"",p=`col-${t||12}`,f=n?`offset-${n}`:"",{sp:m,os:C}=q("xs",a),{sp:w,os:b}=q("sm",i),{sp:T,os:_}=q("md",r),{sp:L,os:H}=q("lg",o),{sp:W,os:S}=q("xl",e),$=[p,W,L,T,w,m,f,S,H,_,b,C].filter(Boolean).join(" "),tt=d?{width:"auto",flex:1,maxWidth:`calc(100% - ${u})`}:{width:h};return Me("div",{className:`${$}${v}`,...y,style:{...tt,...l},ref:s})},mt=Fe;import{isValidElement as Qe,cloneElement as Ke,Children as to}from"react";import{useState as Ge}from"react";import{useEffect as Oe,useRef as qe}from"react";var Ve=(t,n=[])=>{let e=qe(!1);Oe(()=>{if(!e.current)e.current=!0;else return t()},n)},Vt=Ve;var Ze=(t,n=450)=>{let[e,o]=Ge(t);return Vt(()=>{let r;return t||n===0?o(t):r=setTimeout(()=>o(t),n),()=>r&&clearTimeout(r)},[t]),[e,o]},it=Ze;import{createPortal as je}from"react-dom";var Je=({children:t,mountNode:n=document.body})=>je(t,n),V=Je;import{jsx as wt,jsxs as io}from"react/jsx-runtime";var no={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},eo={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},oo=(t,n)=>t.style.overflow=n?"hidden":"",ro=({open:t,close:n,delay:e=300,children:o,mountNode:r=document.body,hasMask:i=!0,style:a,className:l="h-mask",relative:h})=>{let[d]=it(t,e);oo(r,d);let u=h?"absolute":"fixed";return wt(V,{mountNode:r,children:wt("div",{children:d?io("div",{className:l,style:{...no,position:u},children:[i?wt("div",{style:{...eo,position:u},onClick:c=>n?.(c)}):null,to.map(o,c=>Qe(c)?Ke(c,{style:{position:"relative",zIndex:100001,...c.props.style}}):c)]}):null})})},G=ro;var z={};O(z,{default:()=>yo,drawerContainer:()=>co,drawerContent:()=>uo,drawerFooter:()=>xo,drawerHeader:()=>po,drawerWrap:()=>ao,icoClose:()=>fo,left:()=>so,open:()=>lo,right:()=>ho});if(typeof document<"u"&&!window.__HUXY__?.has("ce63fc")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes animate-drawer-right-in {
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
`,document.head.appendChild(t),window.__HUXY__.add("ce63fc")}var ao="hy-ce63fc-drawer-wrap",lo="hy-ce63fc-open",ho="hy-ce63fc-right",so="hy-ce63fc-left",co="hy-ce63fc-drawer-container",uo="hy-ce63fc-drawer-content",po="hy-ce63fc-drawer-header",fo="hy-ce63fc-ico-close",xo="hy-ce63fc-drawer-footer",yo={drawerWrap:"hy-ce63fc-drawer-wrap","drawer-wrap":"hy-ce63fc-drawer-wrap",open:"hy-ce63fc-open",right:"hy-ce63fc-right",left:"hy-ce63fc-left",drawerContainer:"hy-ce63fc-drawer-container","drawer-container":"hy-ce63fc-drawer-container",drawerContent:"hy-ce63fc-drawer-content","drawer-content":"hy-ce63fc-drawer-content",drawerHeader:"hy-ce63fc-drawer-header","drawer-header":"hy-ce63fc-drawer-header",icoClose:"hy-ce63fc-ico-close","ico-close":"hy-ce63fc-ico-close",drawerFooter:"hy-ce63fc-drawer-footer","drawer-footer":"hy-ce63fc-drawer-footer"};import{jsx as U,jsxs as Gt}from"react/jsx-runtime";var go=({open:t,close:n,footer:e,header:o,className:r,style:i,children:a,width:l="300px",mountNode:h,position:d="right",relative:u})=>{let c=["drawer-wrap",d,t?"open":"",...r?.split(" ")??[]].filter(Boolean).map(s=>z[s]).join(" ");return U(G,{open:t,close:n,delay:250,hasMask:!0,relative:u,mountNode:h,className:"huxy-drawer",children:U("div",{className:c,style:{width:l,position:u?"absolute":"fixed","--footerHeight":e?"44px":"0px","--headerHeight":o?"44px":"0px",...i},children:Gt("div",{className:void 0,children:[o?Gt("div",{className:void 0,children:[d==="right"?U("span",{className:`link ${void 0}`,onClick:s=>n?.(s)}):null,U("div",{children:o}),d==="left"?U("span",{className:`link ${void 0}`,onClick:s=>n?.(s)}):null]}):null,U("div",{className:void 0,children:a}),e?U("div",{className:void 0,children:e}):null]})})})},bt=go;import{useState as Mo,useRef as vt,useEffect as Oo}from"react";import{useEffect as mo}from"react";var wo=(t,n,e="click")=>{mo(()=>{let o=i=>{let a=typeof t=="function"?t():t,l=x(a)?a.current:a;l?.contains&&!l.contains(i.target)&&n(i)},r=typeof e=="string"?[e]:e;return r.map(i=>{document.addEventListener(i,o,!1)}),()=>{r.map(i=>{document.removeEventListener(i,o,!1)})}},[t])},Zt=wo;var bo=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,jt=bo;var ko=(t="")=>t.replace(/^\S/,n=>n.toUpperCase()),Jt=ko;var vo=t=>{if(g())return t=x(t)?t.current:t??document.body,t.getBoundingClientRect?.()},B=vo;var zo=t=>{if(!g())return;let n=document.createElement("div");return n.innerHTML=t,n.children[0]},Qt=zo;var Co=(t,n={},e=!1)=>{if(A(t)){if(e){let o="";Object.keys(n).map(r=>{o+=`${r}: ${n[r]};`}),t.style=o;return}Object.keys(n).map(o=>t.style.setProperty(o,n[o]))}},Y=Co;var _o=(t=350,n="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[n]??t,Ho=(t=350,n="ms")=>new Promise(e=>setTimeout(e,_o(t,n)));var Kt=Ho;var So=async(t,n=15)=>{if(!g())return;if(typeof t=="string"&&(t=Qt(t)),t=x(t)?t.current:t,!A(t))return{};let e=t.cloneNode(!0);Y(e,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(e),await Kt(n);let o=B(e);return t.parentNode.removeChild(e),o},tn=So;var Bo=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Ro=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,nn=(t,n)=>{n=`huxy-drop-arrow-${n}`;let e=t.getAttribute("class")??"";Bo.test(e)?t.setAttribute("class",e.replace(Ro,n)):t.setAttribute("class",`${e} ${n}`)},en=async(t,n,e)=>{let{left:o,right:r,top:i,bottom:a}=B(t),{width:l,height:h}=E(),{width:d,height:u}=await tn(n);if(r<0||a<0||o>l||i>h)return{};if(e==="vertical"){let c={left:o+"px",top:a+10+"px",right:"auto",bottom:"auto"},s="lt";o+d>l&&(c.left=r-d+"px",s="rt"),a+10+u>h&&(c.top=i-10-u+"px",s=s==="lt"?"lb":"rb"),Y(n,c),nn(n,s)}else{let c={left:r+10+"px",top:i+"px",right:"auto",bottom:"auto"},s="tl";r+10+d>l&&(c.left=o-10-d+"px",s="tr"),i+u>h&&(c.top=a-u+"px",s=s==="tl"?"bl":"br"),Y(n,c),nn(n,s)}},Io=(t,n,e="horizontal")=>{let o=et(en),r=()=>o(t,n,e);window.addEventListener("scroll",r,!1),window.addEventListener("resize",r,!1);let i=()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",r),Y(n,{left:"",top:"",right:"",bottom:""})};return en(t,n,e),i},on=Io;import{jsx as kt}from"react/jsx-runtime";var To=({open:t,delay:n=280,children:e,mountNode:o,style:r,...i})=>{let[a]=it(t,n);return kt(V,{mountNode:o,children:kt("div",{children:kt("div",{style:{...r,display:a?"block":"none"},...i,children:e})})})},rn=To;var Z={};O(Z,{default:()=>Fo,dropTarget:()=>Wo,dropWrap:()=>Eo,huxyDropArrowBl:()=>Ao,huxyDropArrowBr:()=>Do,huxyDropArrowLb:()=>Yo,huxyDropArrowLt:()=>Po,huxyDropArrowRb:()=>$o,huxyDropArrowRt:()=>Lo,huxyDropArrowTl:()=>Uo,huxyDropArrowTr:()=>Xo,open:()=>No});if(typeof document<"u"&&!window.__HUXY__?.has("190916")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes animate-drop-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 25px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-drop-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 25px, 0);
  }
}
.hy-190916-drop-target {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  max-width: 100%;
  vertical-align: bottom;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.drop-target::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.hy-190916-drop-wrap {
  --bgColor: #ffffff;
  --borderColor: #f0f0f0;
  position: fixed !important;
  z-index: 10001;
  opacity: 0;
  min-width: 100px;
  min-height: 50px;
  width: max-content;
  border-radius: 4px;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  transform: translate3d(0, -30px, 0);
  animation: animate-drop-out 0.25s forwards;
}
.drop-wrap.hy-190916-open {
  animation: animate-drop-in 0.25s forwards;
}
.hy-190916-huxy-drop-arrow-lt {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-lt::before {
  border-width: 6px;
}
.huxy-drop-arrow-lt::after {
  border-width: 5px;
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-drop-arrow-lt::before {
  left: 10px;
  border-bottom-color: var(--borderColor);
}
.huxy-drop-arrow-lt::after {
  left: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-rt {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-rt::before {
  border-width: 6px;
}
.huxy-drop-arrow-rt::after {
  border-width: 5px;
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-drop-arrow-rt::before {
  right: 10px;
  border-bottom-color: var(--borderColor);
}
.huxy-drop-arrow-rt::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-lb {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-lb::before {
  border-width: 6px;
}
.huxy-drop-arrow-lb::after {
  border-width: 5px;
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  bottom: auto;
  top: 100%;
  border-top-color: var(--borderColor);
}
.huxy-drop-arrow-lb::before {
  left: 10px;
}
.huxy-drop-arrow-lb::after {
  left: calc(10px + 1px);
  border-top-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-rb {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-rb::before {
  border-width: 6px;
}
.huxy-drop-arrow-rb::after {
  border-width: 5px;
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  bottom: auto;
  top: 100%;
}
.huxy-drop-arrow-rb::before {
  right: 10px;
  border-top-color: var(--borderColor);
}
.huxy-drop-arrow-rb::after {
  right: calc(10px + 1px);
  border-top-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-tl {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-tl::before {
  border-width: 6px;
}
.huxy-drop-arrow-tl::after {
  border-width: 5px;
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  left: auto;
  right: 100%;
}
.huxy-drop-arrow-tl::before {
  top: 10px;
  border-right-color: var(--borderColor);
}
.huxy-drop-arrow-tl::after {
  top: calc(10px + 1px);
  border-right-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-tr {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-tr::before {
  border-width: 6px;
}
.huxy-drop-arrow-tr::after {
  border-width: 5px;
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  right: auto;
  left: 100%;
}
.huxy-drop-arrow-tr::before {
  top: 10px;
  border-left-color: var(--borderColor);
}
.huxy-drop-arrow-tr::after {
  top: calc(10px + 1px);
  border-left-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-bl {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-bl::before {
  border-width: 6px;
}
.huxy-drop-arrow-bl::after {
  border-width: 5px;
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  left: auto;
  right: 100%;
}
.huxy-drop-arrow-bl::before {
  bottom: 10px;
  border-right-color: var(--borderColor);
}
.huxy-drop-arrow-bl::after {
  bottom: calc(10px + 1px);
  border-right-color: var(--bgColor);
}
.hy-190916-huxy-drop-arrow-br {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-br::before {
  border-width: 6px;
}
.huxy-drop-arrow-br::after {
  border-width: 5px;
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  right: auto;
  left: 100%;
}
.huxy-drop-arrow-br::before {
  bottom: 10px;
  border-left-color: var(--borderColor);
}
.huxy-drop-arrow-br::after {
  bottom: calc(10px + 1px);
  border-left-color: var(--bgColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("190916")}var Wo="hy-190916-drop-target",Eo="hy-190916-drop-wrap",No="hy-190916-open",Po="hy-190916-huxy-drop-arrow-lt",Lo="hy-190916-huxy-drop-arrow-rt",Yo="hy-190916-huxy-drop-arrow-lb",$o="hy-190916-huxy-drop-arrow-rb",Uo="hy-190916-huxy-drop-arrow-tl",Xo="hy-190916-huxy-drop-arrow-tr",Ao="hy-190916-huxy-drop-arrow-bl",Do="hy-190916-huxy-drop-arrow-br",Fo={dropTarget:"hy-190916-drop-target","drop-target":"hy-190916-drop-target",dropWrap:"hy-190916-drop-wrap","drop-wrap":"hy-190916-drop-wrap",open:"hy-190916-open",huxyDropArrowLt:"hy-190916-huxy-drop-arrow-lt","huxy-drop-arrow-lt":"hy-190916-huxy-drop-arrow-lt",huxyDropArrowRt:"hy-190916-huxy-drop-arrow-rt","huxy-drop-arrow-rt":"hy-190916-huxy-drop-arrow-rt",huxyDropArrowLb:"hy-190916-huxy-drop-arrow-lb","huxy-drop-arrow-lb":"hy-190916-huxy-drop-arrow-lb",huxyDropArrowRb:"hy-190916-huxy-drop-arrow-rb","huxy-drop-arrow-rb":"hy-190916-huxy-drop-arrow-rb",huxyDropArrowTl:"hy-190916-huxy-drop-arrow-tl","huxy-drop-arrow-tl":"hy-190916-huxy-drop-arrow-tl",huxyDropArrowTr:"hy-190916-huxy-drop-arrow-tr","huxy-drop-arrow-tr":"hy-190916-huxy-drop-arrow-tr",huxyDropArrowBl:"hy-190916-huxy-drop-arrow-bl","huxy-drop-arrow-bl":"hy-190916-huxy-drop-arrow-bl",huxyDropArrowBr:"hy-190916-huxy-drop-arrow-br","huxy-drop-arrow-br":"hy-190916-huxy-drop-arrow-br"};import{jsx as an,jsxs as Go}from"react/jsx-runtime";var qo=({trigger:t="click",type:n,dropList:e,className:o,children:r,targetProps:i,...a})=>{let[l,h]=Mo(!1),d=vt(),u=vt(),c=vt();Zt(d,f=>h(!1),[...new Set(["click",t.toLowerCase()])]),Oo(()=>()=>c.current?.(),[]);let s=f=>{f.preventDefault(),h(!0),c.current=on(d.current,u.current,n)},y={[`on${Jt(t)}`]:s},v=["drop-wrap",l?"open":"",o].filter(Boolean).map(f=>Z[f]).join(" "),p=jt(e)?e:e?.(()=>h(!1),l);return Go("span",{ref:d,className:void 0,...i,...y,children:[r,an(rn,{open:l,className:"huxy-drop",children:an("div",{ref:u,className:v,...a,children:p})})]})},Vo=qo;import{useState as rr,useEffect as ir,useRef as ar}from"react";var Zo=(t,n,e)=>{if(!g())return;e=x(e)?e.current:e??document.body;let o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),n&&Y(o,n),o.innerText=(t??"").replace(/[\r\n]/g,""),e.appendChild(o);let r=o.getBoundingClientRect();return e.removeChild(o),r},ln=Zo;var Ct={};O(Ct,{default:()=>er,ellipsis:()=>zt,huxyTooltip:()=>jo,huxyTooltipBottomLeft:()=>tr,huxyTooltipBottomRight:()=>Ko,huxyTooltipRightTop:()=>nr,huxyTooltipTopLeft:()=>Qo,huxyTooltipTopRight:()=>Jo});if(typeof document<"u"&&!window.__HUXY__?.has("3b8d64")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.hy-3b8d64-ellipsis {
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
`,document.head.appendChild(t),window.__HUXY__.add("3b8d64")}var zt="hy-3b8d64-ellipsis",jo="hy-3b8d64-huxy-tooltip",Jo="hy-3b8d64-huxy-tooltip-topRight",Qo="hy-3b8d64-huxy-tooltip-topLeft",Ko="hy-3b8d64-huxy-tooltip-bottomRight",tr="hy-3b8d64-huxy-tooltip-bottomLeft",nr="hy-3b8d64-huxy-tooltip-rightTop",er={ellipsis:"hy-3b8d64-ellipsis",huxyTooltip:"hy-3b8d64-huxy-tooltip","huxy-tooltip":"hy-3b8d64-huxy-tooltip",huxyTooltipTopRight:"hy-3b8d64-huxy-tooltip-topRight","huxy-tooltip-topRight":"hy-3b8d64-huxy-tooltip-topRight",huxyTooltipTopLeft:"hy-3b8d64-huxy-tooltip-topLeft","huxy-tooltip-topLeft":"hy-3b8d64-huxy-tooltip-topLeft",huxyTooltipBottomRight:"hy-3b8d64-huxy-tooltip-bottomRight","huxy-tooltip-bottomRight":"hy-3b8d64-huxy-tooltip-bottomRight",huxyTooltipBottomLeft:"hy-3b8d64-huxy-tooltip-bottomLeft","huxy-tooltip-bottomLeft":"hy-3b8d64-huxy-tooltip-bottomLeft",huxyTooltipRightTop:"hy-3b8d64-huxy-tooltip-rightTop","huxy-tooltip-rightTop":"hy-3b8d64-huxy-tooltip-rightTop"};import{jsx as hn}from"react/jsx-runtime";var or=({title:t,placement:n="topRight",children:e,ellipsis:o,className:r,...i})=>hn("span",{className:`${Ct[`huxy-tooltip-${n}`]}${r?` ${r}`:""}`,tooltip:t??e,...i,children:hn("span",{className:o?zt:"",children:e})}),_t=or;import{jsx as at}from"react/jsx-runtime";var lr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},hr=t=>{let{children:n,style:e}=t,o=typeof n=="string",r=o?n:n?.props?.title??n?.props?.children,i=ar(),[a,l]=rr(!0);return ir(()=>{if(i.current){let{width:h}=ln(r,null,i.current.parentNode),{width:d}=B(i.current),u=~~h>~~d;u!==a&&l(u)}},[r]),at("span",{ref:i,style:{display:"flex",width:"100%",...e},children:a?o?at(_t,{...t,ellipsis:!0}):at("span",{style:lr,children:n}):o?n:n?.props?.children})},dr=t=>t.children==null?"":at(hr,{...t}),sr=dr;import cr from"react";var D=class extends cr.Component{state={error:null};static getDerivedStateFromError(n){return{error:n}}componentDidCatch(n,e){let{errorReport:o}=this.props;typeof o=="function"&&o({error:n,info:e.componentStack})}componentDidUpdate(n,e){e.error&&this.setState({error:null})}render(){let{error:n}=this.state,{fallback:e,children:o}=this.props;return n?e?.(n)??n:o}};import{jsx as Ht}from"react/jsx-runtime";var ur=t=>n=>{if(typeof n=="function"||typeof n?.render=="function")return Ht(n,{});if(typeof n=="string"){let e=t?.[n];return e?Ht(e,{}):Ht("i",{className:n})}return n??null},St=ur;var pr=t=>St(t),fr=t=>({icon:n,defaultIcon:e})=>n?pr(t)(n):n===!1?null:e,xr=fr;import{useEffect as mr,useState as wr}from"react";var lt=["","webkit","moz","ms"],dn=t=>lt.map(n=>n?`${n}FullscreenElement`:"fullscreenElement").find(n=>t[n]),sn=t=>lt.map(n=>n?`${n}RequestFullscreen`:"requestFullscreen").find(n=>t[n]),cn=t=>lt.map(n=>n?`${n}ExitFullscreen`:"exitFullscreen").find(n=>t[n]),Bt=lt.map(t=>`${t}fullscreenchange`);var yr=t=>{if(!g())return;t=x(t)?t.current:t??document.body;let n=dn(document),e=sn(t),o=cn(document);document[n]?document[o]?.():t[e]?.()},un=yr;var gr=t=>g()?(Bt.map(e=>document.addEventListener(e,t,!1)),()=>Bt.map(e=>document.removeEventListener(e,t,!1))):void 0,pn=gr;import{jsx as xn}from"react/jsx-runtime";var fn=t=>xn("i",{...t,children:"..."}),br=({panel:t,fullIcon:n=fn,exitIcon:e=fn,...o})=>{let r=x(t)?t.current:t,[i,a]=wr();return mr(()=>{let h=pn(()=>{a(d=>!d)});return()=>h()},[]),xn(i?e:n,{onClick:h=>un(r),...o})},kr=br;import{Children as zr}from"react";if(typeof document<"u"&&!window.__HUXY__?.has("26ca54")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.cols-1 {
  width: 8.33333333%;
}
.cols-2 {
  width: 16.66666667%;
}
.cols-3 {
  width: 25%;
}
.cols-4 {
  width: 33.33333333%;
}
.cols-5 {
  width: 41.66666667%;
}
.cols-6 {
  width: 50%;
}
.cols-7 {
  width: 58.33333333%;
}
.cols-8 {
  width: 66.66666667%;
}
.cols-9 {
  width: 75%;
}
.cols-10 {
  width: 83.33333333%;
}
.cols-11 {
  width: 91.66666667%;
}
.cols-12 {
  width: 100%;
}
.offsets-0 {
  margin-left: 0;
}
.offsets-1 {
  margin-left: 8.33333333%;
}
.offsets-2 {
  margin-left: 16.66666667%;
}
.offsets-3 {
  margin-left: 25%;
}
.offsets-4 {
  margin-left: 33.33333333%;
}
.offsets-5 {
  margin-left: 41.66666667%;
}
.offsets-6 {
  margin-left: 50%;
}
.offsets-7 {
  margin-left: 58.33333333%;
}
.offsets-8 {
  margin-left: 66.66666667%;
}
.offsets-9 {
  margin-left: 75%;
}
.offsets-10 {
  margin-left: 83.33333333%;
}
.offsets-11 {
  margin-left: 91.66666667%;
}
.offsets-12 {
  margin-left: 100%;
}
.row-wrap {
  --gutter: 8px;
  --rowgap: 8px;
  width: 100%;
}
.row-wrap + .row-wrap {
  margin-top: calc(var(--rowgap) * 2);
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: calc(0px - var(--rowgap)) calc(0px - var(--gutter));
}
.row [class^='col-'] {
  padding: var(--rowgap) var(--gutter);
  position: relative;
}
.row .col-1 {
  width: 8.33333333%;
}
.row .col-2 {
  width: 16.66666667%;
}
.row .col-3 {
  width: 25%;
}
.row .col-4 {
  width: 33.33333333%;
}
.row .col-5 {
  width: 41.66666667%;
}
.row .col-6 {
  width: 50%;
}
.row .col-7 {
  width: 58.33333333%;
}
.row .col-8 {
  width: 66.66666667%;
}
.row .col-9 {
  width: 75%;
}
.row .col-10 {
  width: 83.33333333%;
}
.row .col-11 {
  width: 91.66666667%;
}
.row .col-12 {
  width: 100%;
}
.row .offset-0 {
  margin-left: 0;
}
.row .offset-1 {
  margin-left: 8.33333333%;
}
.row .offset-2 {
  margin-left: 16.66666667%;
}
.row .offset-3 {
  margin-left: 25%;
}
.row .offset-4 {
  margin-left: 33.33333333%;
}
.row .offset-5 {
  margin-left: 41.66666667%;
}
.row .offset-6 {
  margin-left: 50%;
}
.row .offset-7 {
  margin-left: 58.33333333%;
}
.row .offset-8 {
  margin-left: 66.66666667%;
}
.row .offset-9 {
  margin-left: 75%;
}
.row .offset-10 {
  margin-left: 83.33333333%;
}
.row .offset-11 {
  margin-left: 91.66666667%;
}
.row .offset-12 {
  margin-left: 100%;
}
@media screen and (min-width: 1600px) {
  .row .col-xl-1 {
    width: 8.33333333%;
  }
  .row .col-xl-2 {
    width: 16.66666667%;
  }
  .row .col-xl-3 {
    width: 25%;
  }
  .row .col-xl-4 {
    width: 33.33333333%;
  }
  .row .col-xl-5 {
    width: 41.66666667%;
  }
  .row .col-xl-6 {
    width: 50%;
  }
  .row .col-xl-7 {
    width: 58.33333333%;
  }
  .row .col-xl-8 {
    width: 66.66666667%;
  }
  .row .col-xl-9 {
    width: 75%;
  }
  .row .col-xl-10 {
    width: 83.33333333%;
  }
  .row .col-xl-11 {
    width: 91.66666667%;
  }
  .row .col-xl-12 {
    width: 100%;
  }
  .row .offset-xl-0 {
    margin-left: 0;
  }
  .row .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-xl-3 {
    margin-left: 25%;
  }
  .row .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-xl-6 {
    margin-left: 50%;
  }
  .row .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-xl-9 {
    margin-left: 75%;
  }
  .row .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-xl-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1600px) {
  .row .col-lg-1 {
    width: 8.33333333%;
  }
  .row .col-lg-2 {
    width: 16.66666667%;
  }
  .row .col-lg-3 {
    width: 25%;
  }
  .row .col-lg-4 {
    width: 33.33333333%;
  }
  .row .col-lg-5 {
    width: 41.66666667%;
  }
  .row .col-lg-6 {
    width: 50%;
  }
  .row .col-lg-7 {
    width: 58.33333333%;
  }
  .row .col-lg-8 {
    width: 66.66666667%;
  }
  .row .col-lg-9 {
    width: 75%;
  }
  .row .col-lg-10 {
    width: 83.33333333%;
  }
  .row .col-lg-11 {
    width: 91.66666667%;
  }
  .row .col-lg-12 {
    width: 100%;
  }
  .row .offset-lg-0 {
    margin-left: 0;
  }
  .row .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-lg-3 {
    margin-left: 25%;
  }
  .row .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-lg-6 {
    margin-left: 50%;
  }
  .row .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-lg-9 {
    margin-left: 75%;
  }
  .row .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-lg-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .row .col-md-1 {
    width: 8.33333333%;
  }
  .row .col-md-2 {
    width: 16.66666667%;
  }
  .row .col-md-3 {
    width: 25%;
  }
  .row .col-md-4 {
    width: 33.33333333%;
  }
  .row .col-md-5 {
    width: 41.66666667%;
  }
  .row .col-md-6 {
    width: 50%;
  }
  .row .col-md-7 {
    width: 58.33333333%;
  }
  .row .col-md-8 {
    width: 66.66666667%;
  }
  .row .col-md-9 {
    width: 75%;
  }
  .row .col-md-10 {
    width: 83.33333333%;
  }
  .row .col-md-11 {
    width: 91.66666667%;
  }
  .row .col-md-12 {
    width: 100%;
  }
  .row .offset-md-0 {
    margin-left: 0;
  }
  .row .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-md-3 {
    margin-left: 25%;
  }
  .row .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-md-6 {
    margin-left: 50%;
  }
  .row .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-md-9 {
    margin-left: 75%;
  }
  .row .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-md-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .row .col-sm-1 {
    width: 8.33333333%;
  }
  .row .col-sm-2 {
    width: 16.66666667%;
  }
  .row .col-sm-3 {
    width: 25%;
  }
  .row .col-sm-4 {
    width: 33.33333333%;
  }
  .row .col-sm-5 {
    width: 41.66666667%;
  }
  .row .col-sm-6 {
    width: 50%;
  }
  .row .col-sm-7 {
    width: 58.33333333%;
  }
  .row .col-sm-8 {
    width: 66.66666667%;
  }
  .row .col-sm-9 {
    width: 75%;
  }
  .row .col-sm-10 {
    width: 83.33333333%;
  }
  .row .col-sm-11 {
    width: 91.66666667%;
  }
  .row .col-sm-12 {
    width: 100%;
  }
  .row .offset-sm-0 {
    margin-left: 0;
  }
  .row .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-sm-3 {
    margin-left: 25%;
  }
  .row .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-sm-6 {
    margin-left: 50%;
  }
  .row .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-sm-9 {
    margin-left: 75%;
  }
  .row .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-sm-12 {
    margin-left: 100%;
  }
}
@media screen and (max-width: 768px) {
  .row .col-xs-1 {
    width: 8.33333333%;
  }
  .row .col-xs-2 {
    width: 16.66666667%;
  }
  .row .col-xs-3 {
    width: 25%;
  }
  .row .col-xs-4 {
    width: 33.33333333%;
  }
  .row .col-xs-5 {
    width: 41.66666667%;
  }
  .row .col-xs-6 {
    width: 50%;
  }
  .row .col-xs-7 {
    width: 58.33333333%;
  }
  .row .col-xs-8 {
    width: 66.66666667%;
  }
  .row .col-xs-9 {
    width: 75%;
  }
  .row .col-xs-10 {
    width: 83.33333333%;
  }
  .row .col-xs-11 {
    width: 91.66666667%;
  }
  .row .col-xs-12 {
    width: 100%;
  }
  .row .offset-xs-0 {
    margin-left: 0;
  }
  .row .offset-xs-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-xs-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-xs-3 {
    margin-left: 25%;
  }
  .row .offset-xs-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-xs-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-xs-6 {
    margin-left: 50%;
  }
  .row .offset-xs-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-xs-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-xs-9 {
    margin-left: 75%;
  }
  .row .offset-xs-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-xs-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-xs-12 {
    margin-left: 100%;
  }
}
`,document.head.appendChild(t),window.__HUXY__.add("26ca54")}import{jsx as yn}from"react/jsx-runtime";var vr=({gutter:t=10,className:n,overflow:e="hidden",ref:o,...r})=>{let i=n?` ${n}`:"",a=10;if(Array.isArray(t)){let l=[...t];t=l[0],a=l[1]??l[0]}return yn("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(a/2)}px`,overflow:e},children:yn("div",{className:`row${i}`,...r,ref:o})})},Rt=vr;import{jsx as gn}from"react/jsx-runtime";var Cr=({rowProps:t,colProps:n,children:e,Row:o=Rt,Col:r=mt})=>{let i=[];return zr.map(e,a=>{a&&(a.type?.description==="react.fragment"?i.push(...a.props.children):i.push(a))}),gn(o,{...t,children:i.map((a,l)=>gn(r,{...n,...a.props.itemprops,children:a},`huuxy_grid_${l}`))})},_r=Cr;import{jsx as Sr}from"react/jsx-runtime";var Hr=(t,n)=>Sr("div",{dangerouslySetInnerHTML:{__html:t},...n}),j=Hr;import{jsxs as mn}from"react/jsx-runtime";var Br=t=>{let{error:n={},info:e=""}=t||{},{message:o,stack:r,errMsg:i}=n,a=i||r||n.toString();a=`${a}
${e}`.replace(/\r|\n|\r\n/g,"<br/>"),a=a.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),a=a.replace(/\s/g,"&nbsp;");let l=o?.slice(0,120).split(". ").slice(0,2).join(". ");return mn("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[j(a,{style:{color:"red"}}),l&&mn("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${l}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},It=Br;import{jsx as Tr}from"react/jsx-runtime";var Rr=({children:t,report:n})=>Tr(D,{fallback:(e,o)=>It({error:e,info:o}),errorReport:n,children:t}),Ir=Rr;import{useState as Wr,useEffect as Er,useRef as Nr}from"react";import{jsx as zn}from"react/jsx-runtime";var wn=(t,n)=>Object.keys(n).map(e=>t.style[e]=n[e]),Pr=(t,n)=>Object.keys(n).map(e=>t.style[e]=""),Lr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},bn=({left:t,top:n,width:e,height:o})=>({left:`${t}px`,top:`${n}px`,width:`${e}px`,height:`${o}px`}),kn=t=>zn("i",{...t,children:"..."}),vn=t=>{let{left:n,top:e}=B(t),{width:o,height:r}=E(t);return{left:n,top:e,width:o,height:r}},Yr=({panel:t,target:n,fullIcon:e=kn,exitIcon:o=kn})=>{t=x(t)?t.current:t||document.body;let[r,i]=Wr(),a=Nr();Er(()=>{a.current={...Lr,...bn(vn(t))}},[t]);let l=(d,u)=>{if(d){let s=bn(vn((typeof n=="function"?n:()=>document.getElementsByClassName(n)[0])()));wn(u,a.current),setTimeout(()=>{wn(u,s)},0)}else Pr(u,a.current);i(d)};return zn(r?o:e,{onClick:d=>l(!r,t)})},$r=Yr;var R={};O(R,{btn:()=>ht,default:()=>Or,left:()=>Tt,modalContainer:()=>Ar,modalContent:()=>Fr,modalFooter:()=>Mr,modalHeader:()=>Dr,modalWrap:()=>Ur,open:()=>Xr,right:()=>Wt});if(typeof document<"u"&&!window.__HUXY__?.has("475379")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes animate-modal-in {
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
`,document.head.appendChild(t),window.__HUXY__.add("475379")}var Ur="hy-475379-modal-wrap",Xr="hy-475379-open",Ar="hy-475379-modal-container",Dr="hy-475379-modal-header",Fr="hy-475379-modal-content",Mr="hy-475379-modal-footer",ht="hy-475379-btn",Tt="hy-475379-left",Wt="hy-475379-right",Or={modalWrap:"hy-475379-modal-wrap","modal-wrap":"hy-475379-modal-wrap",open:"hy-475379-open",modalContainer:"hy-475379-modal-container","modal-container":"hy-475379-modal-container",modalHeader:"hy-475379-modal-header","modal-header":"hy-475379-modal-header",modalContent:"hy-475379-modal-content","modal-content":"hy-475379-modal-content",modalFooter:"hy-475379-modal-footer","modal-footer":"hy-475379-modal-footer",btn:"hy-475379-btn",left:"hy-475379-left",right:"hy-475379-right"};import{jsx as F,jsxs as Cn}from"react/jsx-runtime";var qr=({open:t,close:n,hasMask:e=!0,cancelText:o="\u53D6\u6D88",submit:r,submitText:i="\u786E\u5B9A",title:a="Modal \u5F39\u7A97",className:l,children:h,delay:d=250,...u})=>{let c=["modal-wrap",t?"open":"",...l?.split(" ")??[]].filter(Boolean).map(s=>R[s]).join(" ");return F(G,{open:t,close:n,delay:d,hasMask:e,className:"huxy-modal",children:F("div",{className:c,...u,children:Cn("div",{className:void 0,children:[F("div",{className:void 0,children:a}),F("div",{className:void 0,children:h}),Cn("div",{className:void 0,children:[F("div",{className:`${ht} ${Tt}`,onClick:s=>n?.(s),children:o}),F("div",{className:`${ht} ${Wt}`,onClick:s=>r?.(s),children:i})]})]})})})},Vr=qr;import{useRef as Zr}from"react";if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`@keyframes before {
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
`,document.head.appendChild(t),window.__HUXY__.add("cab66a")}import{jsx as _n}from"react/jsx-runtime";var Gr=({global:t,absolute:n})=>_n("div",{className:`spinner${t?" global":""}${n?" absolute":""}`,children:_n("figure",{className:"spinning"})}),J=Gr;if(typeof document<"u"&&!window.__HUXY__?.has("07a33c")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.clear::after {
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
`,document.head.appendChild(t),window.__HUXY__.add("07a33c")}var Hn="hy-07a33c-panel";var Sn="hy-07a33c-link";import{jsx as M,jsxs as Bn}from"react/jsx-runtime";var jr=t=>t?.filter?.(n=>typeof n=="function"),Jr=({loading:t,title:n,plugins:e,children:o,className:r,ref:i,...a})=>{let l=Zr(),h=jr(e),d=h?.length,u=r?` ${r}`:"",c=x(()=>i)?i:l;return Bn("div",{className:`${Hn}${u}`,...a,ref:c,children:[(n||d)&&Bn("div",{className:void 0,children:[n&&M("h4",{className:void 0,children:n}),d&&M("div",{className:void 0,children:h.map((s,y)=>M("span",{className:`link ${Sn}`,children:M(s,{panel:c})},y))})]}),M("div",{className:void 0,children:o}),t&&M(J,{})]})},Qr=Jr;var Kr=t=>nt(t)==="array",Q=Kr;var ti=t=>Q(t)&&!!t.length,Rn=ti;import{jsx as I,jsxs as Et}from"react/jsx-runtime";var ni=({to:t,preventDefault:n,stopPropagation:e,...o})=>n?I("span",{...o}):I("a",{href:t,...o}),ei=({item:t,...n})=>I("ul",{...n}),oi=(t,...n)=>{let e={};return Object.keys(t).filter(Boolean).map(o=>{e[o]=r=>t[o](r,...n)}),e},In=({data:t=[],events:n={},List:e=ei,Link:o=ni,leftIcon:r,rightIcon:i,isHorizontal:a,isCollapsed:l,level:h=0,parentOpen:d=!0})=>{let u=l&&!h,c=!a&&!l&&!d;return t.map(s=>{let{name:y,path:v,icon:p,rightIcon:f,active:m,open:C,children:w,linkProps:b}=s,T=Rn(w),_=s.id||`${v}${s.childSameRouteLevel??""}`,L=u?s.title??y:void 0,H=c?"hidden":"",W=p??r,S=f??i,$=W?I("div",{className:"node-left-icon",children:W===!0?I("i",{className:"default-left-icon"}):W}):null,tt=y?I("div",{className:"node-text",children:I("span",{children:y})}):null;if(T){let te=oi(n,s,h),ne=[H,C?"open":""].filter(Boolean).join(" ");return Et("li",{className:ne,"has-children":"true",...te,children:[Et(o,{title:L,className:`link${m?" active":""}`,to:v,preventDefault:!0,stopPropagation:!1,...b,children:[$,tt,S?I("div",{className:"node-right-icon",children:S===!0?I("i",{className:"default-right-icon"}):S}):null]}),I(e,{item:s,children:In({data:w,events:n,List:e,Link:o,leftIcon:r,rightIcon:i,isHorizontal:a,isCollapsed:l,level:h+1,parentOpen:!!C})})]},_)}return I("li",{className:H,children:Et(o,{title:L,className:`link${m?" active":""}`,to:v,...b,children:[$,tt]})},_)})},Nt=In;import{jsx as ai}from"react/jsx-runtime";var ri=(t,...n)=>ai("div",{"v-html":t,...n}),ii=ri;import{useState as Tn,useEffect as li,useRef as Wn}from"react";if(typeof document<"u"&&!window.__HUXY__?.has("f9b7bb")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.tabs-header-wrap {
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
`,document.head.appendChild(t),window.__HUXY__.add("f9b7bb")}import{jsx as dt,jsxs as ci}from"react/jsx-runtime";var hi=t=>dt("div",{style:{padding:"6px 15px"},children:t}),di=({activekey:t,tabs:n=[],switchTab:e,trackColor:o,flex:r,ref:i,...a})=>{let[l,h]=Tn(t??n[0]?.key),[d,u]=Tn({}),c=Wn({}),s=Wn();li(()=>{let p=c.current[l];p&&y(p)},[]);let y=p=>{let{left:f,width:m}=B(p),C=B(s.current).left;u({left:f-C,width:m})},v=(p,f)=>{p.stopPropagation(),h(f),typeof e=="function"&&e(f),y(p.currentTarget)};return ci("div",{className:"tabs-header-wrap",...a,ref:i,children:[dt("ul",{className:`tabs-header${r?" flex":""}`,ref:s,children:n.map(p=>dt("li",{ref:f=>c.current[p.key]=f,className:`th-item${l===p.key?" active":""}`,onClick:f=>v(f,p.key),children:typeof p.renderTabs=="function"?p.renderTabs(p,l===p.key):hi(p.value)},p.key))}),dt("div",{className:"th-track",style:{...d,color:o}})]})},si=di;import{useEffect as wi,useRef as Yn}from"react";var ui=(t,n,e="id",o="children")=>{if(!Q(t))return null;let r=i=>{for(let a=0,l=i.length;a<l;a++){let h=i[a];if(h[e]===n)return[h];if(Q(h[o])){let d=r(h[o]);if(d)return[h].concat(d)}}};return r(t)},En=ui;import{useCallback as pi,useState as fi}from"react";var xi=t=>++t,yi=()=>{let[,t]=fi(0);return pi(()=>t(xi),[])},Nn=yi;import{jsx as mi}from"react/jsx-runtime";var Pn=t=>{let{children:n,open:e}=t,o=0;if(e&&n?.length){o=n.length;let r=0;return n.map(i=>r+=Pn(i)),o+r}return o},gi=({item:t,style:n,...e})=>mi("ul",{style:{...n,"--count":Pn(t)},...e}),Ln=gi;if(typeof document<"u"&&!window.__HUXY__?.has("e6480a")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.node-right-icon-close {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-close .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-close .default-right-icon::before {
  left: 0;
}
.node-right-icon-close .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.node-right-icon-close .default-right-icon::before {
  transform: rotate(135deg);
}
.node-right-icon-close .default-right-icon::after {
  transform: rotate(45deg);
}
.node-right-icon-open {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-open .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-open .default-right-icon::before {
  left: 0;
}
.node-right-icon-open .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.node-right-icon-open .default-right-icon::before {
  transform: rotate(225deg);
}
.node-right-icon-open .default-right-icon::after {
  transform: rotate(-45deg);
}
.hide-scrollbar {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.huxy-tree {
  --topBar: 0px;
  --downBar: var(--footerHeight, 0);
  --width: var(--menuWidth, 100%);
  --bgColor: var(--menuBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --trackWidth: 15px;
  --collapsedWidth: var(--collapseWidth, 60px);
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  height: calc(100% - var(--topBar) - var(--downBar));
  overflow: hidden;
}
.huxy-tree .huxy-tree-track {
  width: calc(100% + var(--trackWidth));
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: calc(100% - var(--trackWidth));
  min-height: 100%;
  padding: var(--ulPadding);
  margin: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {
  padding-left: 70px;
  font-size: 0.9rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {
  height: calc(var(--subItemHeight) * var(--count));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  --count: 0;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  height: auto;
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  border-radius: 2px;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  width: var(--collapsedWidth);
  font-size: 1.6rem;
}
.huxy-horizontal-tree {
  --bgColor: var(--navBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --itemPadding: 0 8px;
  --nodeFloat: auto;
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  border-top: 1px solid var(--treeBorderColor);
  float: var(--nodeFloat);
}
.huxy-horizontal-tree .huxy-tree-track {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {
  float: var(--nodeFloat);
  width: max-content;
  padding: 0 10px;
  margin: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children='true'] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  right: auto;
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  left: auto;
  right: var(--ulPosition);
  position: absolute;
  transform-origin: 100% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  right: auto;
  left: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  top: var(--arrowPosition);
  border-left-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  top: calc(var(--arrowPosition) + 1px);
  border-left-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: '';
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: var(--ulPosition);
  left: 0;
  transform-origin: 50% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  border-width: 8px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  border-width: 7px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  left: 16px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  left: auto;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  right: 10px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
`,document.head.appendChild(t),window.__HUXY__.add("e6480a")}import{jsx as K}from"react/jsx-runtime";var bi=t=>K("ul",{...t}),ki=(t,n)=>t?Ln:({item:e,...o})=>K(bi,{className:n==="right"?"left":"",...o}),vi=t=>{let{data:n=[],collapsed:e=!1,type:o="vertical",Link:r,width:i,bgColor:a,itemHeight:l,collapsedWidth:h,itemPadding:d,style:u,className:c,...s}=t,y=Yn(),v=Yn();wi(()=>()=>clearTimeout(y.current),[]);let p=Nn(),f=o==="horizontal",m=!f&&e,C={onClick:(H,W)=>{if(H.stopPropagation(),!f&&!m){let S=En(n,W.path,"path"),$=S[S.length-1];$.open=!$.open,p()}},onMouseEnter:(H,W,S)=>{m&&!S&&(clearTimeout(y.current),v.current.style.width="var(--maxWidth)")},onMouseLeave:(H,W,S)=>{m&&!S&&(y.current=setTimeout(()=>v.current.style.width="",200))}},w=(f?["huxy-horizontal-tree",c]:["huxy-tree",c,m?"collapsed":""]).filter(Boolean).join(" "),{float:b,...T}=s?.style??{},_={"--bgColor":a,"--itemHeight":l,"--nodeListWidth":i,...T};f?(_["--itemPadding"]=d,_["--nodeFloat"]=b):(_["--width"]=i,_["--collapsedWidth"]=h);let L=ki(!f&&!m,b);return K("div",{ref:v,className:w,style:_,...s,children:K("div",{className:"huxy-tree-track",children:K("ul",{className:"huxy-tree-root",children:Nt({data:n,events:C,List:L,Link:r,leftIcon:!0,rightIcon:!0,isHorizontal:f,isCollapsed:m})})})})},zi=vi;import{useState as Kn,useEffect as Vi}from"react";import{useEffect as Ci}from"react";var _i=()=>{let[t,n]=ot(E());return Ci(()=>{let e=()=>n(E());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)},[]),t},$n=_i;import{jsx as X,jsxs as Hi}from"react/jsx-runtime";var Un=({menu:t,curName:n,Link:e})=>t.map(o=>{let{path:r,name:i,open:a,children:l}=o,h=i===n;return l?.length?Hi("li",{className:a?"open":"",children:[X(e,{to:{query:{name:i}},className:`link${h?" active":""}`,preventDefault:!0,children:X("span",{children:i})}),X("ul",{children:X(Un,{menu:l,curName:i,Link:e})})]},r||i):X("li",{children:X(e,{to:{query:{name:i}},className:`link${h?" active":""}`,children:X("span",{children:i})})},r||i)}),Xn=Un;import{useEffect as Di,useRef as Fi}from"react";import{useState as Wi,useEffect as qn,useRef as Vn}from"react";var Si=(t=0,n)=>{g()&&(n=x(n)?n.current:n??window,n.scrollTo?.({top:t,behavior:"smooth"}))},An=Si;var Bi=()=>g()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Dn=Bi;var Ri=(t=()=>{},n=60)=>{let e=null;return function(...o){e||(t.apply(this,o),e=setTimeout(()=>e=null,n))}},Fn=Ri;var Ii=(t,n=null,e=!1)=>[...t||[]].sort((o,r)=>{let i=n?o[n]:o,a=n?r[n]:r;return!isNaN(Number(i))&&!isNaN(Number(i))?e?a-i:i-a:typeof i=="string"&&typeof a=="string"?e?a.localeCompare(i):i.localeCompare(a):typeof i=="string"&&typeof a=="number"?e?-1:1:typeof i=="number"||typeof i=="string"?e?1:-1:e?-1:1}),Mn=Ii;var Ti=(t={})=>{let n={};return Object.keys(t).map(e=>{t[e]!=null&&(n[e]=t[e])}),n},On=Ti;var Ei=({curName:t,itemList:n})=>{let e=Vn(!1),o=Vn(""),[r,i]=Wi(t);return qn(()=>{let a=On(n.current);if(!t){let d=Object.keys(a).map(u=>({name:u,offsetTop:a[u]?.offsetTop??0}));i(d[0]?.name)}let l=0,h=0;if(o.current!==t){o.current=t;let d=a[t];e.current=!0,d?(An(d.offsetTop),l=setTimeout(()=>e.current=!1,1050)):h=setTimeout(()=>{window.scrollTo?.({top:a[t]?.offsetTop??0,behavior:"instant"}),l=setTimeout(()=>e.current=!1,1050)},550)}return()=>{clearTimeout(l),clearTimeout(h),e.current=!1}},[t]),qn(()=>{let a=Fn(()=>{if(!e.current){let h=Mn(Object.keys(n.current).map(d=>({name:d,offsetTop:n.current[d]?.offsetTop??0})),"offsetTop",!0).find(d=>d.offsetTop<Dn())?.name;o.current!==h&&(o.current=h,i(h))}});return window.addEventListener("scroll",a,!1),()=>window.removeEventListener("scroll",a,!1)},[]),[r]},Gn=Ei;import{useState as Yi,useEffect as $i}from"react";var Ni=/!\[.*\]\((.*)\)/g,Pi=async(t,n,e)=>{let o={};for(let r=0,i=t.length;r<i;r++){let a=t[r],l=a.slice(2);o[a]=await e({folder:n,name:l})}return o},Li=async(t,{folder:n},e)=>{let r=[...t.matchAll(Ni)].filter(Boolean).map(i=>i[1]);if(r?.length){let i=await Pi(r,n,e);r.map(a=>{t=t.replace(a,i[a])})}return t},Zn=Li;import{jsx as Xi,jsxs as Ai}from"react/jsx-runtime";var Ui=({item:t,marked:n,getContext:e})=>{let[o,r]=Yi("");return $i(()=>{(async()=>{try{let a=await e({...t,type:".md"}),l=await Zn(a,t,e),h=typeof n=="function"?n.parse(l):h;r(h)}catch(a){r(a?.message)}})()},[]),Ai("div",{className:"huxy-content",children:[j(o),!o&&Xi(J,{global:!0})]})},jn=Ui;import{jsx as Pt,jsxs as Oi}from"react/jsx-runtime";var Mi=({router:t,curName:n,context:e,marked:o,getContext:r})=>{let i=Fi({}),[a]=Gn({curName:n,itemList:i});return Di(()=>{a&&t.push({query:{name:a}})},[a]),Pt("div",{className:"huxy-anchor-page",children:e.map((l,h)=>Oi("div",{className:"huxy-anchor-item",ref:d=>i.current[l.name]=d,children:[Pt("h2",{children:`${l.name}`}),Pt(jn,{item:l,marked:o,getContext:r})]},l.name))})},Jn=Mi;var qi=t=>{let n=[];return t.map(e=>{let[o,r]=e.name.split("/"),i=n.find(a=>a.name===o);i?i.children.push({name:r,folder:o}):n.push({name:o,children:[{name:r,folder:o}]})}),n},Qn=qi;if(typeof document<"u"&&!window.__HUXY__?.has("51322d")){window.__HUXY__=window.__HUXY__||new Set;let t=document.createElement("style");t.textContent=`.huxy-doc-frame {
  --headerHeight: 60px;
  --menuWidth: 180px;
  --bannerWidth: 180px;
  --menuItemHeight: 45px;
  --borderColor: rgba(0, 0, 0, 0.08);
  --panelBgColor: rgba(253, 253, 253, 0.85);
  --linkColor: #455a64;
  --linkHoverColor: var(--blue1);
  --linkActiveColor: var(--blue2);
  position: relative;
  transform: none;
  overflow: visible;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  color: #495057;
}
.huxy-doc-header {
  height: var(--headerHeight);
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid var(--borderColor);
  background: var(--panelBgColor);
  backdrop-filter: blur(0.3rem);
}
.huxy-doc-header .huxy-doc-banner {
  width: var(--bannerWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-align: center;
  font-size: 24px;
  flex-shrink: 0;
}
.huxy-doc-header .huxy-doc-nav {
  flex: 1;
  overflow: hidden;
}
.huxy-doc-header .huxy-doc-nav li {
  float: left;
}
.huxy-doc-header .huxy-doc-nav li > .link {
  display: block;
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-decoration: none;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  transition: all 0.3s;
}
.huxy-doc-header .huxy-doc-nav li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-header .huxy-doc-nav li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-doc-header .huxy-doc-back {
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  font-size: 12px;
  padding: 0 10px;
  flex-shrink: 0;
}
.huxy-doc-container {
  display: flex;
}
.huxy-doc-container .huxy-doc-main-page {
  flex: 1;
  overflow: auto;
}
.huxy-doc-container .huxy-doc-menu {
  width: var(--menuWidth);
  position: sticky;
  top: var(--headerHeight);
  height: calc(var(--containerHeight) - var(--headerHeight));
  overflow: hidden;
  background-color: var(--panelBgColor);
  border-left: 1px solid var(--borderColor);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link {
  position: relative;
  display: block;
  height: var(--menuItemHeight);
  line-height: var(--menuItemHeight);
  text-decoration: none;
  padding: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.3s;
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > ul > li > .link {
  padding-left: 25px;
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li.open > ul {
  display: block;
}
.huxy-anchor-page {
  position: relative;
  padding: 15px 24px;
}
.huxy-anchor-page .huxy-anchor-item {
  min-height: 200px;
}
.huxy-anchor-page .huxy-anchor-item:not(:first-of-type) {
  margin-top: 20px;
  border-top: 1px dashed #eee;
}
.huxy-anchor-page .huxy-anchor-item .huxy-content {
  padding: 10px 15px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.012);
  overflow-wrap: break-word;
  word-break: break-all;
  overflow: auto;
}
.huxy-anchor-page .huxy-anchor-item .huxy-content img {
  width: 100%;
}
.huxy-doc-menu-drawer {
  list-style: none;
  padding: 0;
  margin: 0;
}
.huxy-doc-menu-drawer .link {
  display: block;
  height: 45px;
  line-height: 45px;
  text-decoration: none;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 4px;
  transition: all 0.3s;
}
.huxy-doc-menu-drawer .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-menu-drawer .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
@media screen and (max-width: 1024px) {
  .huxy-doc-frame {
    --menuWidth: 0px;
  }
}
`,document.head.appendChild(t),window.__HUXY__.add("51322d")}import{Fragment as Ji,jsx as k,jsxs as st}from"react/jsx-runtime";var Gi=(t,n,e)=>({sidebar:t.find(o=>o.name===n)?.children??[],listEle:t.map(({name:o,children:r})=>k("li",{children:k(e,{to:{query:{folder:o,name:r[0]?.name}},className:`link${o===n?" active":""}`,children:k("span",{children:o})})},o))}),Zi=t=>{let{params:n,router:e,Link:o,listFiles:r,getContext:i,marked:a,title:l,routeLink:h,routeName:d,className:u,style:c}=t,{folder:s,name:y}=n,{width:v}=$n(),[p,f]=Kn([]),[m,C]=Kn(!1);Vi(()=>{(async()=>{let L=await r(),H=Qn(L);f(H),s||e.push({query:{folder:H[0]?.name,name:H[0]?.children[0]?.name}})})()},[]);let w=v<=1024,{sidebar:b,listEle:T}=Gi(p,s,o);return st("div",{className:`huxy-doc-frame ${u??""}`,style:c,children:[st("div",{className:"huxy-doc-header",children:[k("div",{className:"huxy-doc-banner",children:l||"\u6587\u6863\u7CFB\u7EDF"}),k("ul",{className:"huxy-doc-nav",children:w?st(Ji,{children:[k("li",{className:"huxy-doc-collapsed",children:k("span",{className:"link",onClick:_=>{_.stopPropagation(),C(!m)},children:k(ft,{type:m?"right":""})})}),k(bt,{open:m,close:()=>C(!1),width:"220px",children:k("ul",{className:"huxy-doc-menu-drawer",children:T})})]}):T}),h?k("div",{className:"huxy-doc-back",children:k(o,{to:h,children:k("span",{children:d??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),st("div",{className:"huxy-doc-container",children:[k("div",{className:"huxy-doc-main-page",children:k(Jn,{router:e,curName:y,context:b,marked:a,getContext:i})}),k("div",{className:"huxy-doc-menu",children:k("ul",{className:"huxy-doc-menu-root",children:k(Xn,{menu:b,curName:y,Link:o})})})]})]})},ji=Zi;export{ft as Anico,ge as Base64Image,Ae as Carousel,mt as Col,bt as Drawer,Vo as Drop,sr as Ellipsis,D as ErrorBoundary,kr as FullPage,_r as Grid,Ir as HandleError,It as LoadError,G as Mask,$r as MaxSize,ji as Md2html,Vr as Modal,Qr as Panel,V as Portal,Rt as Row,J as Spinner,si as TabHeader,_t as Tooltip,zi as Tree,St as fixEle,xr as fixIcon,Nt as renderTree,j as str2React,ii as str2Vue};
