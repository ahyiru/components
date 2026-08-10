var kn=Object.defineProperty;var O=(n,e)=>{for(var r in e)kn(n,r,{get:e[r],enumerable:!0})};import{useState as yn,useEffect as Ue}from"react";import{useEffect as zn}from"react";var _n=()=>![typeof window,typeof document].includes("undefined"),y=_n;var Hn=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),B=Hn;var Cn=n=>B(n).indexOf("element")>-1,L=Cn;var Nn=(n=null)=>y()?L(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},v=Nn;import{useEffect as Tn,useState as Xn,useCallback as Yn,useRef as En}from"react";var Sn=(n={})=>{let e=En(0),[r,t]=Xn(n),a=Yn(o=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>t(o))},[]);return Tn(()=>()=>cancelAnimationFrame(e.current),[]),[r,a]},A=Sn;var Rn=()=>{let[n,e]=A(v());return zn(()=>{let r=()=>e(v());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),n},I=Rn;var H={};O(H,{anico:()=>k,bottom:()=>Wn,close:()=>Un,default:()=>Ln,hline:()=>_,pause:()=>On,play:()=>Pn,right:()=>Bn});if(typeof document<"u"&&!window.__HUXY__?.has("ac55d9")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`/*@height:2px;
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
`,document.head.appendChild(n),window.__HUXY__.add("ac55d9")}var k="hy-ac55d9-anico",_="hy-ac55d9-hline",Un="hy-ac55d9-close",Wn="hy-ac55d9-bottom",Pn="hy-ac55d9-play",On="hy-ac55d9-pause",Bn="hy-ac55d9-right",Ln={anico:"hy-ac55d9-anico",hline:"hy-ac55d9-hline",close:"hy-ac55d9-close",bottom:"hy-ac55d9-bottom",play:"hy-ac55d9-play",pause:"hy-ac55d9-pause",right:"hy-ac55d9-right"};import{jsx as F}from"react/jsx-runtime";var An=n=>F("span",{className:k,children:F("span",{className:[_,...(n.type||"").split(" ").map(e=>H[e]).filter(Boolean)].join(" ")})}),M=An;import{isValidElement as Vn,cloneElement as Zn,Children as Gn}from"react";import{useState as Dn}from"react";import{useEffect as In,useRef as Fn}from"react";var Mn=(n,e=[])=>{let r=Fn(!1);In(()=>{if(!r.current)r.current=!0;else return n()},e)},D=Mn;var $n=(n,e=450)=>{let[r,t]=Dn(n);return D(()=>{let a;return n||e===0?t(n):a=setTimeout(()=>t(n),e),()=>a&&clearTimeout(a)},[n]),[r,t]},$=$n;import{createPortal as qn}from"react-dom";var jn=({children:n,mountNode:e=document.body})=>qn(n,e),q=jn;import{jsx as C,jsxs as ee}from"react/jsx-runtime";var Jn={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Kn={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Qn=(n,e)=>n.style.overflow=e?"hidden":"",ne=({open:n,close:e,delay:r=300,children:t,mountNode:a=document.body,hasMask:o=!0,style:i,className:c="h-mask",relative:d})=>{let[l]=$(n,r);Qn(a,l);let h=d?"absolute":"fixed";return C(q,{mountNode:a,children:C("div",{children:l?ee("div",{className:c,style:{...Jn,position:h},children:[o?C("div",{style:{...Kn,position:h},onClick:p=>e?.(p)}):null,Gn.map(t,p=>Vn(p)?Zn(p,{style:{position:"relative",zIndex:100001,...p.props.style}}):p)]}):null})})},j=ne;var E={};O(E,{default:()=>ie,"drawer-container":()=>N,"drawer-content":()=>T,"drawer-footer":()=>Y,"drawer-header":()=>X,"drawer-wrap":()=>re,drawerContainer:()=>N,drawerContent:()=>T,drawerFooter:()=>Y,drawerHeader:()=>X,drawerWrap:()=>re,"ico-close":()=>x,icoClose:()=>x,left:()=>ae,open:()=>te,right:()=>oe});if(typeof document<"u"&&!window.__HUXY__?.has("ce63fc")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`@keyframes animate-drawer-right-in {
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
`,document.head.appendChild(n),window.__HUXY__.add("ce63fc")}var re="hy-ce63fc-drawer-wrap";var te="hy-ce63fc-open",oe="hy-ce63fc-right",ae="hy-ce63fc-left",N="hy-ce63fc-drawer-container";var T="hy-ce63fc-drawer-content";var X="hy-ce63fc-drawer-header";var x="hy-ce63fc-ico-close";var Y="hy-ce63fc-drawer-footer";var ie={drawerWrap:"hy-ce63fc-drawer-wrap","drawer-wrap":"hy-ce63fc-drawer-wrap",open:"hy-ce63fc-open",right:"hy-ce63fc-right",left:"hy-ce63fc-left",drawerContainer:"hy-ce63fc-drawer-container","drawer-container":"hy-ce63fc-drawer-container",drawerContent:"hy-ce63fc-drawer-content","drawer-content":"hy-ce63fc-drawer-content",drawerHeader:"hy-ce63fc-drawer-header","drawer-header":"hy-ce63fc-drawer-header",icoClose:"hy-ce63fc-ico-close","ico-close":"hy-ce63fc-ico-close",drawerFooter:"hy-ce63fc-drawer-footer","drawer-footer":"hy-ce63fc-drawer-footer"};import{jsx as m,jsxs as V}from"react/jsx-runtime";var ce=({open:n,close:e,footer:r,header:t,className:a,style:o,children:i,width:c="300px",mountNode:d,position:l="right",relative:h})=>{let p=["drawer-wrap",l,n?"open":"",...a?.split(" ")??[]].filter(Boolean).map(f=>E[f]).join(" ");return m(j,{open:n,close:e,delay:250,hasMask:!0,relative:h,mountNode:d,className:"huxy-drawer",children:m("div",{className:p,style:{width:c,position:h?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":t?"44px":"0px",...o},children:V("div",{className:N,children:[t?V("div",{className:X,children:[l==="right"?m("span",{className:`link ${x}`,onClick:f=>e?.(f)}):null,m("div",{children:t}),l==="left"?m("span",{className:`link ${x}`,onClick:f=>e?.(f)}):null]}):null,m("div",{className:T,children:i}),r?m("div",{className:Y,children:r}):null]})})})},Z=ce;import{jsx as u,jsxs as de}from"react/jsx-runtime";var G=({menu:n,curName:e,Link:r})=>n.map(t=>{let{path:a,name:o,open:i,children:c}=t,d=o===e;return c?.length?de("li",{className:i?"open":"",children:[u(r,{to:{query:{name:o}},className:`link${d?" active":""}`,preventDefault:!0,children:u("span",{children:o})}),u("ul",{children:u(G,{menu:c,curName:o,Link:r})})]},a||o):u("li",{children:u(r,{to:{query:{name:o}},className:`link${d?" active":""}`,children:u("span",{children:o})})},a||o)}),J=G;import{useEffect as Ye,useRef as Ee}from"react";import{useState as ye,useEffect as an,useRef as cn}from"react";var le=(n,e)=>Object.prototype.hasOwnProperty.call(n??{},e),K=le;var se=n=>{let e=typeof n=="function"?n():n;return K(e,"current")},Q=se;var he=(n=0,e)=>{y()&&(e=Q(e)?e.current:e??window,e.scrollTo?.({top:n,behavior:"smooth"}))},nn=he;var pe=()=>y()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),en=pe;var fe=(n=()=>{},e=60)=>{let r=null;return function(...t){r||(n.apply(this,t),r=setTimeout(()=>r=null,e))}},rn=fe;var me=(n,e=null,r=!1)=>[...n||[]].sort((t,a)=>{let o=e?t[e]:t,i=e?a[e]:a;return!isNaN(Number(o))&&!isNaN(Number(o))?r?i-o:o-i:typeof o=="string"&&typeof i=="string"?r?i.localeCompare(o):o.localeCompare(i):typeof o=="string"&&typeof i=="number"?r?-1:1:typeof o=="number"||typeof o=="string"?r?1:-1:r?-1:1}),tn=me;var ue=(n={})=>{let e={};return Object.keys(n).map(r=>{n[r]!=null&&(e[r]=n[r])}),e},on=ue;var xe=({curName:n,itemList:e})=>{let r=cn(!1),t=cn(""),[a,o]=ye(n);return an(()=>{let i=on(e.current);if(!n){let l=Object.keys(i).map(h=>({name:h,offsetTop:i[h]?.offsetTop??0}));o(l[0]?.name)}let c=0,d=0;if(t.current!==n){t.current=n;let l=i[n];r.current=!0,l?(nn(l.offsetTop),c=setTimeout(()=>r.current=!1,1050)):d=setTimeout(()=>{window.scrollTo?.({top:i[n]?.offsetTop??0,behavior:"instant"}),c=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(c),clearTimeout(d),r.current=!1}},[n]),an(()=>{let i=rn(()=>{if(!r.current){let d=tn(Object.keys(e.current).map(l=>({name:l,offsetTop:e.current[l]?.offsetTop??0})),"offsetTop",!0).find(l=>l.offsetTop<en())?.name;t.current!==d&&(t.current=d,o(d))}});return window.addEventListener("scroll",i,!1),()=>window.removeEventListener("scroll",i,!1)},[]),[a]},dn=xe;import{useState as He,useEffect as Ce}from"react";if(typeof document<"u"&&!window.__HUXY__?.has("cab66a")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`@keyframes before {
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
`,document.head.appendChild(n),window.__HUXY__.add("cab66a")}import{jsx as ln}from"react/jsx-runtime";var ge=({global:n,absolute:e})=>ln("div",{className:`spinner${n?" global":""}${e?" absolute":""}`,children:ln("figure",{className:"spinning"})}),sn=ge;import{jsx as be}from"react/jsx-runtime";var we=(n,e)=>be("div",{dangerouslySetInnerHTML:{__html:n},...e}),hn=we;var ve=/!\[.*\]\((.*)\)/g,ke=async(n,e,r)=>{let t={};for(let a=0,o=n.length;a<o;a++){let i=n[a],c=i.slice(2);t[i]=await r({folder:e,name:c})}return t},_e=async(n,{folder:e},r)=>{let a=[...n.matchAll(ve)].filter(Boolean).map(o=>o[1]);if(a?.length){let o=await ke(a,e,r);a.map(i=>{n=n.replace(i,o[i])})}return n},pn=_e;import{jsx as Te,jsxs as Xe}from"react/jsx-runtime";var Ne=({item:n,marked:e,getContext:r})=>{let[t,a]=He("");return Ce(()=>{(async()=>{try{let i=await r({...n,type:".md"}),c=await pn(i,n,r),d=typeof e=="function"?e.parse(c):d;a(d)}catch(i){a(i?.message)}})()},[]),Xe("div",{className:"huxy-content",children:[hn(t),!t&&Te(sn,{global:!0})]})},fn=Ne;import{jsx as S,jsxs as ze}from"react/jsx-runtime";var Se=({router:n,curName:e,context:r,marked:t,getContext:a})=>{let o=Ee({}),[i]=dn({curName:e,itemList:o});return Ye(()=>{i&&n.push({query:{name:i}})},[i]),S("div",{className:"huxy-anchor-page",children:r.map((c,d)=>ze("div",{className:"huxy-anchor-item",ref:l=>o.current[c.name]=l,children:[S("h2",{children:`${c.name}`}),S(fn,{item:c,marked:t,getContext:a})]},c.name))})},mn=Se;var Re=n=>{let e=[];return n.map(r=>{let[t,a]=r.name.split("/"),o=e.find(i=>i.name===t);o?o.children.push({name:a,folder:t}):e.push({name:t,children:[{name:a,folder:t}]})}),e},un=Re;if(typeof document<"u"&&!window.__HUXY__?.has("51322d")){window.__HUXY__=window.__HUXY__||new Set;let n=document.createElement("style");n.textContent=`.huxy-doc-frame {
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
`,document.head.appendChild(n),window.__HUXY__.add("51322d")}import{Fragment as Oe,jsx as s,jsxs as g}from"react/jsx-runtime";var We=(n,e,r)=>({sidebar:n.find(t=>t.name===e)?.children??[],listEle:n.map(({name:t,children:a})=>s("li",{children:s(r,{to:{query:{folder:t,name:a[0]?.name}},className:`link${t===e?" active":""}`,children:s("span",{children:t})})},t))}),Pe=n=>{let{params:e,router:r,Link:t,listFiles:a,getContext:o,marked:i,title:c,routeLink:d,routeName:l,className:h,style:p}=n,{folder:f,name:z}=e,{width:xn}=I(),[gn,wn]=yn([]),[w,R]=yn(!1);Ue(()=>{(async()=>{let vn=await a(),b=un(vn);wn(b),f||r.push({query:{folder:b[0]?.name,name:b[0]?.children[0]?.name}})})()},[]);let bn=xn<=1024,{sidebar:U,listEle:W}=We(gn,f,t);return g("div",{className:`huxy-doc-frame ${h??""}`,style:p,children:[g("div",{className:"huxy-doc-header",children:[s("div",{className:"huxy-doc-banner",children:c||"\u6587\u6863\u7CFB\u7EDF"}),s("ul",{className:"huxy-doc-nav",children:bn?g(Oe,{children:[s("li",{className:"huxy-doc-collapsed",children:s("span",{className:"link",onClick:P=>{P.stopPropagation(),R(!w)},children:s(M,{type:w?"right":""})})}),s(Z,{open:w,close:()=>R(!1),width:"220px",children:s("ul",{className:"huxy-doc-menu-drawer",children:W})})]}):W}),d?s("div",{className:"huxy-doc-back",children:s(t,{to:d,children:s("span",{children:l??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),g("div",{className:"huxy-doc-container",children:[s("div",{className:"huxy-doc-main-page",children:s(mn,{router:r,curName:z,context:U,marked:i,getContext:o})}),s("div",{className:"huxy-doc-menu",children:s("ul",{className:"huxy-doc-menu-root",children:s(J,{menu:U,curName:z,Link:t})})})]})]})},lt=Pe;export{lt as default};
