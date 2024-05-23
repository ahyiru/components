import*as ot from"react";import*as ie from"react-dom";var Fr={87:(x,h,l)=>{l.d(h,{Ay:()=>j,VN:()=>P,ZH:()=>_,Zx:()=>k,pG:()=>A,sQ:()=>D,t6:()=>w,v7:()=>O});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`/*@height:2px;
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
  content: "";
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
`,""]);var k="nstud",w="IZUmD",P="ylzxZ",A="Wy_0M",D="bdjKS",_="QPs9T",O="tx7CH";const j=c},587:(x,h,l)=>{l.d(h,{Ay:()=>O,Om:()=>D,Ri:()=>w,S$:()=>A,UM:()=>k,fv:()=>P,vu:()=>_});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.kLIGi {
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
`,""]);var k="kLIGi",w="XoNs4",P="x4UPo",A="qYuQn",D="GU0qu",_="svhYU";const O=c},724:(x,h,l)=>{l.d(h,{Ay:()=>U,Ih:()=>F,Vn:()=>k,Y8:()=>O,_I:()=>_,ho:()=>w,iD:()=>D,kb:()=>A,pG:()=>P,pz:()=>j});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`@keyframes animate-drawer-right-in {
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
  content: "\\00D7";
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
`,""]);var k="KsHNu",w="c6aFy",P="mlowE",A="w0B0d",D="W4gG3",_="SMORg",O="e3AWW",j="VSVwl",F="hlj9r";const U=c},468:(x,h,l)=>{l.d(h,{Ay:()=>A,Zr:()=>w,ho:()=>P,og:()=>k});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`@keyframes animate-drop-in {
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
  content: "";
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
`,""]);var k="TEYHV",w="NCYpg",P="qjBWI";const A=c},55:(x,h,l)=>{l.d(h,{A:()=>k});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.huxy-doc-frame {
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
`,""]);const k=c},482:(x,h,l)=>{l.d(h,{Ay:()=>U,HM:()=>O,QN:()=>P,R8:()=>k,Y8:()=>D,ho:()=>w,k3:()=>A,kb:()=>j,pG:()=>F,ww:()=>_});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`@keyframes animate-modal-in {
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
`,""]);var k="SqXAN",w="S3vb_",P="RiDlb",A="xdqLE",D="C91AO",_="J6dpF",O="XOnmm",j="t1Fx9",F="YGj9K";const U=c},945:(x,h,l)=>{l.d(h,{$d:()=>D,Ay:()=>F,CG:()=>A,kv:()=>O,nd:()=>k,nf:()=>j,w_:()=>_});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.clear::after {
  clear: both;
  content: "";
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
  content: "";
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
  content: "";
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
`,""]);var k="J8VWE",w=null,P=null,A="rOxNb",D="OQwTX",_="W_1K6",O="eCk2_",j="R2Mku";const F=c},531:(x,h,l)=>{l.d(h,{A:()=>k});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.cols-1 {
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
.row [class^="col-"] {
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
`,""]);const k=c},670:(x,h,l)=>{l.d(h,{A:()=>k});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`@keyframes before {
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
  content: "";
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
`,""]);const k=c},473:(x,h,l)=>{l.d(h,{A:()=>k});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.clear::after {
  clear: both;
  content: "";
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
  content: "";
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
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: currentColor;
}
`,""]);const k=c},700:(x,h,l)=>{l.d(h,{$x:()=>D,Ay:()=>j,E9:()=>A,Vz:()=>w,ZG:()=>P,gO:()=>k,l3:()=>O,o7:()=>_});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.ofth_ {
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
`,""]);var k="ofth_",w="hVmF3",P="uzFyE",A="Giihu",D="bFVVt",_="oGmKq",O="svYWD";const j=c},133:(x,h,l)=>{l.d(h,{A:()=>k});var g=l(758),p=l.n(g),o=l(935),d=l.n(o),c=d()(p());c.push([x.id,`.node-right-icon-close {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
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
  content: "";
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
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
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
  content: "";
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
  content: "";
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
`,""]);const k=c},935:x=>{x.exports=function(h){var l=[];return l.toString=function(){return this.map(function(p){var o="",d=typeof p[5]<"u";return p[4]&&(o+="@supports (".concat(p[4],") {")),p[2]&&(o+="@media ".concat(p[2]," {")),d&&(o+="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {")),o+=h(p),d&&(o+="}"),p[2]&&(o+="}"),p[4]&&(o+="}"),o}).join("")},l.i=function(p,o,d,c,k){typeof p=="string"&&(p=[[null,p,void 0]]);var w={};if(d)for(var P=0;P<this.length;P++){var A=this[P][0];A!=null&&(w[A]=!0)}for(var D=0;D<p.length;D++){var _=[].concat(p[D]);d&&w[_[0]]||(typeof k<"u"&&(typeof _[5]>"u"||(_[1]="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {").concat(_[1],"}")),_[5]=k),o&&(_[2]&&(_[1]="@media ".concat(_[2]," {").concat(_[1],"}")),_[2]=o),c&&(_[4]?(_[1]="@supports (".concat(_[4],") {").concat(_[1],"}"),_[4]=c):_[4]="".concat(c)),l.push(_))}},l}},758:x=>{x.exports=function(h){return h[1]}},197:(x,h)=>{var l=Symbol.for("react.transitional.element"),g=Symbol.for("react.fragment");function p(o,d,c){var k=null;if(c!==void 0&&(k=""+c),d.key!==void 0&&(k=""+d.key),"key"in d){c={};for(var w in d)w!=="key"&&(c[w]=d[w])}else c=d;return d=c.ref,{$$typeof:l,type:o,key:k,ref:d!==void 0?d:null,props:c}}h.Fragment=g,h.jsx=p,h.jsxs=p},85:(x,h,l)=>{x.exports=l(197)},591:x=>{var h=[];function l(o){for(var d=-1,c=0;c<h.length;c++)if(h[c].identifier===o){d=c;break}return d}function g(o,d){for(var c={},k=[],w=0;w<o.length;w++){var P=o[w],A=d.base?P[0]+d.base:P[0],D=c[A]||0,_="".concat(A," ").concat(D);c[A]=D+1;var O=l(_),j={css:P[1],media:P[2],sourceMap:P[3],supports:P[4],layer:P[5]};if(O!==-1)h[O].references++,h[O].updater(j);else{var F=p(j,d);d.byIndex=w,h.splice(w,0,{identifier:_,updater:F,references:1})}k.push(_)}return k}function p(o,d){var c=d.domAPI(d);c.update(o);var k=function(P){if(P){if(P.css===o.css&&P.media===o.media&&P.sourceMap===o.sourceMap&&P.supports===o.supports&&P.layer===o.layer)return;c.update(o=P)}else c.remove()};return k}x.exports=function(o,d){d=d||{},o=o||[];var c=g(o,d);return function(w){w=w||[];for(var P=0;P<c.length;P++){var A=c[P],D=l(A);h[D].references--}for(var _=g(w,d),O=0;O<c.length;O++){var j=c[O],F=l(j);h[F].references===0&&(h[F].updater(),h.splice(F,1))}c=_}}},128:x=>{var h={};function l(p){if(typeof h[p]>"u"){var o=document.querySelector(p);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}h[p]=o}return h[p]}function g(p,o){var d=l(p);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(o)}x.exports=g},51:x=>{function h(l){var g=document.createElement("style");return l.setAttributes(g,l.attributes),l.insert(g,l.options),g}x.exports=h},855:(x,h,l)=>{function g(p){var o=l.nc;o&&p.setAttribute("nonce",o)}x.exports=g},740:x=>{function h(p,o,d){var c="";d.supports&&(c+="@supports (".concat(d.supports,") {")),d.media&&(c+="@media ".concat(d.media," {"));var k=typeof d.layer<"u";k&&(c+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),c+=d.css,k&&(c+="}"),d.media&&(c+="}"),d.supports&&(c+="}");var w=d.sourceMap;w&&typeof btoa<"u"&&(c+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(w))))," */")),o.styleTagTransform(c,p,o.options)}function l(p){if(p.parentNode===null)return!1;p.parentNode.removeChild(p)}function g(p){if(typeof document>"u")return{update:function(){},remove:function(){}};var o=p.insertStyleElement(p);return{update:function(c){h(o,p,c)},remove:function(){l(o)}}}x.exports=g},656:x=>{function h(l,g){if(g.styleSheet)g.styleSheet.cssText=l;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(l))}}x.exports=h}},le={};function v(x){var h=le[x];if(h!==void 0)return h.exports;var l=le[x]={id:x,exports:{}};return Fr[x](l,l.exports,v),l.exports}v.n=x=>{var h=x&&x.__esModule?()=>x.default:()=>x;return v.d(h,{a:h}),h},v.d=(x,h)=>{for(var l in h)v.o(h,l)&&!v.o(x,l)&&Object.defineProperty(x,l,{enumerable:!0,get:h[l]})},v.o=(x,h)=>Object.prototype.hasOwnProperty.call(x,h),v.r=x=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})},v.nc=void 0;var S={};(()=>{v.d(S,{Rt:()=>Ot,L8:()=>fe,FN:()=>ve,fv:()=>Lt,_s:()=>Ft,ey:()=>Ue,gy:()=>Ve,tH:()=>Vt,PQ:()=>tr,xA:()=>er,lz:()=>rr,Xb:()=>Qt,n1:()=>Tt,mk:()=>nr,Bl:()=>Nr,aF:()=>lr,Zk:()=>cr,ZL:()=>St,fI:()=>Zt,y$:()=>Dt,tu:()=>mr,m_:()=>Kt,PH:()=>kr,mK:()=>Yt,J0:()=>Xe,B6:()=>oe,fz:()=>jt,Iu:()=>fr});var x={};v.r(x),v.d(x,{anico:()=>H.Zx,bottom:()=>H.sQ,close:()=>H.VN,default:()=>se,hline:()=>H.t6,pause:()=>H.v7,play:()=>H.ZH,right:()=>H.pG});var h={};v.r(h),v.d(h,{default:()=>Ae,"drawer-container":()=>W.iD,"drawer-content":()=>W._I,"drawer-footer":()=>W.Ih,"drawer-header":()=>W.Y8,"drawer-wrap":()=>W.Vn,"ico-close":()=>W.pz,left:()=>W.kb,open:()=>W.ho,right:()=>W.pG});var l={};v.r(l),v.d(l,{default:()=>Le,"drop-target":()=>tt.og,"drop-wrap":()=>tt.Zr,open:()=>tt.ho});var g={};v.r(g),v.d(g,{default:()=>He,ellipsis:()=>K.gO,"huxy-tooltip":()=>K.Vz,"huxy-tooltip-bottomLeft":()=>K.o7,"huxy-tooltip-bottomRight":()=>K.$x,"huxy-tooltip-rightTop":()=>K.l3,"huxy-tooltip-topLeft":()=>K.E9,"huxy-tooltip-topRight":()=>K.ZG});var p={};v.r(p),v.d(p,{btn:()=>I.HM,default:()=>ir,left:()=>I.kb,"modal-container":()=>I.QN,"modal-content":()=>I.Y8,"modal-footer":()=>I.ww,"modal-header":()=>I.k3,"modal-wrap":()=>I.R8,open:()=>I.ho,right:()=>I.pG});var o=v(85),d=v(591),c=v.n(d),k=v(740),w=v.n(k),P=v(128),A=v.n(P),D=v(855),_=v.n(D),O=v(51),j=v.n(O),F=v(656),U=v.n(F),H=v(87),nt={};nt.styleTagTransform=U(),nt.setAttributes=_(),nt.insert=A().bind(null,"head"),nt.domAPI=w(),nt.insertStyleElement=j();var _o=c()(H.Ay,nt);const se=H.Ay&&H.Ay.locals?H.Ay.locals:void 0,Ot=t=>(0,o.jsx)("span",{className:H.Zx,children:(0,o.jsx)("span",{className:[H.t6,...(t.type||"").split(" ").map(e=>x[e]).filter(Boolean)].join(" ")})});var ce=t=>{var e={};return v.d(e,t),e},bo=t=>()=>t;const m=ce({Children:()=>ot.Children,cloneElement:()=>ot.cloneElement,default:()=>ot.default,isValidElement:()=>ot.isValidElement,useCallback:()=>ot.useCallback,useEffect:()=>ot.useEffect,useRef:()=>ot.useRef,useState:()=>ot.useState}),de=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),he=t=>new Promise((e,r)=>{const a=new FileReader;a.readAsDataURL(t),a.addEventListener("load",()=>e(a.result)),a.addEventListener("error",n=>r(n))}),ue=async t=>{if(!de(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await he(r)},pe=t=>{const[e,r]=(0,m.useState)(t);return(0,m.useEffect)(()=>{(async n=>{const i=await ue(n);r(i)})(t)},[t]),e},fe=({src:t,...e})=>{const r=pe(t);return(0,o.jsx)("img",{...e,src:r})};var xe=t=>{var e={};return v.d(e,t),e},Po=t=>()=>t;const It=xe({createPortal:()=>ie.createPortal,flushSync:()=>ie.flushSync}),me=(t,e)=>{const r=(0,m.useRef)();(0,m.useEffect)(()=>{r.current=t},[t]),(0,m.useEffect)(()=>{if(e){const a=setInterval(()=>r.current(),e);return()=>clearInterval(a)}},[e])},Q=()=>![typeof window,typeof document].includes("undefined"),Rt=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),zt=t=>Rt(t).indexOf("element")>-1,it=(t=null)=>Q()?zt(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Wt=(t=()=>{},e=60)=>{let r=null;return function(...a){clearTimeout(r),r=setTimeout(()=>t.apply(this,a),e)}},ye=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),G=t=>ye(t,"current"),Bt=(t,e)=>{const r=[],a=t.children??[];for(let n=0,i=a.length;n<i;n++){const s=a[n];s.className.indexOf(e)>-1&&r.push(s)}return r.length===0?null:r.length===1?r[0]:r},_e=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},ge=(t,e=60)=>{if(!Q())return;t=G(t)?t.current:t??document.body;let r=Bt(t,"resize-sensor"),a=[];const n=Wt(()=>a.map(f=>f(t)),e),i=f=>{Bt(t,"resize-sensor")||(r=_e(t,n)),a.indexOf(f)===-1&&a.push(f)},s=f=>{const y=a.indexOf(f);y!==-1&&a.splice(y,1),a.length===0&&r&&u()},u=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,a=[])};return{element:t,bind:i,unbind:s,destroy:u}},Nt=(t={})=>{const e=(0,m.useRef)(0),[r,a]=(0,m.useState)(t),n=(0,m.useCallback)(i=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>a(i))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},be=(t=null,e=60)=>{const r=G(t)?t.current:t,{bind:a,destroy:n}=ge(r,e),[i,s]=Nt(it(r));return(0,m.useEffect)(()=>(a(()=>r&&s(it(r))),()=>n()),[r]),i};var Z=v(587),lt={};lt.styleTagTransform=U(),lt.setAttributes=_(),lt.insert=A().bind(null,"head"),lt.domAPI=w(),lt.insertStyleElement=j();var No=c()(Z.Ay,lt);const Lo=Z.Ay&&Z.Ay.locals?Z.Ay.locals:void 0,ve=({children:t,active:e=0,delay:r=5e3,className:a,...n})=>{const[i,s]=(0,m.useState)(e+1),[u,f]=(0,m.useState)(!1),y=(0,m.useRef)(),C=(0,m.useRef)(""),{width:E}=be(y);t=Array.isArray(t)?t:[t];const b=t[0],N=[t[t.length-1],...t,b],z=N.length;me(()=>{let M=i+1;M=M===z?1:M,C.current&&(C.current=""),s(M),M===z-1&&setTimeout(()=>{C.current="none",s(1)},500)},u?null:r);const T=(M,L)=>{L.stopPropagation(),C.current="",s(M),(0,It.flushSync)(()=>f(!0)),f(!1)},B={width:`${z*E}px`,transform:`translateX(${-E*i}px)`,transition:C.current};return(0,o.jsxs)("div",{className:`${Z.UM}${a?` ${a}`:""}`,...n,ref:y,children:[(0,o.jsx)("div",{className:Z.Ri,style:B,children:N.map((M,L)=>(0,o.jsx)("div",{className:`${Z.fv} ${i===L?Z.vu:""}`,style:{width:`${E}px`},children:M},`huxy-carousel-${L}`))}),(0,o.jsx)("div",{className:Z.S$,children:t.map((M,L)=>(0,o.jsx)("span",{className:`${Z.Om} ${i===L+1?Z.vu:""}`,onClick:V=>T(L+1,V)},`huxy-carousel-switch-${L}`))})]})},gt=(t,e)=>{let r="",a="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:i}=e;r=n?`col-${t}-${n}`:"",a=i?`offset-${t}-${i}`:""}return{sp:r,os:a}},Lt=({span:t,offset:e,xl:r,lg:a,md:n,sm:i,xs:s,style:u,width:f,auto:y,offsetWidth:C="0px",className:E,ref:b,...R})=>{const N=E?` ${E}`:"",z=`col-${t||12}`,T=e?`offset-${e}`:"",{sp:B,os:M}=gt("xs",s),{sp:L,os:V}=gt("sm",i),{sp:et,os:$}=gt("md",n),{sp:rt,os:Y}=gt("lg",a),{sp:q,os:X}=gt("xl",r),at=[z,q,rt,et,L,B,T,X,Y,$,V,M].filter(Boolean).join(" "),At=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${C})`}:{width:f};return(0,o.jsx)("div",{className:`${at}${N}`,...R,style:{...At,...u},ref:b})},we=()=>{const t=(0,m.useRef)(!0);return t.current?(t.current=!1,!0):!1},ke=(t,e=[])=>{const r=we();(0,m.useEffect)(()=>{if(!r)return t()},e)},Ut=(t,e=450)=>{const[r,a]=(0,m.useState)(t);return ke(()=>{let n;return t||e===0?a(t):n=setTimeout(()=>a(t),e),()=>n&&clearTimeout(n)},[t]),[r,a]},St=({children:t,mountNode:e=document.body})=>(0,It.createPortal)(t,e),Ee={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Ce={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Pe=document.body,Tt=({open:t,close:e,delay:r=300,children:a,mountNode:n,hasMask:i=!0,style:s,className:u="h-mask",relative:f})=>{const[y]=Ut(t,r);(n??Pe).style.overflow=y?"hidden":"";const C=f?"absolute":"fixed";return(0,o.jsx)(St,{mountNode:n,children:(0,o.jsx)("div",{children:y?(0,o.jsxs)("div",{className:u,style:{...Ee,position:C},children:[i?(0,o.jsx)("div",{style:{...Ce,position:C},onClick:E=>e?.(E)}):null,m.Children.map(a,E=>(0,m.isValidElement)(E)?(0,m.cloneElement)(E,{style:{position:"relative",zIndex:100001,...E.props.style}}):E)]}):null})})};var W=v(724),st={};st.styleTagTransform=U(),st.setAttributes=_(),st.insert=A().bind(null,"head"),st.domAPI=w(),st.insertStyleElement=j();var Xo=c()(W.Ay,st);const Ae=W.Ay&&W.Ay.locals?W.Ay.locals:void 0,Ft=({open:t,close:e,footer:r,header:a,className:n,style:i,children:s,width:u="300px",mountNode:f,position:y="right",relative:C})=>{const E=["drawer-wrap",y,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(b=>h[b]).join(" ");return(0,o.jsx)(Tt,{open:t,close:e,delay:250,hasMask:!0,relative:C,mountNode:f,className:"huxy-drawer",children:(0,o.jsx)("div",{className:E,style:{width:u,position:C?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":a?"44px":"0px",...i},children:(0,o.jsxs)("div",{className:W.iD,children:[a?(0,o.jsxs)("div",{className:W.Y8,children:[y==="right"?(0,o.jsx)("span",{className:`link ${W.pz}`,onClick:b=>e?.(b)}):null,(0,o.jsx)("div",{children:a}),y==="left"?(0,o.jsx)("span",{className:`link ${W.pz}`,onClick:b=>e?.(b)}):null]}):null,(0,o.jsx)("div",{className:W._I,children:s}),r?(0,o.jsx)("div",{className:W.Ih,children:r}):null]})})})},ze=(t,e,r="click")=>{(0,m.useEffect)(()=>{const a=i=>{const s=G(t)?t.current:t;s?.contains&&!s.contains(i.target)&&e(i)},n=typeof r=="string"?[r]:r;return n.map(i=>{document.addEventListener(i,a,!1)}),()=>{n.map(i=>{document.removeEventListener(i,a,!1)})}},[t,e,r])},Se=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&["react.transitional.element","react.element"].includes(t.$$typeof.description),Te=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),ct=t=>{if(Q())return t=G(t)?t.current:t??document.body,t.getBoundingClientRect?.()},je=t=>{if(!Q())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},bt=(t,e={},r=!1)=>{if(zt(t)){if(r){let a="";Object.keys(e).map(n=>{a+=`${n}: ${e[n]};`}),t.style=a;return}Object.keys(e).map(a=>t.style.setProperty(a,e[a]))}},De=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,Me=(t=350,e="ms")=>new Promise(r=>setTimeout(r,De(t,e))),ra=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},Oe=Me,Ie=async(t,e=15)=>{if(!Q())return;if(typeof t=="string"&&(t=je(t)),t=G(t)?t.current:t,!zt(t))return{};const r=t.cloneNode(!0);bt(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await Oe(e);const a=ct(r);return t.parentNode.removeChild(r),a},Re=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,We=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Re.test(r)?t.setAttribute("class",r.replace(We,e)):t.setAttribute("class",`${r} ${e}`)},$t=async(t,e,r)=>{const{left:a,right:n,top:i,bottom:s}=ct(t),{width:u,height:f}=it(),{width:y,height:C}=await Ie(e);if(n<0||s<0||a>u||i>f)return{};if(r==="vertical"){const E={left:a+"px",top:s+10+"px",right:"auto",bottom:"auto"};let b="lt";a+y>u&&(E.left=n-y+"px",b="rt"),s+10+C>f&&(E.top=i-10-C+"px",b=b==="lt"?"lb":"rb"),bt(e,E),Ht(e,b)}else{const E={left:n+10+"px",top:i+"px",right:"auto",bottom:"auto"};let b="tl";n+10+y>u&&(E.left=a-10-y+"px",b="tr"),i+C>f&&(E.top=s-C+"px",b=b==="tl"?"bl":"br"),bt(e,E),Ht(e,b)}},Be=(t,e,r="horizontal")=>{const a=Wt($t),n=()=>a(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const i=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),bt(e,{left:"",top:"",right:"",bottom:""})};return $t(t,e,r),i},Ne=({open:t,delay:e=280,children:r,mountNode:a,style:n,...i})=>{const[s]=Ut(t,e);return(0,o.jsx)(St,{mountNode:a,children:(0,o.jsx)("div",{children:(0,o.jsx)("div",{style:{...n,display:s?"block":"none"},...i,children:r})})})};var tt=v(468),dt={};dt.styleTagTransform=U(),dt.setAttributes=_(),dt.insert=A().bind(null,"head"),dt.domAPI=w(),dt.insertStyleElement=j();var ia=c()(tt.Ay,dt);const Le=tt.Ay&&tt.Ay.locals?tt.Ay.locals:void 0,Ue=({trigger:t="click",type:e,dropList:r,className:a,children:n,targetProps:i,...s})=>{const[u,f]=(0,m.useState)(!1),y=(0,m.useRef)(),C=(0,m.useRef)(),E=(0,m.useRef)();ze(y,T=>u&&f(!1),[...new Set(["click",t.toLowerCase()])]),(0,m.useEffect)(()=>()=>E.current?.(),[]);const b=T=>{T.preventDefault(),f(!0),E.current=Be(y.current,C.current,e)},R={[`on${Te(t)}`]:b},N=["drop-wrap",u?"open":"",a].filter(Boolean).map(T=>l[T]).join(" "),z=Se(r)?r:r?.(()=>f(!1),u);return(0,o.jsxs)("span",{ref:y,className:tt.og,...i,...R,children:[n,(0,o.jsx)(Ne,{open:u,className:"huxy-drop",children:(0,o.jsx)("div",{ref:C,className:N,...s,children:z})})]})},Fe=(t,e,r)=>{if(!Q())return;r=G(r)?r.current:r??document.body;const a=document.createElement("span");a.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&bt(a,e),a.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(a);const n=a.getBoundingClientRect();return r.removeChild(a),n};var K=v(700),ht={};ht.styleTagTransform=U(),ht.setAttributes=_(),ht.insert=A().bind(null,"head"),ht.domAPI=w(),ht.insertStyleElement=j();var ca=c()(K.Ay,ht);const He=K.Ay&&K.Ay.locals?K.Ay.locals:void 0,Kt=({title:t,placement:e="topRight",children:r,ellipsis:a,className:n,...i})=>(0,o.jsx)("span",{className:`${g[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...i,children:(0,o.jsx)("span",{className:a?K.gO:"",children:r})}),$e={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Ke=t=>{const{children:e,style:r}=t,a=typeof e=="string",n=a?e:e?.props?.title??e?.props?.children,i=(0,m.useRef)(),[s,u]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{if(i.current){const{width:f}=Fe(n,null,i.current.parentNode),{width:y}=ct(i.current),C=~~f>~~y;C!==s&&u(C)}},[n]),(0,o.jsx)("span",{ref:i,style:{display:"flex",width:"100%",...r},children:s?a?(0,o.jsx)(Kt,{...t,ellipsis:!0}):(0,o.jsx)("span",{style:$e,children:e}):a?e:e?.props?.children})},Ve=t=>t.children==null?"":(0,o.jsx)(Ke,{...t});class Vt extends m.default.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:a}=this.props;typeof a=="function"&&a({error:e,info:r.componentStack})}render(){const{error:e}=this.state,{fallback:r,children:a}=this.props;return e?r?.(e)??e:a}}const Yt=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,o.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,o.jsx)(r,{}):(0,o.jsx)("i",{className:e})}return e??null},Ye=t=>Yt(t),Xe=t=>({icon:e,defaultIcon:r})=>e?Ye(t)(e):e===!1?null:r,vt=["","webkit","moz","ms"],Ge=t=>vt.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Ze=t=>vt.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Qe=t=>vt.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Xt=vt.map(t=>`${t}fullscreenchange`),Je=t=>{if(!Q())return;t=G(t)?t.current:t??document.body;const e=Ge(document),r=Ze(t),a=Qe(document);document[e]?document[a]?.():t[r]?.()},qe=t=>Q()?(Xt.map(r=>document.addEventListener(r,t,!1)),()=>Xt.map(r=>document.removeEventListener(r,t,!1))):void 0,Gt=t=>(0,o.jsx)("i",{...t,children:"..."}),tr=({panel:t,fullIcon:e=Gt,exitIcon:r=Gt,...a})=>{const n=G(t)?t.current:t,[i,s]=(0,m.useState)();(0,m.useEffect)(()=>{const f=qe(()=>{s(y=>!y)});return()=>f()},[]);const u=i?r:e;return(0,o.jsx)(u,{onClick:f=>Je(n),...a})};var wt=v(531),ut={};ut.styleTagTransform=U(),ut.setAttributes=_(),ut.insert=A().bind(null,"head"),ut.domAPI=w(),ut.insertStyleElement=j();var ya=c()(wt.A,ut);const _a=wt.A&&wt.A.locals?wt.A.locals:void 0,Zt=({gutter:t=10,className:e,overflow:r="hidden",ref:a,...n})=>{const i=e?` ${e}`:"";let s=10;if(Array.isArray(t)){const u=[...t];t=u[0],s=u[1]??u[0]}return(0,o.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(s/2)}px`,overflow:r},children:(0,o.jsx)("div",{className:`row${i}`,...n,ref:a})})},er=({rowProps:t,colProps:e,children:r,Row:a=Zt,Col:n=Lt})=>{const i=[];return m.Children.map(r,s=>{s&&(s.type?.description==="react.fragment"?i.push(...s.props.children):i.push(s))}),(0,o.jsx)(a,{...t,children:i.map((s,u)=>(0,o.jsx)(n,{...e,...s.props.itemprops,children:s},`huuxy_grid_${u}`))})},jt=(t,e)=>(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),Qt=t=>{const{error:e={},info:r=""}=t||{},{message:a,stack:n,errMsg:i}=e;let s=i||n||e.toString();s=`${s}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),s=s.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),s=s.replace(/\s/g,"&nbsp;");const u=a?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,o.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[jt(s,{style:{color:"red"}}),u&&(0,o.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${u}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},rr=({children:t,report:e})=>{const r=(0,m.useRef)();return r.current?.state&&(r.current.state.error=null),(0,o.jsx)(Vt,{ref:r,fallback:(a,n)=>Qt({error:a,info:n}),errorReport:e,children:t})},Jt=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),or=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),ar={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},qt=({left:t,top:e,width:r,height:a})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${a}px`}),te=t=>(0,o.jsx)("i",{...t,children:"..."}),ee=t=>{const{left:e,top:r}=ct(t),{width:a,height:n}=it(t);return{left:e,top:r,width:a,height:n}},nr=({panel:t,target:e,fullIcon:r=te,exitIcon:a=te})=>{t=G(t)?t.current:t||document.body;const[n,i]=(0,m.useState)(),s=(0,m.useRef)();(0,m.useEffect)(()=>{s.current={...ar,...qt(ee(t))}},[t]);const u=(y,C)=>{if(y){const b=qt(ee((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));Jt(C,s.current),setTimeout(()=>{Jt(C,b)},0)}else or(C,s.current);i(y)},f=n?a:r;return(0,o.jsx)(f,{onClick:y=>u(!n,t)})};var I=v(482),pt={};pt.styleTagTransform=U(),pt.setAttributes=_(),pt.insert=A().bind(null,"head"),pt.domAPI=w(),pt.insertStyleElement=j();var Ca=c()(I.Ay,pt);const ir=I.Ay&&I.Ay.locals?I.Ay.locals:void 0,lr=({open:t,close:e,hasMask:r=!0,cancelText:a="\u53D6\u6D88",submit:n,submitText:i="\u786E\u5B9A",title:s="Modal \u5F39\u7A97",className:u,children:f,delay:y=250,...C})=>{const E=["modal-wrap",t?"open":"",...u?.split(" ")??[]].filter(Boolean).map(b=>p[b]).join(" ");return(0,o.jsx)(Tt,{open:t,close:e,delay:y,hasMask:r,className:"huxy-modal",children:(0,o.jsx)("div",{className:E,...C,children:(0,o.jsxs)("div",{className:I.QN,children:[(0,o.jsx)("div",{className:I.k3,children:s}),(0,o.jsx)("div",{className:I.Y8,children:f}),(0,o.jsxs)("div",{className:I.ww,children:[(0,o.jsx)("div",{className:`${I.HM} ${I.kb}`,onClick:b=>e?.(b),children:a}),(0,o.jsx)("div",{className:`${I.HM} ${I.pG}`,onClick:b=>n?.(b),children:i})]})]})})})};var kt=v(670),ft={};ft.styleTagTransform=U(),ft.setAttributes=_(),ft.insert=A().bind(null,"head"),ft.domAPI=w(),ft.insertStyleElement=j();var Aa=c()(kt.A,ft);const za=kt.A&&kt.A.locals?kt.A.locals:void 0,Dt=({global:t,absolute:e})=>(0,o.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,o.jsx)("figure",{className:"spinning"})});var J=v(945),xt={};xt.styleTagTransform=U(),xt.setAttributes=_(),xt.insert=A().bind(null,"head"),xt.domAPI=w(),xt.insertStyleElement=j();var Ta=c()(J.Ay,xt);const ja=J.Ay&&J.Ay.locals?J.Ay.locals:void 0,sr=t=>t?.filter?.(e=>typeof e=="function"),cr=({loading:t,title:e,plugins:r,children:a,className:n,ref:i,...s})=>{const u=(0,m.useRef)(),f=sr(r),y=f?.length,C=n?` ${n}`:"",E=G(i)?i:u;return(0,o.jsxs)("div",{className:`${J.nd}${C}`,...s,ref:E,children:[(e||y)&&(0,o.jsxs)("div",{className:J.$d,children:[e&&(0,o.jsx)("h4",{className:J.w_,children:e}),y&&(0,o.jsx)("div",{className:J.kv,children:f.map((b,R)=>(0,o.jsx)("span",{className:`link ${J.nf}`,children:(0,o.jsx)(b,{panel:E})},R))})]}),(0,o.jsx)("div",{className:J.CG,children:a}),t&&(0,o.jsx)(Dt,{})]})},Mt=t=>Rt(t)==="array",dr=t=>Mt(t)&&!!t.length,hr=({to:t,preventDefault:e,stopPropagation:r,...a})=>e?(0,o.jsx)("span",{...a}):(0,o.jsx)("a",{href:t,...a}),ur=({item:t,...e})=>(0,o.jsx)("ul",{...e}),pr=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(a=>{r[a]=n=>t[a](n,...e)}),r},re=({data:t=[],events:e={},List:r=ur,Link:a=hr,leftIcon:n,rightIcon:i,isHorizontal:s,isCollapsed:u,level:f=0,parentOpen:y=!0})=>{const C=u&&!f,E=!s&&!u&&!y;return t.map(b=>{const{name:R,path:N,icon:z,rightIcon:T,active:B,open:M,children:L,linkProps:V}=b,et=dr(L),$=b.id||`${N}${b.childSameRouteLevel??""}`,rt=C?b.title??R:void 0,Y=E?"hidden":"",q=z??n,X=T??i,at=q?(0,o.jsx)("div",{className:"node-left-icon",children:q===!0?(0,o.jsx)("i",{className:"default-left-icon"}):q}):null,At=R?(0,o.jsx)("div",{className:"node-text",children:(0,o.jsx)("span",{children:R})}):null;if(et){const Lr=pr(e,b,f),Ur=[Y,M?"open":""].filter(Boolean).join(" ");return(0,o.jsxs)("li",{className:Ur,"has-children":"true",...Lr,children:[(0,o.jsxs)(a,{title:rt,className:`link${B?" active":""}`,to:N,preventDefault:!0,stopPropagation:!1,...V,children:[at,At,X?(0,o.jsx)("div",{className:"node-right-icon",children:X===!0?(0,o.jsx)("i",{className:"default-right-icon"}):X}):null]}),(0,o.jsx)(r,{item:b,children:re({data:L,events:e,List:r,Link:a,leftIcon:n,rightIcon:i,isHorizontal:s,isCollapsed:u,level:f+1,parentOpen:!!M})})]},$)}return(0,o.jsx)("li",{className:Y,children:(0,o.jsxs)(a,{title:rt,className:`link${B?" active":""}`,to:N,...V,children:[at,At]})},$)})},oe=re,fr=(t,...e)=>(0,o.jsx)("div",{"v-html":t,...e});var Et=v(473),mt={};mt.styleTagTransform=U(),mt.setAttributes=_(),mt.insert=A().bind(null,"head"),mt.domAPI=w(),mt.insertStyleElement=j();var Ra=c()(Et.A,mt);const Wa=Et.A&&Et.A.locals?Et.A.locals:void 0,xr=t=>(0,o.jsx)("div",{style:{padding:"6px 15px"},children:t}),mr=({activekey:t,tabs:e=[],switchTab:r,trackColor:a,flex:n,ref:i,...s})=>{const[u,f]=(0,m.useState)(t??e[0]?.key),[y,C]=(0,m.useState)({}),E=(0,m.useRef)({}),b=(0,m.useRef)();(0,m.useEffect)(()=>{const z=E.current[u];z&&R(z)},[]);const R=z=>{const{left:T,width:B}=ct(z),M=ct(b.current).left;C({left:T-M,width:B})},N=(z,T)=>{z.stopPropagation(),f(T),typeof r=="function"&&r(T),R(z.currentTarget)};return(0,o.jsxs)("div",{className:"tabs-header-wrap",...s,ref:i,children:[(0,o.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:b,children:e.map(z=>(0,o.jsx)("li",{ref:T=>E.current[z.key]=T,className:`th-item${u===z.key?" active":""}`,onClick:T=>N(T,z.key),children:typeof z.renderTabs=="function"?z.renderTabs(z,u===z.key):xr(z.value)},z.key))}),(0,o.jsx)("div",{className:"th-track",style:{...y,color:a}})]})},yr=(t,e,r="id",a="children")=>{if(!Mt(t))return null;const n=i=>{for(let s=0,u=i.length;s<u;s++){const f=i[s];if(f[r]===e)return[f];if(Mt(f[a])){const y=n(f[a]);if(y)return[f].concat(y)}}};return n(t)},_r=t=>++t,gr=()=>{const[,t]=(0,m.useState)(0);return(0,m.useCallback)(()=>t(_r),[])},ae=t=>{const{children:e,open:r}=t;let a=0;if(r&&e?.length){a=e.length;let n=0;return e.map(i=>n+=ae(i)),a+n}return a},br=({item:t,style:e,...r})=>(0,o.jsx)("ul",{style:{...e,"--count":ae(t)},...r});var Ct=v(133),yt={};yt.styleTagTransform=U(),yt.setAttributes=_(),yt.insert=A().bind(null,"head"),yt.domAPI=w(),yt.insertStyleElement=j();var Fa=c()(Ct.A,yt);const Ha=Ct.A&&Ct.A.locals?Ct.A.locals:void 0,vr=t=>(0,o.jsx)("ul",{...t}),wr=(t,e)=>t?br:({item:r,...a})=>(0,o.jsx)(vr,{className:e==="right"?"left":"",...a}),kr=t=>{const{data:e=[],collapsed:r=!1,type:a="vertical",Link:n,width:i,bgColor:s,itemHeight:u,collapsedWidth:f,itemPadding:y,style:C,className:E,...b}=t,R=(0,m.useRef)(),N=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(R.current),[]);const z=gr(),T=a==="horizontal",B=!T&&r,M={onClick:(Y,q)=>{if(Y.stopPropagation(),!T&&!B){const X=yr(e,q.path,"path"),at=X[X.length-1];at.open=!at.open,z()}},onMouseEnter:(Y,q,X)=>{B&&!X&&(clearTimeout(R.current),N.current.style.width="var(--maxWidth)")},onMouseLeave:(Y,q,X)=>{B&&!X&&(R.current=setTimeout(()=>N.current.style.width="",200))}},L=(T?["huxy-horizontal-tree",E]:["huxy-tree",E,B?"collapsed":""]).filter(Boolean).join(" "),{float:V,...et}=b?.style??{},$={"--bgColor":s,"--itemHeight":u,"--nodeListWidth":i,...et};T?($["--itemPadding"]=y,$["--nodeFloat"]=V):($["--width"]=i,$["--collapsedWidth"]=f);const rt=wr(!T&&!B,V);return(0,o.jsx)("div",{ref:N,className:L,style:$,...b,children:(0,o.jsx)("div",{className:"huxy-tree-track",children:(0,o.jsx)("ul",{className:"huxy-tree-root",children:oe({data:e,events:M,List:rt,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:T,isCollapsed:B})})})})},Er=()=>{const[t,e]=Nt(it());return(0,m.useEffect)(()=>{const r=()=>e(it());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},ne=({menu:t,curName:e,Link:r})=>t.map(a=>{const{path:n,name:i,open:s,children:u}=a,f=i===e;return u?.length?(0,o.jsxs)("li",{className:s?"open":"",children:[(0,o.jsx)(r,{to:{query:{name:i}},className:`link${f?" active":""}`,preventDefault:!0,children:(0,o.jsx)("span",{children:i})}),(0,o.jsx)("ul",{children:(0,o.jsx)(ne,{menu:u,curName:i,Link:r})})]},n||i):(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{name:i}},className:`link${f?" active":""}`,children:(0,o.jsx)("span",{children:i})})},n||i)}),Cr=ne,Pr=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Ar=(t=0,e)=>{Q()&&(e=G(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},zr=(t=()=>{},e=60)=>{let r=null;return function(...a){r||(t.apply(this,a),r=setTimeout(()=>r=null,e))}},Sr=(t,e=null,r=!1)=>[...t||[]].sort((a,n)=>{const i=e?a[e]:a,s=e?n[e]:n;return!isNaN(Number(i))&&!isNaN(Number(i))?r?s-i:i-s:typeof i=="string"&&typeof s=="string"?r?s.localeCompare(i):i.localeCompare(s):typeof i=="string"&&typeof s=="number"?r?-1:1:typeof i=="number"||typeof i=="string"?r?1:-1:r?-1:1}),Tr=()=>Q()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),jr=({curName:t,itemList:e})=>{const r=(0,m.useRef)(!1),a=(0,m.useRef)(""),[n,i]=(0,m.useState)(t);return(0,m.useEffect)(()=>{if(e.current=Pr(e.current),!t){const f=Object.keys(e.current).map(y=>({name:y,offsetTop:e.current[y]?.offsetTop??0}));i(f[0]?.name)}let s=0,u=0;if(a.current!==t){a.current=t;const f=e.current[t];r.current=!0,f?(Ar(f.offsetTop),s=setTimeout(()=>r.current=!1,1050)):u=setTimeout(()=>{window.scrollTo?.({top:e.current[t]?.offsetTop??0,behavior:"instant"}),s=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(s),clearTimeout(u),r.current=!1}},[t]),(0,m.useEffect)(()=>{const s=zr(()=>{if(!r.current){const f=Sr(Object.keys(e.current).map(y=>({name:y,offsetTop:e.current[y]?.offsetTop??0})),"offsetTop",!0).find(y=>y.offsetTop<Tr())?.name;a.current!==f&&(a.current=f,i(f))}});return window.addEventListener("scroll",s,!1),()=>window.removeEventListener("scroll",s,!1)},[]),[n]},Dr=/!\[.*\]\((.*)\)/g,Mr=async(t,e,r)=>{const a={};for(let n=0,i=t.length;n<i;n++){const s=t[n],u=s.slice(2);a[s]=await r({folder:e,name:u})}return a},Or=async(t,{folder:e},r)=>{const n=[...t.matchAll(Dr)].filter(Boolean).map(i=>i[1]);if(n?.length){const i=await Mr(n,e,r);n.map(s=>{t=t.replace(s,i[s])})}return t},Ir=({item:t,marked:e,getContext:r})=>{const[a,n]=(0,m.useState)("");return(0,m.useEffect)(()=>{(async()=>{try{const s=await r({...t,type:".md"}),u=await Or(s,t,r),f=typeof e=="function"?e.parse(u):f;n(f)}catch(s){n(s?.message)}})()},[]),(0,o.jsxs)("div",{className:"huxy-content",children:[jt(a),!a&&(0,o.jsx)(Dt,{global:!0})]})},Rr=({router:t,curName:e,context:r,marked:a,getContext:n})=>{const i=(0,m.useRef)({}),[s]=jr({curName:e,itemList:i});return(0,m.useEffect)(()=>{s&&t.push({query:{name:s}})},[s]),(0,o.jsx)("div",{className:"huxy-anchor-page",children:r.map((u,f)=>(0,o.jsxs)("div",{className:"huxy-anchor-item",ref:y=>i.current[u.name]=y,children:[(0,o.jsx)("h2",{children:`${u.name}`}),(0,o.jsx)(Ir,{item:u,marked:a,getContext:n})]},u.name))})},Wr=t=>{const e=[];return t.map(r=>{const[a,n]=r.name.split("/"),i=e.find(s=>s.name===a);i?i.children.push({name:n,folder:a}):e.push({name:a,children:[{name:n,folder:a}]})}),e};var Pt=v(55),_t={};_t.styleTagTransform=U(),_t.setAttributes=_(),_t.insert=A().bind(null,"head"),_t.domAPI=w(),_t.insertStyleElement=j();var rn=c()(Pt.A,_t);const on=Pt.A&&Pt.A.locals?Pt.A.locals:void 0,Br=(t,e,r)=>({sidebar:t.find(a=>a.name===e)?.children??[],listEle:t.map(({name:a,children:n})=>(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{folder:a,name:n[0]?.name}},className:`link${a===e?" active":""}`,children:(0,o.jsx)("span",{children:a})})},a))}),Nr=t=>{const{params:e,router:r,Link:a,listFiles:n,getContext:i,marked:s,title:u,routeLink:f,routeName:y,className:C,style:E}=t,{folder:b,name:R}=e,{width:N}=Er(),[z,T]=(0,m.useState)([]),[B,M]=(0,m.useState)(!1);(0,m.useEffect)(()=>{(async()=>{const rt=await n(),Y=Wr(rt);T(Y),b||r.push({query:{folder:Y[0]?.name,name:Y[0]?.children[0]?.name}})})()},[]);const L=N<=1024,{sidebar:V,listEle:et}=Br(z,b,a);return(0,o.jsxs)("div",{className:`huxy-doc-frame ${C??""}`,style:E,children:[(0,o.jsxs)("div",{className:"huxy-doc-header",children:[(0,o.jsx)("div",{className:"huxy-doc-banner",children:u||"\u6587\u6863\u7CFB\u7EDF"}),(0,o.jsx)("ul",{className:"huxy-doc-nav",children:L?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:"huxy-doc-collapsed",children:(0,o.jsx)("span",{className:"link",onClick:$=>{$.stopPropagation(),M(!B)},children:(0,o.jsx)(Ot,{type:B?"right":""})})}),(0,o.jsx)(Ft,{open:B,close:()=>M(!1),width:"220px",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-drawer",children:et})})]}):et}),f?(0,o.jsx)("div",{className:"huxy-doc-back",children:(0,o.jsx)(a,{to:f,children:(0,o.jsx)("span",{children:y??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,o.jsxs)("div",{className:"huxy-doc-container",children:[(0,o.jsx)("div",{className:"huxy-doc-main-page",children:(0,o.jsx)(Rr,{router:r,curName:R,context:V,marked:s,getContext:i})}),(0,o.jsx)("div",{className:"huxy-doc-menu",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,o.jsx)(Cr,{menu:V,curName:R,Link:a})})})]})]})}})();var Hr=S.Rt,$r=S.L8,Kr=S.FN,Vr=S.fv,Yr=S._s,Xr=S.ey,Gr=S.gy,Zr=S.tH,Qr=S.PQ,Jr=S.xA,qr=S.lz,to=S.Xb,eo=S.n1,ro=S.mk,oo=S.Bl,ao=S.aF,no=S.Zk,io=S.ZL,lo=S.fI,so=S.y$,co=S.tu,ho=S.m_,uo=S.PH,po=S.mK,fo=S.J0,xo=S.B6,mo=S.fz,yo=S.Iu;export{Hr as Anico,$r as Base64Image,Kr as Carousel,Vr as Col,Yr as Drawer,Xr as Drop,Gr as Ellipsis,Zr as ErrorBoundary,Qr as FullPage,Jr as Grid,qr as HandleError,to as LoadError,eo as Mask,ro as MaxSize,oo as Md2html,ao as Modal,no as Panel,io as Portal,lo as Row,so as Spinner,co as TabHeader,ho as Tooltip,uo as Tree,po as fixEle,fo as fixIcon,xo as renderTree,mo as str2React,yo as str2Vue};
