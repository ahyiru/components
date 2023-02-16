(function(un,G){typeof exports=="object"&&typeof module=="object"?module.exports=G(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define("components",["react","react-dom"],G):typeof exports=="object"?exports.components=G(require("react"),require("react-dom")):un.components=G(un.React,un.ReactDOM)})(this,function(Rn,un){return function(){"use strict";var G={193:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`/*@height:2px;
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
`,""]),s.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},h.Z=s},145:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.kLIGi {
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
`,""]),s.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},h.Z=s},842:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes animate-drawer-in {
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
`,""]),s.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},h.Z=s},563:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes animate-drop-in {
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
  border-left-color: #f0f0f0;
}
.huxy-drop-arrow-br::after {
  bottom: calc(10px + 1px);
  border-left-color: #ffffff;
}
`,""]),s.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},h.Z=s},697:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes animate-modal-in {
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
`,""]),s.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},h.Z=s},810:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.clear {
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
`,""]),s.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},h.Z=s},31:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.cols-1 {
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
`,""]),s.locals={},h.Z=s},201:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes before {
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
`,""]),s.locals={},h.Z=s},289:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.clear {
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
`,""]),s.locals={},h.Z=s},626:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.ofth_ {
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
`,""]),s.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},h.Z=s},435:function(r,h,a){var x=a(703),c=a.n(x),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.node-right-icon-close {
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
`,""]),s.locals={},h.Z=s},414:function(r){r.exports=function(h){var a=[];return a.toString=function(){return this.map(function(c){var u="",d=typeof c[5]!="undefined";return c[4]&&(u+="@supports (".concat(c[4],") {")),c[2]&&(u+="@media ".concat(c[2]," {")),d&&(u+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),u+=h(c),d&&(u+="}"),c[2]&&(u+="}"),c[4]&&(u+="}"),u}).join("")},a.i=function(c,u,d,s,z){typeof c=="string"&&(c=[[null,c,void 0]]);var R={};if(d)for(var w=0;w<this.length;w++){var W=this[w][0];W!=null&&(R[W]=!0)}for(var C=0;C<c.length;C++){var v=[].concat(c[C]);d&&R[v[0]]||(typeof z!="undefined"&&(typeof v[5]=="undefined"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=z),u&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=u),s&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=s):v[4]="".concat(s)),a.push(v))}},a}},703:function(r){r.exports=function(h){return h[1]}},53:function(r,h,a){var x;var c=a(899),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,z=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function w(W,C,v){var P,L={},A=null,Dn=null;v!==void 0&&(A=""+v),C.key!==void 0&&(A=""+C.key),C.ref!==void 0&&(Dn=C.ref);for(P in C)s.call(C,P)&&!R.hasOwnProperty(P)&&(L[P]=C[P]);if(W&&W.defaultProps)for(P in C=W.defaultProps,C)L[P]===void 0&&(L[P]=C[P]);return{$$typeof:u,type:W,key:A,ref:Dn,props:L,_owner:z.current}}x=d,h.jsx=w,h.jsxs=w},458:function(r,h,a){r.exports=a(53)},748:function(r){var h=[];function a(u){for(var d=-1,s=0;s<h.length;s++)if(h[s].identifier===u){d=s;break}return d}function x(u,d){for(var s={},z=[],R=0;R<u.length;R++){var w=u[R],W=d.base?w[0]+d.base:w[0],C=s[W]||0,v="".concat(W," ").concat(C);s[W]=C+1;var P=a(v),L={css:w[1],media:w[2],sourceMap:w[3],supports:w[4],layer:w[5]};if(P!==-1)h[P].references++,h[P].updater(L);else{var A=c(L,d);d.byIndex=R,h.splice(R,0,{identifier:v,updater:A,references:1})}z.push(v)}return z}function c(u,d){var s=d.domAPI(d);s.update(u);var z=function(w){if(w){if(w.css===u.css&&w.media===u.media&&w.sourceMap===u.sourceMap&&w.supports===u.supports&&w.layer===u.layer)return;s.update(u=w)}else s.remove()};return z}r.exports=function(u,d){d=d||{},u=u||[];var s=x(u,d);return function(R){R=R||[];for(var w=0;w<s.length;w++){var W=s[w],C=a(W);h[C].references--}for(var v=x(R,d),P=0;P<s.length;P++){var L=s[P],A=a(L);h[A].references===0&&(h[A].updater(),h.splice(A,1))}s=v}}},736:function(r){var h={};function a(c){if(typeof h[c]=="undefined"){var u=document.querySelector(c);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch(d){u=null}h[c]=u}return h[c]}function x(c,u){var d=a(c);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(u)}r.exports=x},706:function(r){function h(a){var x=document.createElement("style");return a.setAttributes(x,a.attributes),a.insert(x,a.options),x}r.exports=h},567:function(r,h,a){function x(c){var u=a.nc;u&&c.setAttribute("nonce",u)}r.exports=x},306:function(r){function h(c,u,d){var s="";d.supports&&(s+="@supports (".concat(d.supports,") {")),d.media&&(s+="@media ".concat(d.media," {"));var z=typeof d.layer!="undefined";z&&(s+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),s+=d.css,z&&(s+="}"),d.media&&(s+="}"),d.supports&&(s+="}");var R=d.sourceMap;R&&typeof btoa!="undefined"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R))))," */")),u.styleTagTransform(s,c,u.options)}function a(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)}function x(c){var u=c.insertStyleElement(c);return{update:function(s){h(u,c,s)},remove:function(){a(u)}}}r.exports=x},62:function(r){function h(a,x){if(x.styleSheet)x.styleSheet.cssText=a;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(a))}}r.exports=h},899:function(r){r.exports=Rn},994:function(r){r.exports=un}},Tn={};function b(r){var h=Tn[r];if(h!==void 0)return h.exports;var a=Tn[r]={id:r,exports:{}};return G[r](a,a.exports,b),a.exports}(function(){b.n=function(r){var h=r&&r.__esModule?function(){return r.default}:function(){return r};return b.d(h,{a:h}),h}})(),function(){b.d=function(r,h){for(var a in h)b.o(h,a)&&!b.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:h[a]})}}(),function(){b.o=function(r,h){return Object.prototype.hasOwnProperty.call(r,h)}}(),function(){b.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){b.nc=void 0}();var Pn={};return function(){b.r(Pn),b.d(Pn,{Anico:function(){return lt},Carousel:function(){return _t},Col:function(){return xt},Drawer:function(){return kt},Drop:function(){return Tt},Ellipsis:function(){return Lt},ErrorBoundary:function(){return Yn},FullPage:function(){return Gt},HandleError:function(){return Jt},LoadError:function(){return Jn},Mask:function(){return In},MaxSize:function(){return ne},Modal:function(){return te},Panel:function(){return oe},Portal:function(){return Mn},Row:function(){return ie},Spinner:function(){return et},TabHeader:function(){return pe},Tooltip:function(){return Kn},Tree:function(){return we},fixEle:function(){return Vn},fixIcon:function(){return $t},renderTree:function(){return ot},str2React:function(){return Gn},str2Vue:function(){return ue}});var r=b(458),h=b(748),a=b.n(h),x=b(306),c=b.n(x),u=b(736),d=b.n(u),s=b(567),z=b.n(s),R=b(706),w=b.n(R),W=b(62),C=b.n(W),v=b(193),P={};P.styleTagTransform=C(),P.setAttributes=z(),P.insert=d().bind(null,"head"),P.domAPI=c(),P.insertStyleElement=w();var L=a()(v.Z,P),A=v.Z&&v.Z.locals?v.Z.locals:void 0,lt=n=>(0,r.jsx)("span",{className:A.anico,children:(0,r.jsx)("span",{className:[A.hline,...(n.type||"").split(" ").map(t=>A[t]).filter(Boolean)].join(" ")})}),Wn=b(994),m=b(899),st=b.n(m),dt=(n,t)=>{const e=(0,m.useRef)();(0,m.useEffect)(()=>{e.current=n},[n]),(0,m.useEffect)(()=>{if(t){const o=setInterval(()=>e.current(),t);return()=>clearInterval(o)}},[t])},$=()=>![typeof window,typeof document].includes("undefined"),An=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),jn=n=>An(n).indexOf("element")>-1,xn=(n=null)=>{var t,e;return $()?jn(n)?{width:n.clientWidth,height:n.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(e=window.innerHeight)!=null?e:document.documentElement.clientHeight}:{width:0,height:0}},Bn=(n=()=>{},t=60)=>{let e=null;return function(...o){clearTimeout(e),e=setTimeout(()=>n.apply(this,o),t)}},ct=(n,t)=>Object.prototype.hasOwnProperty.call(n!=null?n:{},t),U=n=>ct(n,"current"),Ln=(n,t)=>{var e;const o=[],i=(e=n.children)!=null?e:[];for(let l=0,f=i.length;l<f;l++){const _=i[l];_.className.indexOf(t)>-1&&o.push(_)}return o.length===0?null:o.length===1?o[0]:o};const ut=(n,t)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const e=document.createElement("object");return e.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),e.setAttribute("class","resize-sensor"),e.onload=()=>{e.contentDocument.defaultView.addEventListener("resize",t,!1),t()},e.type="text/html",n.appendChild(e),e.data="about:blank",e};var ht=(n,t=60)=>{if(!$())return;n=U(n)?n.current:n!=null?n:document.body;let e=Ln(n,"resize-sensor"),o=[];const i=Bn(()=>o.map(p=>p(n)),t),l=p=>{Ln(n,"resize-sensor")||(e=ut(n,i)),o.indexOf(p)===-1&&o.push(p)},f=p=>{const y=o.indexOf(p);y!==-1&&o.splice(y,1),o.length===0&&e&&_()},_=()=>{e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",i,!1),e.parentNode.removeChild(e),e=void 0,o=[])};return{element:n,bind:l,unbind:f,destroy:_}},ft=(n={})=>{const t=(0,m.useRef)(0),[e,o]=(0,m.useState)(n),i=(0,m.useCallback)(l=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>o(l))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(t.current),[]),[e,i]},pt=(n=null,t=60)=>{const e=U(n)?n.current:n,{bind:o,destroy:i}=ht(e,t),[l,f]=ft(xn(e));return(0,m.useEffect)(()=>(o(()=>e&&f(xn(e))),()=>i()),[e]),l},mn=b(145),J={};J.styleTagTransform=C(),J.setAttributes=z(),J.insert=d().bind(null,"head"),J.domAPI=c(),J.insertStyleElement=w();var We=a()(mn.Z,J),V=mn.Z&&mn.Z.locals?mn.Z.locals:void 0,_t=({children:n,active:t=0,delay:e=5e3,className:o,...i})=>{const[l,f]=(0,m.useState)(t+1),[_,p]=(0,m.useState)(!1),y=(0,m.useRef)(),g=(0,m.useRef)(""),{width:E}=pt(y);n=Array.isArray(n)?n:[n];const k=n[0],M=[n[n.length-1],...n,k],I=M.length;dt(()=>{let j=l+1;j=j===I?1:j,g.current&&(g.current=""),f(j),j===I-1&&setTimeout(()=>{g.current="none",f(1)},500)},_?null:e);const S=(j,T)=>{T.stopPropagation(),g.current="",f(j),(0,Wn.flushSync)(()=>p(!0)),p(!1)},O={width:`${I*E}px`,transform:`translateX(${-E*l}px)`,transition:g.current};return(0,r.jsxs)("div",{className:`${V["huxy-carousel"]}${o?` ${o}`:""}`,...i,ref:y,children:[(0,r.jsx)("div",{className:V["huxy-carousel-wrap"],style:O,children:M.map((j,T)=>(0,r.jsx)("div",{className:`${V["carousel-item"]} ${l===T?V.active:""}`,style:{width:`${E}px`},children:j},`huxy-carousel-${T}`))}),(0,r.jsx)("div",{className:V["carousel-switch"],children:n.map((j,T)=>(0,r.jsx)("span",{className:`${V.dot} ${l===T+1?V.active:""}`,onClick:K=>S(T+1,K)},`huxy-carousel-switch-${T}`))})]})};const hn=(n,t)=>{let e="",o="";if(typeof t=="number"&&(e=`col-${n}-${t}`),typeof t=="object"){const{span:i,offset:l}=t;e=i?`col-${n}-${i}`:"",o=l?`offset-${n}-${l}`:""}return{sp:e,os:o}};var xt=(0,m.forwardRef)(({span:n,offset:t,xl:e,lg:o,md:i,sm:l,xs:f,style:_,width:p,auto:y,offsetWidth:g="0px",className:E,...k},D)=>{const M=E?` ${E}`:"",I=`col-${n||12}`,S=t?`offset-${t}`:"",{sp:O,os:j}=hn("xs",f),{sp:T,os:K}=hn("sm",l),{sp:H,os:_n}=hn("md",i),{sp:Z,os:cn}=hn("lg",o),{sp:Y,os:F}=hn("xl",e),B=[I,Y,Z,H,T,O,S,F,cn,_n,K,j].filter(Boolean).join(" "),X=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${g})`}:{width:p};return(0,r.jsx)("div",{className:`${B}${M}`,...k,style:{...X,..._},ref:D})}),mt=()=>{const n=(0,m.useRef)(!0);return n.current?(n.current=!1,!0):!1},yt=(n,t=[])=>{const e=mt();(0,m.useEffect)(()=>{if(!e)return n()},t)},Un=(n,t=450)=>{const[e,o]=(0,m.useState)(n);return yt(()=>{let i;return n||t===0?o(n):i=setTimeout(()=>o(n),t),()=>i&&clearTimeout(i)},[n]),[e,o]},Mn=({children:n,mountNode:t=document.body})=>(0,Wn.createPortal)(n,t);const gt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},bt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},wt={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},vt=document.body;var In=({open:n,close:t,delay:e=300,children:o,mountNode:i,hasMask:l=!0,style:f,className:_="h-mask"})=>{const[p]=Un(n,e);return vt.style.overflow=p?"hidden":"",(0,r.jsx)(Mn,{mountNode:i,children:(0,r.jsx)("div",{children:p?(0,r.jsxs)("div",{className:_,style:gt,children:[l?(0,r.jsx)("div",{style:bt,onClick:y=>t==null?void 0:t(y)}):null,(0,r.jsx)("div",{style:{...wt,...f},children:o})]}):null})})},yn=b(842),Q={};Q.styleTagTransform=C(),Q.setAttributes=z(),Q.insert=d().bind(null,"head"),Q.domAPI=c(),Q.insertStyleElement=w();var $e=a()(yn.Z,Q),q=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,kt=({open:n,close:t,footer:e,header:o,className:i,style:l,children:f,width:_="300px"})=>{var p;const y=["drawer-wrap",n?"open":"",...(p=i==null?void 0:i.split(" "))!=null?p:[]].filter(Boolean).map(g=>q[g]).join(" ");return(0,r.jsx)(In,{open:n,close:t,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,r.jsx)("div",{className:y,style:{width:_,...l},children:(0,r.jsxs)("div",{className:q["drawer-container"],children:[(0,r.jsxs)("div",{className:q["drawer-header"],children:[(0,r.jsx)("span",{className:`link ${q["ico-close"]}`,onClick:g=>t==null?void 0:t(g)}),(0,r.jsx)("div",{children:o})]}),(0,r.jsx)("div",{className:q["drawer-content"],children:f}),e?(0,r.jsx)("div",{className:q["drawer-footer"],children:e}):null]})})})},Et=(n,t,e="click")=>{(0,m.useEffect)(()=>{const o=l=>{const f=U(n)?n.current:n;f!=null&&f.contains&&!f.contains(l.target)&&t(l)},i=typeof e=="string"?[e]:e;return i.map(l=>{document.addEventListener(l,o,!1)}),()=>{i.map(l=>{document.removeEventListener(l,o,!1)})}},[n,t,e])},Ct=n=>(n==null?void 0:n.$$typeof)&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",zt=(n="")=>n.replace(/^\S/,t=>t.toUpperCase()),nn=n=>{var t;if($())return n=U(n)?n.current:n!=null?n:document.body,(t=n.getBoundingClientRect)==null?void 0:t.call(n)},St=n=>{if(!$())return;const t=document.createElement("div");return t.innerHTML=n,t.children[0]},fn=(n,t={},e=!1)=>{if(jn(n)){if(e){let o="";Object.keys(t).map(i=>{o+=`${i}: ${t[i]};`}),n.style=o;return}Object.keys(t).map(o=>n.style.setProperty(o,t[o]))}};const Pt=(n=350)=>new Promise(t=>setTimeout(t,n)),Qe=(n=100)=>{const t=Date.now();for(;Date.now()-t<=n;);};var Dt=Pt,jt=async(n,t=15)=>{if(!$())return;if(typeof n=="string"&&(n=St(n)),n=U(n)?n.current:n,!jn(n))return{};const e=n.cloneNode(!0);fn(e,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(e),await Dt(t);const o=nn(e);return n.parentNode.removeChild(e),o};const Mt=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,It=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Zn=(n,t)=>{var e;t=`huxy-drop-arrow-${t}`;const o=(e=n.getAttribute("class"))!=null?e:"";Mt.test(o)?n.setAttribute("class",o.replace(It,t)):n.setAttribute("class",`${o} ${t}`)},Nn=async(n,t,e)=>{const{left:o,right:i,top:l,bottom:f}=nn(n),{width:_,height:p}=xn(),{width:y,height:g}=await jt(t);if(i<0||f<0||o>_||l>p)return{};if(e==="vertical"){const E={left:o+"px",top:f+10+"px",right:"auto",bottom:"auto"};let k="lt";o+y>_&&(E.left=i-y+"px",k="rt"),f+10+g>p&&(E.top=l-10-g+"px",k=k==="lt"?"lb":"rb"),fn(t,E),Zn(t,k)}else{const E={left:i+10+"px",top:l+"px",right:"auto",bottom:"auto"};let k="tl";i+10+y>_&&(E.left=o-10-y+"px",k="tr"),l+g>p&&(E.top=f-g+"px",k=k==="tl"?"bl":"br"),fn(t,E),Zn(t,k)}};var Ot=(n,t,e="horizontal")=>{const o=Bn(Nn),i=()=>o(n,t,e);window.addEventListener("scroll",i,!1),window.addEventListener("resize",i,!1);const l=()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),fn(t,{left:"",top:"",right:"",bottom:""})};return Nn(n,t,e),l},Rt=({open:n,delay:t=250,children:e,mountNode:o,style:i,className:l="huxy-mask"})=>{const[f]=Un(n,t);return(0,r.jsx)(Mn,{mountNode:o,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:l,children:(0,r.jsx)("div",{style:{...i,display:f?"block":"none"},children:e})})})})},gn=b(563),tn={};tn.styleTagTransform=C(),tn.setAttributes=z(),tn.insert=d().bind(null,"head"),tn.domAPI=c(),tn.insertStyleElement=w();var er=a()(gn.Z,tn),Fn=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,Tt=({trigger:n="click",type:t,dropList:e,className:o,children:i,...l})=>{const[f,_]=(0,m.useState)(!1),p=(0,m.useRef)(),y=(0,m.useRef)(),g=(0,m.useRef)();Et(p,I=>f&&_(!1),[...new Set(["click",n.toLowerCase()])]),(0,m.useEffect)(()=>()=>{var I;return(I=g.current)==null?void 0:I.call(g)},[]);const E=I=>{I.preventDefault(),_(!0),g.current=Ot(p.current,y.current,t)},k={[`on${zt(n)}`]:E},D=["drop-wrap",f?"open":""].filter(Boolean).map(I=>Fn[I]).join(" "),M=Ct(e)?e:e==null?void 0:e(()=>_(!1),f);return(0,r.jsxs)("span",{ref:p,className:`${Fn["drop-target"]}${o?` ${o}`:""}`,...k,...l,children:[i,(0,r.jsx)(Rt,{open:f,className:"huxy-drop",children:(0,r.jsx)("div",{ref:y,className:D,children:M})})]})},Wt=(n,t,e)=>{if(!$())return;e=U(e)?e.current:e!=null?e:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&fn(o,t),o.innerText=(n!=null?n:"").replace(/[\r\n]/g,""),e.appendChild(o);const i=o.getBoundingClientRect();return e.removeChild(o),i},bn=b(626),en={};en.styleTagTransform=C(),en.setAttributes=z(),en.insert=d().bind(null,"head"),en.domAPI=c(),en.insertStyleElement=w();var ar=a()(bn.Z,en),$n=bn.Z&&bn.Z.locals?bn.Z.locals:void 0,Kn=({title:n,placement:t="topRight",children:e,ellipsis:o,className:i,...l})=>(0,r.jsx)("span",{className:`${$n[`huxy-tooltip-${t}`]}${i?` ${i}`:""}`,tooltip:n!=null?n:e,...l,children:(0,r.jsx)("span",{className:o?$n.ellipsis:"",children:e})});const At={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Bt=n=>{var t,e,o,i;const{children:l,style:f}=n,_=typeof l=="string",p=_?l:(o=(t=l==null?void 0:l.props)==null?void 0:t.title)!=null?o:(e=l==null?void 0:l.props)==null?void 0:e.children,y=(0,m.useRef)(),[g,E]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{if(y.current){const{width:k}=Wt(p,null,y.current.parentNode),{width:D}=nn(y.current),M=~~k>~~D;M!==g&&E(M)}},[p]),(0,r.jsx)("span",{ref:y,style:{display:"flex",width:"100%",...f},children:g?_?(0,r.jsx)(Kn,{...n,ellipsis:!0}):(0,r.jsx)("span",{style:At,children:l}):_?l:(i=l==null?void 0:l.props)==null?void 0:i.children})};var Lt=n=>n.children==null?"":(0,r.jsx)(Bt,{...n}),Ut=Object.defineProperty,Zt=(n,t,e)=>t in n?Ut(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Nt=(n,t,e)=>(Zt(n,typeof t!="symbol"?t+"":t,e),e);class Yn extends st().Component{constructor(){super(...arguments),Nt(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,e){const{errorReport:o}=this.props;typeof o=="function"&&o({error:t,info:e.componentStack})}render(){const{error:t}=this.state,{fallback:e,children:o}=this.props;return t?e(t):o}}var Vn=n=>t=>{if(typeof t=="function"||typeof(t==null?void 0:t.render)=="function")return(0,r.jsx)(t,{});if(typeof t=="string"){const e=n==null?void 0:n[t];return e?(0,r.jsx)(e,{}):(0,r.jsx)("i",{className:t})}return t!=null?t:null};const Ft=n=>Vn(n);var $t=n=>({icon:t,defaultIcon:e=null})=>t?Ft(n)(t):t===!1?null:e;const wn=["","webkit","moz","ms"],Kt=n=>wn.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>n[t]),Yt=n=>wn.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>n[t]),Vt=n=>wn.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>n[t]),Hn=wn.map(n=>`${n}fullscreenchange`);var Ht=n=>{var t,e;if(!$())return;n=U(n)?n.current:n!=null?n:document.body;const o=Kt(document),i=Yt(n),l=Vt(document);document[o]?(e=document[l])==null||e.call(document):(t=n[i])==null||t.call(n)},Xt=n=>$()?(Hn.map(e=>document.addEventListener(e,n,!1)),()=>Hn.map(e=>document.removeEventListener(e,n,!1))):void 0;const Xn=n=>(0,r.jsx)("i",{...n,children:"..."});var Gt=({panel:n,fullIcon:t=Xn,exitIcon:e=Xn,...o})=>{const i=U(n)?n.current:n,[l,f]=(0,m.useState)();(0,m.useEffect)(()=>{const p=Xt(()=>{f(y=>!y)});return()=>p()},[]);const _=l?e:t;return(0,r.jsx)(_,{onClick:p=>Ht(i),...o})},Gn=(n,t)=>(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...t}),Jn=n=>{const{error:t={},info:e=""}=n||{},{message:o,stack:i,errMsg:l}=t;let f=l||i||t.toString();f=`${f}
${e}`.replace(/\r|\n|\r\n/g,"<br/>"),f=f.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),f=f.replace(/\s/g,"&nbsp;");const _=o==null?void 0:o.slice(0,120).split(". ").slice(0,2).join(". ");return(0,r.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Gn(f,{style:{color:"red"}}),_&&(0,r.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${_}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Jt=({children:n,report:t})=>{var e;const o=(0,m.useRef)();return(e=o.current)!=null&&e.state&&(o.current.state.error=null),(0,r.jsx)(Yn,{ref:o,fallback:(i,l)=>Jn({error:i,info:l}),errorReport:t,children:n})};const Qn=(n,t)=>Object.keys(t).map(e=>n.style[e]=t[e]),Qt=(n,t)=>Object.keys(t).map(e=>n.style[e]=""),qt={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},qn=({left:n,top:t,width:e,height:o})=>({left:`${n}px`,top:`${t}px`,width:`${e}px`,height:`${o}px`}),nt=n=>(0,r.jsx)("i",{...n,children:"..."}),tt=n=>{const{left:t,top:e}=nn(n),{width:o,height:i}=xn(n);return{left:t,top:e,width:o,height:i}};var ne=({panel:n,target:t,fullIcon:e=nt,exitIcon:o=nt})=>{n=U(n)?n.current:n||document.body;const[i,l]=(0,m.useState)(),f=(0,m.useRef)(),_=(0,m.useRef)();(0,m.useEffect)(()=>{const g=typeof t=="function"?t:()=>document.getElementsByClassName(t)[0];_.current=qn(tt(g())),f.current={...qt,...qn(tt(n))}},[n]);const p=(g,E)=>{g?(Qn(E,f.current),setTimeout(()=>{Qn(E,_.current)},0)):Qt(E,f.current),l(g)},y=i?o:e;return(0,r.jsx)(y,{onClick:g=>p(!i,n)})},vn=b(697),rn={};rn.styleTagTransform=C(),rn.setAttributes=z(),rn.insert=d().bind(null,"head"),rn.domAPI=c(),rn.insertStyleElement=w();var mr=a()(vn.Z,rn),N=vn.Z&&vn.Z.locals?vn.Z.locals:void 0,te=({open:n,close:t,hasMask:e=!0,cancelText:o="\u53D6\u6D88",submit:i,submitText:l="\u786E\u5B9A",title:f="Modal \u5F39\u7A97",className:_,children:p,delay:y=250,...g})=>{var E;const k=["modal-wrap",n?"open":"",...(E=_==null?void 0:_.split(" "))!=null?E:[]].filter(Boolean).map(D=>N[D]).join(" ");return(0,r.jsx)(In,{open:n,close:t,delay:y,hasMask:e,className:"huxy-modal",children:(0,r.jsx)("div",{className:k,...g,children:(0,r.jsxs)("div",{className:N["modal-container"],children:[(0,r.jsx)("div",{className:N["modal-header"],children:f}),(0,r.jsx)("div",{className:N["modal-content"],children:p}),(0,r.jsxs)("div",{className:N["modal-footer"],children:[(0,r.jsx)("div",{className:`${N.btn} ${N.left}`,onClick:D=>t==null?void 0:t(D),children:o}),(0,r.jsx)("div",{className:`${N.btn} ${N.right}`,onClick:D=>i==null?void 0:i(D),children:l})]})]})})})},kn=b(201),on={};on.styleTagTransform=C(),on.setAttributes=z(),on.insert=d().bind(null,"head"),on.domAPI=c(),on.insertStyleElement=w();var gr=a()(kn.Z,on),br=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,et=({global:n,absolute:t})=>(0,r.jsx)("div",{className:`spinner${n?" global":""}${t?" absolute":""}`,children:(0,r.jsx)("figure",{className:"spinning"})}),En=b(810),an={};an.styleTagTransform=C(),an.setAttributes=z(),an.insert=d().bind(null,"head"),an.domAPI=c(),an.insertStyleElement=w();var vr=a()(En.Z,an),pn=En.Z&&En.Z.locals?En.Z.locals:void 0;const ee=n=>{var t;return(t=n==null?void 0:n.filter)==null?void 0:t.call(n,e=>typeof e=="function")},re=(n,t)=>{const e=(0,m.useRef)(),{loading:o,title:i,plugins:l,children:f,className:_,...p}=n,y=ee(l),g=y==null?void 0:y.length,E=_?` ${_}`:"",k=U(t)?t:e;return(0,r.jsxs)("div",{className:`${pn.panel}${E}`,...p,ref:k,children:[(i||g)&&(0,r.jsxs)("div",{className:pn["panel-header"],children:[i&&(0,r.jsx)("h4",{className:pn["panel-title"],children:i}),g&&(0,r.jsx)("div",{className:pn["panel-plugins"],children:y.map((D,M)=>(0,r.jsx)("span",{className:"link",children:(0,r.jsx)(D,{panel:k})},M))})]}),(0,r.jsx)("div",{className:pn["panel-body"],children:f}),o&&(0,r.jsx)(et,{})]})};var oe=(0,m.forwardRef)(re),Cn=b(31),ln={};ln.styleTagTransform=C(),ln.setAttributes=z(),ln.insert=d().bind(null,"head"),ln.domAPI=c(),ln.insertStyleElement=w();var kr=a()(Cn.Z,ln),Er=Cn.Z&&Cn.Z.locals?Cn.Z.locals:void 0;const ae=({gutter:n=10,className:t,overflow:e="hidden",...o},i)=>{var l;const f=t?` ${t}`:"";let _=10;if(Array.isArray(n)){const p=[...n];n=p[0],_=(l=p[1])!=null?l:p[0]}return(0,r.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(_/2)}px`,overflow:e},children:(0,r.jsx)("div",{className:`row${f}`,...o,ref:i})})};var ie=(0,m.forwardRef)(ae),On=n=>An(n)==="array",le=n=>On(n)&&!!n.length;const se=({to:n,preventDefault:t,stopPropagation:e,...o})=>t?(0,r.jsx)("span",{...o}):(0,r.jsx)("a",{href:n,...o}),de=({item:n,...t})=>(0,r.jsx)("ul",{...t}),ce=(n,...t)=>{const e={};return Object.keys(n).filter(Boolean).map(o=>{e[o]=i=>n[o](i,...t)}),e},rt=({data:n=[],events:t={},List:e=de,Link:o=se,leftIcon:i,rightIcon:l,isHorizontal:f,isCollapsed:_,level:p=0,parentOpen:y=!0})=>{const g=_&&!p,E=!f&&!_&&!y;return n.map(k=>{var D;const{name:M,path:I,icon:S,rightIcon:O,active:j,open:T,children:K,linkProps:H}=k,_n=le(K),Z=k.id||I||M,cn=g?(D=k.title)!=null?D:M:void 0,Y=E?"hidden":"",F=S!=null?S:i,B=O!=null?O:l,X=F?(0,r.jsx)("div",{className:"node-left-icon",children:F===!0?(0,r.jsx)("i",{className:"default-left-icon"}):F}):null,it=M?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:M})}):null;if(_n){const ve=ce(t,k,p),ke=[Y,T?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:ke,"has-children":"true",...ve,children:[(0,r.jsxs)(o,{title:cn,className:`link${j?" active":""}`,to:I,preventDefault:!0,stopPropagation:!1,...H,children:[X,it,B?(0,r.jsx)("div",{className:"node-right-icon",children:B===!0?(0,r.jsx)("i",{className:"default-right-icon"}):B}):null]}),(0,r.jsx)(e,{item:k,children:rt({data:K,events:t,List:e,Link:o,leftIcon:i,rightIcon:l,isHorizontal:f,isCollapsed:_,level:p+1,parentOpen:!!T})})]},Z)}return(0,r.jsx)("li",{className:Y,children:(0,r.jsxs)(o,{title:cn,className:`link${j?" active":""}`,to:I,...H,children:[X,it]})},Z)})};var ot=rt,ue=(n,...t)=>(0,r.jsx)("div",{"v-html":n,...t}),zn=b(289),sn={};sn.styleTagTransform=C(),sn.setAttributes=z(),sn.insert=d().bind(null,"head"),sn.domAPI=c(),sn.insertStyleElement=w();var Pr=a()(zn.Z,sn),Dr=zn.Z&&zn.Z.locals?zn.Z.locals:void 0;const he=n=>(0,r.jsx)("div",{style:{padding:"6px 15px"},children:n}),fe=({activekey:n,tabs:t=[],switchTab:e,trackColor:o,flex:i,...l},f)=>{var _;const[p,y]=(0,m.useState)(n!=null?n:(_=t[0])==null?void 0:_.key),[g,E]=(0,m.useState)({}),k=(0,m.useRef)({}),D=(0,m.useRef)();(0,m.useEffect)(()=>{const S=k.current[p];S&&M(S)},[]);const M=S=>{const{left:O,width:j}=nn(S),T=nn(D.current).left;E({left:O-T,width:j})},I=(S,O)=>{S.stopPropagation(),y(O),typeof e=="function"&&e(O),M(S.currentTarget)};return(0,r.jsxs)("div",{className:"tabs-header-wrap",...l,ref:f,children:[(0,r.jsx)("ul",{className:`tabs-header${i?" flex":""}`,ref:D,children:t.map(S=>(0,r.jsx)("li",{ref:O=>k.current[S.key]=O,className:`th-item${p===S.key?" active":""}`,onClick:O=>I(O,S.key),children:typeof S.renderTabs=="function"?S.renderTabs(S,p===S.key):he(S.value)},S.key))}),(0,r.jsx)("div",{className:"th-track",style:{...g,color:o}})]})};var pe=(0,m.forwardRef)(fe),_e=(n,t,e="id",o="children")=>{if(!On(n))return null;const i=l=>{for(let f=0,_=l.length;f<_;f++){const p=l[f];if(p[e]===t)return[p];if(On(p[o])){const y=i(p[o]);if(y)return[p].concat(y)}}};return i(n)};const xe=n=>++n;var me=()=>{const[,n]=(0,m.useState)(0);return(0,m.useCallback)(()=>n(xe),[])};const at=n=>{const{children:t,open:e}=n;let o=0;if(e&&(t!=null&&t.length)){o=t.length;let i=0;return t.map(l=>i+=at(l)),o+i}return o};var ye=({item:n,style:t,...e})=>(0,r.jsx)("ul",{style:{...t,"--count":at(n)},...e}),Sn=b(435),dn={};dn.styleTagTransform=C(),dn.setAttributes=z(),dn.insert=d().bind(null,"head"),dn.domAPI=c(),dn.insertStyleElement=w();var Or=a()(Sn.Z,dn),Rr=Sn.Z&&Sn.Z.locals?Sn.Z.locals:void 0;const ge=n=>(0,r.jsx)("ul",{...n}),be=(n,t)=>n?ye:({item:e,...o})=>(0,r.jsx)(ge,{className:t==="right"?"left":"",...o});var we=n=>{var t;const{data:e=[],collapsed:o=!1,type:i="vertical",Link:l,width:f,bgColor:_,itemHeight:p,collapsedWidth:y,itemPadding:g,style:E,className:k,...D}=n,M=(0,m.useRef)(),I=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(M.current),[]);const S=me(),O=i==="horizontal",j=!O&&o,T={onClick:(Y,F)=>{if(Y.stopPropagation(),!O&&!j){const B=_e(e,F.path,"path"),X=B[B.length-1];X.open=!X.open,S()}},onMouseEnter:(Y,F,B)=>{j&&!B&&(clearTimeout(M.current),I.current.style.width="var(--maxWidth)")},onMouseLeave:(Y,F,B)=>{j&&!B&&(M.current=setTimeout(()=>I.current.style.width="",200))}},K=(O?["huxy-horizontal-tree",k]:["huxy-tree",k,j?"collapsed":""]).filter(Boolean).join(" "),{float:H,..._n}=(t=D==null?void 0:D.style)!=null?t:{},Z={"--bgColor":_,"--itemHeight":p,"--nodeListWidth":f,..._n};O?(Z["--itemPadding"]=g,Z["--nodeFloat"]=H):(Z["--width"]=f,Z["--collapsedWidth"]=y);const cn=be(!O&&!j,H);return(0,r.jsx)("div",{ref:I,className:K,style:Z,...D,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:ot({data:e,events:T,List:cn,Link:l,leftIcon:!0,rightIcon:!0,isHorizontal:O,isCollapsed:j})})})})}}(),Pn}()});
