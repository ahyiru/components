import*as Hr from"react";import*as ne from"react-dom";var Kr={87:(x,d,l)=>{l.d(d,{Ay:()=>D,VN:()=>E,ZH:()=>_,Zx:()=>w,pG:()=>A,sQ:()=>T,t6:()=>k,v7:()=>M});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`/*@height:2px;
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
`,""]);var w="nstud",k="IZUmD",E="ylzxZ",A="Wy_0M",T="bdjKS",_="QPs9T",M="tx7CH";const D=c},587:(x,d,l)=>{l.d(d,{Ay:()=>M,Om:()=>T,Ri:()=>k,S$:()=>A,UM:()=>w,fv:()=>E,vu:()=>_});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.kLIGi {
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
`,""]);var w="kLIGi",k="XoNs4",E="x4UPo",A="qYuQn",T="GU0qu",_="svhYU";const M=c},724:(x,d,l)=>{l.d(d,{Ay:()=>U,Ih:()=>F,Vn:()=>w,Y8:()=>M,_I:()=>_,ho:()=>k,iD:()=>T,kb:()=>A,pG:()=>E,pz:()=>D});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`@keyframes animate-drawer-right-in {
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
`,""]);var w="KsHNu",k="c6aFy",E="mlowE",A="w0B0d",T="W4gG3",_="SMORg",M="e3AWW",D="VSVwl",F="hlj9r";const U=c},468:(x,d,l)=>{l.d(d,{Ay:()=>A,Zr:()=>k,ho:()=>E,og:()=>w});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`@keyframes animate-drop-in {
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
`,""]);var w="TEYHV",k="NCYpg",E="qjBWI";const A=c},55:(x,d,l)=>{l.d(d,{A:()=>w});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.huxy-doc-frame {
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
`,""]);const w=c},482:(x,d,l)=>{l.d(d,{Ay:()=>U,HM:()=>M,QN:()=>E,R8:()=>w,Y8:()=>T,ho:()=>k,k3:()=>A,kb:()=>D,pG:()=>F,ww:()=>_});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`@keyframes animate-modal-in {
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
`,""]);var w="SqXAN",k="S3vb_",E="RiDlb",A="xdqLE",T="C91AO",_="J6dpF",M="XOnmm",D="t1Fx9",F="YGj9K";const U=c},945:(x,d,l)=>{l.d(d,{$d:()=>T,Ay:()=>F,CG:()=>A,kv:()=>M,nd:()=>w,nf:()=>D,w_:()=>_});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.clear::after {
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
`,""]);var w="J8VWE",k=null,E=null,A="rOxNb",T="OQwTX",_="W_1K6",M="eCk2_",D="R2Mku";const F=c},531:(x,d,l)=>{l.d(d,{A:()=>w});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.cols-1 {
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
`,""]);const w=c},670:(x,d,l)=>{l.d(d,{A:()=>w});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`@keyframes before {
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
`,""]);const w=c},473:(x,d,l)=>{l.d(d,{A:()=>w});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.clear::after {
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
`,""]);const w=c},700:(x,d,l)=>{l.d(d,{$x:()=>T,Ay:()=>D,E9:()=>A,Vz:()=>k,ZG:()=>E,gO:()=>w,l3:()=>M,o7:()=>_});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.ofth_ {
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
`,""]);var w="ofth_",k="hVmF3",E="uzFyE",A="Giihu",T="bFVVt",_="oGmKq",M="svYWD";const D=c},133:(x,d,l)=>{l.d(d,{A:()=>w});var g=l(758),h=l.n(g),o=l(935),u=l.n(o),c=u()(h());c.push([x.id,`.node-right-icon-close {
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
`,""]);const w=c},935:x=>{x.exports=function(d){var l=[];return l.toString=function(){return this.map(function(h){var o="",u=typeof h[5]<"u";return h[4]&&(o+="@supports (".concat(h[4],") {")),h[2]&&(o+="@media ".concat(h[2]," {")),u&&(o+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),o+=d(h),u&&(o+="}"),h[2]&&(o+="}"),h[4]&&(o+="}"),o}).join("")},l.i=function(h,o,u,c,w){typeof h=="string"&&(h=[[null,h,void 0]]);var k={};if(u)for(var E=0;E<this.length;E++){var A=this[E][0];A!=null&&(k[A]=!0)}for(var T=0;T<h.length;T++){var _=[].concat(h[T]);u&&k[_[0]]||(typeof w<"u"&&(typeof _[5]>"u"||(_[1]="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {").concat(_[1],"}")),_[5]=w),o&&(_[2]&&(_[1]="@media ".concat(_[2]," {").concat(_[1],"}")),_[2]=o),c&&(_[4]?(_[1]="@supports (".concat(_[4],") {").concat(_[1],"}"),_[4]=c):_[4]="".concat(c)),l.push(_))}},l}},758:x=>{x.exports=function(d){return d[1]}},335:(x,d,l)=>{l(649);var g=Symbol.for("react.element"),h=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty;function u(c,w,k){var E,A={},T=null;k!==void 0&&(T=""+k),w.key!==void 0&&(T=""+w.key);for(E in w)o.call(w,E)&&E!=="key"&&(A[E]=w[E]);return w=A.ref,{$$typeof:g,type:c,key:T,ref:w!==void 0?w:null,props:A}}d.Fragment=h,d.jsx=u,d.jsxs=u},85:(x,d,l)=>{x.exports=l(335)},591:x=>{var d=[];function l(o){for(var u=-1,c=0;c<d.length;c++)if(d[c].identifier===o){u=c;break}return u}function g(o,u){for(var c={},w=[],k=0;k<o.length;k++){var E=o[k],A=u.base?E[0]+u.base:E[0],T=c[A]||0,_="".concat(A," ").concat(T);c[A]=T+1;var M=l(_),D={css:E[1],media:E[2],sourceMap:E[3],supports:E[4],layer:E[5]};if(M!==-1)d[M].references++,d[M].updater(D);else{var F=h(D,u);u.byIndex=k,d.splice(k,0,{identifier:_,updater:F,references:1})}w.push(_)}return w}function h(o,u){var c=u.domAPI(u);c.update(o);var w=function(E){if(E){if(E.css===o.css&&E.media===o.media&&E.sourceMap===o.sourceMap&&E.supports===o.supports&&E.layer===o.layer)return;c.update(o=E)}else c.remove()};return w}x.exports=function(o,u){u=u||{},o=o||[];var c=g(o,u);return function(k){k=k||[];for(var E=0;E<c.length;E++){var A=c[E],T=l(A);d[T].references--}for(var _=g(k,u),M=0;M<c.length;M++){var D=c[M],F=l(D);d[F].references===0&&(d[F].updater(),d.splice(F,1))}c=_}}},128:x=>{var d={};function l(h){if(typeof d[h]>"u"){var o=document.querySelector(h);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch{o=null}d[h]=o}return d[h]}function g(h,o){var u=l(h);if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");u.appendChild(o)}x.exports=g},51:x=>{function d(l){var g=document.createElement("style");return l.setAttributes(g,l.attributes),l.insert(g,l.options),g}x.exports=d},855:(x,d,l)=>{function g(h){var o=l.nc;o&&h.setAttribute("nonce",o)}x.exports=g},740:x=>{function d(h,o,u){var c="";u.supports&&(c+="@supports (".concat(u.supports,") {")),u.media&&(c+="@media ".concat(u.media," {"));var w=typeof u.layer<"u";w&&(c+="@layer".concat(u.layer.length>0?" ".concat(u.layer):""," {")),c+=u.css,w&&(c+="}"),u.media&&(c+="}"),u.supports&&(c+="}");var k=u.sourceMap;k&&typeof btoa<"u"&&(c+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),o.styleTagTransform(c,h,o.options)}function l(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)}function g(h){if(typeof document>"u")return{update:function(){},remove:function(){}};var o=h.insertStyleElement(h);return{update:function(c){d(o,h,c)},remove:function(){l(o)}}}x.exports=g},656:x=>{function d(l,g){if(g.styleSheet)g.styleSheet.cssText=l;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(l))}}x.exports=d},649:x=>{var d=g=>{var h={};return v.d(h,g),h},l=g=>()=>g;x.exports=Hr}},ie={};function v(x){var d=ie[x];if(d!==void 0)return d.exports;var l=ie[x]={id:x,exports:{}};return Kr[x](l,l.exports,v),l.exports}v.n=x=>{var d=x&&x.__esModule?()=>x.default:()=>x;return v.d(d,{a:d}),d},v.d=(x,d)=>{for(var l in d)v.o(d,l)&&!v.o(x,l)&&Object.defineProperty(x,l,{enumerable:!0,get:d[l]})},v.o=(x,d)=>Object.prototype.hasOwnProperty.call(x,d),v.r=x=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})},v.nc=void 0;var S={};(()=>{v.d(S,{Rt:()=>Ot,L8:()=>ue,FN:()=>_e,fv:()=>Nt,_s:()=>Ut,ey:()=>Ne,gy:()=>Ke,tH:()=>$t,PQ:()=>Je,xA:()=>tr,lz:()=>er,Xb:()=>Zt,n1:()=>St,mk:()=>ar,Bl:()=>Lr,aF:()=>ir,Zk:()=>cr,ZL:()=>zt,fI:()=>Gt,y$:()=>Dt,tu:()=>yr,m_:()=>Kt,PH:()=>Er,mK:()=>Vt,J0:()=>Ve,B6:()=>re,fz:()=>jt,Iu:()=>fr});var x={};v.r(x),v.d(x,{anico:()=>H.Zx,bottom:()=>H.sQ,close:()=>H.VN,default:()=>le,hline:()=>H.t6,pause:()=>H.v7,play:()=>H.ZH,right:()=>H.pG});var d={};v.r(d),v.d(d,{default:()=>Ce,"drawer-container":()=>B.iD,"drawer-content":()=>B._I,"drawer-footer":()=>B.Ih,"drawer-header":()=>B.Y8,"drawer-wrap":()=>B.Vn,"ico-close":()=>B.pz,left:()=>B.kb,open:()=>B.ho,right:()=>B.pG});var l={};v.r(l),v.d(l,{default:()=>Be,"drop-target":()=>tt.og,"drop-wrap":()=>tt.Zr,open:()=>tt.ho});var g={};v.r(g),v.d(g,{default:()=>Ue,ellipsis:()=>$.gO,"huxy-tooltip":()=>$.Vz,"huxy-tooltip-bottomLeft":()=>$.o7,"huxy-tooltip-bottomRight":()=>$.$x,"huxy-tooltip-rightTop":()=>$.l3,"huxy-tooltip-topLeft":()=>$.E9,"huxy-tooltip-topRight":()=>$.ZG});var h={};v.r(h),v.d(h,{btn:()=>I.HM,default:()=>nr,left:()=>I.kb,"modal-container":()=>I.QN,"modal-content":()=>I.Y8,"modal-footer":()=>I.ww,"modal-header":()=>I.k3,"modal-wrap":()=>I.R8,open:()=>I.ho,right:()=>I.pG});var o=v(85),u=v(591),c=v.n(u),w=v(740),k=v.n(w),E=v(128),A=v.n(E),T=v(855),_=v.n(T),M=v(51),D=v.n(M),F=v(656),U=v.n(F),H=v(87),at={};at.styleTagTransform=U(),at.setAttributes=_(),at.insert=A().bind(null,"head"),at.domAPI=k(),at.insertStyleElement=D();var bo=c()(H.Ay,at);const le=H.Ay&&H.Ay.locals?H.Ay.locals:void 0,Ot=t=>(0,o.jsx)("span",{className:H.Zx,children:(0,o.jsx)("span",{className:[H.t6,...(t.type||"").split(" ").map(e=>x[e]).filter(Boolean)].join(" ")})});var m=v(649);const se=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),ce=t=>new Promise((e,r)=>{const a=new FileReader;a.readAsDataURL(t),a.addEventListener("load",()=>e(a.result)),a.addEventListener("error",n=>r(n))}),de=async t=>{if(!se(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await ce(r)},he=t=>{const[e,r]=(0,m.useState)(t);return(0,m.useEffect)(()=>{(async n=>{const i=await de(n);r(i)})(t)},[t]),e},ue=({src:t,...e})=>{const r=he(t);return(0,o.jsx)("img",{...e,src:r})};var pe=t=>{var e={};return v.d(e,t),e},Ao=t=>()=>t;const Mt=pe({createPortal:()=>ne.createPortal,flushSync:()=>ne.flushSync}),fe=(t,e)=>{const r=(0,m.useRef)();(0,m.useEffect)(()=>{r.current=t},[t]),(0,m.useEffect)(()=>{if(e){const a=setInterval(()=>r.current(),e);return()=>clearInterval(a)}},[e])},Q=()=>![typeof window,typeof document].includes("undefined"),It=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),At=t=>It(t).indexOf("element")>-1,nt=(t=null)=>Q()?At(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Rt=(t=()=>{},e=60)=>{let r=null;return function(...a){clearTimeout(r),r=setTimeout(()=>t.apply(this,a),e)}},xe=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),G=t=>xe(t,"current"),Wt=(t,e)=>{const r=[],a=t.children??[];for(let n=0,i=a.length;n<i;n++){const s=a[n];s.className.indexOf(e)>-1&&r.push(s)}return r.length===0?null:r.length===1?r[0]:r},me=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},ye=(t,e=60)=>{if(!Q())return;t=G(t)?t.current:t??document.body;let r=Wt(t,"resize-sensor"),a=[];const n=Rt(()=>a.map(f=>f(t)),e),i=f=>{Wt(t,"resize-sensor")||(r=me(t,n)),a.indexOf(f)===-1&&a.push(f)},s=f=>{const y=a.indexOf(f);y!==-1&&a.splice(y,1),a.length===0&&r&&p()},p=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,a=[])};return{element:t,bind:i,unbind:s,destroy:p}},Bt=(t={})=>{const e=(0,m.useRef)(0),[r,a]=(0,m.useState)(t),n=(0,m.useCallback)(i=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>a(i))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},ge=(t=null,e=60)=>{const r=G(t)?t.current:t,{bind:a,destroy:n}=ye(r,e),[i,s]=Bt(nt(r));return(0,m.useEffect)(()=>(a(()=>r&&s(nt(r))),()=>n()),[r]),i};var Z=v(587),it={};it.styleTagTransform=U(),it.setAttributes=_(),it.insert=A().bind(null,"head"),it.domAPI=k(),it.insertStyleElement=D();var Lo=c()(Z.Ay,it);const Uo=Z.Ay&&Z.Ay.locals?Z.Ay.locals:void 0,_e=({children:t,active:e=0,delay:r=5e3,className:a,...n})=>{const[i,s]=(0,m.useState)(e+1),[p,f]=(0,m.useState)(!1),y=(0,m.useRef)(),P=(0,m.useRef)(""),{width:C}=ge(y);t=Array.isArray(t)?t:[t];const b=t[0],W=[t[t.length-1],...t,b],z=W.length;fe(()=>{let O=i+1;O=O===z?1:O,P.current&&(P.current=""),s(O),O===z-1&&setTimeout(()=>{P.current="none",s(1)},500)},p?null:r);const j=(O,L)=>{L.stopPropagation(),P.current="",s(O),(0,Mt.flushSync)(()=>f(!0)),f(!1)},N={width:`${z*C}px`,transform:`translateX(${-C*i}px)`,transition:P.current};return(0,o.jsxs)("div",{className:`${Z.UM}${a?` ${a}`:""}`,...n,ref:y,children:[(0,o.jsx)("div",{className:Z.Ri,style:N,children:W.map((O,L)=>(0,o.jsx)("div",{className:`${Z.fv} ${i===L?Z.vu:""}`,style:{width:`${C}px`},children:O},`huxy-carousel-${L}`))}),(0,o.jsx)("div",{className:Z.S$,children:t.map((O,L)=>(0,o.jsx)("span",{className:`${Z.Om} ${i===L+1?Z.vu:""}`,onClick:V=>j(L+1,V)},`huxy-carousel-switch-${L}`))})]})},gt=(t,e)=>{let r="",a="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:i}=e;r=n?`col-${t}-${n}`:"",a=i?`offset-${t}-${i}`:""}return{sp:r,os:a}},Nt=(0,m.forwardRef)(({span:t,offset:e,xl:r,lg:a,md:n,sm:i,xs:s,style:p,width:f,auto:y,offsetWidth:P="0px",className:C,...b},R)=>{const W=C?` ${C}`:"",z=`col-${t||12}`,j=e?`offset-${e}`:"",{sp:N,os:O}=gt("xs",s),{sp:L,os:V}=gt("sm",i),{sp:et,os:K}=gt("md",n),{sp:rt,os:Y}=gt("lg",a),{sp:q,os:X}=gt("xl",r),ot=[z,q,rt,et,L,N,j,X,Y,K,V,O].filter(Boolean).join(" "),Pt=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${P})`}:{width:f};return(0,o.jsx)("div",{className:`${ot}${W}`,...b,style:{...Pt,...p},ref:R})}),be=()=>{const t=(0,m.useRef)(!0);return t.current?(t.current=!1,!0):!1},ve=(t,e=[])=>{const r=be();(0,m.useEffect)(()=>{if(!r)return t()},e)},Lt=(t,e=450)=>{const[r,a]=(0,m.useState)(t);return ve(()=>{let n;return t||e===0?a(t):n=setTimeout(()=>a(t),e),()=>n&&clearTimeout(n)},[t]),[r,a]},zt=({children:t,mountNode:e=document.body})=>(0,Mt.createPortal)(t,e),we={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},ke={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Ee=document.body,St=({open:t,close:e,delay:r=300,children:a,mountNode:n,hasMask:i=!0,style:s,className:p="h-mask",relative:f})=>{const[y]=Lt(t,r);(n??Ee).style.overflow=y?"hidden":"";const P=f?"absolute":"fixed";return(0,o.jsx)(zt,{mountNode:n,children:(0,o.jsx)("div",{children:y?(0,o.jsxs)("div",{className:p,style:{...we,position:P},children:[i?(0,o.jsx)("div",{style:{...ke,position:P},onClick:C=>e?.(C)}):null,m.Children.map(a,C=>(0,m.isValidElement)(C)?(0,m.cloneElement)(C,{style:{position:"relative",zIndex:100001,...C.props.style}}):C)]}):null})})};var B=v(724),lt={};lt.styleTagTransform=U(),lt.setAttributes=_(),lt.insert=A().bind(null,"head"),lt.domAPI=k(),lt.insertStyleElement=D();var Go=c()(B.Ay,lt);const Ce=B.Ay&&B.Ay.locals?B.Ay.locals:void 0,Ut=({open:t,close:e,footer:r,header:a,className:n,style:i,children:s,width:p="300px",mountNode:f,position:y="right",relative:P})=>{const C=["drawer-wrap",y,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(b=>d[b]).join(" ");return(0,o.jsx)(St,{open:t,close:e,delay:250,hasMask:!0,relative:P,mountNode:f,className:"huxy-drawer",children:(0,o.jsx)("div",{className:C,style:{width:p,position:P?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":a?"44px":"0px",...i},children:(0,o.jsxs)("div",{className:B.iD,children:[a?(0,o.jsxs)("div",{className:B.Y8,children:[y==="right"?(0,o.jsx)("span",{className:`link ${B.pz}`,onClick:b=>e?.(b)}):null,(0,o.jsx)("div",{children:a}),y==="left"?(0,o.jsx)("span",{className:`link ${B.pz}`,onClick:b=>e?.(b)}):null]}):null,(0,o.jsx)("div",{className:B._I,children:s}),r?(0,o.jsx)("div",{className:B.Ih,children:r}):null]})})})},Pe=(t,e,r="click")=>{(0,m.useEffect)(()=>{const a=i=>{const s=G(t)?t.current:t;s?.contains&&!s.contains(i.target)&&e(i)},n=typeof r=="string"?[r]:r;return n.map(i=>{document.addEventListener(i,a,!1)}),()=>{n.map(i=>{document.removeEventListener(i,a,!1)})}},[t,e,r])},Ae=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&["react.transitional.element","react.element"].includes(t.$$typeof.description),ze=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),st=t=>{if(Q())return t=G(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Se=t=>{if(!Q())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},_t=(t,e={},r=!1)=>{if(At(t)){if(r){let a="";Object.keys(e).map(n=>{a+=`${n}: ${e[n]};`}),t.style=a;return}Object.keys(e).map(a=>t.style.setProperty(a,e[a]))}},je=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,De=(t=350,e="ms")=>new Promise(r=>setTimeout(r,je(t,e))),oa=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},Te=De,Oe=async(t,e=15)=>{if(!Q())return;if(typeof t=="string"&&(t=Se(t)),t=G(t)?t.current:t,!At(t))return{};const r=t.cloneNode(!0);_t(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await Te(e);const a=st(r);return t.parentNode.removeChild(r),a},Me=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Ie=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ft=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Me.test(r)?t.setAttribute("class",r.replace(Ie,e)):t.setAttribute("class",`${r} ${e}`)},Ht=async(t,e,r)=>{const{left:a,right:n,top:i,bottom:s}=st(t),{width:p,height:f}=nt(),{width:y,height:P}=await Oe(e);if(n<0||s<0||a>p||i>f)return{};if(r==="vertical"){const C={left:a+"px",top:s+10+"px",right:"auto",bottom:"auto"};let b="lt";a+y>p&&(C.left=n-y+"px",b="rt"),s+10+P>f&&(C.top=i-10-P+"px",b=b==="lt"?"lb":"rb"),_t(e,C),Ft(e,b)}else{const C={left:n+10+"px",top:i+"px",right:"auto",bottom:"auto"};let b="tl";n+10+y>p&&(C.left=a-10-y+"px",b="tr"),i+P>f&&(C.top=s-P+"px",b=b==="tl"?"bl":"br"),_t(e,C),Ft(e,b)}},Re=(t,e,r="horizontal")=>{const a=Rt(Ht),n=()=>a(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const i=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),_t(e,{left:"",top:"",right:"",bottom:""})};return Ht(t,e,r),i},We=({open:t,delay:e=280,children:r,mountNode:a,style:n,...i})=>{const[s]=Lt(t,e);return(0,o.jsx)(zt,{mountNode:a,children:(0,o.jsx)("div",{children:(0,o.jsx)("div",{style:{...n,display:s?"block":"none"},...i,children:r})})})};var tt=v(468),ct={};ct.styleTagTransform=U(),ct.setAttributes=_(),ct.insert=A().bind(null,"head"),ct.domAPI=k(),ct.insertStyleElement=D();var la=c()(tt.Ay,ct);const Be=tt.Ay&&tt.Ay.locals?tt.Ay.locals:void 0,Ne=({trigger:t="click",type:e,dropList:r,className:a,children:n,targetProps:i,...s})=>{const[p,f]=(0,m.useState)(!1),y=(0,m.useRef)(),P=(0,m.useRef)(),C=(0,m.useRef)();Pe(y,j=>p&&f(!1),[...new Set(["click",t.toLowerCase()])]),(0,m.useEffect)(()=>()=>C.current?.(),[]);const b=j=>{j.preventDefault(),f(!0),C.current=Re(y.current,P.current,e)},R={[`on${ze(t)}`]:b},W=["drop-wrap",p?"open":"",a].filter(Boolean).map(j=>l[j]).join(" "),z=Ae(r)?r:r?.(()=>f(!1),p);return(0,o.jsxs)("span",{ref:y,className:tt.og,...i,...R,children:[n,(0,o.jsx)(We,{open:p,className:"huxy-drop",children:(0,o.jsx)("div",{ref:P,className:W,...s,children:z})})]})},Le=(t,e,r)=>{if(!Q())return;r=G(r)?r.current:r??document.body;const a=document.createElement("span");a.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&_t(a,e),a.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(a);const n=a.getBoundingClientRect();return r.removeChild(a),n};var $=v(700),dt={};dt.styleTagTransform=U(),dt.setAttributes=_(),dt.insert=A().bind(null,"head"),dt.domAPI=k(),dt.insertStyleElement=D();var da=c()($.Ay,dt);const Ue=$.Ay&&$.Ay.locals?$.Ay.locals:void 0,Kt=({title:t,placement:e="topRight",children:r,ellipsis:a,className:n,...i})=>(0,o.jsx)("span",{className:`${g[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...i,children:(0,o.jsx)("span",{className:a?$.gO:"",children:r})}),Fe={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},He=t=>{const{children:e,style:r}=t,a=typeof e=="string",n=a?e:e?.props?.title??e?.props?.children,i=(0,m.useRef)(),[s,p]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{if(i.current){const{width:f}=Le(n,null,i.current.parentNode),{width:y}=st(i.current),P=~~f>~~y;P!==s&&p(P)}},[n]),(0,o.jsx)("span",{ref:i,style:{display:"flex",width:"100%",...r},children:s?a?(0,o.jsx)(Kt,{...t,ellipsis:!0}):(0,o.jsx)("span",{style:Fe,children:e}):a?e:e?.props?.children})},Ke=t=>t.children==null?"":(0,o.jsx)(He,{...t});class $t extends m.default.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:a}=this.props;typeof a=="function"&&a({error:e,info:r.componentStack})}render(){const{error:e}=this.state,{fallback:r,children:a}=this.props;return e?r?.(e)??e:a}}const Vt=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,o.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,o.jsx)(r,{}):(0,o.jsx)("i",{className:e})}return e??null},$e=t=>Vt(t),Ve=t=>({icon:e,defaultIcon:r})=>e?$e(t)(e):e===!1?null:r,bt=["","webkit","moz","ms"],Ye=t=>bt.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Xe=t=>bt.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Ge=t=>bt.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Yt=bt.map(t=>`${t}fullscreenchange`),Ze=t=>{if(!Q())return;t=G(t)?t.current:t??document.body;const e=Ye(document),r=Xe(t),a=Ge(document);document[e]?document[a]?.():t[r]?.()},Qe=t=>Q()?(Yt.map(r=>document.addEventListener(r,t,!1)),()=>Yt.map(r=>document.removeEventListener(r,t,!1))):void 0,Xt=t=>(0,o.jsx)("i",{...t,children:"..."}),Je=({panel:t,fullIcon:e=Xt,exitIcon:r=Xt,...a})=>{const n=G(t)?t.current:t,[i,s]=(0,m.useState)();(0,m.useEffect)(()=>{const f=Qe(()=>{s(y=>!y)});return()=>f()},[]);const p=i?r:e;return(0,o.jsx)(p,{onClick:f=>Ze(n),...a})};var vt=v(531),ht={};ht.styleTagTransform=U(),ht.setAttributes=_(),ht.insert=A().bind(null,"head"),ht.domAPI=k(),ht.insertStyleElement=D();var ga=c()(vt.A,ht);const _a=vt.A&&vt.A.locals?vt.A.locals:void 0,qe=({gutter:t=10,className:e,overflow:r="hidden",...a},n)=>{const i=e?` ${e}`:"";let s=10;if(Array.isArray(t)){const p=[...t];t=p[0],s=p[1]??p[0]}return(0,o.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(s/2)}px`,overflow:r},children:(0,o.jsx)("div",{className:`row${i}`,...a,ref:n})})},Gt=(0,m.forwardRef)(qe),tr=({rowProps:t,colProps:e,children:r,Row:a=Gt,Col:n=Nt})=>{const i=[];return m.Children.map(r,s=>{s&&(s.type?.description==="react.fragment"?i.push(...s.props.children):i.push(s))}),(0,o.jsx)(a,{...t,children:i.map((s,p)=>(0,o.jsx)(n,{...e,...s.props.itemprops,children:s},`huuxy_grid_${p}`))})},jt=(t,e)=>(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),Zt=t=>{const{error:e={},info:r=""}=t||{},{message:a,stack:n,errMsg:i}=e;let s=i||n||e.toString();s=`${s}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),s=s.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),s=s.replace(/\s/g,"&nbsp;");const p=a?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,o.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[jt(s,{style:{color:"red"}}),p&&(0,o.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${p}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},er=({children:t,report:e})=>{const r=(0,m.useRef)();return r.current?.state&&(r.current.state.error=null),(0,o.jsx)($t,{ref:r,fallback:(a,n)=>Zt({error:a,info:n}),errorReport:e,children:t})},Qt=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),rr=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),or={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Jt=({left:t,top:e,width:r,height:a})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${a}px`}),qt=t=>(0,o.jsx)("i",{...t,children:"..."}),te=t=>{const{left:e,top:r}=st(t),{width:a,height:n}=nt(t);return{left:e,top:r,width:a,height:n}},ar=({panel:t,target:e,fullIcon:r=qt,exitIcon:a=qt})=>{t=G(t)?t.current:t||document.body;const[n,i]=(0,m.useState)(),s=(0,m.useRef)();(0,m.useEffect)(()=>{s.current={...or,...Jt(te(t))}},[t]);const p=(y,P)=>{if(y){const b=Jt(te((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));Qt(P,s.current),setTimeout(()=>{Qt(P,b)},0)}else rr(P,s.current);i(y)},f=n?a:r;return(0,o.jsx)(f,{onClick:y=>p(!n,t)})};var I=v(482),ut={};ut.styleTagTransform=U(),ut.setAttributes=_(),ut.insert=A().bind(null,"head"),ut.domAPI=k(),ut.insertStyleElement=D();var Ca=c()(I.Ay,ut);const nr=I.Ay&&I.Ay.locals?I.Ay.locals:void 0,ir=({open:t,close:e,hasMask:r=!0,cancelText:a="\u53D6\u6D88",submit:n,submitText:i="\u786E\u5B9A",title:s="Modal \u5F39\u7A97",className:p,children:f,delay:y=250,...P})=>{const C=["modal-wrap",t?"open":"",...p?.split(" ")??[]].filter(Boolean).map(b=>h[b]).join(" ");return(0,o.jsx)(St,{open:t,close:e,delay:y,hasMask:r,className:"huxy-modal",children:(0,o.jsx)("div",{className:C,...P,children:(0,o.jsxs)("div",{className:I.QN,children:[(0,o.jsx)("div",{className:I.k3,children:s}),(0,o.jsx)("div",{className:I.Y8,children:f}),(0,o.jsxs)("div",{className:I.ww,children:[(0,o.jsx)("div",{className:`${I.HM} ${I.kb}`,onClick:b=>e?.(b),children:a}),(0,o.jsx)("div",{className:`${I.HM} ${I.pG}`,onClick:b=>n?.(b),children:i})]})]})})})};var wt=v(670),pt={};pt.styleTagTransform=U(),pt.setAttributes=_(),pt.insert=A().bind(null,"head"),pt.domAPI=k(),pt.insertStyleElement=D();var Aa=c()(wt.A,pt);const za=wt.A&&wt.A.locals?wt.A.locals:void 0,Dt=({global:t,absolute:e})=>(0,o.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,o.jsx)("figure",{className:"spinning"})});var J=v(945),ft={};ft.styleTagTransform=U(),ft.setAttributes=_(),ft.insert=A().bind(null,"head"),ft.domAPI=k(),ft.insertStyleElement=D();var ja=c()(J.Ay,ft);const Da=J.Ay&&J.Ay.locals?J.Ay.locals:void 0,lr=t=>t?.filter?.(e=>typeof e=="function"),sr=(t,e)=>{const r=(0,m.useRef)(),{loading:a,title:n,plugins:i,children:s,className:p,...f}=t,y=lr(i),P=y?.length,C=p?` ${p}`:"",b=G(e)?e:r;return(0,o.jsxs)("div",{className:`${J.nd}${C}`,...f,ref:b,children:[(n||P)&&(0,o.jsxs)("div",{className:J.$d,children:[n&&(0,o.jsx)("h4",{className:J.w_,children:n}),P&&(0,o.jsx)("div",{className:J.kv,children:y.map((R,W)=>(0,o.jsx)("span",{className:`link ${J.nf}`,children:(0,o.jsx)(R,{panel:b})},W))})]}),(0,o.jsx)("div",{className:J.CG,children:s}),a&&(0,o.jsx)(Dt,{})]})},cr=(0,m.forwardRef)(sr),Tt=t=>It(t)==="array",dr=t=>Tt(t)&&!!t.length,hr=({to:t,preventDefault:e,stopPropagation:r,...a})=>e?(0,o.jsx)("span",{...a}):(0,o.jsx)("a",{href:t,...a}),ur=({item:t,...e})=>(0,o.jsx)("ul",{...e}),pr=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(a=>{r[a]=n=>t[a](n,...e)}),r},ee=({data:t=[],events:e={},List:r=ur,Link:a=hr,leftIcon:n,rightIcon:i,isHorizontal:s,isCollapsed:p,level:f=0,parentOpen:y=!0})=>{const P=p&&!f,C=!s&&!p&&!y;return t.map(b=>{const{name:R,path:W,icon:z,rightIcon:j,active:N,open:O,children:L,linkProps:V}=b,et=dr(L),K=b.id||`${W}${b.childSameRouteLevel??""}`,rt=P?b.title??R:void 0,Y=C?"hidden":"",q=z??n,X=j??i,ot=q?(0,o.jsx)("div",{className:"node-left-icon",children:q===!0?(0,o.jsx)("i",{className:"default-left-icon"}):q}):null,Pt=R?(0,o.jsx)("div",{className:"node-text",children:(0,o.jsx)("span",{children:R})}):null;if(et){const Ur=pr(e,b,f),Fr=[Y,O?"open":""].filter(Boolean).join(" ");return(0,o.jsxs)("li",{className:Fr,"has-children":"true",...Ur,children:[(0,o.jsxs)(a,{title:rt,className:`link${N?" active":""}`,to:W,preventDefault:!0,stopPropagation:!1,...V,children:[ot,Pt,X?(0,o.jsx)("div",{className:"node-right-icon",children:X===!0?(0,o.jsx)("i",{className:"default-right-icon"}):X}):null]}),(0,o.jsx)(r,{item:b,children:ee({data:L,events:e,List:r,Link:a,leftIcon:n,rightIcon:i,isHorizontal:s,isCollapsed:p,level:f+1,parentOpen:!!O})})]},K)}return(0,o.jsx)("li",{className:Y,children:(0,o.jsxs)(a,{title:rt,className:`link${N?" active":""}`,to:W,...V,children:[ot,Pt]})},K)})},re=ee,fr=(t,...e)=>(0,o.jsx)("div",{"v-html":t,...e});var kt=v(473),xt={};xt.styleTagTransform=U(),xt.setAttributes=_(),xt.insert=A().bind(null,"head"),xt.domAPI=k(),xt.insertStyleElement=D();var Ia=c()(kt.A,xt);const Ra=kt.A&&kt.A.locals?kt.A.locals:void 0,xr=t=>(0,o.jsx)("div",{style:{padding:"6px 15px"},children:t}),mr=({activekey:t,tabs:e=[],switchTab:r,trackColor:a,flex:n,...i},s)=>{const[p,f]=(0,m.useState)(t??e[0]?.key),[y,P]=(0,m.useState)({}),C=(0,m.useRef)({}),b=(0,m.useRef)();(0,m.useEffect)(()=>{const z=C.current[p];z&&R(z)},[]);const R=z=>{const{left:j,width:N}=st(z),O=st(b.current).left;P({left:j-O,width:N})},W=(z,j)=>{z.stopPropagation(),f(j),typeof r=="function"&&r(j),R(z.currentTarget)};return(0,o.jsxs)("div",{className:"tabs-header-wrap",...i,ref:s,children:[(0,o.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:b,children:e.map(z=>(0,o.jsx)("li",{ref:j=>C.current[z.key]=j,className:`th-item${p===z.key?" active":""}`,onClick:j=>W(j,z.key),children:typeof z.renderTabs=="function"?z.renderTabs(z,p===z.key):xr(z.value)},z.key))}),(0,o.jsx)("div",{className:"th-track",style:{...y,color:a}})]})},yr=(0,m.forwardRef)(mr),gr=(t,e,r="id",a="children")=>{if(!Tt(t))return null;const n=i=>{for(let s=0,p=i.length;s<p;s++){const f=i[s];if(f[r]===e)return[f];if(Tt(f[a])){const y=n(f[a]);if(y)return[f].concat(y)}}};return n(t)},_r=t=>++t,br=()=>{const[,t]=(0,m.useState)(0);return(0,m.useCallback)(()=>t(_r),[])},oe=t=>{const{children:e,open:r}=t;let a=0;if(r&&e?.length){a=e.length;let n=0;return e.map(i=>n+=oe(i)),a+n}return a},vr=({item:t,style:e,...r})=>(0,o.jsx)("ul",{style:{...e,"--count":oe(t)},...r});var Et=v(133),mt={};mt.styleTagTransform=U(),mt.setAttributes=_(),mt.insert=A().bind(null,"head"),mt.domAPI=k(),mt.insertStyleElement=D();var La=c()(Et.A,mt);const Ua=Et.A&&Et.A.locals?Et.A.locals:void 0,wr=t=>(0,o.jsx)("ul",{...t}),kr=(t,e)=>t?vr:({item:r,...a})=>(0,o.jsx)(wr,{className:e==="right"?"left":"",...a}),Er=t=>{const{data:e=[],collapsed:r=!1,type:a="vertical",Link:n,width:i,bgColor:s,itemHeight:p,collapsedWidth:f,itemPadding:y,style:P,className:C,...b}=t,R=(0,m.useRef)(),W=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(R.current),[]);const z=br(),j=a==="horizontal",N=!j&&r,O={onClick:(Y,q)=>{if(Y.stopPropagation(),!j&&!N){const X=gr(e,q.path,"path"),ot=X[X.length-1];ot.open=!ot.open,z()}},onMouseEnter:(Y,q,X)=>{N&&!X&&(clearTimeout(R.current),W.current.style.width="var(--maxWidth)")},onMouseLeave:(Y,q,X)=>{N&&!X&&(R.current=setTimeout(()=>W.current.style.width="",200))}},L=(j?["huxy-horizontal-tree",C]:["huxy-tree",C,N?"collapsed":""]).filter(Boolean).join(" "),{float:V,...et}=b?.style??{},K={"--bgColor":s,"--itemHeight":p,"--nodeListWidth":i,...et};j?(K["--itemPadding"]=y,K["--nodeFloat"]=V):(K["--width"]=i,K["--collapsedWidth"]=f);const rt=kr(!j&&!N,V);return(0,o.jsx)("div",{ref:W,className:L,style:K,...b,children:(0,o.jsx)("div",{className:"huxy-tree-track",children:(0,o.jsx)("ul",{className:"huxy-tree-root",children:re({data:e,events:O,List:rt,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:j,isCollapsed:N})})})})},Cr=()=>{const[t,e]=Bt(nt());return(0,m.useEffect)(()=>{const r=()=>e(nt());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},ae=({menu:t,curName:e,Link:r})=>t.map(a=>{const{path:n,name:i,open:s,children:p}=a,f=i===e;return p?.length?(0,o.jsxs)("li",{className:s?"open":"",children:[(0,o.jsx)(r,{to:{query:{name:i}},className:`link${f?" active":""}`,preventDefault:!0,children:(0,o.jsx)("span",{children:i})}),(0,o.jsx)("ul",{children:(0,o.jsx)(ae,{menu:p,curName:i,Link:r})})]},n||i):(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{name:i}},className:`link${f?" active":""}`,children:(0,o.jsx)("span",{children:i})})},n||i)}),Pr=ae,Ar=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},zr=(t=0,e)=>{Q()&&(e=G(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},Sr=(t=()=>{},e=60)=>{let r=null;return function(...a){r||(t.apply(this,a),r=setTimeout(()=>r=null,e))}},jr=(t,e=null,r=!1)=>[...t||[]].sort((a,n)=>{const i=e?a[e]:a,s=e?n[e]:n;return!isNaN(Number(i))&&!isNaN(Number(i))?r?s-i:i-s:typeof i=="string"&&typeof s=="string"?r?s.localeCompare(i):i.localeCompare(s):typeof i=="string"&&typeof s=="number"?r?-1:1:typeof i=="number"||typeof i=="string"?r?1:-1:r?-1:1}),Dr=()=>Q()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Tr=({curName:t,itemList:e})=>{const r=(0,m.useRef)(!1),a=(0,m.useRef)(""),[n,i]=(0,m.useState)(t);return(0,m.useEffect)(()=>{if(e.current=Ar(e.current),!t){const f=Object.keys(e.current).map(y=>({name:y,offsetTop:e.current[y]?.offsetTop??0}));i(f[0]?.name)}let s=0,p=0;if(a.current!==t){a.current=t;const f=e.current[t];r.current=!0,f?(zr(f.offsetTop),s=setTimeout(()=>r.current=!1,1050)):p=setTimeout(()=>{window.scrollTo?.({top:e.current[t]?.offsetTop??0,behavior:"instant"}),s=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(s),clearTimeout(p),r.current=!1}},[t]),(0,m.useEffect)(()=>{const s=Sr(()=>{if(!r.current){const f=jr(Object.keys(e.current).map(y=>({name:y,offsetTop:e.current[y]?.offsetTop??0})),"offsetTop",!0).find(y=>y.offsetTop<Dr())?.name;a.current!==f&&(a.current=f,i(f))}});return window.addEventListener("scroll",s,!1),()=>window.removeEventListener("scroll",s,!1)},[]),[n]},Or=/!\[.*\]\((.*)\)/g,Mr=async(t,e,r)=>{const a={};for(let n=0,i=t.length;n<i;n++){const s=t[n],p=s.slice(2);a[s]=await r({folder:e,name:p})}return a},Ir=async(t,{folder:e},r)=>{const n=[...t.matchAll(Or)].filter(Boolean).map(i=>i[1]);if(n?.length){const i=await Mr(n,e,r);n.map(s=>{t=t.replace(s,i[s])})}return t},Rr=({item:t,marked:e,getContext:r})=>{const[a,n]=(0,m.useState)("");return(0,m.useEffect)(()=>{(async()=>{try{const s=await r({...t,type:".md"}),p=await Ir(s,t,r),f=typeof e=="function"?e.parse(p):f;n(f)}catch(s){n(s?.message)}})()},[]),(0,o.jsxs)("div",{className:"huxy-content",children:[jt(a),!a&&(0,o.jsx)(Dt,{global:!0})]})},Wr=({router:t,curName:e,context:r,marked:a,getContext:n})=>{const i=(0,m.useRef)({}),[s]=Tr({curName:e,itemList:i});return(0,m.useEffect)(()=>{s&&t.push({query:{name:s}})},[s]),(0,o.jsx)("div",{className:"huxy-anchor-page",children:r.map((p,f)=>(0,o.jsxs)("div",{className:"huxy-anchor-item",ref:y=>i.current[p.name]=y,children:[(0,o.jsx)("h2",{children:`${p.name}`}),(0,o.jsx)(Rr,{item:p,marked:a,getContext:n})]},p.name))})},Br=t=>{const e=[];return t.map(r=>{const[a,n]=r.name.split("/"),i=e.find(s=>s.name===a);i?i.children.push({name:n,folder:a}):e.push({name:a,children:[{name:n,folder:a}]})}),e};var Ct=v(55),yt={};yt.styleTagTransform=U(),yt.setAttributes=_(),yt.insert=A().bind(null,"head"),yt.domAPI=k(),yt.insertStyleElement=D();var tn=c()(Ct.A,yt);const en=Ct.A&&Ct.A.locals?Ct.A.locals:void 0,Nr=(t,e,r)=>({sidebar:t.find(a=>a.name===e)?.children??[],listEle:t.map(({name:a,children:n})=>(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{folder:a,name:n[0]?.name}},className:`link${a===e?" active":""}`,children:(0,o.jsx)("span",{children:a})})},a))}),Lr=t=>{const{params:e,router:r,Link:a,listFiles:n,getContext:i,marked:s,title:p,routeLink:f,routeName:y,className:P,style:C}=t,{folder:b,name:R}=e,{width:W}=Cr(),[z,j]=(0,m.useState)([]),[N,O]=(0,m.useState)(!1);(0,m.useEffect)(()=>{(async()=>{const rt=await n(),Y=Br(rt);j(Y),b||r.push({query:{folder:Y[0]?.name,name:Y[0]?.children[0]?.name}})})()},[]);const L=W<=1024,{sidebar:V,listEle:et}=Nr(z,b,a);return(0,o.jsxs)("div",{className:`huxy-doc-frame ${P??""}`,style:C,children:[(0,o.jsxs)("div",{className:"huxy-doc-header",children:[(0,o.jsx)("div",{className:"huxy-doc-banner",children:p||"\u6587\u6863\u7CFB\u7EDF"}),(0,o.jsx)("ul",{className:"huxy-doc-nav",children:L?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:"huxy-doc-collapsed",children:(0,o.jsx)("span",{className:"link",onClick:K=>{K.stopPropagation(),O(!N)},children:(0,o.jsx)(Ot,{type:N?"right":""})})}),(0,o.jsx)(Ut,{open:N,close:()=>O(!1),width:"220px",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-drawer",children:et})})]}):et}),f?(0,o.jsx)("div",{className:"huxy-doc-back",children:(0,o.jsx)(a,{to:f,children:(0,o.jsx)("span",{children:y??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,o.jsxs)("div",{className:"huxy-doc-container",children:[(0,o.jsx)("div",{className:"huxy-doc-main-page",children:(0,o.jsx)(Wr,{router:r,curName:R,context:V,marked:s,getContext:i})}),(0,o.jsx)("div",{className:"huxy-doc-menu",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,o.jsx)(Pr,{menu:V,curName:R,Link:a})})})]})]})}})();var $r=S.Rt,Vr=S.L8,Yr=S.FN,Xr=S.fv,Gr=S._s,Zr=S.ey,Qr=S.gy,Jr=S.tH,qr=S.PQ,to=S.xA,eo=S.lz,ro=S.Xb,oo=S.n1,ao=S.mk,no=S.Bl,io=S.aF,lo=S.Zk,so=S.ZL,co=S.fI,ho=S.y$,uo=S.tu,po=S.m_,fo=S.PH,xo=S.mK,mo=S.J0,yo=S.B6,go=S.fz,_o=S.Iu;export{$r as Anico,Vr as Base64Image,Yr as Carousel,Xr as Col,Gr as Drawer,Zr as Drop,Qr as Ellipsis,Jr as ErrorBoundary,qr as FullPage,to as Grid,eo as HandleError,ro as LoadError,oo as Mask,ao as MaxSize,no as Md2html,io as Modal,lo as Panel,so as Portal,co as Row,ho as Spinner,uo as TabHeader,po as Tooltip,fo as Tree,xo as fixEle,mo as fixIcon,yo as renderTree,go as str2React,_o as str2Vue};
