import{flushSync as se}from"react-dom";import{useState as g,useRef as ne}from"react";import{useEffect as C,useRef as P}from"react";var U=(e,o)=>{let t=P();C(()=>{t.current=e},[e]),C(()=>{if(o){let r=setInterval(()=>t.current(),o);return()=>clearInterval(r)}},[o])},_=U;import{useEffect as oe}from"react";var V=()=>![typeof window,typeof document].includes("undefined"),h=V;var Y=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),S=Y;var B=e=>S(e).indexOf("element")>-1,z=B;var D=(e=null)=>h()?z(e)?{width:e.clientWidth,height:e.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},$=D;var F=(e=()=>{},o=60)=>{let t=null;return function(...r){clearTimeout(t),t=setTimeout(()=>e.apply(this,r),o)}},R=F;var L=(e,o)=>Object.prototype.hasOwnProperty.call(e??{},o),O=L;var q=e=>{let o=typeof e=="function"?e():e;return O(o,"current")},f=q;var G=(e,o)=>{let t=[],r=e.children??[];for(let s=0,n=r.length;s<n;s++){let i=r[s];i.className.indexOf(o)>-1&&t.push(i)}return t.length===0?null:t.length===1?t[0]:t},x=G;var J=(e,o)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");let t=document.createElement("object");return t.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),t.setAttribute("class","resize-sensor"),t.onload=()=>{t.contentDocument.defaultView.addEventListener("resize",o,!1),o()},t.type="text/html",e.appendChild(t),t.data="about:blank",t},K=(e,o=60)=>{if(!h())return;e=f(e)?e.current:e??document.body;let t=x(e,"resize-sensor"),r=[],s=R(()=>r.map(a=>a(e)),o),n=a=>{x(e,"resize-sensor")||(t=J(e,s)),r.indexOf(a)===-1&&r.push(a)},i=a=>{let p=r.indexOf(a);p!==-1&&r.splice(p,1),r.length===0&&t&&d()},d=()=>{t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",s,!1),t.parentNode.removeChild(t),t=void 0,r=[])};return{element:e,bind:n,unbind:i,destroy:d}},I=K;import{useEffect as M,useState as Q,useCallback as Z,useRef as ee}from"react";var te=(e={})=>{let o=ee(0),[t,r]=Q(e),s=Z(n=>{cancelAnimationFrame(o.current),o.current=requestAnimationFrame(()=>r(n))},[]);return M(()=>()=>cancelAnimationFrame(o.current),[]),[t,s]},k=te;var re=(e=null,o=60)=>{let[t,r]=k({});return oe(()=>{let s=typeof e=="function"?e():e,n=f(s)?s.current:s,{bind:i,destroy:d}=I(n,o);return i(()=>n&&r($(n))),()=>d()},[]),t},A=re;if(typeof document<"u"&&!window.__HUXY__?.has("e7324b")){window.__HUXY__=window.__HUXY__||new Set;let e=document.createElement("style");e.textContent=`.hy-e7324b-huxy-carousel {
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
`,document.head.appendChild(e),window.__HUXY__.add("e7324b")}var H="hy-e7324b-dot",v="hy-e7324b-active";import{jsx as m,jsxs as ae}from"react/jsx-runtime";var ie=({children:e,active:o=0,delay:t=5e3,className:r,...s})=>{let[n,i]=g(o+1),[d,a]=g(!1),p=ne(),[N,y]=g(""),{width:b}=A(()=>p);e=Array.isArray(e)?e:[e];let j=e[0],E=[e[e.length-1],...e,j],w=E.length;_(()=>{let c=n+1;c=c===w?1:c,y(""),i(c),c===w-1&&setTimeout(()=>{y("none"),i(1)},500)},d?null:t);let T=(c,u)=>{u.stopPropagation(),y(""),i(c),se(()=>a(!0)),a(!1)},X={width:`${w*b}px`,transform:`translateX(${-b*n}px)`,transition:N};return ae("div",{className:`${void 0}${r?` ${r}`:""}`,...s,ref:p,children:[m("div",{className:void 0,style:X,children:E.map((c,u)=>m("div",{className:`${void 0} ${n===u?v:""}`,style:{width:`${b}px`},children:c},`huxy-carousel-${u}`))}),m("div",{className:void 0,children:e.map((c,u)=>m("span",{className:`${H} ${n===u+1?v:""}`,onClick:W=>T(u+1,W)},`huxy-carousel-switch-${u}`))})]})},Ue=ie;export{Ue as default};
