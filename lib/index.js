import*as Ur from"react";import*as se from"react-dom";var Fr={87:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`/*@height:2px;
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
`,""]),c.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const _=c},587:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.kLIGi {
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
`,""]),c.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const _=c},724:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`@keyframes animate-drawer-right-in {
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
`,""]),c.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const _=c},468:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`@keyframes animate-drop-in {
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
`,""]),c.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const _=c},55:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.huxy-doc-frame {
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
`,""]),c.locals={};const _=c},482:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`@keyframes animate-modal-in {
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
`,""]),c.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const _=c},945:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.clear::after {
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
`,""]),c.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const _=c},531:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.cols-1 {
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
`,""]),c.locals={};const _=c},670:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`@keyframes before {
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
`,""]),c.locals={};const _=c},473:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.clear::after {
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
`,""]),c.locals={};const _=c},700:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.ofth_ {
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
`,""]),c.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const _=c},133:(o,f,i)=>{i.d(f,{A:()=>_});var g=i(758),h=i.n(g),u=i(935),d=i.n(u),c=d()(h());c.push([o.id,`.node-right-icon-close {
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
`,""]),c.locals={};const _=c},935:o=>{o.exports=function(f){var i=[];return i.toString=function(){return this.map(function(h){var u="",d=typeof h[5]<"u";return h[4]&&(u+="@supports (".concat(h[4],") {")),h[2]&&(u+="@media ".concat(h[2]," {")),d&&(u+="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {")),u+=f(h),d&&(u+="}"),h[2]&&(u+="}"),h[4]&&(u+="}"),u}).join("")},i.i=function(h,u,d,c,_){typeof h=="string"&&(h=[[null,h,void 0]]);var D={};if(d)for(var v=0;v<this.length;v++){var j=this[v][0];j!=null&&(D[j]=!0)}for(var S=0;S<h.length;S++){var w=[].concat(h[S]);d&&D[w[0]]||(typeof _<"u"&&(typeof w[5]>"u"||(w[1]="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {").concat(w[1],"}")),w[5]=_),u&&(w[2]&&(w[1]="@media ".concat(w[2]," {").concat(w[1],"}")),w[2]=u),c&&(w[4]?(w[1]="@supports (".concat(w[4],") {").concat(w[1],"}"),w[4]=c):w[4]="".concat(c)),i.push(w))}},i}},758:o=>{o.exports=function(f){return f[1]}},335:(o,f,i)=>{var g=i(649),h=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,c=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function D(v,j,S){var w,R={},$=null,L=null;S!==void 0&&($=""+S),j.key!==void 0&&($=""+j.key),j.ref!==void 0&&(L=j.ref);for(w in j)d.call(j,w)&&!_.hasOwnProperty(w)&&(R[w]=j[w]);if(v&&v.defaultProps)for(w in j=v.defaultProps,j)R[w]===void 0&&(R[w]=j[w]);return{$$typeof:h,type:v,key:$,ref:L,props:R,_owner:c.current}}f.Fragment=u,f.jsx=D,f.jsxs=D},85:(o,f,i)=>{o.exports=i(335)},591:o=>{var f=[];function i(u){for(var d=-1,c=0;c<f.length;c++)if(f[c].identifier===u){d=c;break}return d}function g(u,d){for(var c={},_=[],D=0;D<u.length;D++){var v=u[D],j=d.base?v[0]+d.base:v[0],S=c[j]||0,w="".concat(j," ").concat(S);c[j]=S+1;var R=i(w),$={css:v[1],media:v[2],sourceMap:v[3],supports:v[4],layer:v[5]};if(R!==-1)f[R].references++,f[R].updater($);else{var L=h($,d);d.byIndex=D,f.splice(D,0,{identifier:w,updater:L,references:1})}_.push(w)}return _}function h(u,d){var c=d.domAPI(d);c.update(u);var _=function(v){if(v){if(v.css===u.css&&v.media===u.media&&v.sourceMap===u.sourceMap&&v.supports===u.supports&&v.layer===u.layer)return;c.update(u=v)}else c.remove()};return _}o.exports=function(u,d){d=d||{},u=u||[];var c=g(u,d);return function(D){D=D||[];for(var v=0;v<c.length;v++){var j=c[v],S=i(j);f[S].references--}for(var w=g(D,d),R=0;R<c.length;R++){var $=c[R],L=i($);f[L].references===0&&(f[L].updater(),f.splice(L,1))}c=w}}},128:o=>{var f={};function i(h){if(typeof f[h]>"u"){var u=document.querySelector(h);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch{u=null}f[h]=u}return f[h]}function g(h,u){var d=i(h);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(u)}o.exports=g},51:o=>{function f(i){var g=document.createElement("style");return i.setAttributes(g,i.attributes),i.insert(g,i.options),g}o.exports=f},855:(o,f,i)=>{function g(h){var u=i.nc;u&&h.setAttribute("nonce",u)}o.exports=g},740:o=>{function f(h,u,d){var c="";d.supports&&(c+="@supports (".concat(d.supports,") {")),d.media&&(c+="@media ".concat(d.media," {"));var _=typeof d.layer<"u";_&&(c+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),c+=d.css,_&&(c+="}"),d.media&&(c+="}"),d.supports&&(c+="}");var D=d.sourceMap;D&&typeof btoa<"u"&&(c+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(D))))," */")),u.styleTagTransform(c,h,u.options)}function i(h){if(h.parentNode===null)return!1;h.parentNode.removeChild(h)}function g(h){if(typeof document>"u")return{update:function(){},remove:function(){}};var u=h.insertStyleElement(h);return{update:function(c){f(u,h,c)},remove:function(){i(u)}}}o.exports=g},656:o=>{function f(i,g){if(g.styleSheet)g.styleSheet.cssText=i;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(i))}}o.exports=f},649:o=>{var f=g=>{var h={};return C.d(h,g),h},i=g=>()=>g;o.exports=Ur}},ce={};function C(o){var f=ce[o];if(f!==void 0)return f.exports;var i=ce[o]={id:o,exports:{}};return Fr[o](i,i.exports,C),i.exports}C.n=o=>{var f=o&&o.__esModule?()=>o.default:()=>o;return C.d(f,{a:f}),f},C.d=(o,f)=>{for(var i in f)C.o(f,i)&&!C.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:f[i]})},C.o=(o,f)=>Object.prototype.hasOwnProperty.call(o,f),C.nc=void 0;var A={};(()=>{C.d(A,{Rt:()=>Mt,L8:()=>fe,FN:()=>we,fv:()=>Nt,_s:()=>Ft,ey:()=>Le,gy:()=>He,tH:()=>Xt,PQ:()=>Je,xA:()=>qe,lz:()=>tr,Xb:()=>qt,n1:()=>Tt,mk:()=>or,Bl:()=>Br,aF:()=>ar,Zk:()=>lr,ZL:()=>St,fI:()=>Qt,y$:()=>jt,tu:()=>xr,m_:()=>Yt,PH:()=>vr,mK:()=>Gt,J0:()=>$e,B6:()=>ne,fz:()=>Dt,Iu:()=>ur});var o=C(85),f=C(591),i=C.n(f),g=C(740),h=C.n(g),u=C(128),d=C.n(u),c=C(855),_=C.n(c),D=C(51),v=C.n(D),j=C(656),S=C.n(j),w=C(87),R={};R.styleTagTransform=S(),R.setAttributes=_(),R.insert=d().bind(null,"head"),R.domAPI=h(),R.insertStyleElement=v();var $=i()(w.A,R);const L=w.A&&w.A.locals?w.A.locals:void 0,Mt=t=>(0,o.jsx)("span",{className:L.anico,children:(0,o.jsx)("span",{className:[L.hline,...(t.type||"").split(" ").map(e=>L[e]).filter(Boolean)].join(" ")})});var m=C(649);const de=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),he=t=>new Promise((e,r)=>{const a=new FileReader;a.readAsDataURL(t),a.addEventListener("load",()=>e(a.result)),a.addEventListener("error",n=>r(n))}),ue=async t=>{if(!de(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await he(r)},pe=t=>{const[e,r]=(0,m.useState)(t);return(0,m.useEffect)(()=>{(async n=>{const l=await ue(n);r(l)})(t)},[t]),e},fe=({src:t,...e})=>{const r=pe(t);return(0,o.jsx)("img",{...e,src:r})};var xe=t=>{var e={};return C.d(e,t),e},Eo=t=>()=>t;const Rt=xe({createPortal:()=>se.createPortal,flushSync:()=>se.flushSync}),me=(t,e)=>{const r=(0,m.useRef)();(0,m.useEffect)(()=>{r.current=t},[t]),(0,m.useEffect)(()=>{if(e){const a=setInterval(()=>r.current(),e);return()=>clearInterval(a)}},[e])},K=()=>![typeof window,typeof document].includes("undefined"),It=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),zt=t=>It(t).indexOf("element")>-1,q=(t=null)=>K()?zt(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Wt=(t=()=>{},e=60)=>{let r=null;return function(...a){clearTimeout(r),r=setTimeout(()=>t.apply(this,a),e)}},ye=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),H=t=>ye(t,"current"),Bt=(t,e)=>{const r=[],a=t.children??[];for(let n=0,l=a.length;n<l;n++){const s=a[n];s.className.indexOf(e)>-1&&r.push(s)}return r.length===0?null:r.length===1?r[0]:r},ge=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},_e=(t,e=60)=>{if(!K())return;t=H(t)?t.current:t??document.body;let r=Bt(t,"resize-sensor"),a=[];const n=Wt(()=>a.map(x=>x(t)),e),l=x=>{Bt(t,"resize-sensor")||(r=ge(t,n)),a.indexOf(x)===-1&&a.push(x)},s=x=>{const y=a.indexOf(x);y!==-1&&a.splice(y,1),a.length===0&&r&&p()},p=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,a=[])};return{element:t,bind:l,unbind:s,destroy:p}},Lt=(t={})=>{const e=(0,m.useRef)(0),[r,a]=(0,m.useState)(t),n=(0,m.useCallback)(l=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>a(l))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},be=(t=null,e=60)=>{const r=H(t)?t.current:t,{bind:a,destroy:n}=_e(r,e),[l,s]=Lt(q(r));return(0,m.useEffect)(()=>(a(()=>r&&s(q(r))),()=>n()),[r]),l};var xt=C(587),tt={};tt.styleTagTransform=S(),tt.setAttributes=_(),tt.insert=d().bind(null,"head"),tt.domAPI=h(),tt.insertStyleElement=v();var Wo=i()(xt.A,tt);const Z=xt.A&&xt.A.locals?xt.A.locals:void 0,we=({children:t,active:e=0,delay:r=5e3,className:a,...n})=>{const[l,s]=(0,m.useState)(e+1),[p,x]=(0,m.useState)(!1),y=(0,m.useRef)(),E=(0,m.useRef)(""),{width:k}=be(y);t=Array.isArray(t)?t:[t];const b=t[0],M=[t[t.length-1],...t,b],P=M.length;me(()=>{let T=l+1;T=T===P?1:T,E.current&&(E.current=""),s(T),T===P-1&&setTimeout(()=>{E.current="none",s(1)},500)},p?null:r);const z=(T,W)=>{W.stopPropagation(),E.current="",s(T),(0,Rt.flushSync)(()=>x(!0)),x(!1)},I={width:`${P*k}px`,transform:`translateX(${-k*l}px)`,transition:E.current};return(0,o.jsxs)("div",{className:`${Z["huxy-carousel"]}${a?` ${a}`:""}`,...n,ref:y,children:[(0,o.jsx)("div",{className:Z["huxy-carousel-wrap"],style:I,children:M.map((T,W)=>(0,o.jsx)("div",{className:`${Z["carousel-item"]} ${l===W?Z.active:""}`,style:{width:`${k}px`},children:T},`huxy-carousel-${W}`))}),(0,o.jsx)("div",{className:Z["carousel-switch"],children:t.map((T,W)=>(0,o.jsx)("span",{className:`${Z.dot} ${l===W+1?Z.active:""}`,onClick:N=>z(W+1,N)},`huxy-carousel-switch-${W}`))})]})},pt=(t,e)=>{let r="",a="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:l}=e;r=n?`col-${t}-${n}`:"",a=l?`offset-${t}-${l}`:""}return{sp:r,os:a}},Nt=(0,m.forwardRef)(({span:t,offset:e,xl:r,lg:a,md:n,sm:l,xs:s,style:p,width:x,auto:y,offsetWidth:E="0px",className:k,...b},O)=>{const M=k?` ${k}`:"",P=`col-${t||12}`,z=e?`offset-${e}`:"",{sp:I,os:T}=pt("xs",s),{sp:W,os:N}=pt("sm",l),{sp:X,os:B}=pt("md",n),{sp:G,os:U}=pt("lg",a),{sp:Y,os:F}=pt("xl",r),Q=[P,Y,G,X,W,I,z,F,U,B,N,T].filter(Boolean).join(" "),At=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${E})`}:{width:x};return(0,o.jsx)("div",{className:`${Q}${M}`,...b,style:{...At,...p},ref:O})}),ve=()=>{const t=(0,m.useRef)(!0);return t.current?(t.current=!1,!0):!1},ke=(t,e=[])=>{const r=ve();(0,m.useEffect)(()=>{if(!r)return t()},e)},Ut=(t,e=450)=>{const[r,a]=(0,m.useState)(t);return ke(()=>{let n;return t||e===0?a(t):n=setTimeout(()=>a(t),e),()=>n&&clearTimeout(n)},[t]),[r,a]},St=({children:t,mountNode:e=document.body})=>(0,Rt.createPortal)(t,e),Ee={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Ce={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Pe=document.body,Tt=({open:t,close:e,delay:r=300,children:a,mountNode:n,hasMask:l=!0,style:s,className:p="h-mask",relative:x})=>{const[y]=Ut(t,r);(n??Pe).style.overflow=y?"hidden":"";const E=x?"absolute":"fixed";return(0,o.jsx)(St,{mountNode:n,children:(0,o.jsx)("div",{children:y?(0,o.jsxs)("div",{className:p,style:{...Ee,position:E},children:[l?(0,o.jsx)("div",{style:{...Ce,position:E},onClick:k=>e?.(k)}):null,m.Children.map(a,k=>(0,m.isValidElement)(k)?(0,m.cloneElement)(k,{style:{position:"relative",zIndex:100001,...k.props.style}}):k)]}):null})})};var mt=C(724),et={};et.styleTagTransform=S(),et.setAttributes=_(),et.insert=d().bind(null,"head"),et.domAPI=h(),et.insertStyleElement=v();var $o=i()(mt.A,et);const J=mt.A&&mt.A.locals?mt.A.locals:void 0,Ft=({open:t,close:e,footer:r,header:a,className:n,style:l,children:s,width:p="300px",mountNode:x,position:y="right",relative:E})=>{const k=["drawer-wrap",y,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(b=>J[b]).join(" ");return(0,o.jsx)(Tt,{open:t,close:e,delay:250,hasMask:!0,relative:E,mountNode:x,className:"huxy-drawer",children:(0,o.jsx)("div",{className:k,style:{width:p,position:E?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":a?"44px":"0px",...l},children:(0,o.jsxs)("div",{className:J["drawer-container"],children:[a?(0,o.jsxs)("div",{className:J["drawer-header"],children:[y==="right"?(0,o.jsx)("span",{className:`link ${J["ico-close"]}`,onClick:b=>e?.(b)}):null,(0,o.jsx)("div",{children:a}),y==="left"?(0,o.jsx)("span",{className:`link ${J["ico-close"]}`,onClick:b=>e?.(b)}):null]}):null,(0,o.jsx)("div",{className:J["drawer-content"],children:s}),r?(0,o.jsx)("div",{className:J["drawer-footer"],children:r}):null]})})})},Ae=(t,e,r="click")=>{(0,m.useEffect)(()=>{const a=l=>{const s=H(t)?t.current:t;s?.contains&&!s.contains(l.target)&&e(l)},n=typeof r=="string"?[r]:r;return n.map(l=>{document.addEventListener(l,a,!1)}),()=>{n.map(l=>{document.removeEventListener(l,a,!1)})}},[t,e,r])},ze=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",Se=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),rt=t=>{if(K())return t=H(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Te=t=>{if(!K())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},ft=(t,e={},r=!1)=>{if(zt(t)){if(r){let a="";Object.keys(e).map(n=>{a+=`${n}: ${e[n]};`}),t.style=a;return}Object.keys(e).map(a=>t.style.setProperty(a,e[a]))}},De=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,je=(t=350,e="ms")=>new Promise(r=>setTimeout(r,De(t,e))),qo=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},Oe=je,Me=async(t,e=15)=>{if(!K())return;if(typeof t=="string"&&(t=Te(t)),t=H(t)?t.current:t,!zt(t))return{};const r=t.cloneNode(!0);ft(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await Oe(e);const a=rt(r);return t.parentNode.removeChild(r),a},Re=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Ie=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Re.test(r)?t.setAttribute("class",r.replace(Ie,e)):t.setAttribute("class",`${r} ${e}`)},Kt=async(t,e,r)=>{const{left:a,right:n,top:l,bottom:s}=rt(t),{width:p,height:x}=q(),{width:y,height:E}=await Me(e);if(n<0||s<0||a>p||l>x)return{};if(r==="vertical"){const k={left:a+"px",top:s+10+"px",right:"auto",bottom:"auto"};let b="lt";a+y>p&&(k.left=n-y+"px",b="rt"),s+10+E>x&&(k.top=l-10-E+"px",b=b==="lt"?"lb":"rb"),ft(e,k),Ht(e,b)}else{const k={left:n+10+"px",top:l+"px",right:"auto",bottom:"auto"};let b="tl";n+10+y>p&&(k.left=a-10-y+"px",b="tr"),l+E>x&&(k.top=s-E+"px",b=b==="tl"?"bl":"br"),ft(e,k),Ht(e,b)}},We=(t,e,r="horizontal")=>{const a=Wt(Kt),n=()=>a(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const l=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),ft(e,{left:"",top:"",right:"",bottom:""})};return Kt(t,e,r),l},Be=({open:t,delay:e=280,children:r,mountNode:a,style:n,...l})=>{const[s]=Ut(t,e);return(0,o.jsx)(St,{mountNode:a,children:(0,o.jsx)("div",{children:(0,o.jsx)("div",{style:{...n,display:s?"block":"none"},...l,children:r})})})};var yt=C(468),ot={};ot.styleTagTransform=S(),ot.setAttributes=_(),ot.insert=d().bind(null,"head"),ot.domAPI=h(),ot.insertStyleElement=v();var oa=i()(yt.A,ot);const $t=yt.A&&yt.A.locals?yt.A.locals:void 0,Le=({trigger:t="click",type:e,dropList:r,className:a,children:n,targetProps:l,...s})=>{const[p,x]=(0,m.useState)(!1),y=(0,m.useRef)(),E=(0,m.useRef)(),k=(0,m.useRef)();Ae(y,z=>p&&x(!1),[...new Set(["click",t.toLowerCase()])]),(0,m.useEffect)(()=>()=>k.current?.(),[]);const b=z=>{z.preventDefault(),x(!0),k.current=We(y.current,E.current,e)},O={[`on${Se(t)}`]:b},M=["drop-wrap",p?"open":"",a].filter(Boolean).map(z=>$t[z]).join(" "),P=ze(r)?r:r?.(()=>x(!1),p);return(0,o.jsxs)("span",{ref:y,className:$t["drop-target"],...l,...O,children:[n,(0,o.jsx)(Be,{open:p,className:"huxy-drop",children:(0,o.jsx)("div",{ref:E,className:M,...s,children:P})})]})},Ne=(t,e,r)=>{if(!K())return;r=H(r)?r.current:r??document.body;const a=document.createElement("span");a.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ft(a,e),a.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(a);const n=a.getBoundingClientRect();return r.removeChild(a),n};var gt=C(700),at={};at.styleTagTransform=S(),at.setAttributes=_(),at.insert=d().bind(null,"head"),at.domAPI=h(),at.insertStyleElement=v();var ia=i()(gt.A,at);const Vt=gt.A&&gt.A.locals?gt.A.locals:void 0,Yt=({title:t,placement:e="topRight",children:r,ellipsis:a,className:n,...l})=>(0,o.jsx)("span",{className:`${Vt[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...l,children:(0,o.jsx)("span",{className:a?Vt.ellipsis:"",children:r})}),Ue={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Fe=t=>{const{children:e,style:r}=t,a=typeof e=="string",n=a?e:e?.props?.title??e?.props?.children,l=(0,m.useRef)(),[s,p]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{if(l.current){const{width:x}=Ne(n,null,l.current.parentNode),{width:y}=rt(l.current),E=~~x>~~y;E!==s&&p(E)}},[n]),(0,o.jsx)("span",{ref:l,style:{display:"flex",width:"100%",...r},children:s?a?(0,o.jsx)(Yt,{...t,ellipsis:!0}):(0,o.jsx)("span",{style:Ue,children:e}):a?e:e?.props?.children})},He=t=>t.children==null?"":(0,o.jsx)(Fe,{...t});class Xt extends m.default.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:a}=this.props;typeof a=="function"&&a({error:e,info:r.componentStack})}render(){const{error:e}=this.state,{fallback:r,children:a}=this.props;return e?r?.(e)??e:a}}const Gt=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,o.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,o.jsx)(r,{}):(0,o.jsx)("i",{className:e})}return e??null},Ke=t=>Gt(t),$e=t=>({icon:e,defaultIcon:r})=>e?Ke(t)(e):e===!1?null:r,_t=["","webkit","moz","ms"],Ve=t=>_t.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Ye=t=>_t.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Xe=t=>_t.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Zt=_t.map(t=>`${t}fullscreenchange`),Ge=t=>{if(!K())return;t=H(t)?t.current:t??document.body;const e=Ve(document),r=Ye(t),a=Xe(document);document[e]?document[a]?.():t[r]?.()},Ze=t=>K()?(Zt.map(r=>document.addEventListener(r,t,!1)),()=>Zt.map(r=>document.removeEventListener(r,t,!1))):void 0,Jt=t=>(0,o.jsx)("i",{...t,children:"..."}),Je=({panel:t,fullIcon:e=Jt,exitIcon:r=Jt,...a})=>{const n=H(t)?t.current:t,[l,s]=(0,m.useState)();(0,m.useEffect)(()=>{const x=Ze(()=>{s(y=>!y)});return()=>x()},[]);const p=l?r:e;return(0,o.jsx)(p,{onClick:x=>Ge(n),...a})};var bt=C(531),nt={};nt.styleTagTransform=S(),nt.setAttributes=_(),nt.insert=d().bind(null,"head"),nt.domAPI=h(),nt.insertStyleElement=v();var fa=i()(bt.A,nt);const xa=bt.A&&bt.A.locals?bt.A.locals:void 0,Qe=({gutter:t=10,className:e,overflow:r="hidden",...a},n)=>{const l=e?` ${e}`:"";let s=10;if(Array.isArray(t)){const p=[...t];t=p[0],s=p[1]??p[0]}return(0,o.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(s/2)}px`,overflow:r},children:(0,o.jsx)("div",{className:`row${l}`,...a,ref:n})})},Qt=(0,m.forwardRef)(Qe),qe=({rowProps:t,colProps:e,children:r,Row:a=Qt,Col:n=Nt})=>{const l=[];return m.Children.map(r,s=>{s&&(s.type?.description==="react.fragment"?l.push(...s.props.children):l.push(s))}),(0,o.jsx)(a,{...t,children:l.map((s,p)=>(0,o.jsx)(n,{...e,...s.props.itemprops,children:s},`huuxy_grid_${p}`))})},Dt=(t,e)=>(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),qt=t=>{const{error:e={},info:r=""}=t||{},{message:a,stack:n,errMsg:l}=e;let s=l||n||e.toString();s=`${s}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),s=s.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),s=s.replace(/\s/g,"&nbsp;");const p=a?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,o.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Dt(s,{style:{color:"red"}}),p&&(0,o.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${p}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},tr=({children:t,report:e})=>{const r=(0,m.useRef)();return r.current?.state&&(r.current.state.error=null),(0,o.jsx)(Xt,{ref:r,fallback:(a,n)=>qt({error:a,info:n}),errorReport:e,children:t})},te=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),er=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),rr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},ee=({left:t,top:e,width:r,height:a})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${a}px`}),re=t=>(0,o.jsx)("i",{...t,children:"..."}),oe=t=>{const{left:e,top:r}=rt(t),{width:a,height:n}=q(t);return{left:e,top:r,width:a,height:n}},or=({panel:t,target:e,fullIcon:r=re,exitIcon:a=re})=>{t=H(t)?t.current:t||document.body;const[n,l]=(0,m.useState)(),s=(0,m.useRef)();(0,m.useEffect)(()=>{s.current={...rr,...ee(oe(t))}},[t]);const p=(y,E)=>{if(y){const b=ee(oe((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));te(E,s.current),setTimeout(()=>{te(E,b)},0)}else er(E,s.current);l(y)},x=n?a:r;return(0,o.jsx)(x,{onClick:y=>p(!n,t)})};var wt=C(482),it={};it.styleTagTransform=S(),it.setAttributes=_(),it.insert=d().bind(null,"head"),it.domAPI=h(),it.insertStyleElement=v();var wa=i()(wt.A,it);const V=wt.A&&wt.A.locals?wt.A.locals:void 0,ar=({open:t,close:e,hasMask:r=!0,cancelText:a="\u53D6\u6D88",submit:n,submitText:l="\u786E\u5B9A",title:s="Modal \u5F39\u7A97",className:p,children:x,delay:y=250,...E})=>{const k=["modal-wrap",t?"open":"",...p?.split(" ")??[]].filter(Boolean).map(b=>V[b]).join(" ");return(0,o.jsx)(Tt,{open:t,close:e,delay:y,hasMask:r,className:"huxy-modal",children:(0,o.jsx)("div",{className:k,...E,children:(0,o.jsxs)("div",{className:V["modal-container"],children:[(0,o.jsx)("div",{className:V["modal-header"],children:s}),(0,o.jsx)("div",{className:V["modal-content"],children:x}),(0,o.jsxs)("div",{className:V["modal-footer"],children:[(0,o.jsx)("div",{className:`${V.btn} ${V.left}`,onClick:b=>e?.(b),children:a}),(0,o.jsx)("div",{className:`${V.btn} ${V.right}`,onClick:b=>n?.(b),children:l})]})]})})})};var vt=C(670),lt={};lt.styleTagTransform=S(),lt.setAttributes=_(),lt.insert=d().bind(null,"head"),lt.domAPI=h(),lt.insertStyleElement=v();var ka=i()(vt.A,lt);const Ea=vt.A&&vt.A.locals?vt.A.locals:void 0,jt=({global:t,absolute:e})=>(0,o.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,o.jsx)("figure",{className:"spinning"})});var kt=C(945),st={};st.styleTagTransform=S(),st.setAttributes=_(),st.insert=d().bind(null,"head"),st.domAPI=h(),st.insertStyleElement=v();var Pa=i()(kt.A,st);const ct=kt.A&&kt.A.locals?kt.A.locals:void 0,nr=t=>t?.filter?.(e=>typeof e=="function"),ir=(t,e)=>{const r=(0,m.useRef)(),{loading:a,title:n,plugins:l,children:s,className:p,...x}=t,y=nr(l),E=y?.length,k=p?` ${p}`:"",b=H(e)?e:r;return(0,o.jsxs)("div",{className:`${ct.panel}${k}`,...x,ref:b,children:[(n||E)&&(0,o.jsxs)("div",{className:ct["panel-header"],children:[n&&(0,o.jsx)("h4",{className:ct["panel-title"],children:n}),E&&(0,o.jsx)("div",{className:ct["panel-plugins"],children:y.map((O,M)=>(0,o.jsx)("span",{className:`link ${ct.link}`,children:(0,o.jsx)(O,{panel:b})},M))})]}),(0,o.jsx)("div",{className:ct["panel-body"],children:s}),a&&(0,o.jsx)(jt,{})]})},lr=(0,m.forwardRef)(ir),Ot=t=>It(t)==="array",sr=t=>Ot(t)&&!!t.length,cr=({to:t,preventDefault:e,stopPropagation:r,...a})=>e?(0,o.jsx)("span",{...a}):(0,o.jsx)("a",{href:t,...a}),dr=({item:t,...e})=>(0,o.jsx)("ul",{...e}),hr=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(a=>{r[a]=n=>t[a](n,...e)}),r},ae=({data:t=[],events:e={},List:r=dr,Link:a=cr,leftIcon:n,rightIcon:l,isHorizontal:s,isCollapsed:p,level:x=0,parentOpen:y=!0})=>{const E=p&&!x,k=!s&&!p&&!y;return t.map(b=>{const{name:O,path:M,icon:P,rightIcon:z,active:I,open:T,children:W,linkProps:N}=b,X=sr(W),B=b.id||`${M}${b.childSameRouteLevel??""}`,G=E?b.title??O:void 0,U=k?"hidden":"",Y=P??n,F=z??l,Q=Y?(0,o.jsx)("div",{className:"node-left-icon",children:Y===!0?(0,o.jsx)("i",{className:"default-left-icon"}):Y}):null,At=O?(0,o.jsx)("div",{className:"node-text",children:(0,o.jsx)("span",{children:O})}):null;if(X){const Lr=hr(e,b,x),Nr=[U,T?"open":""].filter(Boolean).join(" ");return(0,o.jsxs)("li",{className:Nr,"has-children":"true",...Lr,children:[(0,o.jsxs)(a,{title:G,className:`link${I?" active":""}`,to:M,preventDefault:!0,stopPropagation:!1,...N,children:[Q,At,F?(0,o.jsx)("div",{className:"node-right-icon",children:F===!0?(0,o.jsx)("i",{className:"default-right-icon"}):F}):null]}),(0,o.jsx)(r,{item:b,children:ae({data:W,events:e,List:r,Link:a,leftIcon:n,rightIcon:l,isHorizontal:s,isCollapsed:p,level:x+1,parentOpen:!!T})})]},B)}return(0,o.jsx)("li",{className:U,children:(0,o.jsxs)(a,{title:G,className:`link${I?" active":""}`,to:M,...N,children:[Q,At]})},B)})},ne=ae,ur=(t,...e)=>(0,o.jsx)("div",{"v-html":t,...e});var Et=C(473),dt={};dt.styleTagTransform=S(),dt.setAttributes=_(),dt.insert=d().bind(null,"head"),dt.domAPI=h(),dt.insertStyleElement=v();var Ta=i()(Et.A,dt);const Da=Et.A&&Et.A.locals?Et.A.locals:void 0,pr=t=>(0,o.jsx)("div",{style:{padding:"6px 15px"},children:t}),fr=({activekey:t,tabs:e=[],switchTab:r,trackColor:a,flex:n,...l},s)=>{const[p,x]=(0,m.useState)(t??e[0]?.key),[y,E]=(0,m.useState)({}),k=(0,m.useRef)({}),b=(0,m.useRef)();(0,m.useEffect)(()=>{const P=k.current[p];P&&O(P)},[]);const O=P=>{const{left:z,width:I}=rt(P),T=rt(b.current).left;E({left:z-T,width:I})},M=(P,z)=>{P.stopPropagation(),x(z),typeof r=="function"&&r(z),O(P.currentTarget)};return(0,o.jsxs)("div",{className:"tabs-header-wrap",...l,ref:s,children:[(0,o.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:b,children:e.map(P=>(0,o.jsx)("li",{ref:z=>k.current[P.key]=z,className:`th-item${p===P.key?" active":""}`,onClick:z=>M(z,P.key),children:typeof P.renderTabs=="function"?P.renderTabs(P,p===P.key):pr(P.value)},P.key))}),(0,o.jsx)("div",{className:"th-track",style:{...y,color:a}})]})},xr=(0,m.forwardRef)(fr),mr=(t,e,r="id",a="children")=>{if(!Ot(t))return null;const n=l=>{for(let s=0,p=l.length;s<p;s++){const x=l[s];if(x[r]===e)return[x];if(Ot(x[a])){const y=n(x[a]);if(y)return[x].concat(y)}}};return n(t)},yr=t=>++t,gr=()=>{const[,t]=(0,m.useState)(0);return(0,m.useCallback)(()=>t(yr),[])},ie=t=>{const{children:e,open:r}=t;let a=0;if(r&&e?.length){a=e.length;let n=0;return e.map(l=>n+=ie(l)),a+n}return a},_r=({item:t,style:e,...r})=>(0,o.jsx)("ul",{style:{...e,"--count":ie(t)},...r});var Ct=C(133),ht={};ht.styleTagTransform=S(),ht.setAttributes=_(),ht.insert=d().bind(null,"head"),ht.domAPI=h(),ht.insertStyleElement=v();var Ra=i()(Ct.A,ht);const Ia=Ct.A&&Ct.A.locals?Ct.A.locals:void 0,br=t=>(0,o.jsx)("ul",{...t}),wr=(t,e)=>t?_r:({item:r,...a})=>(0,o.jsx)(br,{className:e==="right"?"left":"",...a}),vr=t=>{const{data:e=[],collapsed:r=!1,type:a="vertical",Link:n,width:l,bgColor:s,itemHeight:p,collapsedWidth:x,itemPadding:y,style:E,className:k,...b}=t,O=(0,m.useRef)(),M=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(O.current),[]);const P=gr(),z=a==="horizontal",I=!z&&r,T={onClick:(U,Y)=>{if(U.stopPropagation(),!z&&!I){const F=mr(e,Y.path,"path"),Q=F[F.length-1];Q.open=!Q.open,P()}},onMouseEnter:(U,Y,F)=>{I&&!F&&(clearTimeout(O.current),M.current.style.width="var(--maxWidth)")},onMouseLeave:(U,Y,F)=>{I&&!F&&(O.current=setTimeout(()=>M.current.style.width="",200))}},W=(z?["huxy-horizontal-tree",k]:["huxy-tree",k,I?"collapsed":""]).filter(Boolean).join(" "),{float:N,...X}=b?.style??{},B={"--bgColor":s,"--itemHeight":p,"--nodeListWidth":l,...X};z?(B["--itemPadding"]=y,B["--nodeFloat"]=N):(B["--width"]=l,B["--collapsedWidth"]=x);const G=wr(!z&&!I,N);return(0,o.jsx)("div",{ref:M,className:W,style:B,...b,children:(0,o.jsx)("div",{className:"huxy-tree-track",children:(0,o.jsx)("ul",{className:"huxy-tree-root",children:ne({data:e,events:T,List:G,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:z,isCollapsed:I})})})})},kr=()=>{const[t,e]=Lt(q());return(0,m.useEffect)(()=>{const r=()=>e(q());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},le=({menu:t,curName:e,Link:r})=>t.map(a=>{const{path:n,name:l,open:s,children:p}=a,x=l===e;return p?.length?(0,o.jsxs)("li",{className:s?"open":"",children:[(0,o.jsx)(r,{to:{query:{name:l}},className:`link${x?" active":""}`,preventDefault:!0,children:(0,o.jsx)("span",{children:l})}),(0,o.jsx)("ul",{children:(0,o.jsx)(le,{menu:p,curName:l,Link:r})})]},n||l):(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{name:l}},className:`link${x?" active":""}`,children:(0,o.jsx)("span",{children:l})})},n||l)}),Er=le,Cr=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Pr=(t=0,e)=>{K()&&(e=H(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},Ar=(t=()=>{},e=60)=>{let r=null;return function(...a){r||(t.apply(this,a),r=setTimeout(()=>r=null,e))}},zr=(t,e=null,r=!1)=>[...t||[]].sort((a,n)=>{const l=e?a[e]:a,s=e?n[e]:n;return!isNaN(Number(l))&&!isNaN(Number(l))?r?s-l:l-s:typeof l=="string"&&typeof s=="string"?r?s.localeCompare(l):l.localeCompare(s):typeof l=="string"&&typeof s=="number"?r?-1:1:typeof l=="number"||typeof l=="string"?r?1:-1:r?-1:1}),Sr=()=>K()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Tr=({curName:t,itemList:e})=>{const r=(0,m.useRef)(!1),a=(0,m.useRef)(""),[n,l]=(0,m.useState)(t);return(0,m.useEffect)(()=>{if(e.current=Cr(e.current),!t){const x=Object.keys(e.current).map(y=>({name:y,offsetTop:e.current[y]?.offsetTop??0}));l(x[0]?.name)}let s=0,p=0;if(a.current!==t){a.current=t;const x=e.current[t];r.current=!0,x?(Pr(x.offsetTop),s=setTimeout(()=>r.current=!1,1050)):p=setTimeout(()=>{window.scrollTo?.({top:e.current[t]?.offsetTop??0,behavior:"instant"}),s=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(s),clearTimeout(p),r.current=!1}},[t]),(0,m.useEffect)(()=>{const s=Ar(()=>{if(!r.current){const x=zr(Object.keys(e.current).map(y=>({name:y,offsetTop:e.current[y]?.offsetTop??0})),"offsetTop",!0).find(y=>y.offsetTop<Sr())?.name;a.current!==x&&(a.current=x,l(x))}});return window.addEventListener("scroll",s,!1),()=>window.removeEventListener("scroll",s,!1)},[]),[n]},Dr=/!\[.*\]\((.*)\)/g,jr=async(t,e,r)=>{const a={};for(let n=0,l=t.length;n<l;n++){const s=t[n],p=s.slice(2);a[s]=await r({folder:e,name:p})}return a},Or=async(t,{folder:e},r)=>{const n=[...t.matchAll(Dr)].filter(Boolean).map(l=>l[1]);if(n?.length){const l=await jr(n,e,r);n.map(s=>{t=t.replace(s,l[s])})}return t},Mr=({item:t,marked:e,getContext:r})=>{const[a,n]=(0,m.useState)("");return(0,m.useEffect)(()=>{(async()=>{try{const s=await r({...t,type:".md"}),p=await Or(s,t,r),x=typeof e=="function"?e.parse(p):x;n(x)}catch(s){n(s?.message)}})()},[]),(0,o.jsxs)("div",{className:"huxy-content",children:[Dt(a),!a&&(0,o.jsx)(jt,{global:!0})]})},Rr=({router:t,curName:e,context:r,marked:a,getContext:n})=>{const l=(0,m.useRef)({}),[s]=Tr({curName:e,itemList:l});return(0,m.useEffect)(()=>{s&&t.push({query:{name:s}})},[s]),(0,o.jsx)("div",{className:"huxy-anchor-page",children:r.map((p,x)=>(0,o.jsxs)("div",{className:"huxy-anchor-item",ref:y=>l.current[p.name]=y,children:[(0,o.jsx)("h2",{children:`${p.name}`}),(0,o.jsx)(Mr,{item:p,marked:a,getContext:n})]},p.name))})},Ir=t=>{const e=[];return t.map(r=>{const[a,n]=r.name.split("/"),l=e.find(s=>s.name===a);l?l.children.push({name:n,folder:a}):e.push({name:a,children:[{name:n,folder:a}]})}),e};var Pt=C(55),ut={};ut.styleTagTransform=S(),ut.setAttributes=_(),ut.insert=d().bind(null,"head"),ut.domAPI=h(),ut.insertStyleElement=v();var Ga=i()(Pt.A,ut);const Za=Pt.A&&Pt.A.locals?Pt.A.locals:void 0,Wr=(t,e,r)=>({sidebar:t.find(a=>a.name===e)?.children??[],listEle:t.map(({name:a,children:n})=>(0,o.jsx)("li",{children:(0,o.jsx)(r,{to:{query:{folder:a,name:n[0]?.name}},className:`link${a===e?" active":""}`,children:(0,o.jsx)("span",{children:a})})},a))}),Br=t=>{const{params:e,router:r,Link:a,listFiles:n,getContext:l,marked:s,title:p,routeLink:x,routeName:y,className:E,style:k}=t,{folder:b,name:O}=e,{width:M}=kr(),[P,z]=(0,m.useState)([]),[I,T]=(0,m.useState)(!1);(0,m.useEffect)(()=>{(async()=>{const G=await n(),U=Ir(G);z(U),b||r.push({query:{folder:U[0]?.name,name:U[0]?.children[0]?.name}})})()},[]);const W=M<=1024,{sidebar:N,listEle:X}=Wr(P,b,a);return(0,o.jsxs)("div",{className:`huxy-doc-frame ${E??""}`,style:k,children:[(0,o.jsxs)("div",{className:"huxy-doc-header",children:[(0,o.jsx)("div",{className:"huxy-doc-banner",children:p||"\u6587\u6863\u7CFB\u7EDF"}),(0,o.jsx)("ul",{className:"huxy-doc-nav",children:W?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("li",{className:"huxy-doc-collapsed",children:(0,o.jsx)("span",{className:"link",onClick:B=>{B.stopPropagation(),T(!I)},children:(0,o.jsx)(Mt,{type:I?"right":""})})}),(0,o.jsx)(Ft,{open:I,close:()=>T(!1),width:"220px",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-drawer",children:X})})]}):X}),x?(0,o.jsx)("div",{className:"huxy-doc-back",children:(0,o.jsx)(a,{to:x,children:(0,o.jsx)("span",{children:y??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,o.jsxs)("div",{className:"huxy-doc-container",children:[(0,o.jsx)("div",{className:"huxy-doc-main-page",children:(0,o.jsx)(Rr,{router:r,curName:O,context:N,marked:s,getContext:l})}),(0,o.jsx)("div",{className:"huxy-doc-menu",children:(0,o.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,o.jsx)(Er,{menu:N,curName:O,Link:a})})})]})]})}})();var Hr=A.Rt,Kr=A.L8,$r=A.FN,Vr=A.fv,Yr=A._s,Xr=A.ey,Gr=A.gy,Zr=A.tH,Jr=A.PQ,Qr=A.xA,qr=A.lz,to=A.Xb,eo=A.n1,ro=A.mk,oo=A.Bl,ao=A.aF,no=A.Zk,io=A.ZL,lo=A.fI,so=A.y$,co=A.tu,ho=A.m_,uo=A.PH,po=A.mK,fo=A.J0,xo=A.B6,mo=A.fz,yo=A.Iu;export{Hr as Anico,Kr as Base64Image,$r as Carousel,Vr as Col,Yr as Drawer,Xr as Drop,Gr as Ellipsis,Zr as ErrorBoundary,Jr as FullPage,Qr as Grid,qr as HandleError,to as LoadError,eo as Mask,ro as MaxSize,oo as Md2html,ao as Modal,no as Panel,io as Portal,lo as Row,so as Spinner,co as TabHeader,ho as Tooltip,uo as Tree,po as fixEle,fo as fixIcon,xo as renderTree,mo as str2React,yo as str2Vue};
