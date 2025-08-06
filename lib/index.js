import{Children as zt,cloneElement as ae,default as ne,isValidElement as ie,useCallback as jt,useEffect as k,useRef as C,useState as A}from"react";import{createPortal as le,flushSync as se}from"react-dom";var de={51:t=>{function e(r){var o=document.createElement("style");return r.setAttributes(o,r.attributes),r.insert(o,r.options),o}t.exports=e},55:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.huxy-doc-frame {
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
`,""]);const d=l},85:(t,e,r)=>{t.exports=r(197)},87:(t,e,r)=>{r.d(e,{Ay:()=>x,VN:()=>h,ZH:()=>f,Zx:()=>d,pG:()=>p,sQ:()=>u,t6:()=>c,v7:()=>g});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`/*@height:2px;
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
`,""]);var d="nstud",c="IZUmD",h="ylzxZ",p="Wy_0M",u="bdjKS",f="QPs9T",g="tx7CH";const x=l},128:t=>{var e={};function r(n){if(typeof e[n]>"u"){var a=document.querySelector(n);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}e[n]=a}return e[n]}function o(n,a){var i=r(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(a)}t.exports=o},133:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.node-right-icon-close {
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
`,""]);const d=l},482:(t,e,r)=>{r.d(e,{Ay:()=>_,HM:()=>g,QN:()=>h,R8:()=>d,Y8:()=>u,ho:()=>c,k3:()=>p,kb:()=>x,pG:()=>y,ww:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-modal-in {
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
`,""]);var d="SqXAN",c="S3vb_",h="RiDlb",p="xdqLE",u="C91AO",f="J6dpF",g="XOnmm",x="t1Fx9",y="YGj9K";const _=l},531:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.cols-1 {
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
`,""]);const d=l},587:(t,e,r)=>{r.d(e,{Ay:()=>g,Om:()=>u,Ri:()=>c,S$:()=>p,UM:()=>d,fv:()=>h,vu:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.kLIGi {
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
`,""]);var d="kLIGi",c="XoNs4",h="x4UPo",p="qYuQn",u="GU0qu",f="svhYU";const g=l},591:t=>{var e=[];function r(a){for(var i=-1,l=0;l<e.length;l++)if(e[l].identifier===a){i=l;break}return i}function o(a,i){for(var l={},d=[],c=0;c<a.length;c++){var h=a[c],p=i.base?h[0]+i.base:h[0],u=l[p]||0,f="".concat(p," ").concat(u);l[p]=u+1;var g=r(f),x={css:h[1],media:h[2],sourceMap:h[3],supports:h[4],layer:h[5]};if(g!==-1)e[g].references++,e[g].updater(x);else{var y=n(x,i);i.byIndex=c,e.splice(c,0,{identifier:f,updater:y,references:1})}d.push(f)}return d}function n(a,i){var l=i.domAPI(i);l.update(a);var d=function(h){if(h){if(h.css===a.css&&h.media===a.media&&h.sourceMap===a.sourceMap&&h.supports===a.supports&&h.layer===a.layer)return;l.update(a=h)}else l.remove()};return d}t.exports=function(a,i){i=i||{},a=a||[];var l=o(a,i);return function(c){c=c||[];for(var h=0;h<l.length;h++){var p=l[h],u=r(p);e[u].references--}for(var f=o(c,i),g=0;g<l.length;g++){var x=l[g],y=r(x);e[y].references===0&&(e[y].updater(),e.splice(y,1))}l=f}}},656:t=>{function e(r,o){if(o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}t.exports=e},670:(t,e,r)=>{r.d(e,{A:()=>d});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes before {
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
`,""]);const d=l},700:(t,e,r)=>{r.d(e,{$x:()=>u,Ay:()=>x,E9:()=>p,Vz:()=>c,ZG:()=>h,gO:()=>d,l3:()=>g,o7:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.ofth_ {
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
`,""]);var d="ofth_",c="hVmF3",h="uzFyE",p="Giihu",u="bFVVt",f="oGmKq",g="svYWD";const x=l},724:(t,e,r)=>{r.d(e,{Ay:()=>_,Ih:()=>y,Vn:()=>d,Y8:()=>g,_I:()=>f,ho:()=>c,iD:()=>u,kb:()=>p,pG:()=>h,pz:()=>x});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`@keyframes animate-drawer-right-in {
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
`,""]);var d="KsHNu",c="c6aFy",h="mlowE",p="w0B0d",u="W4gG3",f="SMORg",g="e3AWW",x="VSVwl",y="hlj9r";const _=l},740:t=>{function e(n,a,i){var l="";i.supports&&(l+="@supports (".concat(i.supports,") {")),i.media&&(l+="@media ".concat(i.media," {"));var d=typeof i.layer<"u";d&&(l+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),l+=i.css,d&&(l+="}"),i.media&&(l+="}"),i.supports&&(l+="}");var c=i.sourceMap;c&&typeof btoa<"u"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),a.styleTagTransform(l,n,a.options)}function r(n){if(n.parentNode===null)return!1;n.parentNode.removeChild(n)}function o(n){if(typeof document>"u")return{update:function(){},remove:function(){}};var a=n.insertStyleElement(n);return{update:function(l){e(a,n,l)},remove:function(){r(a)}}}t.exports=o},758:t=>{t.exports=function(e){return e[1]}},855:(t,e,r)=>{function o(n){var a=r.nc;a&&n.setAttribute("nonce",a)}t.exports=o},935:t=>{t.exports=function(e){var r=[];return r.toString=function(){return this.map(function(n){var a="",i=typeof n[5]<"u";return n[4]&&(a+="@supports (".concat(n[4],") {")),n[2]&&(a+="@media ".concat(n[2]," {")),i&&(a+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),a+=e(n),i&&(a+="}"),n[2]&&(a+="}"),n[4]&&(a+="}"),a}).join("")},r.i=function(n,a,i,l,d){typeof n=="string"&&(n=[[null,n,void 0]]);var c={};if(i)for(var h=0;h<this.length;h++){var p=this[h][0];p!=null&&(c[p]=!0)}for(var u=0;u<n.length;u++){var f=[].concat(n[u]);i&&c[f[0]]||(typeof d<"u"&&(typeof f[5]>"u"||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=d),a&&(f[2]&&(f[1]="@media ".concat(f[2]," {").concat(f[1],"}")),f[2]=a),l&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=l):f[4]="".concat(l)),r.push(f))}},r}},945:(t,e,r)=>{r.d(e,{$d:()=>u,Ay:()=>y,CG:()=>p,kv:()=>g,nd:()=>d,nf:()=>x,w_:()=>f});var o=r(758),n=r.n(o),a=r(935),i=r.n(a),l=i()(n());l.push([t.id,`.clear::after {
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
`,""]);var d="J8VWE",c=null,h=null,p="rOxNb",u="OQwTX",f="W_1K6",g="eCk2_",x="R2Mku";const y=l}},Dt={};function m(t){var e=Dt[t];if(e!==void 0)return e.exports;var r=Dt[t]={id:t,exports:{}};return de[t](r,r.exports,m),r.exports}m.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return m.d(e,{a:e}),e},m.d=(t,e)=>{for(var r in e)m.o(e,r)&&!m.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},m.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),m.r=t=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},m.nc=void 0;var pa={},yt={};m.r(yt),m.d(yt,{anico:()=>j.Zx,bottom:()=>j.sQ,close:()=>j.VN,default:()=>me,hline:()=>j.t6,pause:()=>j.v7,play:()=>j.ZH,right:()=>j.pG});var gt={};m.r(gt),m.d(gt,{default:()=>or,"drawer-container":()=>E.iD,"drawer-content":()=>E._I,"drawer-footer":()=>E.Ih,"drawer-header":()=>E.Y8,"drawer-wrap":()=>E.Vn,"ico-close":()=>E.pz,left:()=>E.kb,open:()=>E.ho,right:()=>E.pG});var _t={};m.r(_t),m.d(_t,{default:()=>Ar,"drop-target":()=>Y.og,"drop-wrap":()=>Y.Zr,open:()=>Y.ho});var bt={};m.r(bt),m.d(bt,{default:()=>Tr,ellipsis:()=>B.gO,"huxy-tooltip":()=>B.Vz,"huxy-tooltip-bottomLeft":()=>B.o7,"huxy-tooltip-bottomRight":()=>B.$x,"huxy-tooltip-rightTop":()=>B.l3,"huxy-tooltip-topLeft":()=>B.E9,"huxy-tooltip-topRight":()=>B.ZG});var vt={};m.r(vt),m.d(vt,{btn:()=>b.HM,default:()=>lo,left:()=>b.kb,"modal-container":()=>b.QN,"modal-content":()=>b.Y8,"modal-footer":()=>b.ww,"modal-header":()=>b.k3,"modal-wrap":()=>b.R8,open:()=>b.ho,right:()=>b.pG});var s=m(85),ce=m(591),O=m.n(ce),he=m(740),S=m.n(he),ue=m(128),M=m.n(ue),pe=m(855),I=m.n(pe),fe=m(51),W=m.n(fe),xe=m(656),R=m.n(xe),j=m(87),X={};X.styleTagTransform=R(),X.setAttributes=I(),X.insert=M().bind(null,"head"),X.domAPI=S(),X.insertStyleElement=W();var fa=O()(j.Ay,X);const me=j.Ay&&j.Ay.locals?j.Ay.locals:void 0,ye=t=>(0,s.jsx)("span",{className:j.Zx,children:(0,s.jsx)("span",{className:[j.t6,...(t.type||"").split(" ").map(e=>yt[e]).filter(Boolean)].join(" ")})}),Tt=ye,ge=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),_e=ge,be=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",n=>r(n))}),ve=be,we=async t=>{if(!_e(t))return t;const r=await(await fetch(decodeURIComponent(t))).blob();return await ve(r)},ke=we,Ee=t=>{const[e,r]=A(t);return k(()=>{(async n=>{const a=await ke(n);r(a)})(t)},[t]),e},Ce=Ee,Ae=({src:t,...e})=>{const r=Ce(t);return(0,s.jsx)("img",{...e,src:r})},Pe=Ae,ze=(t,e)=>{const r=C();k(()=>{r.current=t},[t]),k(()=>{if(e){const o=setInterval(()=>r.current(),e);return()=>clearInterval(o)}},[e])},je=ze,De=()=>![typeof window,typeof document].includes("undefined"),F=De,Te=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),Ot=Te,Oe=t=>Ot(t).indexOf("element")>-1,wt=Oe,Se=(t=null)=>F()?wt(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},lt=Se,Me=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},St=Me,Ie=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),We=Ie,Re=t=>{const e=typeof t=="function"?t():t;return We(e,"current")},N=Re,Be=(t,e)=>{const r=[],o=t.children??[];for(let n=0,a=o.length;n<a;n++){const i=o[n];i.className.indexOf(e)>-1&&r.push(i)}return r.length===0?null:r.length===1?r[0]:r},Mt=Be,Ne=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r},Le=(t,e=60)=>{if(!F())return;t=N(t)?t.current:t??document.body;let r=Mt(t,"resize-sensor"),o=[];const n=St(()=>o.map(d=>d(t)),e),a=d=>{Mt(t,"resize-sensor")||(r=Ne(t,n)),o.indexOf(d)===-1&&o.push(d)},i=d=>{const c=o.indexOf(d);c!==-1&&o.splice(c,1),o.length===0&&r&&l()},l=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:a,unbind:i,destroy:l}},Ue=Le,Fe=(t={})=>{const e=C(0),[r,o]=A(t),n=jt(a=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame(()=>o(a))},[]);return k(()=>()=>cancelAnimationFrame(e.current),[]),[r,n]},It=Fe,He=(t=null,e=60)=>{const[r,o]=It({});return k(()=>{const n=typeof t=="function"?t():t,a=N(n)?n.current:n,{bind:i,destroy:l}=Ue(a,e);return i(()=>a&&o(lt(a))),()=>l()},[]),r},$e=He;var L=m(587),G={};G.styleTagTransform=R(),G.setAttributes=I(),G.insert=M().bind(null,"head"),G.domAPI=S(),G.insertStyleElement=W();var xa=O()(L.Ay,G);const ma=L.Ay&&L.Ay.locals?L.Ay.locals:void 0,Ke=({children:t,active:e=0,delay:r=5e3,className:o,...n})=>{const[a,i]=A(e+1),[l,d]=A(!1),c=C(),[h,p]=A(""),{width:u}=$e(()=>c);t=Array.isArray(t)?t:[t];const f=t[0],x=[t[t.length-1],...t,f],y=x.length;je(()=>{let v=a+1;v=v===y?1:v,p(""),i(v),v===y-1&&setTimeout(()=>{p("none"),i(1)},500)},l?null:r);const _=(v,w)=>{w.stopPropagation(),p(""),i(v),se(()=>d(!0)),d(!1)},P={width:`${y*u}px`,transform:`translateX(${-u*a}px)`,transition:h};return(0,s.jsxs)("div",{className:`${L.UM}${o?` ${o}`:""}`,...n,ref:c,children:[(0,s.jsx)("div",{className:L.Ri,style:P,children:x.map((v,w)=>(0,s.jsx)("div",{className:`${L.fv} ${a===w?L.vu:""}`,style:{width:`${u}px`},children:v},`huxy-carousel-${w}`))}),(0,s.jsx)("div",{className:L.S$,children:t.map((v,w)=>(0,s.jsx)("span",{className:`${L.Om} ${a===w+1?L.vu:""}`,onClick:U=>_(w+1,U)},`huxy-carousel-switch-${w}`))})]})},Ye=Ke,st=(t,e)=>{let r="",o="";if(typeof e=="number"&&(r=`col-${t}-${e}`),typeof e=="object"){const{span:n,offset:a}=e;r=n?`col-${t}-${n}`:"",o=a?`offset-${t}-${a}`:""}return{sp:r,os:o}},Ve=({span:t,offset:e,xl:r,lg:o,md:n,sm:a,xs:i,style:l,width:d,auto:c,offsetWidth:h="0px",className:p,ref:u,...f})=>{const g=p?` ${p}`:"",x=`col-${t||12}`,y=e?`offset-${e}`:"",{sp:_,os:P}=st("xs",i),{sp:v,os:w}=st("sm",a),{sp:U,os:z}=st("md",n),{sp:K,os:D}=st("lg",o),{sp:$,os:T}=st("xl",r),V=[x,$,K,U,v,_,y,T,D,z,w,P].filter(Boolean).join(" "),ct=c?{width:"auto",flex:1,maxWidth:`calc(100% - ${h})`}:{width:d};return(0,s.jsx)("div",{className:`${V}${g}`,...f,style:{...ct,...l},ref:u})},Wt=Ve,Xe=(t,e=[])=>{const r=C(!1);k(()=>{if(!r.current)r.current=!0;else return t()},e)},Ge=Xe,Ze=(t,e=450)=>{const[r,o]=A(t);return Ge(()=>{let n;return t||e===0?o(t):n=setTimeout(()=>o(t),e),()=>n&&clearTimeout(n)},[t]),[r,o]},Rt=Ze,Qe=({children:t,mountNode:e=document.body})=>le(t,e),kt=Qe,Je={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},qe={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},tr=document.body,er=(t,e)=>(t??tr).style.overflow=e?"hidden":"",rr=({open:t,close:e,delay:r=300,children:o,mountNode:n,hasMask:a=!0,style:i,className:l="h-mask",relative:d})=>{const[c]=Rt(t,r);er(n,c);const h=d?"absolute":"fixed";return(0,s.jsx)(kt,{mountNode:n,children:(0,s.jsx)("div",{children:c?(0,s.jsxs)("div",{className:l,style:{...Je,position:h},children:[a?(0,s.jsx)("div",{style:{...qe,position:h},onClick:p=>e?.(p)}):null,zt.map(o,p=>ie(p)?ae(p,{style:{position:"relative",zIndex:100001,...p.props.style}}):p)]}):null})})},Et=rr;var E=m(724),Z={};Z.styleTagTransform=R(),Z.setAttributes=I(),Z.insert=M().bind(null,"head"),Z.domAPI=S(),Z.insertStyleElement=W();var ya=O()(E.Ay,Z);const or=E.Ay&&E.Ay.locals?E.Ay.locals:void 0,ar=({open:t,close:e,footer:r,header:o,className:n,style:a,children:i,width:l="300px",mountNode:d,position:c="right",relative:h})=>{const p=["drawer-wrap",c,t?"open":"",...n?.split(" ")??[]].filter(Boolean).map(u=>gt[u]).join(" ");return(0,s.jsx)(Et,{open:t,close:e,delay:250,hasMask:!0,relative:h,mountNode:d,className:"huxy-drawer",children:(0,s.jsx)("div",{className:p,style:{width:l,position:h?"absolute":"fixed","--footerHeight":r?"44px":"0px","--headerHeight":o?"44px":"0px",...a},children:(0,s.jsxs)("div",{className:E.iD,children:[o?(0,s.jsxs)("div",{className:E.Y8,children:[c==="right"?(0,s.jsx)("span",{className:`link ${E.pz}`,onClick:u=>e?.(u)}):null,(0,s.jsx)("div",{children:o}),c==="left"?(0,s.jsx)("span",{className:`link ${E.pz}`,onClick:u=>e?.(u)}):null]}):null,(0,s.jsx)("div",{className:E._I,children:i}),r?(0,s.jsx)("div",{className:E.Ih,children:r}):null]})})})},Bt=ar,nr=(t,e,r="click")=>{k(()=>{const o=a=>{const i=typeof t=="function"?t():t,l=N(i)?i.current:i;l?.contains&&!l.contains(a.target)&&e(a)},n=typeof r=="string"?[r]:r;return n.map(a=>{document.addEventListener(a,o,!1)}),()=>{n.map(a=>{document.removeEventListener(a,o,!1)})}},[t])},ir=nr,lr=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description?.indexOf("react.")===0,sr=lr,dr=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),cr=dr,hr=t=>{if(F())return t=N(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Q=hr,ur=t=>{if(!F())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},pr=ur,fr=(t,e={},r=!1)=>{if(wt(t)){if(r){let o="";Object.keys(e).map(n=>{o+=`${n}: ${e[n]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}},dt=fr,xr=(t=350,e="ms")=>({ms:t*1,s:t*1e3,m:t*6e4,h:t*36e5,d:t*864e5})[e]??t,mr=(t=350,e="ms")=>new Promise(r=>setTimeout(r,xr(t,e))),ga=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);},yr=mr,gr=async(t,e=15)=>{if(!F())return;if(typeof t=="string"&&(t=pr(t)),t=N(t)?t.current:t,!wt(t))return{};const r=t.cloneNode(!0);dt(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await yr(e);const o=Q(r);return t.parentNode.removeChild(r),o},_r=gr,br=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Nt=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";br.test(r)?t.setAttribute("class",r.replace(vr,e)):t.setAttribute("class",`${r} ${e}`)},Lt=async(t,e,r)=>{const{left:o,right:n,top:a,bottom:i}=Q(t),{width:l,height:d}=lt(),{width:c,height:h}=await _r(e);if(n<0||i<0||o>l||a>d)return{};if(r==="vertical"){const p={left:o+"px",top:i+10+"px",right:"auto",bottom:"auto"};let u="lt";o+c>l&&(p.left=n-c+"px",u="rt"),i+10+h>d&&(p.top=a-10-h+"px",u=u==="lt"?"lb":"rb"),dt(e,p),Nt(e,u)}else{const p={left:n+10+"px",top:a+"px",right:"auto",bottom:"auto"};let u="tl";n+10+c>l&&(p.left=o-10-c+"px",u="tr"),a+h>d&&(p.top=i-h+"px",u=u==="tl"?"bl":"br"),dt(e,p),Nt(e,u)}},wr=(t,e,r="horizontal")=>{const o=St(Lt),n=()=>o(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const a=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),dt(e,{left:"",top:"",right:"",bottom:""})};return Lt(t,e,r),a},kr=wr,Er=({open:t,delay:e=280,children:r,mountNode:o,style:n,...a})=>{const[i]=Rt(t,e);return(0,s.jsx)(kt,{mountNode:o,children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{...n,display:i?"block":"none"},...a,children:r})})})},Cr=Er;var Y=m(468),J={};J.styleTagTransform=R(),J.setAttributes=I(),J.insert=M().bind(null,"head"),J.domAPI=S(),J.insertStyleElement=W();var _a=O()(Y.Ay,J);const Ar=Y.Ay&&Y.Ay.locals?Y.Ay.locals:void 0,Pr=({trigger:t="click",type:e,dropList:r,className:o,children:n,targetProps:a,...i})=>{const[l,d]=A(!1),c=C(),h=C(),p=C();ir(c,y=>d(!1),[...new Set(["click",t.toLowerCase()])]),k(()=>()=>p.current?.(),[]);const u=y=>{y.preventDefault(),d(!0),p.current=kr(c.current,h.current,e)},f={[`on${cr(t)}`]:u},g=["drop-wrap",l?"open":"",o].filter(Boolean).map(y=>_t[y]).join(" "),x=sr(r)?r:r?.(()=>d(!1),l);return(0,s.jsxs)("span",{ref:c,className:Y.og,...a,...f,children:[n,(0,s.jsx)(Cr,{open:l,className:"huxy-drop",children:(0,s.jsx)("div",{ref:h,className:g,...i,children:x})})]})},zr=Pr,jr=(t,e,r)=>{if(!F())return;r=N(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&dt(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n},Dr=jr;var B=m(700),q={};q.styleTagTransform=R(),q.setAttributes=I(),q.insert=M().bind(null,"head"),q.domAPI=S(),q.insertStyleElement=W();var ba=O()(B.Ay,q);const Tr=B.Ay&&B.Ay.locals?B.Ay.locals:void 0,Or=({title:t,placement:e="topRight",children:r,ellipsis:o,className:n,...a})=>(0,s.jsx)("span",{className:`${bt[`huxy-tooltip-${e}`]}${n?` ${n}`:""}`,tooltip:t??r,...a,children:(0,s.jsx)("span",{className:o?B.gO:"",children:r})}),Ut=Or,Sr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Mr=t=>{const{children:e,style:r}=t,o=typeof e=="string",n=o?e:e?.props?.title??e?.props?.children,a=C(),[i,l]=A(!0);return k(()=>{if(a.current){const{width:d}=Dr(n,null,a.current.parentNode),{width:c}=Q(a.current),h=~~d>~~c;h!==i&&l(h)}},[n]),(0,s.jsx)("span",{ref:a,style:{display:"flex",width:"100%",...r},children:i?o?(0,s.jsx)(Ut,{...t,ellipsis:!0}):(0,s.jsx)("span",{style:Sr,children:e}):o?e:e?.props?.children})},Ir=t=>t.children==null?"":(0,s.jsx)(Mr,{...t}),Wr=Ir;class Ft extends ne.Component{state={error:null};static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,r){const{errorReport:o}=this.props;typeof o=="function"&&o({error:e,info:r.componentStack})}componentDidUpdate(e,r){r.error&&this.setState({error:null})}render(){const{error:e}=this.state,{fallback:r,children:o}=this.props;return e?r?.(e)??e:o}}const Rr=t=>e=>{if(typeof e=="function"||typeof e?.render=="function")return(0,s.jsx)(e,{});if(typeof e=="string"){const r=t?.[e];return r?(0,s.jsx)(r,{}):(0,s.jsx)("i",{className:e})}return e??null},Ht=Rr,Br=t=>Ht(t),Nr=t=>({icon:e,defaultIcon:r})=>e?Br(t)(e):e===!1?null:r,Lr=Nr,ht=["","webkit","moz","ms"],Ur=t=>ht.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Fr=t=>ht.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Hr=t=>ht.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),$t=ht.map(t=>`${t}fullscreenchange`),$r=t=>{if(!F())return;t=N(t)?t.current:t??document.body;const e=Ur(document),r=Fr(t),o=Hr(document);document[e]?document[o]?.():t[r]?.()},Kr=$r,Yr=t=>F()?($t.map(r=>document.addEventListener(r,t,!1)),()=>$t.map(r=>document.removeEventListener(r,t,!1))):void 0,Vr=Yr,Kt=t=>(0,s.jsx)("i",{...t,children:"..."}),Xr=({panel:t,fullIcon:e=Kt,exitIcon:r=Kt,...o})=>{const n=N(t)?t.current:t,[a,i]=A();k(()=>{const d=Vr(()=>{i(c=>!c)});return()=>d()},[]);const l=a?r:e;return(0,s.jsx)(l,{onClick:d=>Kr(n),...o})},Gr=Xr;var ut=m(531),tt={};tt.styleTagTransform=R(),tt.setAttributes=I(),tt.insert=M().bind(null,"head"),tt.domAPI=S(),tt.insertStyleElement=W();var va=O()(ut.A,tt);const wa=ut.A&&ut.A.locals?ut.A.locals:void 0,Zr=({gutter:t=10,className:e,overflow:r="hidden",ref:o,...n})=>{const a=e?` ${e}`:"";let i=10;if(Array.isArray(t)){const l=[...t];t=l[0],i=l[1]??l[0]}return(0,s.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(t/2)}px`,"--rowgap":`${Math.floor(i/2)}px`,overflow:r},children:(0,s.jsx)("div",{className:`row${a}`,...n,ref:o})})},Yt=Zr,Qr=({rowProps:t,colProps:e,children:r,Row:o=Yt,Col:n=Wt})=>{const a=[];return zt.map(r,i=>{i&&(i.type?.description==="react.fragment"?a.push(...i.props.children):a.push(i))}),(0,s.jsx)(o,{...t,children:a.map((i,l)=>(0,s.jsx)(n,{...e,...i.props.itemprops,children:i},`huuxy_grid_${l}`))})},Jr=Qr,qr=(t,e)=>(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:t},...e}),Ct=qr,to=t=>{const{error:e={},info:r=""}=t||{},{message:o,stack:n,errMsg:a}=e;let i=a||n||e.toString();i=`${i}
${r}`.replace(/\r|\n|\r\n/g,"<br/>"),i=i.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),i=i.replace(/\s/g,"&nbsp;");const l=o?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,s.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Ct(i,{style:{color:"red"}}),l&&(0,s.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${l}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Vt=to,eo=({children:t,report:e})=>(0,s.jsx)(Ft,{fallback:(r,o)=>Vt({error:r,info:o}),errorReport:e,children:t}),ro=eo,Xt=(t,e)=>Object.keys(e).map(r=>t.style[r]=e[r]),oo=(t,e)=>Object.keys(e).map(r=>t.style[r]=""),ao={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Gt=({left:t,top:e,width:r,height:o})=>({left:`${t}px`,top:`${e}px`,width:`${r}px`,height:`${o}px`}),Zt=t=>(0,s.jsx)("i",{...t,children:"..."}),Qt=t=>{const{left:e,top:r}=Q(t),{width:o,height:n}=lt(t);return{left:e,top:r,width:o,height:n}},no=({panel:t,target:e,fullIcon:r=Zt,exitIcon:o=Zt})=>{t=N(t)?t.current:t||document.body;const[n,a]=A(),i=C();k(()=>{i.current={...ao,...Gt(Qt(t))}},[t]);const l=(c,h)=>{if(c){const u=Gt(Qt((typeof e=="function"?e:()=>document.getElementsByClassName(e)[0])()));Xt(h,i.current),setTimeout(()=>{Xt(h,u)},0)}else oo(h,i.current);a(c)},d=n?o:r;return(0,s.jsx)(d,{onClick:c=>l(!n,t)})},io=no;var b=m(482),et={};et.styleTagTransform=R(),et.setAttributes=I(),et.insert=M().bind(null,"head"),et.domAPI=S(),et.insertStyleElement=W();var ka=O()(b.Ay,et);const lo=b.Ay&&b.Ay.locals?b.Ay.locals:void 0,so=({open:t,close:e,hasMask:r=!0,cancelText:o="\u53D6\u6D88",submit:n,submitText:a="\u786E\u5B9A",title:i="Modal \u5F39\u7A97",className:l,children:d,delay:c=250,...h})=>{const p=["modal-wrap",t?"open":"",...l?.split(" ")??[]].filter(Boolean).map(u=>vt[u]).join(" ");return(0,s.jsx)(Et,{open:t,close:e,delay:c,hasMask:r,className:"huxy-modal",children:(0,s.jsx)("div",{className:p,...h,children:(0,s.jsxs)("div",{className:b.QN,children:[(0,s.jsx)("div",{className:b.k3,children:i}),(0,s.jsx)("div",{className:b.Y8,children:d}),(0,s.jsxs)("div",{className:b.ww,children:[(0,s.jsx)("div",{className:`${b.HM} ${b.kb}`,onClick:u=>e?.(u),children:o}),(0,s.jsx)("div",{className:`${b.HM} ${b.pG}`,onClick:u=>n?.(u),children:a})]})]})})})},co=so;var pt=m(670),rt={};rt.styleTagTransform=R(),rt.setAttributes=I(),rt.insert=M().bind(null,"head"),rt.domAPI=S(),rt.insertStyleElement=W();var Ea=O()(pt.A,rt);const Ca=pt.A&&pt.A.locals?pt.A.locals:void 0,ho=({global:t,absolute:e})=>(0,s.jsx)("div",{className:`spinner${t?" global":""}${e?" absolute":""}`,children:(0,s.jsx)("figure",{className:"spinning"})}),At=ho;var H=m(945),ot={};ot.styleTagTransform=R(),ot.setAttributes=I(),ot.insert=M().bind(null,"head"),ot.domAPI=S(),ot.insertStyleElement=W();var Aa=O()(H.Ay,ot);const Pa=H.Ay&&H.Ay.locals?H.Ay.locals:void 0,uo=t=>t?.filter?.(e=>typeof e=="function"),po=({loading:t,title:e,plugins:r,children:o,className:n,ref:a,...i})=>{const l=C(),d=uo(r),c=d?.length,h=n?` ${n}`:"",p=N(()=>a)?a:l;return(0,s.jsxs)("div",{className:`${H.nd}${h}`,...i,ref:p,children:[(e||c)&&(0,s.jsxs)("div",{className:H.$d,children:[e&&(0,s.jsx)("h4",{className:H.w_,children:e}),c&&(0,s.jsx)("div",{className:H.kv,children:d.map((u,f)=>(0,s.jsx)("span",{className:`link ${H.nf}`,children:(0,s.jsx)(u,{panel:p})},f))})]}),(0,s.jsx)("div",{className:H.CG,children:o}),t&&(0,s.jsx)(At,{})]})},fo=po,xo=t=>Ot(t)==="array",Pt=xo,mo=t=>Pt(t)&&!!t.length,yo=mo,go=({to:t,preventDefault:e,stopPropagation:r,...o})=>e?(0,s.jsx)("span",{...o}):(0,s.jsx)("a",{href:t,...o}),_o=({item:t,...e})=>(0,s.jsx)("ul",{...e}),bo=(t,...e)=>{const r={};return Object.keys(t).filter(Boolean).map(o=>{r[o]=n=>t[o](n,...e)}),r},Jt=({data:t=[],events:e={},List:r=_o,Link:o=go,leftIcon:n,rightIcon:a,isHorizontal:i,isCollapsed:l,level:d=0,parentOpen:c=!0})=>{const h=l&&!d,p=!i&&!l&&!c;return t.map(u=>{const{name:f,path:g,icon:x,rightIcon:y,active:_,open:P,children:v,linkProps:w}=u,U=yo(v),z=u.id||`${g}${u.childSameRouteLevel??""}`,K=h?u.title??f:void 0,D=p?"hidden":"",$=x??n,T=y??a,V=$?(0,s.jsx)("div",{className:"node-left-icon",children:$===!0?(0,s.jsx)("i",{className:"default-left-icon"}):$}):null,ct=f?(0,s.jsx)("div",{className:"node-text",children:(0,s.jsx)("span",{children:f})}):null;if(U){const re=bo(e,u,d),oe=[D,P?"open":""].filter(Boolean).join(" ");return(0,s.jsxs)("li",{className:oe,"has-children":"true",...re,children:[(0,s.jsxs)(o,{title:K,className:`link${_?" active":""}`,to:g,preventDefault:!0,stopPropagation:!1,...w,children:[V,ct,T?(0,s.jsx)("div",{className:"node-right-icon",children:T===!0?(0,s.jsx)("i",{className:"default-right-icon"}):T}):null]}),(0,s.jsx)(r,{item:u,children:Jt({data:v,events:e,List:r,Link:o,leftIcon:n,rightIcon:a,isHorizontal:i,isCollapsed:l,level:d+1,parentOpen:!!P})})]},z)}return(0,s.jsx)("li",{className:D,children:(0,s.jsxs)(o,{title:K,className:`link${_?" active":""}`,to:g,...w,children:[V,ct]})},z)})},qt=Jt,vo=(t,...e)=>(0,s.jsx)("div",{"v-html":t,...e}),wo=vo;var ft=m(473),at={};at.styleTagTransform=R(),at.setAttributes=I(),at.insert=M().bind(null,"head"),at.domAPI=S(),at.insertStyleElement=W();var za=O()(ft.A,at);const ja=ft.A&&ft.A.locals?ft.A.locals:void 0,ko=t=>(0,s.jsx)("div",{style:{padding:"6px 15px"},children:t}),Eo=({activekey:t,tabs:e=[],switchTab:r,trackColor:o,flex:n,ref:a,...i})=>{const[l,d]=A(t??e[0]?.key),[c,h]=A({}),p=C({}),u=C();k(()=>{const x=p.current[l];x&&f(x)},[]);const f=x=>{const{left:y,width:_}=Q(x),P=Q(u.current).left;h({left:y-P,width:_})},g=(x,y)=>{x.stopPropagation(),d(y),typeof r=="function"&&r(y),f(x.currentTarget)};return(0,s.jsxs)("div",{className:"tabs-header-wrap",...i,ref:a,children:[(0,s.jsx)("ul",{className:`tabs-header${n?" flex":""}`,ref:u,children:e.map(x=>(0,s.jsx)("li",{ref:y=>p.current[x.key]=y,className:`th-item${l===x.key?" active":""}`,onClick:y=>g(y,x.key),children:typeof x.renderTabs=="function"?x.renderTabs(x,l===x.key):ko(x.value)},x.key))}),(0,s.jsx)("div",{className:"th-track",style:{...c,color:o}})]})},Co=Eo,Ao=(t,e,r="id",o="children")=>{if(!Pt(t))return null;const n=a=>{for(let i=0,l=a.length;i<l;i++){const d=a[i];if(d[r]===e)return[d];if(Pt(d[o])){const c=n(d[o]);if(c)return[d].concat(c)}}};return n(t)},Po=Ao,zo=t=>++t,jo=()=>{const[,t]=A(0);return jt(()=>t(zo),[])},Do=jo,te=t=>{const{children:e,open:r}=t;let o=0;if(r&&e?.length){o=e.length;let n=0;return e.map(a=>n+=te(a)),o+n}return o},To=({item:t,style:e,...r})=>(0,s.jsx)("ul",{style:{...e,"--count":te(t)},...r}),Oo=To;var xt=m(133),nt={};nt.styleTagTransform=R(),nt.setAttributes=I(),nt.insert=M().bind(null,"head"),nt.domAPI=S(),nt.insertStyleElement=W();var Da=O()(xt.A,nt);const Ta=xt.A&&xt.A.locals?xt.A.locals:void 0,So=t=>(0,s.jsx)("ul",{...t}),Mo=(t,e)=>t?Oo:({item:r,...o})=>(0,s.jsx)(So,{className:e==="right"?"left":"",...o}),Io=t=>{const{data:e=[],collapsed:r=!1,type:o="vertical",Link:n,width:a,bgColor:i,itemHeight:l,collapsedWidth:d,itemPadding:c,style:h,className:p,...u}=t,f=C(),g=C();k(()=>()=>clearTimeout(f.current),[]);const x=Do(),y=o==="horizontal",_=!y&&r,P={onClick:(D,$)=>{if(D.stopPropagation(),!y&&!_){const T=Po(e,$.path,"path"),V=T[T.length-1];V.open=!V.open,x()}},onMouseEnter:(D,$,T)=>{_&&!T&&(clearTimeout(f.current),g.current.style.width="var(--maxWidth)")},onMouseLeave:(D,$,T)=>{_&&!T&&(f.current=setTimeout(()=>g.current.style.width="",200))}},v=(y?["huxy-horizontal-tree",p]:["huxy-tree",p,_?"collapsed":""]).filter(Boolean).join(" "),{float:w,...U}=u?.style??{},z={"--bgColor":i,"--itemHeight":l,"--nodeListWidth":a,...U};y?(z["--itemPadding"]=c,z["--nodeFloat"]=w):(z["--width"]=a,z["--collapsedWidth"]=d);const K=Mo(!y&&!_,w);return(0,s.jsx)("div",{ref:g,className:v,style:z,...u,children:(0,s.jsx)("div",{className:"huxy-tree-track",children:(0,s.jsx)("ul",{className:"huxy-tree-root",children:qt({data:e,events:P,List:K,Link:n,leftIcon:!0,rightIcon:!0,isHorizontal:y,isCollapsed:_})})})})},Wo=Io,Ro=()=>{const[t,e]=It(lt());return k(()=>{const r=()=>e(lt());return window.addEventListener("resize",r,!1),()=>window.removeEventListener("resize",r,!1)},[]),t},Bo=Ro,ee=({menu:t,curName:e,Link:r})=>t.map(o=>{const{path:n,name:a,open:i,children:l}=o,d=a===e;return l?.length?(0,s.jsxs)("li",{className:i?"open":"",children:[(0,s.jsx)(r,{to:{query:{name:a}},className:`link${d?" active":""}`,preventDefault:!0,children:(0,s.jsx)("span",{children:a})}),(0,s.jsx)("ul",{children:(0,s.jsx)(ee,{menu:l,curName:a,Link:r})})]},n||a):(0,s.jsx)("li",{children:(0,s.jsx)(r,{to:{query:{name:a}},className:`link${d?" active":""}`,children:(0,s.jsx)("span",{children:a})})},n||a)}),No=ee,Lo=(t=0,e)=>{F()&&(e=N(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},Uo=Lo,Fo=()=>F()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Ho=Fo,$o=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}},Ko=$o,Yo=(t,e=null,r=!1)=>[...t||[]].sort((o,n)=>{const a=e?o[e]:o,i=e?n[e]:n;return!isNaN(Number(a))&&!isNaN(Number(a))?r?i-a:a-i:typeof a=="string"&&typeof i=="string"?r?i.localeCompare(a):a.localeCompare(i):typeof a=="string"&&typeof i=="number"?r?-1:1:typeof a=="number"||typeof a=="string"?r?1:-1:r?-1:1}),Vo=Yo,Xo=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Go=Xo,Zo=({curName:t,itemList:e})=>{const r=C(!1),o=C(""),[n,a]=A(t);return k(()=>{const i=Go(e.current);if(!t){const c=Object.keys(i).map(h=>({name:h,offsetTop:i[h]?.offsetTop??0}));a(c[0]?.name)}let l=0,d=0;if(o.current!==t){o.current=t;const c=i[t];r.current=!0,c?(Uo(c.offsetTop),l=setTimeout(()=>r.current=!1,1050)):d=setTimeout(()=>{window.scrollTo?.({top:i[t]?.offsetTop??0,behavior:"instant"}),l=setTimeout(()=>r.current=!1,1050)},550)}return()=>{clearTimeout(l),clearTimeout(d),r.current=!1}},[t]),k(()=>{const i=Ko(()=>{if(!r.current){const d=Vo(Object.keys(e.current).map(c=>({name:c,offsetTop:e.current[c]?.offsetTop??0})),"offsetTop",!0).find(c=>c.offsetTop<Ho())?.name;o.current!==d&&(o.current=d,a(d))}});return window.addEventListener("scroll",i,!1),()=>window.removeEventListener("scroll",i,!1)},[]),[n]},Qo=Zo,Jo=/!\[.*\]\((.*)\)/g,qo=async(t,e,r)=>{const o={};for(let n=0,a=t.length;n<a;n++){const i=t[n],l=i.slice(2);o[i]=await r({folder:e,name:l})}return o},ta=async(t,{folder:e},r)=>{const n=[...t.matchAll(Jo)].filter(Boolean).map(a=>a[1]);if(n?.length){const a=await qo(n,e,r);n.map(i=>{t=t.replace(i,a[i])})}return t},ea=ta,ra=({item:t,marked:e,getContext:r})=>{const[o,n]=A("");return k(()=>{(async()=>{try{const i=await r({...t,type:".md"}),l=await ea(i,t,r),d=typeof e=="function"?e.parse(l):d;n(d)}catch(i){n(i?.message)}})()},[]),(0,s.jsxs)("div",{className:"huxy-content",children:[Ct(o),!o&&(0,s.jsx)(At,{global:!0})]})},oa=ra,aa=({router:t,curName:e,context:r,marked:o,getContext:n})=>{const a=C({}),[i]=Qo({curName:e,itemList:a});return k(()=>{i&&t.push({query:{name:i}})},[i]),(0,s.jsx)("div",{className:"huxy-anchor-page",children:r.map((l,d)=>(0,s.jsxs)("div",{className:"huxy-anchor-item",ref:c=>a.current[l.name]=c,children:[(0,s.jsx)("h2",{children:`${l.name}`}),(0,s.jsx)(oa,{item:l,marked:o,getContext:n})]},l.name))})},na=aa,ia=t=>{const e=[];return t.map(r=>{const[o,n]=r.name.split("/"),a=e.find(i=>i.name===o);a?a.children.push({name:n,folder:o}):e.push({name:o,children:[{name:n,folder:o}]})}),e},la=ia;var mt=m(55),it={};it.styleTagTransform=R(),it.setAttributes=I(),it.insert=M().bind(null,"head"),it.domAPI=S(),it.insertStyleElement=W();var Oa=O()(mt.A,it);const Sa=mt.A&&mt.A.locals?mt.A.locals:void 0,sa=(t,e,r)=>({sidebar:t.find(o=>o.name===e)?.children??[],listEle:t.map(({name:o,children:n})=>(0,s.jsx)("li",{children:(0,s.jsx)(r,{to:{query:{folder:o,name:n[0]?.name}},className:`link${o===e?" active":""}`,children:(0,s.jsx)("span",{children:o})})},o))}),da=t=>{const{params:e,router:r,Link:o,listFiles:n,getContext:a,marked:i,title:l,routeLink:d,routeName:c,className:h,style:p}=t,{folder:u,name:f}=e,{width:g}=Bo(),[x,y]=A([]),[_,P]=A(!1);k(()=>{(async()=>{const K=await n(),D=la(K);y(D),u||r.push({query:{folder:D[0]?.name,name:D[0]?.children[0]?.name}})})()},[]);const v=g<=1024,{sidebar:w,listEle:U}=sa(x,u,o);return(0,s.jsxs)("div",{className:`huxy-doc-frame ${h??""}`,style:p,children:[(0,s.jsxs)("div",{className:"huxy-doc-header",children:[(0,s.jsx)("div",{className:"huxy-doc-banner",children:l||"\u6587\u6863\u7CFB\u7EDF"}),(0,s.jsx)("ul",{className:"huxy-doc-nav",children:v?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{className:"huxy-doc-collapsed",children:(0,s.jsx)("span",{className:"link",onClick:z=>{z.stopPropagation(),P(!_)},children:(0,s.jsx)(Tt,{type:_?"right":""})})}),(0,s.jsx)(Bt,{open:_,close:()=>P(!1),width:"220px",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-drawer",children:U})})]}):U}),d?(0,s.jsx)("div",{className:"huxy-doc-back",children:(0,s.jsx)(o,{to:d,children:(0,s.jsx)("span",{children:c??"\u8FD4\u56DE\u4E3B\u9875"})})}):null]}),(0,s.jsxs)("div",{className:"huxy-doc-container",children:[(0,s.jsx)("div",{className:"huxy-doc-main-page",children:(0,s.jsx)(na,{router:r,curName:f,context:w,marked:i,getContext:a})}),(0,s.jsx)("div",{className:"huxy-doc-menu",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,s.jsx)(No,{menu:w,curName:f,Link:o})})})]})]})},ca=da;export{Tt as Anico,Pe as Base64Image,Ye as Carousel,Wt as Col,Bt as Drawer,zr as Drop,Wr as Ellipsis,Ft as ErrorBoundary,Gr as FullPage,Jr as Grid,ro as HandleError,Vt as LoadError,Et as Mask,io as MaxSize,ca as Md2html,co as Modal,fo as Panel,kt as Portal,Yt as Row,At as Spinner,Co as TabHeader,Ut as Tooltip,Wo as Tree,Ht as fixEle,Lr as fixIcon,qt as renderTree,Ct as str2React,wo as str2Vue};
