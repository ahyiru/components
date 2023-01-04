(function(dn,V){typeof exports=="object"&&typeof module=="object"?module.exports=V(require("react"),require("react-dom")):typeof define=="function"&&define.amd?define("components",["react","react-dom"],V):typeof exports=="object"?exports.components=V(require("react"),require("react-dom")):dn.components=V(dn.React,dn.ReactDOM)})(this,function(Rn,dn){return function(){"use strict";var V={193:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`/*@height:2px;
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
`,""]),s.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},f.Z=s},145:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.kLIGi {
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
`,""]),s.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},f.Z=s},842:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes animate-drawer-in {
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
`,""]),s.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},f.Z=s},563:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes animate-drop-in {
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
`,""]),s.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},f.Z=s},697:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes animate-modal-in {
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
`,""]),s.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},f.Z=s},810:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.clear {
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
  position: relative;
  background: var(--panelBgColor);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.02);
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
  border-radius: 4px;
  border-color: rgba(0, 180, 220, 0.5);
  box-shadow: 0 0 2rem rgba(0, 180, 220, 0.5) inset;
}
.J8VWE .rOxNb {
  zoom: 1;
  padding: 10px 12px;
  border-radius: 2px;
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
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
.J8VWE .OQwTX .eCk2_ a {
  float: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ a:not(:first-of-type) {
  margin-right: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]),s.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_"},f.Z=s},31:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.cols-1 {
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
`,""]),s.locals={},f.Z=s},201:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`@keyframes before {
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
`,""]),s.locals={},f.Z=s},289:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.clear {
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
`,""]),s.locals={},f.Z=s},626:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.ofth_ {
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
`,""]),s.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},f.Z=s},435:function(r,f,a){var m=a(703),c=a.n(m),u=a(414),d=a.n(u),s=d()(c());s.push([r.id,`.node-right-icon-close {
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
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > a {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > a {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > a {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > a {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: hidden;
  transition: max-height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
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
  --itemPadding: 8px;
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: 0 var(--itemPadding);
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
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
`,""]),s.locals={},f.Z=s},414:function(r){r.exports=function(f){var a=[];return a.toString=function(){return this.map(function(c){var u="",d=typeof c[5]!="undefined";return c[4]&&(u+="@supports (".concat(c[4],") {")),c[2]&&(u+="@media ".concat(c[2]," {")),d&&(u+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),u+=f(c),d&&(u+="}"),c[2]&&(u+="}"),c[4]&&(u+="}"),u}).join("")},a.i=function(c,u,d,s,S){typeof c=="string"&&(c=[[null,c,void 0]]);var j={};if(d)for(var v=0;v<this.length;v++){var R=this[v][0];R!=null&&(j[R]=!0)}for(var C=0;C<c.length;C++){var z=[].concat(c[C]);d&&j[z[0]]||(typeof S!="undefined"&&(typeof z[5]=="undefined"||(z[1]="@layer".concat(z[5].length>0?" ".concat(z[5]):""," {").concat(z[1],"}")),z[5]=S),u&&(z[2]&&(z[1]="@media ".concat(z[2]," {").concat(z[1],"}")),z[2]=u),s&&(z[4]?(z[1]="@supports (".concat(z[4],") {").concat(z[1],"}"),z[4]=s):z[4]="".concat(s)),a.push(z))}},a}},703:function(r){r.exports=function(f){return f[1]}},53:function(r,f,a){var m;var c=a(899),u=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,S=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function v(R,C,z){var P,B={},W=null,Sn=null;z!==void 0&&(W=""+z),C.key!==void 0&&(W=""+C.key),C.ref!==void 0&&(Sn=C.ref);for(P in C)s.call(C,P)&&!j.hasOwnProperty(P)&&(B[P]=C[P]);if(R&&R.defaultProps)for(P in C=R.defaultProps,C)B[P]===void 0&&(B[P]=C[P]);return{$$typeof:u,type:R,key:W,ref:Sn,props:B,_owner:S.current}}m=d,f.jsx=v,f.jsxs=v},458:function(r,f,a){r.exports=a(53)},748:function(r){var f=[];function a(u){for(var d=-1,s=0;s<f.length;s++)if(f[s].identifier===u){d=s;break}return d}function m(u,d){for(var s={},S=[],j=0;j<u.length;j++){var v=u[j],R=d.base?v[0]+d.base:v[0],C=s[R]||0,z="".concat(R," ").concat(C);s[R]=C+1;var P=a(z),B={css:v[1],media:v[2],sourceMap:v[3],supports:v[4],layer:v[5]};if(P!==-1)f[P].references++,f[P].updater(B);else{var W=c(B,d);d.byIndex=j,f.splice(j,0,{identifier:z,updater:W,references:1})}S.push(z)}return S}function c(u,d){var s=d.domAPI(d);s.update(u);var S=function(v){if(v){if(v.css===u.css&&v.media===u.media&&v.sourceMap===u.sourceMap&&v.supports===u.supports&&v.layer===u.layer)return;s.update(u=v)}else s.remove()};return S}r.exports=function(u,d){d=d||{},u=u||[];var s=m(u,d);return function(j){j=j||[];for(var v=0;v<s.length;v++){var R=s[v],C=a(R);f[C].references--}for(var z=m(j,d),P=0;P<s.length;P++){var B=s[P],W=a(B);f[W].references===0&&(f[W].updater(),f.splice(W,1))}s=z}}},736:function(r){var f={};function a(c){if(typeof f[c]=="undefined"){var u=document.querySelector(c);if(window.HTMLIFrameElement&&u instanceof window.HTMLIFrameElement)try{u=u.contentDocument.head}catch(d){u=null}f[c]=u}return f[c]}function m(c,u){var d=a(c);if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(u)}r.exports=m},706:function(r){function f(a){var m=document.createElement("style");return a.setAttributes(m,a.attributes),a.insert(m,a.options),m}r.exports=f},567:function(r,f,a){function m(c){var u=a.nc;u&&c.setAttribute("nonce",u)}r.exports=m},306:function(r){function f(c,u,d){var s="";d.supports&&(s+="@supports (".concat(d.supports,") {")),d.media&&(s+="@media ".concat(d.media," {"));var S=typeof d.layer!="undefined";S&&(s+="@layer".concat(d.layer.length>0?" ".concat(d.layer):""," {")),s+=d.css,S&&(s+="}"),d.media&&(s+="}"),d.supports&&(s+="}");var j=d.sourceMap;j&&typeof btoa!="undefined"&&(s+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(j))))," */")),u.styleTagTransform(s,c,u.options)}function a(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)}function m(c){var u=c.insertStyleElement(c);return{update:function(s){f(u,c,s)},remove:function(){a(u)}}}r.exports=m},62:function(r){function f(a,m){if(m.styleSheet)m.styleSheet.cssText=a;else{for(;m.firstChild;)m.removeChild(m.firstChild);m.appendChild(document.createTextNode(a))}}r.exports=f},899:function(r){r.exports=Rn},994:function(r){r.exports=dn}},Wn={};function w(r){var f=Wn[r];if(f!==void 0)return f.exports;var a=Wn[r]={id:r,exports:{}};return V[r](a,a.exports,w),a.exports}(function(){w.n=function(r){var f=r&&r.__esModule?function(){return r.default}:function(){return r};return w.d(f,{a:f}),f}})(),function(){w.d=function(r,f){for(var a in f)w.o(f,a)&&!w.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:f[a]})}}(),function(){w.o=function(r,f){return Object.prototype.hasOwnProperty.call(r,f)}}(),function(){w.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}}(),function(){w.nc=void 0}();var Cn={};return function(){w.r(Cn),w.d(Cn,{Anico:function(){return lt},Carousel:function(){return pt},Col:function(){return xt},Drawer:function(){return wt},Drop:function(){return Ot},Ellipsis:function(){return Wt},ErrorBoundary:function(){return Vn},FullPage:function(){return Yt},HandleError:function(){return Vt},LoadError:function(){return qn},Mask:function(){return jn},MaxSize:function(){return Jt},Modal:function(){return Qt},Panel:function(){return te},Portal:function(){return Dn},Row:function(){return re},Spinner:function(){return ot},TabHeader:function(){return ue},Tooltip:function(){return Yn},Tree:function(){return be},fixEle:function(){return Xn},fixIcon:function(){return Zt},renderTree:function(){return it},str2React:function(){return Qn},str2Vue:function(){return se}});var r=w(458),f=w(748),a=w.n(f),m=w(306),c=w.n(m),u=w(736),d=w.n(u),s=w(567),S=w.n(s),j=w(706),v=w.n(j),R=w(62),C=w.n(R),z=w(193),P={};P.styleTagTransform=C(),P.setAttributes=S(),P.insert=d().bind(null,"head"),P.domAPI=c(),P.insertStyleElement=v();var B=a()(z.Z,P),W=z.Z&&z.Z.locals?z.Z.locals:void 0,lt=n=>(0,r.jsx)("span",{className:W.anico,children:(0,r.jsx)("span",{className:[W.hline,...(n.type||"").split(" ").map(t=>W[t]).filter(Boolean)].join(" ")})}),An=w(994),_=w(899),st=w.n(_),dt=(n,t)=>{const e=(0,_.useRef)();(0,_.useEffect)(()=>{e.current=n},[n]),(0,_.useEffect)(()=>{if(t){const o=setInterval(()=>e.current(),t);return()=>clearInterval(o)}},[t])},$=()=>![typeof window,typeof document].includes("undefined"),Bn=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),Pn=n=>Bn(n).indexOf("element")>-1,fn=(n=null)=>{var t,e;return $()?Pn(n)?{width:n.clientWidth,height:n.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(e=window.innerHeight)!=null?e:document.documentElement.clientHeight}:{width:0,height:0}},Ln=(n=()=>{},t=60)=>{let e=null;return function(...o){clearTimeout(e),e=setTimeout(()=>n.apply(this,o),t)}},ct=(n,t)=>Object.prototype.hasOwnProperty.call(n!=null?n:{},t),L=n=>ct(n,"current");const ut=(n,t)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const e=document.createElement("object");return e.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),e.setAttribute("class","resize-sensor"),e.onload=()=>{e.contentDocument.defaultView.addEventListener("resize",t,!1),t()},e.type="text/html",n.appendChild(e),e.data="about:blank",e};var ht=(n,t=60)=>{if(!$())return;n=L(n)?n.current:n!=null?n:document.body;let e,o=[];const i=Ln(()=>o.map(p=>p(n)),t),l=p=>{e||(e=ut(n,i)),o.indexOf(p)===-1&&o.push(p)},h=p=>{const y=o.indexOf(p);y!==-1&&o.splice(y,1),o.length===0&&e&&x()},x=()=>{e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",i,!1),e.parentNode.removeChild(e),e=void 0,o=[])};return{element:n,bind:l,unbind:h,destroy:x}},ft=(n={})=>{const t=(0,_.useRef)(0),[e,o]=(0,_.useState)(n),i=(0,_.useCallback)(l=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>o(l))},[]);return(0,_.useEffect)(()=>()=>cancelAnimationFrame(t.current),[]),[e,i]},Un=(n=null,t=60)=>{const e=L(n)?n.current:n,{bind:o,destroy:i}=ht(e,t),[l,h]=ft(fn(e));return(0,_.useEffect)(()=>(o(()=>e&&h(fn(e))),()=>i()),[e]),l},pn=w(145),X={};X.styleTagTransform=C(),X.setAttributes=S(),X.insert=d().bind(null,"head"),X.domAPI=c(),X.insertStyleElement=v();var Ie=a()(pn.Z,X),H=pn.Z&&pn.Z.locals?pn.Z.locals:void 0,pt=({children:n,active:t=0,delay:e=5e3,className:o,...i})=>{const[l,h]=(0,_.useState)(t+1),[x,p]=(0,_.useState)(!1),y=(0,_.useRef)(),g=(0,_.useRef)(""),{width:k}=Un(y);n=Array.isArray(n)?n:[n];const b=n[0],M=[n[n.length-1],...n,b],E=M.length;dt(()=>{let D=l+1;D=D===E?1:D,g.current&&(g.current=""),h(D),D===E-1&&setTimeout(()=>{g.current="none",h(1)},500)},x?null:e);const T=(D,O)=>{O.stopPropagation(),g.current="",h(D),(0,An.flushSync)(()=>p(!0)),p(!1)},A={width:`${E*k}px`,transform:`translateX(${-k*l}px)`,transition:g.current};return(0,r.jsxs)("div",{className:`${H["huxy-carousel"]}${o?` ${o}`:""}`,...i,ref:y,children:[(0,r.jsx)("div",{className:H["huxy-carousel-wrap"],style:A,children:M.map((D,O)=>(0,r.jsx)("div",{className:`${H["carousel-item"]} ${l===O?H.active:""}`,style:{width:`${k}px`},children:D},`huxy-carousel-${O}`))}),(0,r.jsx)("div",{className:H["carousel-switch"],children:n.map((D,O)=>(0,r.jsx)("span",{className:`${H.dot} ${l===O+1?H.active:""}`,onClick:Z=>T(O+1,Z)},`huxy-carousel-switch-${O}`))})]})};const cn=(n,t)=>{let e="",o="";if(typeof t=="number"&&(e=`col-${n}-${t}`),typeof t=="object"){const{span:i,offset:l}=t;e=i?`col-${n}-${i}`:"",o=l?`offset-${n}-${l}`:""}return{sp:e,os:o}};var xt=(0,_.forwardRef)(({span:n,offset:t,xl:e,lg:o,md:i,sm:l,xs:h,style:x,width:p,auto:y,offsetWidth:g="0px",className:k,...b},I)=>{const M=k?` ${k}`:"",E=`col-${n||12}`,T=t?`offset-${t}`:"",{sp:A,os:D}=cn("xs",h),{sp:O,os:Z}=cn("sm",l),{sp:zn,os:In}=cn("md",i),{sp:Y,os:On}=cn("lg",o),{sp:Tn,os:N}=cn("xl",e),F=[E,Tn,Y,zn,O,A,T,N,On,In,Z,D].filter(Boolean).join(" "),sn=y?{width:"auto",flex:1,maxWidth:`calc(100% - ${g})`}:{width:p};return(0,r.jsx)("div",{className:`${F}${M}`,...b,style:{...sn,...x},ref:I})}),Zn=()=>{const n=(0,_.useRef)(!0);return n.current?(n.current=!1,!0):!1},_t=(n,t=[])=>{const e=Zn();(0,_.useEffect)(()=>{if(!e)return n()},t)},Nn=(n,t=450)=>{const[e,o]=(0,_.useState)(n);return _t(()=>{let i;return n||t===0?o(n):i=setTimeout(()=>o(n),t),()=>i&&clearTimeout(i)},[n]),[e,o]},Dn=({children:n,mountNode:t=document.body})=>(0,An.createPortal)(n,t);const mt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},yt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},gt={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},bt=document.body;var jn=({open:n,close:t,delay:e=300,children:o,mountNode:i,hasMask:l=!0,style:h,className:x="h-mask"})=>{const[p]=Nn(n,e);return bt.style.overflow=p?"hidden":"",(0,r.jsx)(Dn,{mountNode:i,children:(0,r.jsx)("div",{children:p?(0,r.jsxs)("div",{className:x,style:mt,children:[l?(0,r.jsx)("div",{style:yt,onClick:y=>t==null?void 0:t(y)}):null,(0,r.jsx)("div",{style:{...gt,...h},children:o})]}):null})})},xn=w(842),G={};G.styleTagTransform=C(),G.setAttributes=S(),G.insert=d().bind(null,"head"),G.domAPI=c(),G.insertStyleElement=v();var Ue=a()(xn.Z,G),J=xn.Z&&xn.Z.locals?xn.Z.locals:void 0,wt=({open:n,close:t,footer:e,header:o,className:i,children:l,width:h="300px"})=>{var x;const p=["drawer-wrap",n?"open":"",...(x=i==null?void 0:i.split(" "))!=null?x:[]].filter(Boolean).map(y=>J[y]).join(" ");return(0,r.jsx)(jn,{open:n,close:t,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,r.jsx)("div",{className:p,style:{width:h},children:(0,r.jsxs)("div",{className:J["drawer-container"],children:[(0,r.jsxs)("div",{className:J["drawer-header"],children:[(0,r.jsx)("a",{className:J["ico-close"],onClick:y=>t==null?void 0:t(y)}),(0,r.jsx)("div",{children:o})]}),(0,r.jsx)("div",{className:J["drawer-content"],children:l}),e?(0,r.jsx)("div",{className:J["drawer-footer"],children:e}):null]})})})},vt=(n,t,e="click")=>{(0,_.useEffect)(()=>{const o=l=>{const h=L(n)?n.current:n;(h==null?void 0:h.contains)&&!h.contains(l.target)&&t(l)},i=typeof e=="string"?[e]:e;return i.map(l=>{document.addEventListener(l,o,!1)}),()=>{i.map(l=>{document.removeEventListener(l,o,!1)})}},[n,t,e])},kt=n=>(n==null?void 0:n.$$typeof)&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",Et=(n="")=>n.replace(/^\S/,t=>t.toUpperCase()),Q=n=>{var t;if(!!$())return n=L(n)?n.current:n!=null?n:document.body,(t=n.getBoundingClientRect)==null?void 0:t.call(n)},zt=n=>{if(!$())return;const t=document.createElement("div");return t.innerHTML=n,t.children[0]},un=(n,t={},e=!1)=>{!Pn(n)||Object.keys(t).map(o=>{n.style.setProperty(o,e?"":t[o])})};const Ct=(n=350)=>new Promise(t=>setTimeout(t,n)),Ve=(n=100)=>{const t=Date.now();for(;Date.now()-t<=n;);};var St=Ct,Pt=async(n,t=15)=>{if(!$())return;if(typeof n=="string"&&(n=zt(n)),n=L(n)?n.current:n,!Pn(n))return{};const e=n.cloneNode(!0);un(e,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(e),await St(t);const o=Q(e);return n.parentNode.removeChild(e),o};const Dt=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,jt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Fn=(n,t)=>{var e;t=`huxy-drop-arrow-${t}`;const o=(e=n.getAttribute("class"))!=null?e:"";Dt.test(o)?n.setAttribute("class",o.replace(jt,t)):n.setAttribute("class",`${o} ${t}`)},$n=async(n,t,e)=>{const{left:o,right:i,top:l,bottom:h}=Q(n),{width:x,height:p}=fn(),{width:y,height:g}=await Pt(t);if(i<0||h<0||o>x||l>p)return{};if(e==="vertical"){const k={left:o+"px",top:h+10+"px",right:"auto",bottom:"auto"};let b="lt";o+y>x&&(k.left=i-y+"px",b="rt"),h+10+g>p&&(k.top=l-10-g+"px",b=b==="lt"?"lb":"rb"),un(t,k),Fn(t,b)}else{const k={left:i+10+"px",top:l+"px",right:"auto",bottom:"auto"};let b="tl";i+10+y>x&&(k.left=o-10-y+"px",b="tr"),l+g>p&&(k.top=h-g+"px",b=b==="tl"?"bl":"br"),un(t,k),Fn(t,b)}};var Mt=(n,t,e="horizontal")=>{const o=Ln($n),i=()=>o(n,t,e);window.addEventListener("scroll",i,!1),window.addEventListener("resize",i,!1);const l=()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),un(t,{left:"",top:"",right:"",bottom:""})};return $n(n,t,e),l},It=({open:n,delay:t=250,children:e,mountNode:o,style:i,className:l="huxy-mask"})=>{const[h]=Nn(n,t);return(0,r.jsx)(Dn,{mountNode:o,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:l,children:(0,r.jsx)("div",{style:{...i,display:h?"block":"none"},children:e})})})})},_n=w(563),q={};q.styleTagTransform=C(),q.setAttributes=S(),q.insert=d().bind(null,"head"),q.domAPI=c(),q.insertStyleElement=v();var Qe=a()(_n.Z,q),Kn=_n.Z&&_n.Z.locals?_n.Z.locals:void 0,Ot=({trigger:n="click",type:t,dropList:e,className:o,children:i,...l})=>{const[h,x]=(0,_.useState)(!1),p=(0,_.useRef)(),y=(0,_.useRef)(),g=(0,_.useRef)();vt(p,E=>h&&x(!1),[...new Set(["click",n.toLowerCase()])]),(0,_.useEffect)(()=>()=>{var E;return(E=g.current)==null?void 0:E.call(g)},[]);const k=E=>{E.preventDefault(),x(!0),g.current=Mt(p.current,y.current,t)},b={[`on${Et(n)}`]:k},I=["drop-wrap",h?"open":""].filter(Boolean).map(E=>Kn[E]).join(" "),M=kt(e)?e:e==null?void 0:e(()=>x(!1),h);return(0,r.jsxs)("span",{ref:p,className:`${Kn["drop-target"]}${o?` ${o}`:""}`,...b,...l,children:[i,(0,r.jsx)(It,{open:h,className:"huxy-drop",children:(0,r.jsx)("div",{ref:y,className:I,children:M})})]})},Tt=(n,t={},e)=>{if(!$())return;e=L(e)?e.current:e!=null?e:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&un(o,t),o.innerText=n,e.appendChild(o);const i=o.getBoundingClientRect();return e.removeChild(o),i},mn=w(626),nn={};nn.styleTagTransform=C(),nn.setAttributes=S(),nn.insert=d().bind(null,"head"),nn.domAPI=c(),nn.insertStyleElement=v();var tr=a()(mn.Z,nn),Hn=mn.Z&&mn.Z.locals?mn.Z.locals:void 0,Yn=({title:n,placement:t="topRight",children:e,ellipsis:o,className:i,...l})=>(0,r.jsx)("span",{className:`${Hn[`huxy-tooltip-${t}`]}${i?` ${i}`:""}`,tooltip:n!=null?n:e,...l,children:(0,r.jsx)("span",{className:o?Hn.ellipsis:"",children:e})});const Rt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var Wt=n=>{var t,e,o,i;const{children:l}=n,h=typeof l=="string",x=h?l:(o=(t=l==null?void 0:l.props)==null?void 0:t.title)!=null?o:(e=l==null?void 0:l.props)==null?void 0:e.children,p=(0,_.useRef)(),[y,g]=(0,_.useState)(!1),k=Un(p,250);return(0,_.useEffect)(()=>{if(p.current){const{width:b}=Tt(x),{width:I}=Q(p.current),M=b>I;M!==y&&g(M)}},[x,k.width]),(0,r.jsx)("span",{ref:p,style:{width:"100%",display:"inline-block"},children:y?h?(0,r.jsx)(Yn,{...n,ellipsis:!0}):(0,r.jsx)("span",{style:Rt,children:l}):h?l:(i=l==null?void 0:l.props)==null?void 0:i.children})},At=Object.defineProperty,Bt=(n,t,e)=>t in n?At(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Lt=(n,t,e)=>(Bt(n,typeof t!="symbol"?t+"":t,e),e);class Vn extends st().Component{constructor(){super(...arguments),Lt(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,e){const{errorReport:o}=this.props;typeof o=="function"&&o({error:t,info:e.componentStack})}render(){const{error:t}=this.state,{fallback:e,children:o}=this.props;return t?e(t):o}}var Xn=n=>t=>{if(typeof t=="function"||typeof(t==null?void 0:t.render)=="function")return(0,r.jsx)(t,{});if(typeof t=="string"){const e=n==null?void 0:n[t];return e?(0,r.jsx)(e,{}):(0,r.jsx)("i",{className:t})}return t!=null?t:null};const Ut=n=>Xn(n);var Zt=n=>({icon:t,defaultIcon:e=null})=>t?Ut(n)(t):t===!1?null:e;const yn=["","webkit","moz","ms"],Nt=n=>yn.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>n[t]),Ft=n=>yn.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>n[t]),$t=n=>yn.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>n[t]),Gn=yn.map(n=>`${n}fullscreenchange`);var Kt=n=>{var t,e;if(!$())return;n=L(n)?n.current:n!=null?n:document.body;const o=Nt(document),i=Ft(n),l=$t(document);document[o]?(e=document[l])==null||e.call(document):(t=n[i])==null||t.call(n)},Ht=n=>$()?(Gn.map(e=>document.addEventListener(e,n,!1)),()=>Gn.map(e=>document.removeEventListener(e,n,!1))):void 0;const Jn=n=>(0,r.jsx)("i",{...n,children:"..."});var Yt=({panel:n,fullIcon:t=Jn,exitIcon:e=Jn,...o})=>{const i=L(n)?n.current:n,[l,h]=(0,_.useState)();(0,_.useEffect)(()=>{const p=Ht(()=>{h(y=>!y)});return()=>p()},[]);const x=l?e:t;return(0,r.jsx)(x,{onClick:p=>Kt(i),...o})},Qn=(n,t)=>(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...t}),qn=n=>{const{error:t={},info:e=""}=n||{},{message:o,stack:i,errMsg:l}=t;let h=l||i||t.toString();h=`${h}
${e}`.replace(/\r|\n|\r\n/g,"<br/>"),h=h.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),h=h.replace(/\s/g,"&nbsp;");const x=o==null?void 0:o.slice(0,120).split(". ").slice(0,2).join(". ");return(0,r.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Qn(h,{style:{color:"red"}}),x&&(0,r.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${x}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Vt=({children:n,report:t})=>{var e;const o=(0,_.useRef)();return(e=o.current)!=null&&e.state&&(o.current.state.error=null),(0,r.jsx)(Vn,{ref:o,fallback:(i,l)=>qn({error:i,info:l}),errorReport:t,children:n})};const nt=(n,t)=>Object.keys(t).map(e=>n.style[e]=t[e]),Xt=(n,t)=>Object.keys(t).map(e=>n.style[e]=""),Gt={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},tt=({left:n,top:t,width:e,height:o})=>({left:`${n}px`,top:`${t}px`,width:`${e}px`,height:`${o}px`}),et=n=>(0,r.jsx)("i",{...n,children:"..."}),rt=n=>{const{left:t,top:e}=Q(n),{width:o,height:i}=fn(n);return{left:t,top:e,width:o,height:i}};var Jt=({panel:n,target:t,fullIcon:e=et,exitIcon:o=et})=>{n=L(n)?n.current:n||document.body;const[i,l]=(0,_.useState)(),h=(0,_.useRef)(),x=(0,_.useRef)();(0,_.useEffect)(()=>{const g=typeof t=="function"?t:()=>document.getElementsByClassName(t)[0];x.current=tt(rt(g())),h.current={...Gt,...tt(rt(n))}},[n]);const p=(g,k)=>{g?(nt(k,h.current),setTimeout(()=>{nt(k,x.current)},0)):Xt(k,h.current),l(g)},y=i?o:e;return(0,r.jsx)(y,{onClick:g=>p(!i,n)})},gn=w(697),tn={};tn.styleTagTransform=C(),tn.setAttributes=S(),tn.insert=d().bind(null,"head"),tn.domAPI=c(),tn.insertStyleElement=v();var fr=a()(gn.Z,tn),U=gn.Z&&gn.Z.locals?gn.Z.locals:void 0,Qt=({open:n,close:t,hasMask:e=!0,cancelText:o="\u53D6\u6D88",submit:i,submitText:l="\u786E\u5B9A",title:h="Modal \u5F39\u7A97",className:x,children:p,delay:y=250})=>{var g;const k=["modal-wrap",n?"open":"",...(g=x==null?void 0:x.split(" "))!=null?g:[]].filter(Boolean).map(b=>U[b]).join(" ");return(0,r.jsx)(jn,{open:n,close:t,delay:y,hasMask:e,className:"huxy-modal",children:(0,r.jsx)("div",{className:k,children:(0,r.jsxs)("div",{className:U["modal-container"],children:[(0,r.jsx)("div",{className:U["modal-header"],children:h}),(0,r.jsx)("div",{className:U["modal-content"],children:p}),(0,r.jsxs)("div",{className:U["modal-footer"],children:[(0,r.jsx)("div",{className:`${U.btn} ${U.left}`,onClick:b=>t==null?void 0:t(b),children:o}),(0,r.jsx)("div",{className:`${U.btn} ${U.right}`,onClick:b=>i==null?void 0:i(b),children:l})]})]})})})},bn=w(201),en={};en.styleTagTransform=C(),en.setAttributes=S(),en.insert=d().bind(null,"head"),en.domAPI=c(),en.insertStyleElement=v();var xr=a()(bn.Z,en),_r=bn.Z&&bn.Z.locals?bn.Z.locals:void 0,ot=({global:n,absolute:t})=>(0,r.jsx)("div",{className:`spinner${n?" global":""}${t?" absolute":""}`,children:(0,r.jsx)("figure",{className:"spinning"})}),wn=w(810),rn={};rn.styleTagTransform=C(),rn.setAttributes=S(),rn.insert=d().bind(null,"head"),rn.domAPI=c(),rn.insertStyleElement=v();var yr=a()(wn.Z,rn),hn=wn.Z&&wn.Z.locals?wn.Z.locals:void 0;const qt=n=>{var t;return(t=n==null?void 0:n.filter)==null?void 0:t.call(n,e=>typeof e=="function")},ne=(n,t)=>{const e=(0,_.useRef)(),{loading:o,title:i,plugins:l,children:h,className:x,...p}=n,y=qt(l),g=y==null?void 0:y.length,k=x?` ${x}`:"",b=L(t)?t:e;return(0,r.jsxs)("div",{className:`${hn.panel}${k}`,...p,ref:b,children:[(i||g)&&(0,r.jsxs)("div",{className:hn["panel-header"],children:[i&&(0,r.jsx)("h4",{className:hn["panel-title"],children:i}),g&&(0,r.jsx)("div",{className:hn["panel-plugins"],children:y.map((I,M)=>(0,r.jsx)("a",{children:(0,r.jsx)(I,{panel:b})},M))})]}),(0,r.jsx)("div",{className:hn["panel-body"],children:h}),o&&(0,r.jsx)(ot,{})]})};var te=(0,_.forwardRef)(ne),vn=w(31),on={};on.styleTagTransform=C(),on.setAttributes=S(),on.insert=d().bind(null,"head"),on.domAPI=c(),on.insertStyleElement=v();var gr=a()(vn.Z,on),br=vn.Z&&vn.Z.locals?vn.Z.locals:void 0;const ee=({gutter:n=10,className:t,overflow:e="hidden",...o},i)=>{var l;const h=t?` ${t}`:"";let x=10;if(Array.isArray(n)){const p=[...n];n=p[0],x=(l=p[1])!=null?l:p[0]}return(0,r.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(x/2)}px`,overflow:e},children:(0,r.jsx)("div",{className:`row${h}`,...o,ref:i})})};var re=(0,_.forwardRef)(ee),Mn=n=>Bn(n)==="array",oe=n=>Mn(n)&&!!n.length;const ae=({item:n,to:t,preventDefault:e,stopPropagation:o,...i})=>(0,r.jsx)("a",{href:e?null:t,...i}),ie=({item:n,...t})=>(0,r.jsx)("ul",{...t}),le=(n,...t)=>{const e={};return Object.keys(n).filter(Boolean).map(o=>{e[o]=i=>n[o](i,...t)}),e},at=({data:n=[],events:t={},List:e=ie,Link:o=ae,leftIcon:i,rightIcon:l,level:h=0})=>n.map(x=>{const{name:p,path:y,icon:g,rightIcon:k,active:b,open:I,children:M,linkProps:E}=x,T=oe(M),A=le(t,x,h,T),D=x.id||y||p,O=g!=null?g:i,Z=k!=null?k:l;return T?(0,r.jsxs)("li",{className:I?"open":"","has-children":"true",...A,children:[(0,r.jsxs)(o,{item:{...x,level:h},className:b?"active":"",to:y,preventDefault:!0,stopPropagation:!1,...E,children:[O?(0,r.jsx)("div",{className:"node-left-icon",children:O===!0?(0,r.jsx)("i",{className:"default-left-icon"}):O}):null,p?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:p})}):null,Z?(0,r.jsx)("div",{className:"node-right-icon",children:Z===!0?(0,r.jsx)("i",{className:"default-right-icon"}):Z}):null]}),(0,r.jsx)(e,{item:x,children:at({data:M,events:t,List:e,Link:o,leftIcon:i,rightIcon:l,level:h+1})})]},D):(0,r.jsx)("li",{...A,children:(0,r.jsxs)(o,{item:{...x,level:h},className:b?"active":"",to:y,...E,children:[O?(0,r.jsx)("div",{className:"node-left-icon",children:O===!0?(0,r.jsx)("i",{className:"default-left-icon"}):O}):null,p?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:p})}):null]})},D)});var it=at,se=(n,...t)=>(0,r.jsx)("div",{"v-html":n,...t}),kn=w(289),an={};an.styleTagTransform=C(),an.setAttributes=S(),an.insert=d().bind(null,"head"),an.domAPI=c(),an.insertStyleElement=v();var Er=a()(kn.Z,an),zr=kn.Z&&kn.Z.locals?kn.Z.locals:void 0;const de=n=>(0,r.jsx)("div",{style:{padding:"6px 15px"},children:n}),ce=({activekey:n,tabs:t=[],switchTab:e,trackColor:o,flex:i},l)=>{var h;const[x,p]=(0,_.useState)(n!=null?n:(h=t[0])==null?void 0:h.key),[y,g]=(0,_.useState)({}),k=(0,_.useRef)({}),b=(0,_.useRef)();(0,_.useEffect)(()=>{const E=k.current[x];E&&I(E)},[]);const I=E=>{const{left:T,width:A}=Q(E),D=Q(b.current).left;g({left:T-D,width:A})},M=(E,T)=>{E.stopPropagation(),p(T),typeof e=="function"&&e(T),I(E.currentTarget)};return(0,r.jsxs)("div",{className:"tabs-header-wrap",ref:l,children:[(0,r.jsx)("ul",{className:`tabs-header${i?" flex":""}`,ref:b,children:t.map(E=>(0,r.jsx)("li",{ref:T=>k.current[E.key]=T,className:`th-item${x===E.key?" active":""}`,onClick:T=>M(T,E.key),children:typeof E.renderTabs=="function"?E.renderTabs(E,x===E.key):de(E.value)},E.key))}),(0,r.jsx)("div",{className:"th-track",style:{...y,color:o}})]})};var ue=(0,_.forwardRef)(ce),he=(n,t,e="id",o="children")=>{if(!Mn(n))return null;const i=l=>{for(let h=0,x=l.length;h<x;h++){const p=l[h];if(p[e]===t)return[p];if(Mn(p[o])){const y=i(p[o]);if(y)return[p].concat(y)}}};return i(n)},fe=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),pe=()=>{let n=fe();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=(n+Math.random()*16)%16|0;return n=Math.floor(n/16),(t==="x"?e:e&3|8).toString(16)})};const xe=n=>++n;var _e=()=>{const[,n]=(0,_.useState)(0);return(0,_.useCallback)(()=>n(xe),[])},me=({item:n,style:t,...e})=>{var o;const{uuid:i,open:l}=n,h=(0,_.useRef)(),x=(0,_.useRef)(),p=Zn(),[y,g]=(0,_.useState)("");return(0,_.useEffect)(()=>{const k=h.current,b=l?`${k.scrollHeight}px`:"0px";g(b)},[]),(0,_.useEffect)(()=>{if(p)return;const k=h.current,b=l?"0px":`${k.scrollHeight}px`;return g(b),x.current=setTimeout(()=>{const I=l?`${k.scrollHeight}px`:"0px";g(I)},5),()=>clearTimeout(x.current)},[l,(o=n.children)==null?void 0:o.length]),(0,_.useEffect)(()=>{i&&g("")},[i]),(0,r.jsx)("ul",{ref:h,style:{...t,maxHeight:y},...e})},En=w(435),ln={};ln.styleTagTransform=C(),ln.setAttributes=S(),ln.insert=d().bind(null,"head"),ln.domAPI=c(),ln.insertStyleElement=v();var Mr=a()(En.Z,ln),Ir=En.Z&&En.Z.locals?En.Z.locals:void 0;const ye=n=>(0,r.jsx)("ul",{...n}),ge=(n,t)=>n?({item:e,...o})=>(0,r.jsx)(ye,{className:t==="right"?"left":"",...o}):me;var be=n=>{var t;const{data:e=[],collapsed:o=!1,type:i="vertical",Link:l,width:h,bgColor:x,itemHeight:p,collapsedWidth:y,itemPadding:g,style:k,className:b,...I}=n,M=(0,_.useRef)(),E=(0,_.useRef)();(0,_.useEffect)(()=>()=>clearTimeout(M.current),[]);const T=_e(),A=i==="horizontal",D=!A&&o,O={onClick:(N,F)=>{N.stopPropagation(),!A&&!D&&(he(e,F.path,"path").map(K=>K.path===F.path?K.open=!K.open:K.uuid=pe()),T())},onMouseEnter:(N,F,sn,K)=>{D&&!sn&&K&&(clearTimeout(M.current),E.current.style.width="var(--maxWidth)")},onMouseLeave:(N,F,sn,K)=>{D&&!sn&&K&&(M.current=setTimeout(()=>E.current.style.width="",200))}},Z=(A?["huxy-horizontal-tree",b]:["huxy-tree",b,D?"collapsed":""]).filter(Boolean).join(" "),{float:zn,...In}=(t=I==null?void 0:I.style)!=null?t:{},Y={"--bgColor":x,"--itemHeight":p,"--nodeListWidth":h,...In};i==="horizontal"?(Y["--itemPadding"]=g,Y["--nodeFloat"]=zn):(Y["--width"]=h,Y["--collapsedWidth"]=y);const On=ge(A||D,zn),Tn=({item:N,...F})=>D&&!N.level?(0,r.jsx)(l,{...F,title:N.title||N.name}):(0,r.jsx)(l,{...F});return(0,r.jsx)("div",{ref:E,className:Z,style:Y,...I,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:it({data:e,events:O,List:On,Link:Tn,leftIcon:!0,rightIcon:!0})})})})}}(),Cn}()});
