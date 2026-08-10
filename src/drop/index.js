var Y=Object.defineProperty;var F=(r,o)=>{for(var t in o)Y(r,t,{get:o[t],enumerable:!0})};import{useState as Rr,useRef as C,useEffect as $r}from"react";import{useEffect as q}from"react";var I=(r,o)=>Object.prototype.hasOwnProperty.call(r??{},o),D=I;var V=r=>{let o=typeof r=="function"?r():r;return D(o,"current")},b=V;var G=(r,o,t="click")=>{q(()=>{let n=a=>{let p=typeof r=="function"?r():r,i=b(p)?p.current:p;i?.contains&&!i.contains(a.target)&&o(a)},e=typeof t=="string"?[t]:t;return e.map(a=>{document.addEventListener(a,n,!1)}),()=>{e.map(a=>{document.removeEventListener(a,n,!1)})}},[r])},k=G;var J=r=>r?.$$typeof&&typeof r.$$typeof=="symbol"&&r.$$typeof.description?.indexOf("react.")===0,A=J;var K=(r="")=>r.replace(/^\S/,o=>o.toUpperCase()),S=K;var Q=(r=()=>{},o=60)=>{let t=null;return function(...n){clearTimeout(t),t=setTimeout(()=>r.apply(this,n),o)}},_=Q;var Z=()=>![typeof window,typeof document].includes("undefined"),s=Z;var rr=r=>Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),E=rr;var or=r=>E(r).indexOf("element")>-1,y=or;var tr=(r=null)=>s()?y(r)?{width:r.clientWidth,height:r.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},T=tr;var nr=r=>{if(s())return r=b(r)?r.current:r??document.body,r.getBoundingClientRect?.()},c=nr;var er=r=>{if(!s())return;let o=document.createElement("div");return o.innerHTML=r,o.children[0]},P=er;var ar=(r,o={},t=!1)=>{if(y(r)){if(t){let n="";Object.keys(o).map(e=>{n+=`${e}: ${o[e]};`}),r.style=n;return}Object.keys(o).map(n=>r.style.setProperty(n,o[n]))}},f=ar;var pr=(r=350,o="ms")=>({ms:r*1,s:r*1e3,m:r*6e4,h:r*36e5,d:r*864e5})[o]??r,dr=(r=350,o="ms")=>new Promise(t=>setTimeout(t,pr(r,o)));var R=dr;var ir=async(r,o=15)=>{if(!s())return;if(typeof r=="string"&&(r=P(r)),r=b(r)?r.current:r,!y(r))return{};let t=r.cloneNode(!0);f(t,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),r.parentNode.appendChild(t),await R(o);let n=c(t);return r.parentNode.removeChild(t),n},$=ir;var lr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,hr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,B=(r,o)=>{o=`huxy-drop-arrow-${o}`;let t=r.getAttribute("class")??"";lr.test(t)?r.setAttribute("class",t.replace(hr,o)):r.setAttribute("class",`${t} ${o}`)},H=async(r,o,t)=>{let{left:n,right:e,top:a,bottom:p}=c(r),{width:i,height:u}=T(),{width:h,height:x}=await $(o);if(e<0||p<0||n>i||a>u)return{};if(t==="vertical"){let l={left:n+"px",top:p+10+"px",right:"auto",bottom:"auto"},d="lt";n+h>i&&(l.left=e-h+"px",d="rt"),p+10+x>u&&(l.top=a-10-x+"px",d=d==="lt"?"lb":"rb"),f(o,l),B(o,d)}else{let l={left:e+10+"px",top:a+"px",right:"auto",bottom:"auto"},d="tl";e+10+h>i&&(l.left=n-10-h+"px",d="tr"),a+x>u&&(l.top=p-x+"px",d=d==="tl"?"bl":"br"),f(o,l),B(o,d)}},sr=(r,o,t="horizontal")=>{let n=_(H),e=()=>n(r,o,t);window.addEventListener("scroll",e,!1),window.addEventListener("resize",e,!1);let a=()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e),f(o,{left:"",top:"",right:"",bottom:""})};return H(r,o,t),a},L=sr;import{useState as yr}from"react";import{useEffect as ur,useRef as xr}from"react";var br=(r,o=[])=>{let t=xr(!1);ur(()=>{if(!t.current)t.current=!0;else return r()},o)},O=br;var fr=(r,o=450)=>{let[t,n]=yr(r);return O(()=>{let e;return r||o===0?n(r):e=setTimeout(()=>n(r),o),()=>e&&clearTimeout(e)},[r]),[t,n]},z=fr;import{createPortal as wr}from"react-dom";var cr=({children:r,mountNode:o=document.body})=>wr(r,o),U=cr;import{jsx as m}from"react/jsx-runtime";var mr=({open:r,delay:o=280,children:t,mountNode:n,style:e,...a})=>{let[p]=z(r,o);return m(U,{mountNode:n,children:m("div",{children:m("div",{style:{...e,display:p?"block":"none"},...a,children:t})})})},N=mr;var v={};F(v,{default:()=>Pr,"drop-target":()=>g,"drop-wrap":()=>gr,dropTarget:()=>g,dropWrap:()=>gr,"huxy-drop-arrow-bl":()=>Er,"huxy-drop-arrow-br":()=>Tr,"huxy-drop-arrow-lb":()=>kr,"huxy-drop-arrow-lt":()=>Cr,"huxy-drop-arrow-rb":()=>Ar,"huxy-drop-arrow-rt":()=>Dr,"huxy-drop-arrow-tl":()=>Sr,"huxy-drop-arrow-tr":()=>_r,huxyDropArrowBl:()=>Er,huxyDropArrowBr:()=>Tr,huxyDropArrowLb:()=>kr,huxyDropArrowLt:()=>Cr,huxyDropArrowRb:()=>Ar,huxyDropArrowRt:()=>Dr,huxyDropArrowTl:()=>Sr,huxyDropArrowTr:()=>_r,open:()=>vr});if(typeof document<"u"&&!window.__HUXY__?.has("190916")){window.__HUXY__=window.__HUXY__||new Set;let r=document.createElement("style");r.textContent=`@keyframes animate-drop-in {
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
`,document.head.appendChild(r),window.__HUXY__.add("190916")}var g="hy-190916-drop-target";var gr="hy-190916-drop-wrap";var vr="hy-190916-open",Cr="hy-190916-huxy-drop-arrow-lt";var Dr="hy-190916-huxy-drop-arrow-rt";var kr="hy-190916-huxy-drop-arrow-lb";var Ar="hy-190916-huxy-drop-arrow-rb";var Sr="hy-190916-huxy-drop-arrow-tl";var _r="hy-190916-huxy-drop-arrow-tr";var Er="hy-190916-huxy-drop-arrow-bl";var Tr="hy-190916-huxy-drop-arrow-br";var Pr={dropTarget:"hy-190916-drop-target","drop-target":"hy-190916-drop-target",dropWrap:"hy-190916-drop-wrap","drop-wrap":"hy-190916-drop-wrap",open:"hy-190916-open",huxyDropArrowLt:"hy-190916-huxy-drop-arrow-lt","huxy-drop-arrow-lt":"hy-190916-huxy-drop-arrow-lt",huxyDropArrowRt:"hy-190916-huxy-drop-arrow-rt","huxy-drop-arrow-rt":"hy-190916-huxy-drop-arrow-rt",huxyDropArrowLb:"hy-190916-huxy-drop-arrow-lb","huxy-drop-arrow-lb":"hy-190916-huxy-drop-arrow-lb",huxyDropArrowRb:"hy-190916-huxy-drop-arrow-rb","huxy-drop-arrow-rb":"hy-190916-huxy-drop-arrow-rb",huxyDropArrowTl:"hy-190916-huxy-drop-arrow-tl","huxy-drop-arrow-tl":"hy-190916-huxy-drop-arrow-tl",huxyDropArrowTr:"hy-190916-huxy-drop-arrow-tr","huxy-drop-arrow-tr":"hy-190916-huxy-drop-arrow-tr",huxyDropArrowBl:"hy-190916-huxy-drop-arrow-bl","huxy-drop-arrow-bl":"hy-190916-huxy-drop-arrow-bl",huxyDropArrowBr:"hy-190916-huxy-drop-arrow-br","huxy-drop-arrow-br":"hy-190916-huxy-drop-arrow-br"};import{jsx as M,jsxs as Hr}from"react/jsx-runtime";var Br=({trigger:r="click",type:o,dropList:t,className:n,children:e,targetProps:a,...p})=>{let[i,u]=Rr(!1),h=C(),x=C(),l=C();k(h,w=>u(!1),[...new Set(["click",r.toLowerCase()])]),$r(()=>()=>l.current?.(),[]);let d=w=>{w.preventDefault(),u(!0),l.current=L(h.current,x.current,o)},W={[`on${S(r)}`]:d},j=["drop-wrap",i?"open":"",n].filter(Boolean).map(w=>v[w]).join(" "),X=A(t)?t:t?.(()=>u(!1),i);return Hr("span",{ref:h,className:g,...a,...W,children:[e,M(N,{open:i,className:"huxy-drop",children:M("div",{ref:x,className:j,...p,children:X})})]})},Uo=Br;export{Uo as default};
