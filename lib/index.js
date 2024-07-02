import*as K from"react";import*as zt from"react-dom";var ae={87:(t,e,r)=>{r.d(e,{Ay:()=>y,VN:()=>h,ZH:()=>x,Zx:()=>c,pG:()=>p,sQ:()=>u,t6:()=>d,v7:()=>g});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`/*@height:2px;
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
.nstud {
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
.nstud .IZUmD, .nstud .IZUmD::before, .nstud .IZUmD::after {
  position: absolute;
  background-color: var(--linkHoverColor, currentColor);
  border-radius: 2px;
  transform: translateZ(0);
}
.nstud .IZUmD {
  width: var(--width);
  height: var(--height);
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform var(--anitime), background-color var(--anitime);
}
.nstud .IZUmD::before, .nstud .IZUmD::after {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: currentColor;
  transition: transform var(--anitime);
}
.nstud .IZUmD::before {
  transform: translateY(calc(0px - var(--maigin)));
}
.nstud .IZUmD::after {
  transform: translateY(var(--maigin));
}
.nstud .IZUmD.ylzxZ {
  background-color: rgba(255, 255, 255, 0);
}
.nstud .IZUmD.ylzxZ::before {
  transform: rotate(var(--rotate));
}
.nstud .IZUmD.ylzxZ::after {
  transform: rotate(calc(0deg - var(--rotate)));
}
.nstud .IZUmD.Wy_0M::before {
  transform: translateX(var(--tx)) translateY(calc(0px - var(--ty))) rotate(var(--rotate)) scaleX(var(--scale));
}
.nstud .IZUmD.Wy_0M::after {
  transform: translateX(var(--tx)) translateY(var(--ty)) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.nstud .IZUmD.bdjKS {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}
.nstud .IZUmD.bdjKS::before {
  transform: translateX(calc(0px - var(--tx))) translateY(calc(0px - var(--ty))) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.nstud .IZUmD.bdjKS::after {
  transform: translateX(calc(0px - var(--tx))) translateY(var(--ty)) rotate(var(--rotate)) scaleX(var(--scale));
}
.nstud .IZUmD.QPs9T {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  background-color: rgba(0, 0, 0, 0);
}
.nstud .IZUmD.QPs9T::before {
  transform-origin: 0 0;
}
.nstud .IZUmD.QPs9T::after {
  transform-origin: 100% 100%;
}
.nstud .IZUmD.QPs9T.tx7CH {
  background-color: var(--linkHoverColor, currentColor);
  transform: translateX(-75%) translateY(-50%) rotate(-90deg);
}
.nstud .IZUmD.QPs9T.tx7CH::before {
  transform: rotate(60deg);
}
.nstud .IZUmD.QPs9T.tx7CH::after {
  transform: rotate(-60deg);
}
@media screen and (max-width: 1024px) {
  .nstud .IZUmD.Wy_0M {
    background-color: rgba(255, 255, 255, 0);
  }
  .nstud .IZUmD.Wy_0M::before {
    transform: rotate(45deg);
  }
  .nstud .IZUmD.Wy_0M::after {
    transform: rotate(-45deg);
  }
}
`,""]);var c="nstud",d="IZUmD",h="ylzxZ",p="Wy_0M",u="bdjKS",x="QPs9T",g="tx7CH";const y=l},587:(t,e,r)=>{r.d(e,{Ay:()=>g,Om:()=>u,Ri:()=>d,S$:()=>p,UM:()=>c,fv:()=>h,vu:()=>x});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.kLIGi {
  --bar-color: #fff;
  --bar-width: 16px;
  position: relative;
  overflow: hidden;
}
.XoNs4 {
  transition: transform 0.5s cubic-bezier(0.24, 0.14, 0.17, 1.07);
}
.x4UPo {
  float: left;
}
.qYuQn {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.qYuQn .GU0qu {
  display: inline-block;
  margin: 0 5px;
  width: var(--bar-width);
  height: 4px;
  border-radius: 2px;
  background: var(--bar-color);
  opacity: 0.3;
  cursor: pointer;
}
.qYuQn .GU0qu.svhYU {
  width: calc(var(--bar-width) + 8px);
  opacity: 1;
}
`,""]);var c="kLIGi",d="XoNs4",h="x4UPo",p="qYuQn",u="GU0qu",x="svhYU";const g=l},724:(t,e,r)=>{r.d(e,{Ay:()=>v,Ih:()=>_,Vn:()=>c,Y8:()=>g,_I:()=>x,ho:()=>d,iD:()=>u,kb:()=>p,pG:()=>h,pz:()=>y});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-drawer-right-in {
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
.KsHNu {
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
}
.KsHNu {
  animation: animate-drawer-right-out 0.25s forwards;
}
.KsHNu.c6aFy {
  animation: animate-drawer-right-in 0.25s forwards;
}
.KsHNu.mlowE {
  top: 0;
  bottom: 0;
  left: 100%;
}
.KsHNu.mlowE {
  animation: animate-drawer-right-out 0.25s forwards;
}
.KsHNu.mlowE.c6aFy {
  animation: animate-drawer-right-in 0.25s forwards;
}
.KsHNu.w0B0d {
  top: 0;
  bottom: 0;
  right: 100%;
  left: auto;
}
.KsHNu.w0B0d {
  animation: animate-drawer-left-out 0.25s forwards;
}
.KsHNu.w0B0d.c6aFy {
  animation: animate-drawer-left-in 0.25s forwards;
}
.W4gG3 {
  position: relative;
  height: 100%;
}
.W4gG3 .SMORg {
  height: calc(100% - var(--headerHeight) - var(--footerHeight));
}
.W4gG3 .e3AWW {
  font-weight: 500;
  font-size: 1.6rem;
  padding: 12px 16px;
  height: var(--headerHeight);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.W4gG3 .e3AWW .VSVwl {
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
.W4gG3 .e3AWW .VSVwl:before {
  content: '\\00D7';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.W4gG3 .e3AWW .VSVwl:hover {
  border-color: rgba(0, 0, 0, 0.1);
}
.W4gG3 .hlj9r {
  height: var(--footerHeight);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]);var c="KsHNu",d="c6aFy",h="mlowE",p="w0B0d",u="W4gG3",x="SMORg",g="e3AWW",y="VSVwl",_="hlj9r";const v=l},468:(t,e,r)=>{r.d(e,{Ay:()=>p,Zr:()=>d,ho:()=>h,og:()=>c});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-drop-in {
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
.TEYHV {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  max-width: 100%;
  vertical-align: bottom;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.TEYHV::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.NCYpg {
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
}
.NCYpg {
  animation: animate-drop-out 0.25s forwards;
}
.NCYpg.qjBWI {
  animation: animate-drop-in 0.25s forwards;
}
.huxy-drop-arrow-lt {
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
.huxy-drop-arrow-rt {
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
.huxy-drop-arrow-lb {
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
.huxy-drop-arrow-rb {
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
.huxy-drop-arrow-tl {
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
.huxy-drop-arrow-tr {
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
.huxy-drop-arrow-bl {
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
.huxy-drop-arrow-br {
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
`,""]);var c="TEYHV",d="NCYpg",h="qjBWI";const p=l},55:(t,e,r)=>{r.d(e,{A:()=>c});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.huxy-doc-frame {
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
  word-wrap: break-word;
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
`,""]);const c=l},482:(t,e,r)=>{r.d(e,{Ay:()=>v,HM:()=>g,QN:()=>h,R8:()=>c,Y8:()=>u,ho:()=>d,k3:()=>p,kb:()=>y,pG:()=>_,ww:()=>x});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-modal-in {
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
.SqXAN {
  position: fixed;
  background: #ffffff;
  border-radius: 12px;
  min-width: 333px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.SqXAN {
  animation: animate-modal-out 0.25s forwards;
}
.SqXAN.S3vb_ {
  animation: animate-modal-in 0.25s forwards;
}
.RiDlb {
  position: relative;
}
.RiDlb .xdqLE {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 20px 12px 0;
}
.RiDlb .C91AO {
  padding: 8px 12px 24px;
}
.RiDlb .J6dpF {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  height: 100%;
}
.RiDlb .J6dpF .XOnmm.t1Fx9 {
  color: #666666;
  border-right: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm.YGj9K {
  color: #036dff;
}
`,""]);var c="SqXAN",d="S3vb_",h="RiDlb",p="xdqLE",u="C91AO",x="J6dpF",g="XOnmm",y="t1Fx9",_="YGj9K";const v=l},945:(t,e,r)=>{r.d(e,{$d:()=>u,Ay:()=>_,CG:()=>p,kv:()=>g,nd:()=>c,nf:()=>y,w_:()=>x});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.clear::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE {
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
.J8VWE.ohmPp {
  box-shadow: 0 0 3rem rgba(100, 200, 255, 0.5) inset;
}
.J8VWE.JzE05 {
  border-color: rgba(0, 180, 220, 0.5);
  box-shadow: 0 0 2rem rgba(0, 180, 220, 0.5) inset;
}
.J8VWE .rOxNb {
  padding: 10px 12px;
  border-radius: var(--radius);
}
.J8VWE .rOxNb::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX {
  padding: 8px 12px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
.J8VWE .OQwTX::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX .W_1K6 {
  flex: 1;
  width: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.J8VWE .OQwTX .eCk2_ {
  flex-shrink: 0;
}
.J8VWE .OQwTX .eCk2_ .R2Mku {
  text-align: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ .R2Mku:not(:first-of-type) {
  margin-left: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]);var c="J8VWE",d=null,h=null,p="rOxNb",u="OQwTX",x="W_1K6",g="eCk2_",y="R2Mku";const _=l},531:(t,e,r)=>{r.d(e,{A:()=>c});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.cols-1 {
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
`,""]);const c=l},670:(t,e,r)=>{r.d(e,{A:()=>c});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes before {
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
  z-index: 999;
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
`,""]);const c=l},473:(t,e,r)=>{r.d(e,{A:()=>c});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.clear::after {
  clear: both;
  content: '';
  display: block;
  height: 0;
  visibility: hidden;
}
.tabs-header-wrap {
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
.tabs-header-wrap .tabs-header .th-item:hover {
  color: #40a9ff;
}
.tabs-header-wrap .tabs-header .th-item.active {
  color: #40a9ff;
}
.tabs-header-wrap .th-track {
  height: 3px;
  position: absolute;
  left: 0;
  bottom: -3px;
  color: #40a9ff;
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
`,""]);const c=l},700:(t,e,r)=>{r.d(e,{$x:()=>u,Ay:()=>y,E9:()=>p,Vz:()=>d,ZG:()=>h,gO:()=>c,l3:()=>g,o7:()=>x});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.ofth_ {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
.hVmF3 {
  position: relative;
  width: 100%;
}
.hVmF3:hover::before, .hVmF3:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.hVmF3:hover::before {
  transform: translateY(0);
}
.hVmF3:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.hVmF3::before, .hVmF3::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.hVmF3::before {
  content: attr(tooltip);
  z-index: 100002;
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
.hVmF3::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.uzFyE {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.uzFyE[tooltip] {
  position: relative;
  width: 100%;
}
.uzFyE[tooltip]:hover::before, .uzFyE[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.uzFyE[tooltip]:hover::before {
  transform: translateY(0);
}
.uzFyE[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.uzFyE[tooltip]::before, .uzFyE[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.uzFyE[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
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
.uzFyE[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.uzFyE[tooltip]::before {
  left: 0;
  bottom: calc(100% + var(--arrowSize));
}
.uzFyE[tooltip]::after {
  left: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.Giihu {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.Giihu[tooltip] {
  position: relative;
  width: 100%;
}
.Giihu[tooltip]:hover::before, .Giihu[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.Giihu[tooltip]:hover::before {
  transform: translateY(0);
}
.Giihu[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.Giihu[tooltip]::before, .Giihu[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.Giihu[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
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
.Giihu[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.Giihu[tooltip]::before {
  right: 0;
  bottom: calc(100% + var(--arrowSize));
}
.Giihu[tooltip]::after {
  right: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.bFVVt {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.bFVVt[tooltip] {
  position: relative;
  width: 100%;
}
.bFVVt[tooltip]:hover::before, .bFVVt[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.bFVVt[tooltip]:hover::before {
  transform: translateY(0);
}
.bFVVt[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.bFVVt[tooltip]::before, .bFVVt[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.bFVVt[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
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
.bFVVt[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.bFVVt[tooltip]::before {
  left: 0;
  top: calc(100% + var(--arrowSize));
}
.bFVVt[tooltip]::after {
  left: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.oGmKq {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.oGmKq[tooltip] {
  position: relative;
  width: 100%;
}
.oGmKq[tooltip]:hover::before, .oGmKq[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.oGmKq[tooltip]:hover::before {
  transform: translateY(0);
}
.oGmKq[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.oGmKq[tooltip]::before, .oGmKq[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.oGmKq[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
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
.oGmKq[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.oGmKq[tooltip]::before {
  right: 0;
  top: calc(100% + var(--arrowSize));
}
.oGmKq[tooltip]::after {
  right: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.svYWD {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.svYWD[tooltip] {
  position: relative;
  width: 100%;
}
.svYWD[tooltip]:hover::before, .svYWD[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.svYWD[tooltip]:hover::before {
  transform: translateY(0);
}
.svYWD[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.svYWD[tooltip]::before, .svYWD[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.svYWD[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
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
.svYWD[tooltip]::after {
  content: '';
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.svYWD[tooltip]::before {
  top: 0;
  left: calc(100% + var(--arrowSize));
}
.svYWD[tooltip]::after {
  top: var(--position);
  left: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
`,""]);var c="ofth_",d="hVmF3",h="uzFyE",p="Giihu",u="bFVVt",x="oGmKq",g="svYWD";const y=l},133:(t,e,r)=>{r.d(e,{A:()=>c});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.node-right-icon-close {
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
`,""]);const c=l},935:t=>{t.exports=function(e){var r=[];return r.toString=function(){return this.map(function(n){var a="",i=typeof n[5]<"u";return n[4]&&(a+="@supports (".concat(n[4],") {")),n[2]&&(a+="@media ".concat(n[2]," {")),i&&(a+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),a+=e(n),i&&(a+="}"),n[2]&&(a+="}"),n[4]&&(a+="}"),a}).join("")},r.i=function(n,a,i,l,c){typeof n=="string"&&(n=[[null,n,void 0]]);var d={};if(i)for(var h=0;h<this.length;h++){var p=this[h][0];p!=null&&(d[p]=!0)}for(var u=0;u<n.length;u++){var x=[].concat(n[u]);i&&d[x[0]]||(typeof c<"u"&&(typeof x[5]>"u"||(x[1]="@layer".concat(x[5].length>0?" ".concat(x[5]):""," {").concat(x[1],"}")),x[5]=c),a&&(x[2]&&(x[1]="@media ".concat(x[2]," {").concat(x[1],"}")),x[2]=a),l&&(x[4]?(x[1]="@supports (".concat(x[4],") {").concat(x[1],"}"),x[4]=l):x[4]="".concat(l)),r.push(x))}},r}},758:t=>{t.exports=function(e){return e[1]}},197:(t,e)=>{var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function n(a,i,l){var c=null;if(l!==void 0&&(c=""+l),i.key!==void 0&&(c=""+i.key),"key"in i){l={};for(var d in i)d!=="key"&&(l[d]=i[d])}else l=i;return i=l.ref,{$$typeof:r,type:a,key:c,ref:i!==void 0?i:null,props:l}}e.Fragment=o,e.jsx=n,e.jsxs=n},85:(t,e,r)=>{t.exports=r(197)},591:t=>{var e=[];function r(a){for(var i=-1,l=0;l<e.length;l++)if(e[l].identifier===a){i=l;break}return i}function o(a,i){for(var l={},c=[],d=0;d<a.length;d++){var h=a[d],p=i.base?h[0]+i.base:h[0],u=l[p]||0,x="".concat(p," ").concat(u);l[p]=u+1;var g=r(x),y={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(g!==-1)e[g].references++,e[g].updater(y);else{var _=n(y,i);i.byIndex=d,e.splice(d,0,{identifier:x,updater:_,references:1})}c.push(x)}return c}function n(a,i){var l=i.domAPI(i);l.update(a);var c=function(h){if(h){if(h.css===a.css&&h.media===a.media&&h.sourceMap===a.sourceMap&&h.supports===a.supports&&h.layer===a.layer)return;l.update(a=h)}else l.remove()};return c}t.exports=function(a,i){i=i||{},a=a||[];var l=o(a,i);return function(d){d=d||[];for(var h=0;h<l.length;h++){var p=l[h],u=r(p);e[u].references--}for(var x=o(d,i),g=0;g<l.length;g++){var y=l[g],_=r(y);e[_].references===0&&(e[_].updater(),e.splice(_,1))}l=x}}},128:t=>{var e={};function r(n){if(typeof e[n]>"u"){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}e[n]=a}return e[n]}function o(n,a){var i=r(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}t.exports=o},51:t=>{function e(r){var o=document.createElement("style");return r.setAttributes(o,r.attributes),r.insert(o,r.options),o}t.exports=e},855:(t,e,r)=>{function o(n){var a=r.nc;a&&n.setAttribute("nonce",a)}t.exports=o},740:t=>{function e(n,a,i){var l="";i.supports&&(l+="@supports (".concat(i.supports,") {")),i.media&&(l+="@media ".concat(i.media," {"));var c=typeof i.layer<"u";c&&(l+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),l+=i.css,c&&(l+="}"),i.media&&(l+="}"),i.supports&&(l+="}");var d=i.sourceMap;d&&typeof btoa<"u"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),a.styleTagTransform(l,n,a.options)}function r(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function o(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var a=n.insertStyleElement(n);return{update:function(l){e(a,n,l)},remove:function(){r(a)}}}t.exports=o},656:t=>{function e(r,o){if(o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}t.exports=e}},jt={};function m(t){var e=jt[t];if(e!==void 0)return e.exports;var r=jt[t]={id:t,exports:{}};return ae[t](r,r.exports,m),r.exports}m.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return m.d(e,{a:e}),e},m.d=(t,e)=>{for(var r in e)m.o(e,r)&&!m.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},m.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),m.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},m.nc=void 0;var b={};m.d(b,{Rt:()=>St,L8:()=>ke,FN:()=>He,fv:()=>Rt,_s:()=>Bt,ey:()=>Cr,gy:()=>Or,tH:()=>Ft,PQ:()=>Yr,xA:()=>Gr,lz:()=>qr,Xb:()=>Vt,n1:()=>Et,mk:()=>oo,Bl:()=>la,aF:()=>io,Zk:()=>ho,ZL:()=>kt,fI:()=>Yt,y$:()=>Pt,tu:()=>wo,m_:()=>Ut,PH:()=>Oo,mK:()=>Ht,J0:()=>Wr,B6:()=>qt,fz:()=>Ct,Iu:()=>go});var yt={};m.r(yt),m.d(yt,{anico:()=>A.Zx,bottom:()=>A.sQ,close:()=>A.VN,default:()=>he,hline:()=>A.t6,pause:()=>A.v7,play:()=>A.ZH,right:()=>A.pG});var _t={};m.r(_t),m.d(_t,{default:()=>tr,"drawer-container":()=>E.iD,"drawer-content":()=>E._I,"drawer-footer":()=>E.Ih,"drawer-header":()=>E.Y8,"drawer-wrap":()=>E.Vn,"ico-close":()=>E.pz,left:()=>E.kb,open:()=>E.ho,right:()=>E.pG});var gt={};m.r(gt),m.d(gt,{default:()=>kr,"drop-target":()=>Y.og,"drop-wrap":()=>Y.Zr,open:()=>Y.ho});var bt={};m.r(bt),m.d(bt,{default:()=>zr,ellipsis:()=>W.gO,"huxy-tooltip":()=>W.Vz,"huxy-tooltip-bottomLeft":()=>W.o7,"huxy-tooltip-bottomRight":()=>W.$x,"huxy-tooltip-rightTop":()=>W.l3,"huxy-tooltip-topLeft":()=>W.E9,"huxy-tooltip-topRight":()=>W.ZG});var vt={};m.r(vt),m.d(vt,{btn:()=>k.HM,default:()=>ao,left:()=>k.kb,"modal-container":()=>k.QN,"modal-content":()=>k.Y8,"modal-footer":()=>k.ww,"modal-header":()=>k.k3,"modal-wrap":()=>k.R8,open:()=>k.ho,right:()=>k.pG});var s=m(85),ne=m(591),T=m.n(ne),ie=m(740),D=m.n(ie),le=m(128),O=m.n(le),se=m(855),M=m.n(se),ce=m(51),I=m.n(ce),de=m(656),R=m.n(de),A=m(87),X={};X.styleTagTransform=R(),X.setAttributes=M(),X.insert=O().bind(null,"head"),X.domAPI=D(),X.insertStyleElement=I();var Ra=T()(A.Ay,X);const he=A.Ay&&A.Ay.locals?A.Ay.locals:void 0,ue=t=>(0,s.jsx)("span",{className:A.Zx,children:(0,s.jsx)("span",{className:[A.t6,...(t.type||"").split(" ").map(e=>yt[e]).filter(Boolean)].join(" ")})}),St=ue;var pe=t=>{var e={};return m.d(e,t),e},Wa=t=>()=>t;const f=pe({Children:()=>K.Children,cloneElement:()=>K.cloneElement,default:()=>K.default,isValidElement:()=>K.isValidElement,useCallback:()=>K.useCallback,useEffect:()=>K.useEffect,useRef:()=>K.useRef,useState:()=>K.useState}),fe=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),xe=fe,me=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",n=>r(n))}),ye=me,_e=async t=>{if(!xe(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await ye(r)},ge=_e,be=t=>{const[e,r]=(0,f.useState)(t);return(0,f.useEffect)(()=>{(async n=>{const a=await ge(n);r(a)})(t)},[t]),e},ve=be,we=({src:t,...e})=>{const r=ve(t);return(0,s.jsx)("img",{...e,src:r})},ke=we;var Ee=t=>{var e={};return m.d(e,t),e},Ba=t=>()=>t;const Tt=Ee({createPortal:()=>zt.createPortal,flushSync:()=>zt.flushSync}),Ce=(t,e)=>{const r=(0,f.useRef)();(0,f.useEffect)(()=>{r.current=t},[t]),(0,f.useEffect)(()=>{if(e){const o=setInterval(()=>r.current(),e);return()=>clearInterval(o)}},[e])},Pe=Ce,Ae=()=>![typeof window,typeof document].includes("undefined"),N=Ae,ze=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),Dt=ze,je=t=>Dt(t).indexOf("element")>-1,wt=je,Se=(t=null)=>N()?wt(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},G=Se,Te=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Ot=Te,De=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),Oe=De,Me=t=>Oe(t,"current"),B=Me,Ie=(t,e)=>{const r=[],o=t.children??[];for(let n=0,a=o.length;n<a;n++){const i=o[n];i.className.indexOf(e)>-1&&r.push(i)}return r.length===0?null:r.length===1?r[0]:r},Mt=Ie,Re=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},We=(t,e=60)=>{if(!N())return;t=B(t)?t.current:t??document.body;let r=Mt(t,"resize-sensor"),o=[];const n=Ot(()=>o.map(c=>c(t)),e),a=c=>{Mt(t,"resize-sensor")||(r=Re(t,n)),o.indexOf(c)===-1&&o.push(c)},i=c=>{const d=o.indexOf(c);d!==-1&&o.splice(d,1),o.length===0&&r&&l()},l=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:a,unbind:i,destroy:l}},Be=We,Le=(t={})=>{const e=(0,f.useRef)(0),[r,o]=(0,f.useState)(t),n=(0,f.useCallback)(a=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>o(a))},[]);return(0,f.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},It=Le,Ne=(t=null,e=60)=>{const r=B(t)?t.current:t,{bind:o,destroy:n}=Be(r,e),[a,i]=It(G(r));return(0,f.useEffect)(()=>(o(()=>r&&i(G(r))),()=>n()),[r]),a},Ue=Ne;var L=m(587),Z={};Z.styleTagTransform=R(),Z.setAttributes=M(),Z.insert=O().bind(null,"head"),Z.domAPI=D(),Z.insertStyleElement=I();var La=T()(L.Ay,Z);const Na=L.Ay&&L.Ay.locals?L.Ay.locals:void 0,Fe=({children:t,active:e=0,delay:r=5e3,className:o,...n})=>{const[a,i]=(0,f.useState)(e+1),[l,c]=(0,f.useState)(!1),d=(0,f.useRef)(),h=(0,f.useRef)(""),{width:p}=Ue(d);t=Array.isArray(t)?t:[t];const u=t[0],g=[t[t.length-1],...t,u],y=g.length;Pe(()=>{let w=a+1;w=w===y?1:w,h.current&&(h.current=""),i(w),w===y-1&&setTimeout(()=>{h.current="none",i(1)},500)},l?null:r);const _=(w,C)=>{C.stopPropagation(),h.current="",i(w),(0,Tt.flushSync)(()=>c(!0)),c(!1)},v={width:`${y*p}px`,transform:`translateX(${-p*a}px)`,transition:h.current};return(0,s.jsxs)("div",{className:`${L.UM}${o?` ${o}`:""}`,...n,ref:d,children:[(0,s.jsx)("div",{className:L.Ri,style:v,children:g.map((w,C)=>(0,s.jsx)("div",{className:`${L.fv} ${a===C?L.vu:""}`,style:{width:`${p}px`},children:w},`huxy-carousel-${C}`))}),(0,s.jsx)("div",{className:L.S$,children:t.map((w,C)=>(0,s.jsx)("span",{className:`${L.Om} ${a===C+1?L.vu:""}`,onClick:z=>_(C+1,z)},`huxy-carousel-switch-${C}`))})]})},He=Fe,st=(t,e)=>{let r="",o="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:a}=e;r=n?`col-${t}-${n}`:"",o=a?`offset-${t}-${a}`:""}return{sp:r,os:o}},$e=({span:t,offset:e,xl:r,lg:o,md:n,sm:a,xs:i,style:l,width:c,auto:d,offsetWidth:h="0px",className:p,ref:u,...x})=>{const g=p?` ${p}`:"",y=`col-${t||12}`,_=e?`offset-${e}`:"",{sp:v,os:w}=st("xs",i),{sp:C,os:z}=st("sm",a),{sp:H,os:P}=st("md",n),{sp:$,os:j}=st("lg",o),{sp:F,os:S}=st("xl",r),V=[y,F,$,H,C,v,_,S,j,P,z,w].filter(Boolean).join(" "),dt=d?{width:"auto",flex:1,maxWidth:`calc(100% - ${h})`}:{width:c};return(0,s.jsx)("div",{className:`${V}${g}`,...x,style:{...dt,...l},ref:u})},Rt=$e,Ke=(t,e=[])=>{const r=(0,f.useRef)(!1);(0,f.useEffect)(()=>{if(!r.current)r.current=!0;else return t()},e)},Ye=Ke,Ve=(t,e=450)=>{const[r,o]=(0,f.useState)(t);return Ye(()=>{let n;return t||e===0?o(t):n=setTimeout(()=>o(t),e),()=>n&&clearTimeout(n)},[t]),[r,o]},Wt=Ve,Xe=({children:t,mountNode:e=document.body})=>(0,Tt.createPortal)(t,e),kt=Xe,Ge={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Ze={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Qe=document.body,Je=(t,e)=>(t??Qe).style.overflow=e?"hidden":"",qe=({open:t,close:e,delay:r=300,children:o,mountNode:n,hasMask:a=!0,style:i,className:l="h-mask",relative:c})=>{const[d]=Wt(t,r);Je(n,d);const h=c?"absolute":"fixed";return(0,s.jsx)(kt,{mountNode:n,children:(0,s.jsx)("div",{children:d?(0,s.jsxs)("div",{className:l,style:{...Ge,position:h},children:[a?(0,s.jsx)("div",{style:{...Ze,position:h},onClick:p=>e?.(p)}):null,f.Children.map(o,p=>(0,f.isValidElement)(p)?(0,f.cloneElement)(p,{style:{position:"relative",zIndex:100001,...p.props.style}}):p)]}):null})})},Et=qe;var E=m(724),Q={};Q.styleTagTransform=R(),Q.setAttributes=M(),Q.insert=O().bind(null,"head"),Q.domAPI=D(),Q.insertStyleElement=I();var Ua=T()(E.Ay,Q);const tr=E.Ay&&E.Ay.locals?E.Ay.locals:void 0,er=({open:t,close:e,footer:r,header:o,className:n,style:a,children:i,width:l="300px",mountNode:c,position:d="right",relative:h})=>{const p=["drawer-wrap",d,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(u=>_t[u]).join(" ");return(0,s.jsx)(Et,{open:t,close:e,delay:250,hasMask:!0,relative:h,mountNode:c,className:"huxy-drawer",children:(0,s.jsx)("div",{className:p,style:{width:l,position:h?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":o?"44px":"0px",...a},children:(0,s.jsxs)("div",{className:E.iD,children:[o?(0,s.jsxs)("div",{className:E.Y8,children:[d==="right"?(0,s.jsx)("span",{className:`link ${E.pz}`,onClick:u=>e?.(u)}):null,(0,s.jsx)("div",{children:o}),d==="left"?(0,s.jsx)("span",{className:`link ${E.pz}`,onClick:u=>e?.(u)}):null]}):null,(0,s.jsx)("div",{className:E._I,children:i}),r?(0,s.jsx)("div",{className:E.Ih,children:r}):null]})})})},Bt=er,rr=(t,e,r="click")=>{(0,f.useEffect)(()=>{const o=a=>{const i=B(t)?t.current:t;i?.contains&&!i.contains(a.target)&&e(a)},n=typeof r=="string"?[r]:r;return n.map(a=>{document.addEventListener(a,o,!1)}),()=>{n.map(a=>{document.removeEventListener(a,o,!1)})}},[t,e,r])},or=rr,ar=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,nr=ar,ir=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),lr=ir,sr=t=>{if(N())return t=B(t)?t.current:t??document.body,t.getBoundingClientRect?.()},J=sr,cr=t=>{if(!N())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},dr=cr,hr=(t,e={},r=!1)=>{if(wt(t)){if(r){let o="";Object.keys(e).map(n=>{o+=`${n}: ${e[n]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}},ct=hr,ur=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,pr=(t=350,e="ms")=>new Promise(r=>setTimeout(r,ur(t,e))),Fa=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},fr=pr,xr=async(t,e=15)=>{if(!N())return;if(typeof t=="string"&&(t=dr(t)),t=B(t)?t.current:t,!wt(t))return{};const r=t.cloneNode(!0);ct(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await fr(e);const o=J(r);return t.parentNode.removeChild(r),o},mr=xr,yr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,_r=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Lt=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";yr.test(r)?t.setAttribute("class",r.replace(_r,e)):t.setAttribute("class",`${r} ${e}`)},Nt=async(t,e,r)=>{const{left:o,right:n,top:a,bottom:i}=J(t),{width:l,height:c}=G(),{width:d,height:h}=await mr(e);if(n<0||i<0||o>l||a>c)return{};if(r==="vertical"){const p={left:o+"px",top:i+10+"px",right:"auto",bottom:"auto"};let u="lt";o+d>l&&(p.left=n-d+"px",u="rt"),i+10+h>c&&(p.top=a-10-h+"px",u=u==="lt"?"lb":"rb"),ct(e,p),Lt(e,u)}else{const p={left:n+10+"px",top:a+"px",right:"auto",bottom:"auto"};let u="tl";n+10+d>l&&(p.left=o-10-d+"px",u="tr"),a+h>c&&(p.top=i-h+"px",u=u==="tl"?"bl":"br"),ct(e,p),Lt(e,u)}},gr=(t,e,r="horizontal")=>{const o=Ot(Nt),n=()=>o(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const a=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),ct(e,{left:"",top:"",right:"",bottom:""})};return Nt(t,e,r),a},br=gr,vr=({open:t,delay:e=280,children:r,mountNode:o,style:n,...a})=>{const[i]=Wt(t,e);return(0,s.jsx)(kt,{mountNode:o,children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{...n,display:i?"block":"none"},...a,children:r})})})},wr=vr;var Y=m(468),q={};q.styleTagTransform=R(),q.setAttributes=M(),q.insert=O().bind(null,"head"),q.domAPI=D(),q.insertStyleElement=I();var Ha=T()(Y.Ay,q);const kr=Y.Ay&&Y.Ay.locals?Y.Ay.locals:void 0,Er=({trigger:t="click",type:e,dropList:r,className:o,children:n,targetProps:a,...i})=>{const[l,c]=(0,f.useState)(!1),d=(0,f.useRef)(),h=(0,f.useRef)(),p=(0,f.useRef)();or(d,_=>l&&c(!1),[...new Set(["click",t.toLowerCase()])]),(0,f.useEffect)(()=>()=>p.current?.(),[]);const u=_=>{_.preventDefault(),c(!0),p.current=br(d.current,h.current,e)},x={[`on${lr(t)}`]:u},g=["drop-wrap",l?"open":"",o].filter(Boolean).map(_=>gt[_]).join(" "),y=nr(r)?r:r?.(()=>c(!1),l);return(0,s.jsxs)("span",{ref:d,className:Y.og,...a,...x,children:[n,(0,s.jsx)(wr,{open:l,className:"huxy-drop",children:(0,s.jsx)("div",{ref:h,className:g,...i,children:y})})]})},Cr=Er,Pr=(t,e,r)=>{if(!N())return;r=B(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ct(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n},Ar=Pr;var W=m(700),tt={};tt.styleTagTransform=R(),tt.setAttributes=M(),tt.insert=O().bind(null,"head"),tt.domAPI=D(),tt.insertStyleElement=I();var $a=T()(W.Ay,tt);const zr=W.Ay&&W.Ay.locals?W.Ay.locals:void 0,jr=({title:t,placement:e="topRight",children:r,ellipsis:o,className:n,...a})=>(0,s.jsx)("span",{className:`${bt[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...a,children:(0,s.jsx)("span",{className:o?W.gO:"",children:r})}),Ut=jr,Sr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Tr=t=>{const{children:e,style:r}=t,o=typeof e=="string",n=o?e:e?.props?.title??e?.props?.children,a=(0,f.useRef)(),[i,l]=(0,f.useState)(!0);return(0,f.useEffect)(()=>{if(a.current){const{width:c}=Ar(n,null,a.current.parentNode),{width:d}=J(a.current),h=~~c>~~d;h!==i&&l(h)}},[n]),(0,s.jsx)("span",{ref:a,style:{display:"flex",width:"100%",...r},children:i?o?(0,s.jsx)(Ut,{...t,ellipsis:!0}):(0,s.jsx)("span",{style:Sr,children:e}):o?e:e?.props?.children})},Dr=t=>t.children==null?"":(0,s.jsx)(Tr,{...t}),Or=Dr;class Ft extends f.default.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:o}=this.props;typeof o=="function"&&o({error:e,info:r.componentStack})}render(){const{error:e}=this.state,{fallback:r,children:o}=this.props;return e?r?.(e)??e:o}}const Mr=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,s.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,s.jsx)(r,{}):(0,s.jsx)("i",{className:e})}return e??null},Ht=Mr,Ir=t=>Ht(t),Rr=t=>({icon:e,defaultIcon:r})=>e?Ir(t)(e):e===!1?null:r,Wr=Rr,ht=["","webkit","moz","ms"],Br=t=>ht.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Lr=t=>ht.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Nr=t=>ht.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),$t=ht.map(t=>`${t}fullscreenchange`),Ur=t=>{if(!N())return;t=B(t)?t.current:t??document.body;const e=Br(document),r=Lr(t),o=Nr(document);document[e]?document[o]?.():t[r]?.()},Fr=Ur,Hr=t=>N()?($t.map(r=>document.addEventListener(r,t,!1)),()=>$t.map(r=>document.removeEventListener(r,t,!1))):void 0,$r=Hr,Kt=t=>(0,s.jsx)("i",{...t,children:"..."}),Kr=({panel:t,fullIcon:e=Kt,exitIcon:r=Kt,...o})=>{const n=B(t)?t.current:t,[a,i]=(0,f.useState)();(0,f.useEffect)(()=>{const c=$r(()=>{i(d=>!d)});return()=>c()},[]);const l=a?r:e;return(0,s.jsx)(l,{onClick:c=>Fr(n),...o})},Yr=Kr;var ut=m(531),et={};et.styleTagTransform=R(),et.setAttributes=M(),et.insert=O().bind(null,"head"),et.domAPI=D(),et.insertStyleElement=I();var Ka=T()(ut.A,et);const Ya=ut.A&&ut.A.locals?ut.A.locals:void 0,Vr=({gutter:t=10,className:e,overflow:r="hidden",ref:o,...n})=>{const a=e?` ${e}`:"";let i=10;if(Array.isArray(t)){const l=[...t];t=l[0],i=l[1]??l[0]}return(0,s.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(i/2)}px`,overflow:r},children:(0,s.jsx)("div",{className:`row${a}`,...n,ref:o})})},Yt=Vr,Xr=({rowProps:t,colProps:e,children:r,Row:o=Yt,Col:n=Rt})=>{const a=[];return f.Children.map(r,i=>{i&&(i.type?.description==="react.fragment"?a.push(...i.props.children):a.push(i))}),(0,s.jsx)(o,{...t,children:a.map((i,l)=>(0,s.jsx)(n,{...e,...i.props.itemprops,children:i},`huuxy_grid_${l}`))})},Gr=Xr,Zr=(t,e)=>(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),Ct=Zr,Qr=t=>{const{error:e={},info:r=""}=t||{},{message:o,stack:n,errMsg:a}=e;let i=a||n||e.toString();i=`${i}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),i=i.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),i=i.replace(/\s/g,"&nbsp;");const l=o?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,s.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Ct(i,{style:{color:"red"}}),l&&(0,s.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${l}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Vt=Qr,Jr=({children:t,report:e})=>{const r=(0,f.useRef)();return r.current?.state&&(r.current.state.error=null),(0,s.jsx)(Ft,{ref:r,fallback:(o,n)=>Vt({error:o,info:n}),errorReport:e,children:t})},qr=Jr,Xt=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),to=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),eo={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Gt=({left:t,top:e,width:r,height:o})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${o}px`}),Zt=t=>(0,s.jsx)("i",{...t,children:"..."}),Qt=t=>{const{left:e,top:r}=J(t),{width:o,height:n}=G(t);return{left:e,top:r,width:o,height:n}},ro=({panel:t,target:e,fullIcon:r=Zt,exitIcon:o=Zt})=>{t=B(t)?t.current:t||document.body;const[n,a]=(0,f.useState)(),i=(0,f.useRef)();(0,f.useEffect)(()=>{i.current={...eo,...Gt(Qt(t))}},[t]);const l=(d,h)=>{if(d){const u=Gt(Qt((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));Xt(h,i.current),setTimeout(()=>{Xt(h,u)},0)}else to(h,i.current);a(d)},c=n?o:r;return(0,s.jsx)(c,{onClick:d=>l(!n,t)})},oo=ro;var k=m(482),rt={};rt.styleTagTransform=R(),rt.setAttributes=M(),rt.insert=O().bind(null,"head"),rt.domAPI=D(),rt.insertStyleElement=I();var Va=T()(k.Ay,rt);const ao=k.Ay&&k.Ay.locals?k.Ay.locals:void 0,no=({open:t,close:e,hasMask:r=!0,cancelText:o="\u53D6\u6D88",submit:n,submitText:a="\u786E\u5B9A",title:i="Modal \u5F39\u7A97",className:l,children:c,delay:d=250,...h})=>{const p=["modal-wrap",t?"open":"",...l?.split(" ")??[]].filter(Boolean).map(u=>vt[u]).join(" ");return(0,s.jsx)(Et,{open:t,close:e,delay:d,hasMask:r,className:"huxy-modal",children:(0,s.jsx)("div",{className:p,...h,children:(0,s.jsxs)("div",{className:k.QN,children:[(0,s.jsx)("div",{className:k.k3,children:i}),(0,s.jsx)("div",{className:k.Y8,children:c}),(0,s.jsxs)("div",{className:k.ww,children:[(0,s.jsx)("div",{className:`${k.HM} ${k.kb}`,onClick:u=>e?.(u),children:o}),(0,s.jsx)("div",{className:`${k.HM} ${k.pG}`,onClick:u=>n?.(u),children:a})]})]})})})},io=no;var pt=m(670),ot={};ot.styleTagTransform=R(),ot.setAttributes=M(),ot.insert=O().bind(null,"head"),ot.domAPI=D(),ot.insertStyleElement=I();var Xa=T()(pt.A,ot);const Ga=pt.A&&pt.A.locals?pt.A.locals:void 0,lo=({global:t,absolute:e})=>(0,s.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,s.jsx)("figure",{className:"spinning"})}),Pt=lo;var U=m(945),at={};at.styleTagTransform=R(),at.setAttributes=M(),at.insert=O().bind(null,"head"),at.domAPI=D(),at.insertStyleElement=I();var Za=T()(U.Ay,at);const Qa=U.Ay&&U.Ay.locals?U.Ay.locals:void 0,so=t=>t?.filter?.(e=>typeof e=="function"),co=({loading:t,title:e,plugins:r,children:o,className:n,ref:a,...i})=>{const l=(0,f.useRef)(),c=so(r),d=c?.length,h=n?` ${n}`:"",p=B(a)?a:l;return(0,s.jsxs)("div",{className:`${U.nd}${h}`,...i,ref:p,children:[(e||d)&&(0,s.jsxs)("div",{className:U.$d,children:[e&&(0,s.jsx)("h4",{className:U.w_,children:e}),d&&(0,s.jsx)("div",{className:U.kv,children:c.map((u,x)=>(0,s.jsx)("span",{className:`link ${U.nf}`,children:(0,s.jsx)(u,{panel:p})},x))})]}),(0,s.jsx)("div",{className:U.CG,children:o}),t&&(0,s.jsx)(Pt,{})]})},ho=co,uo=t=>Dt(t)==="array",At=uo,po=t=>At(t)&&!!t.length,fo=po,xo=({to:t,preventDefault:e,stopPropagation:r,...o})=>e?(0,s.jsx)("span",{...o}):(0,s.jsx)("a",{href:t,...o}),mo=({item:t,...e})=>(0,s.jsx)("ul",{...e}),yo=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(o=>{r[o]=n=>t[o](n,...e)}),r},Jt=({data:t=[],events:e={},List:r=mo,Link:o=xo,leftIcon:n,rightIcon:a,isHorizontal:i,isCollapsed:l,level:c=0,parentOpen:d=!0})=>{const h=l&&!c,p=!i&&!l&&!d;return t.map(u=>{const{name:x,path:g,icon:y,rightIcon:_,active:v,open:w,children:C,linkProps:z}=u,H=fo(C),P=u.id||`${g}${u.childSameRouteLevel??""}`,$=h?u.title??x:void 0,j=p?"hidden":"",F=y??n,S=_??a,V=F?(0,s.jsx)("div",{className:"node-left-icon",children:F===!0?(0,s.jsx)("i",{className:"default-left-icon"}):F}):null,dt=x?(0,s.jsx)("div",{className:"node-text",children:(0,s.jsx)("span",{children:x})}):null;if(H){const re=yo(e,u,c),oe=[j,w?"open":""].filter(Boolean).join(" ");return(0,s.jsxs)("li",{className:oe,"has-children":"true",...re,children:[(0,s.jsxs)(o,{title:$,className:`link${v?" active":""}`,to:g,preventDefault:!0,stopPropagation:!1,...z,children:[V,dt,S?(0,s.jsx)("div",{className:"node-right-icon",children:S===!0?(0,s.jsx)("i",{className:"default-right-icon"}):S}):null]}),(0,s.jsx)(r,{item:u,children:Jt({data:C,events:e,List:r,Link:o,leftIcon:n,rightIcon:a,isHorizontal:i,isCollapsed:l,level:c+1,parentOpen:!!w})})]},P)}return(0,s.jsx)("li",{className:j,children:(0,s.jsxs)(o,{title:$,className:`link${v?" active":""}`,to:g,...z,children:[V,dt]})},P)})},qt=Jt,_o=(t,...e)=>(0,s.jsx)("div",{"v-html":t,...e}),go=_o;var ft=m(473),nt={};nt.styleTagTransform=R(),nt.setAttributes=M(),nt.insert=O().bind(null,"head"),nt.domAPI=D(),nt.insertStyleElement=I();var Ja=T()(ft.A,nt);const qa=ft.A&&ft.A.locals?ft.A.locals:void 0,bo=t=>(0,s.jsx)("div",{style:{padding:"6px 15px"},children:t}),vo=({activekey:t,tabs:e=[],switchTab:r,trackColor:o,flex:n,ref:a,...i})=>{const[l,c]=(0,f.useState)(t??e[0]?.key),[d,h]=(0,f.useState)({}),p=(0,f.useRef)({}),u=(0,f.useRef)();(0,f.useEffect)(()=>{const y=p.current[l];y&&x(y)},[]);const x=y=>{const{left:_,width:v}=J(y),w=J(u.current).left;h({left:_-w,width:v})},g=(y,_)=>{y.stopPropagation(),c(_),typeof r=="function"&&r(_),x(y.currentTarget)};return(0,s.jsxs)("div",{className:"tabs-header-wrap",...i,ref:a,children:[(0,s.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:u,children:e.map(y=>(0,s.jsx)("li",{ref:_=>p.current[y.key]=_,className:`th-item${l===y.key?" active":""}`,onClick:_=>g(_,y.key),children:typeof y.renderTabs=="function"?y.renderTabs(y,l===y.key):bo(y.value)},y.key))}),(0,s.jsx)("div",{className:"th-track",style:{...d,color:o}})]})},wo=vo,ko=(t,e,r="id",o="children")=>{if(!At(t))return null;const n=a=>{for(let i=0,l=a.length;i<l;i++){const c=a[i];if(c[r]===e)return[c];if(At(c[o])){const d=n(c[o]);if(d)return[c].concat(d)}}};return n(t)},Eo=ko,Co=t=>++t,Po=()=>{const[,t]=(0,f.useState)(0);return(0,f.useCallback)(()=>t(Co),[])},Ao=Po,te=t=>{const{children:e,open:r}=t;let o=0;if(r&&e?.length){o=e.length;let n=0;return e.map(a=>n+=te(a)),o+n}return o},zo=({item:t,style:e,...r})=>(0,s.jsx)("ul",{style:{...e,"--count":te(t)},...r}),jo=zo;var xt=m(133),it={};it.styleTagTransform=R(),it.setAttributes=M(),it.insert=O().bind(null,"head"),it.domAPI=D(),it.insertStyleElement=I();var tn=T()(xt.A,it);const en=xt.A&&xt.A.locals?xt.A.locals:void 0,So=t=>(0,s.jsx)("ul",{...t}),To=(t,e)=>t?jo:({item:r,...o})=>(0,s.jsx)(So,{className:e==="right"?"left":"",...o}),Do=t=>{const{data:e=[],collapsed:r=!1,type:o="vertical",Link:n,width:a,bgColor:i,itemHeight:l,collapsedWidth:c,itemPadding:d,style:h,className:p,...u}=t,x=(0,f.useRef)(),g=(0,f.useRef)();(0,f.useEffect)(()=>()=>clearTimeout(x.current),[]);const y=Ao(),_=o==="horizontal",v=!_&&r,w={onClick:(j,F)=>{if(j.stopPropagation(),!_&&!v){const S=Eo(e,F.path,"path"),V=S[S.length-1];V.open=!V.open,y()}},onMouseEnter:(j,F,S)=>{v&&!S&&(clearTimeout(x.current),g.current.style.width="var(--maxWidth)")},onMouseLeave:(j,F,S)=>{v&&!S&&(x.current=setTimeout(()=>g.current.style.width="",200))}},C=(_?["huxy-horizontal-tree",p]:["huxy-tree",p,v?"collapsed":""]).filter(Boolean).join(" "),{float:z,...H}=u?.style??{},P={"--bgColor":i,"--itemHeight":l,"--nodeListWidth":a,...H};_?(P["--itemPadding"]=d,P["--nodeFloat"]=z):(P["--width"]=a,P["--collapsedWidth"]=c);const $=To(!_&&!v,z);return(0,s.jsx)("div",{ref:g,className:C,style:P,...u,children:(0,s.jsx)("div",{className:"huxy-tree-track",children:(0,s.jsx)("ul",{className:"huxy-tree-root",children:qt({data:e,events:w,List:$,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:_,isCollapsed:v})})})})},Oo=Do,Mo=()=>{const[t,e]=It(G());return(0,f.useEffect)(()=>{const r=()=>e(G());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},Io=Mo,ee=({menu:t,curName:e,Link:r})=>t.map(o=>{const{path:n,name:a,open:i,children:l}=o,c=a===e;return l?.length?(0,s.jsxs)("li",{className:i?"open":"",children:[(0,s.jsx)(r,{to:{query:{name:a}},className:`link${c?" active":""}`,preventDefault:!0,children:(0,s.jsx)("span",{children:a})}),(0,s.jsx)("ul",{children:(0,s.jsx)(ee,{menu:l,curName:a,Link:r})})]},n||a):(0,s.jsx)("li",{children:(0,s.jsx)(r,{to:{query:{name:a}},className:`link${c?" active":""}`,children:(0,s.jsx)("span",{children:a})})},n||a)}),Ro=ee,Wo=(t=0,e)=>{N()&&(e=B(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},Bo=Wo,Lo=()=>N()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),No=Lo,Uo=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}},Fo=Uo,Ho=(t,e=null,r=!1)=>[...t||[]].sort((o,n)=>{const a=e?o[e]:o,i=e?n[e]:n;return!isNaN(Number(a))&&!isNaN(Number(a))?r?i-a:a-i:typeof a=="string"&&typeof i=="string"?r?i.localeCompare(a):a.localeCompare(i):typeof a=="string"&&typeof i=="number"?r?-1:1:typeof a=="number"||typeof a=="string"?r?1:-1:r?-1:1}),$o=Ho,Ko=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Yo=Ko,Vo=({curName:t,itemList:e})=>{const r=(0,f.useRef)(!1),o=(0,f.useRef)(""),[n,a]=(0,f.useState)(t);return(0,f.useEffect)(()=>{const i=Yo(e.current);if(!t){const d=Object.keys(i).map(h=>({name:h,offsetTop:i[h]?.offsetTop??0}));a(d[0]?.name)}let l=0,c=0;if(o.current!==t){o.current=t;const d=i[t];r.current=!0,d?(Bo(d.offsetTop),l=setTimeout(()=>r.current=!1,1050)):c=setTimeout(()=>{window.scrollTo?.({top:i[t]?.offsetTop??0,behavior:"instant"}),l=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(l),clearTimeout(c),r.current=!1}},[t]),(0,f.useEffect)(()=>{const i=Fo(()=>{if(!r.current){const c=$o(Object.keys(e.current).map(d=>({name:d,offsetTop:e.current[d]?.offsetTop??0})),"offsetTop",!0).find(d=>d.offsetTop<No())?.name;o.current!==c&&(o.current=c,a(c))}});return window.addEventListener("scroll",i,!1),()=>window.removeEventListener("scroll",i,!1)},[]),[n]},Xo=Vo,Go=/!\[.*\]\((.*)\)/g,Zo=async(t,e,r)=>{const o={};for(let n=0,a=t.length;n<a;n++){const i=t[n],l=i.slice(2);o[i]=await r({folder:e,name:l})}return o},Qo=async(t,{folder:e},r)=>{const n=[...t.matchAll(Go)].filter(Boolean).map(a=>a[1]);if(n?.length){const a=await Zo(n,e,r);n.map(i=>{t=t.replace(i,a[i])})}return t},Jo=Qo,qo=({item:t,marked:e,getContext:r})=>{const[o,n]=(0,f.useState)("");return(0,f.useEffect)(()=>{(async()=>{try{const i=await r({...t,type:".md"}),l=await Jo(i,t,r),c=typeof e=="function"?e.parse(l):c;n(c)}catch(i){n(i?.message)}})()},[]),(0,s.jsxs)("div",{className:"huxy-content",children:[Ct(o),!o&&(0,s.jsx)(Pt,{global:!0})]})},ta=qo,ea=({router:t,curName:e,context:r,marked:o,getContext:n})=>{const a=(0,f.useRef)({}),[i]=Xo({curName:e,itemList:a});return(0,f.useEffect)(()=>{i&&t.push({query:{name:i}})},[i]),(0,s.jsx)("div",{className:"huxy-anchor-page",children:r.map((l,c)=>(0,s.jsxs)("div",{className:"huxy-anchor-item",ref:d=>a.current[l.name]=d,children:[(0,s.jsx)("h2",{children:`${l.name}`}),(0,s.jsx)(ta,{item:l,marked:o,getContext:n})]},l.name))})},ra=ea,oa=t=>{const e=[];return t.map(r=>{const[o,n]=r.name.split("/"),a=e.find(i=>i.name===o);a?a.children.push({name:n,folder:o}):e.push({name:o,children:[{name:n,folder:o}]})}),e},aa=oa;var mt=m(55),lt={};lt.styleTagTransform=R(),lt.setAttributes=M(),lt.insert=O().bind(null,"head"),lt.domAPI=D(),lt.insertStyleElement=I();var rn=T()(mt.A,lt);const on=mt.A&&mt.A.locals?mt.A.locals:void 0,na=(t,e,r)=>({sidebar:t.find(o=>o.name===e)?.children??[],listEle:t.map(({name:o,children:n})=>(0,s.jsx)("li",{children:(0,s.jsx)(r,{to:{query:{folder:o,name:n[0]?.name}},className:`link${o===e?" active":""}`,children:(0,s.jsx)("span",{children:o})})},o))}),ia=t=>{const{params:e,router:r,Link:o,listFiles:n,getContext:a,marked:i,title:l,routeLink:c,routeName:d,className:h,style:p}=t,{folder:u,name:x}=e,{width:g}=Io(),[y,_]=(0,f.useState)([]),[v,w]=(0,f.useState)(!1);(0,f.useEffect)(()=>{(async()=>{const $=await n(),j=aa($);_(j),u||r.push({query:{folder:j[0]?.name,name:j[0]?.children[0]?.name}})})()},[]);const C=g<=1024,{sidebar:z,listEle:H}=na(y,u,o);return(0,s.jsxs)("div",{className:`huxy-doc-frame ${h??""}`,style:p,children:[(0,s.jsxs)("div",{className:"huxy-doc-header",children:[(0,s.jsx)("div",{className:"huxy-doc-banner",children:l||"\u6587\u6863\u7CFB\u7EDF"}),(0,s.jsx)("ul",{className:"huxy-doc-nav",children:C?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{className:"huxy-doc-collapsed",children:(0,s.jsx)("span",{className:"link",onClick:P=>{P.stopPropagation(),w(!v)},children:(0,s.jsx)(St,{type:v?"right":""})})}),(0,s.jsx)(Bt,{open:v,close:()=>w(!1),width:"220px",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-drawer",children:H})})]}):H}),c?(0,s.jsx)("div",{className:"huxy-doc-back",children:(0,s.jsx)(o,{to:c,children:(0,s.jsx)("span",{children:d??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,s.jsxs)("div",{className:"huxy-doc-container",children:[(0,s.jsx)("div",{className:"huxy-doc-main-page",children:(0,s.jsx)(ra,{router:r,curName:x,context:z,marked:i,getContext:a})}),(0,s.jsx)("div",{className:"huxy-doc-menu",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,s.jsx)(Ro,{menu:z,curName:x,Link:o})})})]})]})},la=ia;var sa=b.Rt,ca=b.L8,da=b.FN,ha=b.fv,ua=b._s,pa=b.ey,fa=b.gy,xa=b.tH,ma=b.PQ,ya=b.xA,_a=b.lz,ga=b.Xb,ba=b.n1,va=b.mk,wa=b.Bl,ka=b.aF,Ea=b.Zk,Ca=b.ZL,Pa=b.fI,Aa=b.y$,za=b.tu,ja=b.m_,Sa=b.PH,Ta=b.mK,Da=b.J0,Oa=b.B6,Ma=b.fz,Ia=b.Iu;export{sa as Anico,ca as Base64Image,da as Carousel,ha as Col,ua as Drawer,pa as Drop,fa as Ellipsis,xa as ErrorBoundary,ma as FullPage,ya as Grid,_a as HandleError,ga as LoadError,ba as Mask,va as MaxSize,wa as Md2html,ka as Modal,Ea as Panel,Ca as Portal,Pa as Row,Aa as Spinner,za as TabHeader,ja as Tooltip,Sa as Tree,Ta as fixEle,Da as fixIcon,Oa as renderTree,Ma as str2React,Ia as str2Vue};
