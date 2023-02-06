(function(un,G){typeof exports=="object"&&typeof module=="object"?module.exports=G(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define("components",["react","react-dom"],G):typeof exports=="object"?exports.components=G(require("react"),require("react-dom")):un.components=G(un.React,un.ReactDOM)})(this,function(Rn,un){return function(){"use strict";var G={193:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`/*@height:2px;
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
  background-color: var(--linkHoverColor);
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
  background-color: var(--linkHoverColor);
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
`,""]),l.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},f.Z=l},145:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`.kLIGi {
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
`,""]),l.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},f.Z=l},842:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`@keyframes animate-drawer-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes animate-drawer-out {
  0% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
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
  transform: translate3d(0, 0, 0);
}
.KsHNu {
  animation: animate-drawer-out 0.25s forwards;
}
.KsHNu.c6aFy {
  animation: animate-drawer-in 0.25s forwards;
}
.W4gG3 {
  position: relative;
}
.W4gG3 .SMORg {
  padding: 8px 12px 24px;
}
.W4gG3 .e3AWW {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.W4gG3 .e3AWW .VSVwl {
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
}
.W4gG3 .e3AWW .VSVwl:before {
  content: "\\00D7";
}
.W4gG3 .e3AWW .VSVwl:hover {
  border-color: rgba(0, 0, 0, 0.2);
}
.W4gG3 .hlj9r {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]),l.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},f.Z=l},563:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`@keyframes animate-drop-in {
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
  zoom: 1;
}
.TEYHV::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.NCYpg {
  position: fixed !important;
  z-index: 10001;
  opacity: 0;
  min-width: 100px;
  min-height: 50px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  content: "";
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
  border-bottom-color: #f0f0f0;
}
.huxy-drop-arrow-lt::after {
  left: calc(10px + 1px);
  border-bottom-color: #ffffff;
}
.huxy-drop-arrow-rt {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  content: "";
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
  border-bottom-color: #f0f0f0;
}
.huxy-drop-arrow-rt::after {
  right: calc(10px + 1px);
  border-bottom-color: #ffffff;
}
.huxy-drop-arrow-lb {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  content: "";
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
  border-top-color: #f0f0f0;
}
.huxy-drop-arrow-lb::before {
  left: 10px;
}
.huxy-drop-arrow-lb::after {
  left: calc(10px + 1px);
  border-top-color: #ffffff;
}
.huxy-drop-arrow-rb {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  content: "";
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
  border-top-color: #f0f0f0;
}
.huxy-drop-arrow-rb::after {
  right: calc(10px + 1px);
  border-top-color: #ffffff;
}
.huxy-drop-arrow-tl {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  content: "";
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
  border-right-color: #f0f0f0;
}
.huxy-drop-arrow-tl::after {
  top: calc(10px + 1px);
  border-right-color: #ffffff;
}
.huxy-drop-arrow-tr {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  content: "";
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
  border-left-color: #f0f0f0;
}
.huxy-drop-arrow-tr::after {
  top: calc(10px + 1px);
  border-left-color: #ffffff;
}
.huxy-drop-arrow-bl {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  content: "";
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
  border-right-color: #f0f0f0;
}
.huxy-drop-arrow-bl::after {
  bottom: calc(10px + 1px);
  border-right-color: #ffffff;
}
.huxy-drop-arrow-br {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  content: "";
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
  border-left-color: #f0f0f0;
}
.huxy-drop-arrow-br::after {
  bottom: calc(10px + 1px);
  border-left-color: #ffffff;
}
`,""]),l.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},f.Z=l},697:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`@keyframes animate-modal-in {
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
  width: 300px;
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
`,""]),l.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},f.Z=l},810:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`.clear {
  zoom: 1;
}
.clear::after {
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
  zoom: 1;
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
  zoom: 1;
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
`,""]),l.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},f.Z=l},31:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`.cols-1 {
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
`,""]),l.locals={},f.Z=l},201:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`@keyframes before {
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
`,""]),l.locals={},f.Z=l},289:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`.clear {
  zoom: 1;
}
.clear::after {
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
  zoom: 1;
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
`,""]),l.locals={},f.Z=l},626:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`.ofth_ {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
.hVmF3 {
  position: relative;
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
`,""]),l.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},f.Z=l},435:function(r,f,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),l=d()(c());l.push([r.id,`.node-right-icon-close {
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
`,""]),l.locals={},f.Z=l},414:function(r){r.exports=function(f){var a=[];return a.toString=function(){return this.map(function(c){var u="",d=typeof c[5]!="undefined";return c[4]&&(u+="@supports (".concat(c[4],") {")),c[2]&&(u+="@media ".concat(c[2]," {")),d&&(u+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),u+=f(c),d&&(u+="}"),c[2]&&(u+="}"),c[4]&&(u+="}"),u}).join("")},a.i=function(c,u,d,l,S){typeof c=="string"&&(c=[[null,c,void 0]]);var M={};if(d)for(var w=0;w<this.length;w++){var R=this[w][0];R!=null&&(M[R]=!0)}for(var z=0;z<c.length;z++){var E=[].concat(c[z]);d&&M[E[0]]||(typeof S!="undefined"&&(typeof E[5]=="undefined"||(E[1]="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {").concat(E[1],"}")),E[5]=S),u&&(E[2]&&(E[1]="@media ".concat(E[2]," {").concat(E[1],"}")),E[2]=u),l&&(E[4]?(E[1]="@supports (".concat(E[4],") {").concat(E[1],"}"),E[4]=l):E[4]="".concat(l)),a.push(E))}},a}},703:function(r){r.exports=function(f){return f[1]}},53:function(r,f,a){var x;var c=a(899),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,S=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function w(R,z,E){var P,L={},A=null,Dn=null;E!==void 0&&(A=""+E),z.key!==void 0&&(A=""+z.key),z.ref!==void 0&&(Dn=z.ref);for(P in z)l.call(z,P)&&!M.hasOwnProperty(P)&&(L[P]=z[P]);if(R&&R.defaultProps)for(P in z=R.defaultProps,z)L[P]===void 0&&(L[P]=z[P]);return{$$typeof:u,type:R,key:A,ref:Dn,props:L,_owner:S.current}}x=d,f.jsx=w,f.jsxs=w},458:function(r,f,a){r.exports=a(53)},748:function(r){var f=[];function a(u){for(var d=-1,l=0;l<f.length;l++)if(f[l].identifier===u){d=l;break}return d}function x(u,d){for(var l={},S=[],M=0;M<u.length;M++){var w=u[M],R=d.base?w[0]+d.base:w[0],z=l[R]||0,E="".concat(R," ").concat(z);l[R]=z+1;var P=a(E),L={css:w[1],media:w[2],sourceMap:w[3],supports:w[4],layer:w[5]};if(P!==-1)f[P].references++,f[P].updater(L);else{var A=c(L,d);d.byIndex=M,f.splice(M,0,{identifier:E,updater:A,references:1})}S.push(E)}return S}function c(u,d){var l=d.domAPI(d);l.update(u);var S=function(w){if(w){if(w.css===u.css&&w.media===u.media&&w.sourceMap===u.sourceMap&&w.supports===u.supports&&w.layer===u.layer)return;l.update(u=w)}else l.remove()};return S}r.exports=function(u,d){d=d||{},u=u||[];var l=x(u,d);return function(M){M=M||[];for(var w=0;w<l.length;w++){var R=l[w],z=a(R);f[z].references--}for(var E=x(M,d),P=0;P<l.length;P++){var L=l[P],A=a(L);f[A].references===0&&(f[A].updater(),f.splice(A,1))}l=E}}},736:function(r){var f={};function a(c){if(typeof f[c]=="undefined"){var u=document.querySelector(c);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch(d){u=null}f[c]=u}return f[c]}function x(c,u){var d=a(c);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(u)}r.exports=x},706:function(r){function f(a){var x=document.createElement("style");return a.setAttributes(x,a.attributes),a.insert(x,a.options),x}r.exports=f},567:function(r,f,a){function x(c){var u=a.nc;u&&c.setAttribute("nonce",u)}r.exports=x},306:function(r){function f(c,u,d){var l="";d.supports&&(l+="@supports (".concat(d.supports,") {")),d.media&&(l+="@media ".concat(d.media," {"));var S=typeof d.layer!="undefined";S&&(l+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),l+=d.css,S&&(l+="}"),d.media&&(l+="}"),d.supports&&(l+="}");var M=d.sourceMap;M&&typeof btoa!="undefined"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(M))))," */")),u.styleTagTransform(l,c,u.options)}function a(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)}function x(c){var u=c.insertStyleElement(c);return{update:function(l){f(u,c,l)},remove:function(){a(u)}}}r.exports=x},62:function(r){function f(a,x){if(x.styleSheet)x.styleSheet.cssText=a;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(a))}}r.exports=f},899:function(r){r.exports=Rn},994:function(r){r.exports=un}},Tn={};function b(r){var f=Tn[r];if(f!==void 0)return f.exports;var a=Tn[r]={id:r,exports:{}};return G[r](a,a.exports,b),a.exports}(function(){b.n=function(r){var f=r&&r.__esModule?function(){return r.default}:function(){return r};return b.d(f,{a:f}),f}})(),function(){b.d=function(r,f){for(var a in f)b.o(f,a)&&!b.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:f[a]})}}(),function(){b.o=function(r,f){return Object.prototype.hasOwnProperty.call(r,f)}}(),function(){b.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){b.nc=void 0}();var Pn={};return function(){b.r(Pn),b.d(Pn,{Anico:function(){return lt},Carousel:function(){return pt},Col:function(){return _t},Drawer:function(){return vt},Drop:function(){return Rt},Ellipsis:function(){return At},ErrorBoundary:function(){return Yn},FullPage:function(){return Ht},HandleError:function(){return Xt},LoadError:function(){return Jn},Mask:function(){return In},MaxSize:function(){return Qt},Modal:function(){return qt},Panel:function(){return ee},Portal:function(){return Mn},Row:function(){return oe},Spinner:function(){return et},TabHeader:function(){return he},Tooltip:function(){return Kn},Tree:function(){return ge},fixEle:function(){return Vn},fixIcon:function(){return Ft},renderTree:function(){return ot},str2React:function(){return Gn},str2Vue:function(){return de}});var r=b(458),f=b(748),a=b.n(f),x=b(306),c=b.n(x),u=b(736),d=b.n(u),l=b(567),S=b.n(l),M=b(706),w=b.n(M),R=b(62),z=b.n(R),E=b(193),P={};P.styleTagTransform=z(),P.setAttributes=S(),P.insert=d().bind(null,"head"),P.domAPI=c(),P.insertStyleElement=w();var L=a()(E.Z,P),A=E.Z&&E.Z.locals?E.Z.locals:void 0,lt=n=>(0,r.jsx)("span",{className:A.anico,children:(0,r.jsx)("span",{className:[A.hline,...(n.type||"").split(" ").map(t=>A[t]).filter(Boolean)].join(" ")})}),Wn=b(994),m=b(899),st=b.n(m),dt=(n,t)=>{const e=(0,m.useRef)();(0,m.useEffect)(()=>{e.current=n},[n]),(0,m.useEffect)(()=>{if(t){const o=setInterval(()=>e.current(),t);return()=>clearInterval(o)}},[t])},$=()=>![typeof window,typeof document].includes("undefined"),An=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),jn=n=>An(n).indexOf("element")>-1,xn=(n=null)=>{var t,e;return $()?jn(n)?{width:n.clientWidth,height:n.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(e=window.innerHeight)!=null?e:document.documentElement.clientHeight}:{width:0,height:0}},Bn=(n=()=>{},t=60)=>{let e=null;return function(...o){clearTimeout(e),e=setTimeout(()=>n.apply(this,o),t)}},ct=(n,t)=>Object.prototype.hasOwnProperty.call(n!=null?n:{},t),U=n=>ct(n,"current");const ut=(n,t)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const e=document.createElement("object");return e.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),e.setAttribute("class","resize-sensor"),e.onload=()=>{e.contentDocument.defaultView.addEventListener("resize",t,!1),t()},e.type="text/html",n.appendChild(e),e.data="about:blank",e};var ht=(n,t=60)=>{if(!$())return;n=U(n)?n.current:n!=null?n:document.body;let e,o=[];const i=Bn(()=>o.map(p=>p(n)),t),s=p=>{e||(e=ut(n,i)),o.indexOf(p)===-1&&o.push(p)},h=p=>{const y=o.indexOf(p);y!==-1&&o.splice(y,1),o.length===0&&e&&_()},_=()=>{e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",i,!1),e.parentNode.removeChild(e),e=void 0,o=[])};return{element:n,bind:s,unbind:h,destroy:_}},ft=(n={})=>{const t=(0,m.useRef)(0),[e,o]=(0,m.useState)(n),i=(0,m.useCallback)(s=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>o(s))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(t.current),[]),[e,i]},Ln=(n=null,t=60)=>{const e=U(n)?n.current:n,{bind:o,destroy:i}=ht(e,t),[s,h]=ft(xn(e));return(0,m.useEffect)(()=>(o(()=>e&&h(xn(e))),()=>i()),[e]),s},mn=b(145),J={};J.styleTagTransform=z(),J.setAttributes=S(),J.insert=d().bind(null,"head"),J.domAPI=c(),J.insertStyleElement=w();var Oe=a()(mn.Z,J),V=mn.Z&&mn.Z.locals?mn.Z.locals:void 0,pt=({children:n,active:t=0,delay:e=5e3,className:o,...i})=>{const[s,h]=(0,m.useState)(t+1),[_,p]=(0,m.useState)(!1),y=(0,m.useRef)(),k=(0,m.useRef)(""),{width:C}=Ln(y);n=Array.isArray(n)?n:[n];const v=n[0],j=[n[n.length-1],...n,v],g=j.length;dt(()=>{let D=s+1;D=D===g?1:D,k.current&&(k.current=""),h(D),D===g-1&&setTimeout(()=>{k.current="none",h(1)},500)},_?null:e);const O=(D,W)=>{W.stopPropagation(),k.current="",h(D),(0,Wn.flushSync)(()=>p(!0)),p(!1)},T={width:`${g*C}px`,transform:`translateX(${-C*s}px)`,transition:k.current};return(0,r.jsxs)("div",{className:`${V["huxy-carousel"]}${o?` ${o}`:""}`,...i,ref:y,children:[(0,r.jsx)("div",{className:V["huxy-carousel-wrap"],style:T,children:j.map((D,W)=>(0,r.jsx)("div",{className:`${V["carousel-item"]} ${s===W?V.active:""}`,style:{width:`${C}px`},children:D},`huxy-carousel-${W}`))}),(0,r.jsx)("div",{className:V["carousel-switch"],children:n.map((D,W)=>(0,r.jsx)("span",{className:`${V.dot} ${s===W+1?V.active:""}`,onClick:K=>O(W+1,K)},`huxy-carousel-switch-${W}`))})]})};const hn=(n,t)=>{let e="",o="";if(typeof t=="number"&&(e=`col-${n}-${t}`),typeof t=="object"){const{span:i,offset:s}=t;e=i?`col-${n}-${i}`:"",o=s?`offset-${n}-${s}`:""}return{sp:e,os:o}};var _t=(0,m.forwardRef)(({span:n,offset:t,xl:e,lg:o,md:i,sm:s,xs:h,style:_,width:p,auto:y,offsetWidth:k="0px",className:C,...v},I)=>{const j=C?` ${C}`:"",g=`col-${n||12}`,O=t?`offset-${t}`:"",{sp:T,os:D}=hn("xs",h),{sp:W,os:K}=hn("sm",s),{sp:H,os:_n}=hn("md",i),{sp:Z,os:cn}=hn("lg",o),{sp:Y,os:N}=hn("xl",e),B=[g,Y,Z,H,W,T,O,N,cn,_n,K,D].filter(Boolean).join(" "),X=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${k})`}:{width:p};return(0,r.jsx)("div",{className:`${B}${j}`,...v,style:{...X,..._},ref:I})}),xt=()=>{const n=(0,m.useRef)(!0);return n.current?(n.current=!1,!0):!1},mt=(n,t=[])=>{const e=xt();(0,m.useEffect)(()=>{if(!e)return n()},t)},Un=(n,t=450)=>{const[e,o]=(0,m.useState)(n);return mt(()=>{let i;return n||t===0?o(n):i=setTimeout(()=>o(n),t),()=>i&&clearTimeout(i)},[n]),[e,o]},Mn=({children:n,mountNode:t=document.body})=>(0,Wn.createPortal)(n,t);const yt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},gt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},bt={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},wt=document.body;var In=({open:n,close:t,delay:e=300,children:o,mountNode:i,hasMask:s=!0,style:h,className:_="h-mask"})=>{const[p]=Un(n,e);return wt.style.overflow=p?"hidden":"",(0,r.jsx)(Mn,{mountNode:i,children:(0,r.jsx)("div",{children:p?(0,r.jsxs)("div",{className:_,style:yt,children:[s?(0,r.jsx)("div",{style:gt,onClick:y=>t==null?void 0:t(y)}):null,(0,r.jsx)("div",{style:{...bt,...h},children:o})]}):null})})},yn=b(842),Q={};Q.styleTagTransform=z(),Q.setAttributes=S(),Q.insert=d().bind(null,"head"),Q.domAPI=c(),Q.insertStyleElement=w();var Ze=a()(yn.Z,Q),q=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,vt=({open:n,close:t,footer:e,header:o,className:i,children:s,width:h="300px"})=>{var _;const p=["drawer-wrap",n?"open":"",...(_=i==null?void 0:i.split(" "))!=null?_:[]].filter(Boolean).map(y=>q[y]).join(" ");return(0,r.jsx)(In,{open:n,close:t,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,r.jsx)("div",{className:p,style:{width:h},children:(0,r.jsxs)("div",{className:q["drawer-container"],children:[(0,r.jsxs)("div",{className:q["drawer-header"],children:[(0,r.jsx)("span",{className:`link ${q["ico-close"]}`,onClick:y=>t==null?void 0:t(y)}),(0,r.jsx)("div",{children:o})]}),(0,r.jsx)("div",{className:q["drawer-content"],children:s}),e?(0,r.jsx)("div",{className:q["drawer-footer"],children:e}):null]})})})},kt=(n,t,e="click")=>{(0,m.useEffect)(()=>{const o=s=>{const h=U(n)?n.current:n;h!=null&&h.contains&&!h.contains(s.target)&&t(s)},i=typeof e=="string"?[e]:e;return i.map(s=>{document.addEventListener(s,o,!1)}),()=>{i.map(s=>{document.removeEventListener(s,o,!1)})}},[n,t,e])},Et=n=>(n==null?void 0:n.$$typeof)&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",Ct=(n="")=>n.replace(/^\S/,t=>t.toUpperCase()),nn=n=>{var t;if($())return n=U(n)?n.current:n!=null?n:document.body,(t=n.getBoundingClientRect)==null?void 0:t.call(n)},zt=n=>{if(!$())return;const t=document.createElement("div");return t.innerHTML=n,t.children[0]},fn=(n,t={},e=!1)=>{if(jn(n)){if(e){let o="";Object.keys(t).map(i=>{o+=`${i}: ${t[i]};`}),n.style=o;return}Object.keys(t).map(o=>n.style.setProperty(o,t[o]))}};const St=(n=350)=>new Promise(t=>setTimeout(t,n)),Xe=(n=100)=>{const t=Date.now();for(;Date.now()-t<=n;);};var Pt=St,Dt=async(n,t=15)=>{if(!$())return;if(typeof n=="string"&&(n=zt(n)),n=U(n)?n.current:n,!jn(n))return{};const e=n.cloneNode(!0);fn(e,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(e),await Pt(t);const o=nn(e);return n.parentNode.removeChild(e),o};const jt=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Mt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Zn=(n,t)=>{var e;t=`huxy-drop-arrow-${t}`;const o=(e=n.getAttribute("class"))!=null?e:"";jt.test(o)?n.setAttribute("class",o.replace(Mt,t)):n.setAttribute("class",`${o} ${t}`)},Fn=async(n,t,e)=>{const{left:o,right:i,top:s,bottom:h}=nn(n),{width:_,height:p}=xn(),{width:y,height:k}=await Dt(t);if(i<0||h<0||o>_||s>p)return{};if(e==="vertical"){const C={left:o+"px",top:h+10+"px",right:"auto",bottom:"auto"};let v="lt";o+y>_&&(C.left=i-y+"px",v="rt"),h+10+k>p&&(C.top=s-10-k+"px",v=v==="lt"?"lb":"rb"),fn(t,C),Zn(t,v)}else{const C={left:i+10+"px",top:s+"px",right:"auto",bottom:"auto"};let v="tl";i+10+y>_&&(C.left=o-10-y+"px",v="tr"),s+k>p&&(C.top=h-k+"px",v=v==="tl"?"bl":"br"),fn(t,C),Zn(t,v)}};var It=(n,t,e="horizontal")=>{const o=Bn(Fn),i=()=>o(n,t,e);window.addEventListener("scroll",i,!1),window.addEventListener("resize",i,!1);const s=()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),fn(t,{left:"",top:"",right:"",bottom:""})};return Fn(n,t,e),s},Ot=({open:n,delay:t=250,children:e,mountNode:o,style:i,className:s="huxy-mask"})=>{const[h]=Un(n,t);return(0,r.jsx)(Mn,{mountNode:o,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:s,children:(0,r.jsx)("div",{style:{...i,display:h?"block":"none"},children:e})})})})},gn=b(563),tn={};tn.styleTagTransform=z(),tn.setAttributes=S(),tn.insert=d().bind(null,"head"),tn.domAPI=c(),tn.insertStyleElement=w();var qe=a()(gn.Z,tn),Nn=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,Rt=({trigger:n="click",type:t,dropList:e,className:o,children:i,...s})=>{const[h,_]=(0,m.useState)(!1),p=(0,m.useRef)(),y=(0,m.useRef)(),k=(0,m.useRef)();kt(p,g=>h&&_(!1),[...new Set(["click",n.toLowerCase()])]),(0,m.useEffect)(()=>()=>{var g;return(g=k.current)==null?void 0:g.call(k)},[]);const C=g=>{g.preventDefault(),_(!0),k.current=It(p.current,y.current,t)},v={[`on${Ct(n)}`]:C},I=["drop-wrap",h?"open":""].filter(Boolean).map(g=>Nn[g]).join(" "),j=Et(e)?e:e==null?void 0:e(()=>_(!1),h);return(0,r.jsxs)("span",{ref:p,className:`${Nn["drop-target"]}${o?` ${o}`:""}`,...v,...s,children:[i,(0,r.jsx)(Ot,{open:h,className:"huxy-drop",children:(0,r.jsx)("div",{ref:y,className:I,children:j})})]})},Tt=(n,t={},e)=>{if(!$())return;e=U(e)?e.current:e!=null?e:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&fn(o,t),o.innerText=n,e.appendChild(o);const i=o.getBoundingClientRect();return e.removeChild(o),i},bn=b(626),en={};en.styleTagTransform=z(),en.setAttributes=S(),en.insert=d().bind(null,"head"),en.domAPI=c(),en.insertStyleElement=w();var er=a()(bn.Z,en),$n=bn.Z&&bn.Z.locals?bn.Z.locals:void 0,Kn=({title:n,placement:t="topRight",children:e,ellipsis:o,className:i,...s})=>(0,r.jsx)("span",{className:`${$n[`huxy-tooltip-${t}`]}${i?` ${i}`:""}`,tooltip:n!=null?n:e,...s,children:(0,r.jsx)("span",{className:o?$n.ellipsis:"",children:e})});const Wt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var At=n=>{var t,e,o,i;const{children:s}=n,h=typeof s=="string",_=h?s:(o=(t=s==null?void 0:s.props)==null?void 0:t.title)!=null?o:(e=s==null?void 0:s.props)==null?void 0:e.children,p=(0,m.useRef)(),[y,k]=(0,m.useState)(!1),C=Ln(p,250);return(0,m.useEffect)(()=>{if(p.current){const{width:v}=Tt(_),{width:I}=nn(p.current),j=v>I;j!==y&&k(j)}},[_,C.width]),(0,r.jsx)("span",{ref:p,style:{width:"100%",display:"inline-block"},children:y?h?(0,r.jsx)(Kn,{...n,ellipsis:!0}):(0,r.jsx)("span",{style:Wt,children:s}):h?s:(i=s==null?void 0:s.props)==null?void 0:i.children})},Bt=Object.defineProperty,Lt=(n,t,e)=>t in n?Bt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ut=(n,t,e)=>(Lt(n,typeof t!="symbol"?t+"":t,e),e);class Yn extends st().Component{constructor(){super(...arguments),Ut(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,e){const{errorReport:o}=this.props;typeof o=="function"&&o({error:t,info:e.componentStack})}render(){const{error:t}=this.state,{fallback:e,children:o}=this.props;return t?e(t):o}}var Vn=n=>t=>{if(typeof t=="function"||typeof(t==null?void 0:t.render)=="function")return(0,r.jsx)(t,{});if(typeof t=="string"){const e=n==null?void 0:n[t];return e?(0,r.jsx)(e,{}):(0,r.jsx)("i",{className:t})}return t!=null?t:null};const Zt=n=>Vn(n);var Ft=n=>({icon:t,defaultIcon:e=null})=>t?Zt(n)(t):t===!1?null:e;const wn=["","webkit","moz","ms"],Nt=n=>wn.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>n[t]),$t=n=>wn.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>n[t]),Kt=n=>wn.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>n[t]),Hn=wn.map(n=>`${n}fullscreenchange`);var Yt=n=>{var t,e;if(!$())return;n=U(n)?n.current:n!=null?n:document.body;const o=Nt(document),i=$t(n),s=Kt(document);document[o]?(e=document[s])==null||e.call(document):(t=n[i])==null||t.call(n)},Vt=n=>$()?(Hn.map(e=>document.addEventListener(e,n,!1)),()=>Hn.map(e=>document.removeEventListener(e,n,!1))):void 0;const Xn=n=>(0,r.jsx)("i",{...n,children:"..."});var Ht=({panel:n,fullIcon:t=Xn,exitIcon:e=Xn,...o})=>{const i=U(n)?n.current:n,[s,h]=(0,m.useState)();(0,m.useEffect)(()=>{const p=Vt(()=>{h(y=>!y)});return()=>p()},[]);const _=s?e:t;return(0,r.jsx)(_,{onClick:p=>Yt(i),...o})},Gn=(n,t)=>(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...t}),Jn=n=>{const{error:t={},info:e=""}=n||{},{message:o,stack:i,errMsg:s}=t;let h=s||i||t.toString();h=`${h}
${e}`.replace(/\r|\n|\r\n/g,"<br/>"),h=h.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),h=h.replace(/\s/g,"&nbsp;");const _=o==null?void 0:o.slice(0,120).split(". ").slice(0,2).join(". ");return(0,r.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Gn(h,{style:{color:"red"}}),_&&(0,r.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${_}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Xt=({children:n,report:t})=>{var e;const o=(0,m.useRef)();return(e=o.current)!=null&&e.state&&(o.current.state.error=null),(0,r.jsx)(Yn,{ref:o,fallback:(i,s)=>Jn({error:i,info:s}),errorReport:t,children:n})};const Qn=(n,t)=>Object.keys(t).map(e=>n.style[e]=t[e]),Gt=(n,t)=>Object.keys(t).map(e=>n.style[e]=""),Jt={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},qn=({left:n,top:t,width:e,height:o})=>({left:`${n}px`,top:`${t}px`,width:`${e}px`,height:`${o}px`}),nt=n=>(0,r.jsx)("i",{...n,children:"..."}),tt=n=>{const{left:t,top:e}=nn(n),{width:o,height:i}=xn(n);return{left:t,top:e,width:o,height:i}};var Qt=({panel:n,target:t,fullIcon:e=nt,exitIcon:o=nt})=>{n=U(n)?n.current:n||document.body;const[i,s]=(0,m.useState)(),h=(0,m.useRef)(),_=(0,m.useRef)();(0,m.useEffect)(()=>{const k=typeof t=="function"?t:()=>document.getElementsByClassName(t)[0];_.current=qn(tt(k())),h.current={...Jt,...qn(tt(n))}},[n]);const p=(k,C)=>{k?(Qn(C,h.current),setTimeout(()=>{Qn(C,_.current)},0)):Gt(C,h.current),s(k)},y=i?o:e;return(0,r.jsx)(y,{onClick:k=>p(!i,n)})},vn=b(697),rn={};rn.styleTagTransform=z(),rn.setAttributes=S(),rn.insert=d().bind(null,"head"),rn.domAPI=c(),rn.insertStyleElement=w();var pr=a()(vn.Z,rn),F=vn.Z&&vn.Z.locals?vn.Z.locals:void 0,qt=({open:n,close:t,hasMask:e=!0,cancelText:o="\u53D6\u6D88",submit:i,submitText:s="\u786E\u5B9A",title:h="Modal \u5F39\u7A97",className:_,children:p,delay:y=250})=>{var k;const C=["modal-wrap",n?"open":"",...(k=_==null?void 0:_.split(" "))!=null?k:[]].filter(Boolean).map(v=>F[v]).join(" ");return(0,r.jsx)(In,{open:n,close:t,delay:y,hasMask:e,className:"huxy-modal",children:(0,r.jsx)("div",{className:C,children:(0,r.jsxs)("div",{className:F["modal-container"],children:[(0,r.jsx)("div",{className:F["modal-header"],children:h}),(0,r.jsx)("div",{className:F["modal-content"],children:p}),(0,r.jsxs)("div",{className:F["modal-footer"],children:[(0,r.jsx)("div",{className:`${F.btn} ${F.left}`,onClick:v=>t==null?void 0:t(v),children:o}),(0,r.jsx)("div",{className:`${F.btn} ${F.right}`,onClick:v=>i==null?void 0:i(v),children:s})]})]})})})},kn=b(201),on={};on.styleTagTransform=z(),on.setAttributes=S(),on.insert=d().bind(null,"head"),on.domAPI=c(),on.insertStyleElement=w();var xr=a()(kn.Z,on),mr=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,et=({global:n,absolute:t})=>(0,r.jsx)("div",{className:`spinner${n?" global":""}${t?" absolute":""}`,children:(0,r.jsx)("figure",{className:"spinning"})}),En=b(810),an={};an.styleTagTransform=z(),an.setAttributes=S(),an.insert=d().bind(null,"head"),an.domAPI=c(),an.insertStyleElement=w();var gr=a()(En.Z,an),pn=En.Z&&En.Z.locals?En.Z.locals:void 0;const ne=n=>{var t;return(t=n==null?void 0:n.filter)==null?void 0:t.call(n,e=>typeof e=="function")},te=(n,t)=>{const e=(0,m.useRef)(),{loading:o,title:i,plugins:s,children:h,className:_,...p}=n,y=ne(s),k=y==null?void 0:y.length,C=_?` ${_}`:"",v=U(t)?t:e;return(0,r.jsxs)("div",{className:`${pn.panel}${C}`,...p,ref:v,children:[(i||k)&&(0,r.jsxs)("div",{className:pn["panel-header"],children:[i&&(0,r.jsx)("h4",{className:pn["panel-title"],children:i}),k&&(0,r.jsx)("div",{className:pn["panel-plugins"],children:y.map((I,j)=>(0,r.jsx)("span",{className:"link",children:(0,r.jsx)(I,{panel:v})},j))})]}),(0,r.jsx)("div",{className:pn["panel-body"],children:h}),o&&(0,r.jsx)(et,{})]})};var ee=(0,m.forwardRef)(te),Cn=b(31),ln={};ln.styleTagTransform=z(),ln.setAttributes=S(),ln.insert=d().bind(null,"head"),ln.domAPI=c(),ln.insertStyleElement=w();var br=a()(Cn.Z,ln),wr=Cn.Z&&Cn.Z.locals?Cn.Z.locals:void 0;const re=({gutter:n=10,className:t,overflow:e="hidden",...o},i)=>{var s;const h=t?` ${t}`:"";let _=10;if(Array.isArray(n)){const p=[...n];n=p[0],_=(s=p[1])!=null?s:p[0]}return(0,r.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(_/2)}px`,overflow:e},children:(0,r.jsx)("div",{className:`row${h}`,...o,ref:i})})};var oe=(0,m.forwardRef)(re),On=n=>An(n)==="array",ae=n=>On(n)&&!!n.length;const ie=({to:n,preventDefault:t,stopPropagation:e,...o})=>t?(0,r.jsx)("span",{...o}):(0,r.jsx)("a",{href:n,...o}),le=({item:n,...t})=>(0,r.jsx)("ul",{...t}),se=(n,...t)=>{const e={};return Object.keys(n).filter(Boolean).map(o=>{e[o]=i=>n[o](i,...t)}),e},rt=({data:n=[],events:t={},List:e=le,Link:o=ie,leftIcon:i,rightIcon:s,isHorizontal:h,isCollapsed:_,level:p=0,parentOpen:y=!0})=>{const k=_&&!p,C=!h&&!_&&!y;return n.map(v=>{var I;const{name:j,path:g,icon:O,rightIcon:T,active:D,open:W,children:K,linkProps:H}=v,_n=ae(K),Z=v.id||g||j,cn=k?(I=v.title)!=null?I:j:void 0,Y=C?"hidden":"",N=O!=null?O:i,B=T!=null?T:s,X=N?(0,r.jsx)("div",{className:"node-left-icon",children:N===!0?(0,r.jsx)("i",{className:"default-left-icon"}):N}):null,it=j?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:j})}):null;if(_n){const be=se(t,v,p),we=[Y,W?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:we,"has-children":"true",...be,children:[(0,r.jsxs)(o,{title:cn,className:`link${D?" active":""}`,to:g,preventDefault:!0,stopPropagation:!1,...H,children:[X,it,B?(0,r.jsx)("div",{className:"node-right-icon",children:B===!0?(0,r.jsx)("i",{className:"default-right-icon"}):B}):null]}),(0,r.jsx)(e,{item:v,children:rt({data:K,events:t,List:e,Link:o,leftIcon:i,rightIcon:s,isHorizontal:h,isCollapsed:_,level:p+1,parentOpen:!!W})})]},Z)}return(0,r.jsx)("li",{className:Y,children:(0,r.jsxs)(o,{title:cn,className:`link${D?" active":""}`,to:g,...H,children:[X,it]})},Z)})};var ot=rt,de=(n,...t)=>(0,r.jsx)("div",{"v-html":n,...t}),zn=b(289),sn={};sn.styleTagTransform=z(),sn.setAttributes=S(),sn.insert=d().bind(null,"head"),sn.domAPI=c(),sn.insertStyleElement=w();var Cr=a()(zn.Z,sn),zr=zn.Z&&zn.Z.locals?zn.Z.locals:void 0;const ce=n=>(0,r.jsx)("div",{style:{padding:"6px 15px"},children:n}),ue=({activekey:n,tabs:t=[],switchTab:e,trackColor:o,flex:i},s)=>{var h;const[_,p]=(0,m.useState)(n!=null?n:(h=t[0])==null?void 0:h.key),[y,k]=(0,m.useState)({}),C=(0,m.useRef)({}),v=(0,m.useRef)();(0,m.useEffect)(()=>{const g=C.current[_];g&&I(g)},[]);const I=g=>{const{left:O,width:T}=nn(g),D=nn(v.current).left;k({left:O-D,width:T})},j=(g,O)=>{g.stopPropagation(),p(O),typeof e=="function"&&e(O),I(g.currentTarget)};return(0,r.jsxs)("div",{className:"tabs-header-wrap",ref:s,children:[(0,r.jsx)("ul",{className:`tabs-header${i?" flex":""}`,ref:v,children:t.map(g=>(0,r.jsx)("li",{ref:O=>C.current[g.key]=O,className:`th-item${_===g.key?" active":""}`,onClick:O=>j(O,g.key),children:typeof g.renderTabs=="function"?g.renderTabs(g,_===g.key):ce(g.value)},g.key))}),(0,r.jsx)("div",{className:"th-track",style:{...y,color:o}})]})};var he=(0,m.forwardRef)(ue),fe=(n,t,e="id",o="children")=>{if(!On(n))return null;const i=s=>{for(let h=0,_=s.length;h<_;h++){const p=s[h];if(p[e]===t)return[p];if(On(p[o])){const y=i(p[o]);if(y)return[p].concat(y)}}};return i(n)};const pe=n=>++n;var _e=()=>{const[,n]=(0,m.useState)(0);return(0,m.useCallback)(()=>n(pe),[])};const at=n=>{const{children:t,open:e}=n;let o=0;if(e&&(t!=null&&t.length)){o=t.length;let i=0;return t.map(s=>i+=at(s)),o+i}return o};var xe=({item:n,style:t,...e})=>(0,r.jsx)("ul",{style:{...t,"--count":at(n)},...e}),Sn=b(435),dn={};dn.styleTagTransform=z(),dn.setAttributes=S(),dn.insert=d().bind(null,"head"),dn.domAPI=c(),dn.insertStyleElement=w();var jr=a()(Sn.Z,dn),Mr=Sn.Z&&Sn.Z.locals?Sn.Z.locals:void 0;const me=n=>(0,r.jsx)("ul",{...n}),ye=(n,t)=>n?xe:({item:e,...o})=>(0,r.jsx)(me,{className:t==="right"?"left":"",...o});var ge=n=>{var t;const{data:e=[],collapsed:o=!1,type:i="vertical",Link:s,width:h,bgColor:_,itemHeight:p,collapsedWidth:y,itemPadding:k,style:C,className:v,...I}=n,j=(0,m.useRef)(),g=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(j.current),[]);const O=_e(),T=i==="horizontal",D=!T&&o,W={onClick:(Y,N)=>{if(Y.stopPropagation(),!T&&!D){const B=fe(e,N.path,"path"),X=B[B.length-1];X.open=!X.open,O()}},onMouseEnter:(Y,N,B)=>{D&&!B&&(clearTimeout(j.current),g.current.style.width="var(--maxWidth)")},onMouseLeave:(Y,N,B)=>{D&&!B&&(j.current=setTimeout(()=>g.current.style.width="",200))}},K=(T?["huxy-horizontal-tree",v]:["huxy-tree",v,D?"collapsed":""]).filter(Boolean).join(" "),{float:H,..._n}=(t=I==null?void 0:I.style)!=null?t:{},Z={"--bgColor":_,"--itemHeight":p,"--nodeListWidth":h,..._n};T?(Z["--itemPadding"]=k,Z["--nodeFloat"]=H):(Z["--width"]=h,Z["--collapsedWidth"]=y);const cn=ye(!T&&!D,H);return(0,r.jsx)("div",{ref:g,className:K,style:Z,...I,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:ot({data:e,events:W,List:cn,Link:s,leftIcon:!0,rightIcon:!0,isHorizontal:T,isCollapsed:D})})})})}}(),Pn}()});
