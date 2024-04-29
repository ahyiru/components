import*as Hr from"react";import*as ne from"react-dom";var Kr={87:(x,d,l)=>{l.d(d,{Ay:()=>z,VN:()=>E,ZH:()=>m,Zx:()=>P,pG:()=>w,sQ:()=>O,t6:()=>k,v7:()=>j});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`/*@height:2px;
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
`,""]);var P="nstud",k="IZUmD",E="ylzxZ",w="Wy_0M",O="bdjKS",m="QPs9T",j="tx7CH";const z=c},587:(x,d,l)=>{l.d(d,{Ay:()=>j,Om:()=>O,Ri:()=>k,S$:()=>w,UM:()=>P,fv:()=>E,vu:()=>m});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.kLIGi {
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
`,""]);var P="kLIGi",k="XoNs4",E="x4UPo",w="qYuQn",O="GU0qu",m="svhYU";const j=c},724:(x,d,l)=>{l.d(d,{Ay:()=>F,Ih:()=>U,Vn:()=>P,Y8:()=>j,_I:()=>m,ho:()=>k,iD:()=>O,kb:()=>w,pG:()=>E,pz:()=>z});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`@keyframes animate-drawer-right-in {
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
`,""]);var P="KsHNu",k="c6aFy",E="mlowE",w="w0B0d",O="W4gG3",m="SMORg",j="e3AWW",z="VSVwl",U="hlj9r";const F=c},468:(x,d,l)=>{l.d(d,{Ay:()=>w,Zr:()=>k,ho:()=>E,og:()=>P});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`@keyframes animate-drop-in {
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
`,""]);var P="TEYHV",k="NCYpg",E="qjBWI";const w=c},55:(x,d,l)=>{l.d(d,{A:()=>P});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.huxy-doc-frame {
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
`,""]);const P=c},482:(x,d,l)=>{l.d(d,{Ay:()=>F,HM:()=>j,QN:()=>E,R8:()=>P,Y8:()=>O,ho:()=>k,k3:()=>w,kb:()=>z,pG:()=>U,ww:()=>m});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`@keyframes animate-modal-in {
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
`,""]);var P="SqXAN",k="S3vb_",E="RiDlb",w="xdqLE",O="C91AO",m="J6dpF",j="XOnmm",z="t1Fx9",U="YGj9K";const F=c},945:(x,d,l)=>{l.d(d,{$d:()=>O,Ay:()=>U,CG:()=>w,kv:()=>j,nd:()=>P,nf:()=>z,w_:()=>m});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.clear::after {
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
`,""]);var P="J8VWE",k=null,E=null,w="rOxNb",O="OQwTX",m="W_1K6",j="eCk2_",z="R2Mku";const U=c},531:(x,d,l)=>{l.d(d,{A:()=>P});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.cols-1 {
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
`,""]);const P=c},670:(x,d,l)=>{l.d(d,{A:()=>P});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`@keyframes before {
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
`,""]);const P=c},473:(x,d,l)=>{l.d(d,{A:()=>P});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.clear::after {
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
`,""]);const P=c},700:(x,d,l)=>{l.d(d,{$x:()=>O,Ay:()=>z,E9:()=>w,Vz:()=>k,ZG:()=>E,gO:()=>P,l3:()=>j,o7:()=>m});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.ofth_ {
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
`,""]);var P="ofth_",k="hVmF3",E="uzFyE",w="Giihu",O="bFVVt",m="oGmKq",j="svYWD";const z=c},133:(x,d,l)=>{l.d(d,{A:()=>P});var g=l(758),h=l.n(g),o=l(935),p=l.n(o),c=p()(h());c.push([x.id,`.node-right-icon-close {
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
`,""]);const P=c},935:x=>{x.exports=function(d){var l=[];return l.toString=function(){return this.map(function(h){var o="",p=typeof h[5]<"u";return h[4]&&(o+="@supports (".concat(h[4],") {")),h[2]&&(o+="@media ".concat(h[2]," {")),p&&(o+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),o+=d(h),p&&(o+="}"),h[2]&&(o+="}"),h[4]&&(o+="}"),o}).join("")},l.i=function(h,o,p,c,P){typeof h=="string"&&(h=[[null,h,void 0]]);var k={};if(p)for(var E=0;E<this.length;E++){var w=this[E][0];w!=null&&(k[w]=!0)}for(var O=0;O<h.length;O++){var m=[].concat(h[O]);p&&k[m[0]]||(typeof P<"u"&&(typeof m[5]>"u"||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=P),o&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=o),c&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=c):m[4]="".concat(c)),l.push(m))}},l}},758:x=>{x.exports=function(d){return d[1]}},335:(x,d,l)=>{var g=l(649),h=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,c=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function k(E,w,O){var m,j={},z=null,U=null;O!==void 0&&(z=""+O),w.key!==void 0&&(z=""+w.key),w.ref!==void 0&&(U=w.ref);for(m in w)p.call(w,m)&&!P.hasOwnProperty(m)&&(j[m]=w[m]);if(E&&E.defaultProps)for(m in w=E.defaultProps,w)j[m]===void 0&&(j[m]=w[m]);return{$$typeof:h,type:E,key:z,ref:U,props:j,_owner:c.current}}d.Fragment=o,d.jsx=k,d.jsxs=k},85:(x,d,l)=>{x.exports=l(335)},591:x=>{var d=[];function l(o){for(var p=-1,c=0;c<d.length;c++)if(d[c].identifier===o){p=c;break}return p}function g(o,p){for(var c={},P=[],k=0;k<o.length;k++){var E=o[k],w=p.base?E[0]+p.base:E[0],O=c[w]||0,m="".concat(w," ").concat(O);c[w]=O+1;var j=l(m),z={css:E[1],media:E[2],sourceMap:E[3],supports:E[4],layer:E[5]};if(j!==-1)d[j].references++,d[j].updater(z);else{var U=h(z,p);p.byIndex=k,d.splice(k,0,{identifier:m,updater:U,references:1})}P.push(m)}return P}function h(o,p){var c=p.domAPI(p);c.update(o);var P=function(E){if(E){if(E.css===o.css&&E.media===o.media&&E.sourceMap===o.sourceMap&&E.supports===o.supports&&E.layer===o.layer)return;c.update(o=E)}else c.remove()};return P}x.exports=function(o,p){p=p||{},o=o||[];var c=g(o,p);return function(k){k=k||[];for(var E=0;E<c.length;E++){var w=c[E],O=l(w);d[O].references--}for(var m=g(k,p),j=0;j<c.length;j++){var z=c[j],U=l(z);d[U].references===0&&(d[U].updater(),d.splice(U,1))}c=m}}},128:x=>{var d={};function l(h){if(typeof d[h]>"u"){var o=document.querySelector(h);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}d[h]=o}return d[h]}function g(h,o){var p=l(h);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(o)}x.exports=g},51:x=>{function d(l){var g=document.createElement("style");return l.setAttributes(g,l.attributes),l.insert(g,l.options),g}x.exports=d},855:(x,d,l)=>{function g(h){var o=l.nc;o&&h.setAttribute("nonce",o)}x.exports=g},740:x=>{function d(h,o,p){var c="";p.supports&&(c+="@supports (".concat(p.supports,") {")),p.media&&(c+="@media ".concat(p.media," {"));var P=typeof p.layer<"u";P&&(c+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),c+=p.css,P&&(c+="}"),p.media&&(c+="}"),p.supports&&(c+="}");var k=p.sourceMap;k&&typeof btoa<"u"&&(c+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),o.styleTagTransform(c,h,o.options)}function l(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)}function g(h){if(typeof document>"u")return{update:function(){},remove:function(){}};var o=h.insertStyleElement(h);return{update:function(c){d(o,h,c)},remove:function(){l(o)}}}x.exports=g},656:x=>{function d(l,g){if(g.styleSheet)g.styleSheet.cssText=l;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(l))}}x.exports=d},649:x=>{var d=g=>{var h={};return v.d(h,g),h},l=g=>()=>g;x.exports=Hr}},ie={};function v(x){var d=ie[x];if(d!==void 0)return d.exports;var l=ie[x]={id:x,exports:{}};return Kr[x](l,l.exports,v),l.exports}v.n=x=>{var d=x&&x.__esModule?()=>x.default:()=>x;return v.d(d,{a:d}),d},v.d=(x,d)=>{for(var l in d)v.o(d,l)&&!v.o(x,l)&&Object.defineProperty(x,l,{enumerable:!0,get:d[l]})},v.o=(x,d)=>Object.prototype.hasOwnProperty.call(x,d),v.r=x=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})},v.nc=void 0;var T={};(()=>{v.d(T,{Rt:()=>Ot,L8:()=>ue,FN:()=>ge,fv:()=>Nt,_s:()=>Ut,ey:()=>Ne,gy:()=>Ke,tH:()=>$t,PQ:()=>Je,xA:()=>tr,lz:()=>er,Xb:()=>Zt,n1:()=>St,mk:()=>ar,Bl:()=>Lr,aF:()=>ir,Zk:()=>cr,ZL:()=>zt,fI:()=>Gt,y$:()=>Dt,tu:()=>mr,m_:()=>Kt,PH:()=>Er,mK:()=>Vt,J0:()=>Ve,B6:()=>re,fz:()=>Tt,Iu:()=>fr});var x={};v.r(x),v.d(x,{anico:()=>H.Zx,bottom:()=>H.sQ,close:()=>H.VN,default:()=>le,hline:()=>H.t6,pause:()=>H.v7,play:()=>H.ZH,right:()=>H.pG});var d={};v.r(d),v.d(d,{default:()=>Ce,"drawer-container":()=>B.iD,"drawer-content":()=>B._I,"drawer-footer":()=>B.Ih,"drawer-header":()=>B.Y8,"drawer-wrap":()=>B.Vn,"ico-close":()=>B.pz,left:()=>B.kb,open:()=>B.ho,right:()=>B.pG});var l={};v.r(l),v.d(l,{default:()=>Be,"drop-target":()=>tt.og,"drop-wrap":()=>tt.Zr,open:()=>tt.ho});var g={};v.r(g),v.d(g,{default:()=>Ue,ellipsis:()=>$.gO,"huxy-tooltip":()=>$.Vz,"huxy-tooltip-bottomLeft":()=>$.o7,"huxy-tooltip-bottomRight":()=>$.$x,"huxy-tooltip-rightTop":()=>$.l3,"huxy-tooltip-topLeft":()=>$.E9,"huxy-tooltip-topRight":()=>$.ZG});var h={};v.r(h),v.d(h,{btn:()=>I.HM,default:()=>nr,left:()=>I.kb,"modal-container":()=>I.QN,"modal-content":()=>I.Y8,"modal-footer":()=>I.ww,"modal-header":()=>I.k3,"modal-wrap":()=>I.R8,open:()=>I.ho,right:()=>I.pG});var o=v(85),p=v(591),c=v.n(p),P=v(740),k=v.n(P),E=v(128),w=v.n(E),O=v(855),m=v.n(O),j=v(51),z=v.n(j),U=v(656),F=v.n(U),H=v(87),at={};at.styleTagTransform=F(),at.setAttributes=m(),at.insert=w().bind(null,"head"),at.domAPI=k(),at.insertStyleElement=z();var bo=c()(H.Ay,at);const le=H.Ay&&H.Ay.locals?H.Ay.locals:void 0,Ot=t=>(0,o.jsx)("span",{className:H.Zx,children:(0,o.jsx)("span",{className:[H.t6,...(t.type||"").split(" ").map(e=>x[e]).filter(Boolean)].join(" ")})});var y=v(649);const se=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),ce=t=>new Promise((e,r)=>{const a=new FileReader;a.readAsDataURL(t),a.addEventListener("load",()=>e(a.result)),a.addEventListener("error",n=>r(n))}),de=async t=>{if(!se(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await ce(r)},he=t=>{const[e,r]=(0,y.useState)(t);return(0,y.useEffect)(()=>{(async n=>{const i=await de(n);r(i)})(t)},[t]),e},ue=({src:t,...e})=>{const r=he(t);return(0,o.jsx)("img",{...e,src:r})};var pe=t=>{var e={};return v.d(e,t),e},Ao=t=>()=>t;const Mt=pe({createPortal:()=>ne.createPortal,flushSync:()=>ne.flushSync}),fe=(t,e)=>{const r=(0,y.useRef)();(0,y.useEffect)(()=>{r.current=t},[t]),(0,y.useEffect)(()=>{if(e){const a=setInterval(()=>r.current(),e);return()=>clearInterval(a)}},[e])},Q=()=>![typeof window,typeof document].includes("undefined"),It=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),At=t=>It(t).indexOf("element")>-1,nt=(t=null)=>Q()?At(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Rt=(t=()=>{},e=60)=>{let r=null;return function(...a){clearTimeout(r),r=setTimeout(()=>t.apply(this,a),e)}},xe=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),G=t=>xe(t,"current"),Wt=(t,e)=>{const r=[],a=t.children??[];for(let n=0,i=a.length;n<i;n++){const s=a[n];s.className.indexOf(e)>-1&&r.push(s)}return r.length===0?null:r.length===1?r[0]:r},ye=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},me=(t,e=60)=>{if(!Q())return;t=G(t)?t.current:t??document.body;let r=Wt(t,"resize-sensor"),a=[];const n=Rt(()=>a.map(f=>f(t)),e),i=f=>{Wt(t,"resize-sensor")||(r=ye(t,n)),a.indexOf(f)===-1&&a.push(f)},s=f=>{const _=a.indexOf(f);_!==-1&&a.splice(_,1),a.length===0&&r&&u()},u=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,a=[])};return{element:t,bind:i,unbind:s,destroy:u}},Bt=(t={})=>{const e=(0,y.useRef)(0),[r,a]=(0,y.useState)(t),n=(0,y.useCallback)(i=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>a(i))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},_e=(t=null,e=60)=>{const r=G(t)?t.current:t,{bind:a,destroy:n}=me(r,e),[i,s]=Bt(nt(r));return(0,y.useEffect)(()=>(a(()=>r&&s(nt(r))),()=>n()),[r]),i};var Z=v(587),it={};it.styleTagTransform=F(),it.setAttributes=m(),it.insert=w().bind(null,"head"),it.domAPI=k(),it.insertStyleElement=z();var Lo=c()(Z.Ay,it);const Uo=Z.Ay&&Z.Ay.locals?Z.Ay.locals:void 0,ge=({children:t,active:e=0,delay:r=5e3,className:a,...n})=>{const[i,s]=(0,y.useState)(e+1),[u,f]=(0,y.useState)(!1),_=(0,y.useRef)(),A=(0,y.useRef)(""),{width:C}=_e(_);t=Array.isArray(t)?t:[t];const b=t[0],W=[t[t.length-1],...t,b],S=W.length;fe(()=>{let M=i+1;M=M===S?1:M,A.current&&(A.current=""),s(M),M===S-1&&setTimeout(()=>{A.current="none",s(1)},500)},u?null:r);const D=(M,L)=>{L.stopPropagation(),A.current="",s(M),(0,Mt.flushSync)(()=>f(!0)),f(!1)},N={width:`${S*C}px`,transform:`translateX(${-C*i}px)`,transition:A.current};return(0,o.jsxs)("div",{className:`${Z.UM}${a?` ${a}`:""}`,...n,ref:_,children:[(0,o.jsx)("div",{className:Z.Ri,style:N,children:W.map((M,L)=>(0,o.jsx)("div",{className:`${Z.fv} ${i===L?Z.vu:""}`,style:{width:`${C}px`},children:M},`huxy-carousel-${L}`))}),(0,o.jsx)("div",{className:Z.S$,children:t.map((M,L)=>(0,o.jsx)("span",{className:`${Z.Om} ${i===L+1?Z.vu:""}`,onClick:V=>D(L+1,V)},`huxy-carousel-switch-${L}`))})]})},_t=(t,e)=>{let r="",a="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:i}=e;r=n?`col-${t}-${n}`:"",a=i?`offset-${t}-${i}`:""}return{sp:r,os:a}},Nt=(0,y.forwardRef)(({span:t,offset:e,xl:r,lg:a,md:n,sm:i,xs:s,style:u,width:f,auto:_,offsetWidth:A="0px",className:C,...b},R)=>{const W=C?` ${C}`:"",S=`col-${t||12}`,D=e?`offset-${e}`:"",{sp:N,os:M}=_t("xs",s),{sp:L,os:V}=_t("sm",i),{sp:et,os:K}=_t("md",n),{sp:rt,os:Y}=_t("lg",a),{sp:q,os:X}=_t("xl",r),ot=[S,q,rt,et,L,N,D,X,Y,K,V,M].filter(Boolean).join(" "),Pt=_?{width:"auto",flex:1,maxWidth:`calc(100% - ${A})`}:{width:f};return(0,o.jsx)("div",{className:`${ot}${W}`,...b,style:{...Pt,...u},ref:R})}),be=()=>{const t=(0,y.useRef)(!0);return t.current?(t.current=!1,!0):!1},ve=(t,e=[])=>{const r=be();(0,y.useEffect)(()=>{if(!r)return t()},e)},Lt=(t,e=450)=>{const[r,a]=(0,y.useState)(t);return ve(()=>{let n;return t||e===0?a(t):n=setTimeout(()=>a(t),e),()=>n&&clearTimeout(n)},[t]),[r,a]},zt=({children:t,mountNode:e=document.body})=>(0,Mt.createPortal)(t,e),we={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},ke={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Ee=document.body,St=({open:t,close:e,delay:r=300,children:a,mountNode:n,hasMask:i=!0,style:s,className:u="h-mask",relative:f})=>{const[_]=Lt(t,r);(n??Ee).style.overflow=_?"hidden":"";const A=f?"absolute":"fixed";return(0,o.jsx)(zt,{mountNode:n,children:(0,o.jsx)("div",{children:_?(0,o.jsxs)("div",{className:u,style:{...we,position:A},children:[i?(0,o.jsx)("div",{style:{...ke,position:A},onClick:C=>e?.(C)}):null,y.Children.map(a,C=>(0,y.isValidElement)(C)?(0,y.cloneElement)(C,{style:{position:"relative",zIndex:100001,...C.props.style}}):C)]}):null})})};var B=v(724),lt={};lt.styleTagTransform=F(),lt.setAttributes=m(),lt.insert=w().bind(null,"head"),lt.domAPI=k(),lt.insertStyleElement=z();var Go=c()(B.Ay,lt);const Ce=B.Ay&&B.Ay.locals?B.Ay.locals:void 0,Ut=({open:t,close:e,footer:r,header:a,className:n,style:i,children:s,width:u="300px",mountNode:f,position:_="right",relative:A})=>{const C=["drawer-wrap",_,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(b=>d[b]).join(" ");return(0,o.jsx)(St,{open:t,close:e,delay:250,hasMask:!0,relative:A,mountNode:f,className:"huxy-drawer",children:(0,o.jsx)("div",{className:C,style:{width:u,position:A?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":a?"44px":"0px",...i},children:(0,o.jsxs)("div",{className:B.iD,children:[a?(0,o.jsxs)("div",{className:B.Y8,children:[_==="right"?(0,o.jsx)("span",{className:`link ${B.pz}`,onClick:b=>e?.(b)}):null,(0,o.jsx)("div",{children:a}),_==="left"?(0,o.jsx)("span",{className:`link ${B.pz}`,onClick:b=>e?.(b)}):null]}):null,(0,o.jsx)("div",{className:B._I,children:s}),r?(0,o.jsx)("div",{className:B.Ih,children:r}):null]})})})},Pe=(t,e,r="click")=>{(0,y.useEffect)(()=>{const a=i=>{const s=G(t)?t.current:t;s?.contains&&!s.contains(i.target)&&e(i)},n=typeof r=="string"?[r]:r;return n.map(i=>{document.addEventListener(i,a,!1)}),()=>{n.map(i=>{document.removeEventListener(i,a,!1)})}},[t,e,r])},Ae=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",ze=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),st=t=>{if(Q())return t=G(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Se=t=>{if(!Q())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},gt=(t,e={},r=!1)=>{if(At(t)){if(r){let a="";Object.keys(e).map(n=>{a+=`${n}: ${e[n]};`}),t.style=a;return}Object.keys(e).map(a=>t.style.setProperty(a,e[a]))}},Te=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,De=(t=350,e="ms")=>new Promise(r=>setTimeout(r,Te(t,e))),oa=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},je=De,Oe=async(t,e=15)=>{if(!Q())return;if(typeof t=="string"&&(t=Se(t)),t=G(t)?t.current:t,!At(t))return{};const r=t.cloneNode(!0);gt(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await je(e);const a=st(r);return t.parentNode.removeChild(r),a},Me=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Ie=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ft=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Me.test(r)?t.setAttribute("class",r.replace(Ie,e)):t.setAttribute("class",`${r} ${e}`)},Ht=async(t,e,r)=>{const{left:a,right:n,top:i,bottom:s}=st(t),{width:u,height:f}=nt(),{width:_,height:A}=await Oe(e);if(n<0||s<0||a>u||i>f)return{};if(r==="vertical"){const C={left:a+"px",top:s+10+"px",right:"auto",bottom:"auto"};let b="lt";a+_>u&&(C.left=n-_+"px",b="rt"),s+10+A>f&&(C.top=i-10-A+"px",b=b==="lt"?"lb":"rb"),gt(e,C),Ft(e,b)}else{const C={left:n+10+"px",top:i+"px",right:"auto",bottom:"auto"};let b="tl";n+10+_>u&&(C.left=a-10-_+"px",b="tr"),i+A>f&&(C.top=s-A+"px",b=b==="tl"?"bl":"br"),gt(e,C),Ft(e,b)}},Re=(t,e,r="horizontal")=>{const a=Rt(Ht),n=()=>a(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const i=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),gt(e,{left:"",top:"",right:"",bottom:""})};return Ht(t,e,r),i},We=({open:t,delay:e=280,children:r,mountNode:a,style:n,...i})=>{const[s]=Lt(t,e);return(0,o.jsx)(zt,{mountNode:a,children:(0,o.jsx)("div",{children:(0,o.jsx)("div",{style:{...n,display:s?"block":"none"},...i,children:r})})})};var tt=v(468),ct={};ct.styleTagTransform=F(),ct.setAttributes=m(),ct.insert=w().bind(null,"head"),ct.domAPI=k(),ct.insertStyleElement=z();var la=c()(tt.Ay,ct);const Be=tt.Ay&&tt.Ay.locals?tt.Ay.locals:void 0,Ne=({trigger:t="click",type:e,dropList:r,className:a,children:n,targetProps:i,...s})=>{const[u,f]=(0,y.useState)(!1),_=(0,y.useRef)(),A=(0,y.useRef)(),C=(0,y.useRef)();Pe(_,D=>u&&f(!1),[...new Set(["click",t.toLowerCase()])]),(0,y.useEffect)(()=>()=>C.current?.(),[]);const b=D=>{D.preventDefault(),f(!0),C.current=Re(_.current,A.current,e)},R={[`on${ze(t)}`]:b},W=["drop-wrap",u?"open":"",a].filter(Boolean).map(D=>l[D]).join(" "),S=Ae(r)?r:r?.(()=>f(!1),u);return(0,o.jsxs)("span",{ref:_,className:tt.og,...i,...R,children:[n,(0,o.jsx)(We,{open:u,className:"huxy-drop",children:(0,o.jsx)("div",{ref:A,className:W,...s,children:S})})]})},Le=(t,e,r)=>{if(!Q())return;r=G(r)?r.current:r??document.body;const a=document.createElement("span");a.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&gt(a,e),a.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(a);const n=a.getBoundingClientRect();return r.removeChild(a),n};var $=v(700),dt={};dt.styleTagTransform=F(),dt.setAttributes=m(),dt.insert=w().bind(null,"head"),dt.domAPI=k(),dt.insertStyleElement=z();var da=c()($.Ay,dt);const Ue=$.Ay&&$.Ay.locals?$.Ay.locals:void 0,Kt=({title:t,placement:e="topRight",children:r,ellipsis:a,className:n,...i})=>(0,o.jsx)("span",{className:`${g[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...i,children:(0,o.jsx)("span",{className:a?$.gO:"",children:r})}),Fe={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},He=t=>{const{children:e,style:r}=t,a=typeof e=="string",n=a?e:e?.props?.title??e?.props?.children,i=(0,y.useRef)(),[s,u]=(0,y.useState)(!0);return(0,y.useEffect)(()=>{if(i.current){const{width:f}=Le(n,null,i.current.parentNode),{width:_}=st(i.current),A=~~f>~~_;A!==s&&u(A)}},[n]),(0,o.jsx)("span",{ref:i,style:{display:"flex",width:"100%",...r},children:s?a?(0,o.jsx)(Kt,{...t,ellipsis:!0}):(0,o.jsx)("span",{style:Fe,children:e}):a?e:e?.props?.children})},Ke=t=>t.children==null?"":(0,o.jsx)(He,{...t});class $t extends y.default.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:a}=this.props;typeof a=="function"&&a({error:e,info:r.componentStack})}render(){const{error:e}=this.state,{fallback:r,children:a}=this.props;return e?r?.(e)??e:a}}const Vt=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,o.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,o.jsx)(r,{}):(0,o.jsx)("i",{className:e})}return e??null},$e=t=>Vt(t),Ve=t=>({icon:e,defaultIcon:r})=>e?$e(t)(e):e===!1?null:r,bt=["","webkit","moz","ms"],Ye=t=>bt.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Xe=t=>bt.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Ge=t=>bt.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Yt=bt.map(t=>`${t}fullscreenchange`),Ze=t=>{if(!Q())return;t=G(t)?t.current:t??document.body;const e=Ye(document),r=Xe(t),a=Ge(document);document[e]?document[a]?.():t[r]?.()},Qe=t=>Q()?(Yt.map(r=>document.addEventListener(r,t,!1)),()=>Yt.map(r=>document.removeEventListener(r,t,!1))):void 0,Xt=t=>(0,o.jsx)("i",{...t,children:"..."}),Je=({panel:t,fullIcon:e=Xt,exitIcon:r=Xt,...a})=>{const n=G(t)?t.current:t,[i,s]=(0,y.useState)();(0,y.useEffect)(()=>{const f=Qe(()=>{s(_=>!_)});return()=>f()},[]);const u=i?r:e;return(0,o.jsx)(u,{onClick:f=>Ze(n),...a})};var vt=v(531),ht={};ht.styleTagTransform=F(),ht.setAttributes=m(),ht.insert=w().bind(null,"head"),ht.domAPI=k(),ht.insertStyleElement=z();var _a=c()(vt.A,ht);const ga=vt.A&&vt.A.locals?vt.A.locals:void 0,qe=({gutter:t=10,className:e,overflow:r="hidden",...a},n)=>{const i=e?` ${e}`:"";let s=10;if(Array.isArray(t)){const u=[...t];t=u[0],s=u[1]??u[0]}return(0,o.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(s/2)}px`,overflow:r},children:(0,o.jsx)("div",{className:`row${i}`,...a,ref:n})})},Gt=(0,y.forwardRef)(qe),tr=({rowProps:t,colProps:e,children:r,Row:a=Gt,Col:n=Nt})=>{const i=[];return y.Children.map(r,s=>{s&&(s.type?.description==="react.fragment"?i.push(...s.props.children):i.push(s))}),(0,o.jsx)(a,{...t,children:i.map((s,u)=>(0,o.jsx)(n,{...e,...s.props.itemprops,children:s},`huuxy_grid_${u}`))})},Tt=(t,e)=>(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),Zt=t=>{const{error:e={},info:r=""}=t||{},{message:a,stack:n,errMsg:i}=e;let s=i||n||e.toString();s=`${s}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),s=s.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),s=s.replace(/\s/g,"&nbsp;");const u=a?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,o.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Tt(s,{style:{color:"red"}}),u&&(0,o.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${u}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},er=({children:t,report:e})=>{const r=(0,y.useRef)();return r.current?.state&&(r.current.state.error=null),(0,o.jsx)($t,{ref:r,fallback:(a,n)=>Zt({error:a,info:n}),errorReport:e,children:t})},Qt=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),rr=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),or={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Jt=({left:t,top:e,width:r,height:a})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${a}px`}),qt=t=>(0,o.jsx)("i",{...t,children:"..."}),te=t=>{const{left:e,top:r}=st(t),{width:a,height:n}=nt(t);return{left:e,top:r,width:a,height:n}},ar=({panel:t,target:e,fullIcon:r=qt,exitIcon:a=qt})=>{t=G(t)?t.current:t||document.body;const[n,i]=(0,y.useState)(),s=(0,y.useRef)();(0,y.useEffect)(()=>{s.current={...or,...Jt(te(t))}},[t]);const u=(_,A)=>{if(_){const b=Jt(te((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));Qt(A,s.current),setTimeout(()=>{Qt(A,b)},0)}else rr(A,s.current);i(_)},f=n?a:r;return(0,o.jsx)(f,{onClick:_=>u(!n,t)})};var I=v(482),ut={};ut.styleTagTransform=F(),ut.setAttributes=m(),ut.insert=w().bind(null,"head"),ut.domAPI=k(),ut.insertStyleElement=z();var Ca=c()(I.Ay,ut);const nr=I.Ay&&I.Ay.locals?I.Ay.locals:void 0,ir=({open:t,close:e,hasMask:r=!0,cancelText:a="\u53D6\u6D88",submit:n,submitText:i="\u786E\u5B9A",title:s="Modal \u5F39\u7A97",className:u,children:f,delay:_=250,...A})=>{const C=["modal-wrap",t?"open":"",...u?.split(" ")??[]].filter(Boolean).map(b=>h[b]).join(" ");return(0,o.jsx)(St,{open:t,close:e,delay:_,hasMask:r,className:"huxy-modal",children:(0,o.jsx)("div",{className:C,...A,children:(0,o.jsxs)("div",{className:I.QN,children:[(0,o.jsx)("div",{className:I.k3,children:s}),(0,o.jsx)("div",{className:I.Y8,children:f}),(0,o.jsxs)("div",{className:I.ww,children:[(0,o.jsx)("div",{className:`${I.HM} ${I.kb}`,onClick:b=>e?.(b),children:a}),(0,o.jsx)("div",{className:`${I.HM} ${I.pG}`,onClick:b=>n?.(b),children:i})]})]})})})};var wt=v(670),pt={};pt.styleTagTransform=F(),pt.setAttributes=m(),pt.insert=w().bind(null,"head"),pt.domAPI=k(),pt.insertStyleElement=z();var Aa=c()(wt.A,pt);const za=wt.A&&wt.A.locals?wt.A.locals:void 0,Dt=({global:t,absolute:e})=>(0,o.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,o.jsx)("figure",{className:"spinning"})});var J=v(945),ft={};ft.styleTagTransform=F(),ft.setAttributes=m(),ft.insert=w().bind(null,"head"),ft.domAPI=k(),ft.insertStyleElement=z();var Ta=c()(J.Ay,ft);const Da=J.Ay&&J.Ay.locals?J.Ay.locals:void 0,lr=t=>t?.filter?.(e=>typeof e=="function"),sr=(t,e)=>{const r=(0,y.useRef)(),{loading:a,title:n,plugins:i,children:s,className:u,...f}=t,_=lr(i),A=_?.length,C=u?` ${u}`:"",b=G(e)?e:r;return(0,o.jsxs)("div",{className:`${J.nd}${C}`,...f,ref:b,children:[(n||A)&&(0,o.jsxs)("div",{className:J.$d,children:[n&&(0,o.jsx)("h4",{className:J.w_,children:n}),A&&(0,o.jsx)("div",{className:J.kv,children:_.map((R,W)=>(0,o.jsx)("span",{className:`link ${J.nf}`,children:(0,o.jsx)(R,{panel:b})},W))})]}),(0,o.jsx)("div",{className:J.CG,children:s}),a&&(0,o.jsx)(Dt,{})]})},cr=(0,y.forwardRef)(sr),jt=t=>It(t)==="array",dr=t=>jt(t)&&!!t.length,hr=({to:t,preventDefault:e,stopPropagation:r,...a})=>e?(0,o.jsx)("span",{...a}):(0,o.jsx)("a",{href:t,...a}),ur=({item:t,...e})=>(0,o.jsx)("ul",{...e}),pr=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(a=>{r[a]=n=>t[a](n,...e)}),r},ee=({data:t=[],events:e={},List:r=ur,Link:a=hr,leftIcon:n,rightIcon:i,isHorizontal:s,isCollapsed:u,level:f=0,parentOpen:_=!0})=>{const A=u&&!f,C=!s&&!u&&!_;return t.map(b=>{const{name:R,path:W,icon:S,rightIcon:D,active:N,open:M,children:L,linkProps:V}=b,et=dr(L),K=b.id||`${W}${b.childSameRouteLevel??""}`,rt=A?b.title??R:void 0,Y=C?"hidden":"",q=S??n,X=D??i,ot=q?(0,o.jsx)("div",{className:"node-left-icon",children:q===!0?(0,o.jsx)("i",{className:"default-left-icon"}):q}):null,Pt=R?(0,o.jsx)("div",{className:"node-text",children:(0,o.jsx)("span",{children:R})}):null;if(et){const Ur=pr(e,b,f),Fr=[Y,M?"open":""].filter(Boolean).join(" ");return(0,o.jsxs)("li",{className:Fr,"has-children":"true",...Ur,children:[(0,o.jsxs)(a,{title:rt,className:`link${N?" active":""}`,to:W,preventDefault:!0,stopPropagation:!1,...V,children:[ot,Pt,X?(0,o.jsx)("div",{className:"node-right-icon",children:X===!0?(0,o.jsx)("i",{className:"default-right-icon"}):X}):null]}),(0,o.jsx)(r,{item:b,children:ee({data:L,events:e,List:r,Link:a,leftIcon:n,rightIcon:i,isHorizontal:s,isCollapsed:u,level:f+1,parentOpen:!!M})})]},K)}return(0,o.jsx)("li",{className:Y,children:(0,o.jsxs)(a,{title:rt,className:`link${N?" active":""}`,to:W,...V,children:[ot,Pt]})},K)})},re=ee,fr=(t,...e)=>(0,o.jsx)("div",{"v-html":t,...e});var kt=v(473),xt={};xt.styleTagTransform=F(),xt.setAttributes=m(),xt.insert=w().bind(null,"head"),xt.domAPI=k(),xt.insertStyleElement=z();var Ia=c()(kt.A,xt);const Ra=kt.A&&kt.A.locals?kt.A.locals:void 0,xr=t=>(0,o.jsx)("div",{style:{padding:"6px 15px"},children:t}),yr=({activekey:t,tabs:e=[],switchTab:r,trackColor:a,flex:n,...i},s)=>{const[u,f]=(0,y.useState)(t??e[0]?.key),[_,A]=(0,y.useState)({}),C=(0,y.useRef)({}),b=(0,y.useRef)();(0,y.useEffect)(()=>{const S=C.current[u];S&&R(S)},[]);const R=S=>{const{left:D,width:N}=st(S),M=st(b.current).left;A({left:D-M,width:N})},W=(S,D)=>{S.stopPropagation(),f(D),typeof r=="function"&&r(D),R(S.currentTarget)};return(0,o.jsxs)("div",{className:"tabs-header-wrap",...i,ref:s,children:[(0,o.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:b,children:e.map(S=>(0,o.jsx)("li",{ref:D=>C.current[S.key]=D,className:`th-item${u===S.key?" active":""}`,onClick:D=>W(D,S.key),children:typeof S.renderTabs=="function"?S.renderTabs(S,u===S.key):xr(S.value)},S.key))}),(0,o.jsx)("div",{className:"th-track",style:{..._,color:a}})]})},mr=(0,y.forwardRef)(yr),_r=(t,e,r="id",a="children")=>{if(!jt(t))return null;const n=i=>{for(let s=0,u=i.length;s<u;s++){const f=i[s];if(f[r]===e)return[f];if(jt(f[a])){const _=n(f[a]);if(_)return[f].concat(_)}}};return n(t)},gr=t=>++t,br=()=>{const[,t]=(0,y.useState)(0);return(0,y.useCallback)(()=>t(gr),[])},oe=t=>{const{children:e,open:r}=t;let a=0;if(r&&e?.length){a=e.length;let n=0;return e.map(i=>n+=oe(i)),a+n}return a},vr=({item:t,style:e,...r})=>(0,o.jsx)("ul",{style:{...e,"--count":oe(t)},...r});var Et=v(133),yt={};yt.styleTagTransform=F(),yt.setAttributes=m(),yt.insert=w().bind(null,"head"),yt.domAPI=k(),yt.insertStyleElement=z();var La=c()(Et.A,yt);const Ua=Et.A&&Et.A.locals?Et.A.locals:void 0,wr=t=>(0,o.jsx)("ul",{...t}),kr=(t,e)=>t?vr:({item:r,...a})=>(0,o.jsx)(wr,{className:e==="right"?"left":"",...a}),Er=t=>{const{data:e=[],collapsed:r=!1,type:a="vertical",Link:n,width:i,bgColor:s,itemHeight:u,collapsedWidth:f,itemPadding:_,style:A,className:C,...b}=t,R=(0,y.useRef)(),W=(0,y.useRef)();(0,y.useEffect)(()=>()=>clearTimeout(R.current),[]);const S=br(),D=a==="horizontal",N=!D&&r,M={onClick:(Y,q)=>{if(Y.stopPropagation(),!D&&!N){const X=_r(e,q.path,"path"),ot=X[X.length-1];ot.open=!ot.open,S()}},onMouseEnter:(Y,q,X)=>{N&&!X&&(clearTimeout(R.current),W.current.style.width="var(--maxWidth)")},onMouseLeave:(Y,q,X)=>{N&&!X&&(R.current=setTimeout(()=>W.current.style.width="",200))}},L=(D?["huxy-horizontal-tree",C]:["huxy-tree",C,N?"collapsed":""]).filter(Boolean).join(" "),{float:V,...et}=b?.style??{},K={"--bgColor":s,"--itemHeight":u,"--nodeListWidth":i,...et};D?(K["--itemPadding"]=_,K["--nodeFloat"]=V):(K["--width"]=i,K["--collapsedWidth"]=f);const rt=kr(!D&&!N,V);return(0,o.jsx)("div",{ref:W,className:L,style:K,...b,children:(0,o.jsx)("div",{className:"huxy-tree-track",children:(0,o.jsx)("ul",{className:"huxy-tree-root",children:re({data:e,events:M,List:rt,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:D,isCollapsed:N})})})})},Cr=()=>{const[t,e]=Bt(nt());return(0,y.useEffect)(()=>{const r=()=>e(nt());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},ae=({menu:t,curName:e,Link:r})=>t.map(a=>{const{path:n,name:i,open:s,children:u}=a,f=i===e;return u?.length?(0,o.jsxs)("li",{className:s?"open":"",children:[(0,o.jsx)(r,{to:{query:{name:i}},className:`link${f?" active":""}`,preventDefault:!0,children:(0,o.jsx)("span",{children:i})}),(0,o.jsx)("ul",{children:(0,o.jsx)(ae,{menu:u,curName:i,Link:r})})]},n||i):(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{name:i}},className:`link${f?" active":""}`,children:(0,o.jsx)("span",{children:i})})},n||i)}),Pr=ae,Ar=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},zr=(t=0,e)=>{Q()&&(e=G(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},Sr=(t=()=>{},e=60)=>{let r=null;return function(...a){r||(t.apply(this,a),r=setTimeout(()=>r=null,e))}},Tr=(t,e=null,r=!1)=>[...t||[]].sort((a,n)=>{const i=e?a[e]:a,s=e?n[e]:n;return!isNaN(Number(i))&&!isNaN(Number(i))?r?s-i:i-s:typeof i=="string"&&typeof s=="string"?r?s.localeCompare(i):i.localeCompare(s):typeof i=="string"&&typeof s=="number"?r?-1:1:typeof i=="number"||typeof i=="string"?r?1:-1:r?-1:1}),Dr=()=>Q()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),jr=({curName:t,itemList:e})=>{const r=(0,y.useRef)(!1),a=(0,y.useRef)(""),[n,i]=(0,y.useState)(t);return(0,y.useEffect)(()=>{if(e.current=Ar(e.current),!t){const f=Object.keys(e.current).map(_=>({name:_,offsetTop:e.current[_]?.offsetTop??0}));i(f[0]?.name)}let s=0,u=0;if(a.current!==t){a.current=t;const f=e.current[t];r.current=!0,f?(zr(f.offsetTop),s=setTimeout(()=>r.current=!1,1050)):u=setTimeout(()=>{window.scrollTo?.({top:e.current[t]?.offsetTop??0,behavior:"instant"}),s=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(s),clearTimeout(u),r.current=!1}},[t]),(0,y.useEffect)(()=>{const s=Sr(()=>{if(!r.current){const f=Tr(Object.keys(e.current).map(_=>({name:_,offsetTop:e.current[_]?.offsetTop??0})),"offsetTop",!0).find(_=>_.offsetTop<Dr())?.name;a.current!==f&&(a.current=f,i(f))}});return window.addEventListener("scroll",s,!1),()=>window.removeEventListener("scroll",s,!1)},[]),[n]},Or=/!\[.*\]\((.*)\)/g,Mr=async(t,e,r)=>{const a={};for(let n=0,i=t.length;n<i;n++){const s=t[n],u=s.slice(2);a[s]=await r({folder:e,name:u})}return a},Ir=async(t,{folder:e},r)=>{const n=[...t.matchAll(Or)].filter(Boolean).map(i=>i[1]);if(n?.length){const i=await Mr(n,e,r);n.map(s=>{t=t.replace(s,i[s])})}return t},Rr=({item:t,marked:e,getContext:r})=>{const[a,n]=(0,y.useState)("");return(0,y.useEffect)(()=>{(async()=>{try{const s=await r({...t,type:".md"}),u=await Ir(s,t,r),f=typeof e=="function"?e.parse(u):f;n(f)}catch(s){n(s?.message)}})()},[]),(0,o.jsxs)("div",{className:"huxy-content",children:[Tt(a),!a&&(0,o.jsx)(Dt,{global:!0})]})},Wr=({router:t,curName:e,context:r,marked:a,getContext:n})=>{const i=(0,y.useRef)({}),[s]=jr({curName:e,itemList:i});return(0,y.useEffect)(()=>{s&&t.push({query:{name:s}})},[s]),(0,o.jsx)("div",{className:"huxy-anchor-page",children:r.map((u,f)=>(0,o.jsxs)("div",{className:"huxy-anchor-item",ref:_=>i.current[u.name]=_,children:[(0,o.jsx)("h2",{children:`${u.name}`}),(0,o.jsx)(Rr,{item:u,marked:a,getContext:n})]},u.name))})},Br=t=>{const e=[];return t.map(r=>{const[a,n]=r.name.split("/"),i=e.find(s=>s.name===a);i?i.children.push({name:n,folder:a}):e.push({name:a,children:[{name:n,folder:a}]})}),e};var Ct=v(55),mt={};mt.styleTagTransform=F(),mt.setAttributes=m(),mt.insert=w().bind(null,"head"),mt.domAPI=k(),mt.insertStyleElement=z();var tn=c()(Ct.A,mt);const en=Ct.A&&Ct.A.locals?Ct.A.locals:void 0,Nr=(t,e,r)=>({sidebar:t.find(a=>a.name===e)?.children??[],listEle:t.map(({name:a,children:n})=>(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{folder:a,name:n[0]?.name}},className:`link${a===e?" active":""}`,children:(0,o.jsx)("span",{children:a})})},a))}),Lr=t=>{const{params:e,router:r,Link:a,listFiles:n,getContext:i,marked:s,title:u,routeLink:f,routeName:_,className:A,style:C}=t,{folder:b,name:R}=e,{width:W}=Cr(),[S,D]=(0,y.useState)([]),[N,M]=(0,y.useState)(!1);(0,y.useEffect)(()=>{(async()=>{const rt=await n(),Y=Br(rt);D(Y),b||r.push({query:{folder:Y[0]?.name,name:Y[0]?.children[0]?.name}})})()},[]);const L=W<=1024,{sidebar:V,listEle:et}=Nr(S,b,a);return(0,o.jsxs)("div",{className:`huxy-doc-frame ${A??""}`,style:C,children:[(0,o.jsxs)("div",{className:"huxy-doc-header",children:[(0,o.jsx)("div",{className:"huxy-doc-banner",children:u||"\u6587\u6863\u7CFB\u7EDF"}),(0,o.jsx)("ul",{className:"huxy-doc-nav",children:L?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:"huxy-doc-collapsed",children:(0,o.jsx)("span",{className:"link",onClick:K=>{K.stopPropagation(),M(!N)},children:(0,o.jsx)(Ot,{type:N?"right":""})})}),(0,o.jsx)(Ut,{open:N,close:()=>M(!1),width:"220px",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-drawer",children:et})})]}):et}),f?(0,o.jsx)("div",{className:"huxy-doc-back",children:(0,o.jsx)(a,{to:f,children:(0,o.jsx)("span",{children:_??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,o.jsxs)("div",{className:"huxy-doc-container",children:[(0,o.jsx)("div",{className:"huxy-doc-main-page",children:(0,o.jsx)(Wr,{router:r,curName:R,context:V,marked:s,getContext:i})}),(0,o.jsx)("div",{className:"huxy-doc-menu",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,o.jsx)(Pr,{menu:V,curName:R,Link:a})})})]})]})}})();var $r=T.Rt,Vr=T.L8,Yr=T.FN,Xr=T.fv,Gr=T._s,Zr=T.ey,Qr=T.gy,Jr=T.tH,qr=T.PQ,to=T.xA,eo=T.lz,ro=T.Xb,oo=T.n1,ao=T.mk,no=T.Bl,io=T.aF,lo=T.Zk,so=T.ZL,co=T.fI,ho=T.y$,uo=T.tu,po=T.m_,fo=T.PH,xo=T.mK,yo=T.J0,mo=T.B6,_o=T.fz,go=T.Iu;export{$r as Anico,Vr as Base64Image,Yr as Carousel,Xr as Col,Gr as Drawer,Zr as Drop,Qr as Ellipsis,Jr as ErrorBoundary,qr as FullPage,to as Grid,eo as HandleError,ro as LoadError,oo as Mask,ao as MaxSize,no as Md2html,io as Modal,lo as Panel,so as Portal,co as Row,ho as Spinner,uo as TabHeader,po as Tooltip,fo as Tree,xo as fixEle,yo as fixIcon,mo as renderTree,_o as str2React,go as str2Vue};
