import{flushSync as ce}from"react-dom";import{useState as v,useRef as ue}from"react";import{useEffect as E,useRef as Y}from"react";var B=(e,o)=>{let t=Y();E(()=>{t.current=e},[e]),E(()=>{if(o){let r=setInterval(()=>t.current(),o);return()=>clearInterval(r)}},[o])},C=B;import{useEffect as ne}from"react";var D=()=>![typeof window,typeof document].includes("undefined"),d=D;var F=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),_=F;var L=e=>_(e).indexOf("element")>-1,S=L;var q=(e=null)=>d()?S(e)?{width:e.clientWidth,height:e.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},z=q;var G=(e=()=>{},o=60)=>{let t=null;return function(...r){clearTimeout(t),t=setTimeout(()=>e.apply(this,r),o)}},$=G;var J=(e,o)=>Object.prototype.hasOwnProperty.call(e??{},o),R=J;var K=e=>{let o=typeof e=="function"?e():e;return R(o,"current")},h=K;var M=(e,o)=>{let t=[],r=e.children??[];for(let s=0,n=r.length;s<n;s++){let i=r[s];i.className.indexOf(o)>-1&&t.push(i)}return t.length===0?null:t.length===1?t[0]:t},w=M;var Q=(e,o)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");let t=document.createElement("object");return t.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),t.setAttribute("class","resize-sensor"),t.onload=()=>{t.contentDocument.defaultView.addEventListener("resize",o,!1),o()},t.type="text/html",e.appendChild(t),t.data="about:blank",t},Z=(e,o=60)=>{if(!d())return;e=h(e)?e.current:e??document.body;let t=w(e,"resize-sensor"),r=[],s=$(()=>r.map(a=>a(e)),o),n=a=>{w(e,"resize-sensor")||(t=Q(e,s)),r.indexOf(a)===-1&&r.push(a)},i=a=>{let p=r.indexOf(a);p!==-1&&r.splice(p,1),r.length===0&&t&&l()},l=()=>{t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",s,!1),t.parentNode.removeChild(t),t=void 0,r=[])};return{element:e,bind:n,unbind:i,destroy:l}},O=Z;import{useEffect as ee,useState as te,useCallback as oe,useRef as re}from"react";var se=(e={})=>{let o=re(0),[t,r]=te(e),s=oe(n=>{cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>r(n))},[]);return ee(()=>()=>cancelAnimationFrame(o.current),[]),[t,s]},I=se;var ie=(e=null,o=60)=>{let[t,r]=I({});return ne(()=>{let s=typeof e=="function"?e():e,n=h(s)?s.current:s,{bind:i,destroy:l}=O(n,o);return i(()=>n&&r(z(n))),()=>l()},[]),t},k=ie;if(typeof document<"u"&&!window.__HUXY__?.has("e7324b")){window.__HUXY__=window.__HUXY__||new Set;let e=document.createElement("style");e.textContent=`.hy-e7324b-huxy-carousel {
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
`,document.head.appendChild(e),window.__HUXY__.add("e7324b")}var A="hy-e7324b-huxy-carousel";var H="hy-e7324b-huxy-carousel-wrap";var N="hy-e7324b-carousel-item";var j="hy-e7324b-carousel-switch";var T="hy-e7324b-dot",b="hy-e7324b-active";import{jsx as f,jsxs as pe}from"react/jsx-runtime";var le=({children:e,active:o=0,delay:t=5e3,className:r,...s})=>{let[n,i]=v(o+1),[l,a]=v(!1),p=ue(),[X,m]=v(""),{width:y}=k(()=>p);e=Array.isArray(e)?e:[e];let W=e[0],g=[e[e.length-1],...e,W],x=g.length;C(()=>{let c=n+1;c=c===x?1:c,m(""),i(c),c===x-1&&setTimeout(()=>{m("none"),i(1)},500)},l?null:t);let P=(c,u)=>{u.stopPropagation(),m(""),i(c),ce(()=>a(!0)),a(!1)},U={width:`${x*y}px`,transform:`translateX(${-y*n}px)`,transition:X};return pe("div",{className:`${A}${r?` ${r}`:""}`,...s,ref:p,children:[f("div",{className:H,style:U,children:g.map((c,u)=>f("div",{className:`${N} ${n===u?b:""}`,style:{width:`${y}px`},children:c},`huxy-carousel-${u}`))}),f("div",{className:j,children:e.map((c,u)=>f("span",{className:`${T} ${n===u+1?b:""}`,onClick:V=>P(u+1,V)},`huxy-carousel-switch-${u}`))})]})},De=le;export{De as default};
