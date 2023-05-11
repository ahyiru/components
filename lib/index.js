import*as He from"react";import*as ct from"react-dom";var Ze={269:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`/*@height:2px;
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
`,""]),c.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const _=c},528:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.kLIGi {
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
`,""]),c.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const _=c},434:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`@keyframes animate-drawer-right-in {
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
  --headerHeight: 44px;
  --footerHeight: 0px;
}
.W4gG3 .SMORg {
  padding: 8px 12px 24px;
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
`,""]),c.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const _=c},503:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`@keyframes animate-drop-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
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
    transform: translate3d(0, -30px, 0);
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
`,""]),c.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const _=c},556:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.huxy-doc-frame {
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
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid var(--borderColor);
  background: var(--panelBgColor);
  backdrop-filter: blur(0.3rem);
}
.huxy-doc-header .huxy-doc-banner {
  float: left;
  width: var(--bannerWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-align: center;
  font-size: 24px;
}
.huxy-doc-header .huxy-doc-nav {
  float: left;
  width: calc(100% - var(--bannerWidth));
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
`,""]),c.locals={};const _=c},548:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`@keyframes animate-modal-in {
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
`,""]),c.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const _=c},232:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.clear::after {
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
  background-color: rgba(0, 0, 0, 0.02);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
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
  flex: 1;
  flex-shrink: 0;
  float: right;
}
.J8VWE .OQwTX .eCk2_ .R2Mku {
  float: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ .R2Mku:not(:first-of-type) {
  margin-right: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]),c.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const _=c},249:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.cols-1 {
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
`,""]),c.locals={};const _=c},990:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`@keyframes before {
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
`,""]),c.locals={};const _=c},575:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.clear::after {
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
`,""]),c.locals={};const _=c},918:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.ofth_ {
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
`,""]),c.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const _=c},942:(r,f,i)=>{i.d(f,{Z:()=>_});var g=i(601),h=i.n(g),u=i(609),d=i.n(u),c=d()(h());c.push([r.id,`.node-right-icon-close {
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
`,""]),c.locals={};const _=c},609:r=>{r.exports=function(f){var i=[];return i.toString=function(){return this.map(function(h){var u="",d=typeof h[5]<"u";return h[4]&&(u+="@supports (".concat(h[4],") {")),h[2]&&(u+="@media ".concat(h[2]," {")),d&&(u+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),u+=f(h),d&&(u+="}"),h[2]&&(u+="}"),h[4]&&(u+="}"),u}).join("")},i.i=function(h,u,d,c,_){typeof h=="string"&&(h=[[null,h,void 0]]);var j={};if(d)for(var k=0;k<this.length;k++){var O=this[k][0];O!=null&&(j[O]=!0)}for(var T=0;T<h.length;T++){var w=[].concat(h[T]);d&&j[w[0]]||(typeof _<"u"&&(typeof w[5]>"u"||(w[1]="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {").concat(w[1],"}")),w[5]=_),u&&(w[2]&&(w[1]="@media ".concat(w[2]," {").concat(w[1],"}")),w[2]=u),c&&(w[4]?(w[1]="@supports (".concat(w[4],") {").concat(w[1],"}"),w[4]=c):w[4]="".concat(c)),i.push(w))}},i}},601:r=>{r.exports=function(f){return f[1]}},837:(r,f,i)=>{var g=i(810),h=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function j(k,O,T){var w,I={},H=null,U=null;T!==void 0&&(H=""+T),O.key!==void 0&&(H=""+O.key),O.ref!==void 0&&(U=O.ref);for(w in O)d.call(O,w)&&!_.hasOwnProperty(w)&&(I[w]=O[w]);if(k&&k.defaultProps)for(w in O=k.defaultProps,O)I[w]===void 0&&(I[w]=O[w]);return{$$typeof:h,type:k,key:H,ref:U,props:I,_owner:c.current}}f.Fragment=u,f.jsx=j,f.jsxs=j},322:(r,f,i)=>{r.exports=i(837)},62:r=>{var f=[];function i(u){for(var d=-1,c=0;c<f.length;c++)if(f[c].identifier===u){d=c;break}return d}function g(u,d){for(var c={},_=[],j=0;j<u.length;j++){var k=u[j],O=d.base?k[0]+d.base:k[0],T=c[O]||0,w="".concat(O," ").concat(T);c[O]=T+1;var I=i(w),H={css:k[1],media:k[2],sourceMap:k[3],supports:k[4],layer:k[5]};if(I!==-1)f[I].references++,f[I].updater(H);else{var U=h(H,d);d.byIndex=j,f.splice(j,0,{identifier:w,updater:U,references:1})}_.push(w)}return _}function h(u,d){var c=d.domAPI(d);c.update(u);var _=function(k){if(k){if(k.css===u.css&&k.media===u.media&&k.sourceMap===u.sourceMap&&k.supports===u.supports&&k.layer===u.layer)return;c.update(u=k)}else c.remove()};return _}r.exports=function(u,d){d=d||{},u=u||[];var c=g(u,d);return function(j){j=j||[];for(var k=0;k<c.length;k++){var O=c[k],T=i(O);f[T].references--}for(var w=g(j,d),I=0;I<c.length;I++){var H=c[I],U=i(H);f[U].references===0&&(f[U].updater(),f.splice(U,1))}c=w}}},793:r=>{var f={};function i(h){if(typeof f[h]>"u"){var u=document.querySelector(h);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch{u=null}f[h]=u}return f[h]}function g(h,u){var d=i(h);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(u)}r.exports=g},173:r=>{function f(i){var g=document.createElement("style");return i.setAttributes(g,i.attributes),i.insert(g,i.options),g}r.exports=f},892:(r,f,i)=>{function g(h){var u=i.nc;u&&h.setAttribute("nonce",u)}r.exports=g},36:r=>{function f(h,u,d){var c="";d.supports&&(c+="@supports (".concat(d.supports,") {")),d.media&&(c+="@media ".concat(d.media," {"));var _=typeof d.layer<"u";_&&(c+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),c+=d.css,_&&(c+="}"),d.media&&(c+="}"),d.supports&&(c+="}");var j=d.sourceMap;j&&typeof btoa<"u"&&(c+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(j))))," */")),u.styleTagTransform(c,h,u.options)}function i(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)}function g(h){if(typeof document>"u")return{update:function(){},remove:function(){}};var u=h.insertStyleElement(h);return{update:function(c){f(u,h,c)},remove:function(){i(u)}}}r.exports=g},464:r=>{function f(i,g){if(g.styleSheet)g.styleSheet.cssText=i;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(i))}}r.exports=f},810:r=>{var f=g=>{var h={};return C.d(h,g),h},i=g=>()=>g;r.exports=He}},dt={};function C(r){var f=dt[r];if(f!==void 0)return f.exports;var i=dt[r]={id:r,exports:{}};return Ze[r](i,i.exports,C),i.exports}C.n=r=>{var f=r&&r.__esModule?()=>r.default:()=>r;return C.d(f,{a:f}),f},C.d=(r,f)=>{for(var i in f)C.o(f,i)&&!C.o(r,i)&&Object.defineProperty(r,i,{enumerable:!0,get:f[i]})},C.o=(r,f)=>Object.prototype.hasOwnProperty.call(r,f),C.nc=void 0;var S={};(()=>{C.d(S,{PC:()=>In,rK:()=>xt,lr:()=>vt,JX:()=>Ln,dy:()=>Kn,Ud:()=>Ut,mH:()=>Kt,SV:()=>Xn,Hn:()=>ne,rj:()=>ee,V7:()=>re,AN:()=>nt,zd:()=>jn,BQ:()=>ie,Ur:()=>Le,u_:()=>le,s_:()=>de,h_:()=>Dn,X2:()=>qn,$j:()=>Mn,GK:()=>ge,u:()=>Yn,mp:()=>Ce,C2:()=>Gn,pC:()=>Yt,ff:()=>it,d2:()=>On,Uw:()=>xe});var r=C(322),f=C(62),i=C.n(f),g=C(36),h=C.n(g),u=C(793),d=C.n(u),c=C(892),_=C.n(c),j=C(173),k=C.n(j),O=C(464),T=C.n(O),w=C(269),I={};I.styleTagTransform=T(),I.setAttributes=_(),I.insert=d().bind(null,"head"),I.domAPI=h(),I.insertStyleElement=k();var H=i()(w.Z,I);const U=w.Z&&w.Z.locals?w.Z.locals:void 0,In=n=>(0,r.jsx)("span",{className:U.anico,children:(0,r.jsx)("span",{className:[U.hline,...(n.type||"").split(" ").map(t=>U[t]).filter(Boolean)].join(" ")})});var m=C(810);const ht=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),ut=n=>new Promise((t,e)=>{const o=new FileReader;o.readAsDataURL(n),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",a=>e(a))}),pt=async n=>{if(!ht(n))return n;const e=await(await fetch(decodeURIComponent(n))).blob();return await ut(e)},ft=n=>{const[t,e]=(0,m.useState)(n);return(0,m.useEffect)(()=>{(async a=>{const l=await pt(a);e(l)})(n)},[n]),t},xt=({src:n,...t})=>{const e=ft(n);return(0,r.jsx)("img",{...t,src:e})};var mt=n=>{var t={};return C.d(t,n),t},Pr=n=>()=>n;const An=mt({createPortal:()=>ct.createPortal,flushSync:()=>ct.flushSync}),yt=(n,t)=>{const e=(0,m.useRef)();(0,m.useEffect)(()=>{e.current=n},[n]),(0,m.useEffect)(()=>{if(t){const o=setInterval(()=>e.current(),t);return()=>clearInterval(o)}},[t])},K=()=>![typeof window,typeof document].includes("undefined"),Wn=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),Tn=n=>Wn(n).indexOf("element")>-1,J=(n=null)=>K()?Tn(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Bn=(n=()=>{},t=60)=>{let e=null;return function(...o){clearTimeout(e),e=setTimeout(()=>n.apply(this,o),t)}},gt=(n,t)=>Object.prototype.hasOwnProperty.call(n??{},t),F=n=>gt(n,"current"),Un=(n,t)=>{const e=[],o=n.children??[];for(let a=0,l=o.length;a<l;a++){const s=o[a];s.className.indexOf(t)>-1&&e.push(s)}return e.length===0?null:e.length===1?e[0]:e},_t=(n,t)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const e=document.createElement("object");return e.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),e.setAttribute("class","resize-sensor"),e.onload=()=>{e.contentDocument.defaultView.addEventListener("resize",t,!1),t()},e.type="text/html",n.appendChild(e),e.data="about:blank",e},bt=(n,t=60)=>{if(!K())return;n=F(n)?n.current:n??document.body;let e=Un(n,"resize-sensor"),o=[];const a=Bn(()=>o.map(x=>x(n)),t),l=x=>{Un(n,"resize-sensor")||(e=_t(n,a)),o.indexOf(x)===-1&&o.push(x)},s=x=>{const y=o.indexOf(x);y!==-1&&o.splice(y,1),o.length===0&&e&&p()},p=()=>{e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",a,!1),e.parentNode.removeChild(e),e=void 0,o=[])};return{element:n,bind:l,unbind:s,destroy:p}},Nn=(n={})=>{const t=(0,m.useRef)(0),[e,o]=(0,m.useState)(n),a=(0,m.useCallback)(l=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>o(l))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(t.current),[]),[e,a]},wt=(n=null,t=60)=>{const e=F(n)?n.current:n,{bind:o,destroy:a}=bt(e,t),[l,s]=Nn(J(e));return(0,m.useEffect)(()=>(o(()=>e&&s(J(e))),()=>a()),[e]),l};var mn=C(528),Q={};Q.styleTagTransform=T(),Q.setAttributes=_(),Q.insert=d().bind(null,"head"),Q.domAPI=h(),Q.insertStyleElement=k();var Ur=i()(mn.Z,Q);const Y=mn.Z&&mn.Z.locals?mn.Z.locals:void 0,vt=({children:n,active:t=0,delay:e=5e3,className:o,...a})=>{const[l,s]=(0,m.useState)(t+1),[p,x]=(0,m.useState)(!1),y=(0,m.useRef)(),E=(0,m.useRef)(""),{width:v}=wt(y);n=Array.isArray(n)?n:[n];const b=n[0],R=[n[n.length-1],...n,b],P=R.length;yt(()=>{let D=l+1;D=D===P?1:D,E.current&&(E.current=""),s(D),D===P-1&&setTimeout(()=>{E.current="none",s(1)},500)},p?null:e);const z=(D,A)=>{A.stopPropagation(),E.current="",s(D),(0,An.flushSync)(()=>x(!0)),x(!1)},W={width:`${P*v}px`,transform:`translateX(${-v*l}px)`,transition:E.current};return(0,r.jsxs)("div",{className:`${Y["huxy-carousel"]}${o?` ${o}`:""}`,...a,ref:y,children:[(0,r.jsx)("div",{className:Y["huxy-carousel-wrap"],style:W,children:R.map((D,A)=>(0,r.jsx)("div",{className:`${Y["carousel-item"]} ${l===A?Y.active:""}`,style:{width:`${v}px`},children:D},`huxy-carousel-${A}`))}),(0,r.jsx)("div",{className:Y["carousel-switch"],children:n.map((D,A)=>(0,r.jsx)("span",{className:`${Y.dot} ${l===A+1?Y.active:""}`,onClick:N=>z(A+1,N)},`huxy-carousel-switch-${A}`))})]})},pn=(n,t)=>{let e="",o="";if(typeof t=="number"&&(e=`col-${n}-${t}`),typeof t=="object"){const{span:a,offset:l}=t;e=a?`col-${n}-${a}`:"",o=l?`offset-${n}-${l}`:""}return{sp:e,os:o}},Ln=(0,m.forwardRef)(({span:n,offset:t,xl:e,lg:o,md:a,sm:l,xs:s,style:p,width:x,auto:y,offsetWidth:E="0px",className:v,...b},M)=>{const R=v?` ${v}`:"",P=`col-${n||12}`,z=t?`offset-${t}`:"",{sp:W,os:D}=pn("xs",s),{sp:A,os:N}=pn("sm",l),{sp:X,os:B}=pn("md",a),{sp:un,os:V}=pn("lg",o),{sp:$,os:L}=pn("xl",e),G=[P,$,un,X,A,W,z,L,V,B,N,D].filter(Boolean).join(" "),Sn=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${E})`}:{width:x};return(0,r.jsx)("div",{className:`${G}${R}`,...b,style:{...Sn,...p},ref:M})}),kt=()=>{const n=(0,m.useRef)(!0);return n.current?(n.current=!1,!0):!1},Et=(n,t=[])=>{const e=kt();(0,m.useEffect)(()=>{if(!e)return n()},t)},Fn=(n,t=450)=>{const[e,o]=(0,m.useState)(n);return Et(()=>{let a;return n||t===0?o(n):a=setTimeout(()=>o(n),t),()=>a&&clearTimeout(a)},[n]),[e,o]},Dn=({children:n,mountNode:t=document.body})=>(0,An.createPortal)(n,t),Ct={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Pt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},zt=document.body,jn=({open:n,close:t,delay:e=300,children:o,mountNode:a,hasMask:l=!0,style:s,className:p="h-mask",relative:x})=>{const[y]=Fn(n,e);(a??zt).style.overflow=y?"hidden":"";const E=x?"absolute":"fixed";return(0,r.jsx)(Dn,{mountNode:a,children:(0,r.jsx)("div",{children:y?(0,r.jsxs)("div",{className:p,style:{...Ct,position:E},children:[l?(0,r.jsx)("div",{style:{...Pt,position:E},onClick:v=>t?.(v)}):null,m.Children.map(o,v=>(0,m.isValidElement)(v)?(0,m.cloneElement)(v,{style:{position:"relative",zIndex:100001,...v.props.style}}):v)]}):null})})};var yn=C(434),q={};q.styleTagTransform=T(),q.setAttributes=_(),q.insert=d().bind(null,"head"),q.domAPI=h(),q.insertStyleElement=k();var Vr=i()(yn.Z,q);const nn=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,Kn=({open:n,close:t,footer:e,header:o,className:a,style:l,children:s,width:p="300px",mountNode:x,position:y="right",relative:E})=>{const v=["drawer-wrap",y,n?"open":"",...a?.split(" ")??[]].filter(Boolean).map(b=>nn[b]).join(" ");return(0,r.jsx)(jn,{open:n,close:t,delay:250,hasMask:!0,relative:E,mountNode:x,className:"huxy-drawer",children:(0,r.jsx)("div",{className:v,style:{width:p,position:E?"absolute":"fixed","--footerHeight":e?"44px":"0px",...l},children:(0,r.jsxs)("div",{className:nn["drawer-container"],children:[(0,r.jsxs)("div",{className:nn["drawer-header"],children:[(0,r.jsx)("span",{className:`link ${nn["ico-close"]}`,onClick:b=>t?.(b)}),(0,r.jsx)("div",{children:o})]}),(0,r.jsx)("div",{className:nn["drawer-content"],children:s}),e?(0,r.jsx)("div",{className:nn["drawer-footer"],children:e}):null]})})})},St=(n,t,e="click")=>{(0,m.useEffect)(()=>{const o=l=>{const s=F(n)?n.current:n;s?.contains&&!s.contains(l.target)&&t(l)},a=typeof e=="string"?[e]:e;return a.map(l=>{document.addEventListener(l,o,!1)}),()=>{a.map(l=>{document.removeEventListener(l,o,!1)})}},[n,t,e])},Tt=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",Dt=(n="")=>n.replace(/^\S/,t=>t.toUpperCase()),tn=n=>{if(K())return n=F(n)?n.current:n??document.body,n.getBoundingClientRect?.()},jt=n=>{if(!K())return;const t=document.createElement("div");return t.innerHTML=n,t.children[0]},fn=(n,t={},e=!1)=>{if(Tn(n)){if(e){let o="";Object.keys(t).map(a=>{o+=`${a}: ${t[a]};`}),n.style=o;return}Object.keys(t).map(o=>n.style.setProperty(o,t[o]))}},Ot=(n=350)=>new Promise(t=>setTimeout(t,n)),to=(n=100)=>{const t=Date.now();for(;Date.now()-t<=n;);},Mt=Ot,Rt=async(n,t=15)=>{if(!K())return;if(typeof n=="string"&&(n=jt(n)),n=F(n)?n.current:n,!Tn(n))return{};const e=n.cloneNode(!0);fn(e,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(e),await Mt(t);const o=tn(e);return n.parentNode.removeChild(e),o},It=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,At=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Hn=(n,t)=>{t=`huxy-drop-arrow-${t}`;const e=n.getAttribute("class")??"";It.test(e)?n.setAttribute("class",e.replace(At,t)):n.setAttribute("class",`${e} ${t}`)},Zn=async(n,t,e)=>{const{left:o,right:a,top:l,bottom:s}=tn(n),{width:p,height:x}=J(),{width:y,height:E}=await Rt(t);if(a<0||s<0||o>p||l>x)return{};if(e==="vertical"){const v={left:o+"px",top:s+10+"px",right:"auto",bottom:"auto"};let b="lt";o+y>p&&(v.left=a-y+"px",b="rt"),s+10+E>x&&(v.top=l-10-E+"px",b=b==="lt"?"lb":"rb"),fn(t,v),Hn(t,b)}else{const v={left:a+10+"px",top:l+"px",right:"auto",bottom:"auto"};let b="tl";a+10+y>p&&(v.left=o-10-y+"px",b="tr"),l+E>x&&(v.top=s-E+"px",b=b==="tl"?"bl":"br"),fn(t,v),Hn(t,b)}},Wt=(n,t,e="horizontal")=>{const o=Bn(Zn),a=()=>o(n,t,e);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const l=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),fn(t,{left:"",top:"",right:"",bottom:""})};return Zn(n,t,e),l},Bt=({open:n,delay:t=280,children:e,mountNode:o,style:a,...l})=>{const[s]=Fn(n,t);return(0,r.jsx)(Dn,{mountNode:o,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{style:{...a,display:s?"block":"none"},...l,children:e})})})};var gn=C(503),en={};en.styleTagTransform=T(),en.setAttributes=_(),en.insert=d().bind(null,"head"),en.domAPI=h(),en.insertStyleElement=k();var ao=i()(gn.Z,en);const $n=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,Ut=({trigger:n="click",type:t,dropList:e,className:o,children:a,targetProps:l,...s})=>{const[p,x]=(0,m.useState)(!1),y=(0,m.useRef)(),E=(0,m.useRef)(),v=(0,m.useRef)();St(y,z=>p&&x(!1),[...new Set(["click",n.toLowerCase()])]),(0,m.useEffect)(()=>()=>v.current?.(),[]);const b=z=>{z.preventDefault(),x(!0),v.current=Wt(y.current,E.current,t)},M={[`on${Dt(n)}`]:b},R=["drop-wrap",p?"open":"",o].filter(Boolean).map(z=>$n[z]).join(" "),P=Tt(e)?e:e?.(()=>x(!1),p);return(0,r.jsxs)("span",{ref:y,className:$n["drop-target"],...l,...M,children:[a,(0,r.jsx)(Bt,{open:p,className:"huxy-drop",children:(0,r.jsx)("div",{ref:E,className:R,...s,children:P})})]})},Nt=(n,t,e)=>{if(!K())return;e=F(e)?e.current:e??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&fn(o,t),o.innerText=(n??"").replace(/[\r\n]/g,""),e.appendChild(o);const a=o.getBoundingClientRect();return e.removeChild(o),a};var _n=C(918),rn={};rn.styleTagTransform=T(),rn.setAttributes=_(),rn.insert=d().bind(null,"head"),rn.domAPI=h(),rn.insertStyleElement=k();var so=i()(_n.Z,rn);const Vn=_n.Z&&_n.Z.locals?_n.Z.locals:void 0,Yn=({title:n,placement:t="topRight",children:e,ellipsis:o,className:a,...l})=>(0,r.jsx)("span",{className:`${Vn[`huxy-tooltip-${t}`]}${a?` ${a}`:""}`,tooltip:n??e,...l,children:(0,r.jsx)("span",{className:o?Vn.ellipsis:"",children:e})}),Lt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Ft=n=>{const{children:t,style:e}=n,o=typeof t=="string",a=o?t:t?.props?.title??t?.props?.children,l=(0,m.useRef)(),[s,p]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{if(l.current){const{width:x}=Nt(a,null,l.current.parentNode),{width:y}=tn(l.current),E=~~x>~~y;E!==s&&p(E)}},[a]),(0,r.jsx)("span",{ref:l,style:{display:"flex",width:"100%",...e},children:s?o?(0,r.jsx)(Yn,{...n,ellipsis:!0}):(0,r.jsx)("span",{style:Lt,children:t}):o?t:t?.props?.children})},Kt=n=>n.children==null?"":(0,r.jsx)(Ft,{...n});var Ht=Object.defineProperty,Zt=(n,t,e)=>t in n?Ht(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,$t=(n,t,e)=>(Zt(n,typeof t!="symbol"?t+"":t,e),e);class Xn extends m.default.Component{constructor(){super(...arguments),$t(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,e){const{errorReport:o}=this.props;typeof o=="function"&&o({error:t,info:e.componentStack})}render(){const{error:t}=this.state,{fallback:e,children:o}=this.props;return t?e(t):o}}const Gn=n=>t=>{if(typeof t=="function"||typeof t?.render=="function")return(0,r.jsx)(t,{});if(typeof t=="string"){const e=n?.[t];return e?(0,r.jsx)(e,{}):(0,r.jsx)("i",{className:t})}return t??null},Vt=n=>Gn(n),Yt=n=>({icon:t,defaultIcon:e})=>t?Vt(n)(t):t===!1?null:e,bn=["","webkit","moz","ms"],Xt=n=>bn.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>n[t]),Gt=n=>bn.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>n[t]),Jt=n=>bn.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>n[t]),Jn=bn.map(n=>`${n}fullscreenchange`),Qt=n=>{if(!K())return;n=F(n)?n.current:n??document.body;const t=Xt(document),e=Gt(n),o=Jt(document);document[t]?document[o]?.():n[e]?.()},qt=n=>K()?(Jn.map(e=>document.addEventListener(e,n,!1)),()=>Jn.map(e=>document.removeEventListener(e,n,!1))):void 0,Qn=n=>(0,r.jsx)("i",{...n,children:"..."}),ne=({panel:n,fullIcon:t=Qn,exitIcon:e=Qn,...o})=>{const a=F(n)?n.current:n,[l,s]=(0,m.useState)();(0,m.useEffect)(()=>{const x=qt(()=>{s(y=>!y)});return()=>x()},[]);const p=l?e:t;return(0,r.jsx)(p,{onClick:x=>Qt(a),...o})};var wn=C(249),on={};on.styleTagTransform=T(),on.setAttributes=_(),on.insert=d().bind(null,"head"),on.domAPI=h(),on.insertStyleElement=k();var yo=i()(wn.Z,on);const go=wn.Z&&wn.Z.locals?wn.Z.locals:void 0,te=({gutter:n=10,className:t,overflow:e="hidden",...o},a)=>{const l=t?` ${t}`:"";let s=10;if(Array.isArray(n)){const p=[...n];n=p[0],s=p[1]??p[0]}return(0,r.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(s/2)}px`,overflow:e},children:(0,r.jsx)("div",{className:`row${l}`,...o,ref:a})})},qn=(0,m.forwardRef)(te),ee=({rowProps:n,colProps:t,children:e,Row:o=qn,Col:a=Ln})=>{const l=[];return m.Children.map(e,s=>{s&&(s.type?.description==="react.fragment"?l.push(...s.props.children):l.push(s))}),(0,r.jsx)(o,{...n,children:l.map((s,p)=>(0,r.jsx)(a,{...t,...s.props.itemprops,children:s},`huuxy_grid_${p}`))})},On=(n,t)=>(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...t}),nt=n=>{const{error:t={},info:e=""}=n||{},{message:o,stack:a,errMsg:l}=t;let s=l||a||t.toString();s=`${s}
${e}`.replace(/\r|\n|\r\n/g,"<br/>"),s=s.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),s=s.replace(/\s/g,"&nbsp;");const p=o?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,r.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[On(s,{style:{color:"red"}}),p&&(0,r.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${p}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},re=({children:n,report:t})=>{const e=(0,m.useRef)();return e.current?.state&&(e.current.state.error=null),(0,r.jsx)(Xn,{ref:e,fallback:(o,a)=>nt({error:o,info:a}),errorReport:t,children:n})},tt=(n,t)=>Object.keys(t).map(e=>n.style[e]=t[e]),oe=(n,t)=>Object.keys(t).map(e=>n.style[e]=""),ae={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},et=({left:n,top:t,width:e,height:o})=>({left:`${n}px`,top:`${t}px`,width:`${e}px`,height:`${o}px`}),rt=n=>(0,r.jsx)("i",{...n,children:"..."}),ot=n=>{const{left:t,top:e}=tn(n),{width:o,height:a}=J(n);return{left:t,top:e,width:o,height:a}},ie=({panel:n,target:t,fullIcon:e=rt,exitIcon:o=rt})=>{n=F(n)?n.current:n||document.body;const[a,l]=(0,m.useState)(),s=(0,m.useRef)();(0,m.useEffect)(()=>{s.current={...ae,...et(ot(n))}},[n]);const p=(y,E)=>{if(y){const b=et(ot((typeof t=="function"?t:()=>document.getElementsByClassName(t)[0])()));tt(E,s.current),setTimeout(()=>{tt(E,b)},0)}else oe(E,s.current);l(y)},x=a?o:e;return(0,r.jsx)(x,{onClick:y=>p(!a,n)})};var vn=C(548),an={};an.styleTagTransform=T(),an.setAttributes=_(),an.insert=d().bind(null,"head"),an.domAPI=h(),an.insertStyleElement=k();var Eo=i()(vn.Z,an);const Z=vn.Z&&vn.Z.locals?vn.Z.locals:void 0,le=({open:n,close:t,hasMask:e=!0,cancelText:o="\u53D6\u6D88",submit:a,submitText:l="\u786E\u5B9A",title:s="Modal \u5F39\u7A97",className:p,children:x,delay:y=250,...E})=>{const v=["modal-wrap",n?"open":"",...p?.split(" ")??[]].filter(Boolean).map(b=>Z[b]).join(" ");return(0,r.jsx)(jn,{open:n,close:t,delay:y,hasMask:e,className:"huxy-modal",children:(0,r.jsx)("div",{className:v,...E,children:(0,r.jsxs)("div",{className:Z["modal-container"],children:[(0,r.jsx)("div",{className:Z["modal-header"],children:s}),(0,r.jsx)("div",{className:Z["modal-content"],children:x}),(0,r.jsxs)("div",{className:Z["modal-footer"],children:[(0,r.jsx)("div",{className:`${Z.btn} ${Z.left}`,onClick:b=>t?.(b),children:o}),(0,r.jsx)("div",{className:`${Z.btn} ${Z.right}`,onClick:b=>a?.(b),children:l})]})]})})})};var kn=C(990),ln={};ln.styleTagTransform=T(),ln.setAttributes=_(),ln.insert=d().bind(null,"head"),ln.domAPI=h(),ln.insertStyleElement=k();var Po=i()(kn.Z,ln);const zo=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,Mn=({global:n,absolute:t})=>(0,r.jsx)("div",{className:`spinner${n?" global":""}${t?" absolute":""}`,children:(0,r.jsx)("figure",{className:"spinning"})});var En=C(232),sn={};sn.styleTagTransform=T(),sn.setAttributes=_(),sn.insert=d().bind(null,"head"),sn.domAPI=h(),sn.insertStyleElement=k();var To=i()(En.Z,sn);const xn=En.Z&&En.Z.locals?En.Z.locals:void 0,se=n=>n?.filter?.(t=>typeof t=="function"),ce=(n,t)=>{const e=(0,m.useRef)(),{loading:o,title:a,plugins:l,children:s,className:p,...x}=n,y=se(l),E=y?.length,v=p?` ${p}`:"",b=F(t)?t:e;return(0,r.jsxs)("div",{className:`${xn.panel}${v}`,...x,ref:b,children:[(a||E)&&(0,r.jsxs)("div",{className:xn["panel-header"],children:[a&&(0,r.jsx)("h4",{className:xn["panel-title"],children:a}),E&&(0,r.jsx)("div",{className:xn["panel-plugins"],children:y.map((M,R)=>(0,r.jsx)("span",{className:"link",children:(0,r.jsx)(M,{panel:b})},R))})]}),(0,r.jsx)("div",{className:xn["panel-body"],children:s}),o&&(0,r.jsx)(Mn,{})]})},de=(0,m.forwardRef)(ce),Rn=n=>Wn(n)==="array",he=n=>Rn(n)&&!!n.length,ue=({to:n,preventDefault:t,stopPropagation:e,...o})=>t?(0,r.jsx)("span",{...o}):(0,r.jsx)("a",{href:n,...o}),pe=({item:n,...t})=>(0,r.jsx)("ul",{...t}),fe=(n,...t)=>{const e={};return Object.keys(n).filter(Boolean).map(o=>{e[o]=a=>n[o](a,...t)}),e},at=({data:n=[],events:t={},List:e=pe,Link:o=ue,leftIcon:a,rightIcon:l,isHorizontal:s,isCollapsed:p,level:x=0,parentOpen:y=!0})=>{const E=p&&!x,v=!s&&!p&&!y;return n.map(b=>{const{name:M,path:R,icon:P,rightIcon:z,active:W,open:D,children:A,linkProps:N}=b,X=he(A),B=b.id||R||M,un=E?b.title??M:void 0,V=v?"hidden":"",$=P??a,L=z??l,G=$?(0,r.jsx)("div",{className:"node-left-icon",children:$===!0?(0,r.jsx)("i",{className:"default-left-icon"}):$}):null,Sn=M?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:M})}):null;if(X){const Fe=fe(t,b,x),Ke=[V,D?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:Ke,"has-children":"true",...Fe,children:[(0,r.jsxs)(o,{title:un,className:`link${W?" active":""}`,to:R,preventDefault:!0,stopPropagation:!1,...N,children:[G,Sn,L?(0,r.jsx)("div",{className:"node-right-icon",children:L===!0?(0,r.jsx)("i",{className:"default-right-icon"}):L}):null]}),(0,r.jsx)(e,{item:b,children:at({data:A,events:t,List:e,Link:o,leftIcon:a,rightIcon:l,isHorizontal:s,isCollapsed:p,level:x+1,parentOpen:!!D})})]},B)}return(0,r.jsx)("li",{className:V,children:(0,r.jsxs)(o,{title:un,className:`link${W?" active":""}`,to:R,...N,children:[G,Sn]})},B)})},it=at,xe=(n,...t)=>(0,r.jsx)("div",{"v-html":n,...t});var Cn=C(575),cn={};cn.styleTagTransform=T(),cn.setAttributes=_(),cn.insert=d().bind(null,"head"),cn.domAPI=h(),cn.insertStyleElement=k();var Mo=i()(Cn.Z,cn);const Ro=Cn.Z&&Cn.Z.locals?Cn.Z.locals:void 0,me=n=>(0,r.jsx)("div",{style:{padding:"6px 15px"},children:n}),ye=({activekey:n,tabs:t=[],switchTab:e,trackColor:o,flex:a,...l},s)=>{const[p,x]=(0,m.useState)(n??t[0]?.key),[y,E]=(0,m.useState)({}),v=(0,m.useRef)({}),b=(0,m.useRef)();(0,m.useEffect)(()=>{const P=v.current[p];P&&M(P)},[]);const M=P=>{const{left:z,width:W}=tn(P),D=tn(b.current).left;E({left:z-D,width:W})},R=(P,z)=>{P.stopPropagation(),x(z),typeof e=="function"&&e(z),M(P.currentTarget)};return(0,r.jsxs)("div",{className:"tabs-header-wrap",...l,ref:s,children:[(0,r.jsx)("ul",{className:`tabs-header${a?" flex":""}`,ref:b,children:t.map(P=>(0,r.jsx)("li",{ref:z=>v.current[P.key]=z,className:`th-item${p===P.key?" active":""}`,onClick:z=>R(z,P.key),children:typeof P.renderTabs=="function"?P.renderTabs(P,p===P.key):me(P.value)},P.key))}),(0,r.jsx)("div",{className:"th-track",style:{...y,color:o}})]})},ge=(0,m.forwardRef)(ye),_e=(n,t,e="id",o="children")=>{if(!Rn(n))return null;const a=l=>{for(let s=0,p=l.length;s<p;s++){const x=l[s];if(x[e]===t)return[x];if(Rn(x[o])){const y=a(x[o]);if(y)return[x].concat(y)}}};return a(n)},be=n=>++n,we=()=>{const[,n]=(0,m.useState)(0);return(0,m.useCallback)(()=>n(be),[])},lt=n=>{const{children:t,open:e}=n;let o=0;if(e&&t?.length){o=t.length;let a=0;return t.map(l=>a+=lt(l)),o+a}return o},ve=({item:n,style:t,...e})=>(0,r.jsx)("ul",{style:{...t,"--count":lt(n)},...e});var Pn=C(942),dn={};dn.styleTagTransform=T(),dn.setAttributes=_(),dn.insert=d().bind(null,"head"),dn.domAPI=h(),dn.insertStyleElement=k();var Bo=i()(Pn.Z,dn);const Uo=Pn.Z&&Pn.Z.locals?Pn.Z.locals:void 0,ke=n=>(0,r.jsx)("ul",{...n}),Ee=(n,t)=>n?ve:({item:e,...o})=>(0,r.jsx)(ke,{className:t==="right"?"left":"",...o}),Ce=n=>{const{data:t=[],collapsed:e=!1,type:o="vertical",Link:a,width:l,bgColor:s,itemHeight:p,collapsedWidth:x,itemPadding:y,style:E,className:v,...b}=n,M=(0,m.useRef)(),R=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(M.current),[]);const P=we(),z=o==="horizontal",W=!z&&e,D={onClick:(V,$)=>{if(V.stopPropagation(),!z&&!W){const L=_e(t,$.path,"path"),G=L[L.length-1];G.open=!G.open,P()}},onMouseEnter:(V,$,L)=>{W&&!L&&(clearTimeout(M.current),R.current.style.width="var(--maxWidth)")},onMouseLeave:(V,$,L)=>{W&&!L&&(M.current=setTimeout(()=>R.current.style.width="",200))}},A=(z?["huxy-horizontal-tree",v]:["huxy-tree",v,W?"collapsed":""]).filter(Boolean).join(" "),{float:N,...X}=b?.style??{},B={"--bgColor":s,"--itemHeight":p,"--nodeListWidth":l,...X};z?(B["--itemPadding"]=y,B["--nodeFloat"]=N):(B["--width"]=l,B["--collapsedWidth"]=x);const un=Ee(!z&&!W,N);return(0,r.jsx)("div",{ref:R,className:A,style:B,...b,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:it({data:t,events:D,List:un,Link:a,leftIcon:!0,rightIcon:!0,isHorizontal:z,isCollapsed:W})})})})},Pe=()=>{const[n,t]=Nn(J());return(0,m.useEffect)(()=>{const e=()=>t(J());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)},[]),n},st=({menu:n,curName:t,Link:e})=>n.map(o=>{const{path:a,name:l,open:s,children:p}=o,x=l===t;return p?.length?(0,r.jsxs)("li",{className:s?"open":"",children:[(0,r.jsx)(e,{to:{query:{name:l}},className:`link${x?" active":""}`,preventDefault:!0,children:(0,r.jsx)("span",{children:l})}),(0,r.jsx)("ul",{children:(0,r.jsx)(st,{menu:p,curName:l,Link:e})})]},a||l):(0,r.jsx)("li",{children:(0,r.jsx)(e,{to:{query:{name:l}},className:`link${x?" active":""}`,children:(0,r.jsx)("span",{children:l})})},a||l)}),ze=st,Se=(n={})=>{const t={};return Object.keys(n).map(e=>{n[e]!=null&&(t[e]=n[e])}),t},Te=(n=0,t)=>{K()&&(t=F(t)?t.current:t??window,t.scrollTo?.({top:n,behavior:"smooth"}))},De=(n=()=>{},t=60)=>{let e=null;return function(...o){e||(n.apply(this,o),e=setTimeout(()=>e=null,t))}},je=(n,t=null,e=!1)=>[...n||[]].sort((o,a)=>{const l=t?o[t]:o,s=t?a[t]:a;return!isNaN(Number(l))&&!isNaN(Number(l))?e?s-l:l-s:typeof l=="string"&&typeof s=="string"?e?s.localeCompare(l):l.localeCompare(s):typeof l=="string"&&typeof s=="number"?e?-1:1:typeof l=="number"||typeof l=="string"?e?1:-1:e?-1:1}),Oe=()=>K()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Me=({curName:n,itemList:t})=>{const e=(0,m.useRef)(!1),o=(0,m.useRef)(""),[a,l]=(0,m.useState)(n);return(0,m.useEffect)(()=>{if(t.current=Se(t.current),!n){const x=Object.keys(t.current).map(y=>({name:y,offsetTop:t.current[y]?.offsetTop??0}));l(x[0]?.name)}let s=0,p=0;if(o.current!==n){o.current=n;const x=t.current[n];e.current=!0,x?(Te(x.offsetTop),s=setTimeout(()=>e.current=!1,1050)):p=setTimeout(()=>{window.scrollTo?.({top:t.current[n]?.offsetTop??0,behavior:"instant"}),s=setTimeout(()=>e.current=!1,1050)},550)}return()=>{clearTimeout(s),clearTimeout(p),e.current=!1}},[n]),(0,m.useEffect)(()=>{const s=De(()=>{if(!e.current){const x=je(Object.keys(t.current).map(y=>({name:y,offsetTop:t.current[y]?.offsetTop??0})),"offsetTop",!0).find(y=>y.offsetTop<Oe())?.name;o.current!==x&&(o.current=x,l(x))}});return window.addEventListener("scroll",s,!1),()=>window.removeEventListener("scroll",s,!1)},[]),[a]},Re=/!\[.*\]\((.*)\)/g,Ie=async(n,t,e)=>{const o={};for(let a=0,l=n.length;a<l;a++){const s=n[a],p=s.slice(2);o[s]=await e({folder:t,name:p})}return o},Ae=async(n,{folder:t},e)=>{const a=[...n.matchAll(Re)].filter(Boolean).map(l=>l[1]);if(a?.length){const l=await Ie(a,t,e);a.map(s=>{n=n.replace(s,l[s])})}return n},We=({item:n,marked:t,getContext:e})=>{const[o,a]=(0,m.useState)("");return(0,m.useEffect)(()=>{(async()=>{try{const s=await e({...n,type:".md"}),p=await Ae(s,n,e),x=typeof t=="function"?t.parse(p):x;a(x)}catch(s){a(s?.message)}})()},[]),(0,r.jsxs)("div",{className:"huxy-content",children:[On(o),!o&&(0,r.jsx)(Mn,{global:!0})]})},Be=({router:n,curName:t,context:e,marked:o,getContext:a})=>{const l=(0,m.useRef)({}),[s]=Me({curName:t,itemList:l});return(0,m.useEffect)(()=>{s&&n.push({query:{name:s}})},[s]),(0,r.jsx)("div",{className:"huxy-anchor-page",children:e.map((p,x)=>(0,r.jsxs)("div",{className:"huxy-anchor-item",ref:y=>l.current[p.name]=y,children:[(0,r.jsx)("h2",{children:`${p.name}`}),(0,r.jsx)(We,{item:p,marked:o,getContext:a})]},p.name))})},Ue=n=>{const t=[];return n.map(e=>{const[o,a]=e.name.split("/"),l=t.find(s=>s.name===o);l?l.children.push({name:a,folder:o}):t.push({name:o,children:[{name:a,folder:o}]})}),t};var zn=C(556),hn={};hn.styleTagTransform=T(),hn.setAttributes=_(),hn.insert=d().bind(null,"head"),hn.domAPI=h(),hn.insertStyleElement=k();var Qo=i()(zn.Z,hn);const qo=zn.Z&&zn.Z.locals?zn.Z.locals:void 0,Ne=(n,t,e)=>({sidebar:n.find(o=>o.name===t)?.children??[],listEle:n.map(({name:o,children:a})=>(0,r.jsx)("li",{children:(0,r.jsx)(e,{to:{query:{folder:o,name:a[0]?.name}},className:`link${o===t?" active":""}`,children:(0,r.jsx)("span",{children:o})})},o))}),Le=n=>{const{params:t,router:e,Link:o,listFiles:a,getContext:l,marked:s,title:p,className:x,style:y}=n,{folder:E,name:v}=t,{width:b}=Pe(),[M,R]=(0,m.useState)([]),[P,z]=(0,m.useState)(!1);(0,m.useEffect)(()=>{(async()=>{const X=await a(),B=Ue(X);R(B),E||e.push({query:{folder:B[0]?.name,name:B[0]?.children[0]?.name}})})()},[]);const W=b<=1024,{sidebar:D,listEle:A}=Ne(M,E,o);return(0,r.jsxs)("div",{className:`huxy-doc-frame ${x??""}`,style:y,children:[(0,r.jsxs)("div",{className:"huxy-doc-header",children:[(0,r.jsx)("div",{className:"huxy-doc-banner",children:p||"\u6587\u6863\u7CFB\u7EDF"}),(0,r.jsx)("ul",{className:"huxy-doc-nav",children:W?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{className:"huxy-doc-collapsed",children:(0,r.jsx)("span",{className:"link",onClick:N=>{N.stopPropagation(),z(!P)},children:(0,r.jsx)(In,{type:P?"right":""})})}),(0,r.jsx)(Kn,{open:P,close:()=>z(!1),width:"220px",children:(0,r.jsx)("ul",{className:"huxy-doc-menu-drawer",children:A})})]}):A})]}),(0,r.jsxs)("div",{className:"huxy-doc-container",children:[(0,r.jsx)("div",{className:"huxy-doc-main-page",children:(0,r.jsx)(Be,{router:e,curName:v,context:D,marked:s,getContext:l})}),(0,r.jsx)("div",{className:"huxy-doc-menu",children:(0,r.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,r.jsx)(ze,{menu:D,curName:v,Link:o})})})]})]})}})();var $e=S.PC,Ve=S.rK,Ye=S.lr,Xe=S.JX,Ge=S.dy,Je=S.Ud,Qe=S.mH,qe=S.SV,nr=S.Hn,tr=S.rj,er=S.V7,rr=S.AN,or=S.zd,ar=S.BQ,ir=S.Ur,lr=S.u_,sr=S.s_,cr=S.h_,dr=S.X2,hr=S.$j,ur=S.GK,pr=S.u,fr=S.mp,xr=S.C2,mr=S.pC,yr=S.ff,gr=S.d2,_r=S.Uw;export{$e as Anico,Ve as Base64Image,Ye as Carousel,Xe as Col,Ge as Drawer,Je as Drop,Qe as Ellipsis,qe as ErrorBoundary,nr as FullPage,tr as Grid,er as HandleError,rr as LoadError,or as Mask,ar as MaxSize,ir as Md2html,lr as Modal,sr as Panel,cr as Portal,dr as Row,hr as Spinner,ur as TabHeader,pr as Tooltip,fr as Tree,xr as fixEle,mr as fixIcon,yr as renderTree,gr as str2React,_r as str2Vue};
