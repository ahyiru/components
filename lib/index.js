import*as $ from"react";import*as Pt from"react-dom";var oe={51:t=>{function e(r){var o=document.createElement("style");return r.setAttributes(o,r.attributes),r.insert(o,r.options),o}t.exports=e},55:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.huxy-doc-frame {
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
`,""]);const d=l},85:(t,e,r)=>{t.exports=r(197)},87:(t,e,r)=>{r.d(e,{Ay:()=>y,VN:()=>h,ZH:()=>f,Zx:()=>d,pG:()=>p,sQ:()=>u,t6:()=>c,v7:()=>_});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`/*@height:2px;
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
`,""]);var d="nstud",c="IZUmD",h="ylzxZ",p="Wy_0M",u="bdjKS",f="QPs9T",_="tx7CH";const y=l},128:t=>{var e={};function r(n){if(typeof e[n]>"u"){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}e[n]=a}return e[n]}function o(n,a){var i=r(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}t.exports=o},133:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.node-right-icon-close {
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
`,""]);const d=l},197:(t,e)=>{var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function n(a,i,l){var d=null;if(l!==void 0&&(d=""+l),i.key!==void 0&&(d=""+i.key),"key"in i){l={};for(var c in i)c!=="key"&&(l[c]=i[c])}else l=i;return i=l.ref,{$$typeof:r,type:a,key:d,ref:i!==void 0?i:null,props:l}}e.Fragment=o,e.jsx=n,e.jsxs=n},468:(t,e,r)=>{r.d(e,{Ay:()=>p,Zr:()=>c,ho:()=>h,og:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-drop-in {
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
`,""]);var d="TEYHV",c="NCYpg",h="qjBWI";const p=l},473:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.clear::after {
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
`,""]);const d=l},482:(t,e,r)=>{r.d(e,{Ay:()=>b,HM:()=>_,QN:()=>h,R8:()=>d,Y8:()=>u,ho:()=>c,k3:()=>p,kb:()=>y,pG:()=>g,ww:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-modal-in {
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
`,""]);var d="SqXAN",c="S3vb_",h="RiDlb",p="xdqLE",u="C91AO",f="J6dpF",_="XOnmm",y="t1Fx9",g="YGj9K";const b=l},531:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.cols-1 {
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
`,""]);const d=l},587:(t,e,r)=>{r.d(e,{Ay:()=>_,Om:()=>u,Ri:()=>c,S$:()=>p,UM:()=>d,fv:()=>h,vu:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.kLIGi {
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
`,""]);var d="kLIGi",c="XoNs4",h="x4UPo",p="qYuQn",u="GU0qu",f="svhYU";const _=l},591:t=>{var e=[];function r(a){for(var i=-1,l=0;l<e.length;l++)if(e[l].identifier===a){i=l;break}return i}function o(a,i){for(var l={},d=[],c=0;c<a.length;c++){var h=a[c],p=i.base?h[0]+i.base:h[0],u=l[p]||0,f="".concat(p," ").concat(u);l[p]=u+1;var _=r(f),y={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(_!==-1)e[_].references++,e[_].updater(y);else{var g=n(y,i);i.byIndex=c,e.splice(c,0,{identifier:f,updater:g,references:1})}d.push(f)}return d}function n(a,i){var l=i.domAPI(i);l.update(a);var d=function(h){if(h){if(h.css===a.css&&h.media===a.media&&h.sourceMap===a.sourceMap&&h.supports===a.supports&&h.layer===a.layer)return;l.update(a=h)}else l.remove()};return d}t.exports=function(a,i){i=i||{},a=a||[];var l=o(a,i);return function(c){c=c||[];for(var h=0;h<l.length;h++){var p=l[h],u=r(p);e[u].references--}for(var f=o(c,i),_=0;_<l.length;_++){var y=l[_],g=r(y);e[g].references===0&&(e[g].updater(),e.splice(g,1))}l=f}}},656:t=>{function e(r,o){if(o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}t.exports=e},670:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes before {
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
`,""]);const d=l},700:(t,e,r)=>{r.d(e,{$x:()=>u,Ay:()=>y,E9:()=>p,Vz:()=>c,ZG:()=>h,gO:()=>d,l3:()=>_,o7:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.ofth_ {
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
  z-index: 10002;
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
  z-index: 10002;
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
  z-index: 10002;
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
  z-index: 10002;
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
  z-index: 10002;
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
  z-index: 10002;
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
`,""]);var d="ofth_",c="hVmF3",h="uzFyE",p="Giihu",u="bFVVt",f="oGmKq",_="svYWD";const y=l},724:(t,e,r)=>{r.d(e,{Ay:()=>b,Ih:()=>g,Vn:()=>d,Y8:()=>_,_I:()=>f,ho:()=>c,iD:()=>u,kb:()=>p,pG:()=>h,pz:()=>y});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-drawer-right-in {
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
`,""]);var d="KsHNu",c="c6aFy",h="mlowE",p="w0B0d",u="W4gG3",f="SMORg",_="e3AWW",y="VSVwl",g="hlj9r";const b=l},740:t=>{function e(n,a,i){var l="";i.supports&&(l+="@supports (".concat(i.supports,") {")),i.media&&(l+="@media ".concat(i.media," {"));var d=typeof i.layer<"u";d&&(l+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),l+=i.css,d&&(l+="}"),i.media&&(l+="}"),i.supports&&(l+="}");var c=i.sourceMap;c&&typeof btoa<"u"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),a.styleTagTransform(l,n,a.options)}function r(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function o(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var a=n.insertStyleElement(n);return{update:function(l){e(a,n,l)},remove:function(){r(a)}}}t.exports=o},758:t=>{t.exports=function(e){return e[1]}},855:(t,e,r)=>{function o(n){var a=r.nc;a&&n.setAttribute("nonce",a)}t.exports=o},935:t=>{t.exports=function(e){var r=[];return r.toString=function(){return this.map(function(n){var a="",i=typeof n[5]<"u";return n[4]&&(a+="@supports (".concat(n[4],") {")),n[2]&&(a+="@media ".concat(n[2]," {")),i&&(a+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),a+=e(n),i&&(a+="}"),n[2]&&(a+="}"),n[4]&&(a+="}"),a}).join("")},r.i=function(n,a,i,l,d){typeof n=="string"&&(n=[[null,n,void 0]]);var c={};if(i)for(var h=0;h<this.length;h++){var p=this[h][0];p!=null&&(c[p]=!0)}for(var u=0;u<n.length;u++){var f=[].concat(n[u]);i&&c[f[0]]||(typeof d<"u"&&(typeof f[5]>"u"||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=d),a&&(f[2]&&(f[1]="@media ".concat(f[2]," {").concat(f[1],"}")),f[2]=a),l&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=l):f[4]="".concat(l)),r.push(f))}},r}},945:(t,e,r)=>{r.d(e,{$d:()=>u,Ay:()=>g,CG:()=>p,kv:()=>_,nd:()=>d,nf:()=>y,w_:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.clear::after {
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
`,""]);var d="J8VWE",c=null,h=null,p="rOxNb",u="OQwTX",f="W_1K6",_="eCk2_",y="R2Mku";const g=l}},zt={};function m(t){var e=zt[t];if(e!==void 0)return e.exports;var r=zt[t]={id:t,exports:{}};return oe[t](r,r.exports,m),r.exports}m.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return m.d(e,{a:e}),e},m.d=(t,e)=>{for(var r in e)m.o(e,r)&&!m.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},m.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),m.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},m.nc=void 0;var la={},mt={};m.r(mt),m.d(mt,{anico:()=>P.Zx,bottom:()=>P.sQ,close:()=>P.VN,default:()=>ce,hline:()=>P.t6,pause:()=>P.v7,play:()=>P.ZH,right:()=>P.pG});var yt={};m.r(yt),m.d(yt,{default:()=>qe,"drawer-container":()=>E.iD,"drawer-content":()=>E._I,"drawer-footer":()=>E.Ih,"drawer-header":()=>E.Y8,"drawer-wrap":()=>E.Vn,"ico-close":()=>E.pz,left:()=>E.kb,open:()=>E.ho,right:()=>E.pG});var gt={};m.r(gt),m.d(gt,{default:()=>wr,"drop-target":()=>K.og,"drop-wrap":()=>K.Zr,open:()=>K.ho});var _t={};m.r(_t),m.d(_t,{default:()=>Pr,ellipsis:()=>W.gO,"huxy-tooltip":()=>W.Vz,"huxy-tooltip-bottomLeft":()=>W.o7,"huxy-tooltip-bottomRight":()=>W.$x,"huxy-tooltip-rightTop":()=>W.l3,"huxy-tooltip-topLeft":()=>W.E9,"huxy-tooltip-topRight":()=>W.ZG});var bt={};m.r(bt),m.d(bt,{btn:()=>v.HM,default:()=>oo,left:()=>v.kb,"modal-container":()=>v.QN,"modal-content":()=>v.Y8,"modal-footer":()=>v.ww,"modal-header":()=>v.k3,"modal-wrap":()=>v.R8,open:()=>v.ho,right:()=>v.pG});var s=m(85),ae=m(591),S=m.n(ae),ne=m(740),D=m.n(ne),ie=m(128),T=m.n(ie),le=m(855),O=m.n(le),se=m(51),M=m.n(se),de=m(656),I=m.n(de),P=m(87),V={};V.styleTagTransform=I(),V.setAttributes=O(),V.insert=T().bind(null,"head"),V.domAPI=D(),V.insertStyleElement=M();var sa=S()(P.Ay,V);const ce=P.Ay&&P.Ay.locals?P.Ay.locals:void 0,he=t=>(0,s.jsx)("span",{className:P.Zx,children:(0,s.jsx)("span",{className:[P.t6,...(t.type||"").split(" ").map(e=>mt[e]).filter(Boolean)].join(" ")})}),jt=he;var ue=t=>{var e={};return m.d(e,t),e},da=t=>()=>t;const x=ue({Children:()=>$.Children,cloneElement:()=>$.cloneElement,default:()=>$.default,isValidElement:()=>$.isValidElement,useCallback:()=>$.useCallback,useEffect:()=>$.useEffect,useRef:()=>$.useRef,useState:()=>$.useState}),pe=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),fe=pe,xe=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",n=>r(n))}),me=xe,ye=async t=>{if(!fe(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await me(r)},ge=ye,_e=t=>{const[e,r]=(0,x.useState)(t);return(0,x.useEffect)(()=>{(async n=>{const a=await ge(n);r(a)})(t)},[t]),e},be=_e,ve=({src:t,...e})=>{const r=be(t);return(0,s.jsx)("img",{...e,src:r})},we=ve;var ke=t=>{var e={};return m.d(e,t),e},ca=t=>()=>t;const St=ke({createPortal:()=>Pt.createPortal,flushSync:()=>Pt.flushSync}),Ee=(t,e)=>{const r=(0,x.useRef)();(0,x.useEffect)(()=>{r.current=t},[t]),(0,x.useEffect)(()=>{if(e){const o=setInterval(()=>r.current(),e);return()=>clearInterval(o)}},[e])},Ce=Ee,Ae=()=>![typeof window,typeof document].includes("undefined"),N=Ae,Pe=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),Dt=Pe,ze=t=>Dt(t).indexOf("element")>-1,vt=ze,je=(t=null)=>N()?vt(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},it=je,Se=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Tt=Se,De=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),Te=De,Oe=t=>{const e=typeof t=="function"?t():t;return Te(e,"current")},R=Oe,Me=(t,e)=>{const r=[],o=t.children??[];for(let n=0,a=o.length;n<a;n++){const i=o[n];i.className.indexOf(e)>-1&&r.push(i)}return r.length===0?null:r.length===1?r[0]:r},Ot=Me,Ie=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},We=(t,e=60)=>{if(!N())return;t=R(t)?t.current:t??document.body;let r=Ot(t,"resize-sensor"),o=[];const n=Tt(()=>o.map(d=>d(t)),e),a=d=>{Ot(t,"resize-sensor")||(r=Ie(t,n)),o.indexOf(d)===-1&&o.push(d)},i=d=>{const c=o.indexOf(d);c!==-1&&o.splice(c,1),o.length===0&&r&&l()},l=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:a,unbind:i,destroy:l}},Re=We,Be=(t={})=>{const e=(0,x.useRef)(0),[r,o]=(0,x.useState)(t),n=(0,x.useCallback)(a=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>o(a))},[]);return(0,x.useEffect)(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},Mt=Be,Le=(t=null,e=60)=>{const[r,o]=Mt({});return(0,x.useEffect)(()=>{const n=typeof t=="function"?t():t,a=R(n)?n.current:n,{bind:i,destroy:l}=Re(a,e);return i(()=>a&&o(it(a))),()=>l()},[]),r},Ne=Le;var B=m(587),X={};X.styleTagTransform=I(),X.setAttributes=O(),X.insert=T().bind(null,"head"),X.domAPI=D(),X.insertStyleElement=M();var ha=S()(B.Ay,X);const ua=B.Ay&&B.Ay.locals?B.Ay.locals:void 0,Ue=({children:t,active:e=0,delay:r=5e3,className:o,...n})=>{const[a,i]=(0,x.useState)(e+1),[l,d]=(0,x.useState)(!1),c=(0,x.useRef)(),[h,p]=(0,x.useState)(""),{width:u}=Ne(()=>c);t=Array.isArray(t)?t:[t];const f=t[0],y=[t[t.length-1],...t,f],g=y.length;Ce(()=>{let w=a+1;w=w===g?1:w,p(""),i(w),w===g-1&&setTimeout(()=>{p("none"),i(1)},500)},l?null:r);const b=(w,k)=>{k.stopPropagation(),p(""),i(w),(0,St.flushSync)(()=>d(!0)),d(!1)},C={width:`${g*u}px`,transform:`translateX(${-u*a}px)`,transition:h};return(0,s.jsxs)("div",{className:`${B.UM}${o?` ${o}`:""}`,...n,ref:c,children:[(0,s.jsx)("div",{className:B.Ri,style:C,children:y.map((w,k)=>(0,s.jsx)("div",{className:`${B.fv} ${a===k?B.vu:""}`,style:{width:`${u}px`},children:w},`huxy-carousel-${k}`))}),(0,s.jsx)("div",{className:B.S$,children:t.map((w,k)=>(0,s.jsx)("span",{className:`${B.Om} ${a===k+1?B.vu:""}`,onClick:L=>b(k+1,L)},`huxy-carousel-switch-${k}`))})]})},Fe=Ue,lt=(t,e)=>{let r="",o="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:a}=e;r=n?`col-${t}-${n}`:"",o=a?`offset-${t}-${a}`:""}return{sp:r,os:o}},He=({span:t,offset:e,xl:r,lg:o,md:n,sm:a,xs:i,style:l,width:d,auto:c,offsetWidth:h="0px",className:p,ref:u,...f})=>{const _=p?` ${p}`:"",y=`col-${t||12}`,g=e?`offset-${e}`:"",{sp:b,os:C}=lt("xs",i),{sp:w,os:k}=lt("sm",a),{sp:L,os:A}=lt("md",n),{sp:H,os:z}=lt("lg",o),{sp:F,os:j}=lt("xl",r),Y=[y,F,H,L,w,b,g,j,z,A,k,C].filter(Boolean).join(" "),dt=c?{width:"auto",flex:1,maxWidth:`calc(100% - ${h})`}:{width:d};return(0,s.jsx)("div",{className:`${Y}${_}`,...f,style:{...dt,...l},ref:u})},It=He,$e=(t,e=[])=>{const r=(0,x.useRef)(!1);(0,x.useEffect)(()=>{if(!r.current)r.current=!0;else return t()},e)},Ke=$e,Ye=(t,e=450)=>{const[r,o]=(0,x.useState)(t);return Ke(()=>{let n;return t||e===0?o(t):n=setTimeout(()=>o(t),e),()=>n&&clearTimeout(n)},[t]),[r,o]},Wt=Ye,Ve=({children:t,mountNode:e=document.body})=>(0,St.createPortal)(t,e),wt=Ve,Xe={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Ge={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},Ze=document.body,Qe=(t,e)=>(t??Ze).style.overflow=e?"hidden":"",Je=({open:t,close:e,delay:r=300,children:o,mountNode:n,hasMask:a=!0,style:i,className:l="h-mask",relative:d})=>{const[c]=Wt(t,r);Qe(n,c);const h=d?"absolute":"fixed";return(0,s.jsx)(wt,{mountNode:n,children:(0,s.jsx)("div",{children:c?(0,s.jsxs)("div",{className:l,style:{...Xe,position:h},children:[a?(0,s.jsx)("div",{style:{...Ge,position:h},onClick:p=>e?.(p)}):null,x.Children.map(o,p=>(0,x.isValidElement)(p)?(0,x.cloneElement)(p,{style:{position:"relative",zIndex:100001,...p.props.style}}):p)]}):null})})},kt=Je;var E=m(724),G={};G.styleTagTransform=I(),G.setAttributes=O(),G.insert=T().bind(null,"head"),G.domAPI=D(),G.insertStyleElement=M();var pa=S()(E.Ay,G);const qe=E.Ay&&E.Ay.locals?E.Ay.locals:void 0,tr=({open:t,close:e,footer:r,header:o,className:n,style:a,children:i,width:l="300px",mountNode:d,position:c="right",relative:h})=>{const p=["drawer-wrap",c,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(u=>yt[u]).join(" ");return(0,s.jsx)(kt,{open:t,close:e,delay:250,hasMask:!0,relative:h,mountNode:d,className:"huxy-drawer",children:(0,s.jsx)("div",{className:p,style:{width:l,position:h?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":o?"44px":"0px",...a},children:(0,s.jsxs)("div",{className:E.iD,children:[o?(0,s.jsxs)("div",{className:E.Y8,children:[c==="right"?(0,s.jsx)("span",{className:`link ${E.pz}`,onClick:u=>e?.(u)}):null,(0,s.jsx)("div",{children:o}),c==="left"?(0,s.jsx)("span",{className:`link ${E.pz}`,onClick:u=>e?.(u)}):null]}):null,(0,s.jsx)("div",{className:E._I,children:i}),r?(0,s.jsx)("div",{className:E.Ih,children:r}):null]})})})},Rt=tr,er=(t,e,r="click")=>{(0,x.useEffect)(()=>{const o=a=>{const i=typeof t=="function"?t():t,l=R(i)?i.current:i;l?.contains&&!l.contains(a.target)&&e(a)},n=typeof r=="string"?[r]:r;return n.map(a=>{document.addEventListener(a,o,!1)}),()=>{n.map(a=>{document.removeEventListener(a,o,!1)})}},[t])},rr=er,or=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,ar=or,nr=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),ir=nr,lr=t=>{if(N())return t=R(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Z=lr,sr=t=>{if(!N())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},dr=sr,cr=(t,e={},r=!1)=>{if(vt(t)){if(r){let o="";Object.keys(e).map(n=>{o+=`${n}: ${e[n]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}},st=cr,hr=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,ur=(t=350,e="ms")=>new Promise(r=>setTimeout(r,hr(t,e))),fa=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},pr=ur,fr=async(t,e=15)=>{if(!N())return;if(typeof t=="string"&&(t=dr(t)),t=R(t)?t.current:t,!vt(t))return{};const r=t.cloneNode(!0);st(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await pr(e);const o=Z(r);return t.parentNode.removeChild(r),o},xr=fr,mr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,yr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Bt=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";mr.test(r)?t.setAttribute("class",r.replace(yr,e)):t.setAttribute("class",`${r} ${e}`)},Lt=async(t,e,r)=>{const{left:o,right:n,top:a,bottom:i}=Z(t),{width:l,height:d}=it(),{width:c,height:h}=await xr(e);if(n<0||i<0||o>l||a>d)return{};if(r==="vertical"){const p={left:o+"px",top:i+10+"px",right:"auto",bottom:"auto"};let u="lt";o+c>l&&(p.left=n-c+"px",u="rt"),i+10+h>d&&(p.top=a-10-h+"px",u=u==="lt"?"lb":"rb"),st(e,p),Bt(e,u)}else{const p={left:n+10+"px",top:a+"px",right:"auto",bottom:"auto"};let u="tl";n+10+c>l&&(p.left=o-10-c+"px",u="tr"),a+h>d&&(p.top=i-h+"px",u=u==="tl"?"bl":"br"),st(e,p),Bt(e,u)}},gr=(t,e,r="horizontal")=>{const o=Tt(Lt),n=()=>o(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const a=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),st(e,{left:"",top:"",right:"",bottom:""})};return Lt(t,e,r),a},_r=gr,br=({open:t,delay:e=280,children:r,mountNode:o,style:n,...a})=>{const[i]=Wt(t,e);return(0,s.jsx)(wt,{mountNode:o,children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{...n,display:i?"block":"none"},...a,children:r})})})},vr=br;var K=m(468),Q={};Q.styleTagTransform=I(),Q.setAttributes=O(),Q.insert=T().bind(null,"head"),Q.domAPI=D(),Q.insertStyleElement=M();var xa=S()(K.Ay,Q);const wr=K.Ay&&K.Ay.locals?K.Ay.locals:void 0,kr=({trigger:t="click",type:e,dropList:r,className:o,children:n,targetProps:a,...i})=>{const[l,d]=(0,x.useState)(!1),c=(0,x.useRef)(),h=(0,x.useRef)(),p=(0,x.useRef)();rr(c,g=>d(!1),[...new Set(["click",t.toLowerCase()])]),(0,x.useEffect)(()=>()=>p.current?.(),[]);const u=g=>{g.preventDefault(),d(!0),p.current=_r(c.current,h.current,e)},f={[`on${ir(t)}`]:u},_=["drop-wrap",l?"open":"",o].filter(Boolean).map(g=>gt[g]).join(" "),y=ar(r)?r:r?.(()=>d(!1),l);return(0,s.jsxs)("span",{ref:c,className:K.og,...a,...f,children:[n,(0,s.jsx)(vr,{open:l,className:"huxy-drop",children:(0,s.jsx)("div",{ref:h,className:_,...i,children:y})})]})},Er=kr,Cr=(t,e,r)=>{if(!N())return;r=R(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&st(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n},Ar=Cr;var W=m(700),J={};J.styleTagTransform=I(),J.setAttributes=O(),J.insert=T().bind(null,"head"),J.domAPI=D(),J.insertStyleElement=M();var ma=S()(W.Ay,J);const Pr=W.Ay&&W.Ay.locals?W.Ay.locals:void 0,zr=({title:t,placement:e="topRight",children:r,ellipsis:o,className:n,...a})=>(0,s.jsx)("span",{className:`${_t[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...a,children:(0,s.jsx)("span",{className:o?W.gO:"",children:r})}),Nt=zr,jr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Sr=t=>{const{children:e,style:r}=t,o=typeof e=="string",n=o?e:e?.props?.title??e?.props?.children,a=(0,x.useRef)(),[i,l]=(0,x.useState)(!0);return(0,x.useEffect)(()=>{if(a.current){const{width:d}=Ar(n,null,a.current.parentNode),{width:c}=Z(a.current),h=~~d>~~c;h!==i&&l(h)}},[n]),(0,s.jsx)("span",{ref:a,style:{display:"flex",width:"100%",...r},children:i?o?(0,s.jsx)(Nt,{...t,ellipsis:!0}):(0,s.jsx)("span",{style:jr,children:e}):o?e:e?.props?.children})},Dr=t=>t.children==null?"":(0,s.jsx)(Sr,{...t}),Tr=Dr;class Ut extends x.default.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:o}=this.props;typeof o=="function"&&o({error:e,info:r.componentStack})}componentDidUpdate(e,r){r.error&&this.setState({error:null})}render(){const{error:e}=this.state,{fallback:r,children:o}=this.props;return e?r?.(e)??e:o}}const Or=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,s.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,s.jsx)(r,{}):(0,s.jsx)("i",{className:e})}return e??null},Ft=Or,Mr=t=>Ft(t),Ir=t=>({icon:e,defaultIcon:r})=>e?Mr(t)(e):e===!1?null:r,Wr=Ir,ct=["","webkit","moz","ms"],Rr=t=>ct.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Br=t=>ct.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Lr=t=>ct.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Ht=ct.map(t=>`${t}fullscreenchange`),Nr=t=>{if(!N())return;t=R(t)?t.current:t??document.body;const e=Rr(document),r=Br(t),o=Lr(document);document[e]?document[o]?.():t[r]?.()},Ur=Nr,Fr=t=>N()?(Ht.map(r=>document.addEventListener(r,t,!1)),()=>Ht.map(r=>document.removeEventListener(r,t,!1))):void 0,Hr=Fr,$t=t=>(0,s.jsx)("i",{...t,children:"..."}),$r=({panel:t,fullIcon:e=$t,exitIcon:r=$t,...o})=>{const n=R(t)?t.current:t,[a,i]=(0,x.useState)();(0,x.useEffect)(()=>{const d=Hr(()=>{i(c=>!c)});return()=>d()},[]);const l=a?r:e;return(0,s.jsx)(l,{onClick:d=>Ur(n),...o})},Kr=$r;var ht=m(531),q={};q.styleTagTransform=I(),q.setAttributes=O(),q.insert=T().bind(null,"head"),q.domAPI=D(),q.insertStyleElement=M();var ya=S()(ht.A,q);const ga=ht.A&&ht.A.locals?ht.A.locals:void 0,Yr=({gutter:t=10,className:e,overflow:r="hidden",ref:o,...n})=>{const a=e?` ${e}`:"";let i=10;if(Array.isArray(t)){const l=[...t];t=l[0],i=l[1]??l[0]}return(0,s.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(i/2)}px`,overflow:r},children:(0,s.jsx)("div",{className:`row${a}`,...n,ref:o})})},Kt=Yr,Vr=({rowProps:t,colProps:e,children:r,Row:o=Kt,Col:n=It})=>{const a=[];return x.Children.map(r,i=>{i&&(i.type?.description==="react.fragment"?a.push(...i.props.children):a.push(i))}),(0,s.jsx)(o,{...t,children:a.map((i,l)=>(0,s.jsx)(n,{...e,...i.props.itemprops,children:i},`huuxy_grid_${l}`))})},Xr=Vr,Gr=(t,e)=>(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),Et=Gr,Zr=t=>{const{error:e={},info:r=""}=t||{},{message:o,stack:n,errMsg:a}=e;let i=a||n||e.toString();i=`${i}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),i=i.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),i=i.replace(/\s/g,"&nbsp;");const l=o?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,s.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Et(i,{style:{color:"red"}}),l&&(0,s.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${l}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Yt=Zr,Qr=({children:t,report:e})=>(0,s.jsx)(Ut,{fallback:(r,o)=>Yt({error:r,info:o}),errorReport:e,children:t}),Jr=Qr,Vt=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),qr=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),to={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Xt=({left:t,top:e,width:r,height:o})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${o}px`}),Gt=t=>(0,s.jsx)("i",{...t,children:"..."}),Zt=t=>{const{left:e,top:r}=Z(t),{width:o,height:n}=it(t);return{left:e,top:r,width:o,height:n}},eo=({panel:t,target:e,fullIcon:r=Gt,exitIcon:o=Gt})=>{t=R(t)?t.current:t||document.body;const[n,a]=(0,x.useState)(),i=(0,x.useRef)();(0,x.useEffect)(()=>{i.current={...to,...Xt(Zt(t))}},[t]);const l=(c,h)=>{if(c){const u=Xt(Zt((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));Vt(h,i.current),setTimeout(()=>{Vt(h,u)},0)}else qr(h,i.current);a(c)},d=n?o:r;return(0,s.jsx)(d,{onClick:c=>l(!n,t)})},ro=eo;var v=m(482),tt={};tt.styleTagTransform=I(),tt.setAttributes=O(),tt.insert=T().bind(null,"head"),tt.domAPI=D(),tt.insertStyleElement=M();var _a=S()(v.Ay,tt);const oo=v.Ay&&v.Ay.locals?v.Ay.locals:void 0,ao=({open:t,close:e,hasMask:r=!0,cancelText:o="\u53D6\u6D88",submit:n,submitText:a="\u786E\u5B9A",title:i="Modal \u5F39\u7A97",className:l,children:d,delay:c=250,...h})=>{const p=["modal-wrap",t?"open":"",...l?.split(" ")??[]].filter(Boolean).map(u=>bt[u]).join(" ");return(0,s.jsx)(kt,{open:t,close:e,delay:c,hasMask:r,className:"huxy-modal",children:(0,s.jsx)("div",{className:p,...h,children:(0,s.jsxs)("div",{className:v.QN,children:[(0,s.jsx)("div",{className:v.k3,children:i}),(0,s.jsx)("div",{className:v.Y8,children:d}),(0,s.jsxs)("div",{className:v.ww,children:[(0,s.jsx)("div",{className:`${v.HM} ${v.kb}`,onClick:u=>e?.(u),children:o}),(0,s.jsx)("div",{className:`${v.HM} ${v.pG}`,onClick:u=>n?.(u),children:a})]})]})})})},no=ao;var ut=m(670),et={};et.styleTagTransform=I(),et.setAttributes=O(),et.insert=T().bind(null,"head"),et.domAPI=D(),et.insertStyleElement=M();var ba=S()(ut.A,et);const va=ut.A&&ut.A.locals?ut.A.locals:void 0,io=({global:t,absolute:e})=>(0,s.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,s.jsx)("figure",{className:"spinning"})}),Ct=io;var U=m(945),rt={};rt.styleTagTransform=I(),rt.setAttributes=O(),rt.insert=T().bind(null,"head"),rt.domAPI=D(),rt.insertStyleElement=M();var wa=S()(U.Ay,rt);const ka=U.Ay&&U.Ay.locals?U.Ay.locals:void 0,lo=t=>t?.filter?.(e=>typeof e=="function"),so=({loading:t,title:e,plugins:r,children:o,className:n,ref:a,...i})=>{const l=(0,x.useRef)(),d=lo(r),c=d?.length,h=n?` ${n}`:"",p=R(()=>a)?a:l;return(0,s.jsxs)("div",{className:`${U.nd}${h}`,...i,ref:p,children:[(e||c)&&(0,s.jsxs)("div",{className:U.$d,children:[e&&(0,s.jsx)("h4",{className:U.w_,children:e}),c&&(0,s.jsx)("div",{className:U.kv,children:d.map((u,f)=>(0,s.jsx)("span",{className:`link ${U.nf}`,children:(0,s.jsx)(u,{panel:p})},f))})]}),(0,s.jsx)("div",{className:U.CG,children:o}),t&&(0,s.jsx)(Ct,{})]})},co=so,ho=t=>Dt(t)==="array",At=ho,uo=t=>At(t)&&!!t.length,po=uo,fo=({to:t,preventDefault:e,stopPropagation:r,...o})=>e?(0,s.jsx)("span",{...o}):(0,s.jsx)("a",{href:t,...o}),xo=({item:t,...e})=>(0,s.jsx)("ul",{...e}),mo=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(o=>{r[o]=n=>t[o](n,...e)}),r},Qt=({data:t=[],events:e={},List:r=xo,Link:o=fo,leftIcon:n,rightIcon:a,isHorizontal:i,isCollapsed:l,level:d=0,parentOpen:c=!0})=>{const h=l&&!d,p=!i&&!l&&!c;return t.map(u=>{const{name:f,path:_,icon:y,rightIcon:g,active:b,open:C,children:w,linkProps:k}=u,L=po(w),A=u.id||`${_}${u.childSameRouteLevel??""}`,H=h?u.title??f:void 0,z=p?"hidden":"",F=y??n,j=g??a,Y=F?(0,s.jsx)("div",{className:"node-left-icon",children:F===!0?(0,s.jsx)("i",{className:"default-left-icon"}):F}):null,dt=f?(0,s.jsx)("div",{className:"node-text",children:(0,s.jsx)("span",{children:f})}):null;if(L){const ee=mo(e,u,d),re=[z,C?"open":""].filter(Boolean).join(" ");return(0,s.jsxs)("li",{className:re,"has-children":"true",...ee,children:[(0,s.jsxs)(o,{title:H,className:`link${b?" active":""}`,to:_,preventDefault:!0,stopPropagation:!1,...k,children:[Y,dt,j?(0,s.jsx)("div",{className:"node-right-icon",children:j===!0?(0,s.jsx)("i",{className:"default-right-icon"}):j}):null]}),(0,s.jsx)(r,{item:u,children:Qt({data:w,events:e,List:r,Link:o,leftIcon:n,rightIcon:a,isHorizontal:i,isCollapsed:l,level:d+1,parentOpen:!!C})})]},A)}return(0,s.jsx)("li",{className:z,children:(0,s.jsxs)(o,{title:H,className:`link${b?" active":""}`,to:_,...k,children:[Y,dt]})},A)})},Jt=Qt,yo=(t,...e)=>(0,s.jsx)("div",{"v-html":t,...e}),go=yo;var pt=m(473),ot={};ot.styleTagTransform=I(),ot.setAttributes=O(),ot.insert=T().bind(null,"head"),ot.domAPI=D(),ot.insertStyleElement=M();var Ea=S()(pt.A,ot);const Ca=pt.A&&pt.A.locals?pt.A.locals:void 0,_o=t=>(0,s.jsx)("div",{style:{padding:"6px 15px"},children:t}),bo=({activekey:t,tabs:e=[],switchTab:r,trackColor:o,flex:n,ref:a,...i})=>{const[l,d]=(0,x.useState)(t??e[0]?.key),[c,h]=(0,x.useState)({}),p=(0,x.useRef)({}),u=(0,x.useRef)();(0,x.useEffect)(()=>{const y=p.current[l];y&&f(y)},[]);const f=y=>{const{left:g,width:b}=Z(y),C=Z(u.current).left;h({left:g-C,width:b})},_=(y,g)=>{y.stopPropagation(),d(g),typeof r=="function"&&r(g),f(y.currentTarget)};return(0,s.jsxs)("div",{className:"tabs-header-wrap",...i,ref:a,children:[(0,s.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:u,children:e.map(y=>(0,s.jsx)("li",{ref:g=>p.current[y.key]=g,className:`th-item${l===y.key?" active":""}`,onClick:g=>_(g,y.key),children:typeof y.renderTabs=="function"?y.renderTabs(y,l===y.key):_o(y.value)},y.key))}),(0,s.jsx)("div",{className:"th-track",style:{...c,color:o}})]})},vo=bo,wo=(t,e,r="id",o="children")=>{if(!At(t))return null;const n=a=>{for(let i=0,l=a.length;i<l;i++){const d=a[i];if(d[r]===e)return[d];if(At(d[o])){const c=n(d[o]);if(c)return[d].concat(c)}}};return n(t)},ko=wo,Eo=t=>++t,Co=()=>{const[,t]=(0,x.useState)(0);return(0,x.useCallback)(()=>t(Eo),[])},Ao=Co,qt=t=>{const{children:e,open:r}=t;let o=0;if(r&&e?.length){o=e.length;let n=0;return e.map(a=>n+=qt(a)),o+n}return o},Po=({item:t,style:e,...r})=>(0,s.jsx)("ul",{style:{...e,"--count":qt(t)},...r}),zo=Po;var ft=m(133),at={};at.styleTagTransform=I(),at.setAttributes=O(),at.insert=T().bind(null,"head"),at.domAPI=D(),at.insertStyleElement=M();var Aa=S()(ft.A,at);const Pa=ft.A&&ft.A.locals?ft.A.locals:void 0,jo=t=>(0,s.jsx)("ul",{...t}),So=(t,e)=>t?zo:({item:r,...o})=>(0,s.jsx)(jo,{className:e==="right"?"left":"",...o}),Do=t=>{const{data:e=[],collapsed:r=!1,type:o="vertical",Link:n,width:a,bgColor:i,itemHeight:l,collapsedWidth:d,itemPadding:c,style:h,className:p,...u}=t,f=(0,x.useRef)(),_=(0,x.useRef)();(0,x.useEffect)(()=>()=>clearTimeout(f.current),[]);const y=Ao(),g=o==="horizontal",b=!g&&r,C={onClick:(z,F)=>{if(z.stopPropagation(),!g&&!b){const j=ko(e,F.path,"path"),Y=j[j.length-1];Y.open=!Y.open,y()}},onMouseEnter:(z,F,j)=>{b&&!j&&(clearTimeout(f.current),_.current.style.width="var(--maxWidth)")},onMouseLeave:(z,F,j)=>{b&&!j&&(f.current=setTimeout(()=>_.current.style.width="",200))}},w=(g?["huxy-horizontal-tree",p]:["huxy-tree",p,b?"collapsed":""]).filter(Boolean).join(" "),{float:k,...L}=u?.style??{},A={"--bgColor":i,"--itemHeight":l,"--nodeListWidth":a,...L};g?(A["--itemPadding"]=c,A["--nodeFloat"]=k):(A["--width"]=a,A["--collapsedWidth"]=d);const H=So(!g&&!b,k);return(0,s.jsx)("div",{ref:_,className:w,style:A,...u,children:(0,s.jsx)("div",{className:"huxy-tree-track",children:(0,s.jsx)("ul",{className:"huxy-tree-root",children:Jt({data:e,events:C,List:H,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:g,isCollapsed:b})})})})},To=Do,Oo=()=>{const[t,e]=Mt(it());return(0,x.useEffect)(()=>{const r=()=>e(it());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},Mo=Oo,te=({menu:t,curName:e,Link:r})=>t.map(o=>{const{path:n,name:a,open:i,children:l}=o,d=a===e;return l?.length?(0,s.jsxs)("li",{className:i?"open":"",children:[(0,s.jsx)(r,{to:{query:{name:a}},className:`link${d?" active":""}`,preventDefault:!0,children:(0,s.jsx)("span",{children:a})}),(0,s.jsx)("ul",{children:(0,s.jsx)(te,{menu:l,curName:a,Link:r})})]},n||a):(0,s.jsx)("li",{children:(0,s.jsx)(r,{to:{query:{name:a}},className:`link${d?" active":""}`,children:(0,s.jsx)("span",{children:a})})},n||a)}),Io=te,Wo=(t=0,e)=>{N()&&(e=R(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},Ro=Wo,Bo=()=>N()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Lo=Bo,No=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}},Uo=No,Fo=(t,e=null,r=!1)=>[...t||[]].sort((o,n)=>{const a=e?o[e]:o,i=e?n[e]:n;return!isNaN(Number(a))&&!isNaN(Number(a))?r?i-a:a-i:typeof a=="string"&&typeof i=="string"?r?i.localeCompare(a):a.localeCompare(i):typeof a=="string"&&typeof i=="number"?r?-1:1:typeof a=="number"||typeof a=="string"?r?1:-1:r?-1:1}),Ho=Fo,$o=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Ko=$o,Yo=({curName:t,itemList:e})=>{const r=(0,x.useRef)(!1),o=(0,x.useRef)(""),[n,a]=(0,x.useState)(t);return(0,x.useEffect)(()=>{const i=Ko(e.current);if(!t){const c=Object.keys(i).map(h=>({name:h,offsetTop:i[h]?.offsetTop??0}));a(c[0]?.name)}let l=0,d=0;if(o.current!==t){o.current=t;const c=i[t];r.current=!0,c?(Ro(c.offsetTop),l=setTimeout(()=>r.current=!1,1050)):d=setTimeout(()=>{window.scrollTo?.({top:i[t]?.offsetTop??0,behavior:"instant"}),l=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(l),clearTimeout(d),r.current=!1}},[t]),(0,x.useEffect)(()=>{const i=Uo(()=>{if(!r.current){const d=Ho(Object.keys(e.current).map(c=>({name:c,offsetTop:e.current[c]?.offsetTop??0})),"offsetTop",!0).find(c=>c.offsetTop<Lo())?.name;o.current!==d&&(o.current=d,a(d))}});return window.addEventListener("scroll",i,!1),()=>window.removeEventListener("scroll",i,!1)},[]),[n]},Vo=Yo,Xo=/!\[.*\]\((.*)\)/g,Go=async(t,e,r)=>{const o={};for(let n=0,a=t.length;n<a;n++){const i=t[n],l=i.slice(2);o[i]=await r({folder:e,name:l})}return o},Zo=async(t,{folder:e},r)=>{const n=[...t.matchAll(Xo)].filter(Boolean).map(a=>a[1]);if(n?.length){const a=await Go(n,e,r);n.map(i=>{t=t.replace(i,a[i])})}return t},Qo=Zo,Jo=({item:t,marked:e,getContext:r})=>{const[o,n]=(0,x.useState)("");return(0,x.useEffect)(()=>{(async()=>{try{const i=await r({...t,type:".md"}),l=await Qo(i,t,r),d=typeof e=="function"?e.parse(l):d;n(d)}catch(i){n(i?.message)}})()},[]),(0,s.jsxs)("div",{className:"huxy-content",children:[Et(o),!o&&(0,s.jsx)(Ct,{global:!0})]})},qo=Jo,ta=({router:t,curName:e,context:r,marked:o,getContext:n})=>{const a=(0,x.useRef)({}),[i]=Vo({curName:e,itemList:a});return(0,x.useEffect)(()=>{i&&t.push({query:{name:i}})},[i]),(0,s.jsx)("div",{className:"huxy-anchor-page",children:r.map((l,d)=>(0,s.jsxs)("div",{className:"huxy-anchor-item",ref:c=>a.current[l.name]=c,children:[(0,s.jsx)("h2",{children:`${l.name}`}),(0,s.jsx)(qo,{item:l,marked:o,getContext:n})]},l.name))})},ea=ta,ra=t=>{const e=[];return t.map(r=>{const[o,n]=r.name.split("/"),a=e.find(i=>i.name===o);a?a.children.push({name:n,folder:o}):e.push({name:o,children:[{name:n,folder:o}]})}),e},oa=ra;var xt=m(55),nt={};nt.styleTagTransform=I(),nt.setAttributes=O(),nt.insert=T().bind(null,"head"),nt.domAPI=D(),nt.insertStyleElement=M();var za=S()(xt.A,nt);const ja=xt.A&&xt.A.locals?xt.A.locals:void 0,aa=(t,e,r)=>({sidebar:t.find(o=>o.name===e)?.children??[],listEle:t.map(({name:o,children:n})=>(0,s.jsx)("li",{children:(0,s.jsx)(r,{to:{query:{folder:o,name:n[0]?.name}},className:`link${o===e?" active":""}`,children:(0,s.jsx)("span",{children:o})})},o))}),na=t=>{const{params:e,router:r,Link:o,listFiles:n,getContext:a,marked:i,title:l,routeLink:d,routeName:c,className:h,style:p}=t,{folder:u,name:f}=e,{width:_}=Mo(),[y,g]=(0,x.useState)([]),[b,C]=(0,x.useState)(!1);(0,x.useEffect)(()=>{(async()=>{const H=await n(),z=oa(H);g(z),u||r.push({query:{folder:z[0]?.name,name:z[0]?.children[0]?.name}})})()},[]);const w=_<=1024,{sidebar:k,listEle:L}=aa(y,u,o);return(0,s.jsxs)("div",{className:`huxy-doc-frame ${h??""}`,style:p,children:[(0,s.jsxs)("div",{className:"huxy-doc-header",children:[(0,s.jsx)("div",{className:"huxy-doc-banner",children:l||"\u6587\u6863\u7CFB\u7EDF"}),(0,s.jsx)("ul",{className:"huxy-doc-nav",children:w?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{className:"huxy-doc-collapsed",children:(0,s.jsx)("span",{className:"link",onClick:A=>{A.stopPropagation(),C(!b)},children:(0,s.jsx)(jt,{type:b?"right":""})})}),(0,s.jsx)(Rt,{open:b,close:()=>C(!1),width:"220px",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-drawer",children:L})})]}):L}),d?(0,s.jsx)("div",{className:"huxy-doc-back",children:(0,s.jsx)(o,{to:d,children:(0,s.jsx)("span",{children:c??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,s.jsxs)("div",{className:"huxy-doc-container",children:[(0,s.jsx)("div",{className:"huxy-doc-main-page",children:(0,s.jsx)(ea,{router:r,curName:f,context:k,marked:i,getContext:a})}),(0,s.jsx)("div",{className:"huxy-doc-menu",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,s.jsx)(Io,{menu:k,curName:f,Link:o})})})]})]})},ia=na;export{jt as Anico,we as Base64Image,Fe as Carousel,It as Col,Rt as Drawer,Er as Drop,Tr as Ellipsis,Ut as ErrorBoundary,Kr as FullPage,Xr as Grid,Jr as HandleError,Yt as LoadError,kt as Mask,ro as MaxSize,ia as Md2html,no as Modal,co as Panel,wt as Portal,Kt as Row,Ct as Spinner,vo as TabHeader,Nt as Tooltip,To as Tree,Ft as fixEle,Wr as fixIcon,Jt as renderTree,Et as str2React,go as str2Vue};
