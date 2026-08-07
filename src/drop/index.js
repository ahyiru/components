var X=Object.defineProperty;var Y=(r,o)=>{for(var t in o)X(r,t,{get:o[t],enumerable:!0})};import{useState as Rr,useRef as v,useEffect as $r}from"react";import{useEffect as V}from"react";var F=(r,o)=>Object.prototype.hasOwnProperty.call(r??{},o),C=F;var I=r=>{let o=typeof r=="function"?r():r;return C(o,"current")},b=I;var q=(r,o,t="click")=>{V(()=>{let n=a=>{let p=typeof r=="function"?r():r,i=b(p)?p.current:p;i?.contains&&!i.contains(a.target)&&o(a)},e=typeof t=="string"?[t]:t;return e.map(a=>{document.addEventListener(a,n,!1)}),()=>{e.map(a=>{document.removeEventListener(a,n,!1)})}},[r])},D=q;var G=r=>r?.$$typeof&&typeof r.$$typeof=="symbol"&&r.$$typeof.description?.indexOf("react.")===0,k=G;var J=(r="")=>r.replace(/^\S/,o=>o.toUpperCase()),A=J;var K=(r=()=>{},o=60)=>{let t=null;return function(...n){clearTimeout(t),t=setTimeout(()=>r.apply(this,n),o)}},S=K;var Q=()=>![typeof window,typeof document].includes("undefined"),u=Q;var Z=r=>Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),_=Z;var rr=r=>_(r).indexOf("element")>-1,f=rr;var or=(r=null)=>u()?f(r)?{width:r.clientWidth,height:r.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},E=or;var tr=r=>{if(u())return r=b(r)?r.current:r??document.body,r.getBoundingClientRect?.()},m=tr;var nr=r=>{if(!u())return;let o=document.createElement("div");return o.innerHTML=r,o.children[0]},T=nr;var er=(r,o={},t=!1)=>{if(f(r)){if(t){let n="";Object.keys(o).map(e=>{n+=`${e}: ${o[e]};`}),r.style=n;return}Object.keys(o).map(n=>r.style.setProperty(n,o[n]))}},y=er;var ar=(r=350,o="ms")=>({ms:r*1,s:r*1e3,m:r*6e4,h:r*36e5,d:r*864e5})[o]??r,pr=(r=350,o="ms")=>new Promise(t=>setTimeout(t,ar(r,o)));var P=pr;var dr=async(r,o=15)=>{if(!u())return;if(typeof r=="string"&&(r=T(r)),r=b(r)?r.current:r,!f(r))return{};let t=r.cloneNode(!0);y(t,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),r.parentNode.appendChild(t),await P(o);let n=m(t);return r.parentNode.removeChild(t),n},R=dr;var ir=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,lr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,$=(r,o)=>{o=`huxy-drop-arrow-${o}`;let t=r.getAttribute("class")??"";ir.test(t)?r.setAttribute("class",t.replace(lr,o)):r.setAttribute("class",`${t} ${o}`)},B=async(r,o,t)=>{let{left:n,right:e,top:a,bottom:p}=m(r),{width:i,height:s}=E(),{width:h,height:x}=await R(o);if(e<0||p<0||n>i||a>s)return{};if(t==="vertical"){let l={left:n+"px",top:p+10+"px",right:"auto",bottom:"auto"},d="lt";n+h>i&&(l.left=e-h+"px",d="rt"),p+10+x>s&&(l.top=a-10-x+"px",d=d==="lt"?"lb":"rb"),y(o,l),$(o,d)}else{let l={left:e+10+"px",top:a+"px",right:"auto",bottom:"auto"},d="tl";e+10+h>i&&(l.left=n-10-h+"px",d="tr"),a+x>s&&(l.top=p-x+"px",d=d==="tl"?"bl":"br"),y(o,l),$(o,d)}},hr=(r,o,t="horizontal")=>{let n=S(B),e=()=>n(r,o,t);window.addEventListener("scroll",e,!1),window.addEventListener("resize",e,!1);let a=()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e),y(o,{left:"",top:"",right:"",bottom:""})};return B(r,o,t),a},H=hr;import{useState as br}from"react";import{useEffect as ur,useRef as sr}from"react";var xr=(r,o=[])=>{let t=sr(!1);ur(()=>{if(!t.current)t.current=!0;else return r()},o)},L=xr;var fr=(r,o=450)=>{let[t,n]=br(r);return L(()=>{let e;return r||o===0?n(r):e=setTimeout(()=>n(r),o),()=>e&&clearTimeout(e)},[r]),[t,n]},O=fr;import{createPortal as yr}from"react-dom";var cr=({children:r,mountNode:o=document.body})=>yr(r,o),z=cr;import{jsx as g}from"react/jsx-runtime";var wr=({open:r,delay:o=280,children:t,mountNode:n,style:e,...a})=>{let[p]=O(r,o);return g(z,{mountNode:n,children:g("div",{children:g("div",{style:{...e,display:p?"block":"none"},...a,children:t})})})},U=wr;var c={};Y(c,{default:()=>Pr,dropTarget:()=>mr,dropWrap:()=>gr,huxyDropArrowBl:()=>Er,huxyDropArrowBr:()=>Tr,huxyDropArrowLb:()=>kr,huxyDropArrowLt:()=>Cr,huxyDropArrowRb:()=>Ar,huxyDropArrowRt:()=>Dr,huxyDropArrowTl:()=>Sr,huxyDropArrowTr:()=>_r,open:()=>vr});if(typeof document<"u"&&!window.__HUXY__?.has("190916")){window.__HUXY__=window.__HUXY__||new Set;let r=document.createElement("style");r.textContent=`@keyframes animate-drop-in {
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
`,document.head.appendChild(r),window.__HUXY__.add("190916")}var mr="hy-190916-drop-target",gr="hy-190916-drop-wrap",vr="hy-190916-open",Cr="hy-190916-huxy-drop-arrow-lt",Dr="hy-190916-huxy-drop-arrow-rt",kr="hy-190916-huxy-drop-arrow-lb",Ar="hy-190916-huxy-drop-arrow-rb",Sr="hy-190916-huxy-drop-arrow-tl",_r="hy-190916-huxy-drop-arrow-tr",Er="hy-190916-huxy-drop-arrow-bl",Tr="hy-190916-huxy-drop-arrow-br",Pr={dropTarget:"hy-190916-drop-target","drop-target":"hy-190916-drop-target",dropWrap:"hy-190916-drop-wrap","drop-wrap":"hy-190916-drop-wrap",open:"hy-190916-open",huxyDropArrowLt:"hy-190916-huxy-drop-arrow-lt","huxy-drop-arrow-lt":"hy-190916-huxy-drop-arrow-lt",huxyDropArrowRt:"hy-190916-huxy-drop-arrow-rt","huxy-drop-arrow-rt":"hy-190916-huxy-drop-arrow-rt",huxyDropArrowLb:"hy-190916-huxy-drop-arrow-lb","huxy-drop-arrow-lb":"hy-190916-huxy-drop-arrow-lb",huxyDropArrowRb:"hy-190916-huxy-drop-arrow-rb","huxy-drop-arrow-rb":"hy-190916-huxy-drop-arrow-rb",huxyDropArrowTl:"hy-190916-huxy-drop-arrow-tl","huxy-drop-arrow-tl":"hy-190916-huxy-drop-arrow-tl",huxyDropArrowTr:"hy-190916-huxy-drop-arrow-tr","huxy-drop-arrow-tr":"hy-190916-huxy-drop-arrow-tr",huxyDropArrowBl:"hy-190916-huxy-drop-arrow-bl","huxy-drop-arrow-bl":"hy-190916-huxy-drop-arrow-bl",huxyDropArrowBr:"hy-190916-huxy-drop-arrow-br","huxy-drop-arrow-br":"hy-190916-huxy-drop-arrow-br"};import{jsx as N,jsxs as Hr}from"react/jsx-runtime";var Br=({trigger:r="click",type:o,dropList:t,className:n,children:e,targetProps:a,...p})=>{let[i,s]=Rr(!1),h=v(),x=v(),l=v();D(h,w=>s(!1),[...new Set(["click",r.toLowerCase()])]),$r(()=>()=>l.current?.(),[]);let d=w=>{w.preventDefault(),s(!0),l.current=H(h.current,x.current,o)},M={[`on${A(r)}`]:d},W=["drop-wrap",i?"open":"",n].filter(Boolean).map(w=>c[w]).join(" "),j=k(t)?t:t?.(()=>s(!1),i);return Hr("span",{ref:h,className:void 0,...a,...M,children:[e,N(U,{open:i,className:"huxy-drop",children:N("div",{ref:x,className:W,...p,children:j})})]})},Uo=Br;export{Uo as default};
