import*as Ce from"react";import*as et from"react-dom";var Pe={269:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`/*@height:2px;
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
`,""]),l.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const m=l},528:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`.kLIGi {
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
`,""]),l.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const m=l},434:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`@keyframes animate-drawer-right-in {
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
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]),l.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const m=l},503:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`@keyframes animate-drop-in {
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
`,""]),l.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const m=l},548:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`@keyframes animate-modal-in {
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
`,""]),l.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const m=l},232:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`.clear::after {
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
`,""]),l.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const m=l},249:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`.cols-1 {
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
`,""]),l.locals={};const m=l},990:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`@keyframes before {
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
`,""]),l.locals={};const m=l},575:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`.clear::after {
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
`,""]),l.locals={};const m=l},918:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`.ofth_ {
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
`,""]),l.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const m=l},942:(r,u,a)=>{a.d(u,{Z:()=>m});var x=a(601),s=a.n(x),h=a(609),c=a.n(h),l=c()(s());l.push([r.id,`.node-right-icon-close {
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
`,""]),l.locals={};const m=l},609:r=>{r.exports=function(u){var a=[];return a.toString=function(){return this.map(function(s){var h="",c=typeof s[5]<"u";return s[4]&&(h+="@supports (".concat(s[4],") {")),s[2]&&(h+="@media ".concat(s[2]," {")),c&&(h+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),h+=u(s),c&&(h+="}"),s[2]&&(h+="}"),s[4]&&(h+="}"),h}).join("")},a.i=function(s,h,c,l,m){typeof s=="string"&&(s=[[null,s,void 0]]);var O={};if(c)for(var k=0;k<this.length;k++){var A=this[k][0];A!=null&&(O[A]=!0)}for(var P=0;P<s.length;P++){var C=[].concat(s[P]);c&&O[C[0]]||(typeof m<"u"&&(typeof C[5]>"u"||(C[1]="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {").concat(C[1],"}")),C[5]=m),h&&(C[2]&&(C[1]="@media ".concat(C[2]," {").concat(C[1],"}")),C[2]=h),l&&(C[4]?(C[1]="@supports (".concat(C[4],") {").concat(C[1],"}"),C[4]=l):C[4]="".concat(l)),a.push(C))}},a}},601:r=>{r.exports=function(u){return u[1]}},837:(r,u,a)=>{var x;var s=a(810),h=Symbol.for("react.element"),c=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,m=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function k(A,P,C){var T,L={},B=null,zn=null;C!==void 0&&(B=""+C),P.key!==void 0&&(B=""+P.key),P.ref!==void 0&&(zn=P.ref);for(T in P)l.call(P,T)&&!O.hasOwnProperty(T)&&(L[T]=P[T]);if(A&&A.defaultProps)for(T in P=A.defaultProps,P)L[T]===void 0&&(L[T]=P[T]);return{$$typeof:h,type:A,key:B,ref:zn,props:L,_owner:m.current}}x=c,u.jsx=k,u.jsxs=k},322:(r,u,a)=>{r.exports=a(837)},62:r=>{var u=[];function a(h){for(var c=-1,l=0;l<u.length;l++)if(u[l].identifier===h){c=l;break}return c}function x(h,c){for(var l={},m=[],O=0;O<h.length;O++){var k=h[O],A=c.base?k[0]+c.base:k[0],P=l[A]||0,C="".concat(A," ").concat(P);l[A]=P+1;var T=a(C),L={css:k[1],media:k[2],sourceMap:k[3],supports:k[4],layer:k[5]};if(T!==-1)u[T].references++,u[T].updater(L);else{var B=s(L,c);c.byIndex=O,u.splice(O,0,{identifier:C,updater:B,references:1})}m.push(C)}return m}function s(h,c){var l=c.domAPI(c);l.update(h);var m=function(k){if(k){if(k.css===h.css&&k.media===h.media&&k.sourceMap===h.sourceMap&&k.supports===h.supports&&k.layer===h.layer)return;l.update(h=k)}else l.remove()};return m}r.exports=function(h,c){c=c||{},h=h||[];var l=x(h,c);return function(O){O=O||[];for(var k=0;k<l.length;k++){var A=l[k],P=a(A);u[P].references--}for(var C=x(O,c),T=0;T<l.length;T++){var L=l[T],B=a(L);u[B].references===0&&(u[B].updater(),u.splice(B,1))}l=C}}},793:r=>{var u={};function a(s){if(typeof u[s]>"u"){var h=document.querySelector(s);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}u[s]=h}return u[s]}function x(s,h){var c=a(s);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(h)}r.exports=x},173:r=>{function u(a){var x=document.createElement("style");return a.setAttributes(x,a.attributes),a.insert(x,a.options),x}r.exports=u},892:(r,u,a)=>{function x(s){var h=a.nc;h&&s.setAttribute("nonce",h)}r.exports=x},36:r=>{function u(s,h,c){var l="";c.supports&&(l+="@supports (".concat(c.supports,") {")),c.media&&(l+="@media ".concat(c.media," {"));var m=typeof c.layer<"u";m&&(l+="@layer".concat(c.layer.length>0?" ".concat(c.layer):""," {")),l+=c.css,m&&(l+="}"),c.media&&(l+="}"),c.supports&&(l+="}");var O=c.sourceMap;O&&typeof btoa<"u"&&(l+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O))))," */")),h.styleTagTransform(l,s,h.options)}function a(s){if(s.parentNode===null)return!1;s.parentNode.removeChild(s)}function x(s){var h=s.insertStyleElement(s);return{update:function(l){u(h,s,l)},remove:function(){a(h)}}}r.exports=x},464:r=>{function u(a,x){if(x.styleSheet)x.styleSheet.cssText=a;else{for(;x.firstChild;)x.removeChild(x.firstChild);x.appendChild(document.createTextNode(a))}}r.exports=u},810:r=>{var u=x=>{var s={};return E.d(s,x),s},a=x=>()=>x;r.exports=Ce}},rt={};function E(r){var u=rt[r];if(u!==void 0)return u.exports;var a=rt[r]={id:r,exports:{}};return Pe[r](a,a.exports,E),a.exports}E.n=r=>{var u=r&&r.__esModule?()=>r.default:()=>r;return E.d(u,{a:u}),u},E.d=(r,u)=>{for(var a in u)E.o(u,a)&&!E.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:u[a]})},E.o=(r,u)=>Object.prototype.hasOwnProperty.call(r,u),E.nc=void 0;var S={};(()=>{E.d(S,{PC:()=>ot,rK:()=>ct,lr:()=>mt,JX:()=>_t,dy:()=>Et,Ud:()=>Wt,mH:()=>Lt,SV:()=>Nn,Hn:()=>Jt,V7:()=>Qt,AN:()=>Vn,zd:()=>Tn,BQ:()=>te,u_:()=>ee,s_:()=>ae,h_:()=>Dn,X2:()=>le,$j:()=>Qn,GK:()=>xe,u:()=>Fn,mp:()=>ve,C2:()=>Kn,pC:()=>$t,ff:()=>nt,d2:()=>Hn,Uw:()=>ue});var r=E(322),u=E(62),a=E.n(u),x=E(36),s=E.n(x),h=E(793),c=E.n(h),l=E(892),m=E.n(l),O=E(173),k=E.n(O),A=E(464),P=E.n(A),C=E(269),T={};T.styleTagTransform=P(),T.setAttributes=m(),T.insert=c().bind(null,"head"),T.domAPI=s(),T.insertStyleElement=k();var L=a()(C.Z,T);const B=C.Z&&C.Z.locals?C.Z.locals:void 0,ot=n=>(0,r.jsx)("span",{className:B.anico,children:(0,r.jsx)("span",{className:[B.hline,...(n.type||"").split(" ").map(t=>B[t]).filter(Boolean)].join(" ")})});var f=E(810);const at=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),it=n=>new Promise((t,e)=>{const o=new FileReader;o.readAsDataURL(n),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",i=>e(i))}),lt=async n=>{if(!at(n))return n;const e=await(await fetch(n)).blob();return await it(e)},st=n=>{const[t,e]=(0,f.useState)(n);return(0,f.useEffect)(()=>{(async i=>{const d=await lt(i);e(d)})(n)},[]),t},ct=({src:n,...t})=>{const e=st(n);return(0,r.jsx)("img",{decoding:"async",loading:"lazy",...t,src:e})};var dt=n=>{var t={};return E.d(t,n),t},or=n=>()=>n;const In=dt({createPortal:()=>et.createPortal,flushSync:()=>et.flushSync}),ht=(n,t)=>{const e=(0,f.useRef)();(0,f.useEffect)(()=>{e.current=n},[n]),(0,f.useEffect)(()=>{if(t){const o=setInterval(()=>e.current(),t);return()=>clearInterval(o)}},[t])},H=()=>![typeof window,typeof document].includes("undefined"),Mn=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),Sn=n=>Mn(n).indexOf("element")>-1,fn=(n=null)=>H()?Sn(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Rn=(n=()=>{},t=60)=>{let e=null;return function(...o){clearTimeout(e),e=setTimeout(()=>n.apply(this,o),t)}},ut=(n,t)=>Object.prototype.hasOwnProperty.call(n??{},t),F=n=>ut(n,"current"),An=(n,t)=>{const e=[],o=n.children??[];for(let i=0,d=o.length;i<d;i++){const p=o[i];p.className.indexOf(t)>-1&&e.push(p)}return e.length===0?null:e.length===1?e[0]:e},pt=(n,t)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const e=document.createElement("object");return e.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),e.setAttribute("class","resize-sensor"),e.onload=()=>{e.contentDocument.defaultView.addEventListener("resize",t,!1),t()},e.type="text/html",n.appendChild(e),e.data="about:blank",e},ft=(n,t=60)=>{if(!H())return;n=F(n)?n.current:n??document.body;let e=An(n,"resize-sensor"),o=[];const i=Rn(()=>o.map(_=>_(n)),t),d=_=>{An(n,"resize-sensor")||(e=pt(n,i)),o.indexOf(_)===-1&&o.push(_)},p=_=>{const b=o.indexOf(_);b!==-1&&o.splice(b,1),o.length===0&&e&&y()},y=()=>{e&&e.parentNode&&(e.contentDocument&&e.contentDocument.defaultView.removeEventListener("resize",i,!1),e.parentNode.removeChild(e),e=void 0,o=[])};return{element:n,bind:d,unbind:p,destroy:y}},xt=(n={})=>{const t=(0,f.useRef)(0),[e,o]=(0,f.useState)(n),i=(0,f.useCallback)(d=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame(()=>o(d))},[]);return(0,f.useEffect)(()=>()=>cancelAnimationFrame(t.current),[]),[e,i]},yt=(n=null,t=60)=>{const e=F(n)?n.current:n,{bind:o,destroy:i}=ft(e,t),[d,p]=xt(fn(e));return(0,f.useEffect)(()=>(o(()=>e&&p(fn(e))),()=>i()),[e]),d};var xn=E(528),G={};G.styleTagTransform=P(),G.setAttributes=m(),G.insert=c().bind(null,"head"),G.domAPI=s(),G.insertStyleElement=k();var mr=a()(xn.Z,G);const Y=xn.Z&&xn.Z.locals?xn.Z.locals:void 0,mt=({children:n,active:t=0,delay:e=5e3,className:o,...i})=>{const[d,p]=(0,f.useState)(t+1),[y,_]=(0,f.useState)(!1),b=(0,f.useRef)(),w=(0,f.useRef)(""),{width:g}=yt(b);n=Array.isArray(n)?n:[n];const v=n[0],R=[n[n.length-1],...n,v],z=R.length;ht(()=>{let I=d+1;I=I===z?1:I,w.current&&(w.current=""),p(I),I===z-1&&setTimeout(()=>{w.current="none",p(1)},500)},y?null:e);const D=(I,j)=>{j.stopPropagation(),w.current="",p(I),(0,In.flushSync)(()=>_(!0)),_(!1)},W={width:`${z*g}px`,transform:`translateX(${-g*d}px)`,transition:w.current};return(0,r.jsxs)("div",{className:`${Y["huxy-carousel"]}${o?` ${o}`:""}`,...i,ref:b,children:[(0,r.jsx)("div",{className:Y["huxy-carousel-wrap"],style:W,children:R.map((I,j)=>(0,r.jsx)("div",{className:`${Y["carousel-item"]} ${d===j?Y.active:""}`,style:{width:`${g}px`},children:I},`huxy-carousel-${j}`))}),(0,r.jsx)("div",{className:Y["carousel-switch"],children:n.map((I,j)=>(0,r.jsx)("span",{className:`${Y.dot} ${d===j+1?Y.active:""}`,onClick:Z=>D(j+1,Z)},`huxy-carousel-switch-${j}`))})]})},dn=(n,t)=>{let e="",o="";if(typeof t=="number"&&(e=`col-${n}-${t}`),typeof t=="object"){const{span:i,offset:d}=t;e=i?`col-${n}-${i}`:"",o=d?`offset-${n}-${d}`:""}return{sp:e,os:o}},_t=(0,f.forwardRef)(({span:n,offset:t,xl:e,lg:o,md:i,sm:d,xs:p,style:y,width:_,auto:b,offsetWidth:w="0px",className:g,...v},M)=>{const R=g?` ${g}`:"",z=`col-${n||12}`,D=t?`offset-${t}`:"",{sp:W,os:I}=dn("xs",p),{sp:j,os:Z}=dn("sm",d),{sp:pn,os:N}=dn("md",i),{sp:cn,os:V}=dn("lg",o),{sp:$,os:U}=dn("xl",e),X=[z,$,cn,pn,j,W,D,U,V,N,Z,I].filter(Boolean).join(" "),Pn=b?{width:"auto",flex:1,maxWidth:`calc(100% - ${w})`}:{width:_};return(0,r.jsx)("div",{className:`${X}${R}`,...v,style:{...Pn,...y},ref:M})}),gt=()=>{const n=(0,f.useRef)(!0);return n.current?(n.current=!1,!0):!1},bt=(n,t=[])=>{const e=gt();(0,f.useEffect)(()=>{if(!e)return n()},t)},Wn=(n,t=450)=>{const[e,o]=(0,f.useState)(n);return bt(()=>{let i;return n||t===0?o(n):i=setTimeout(()=>o(n),t),()=>i&&clearTimeout(i)},[n]),[e,o]},Dn=({children:n,mountNode:t=document.body})=>(0,In.createPortal)(n,t),wt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},vt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},kt=document.body,Tn=({open:n,close:t,delay:e=300,children:o,mountNode:i,hasMask:d=!0,style:p,className:y="h-mask",relative:_})=>{const[b]=Wn(n,e);(i??kt).style.overflow=b?"hidden":"";const w=_?"absolute":"fixed";return(0,r.jsx)(Dn,{mountNode:i,children:(0,r.jsx)("div",{children:b?(0,r.jsxs)("div",{className:y,style:{...wt,position:w},children:[d?(0,r.jsx)("div",{style:{...vt,position:w},onClick:g=>t?.(g)}):null,f.Children.map(o,g=>(0,f.isValidElement)(g)?(0,f.cloneElement)(g,{style:{position:"relative",zIndex:100001,...g.props.style}}):g)]}):null})})};var yn=E(434),J={};J.styleTagTransform=P(),J.setAttributes=m(),J.insert=c().bind(null,"head"),J.domAPI=s(),J.insertStyleElement=k();var Cr=a()(yn.Z,J);const Q=yn.Z&&yn.Z.locals?yn.Z.locals:void 0,Et=({open:n,close:t,footer:e,header:o,className:i,style:d,children:p,width:y="300px",mountNode:_,position:b="right",relative:w})=>{const g=["drawer-wrap",b,n?"open":"",...i?.split(" ")??[]].filter(Boolean).map(v=>Q[v]).join(" ");return(0,r.jsx)(Tn,{open:n,close:t,delay:250,hasMask:!0,relative:w,mountNode:_,className:"huxy-drawer",children:(0,r.jsx)("div",{className:g,style:{width:y,position:w?"absolute":"fixed",...d},children:(0,r.jsxs)("div",{className:Q["drawer-container"],children:[(0,r.jsxs)("div",{className:Q["drawer-header"],children:[(0,r.jsx)("span",{className:`link ${Q["ico-close"]}`,onClick:v=>t?.(v)}),(0,r.jsx)("div",{children:o})]}),(0,r.jsx)("div",{className:Q["drawer-content"],children:p}),e?(0,r.jsx)("div",{className:Q["drawer-footer"],children:e}):null]})})})},Ct=(n,t,e="click")=>{(0,f.useEffect)(()=>{const o=d=>{const p=F(n)?n.current:n;p?.contains&&!p.contains(d.target)&&t(d)},i=typeof e=="string"?[e]:e;return i.map(d=>{document.addEventListener(d,o,!1)}),()=>{i.map(d=>{document.removeEventListener(d,o,!1)})}},[n,t,e])},Pt=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",zt=(n="")=>n.replace(/^\S/,t=>t.toUpperCase()),q=n=>{if(H())return n=F(n)?n.current:n??document.body,n.getBoundingClientRect?.()},St=n=>{if(!H())return;const t=document.createElement("div");return t.innerHTML=n,t.children[0]},hn=(n,t={},e=!1)=>{if(Sn(n)){if(e){let o="";Object.keys(t).map(i=>{o+=`${i}: ${t[i]};`}),n.style=o;return}Object.keys(t).map(o=>n.style.setProperty(o,t[o]))}},Dt=(n=350)=>new Promise(t=>setTimeout(t,n)),Mr=(n=100)=>{const t=Date.now();for(;Date.now()-t<=n;);},Tt=Dt,Ot=async(n,t=15)=>{if(!H())return;if(typeof n=="string"&&(n=St(n)),n=F(n)?n.current:n,!Sn(n))return{};const e=n.cloneNode(!0);hn(e,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(e),await Tt(t);const o=q(e);return n.parentNode.removeChild(e),o},It=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Mt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,jn=(n,t)=>{t=`huxy-drop-arrow-${t}`;const e=n.getAttribute("class")??"";It.test(e)?n.setAttribute("class",e.replace(Mt,t)):n.setAttribute("class",`${e} ${t}`)},Bn=async(n,t,e)=>{const{left:o,right:i,top:d,bottom:p}=q(n),{width:y,height:_}=fn(),{width:b,height:w}=await Ot(t);if(i<0||p<0||o>y||d>_)return{};if(e==="vertical"){const g={left:o+"px",top:p+10+"px",right:"auto",bottom:"auto"};let v="lt";o+b>y&&(g.left=i-b+"px",v="rt"),p+10+w>_&&(g.top=d-10-w+"px",v=v==="lt"?"lb":"rb"),hn(t,g),jn(t,v)}else{const g={left:i+10+"px",top:d+"px",right:"auto",bottom:"auto"};let v="tl";i+10+b>y&&(g.left=o-10-b+"px",v="tr"),d+w>_&&(g.top=p-w+"px",v=v==="tl"?"bl":"br"),hn(t,g),jn(t,v)}},Rt=(n,t,e="horizontal")=>{const o=Rn(Bn),i=()=>o(n,t,e);window.addEventListener("scroll",i,!1),window.addEventListener("resize",i,!1);const d=()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),hn(t,{left:"",top:"",right:"",bottom:""})};return Bn(n,t,e),d},At=({open:n,delay:t=250,children:e,mountNode:o,style:i,className:d="huxy-mask"})=>{const[p]=Wn(n,t);return(0,r.jsx)(Dn,{mountNode:o,children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:d,children:(0,r.jsx)("div",{style:{...i,display:p?"block":"none"},children:e})})})})};var mn=E(503),nn={};nn.styleTagTransform=P(),nn.setAttributes=m(),nn.insert=c().bind(null,"head"),nn.domAPI=s(),nn.insertStyleElement=k();var jr=a()(mn.Z,nn);const Un=mn.Z&&mn.Z.locals?mn.Z.locals:void 0,Wt=({trigger:n="click",type:t,dropList:e,className:o,wrapStyle:i,children:d,...p})=>{const[y,_]=(0,f.useState)(!1),b=(0,f.useRef)(),w=(0,f.useRef)(),g=(0,f.useRef)();Ct(b,D=>y&&_(!1),[...new Set(["click",n.toLowerCase()])]),(0,f.useEffect)(()=>()=>g.current?.(),[]);const v=D=>{D.preventDefault(),_(!0),g.current=Rt(b.current,w.current,t)},M={[`on${zt(n)}`]:v},R=["drop-wrap",y?"open":""].filter(Boolean).map(D=>Un[D]).join(" "),z=Pt(e)?e:e?.(()=>_(!1),y);return(0,r.jsxs)("span",{ref:b,className:`${Un["drop-target"]}${o?` ${o}`:""}`,...M,...p,children:[d,(0,r.jsx)(At,{open:y,className:"huxy-drop",children:(0,r.jsx)("div",{ref:w,className:R,style:i,children:z})})]})},jt=(n,t,e)=>{if(!H())return;e=F(e)?e.current:e??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&hn(o,t),o.innerText=(n??"").replace(/[\r\n]/g,""),e.appendChild(o);const i=o.getBoundingClientRect();return e.removeChild(o),i};var _n=E(918),tn={};tn.styleTagTransform=P(),tn.setAttributes=m(),tn.insert=c().bind(null,"head"),tn.domAPI=s(),tn.insertStyleElement=k();var Lr=a()(_n.Z,tn);const Ln=_n.Z&&_n.Z.locals?_n.Z.locals:void 0,Fn=({title:n,placement:t="topRight",children:e,ellipsis:o,className:i,...d})=>(0,r.jsx)("span",{className:`${Ln[`huxy-tooltip-${t}`]}${i?` ${i}`:""}`,tooltip:n??e,...d,children:(0,r.jsx)("span",{className:o?Ln.ellipsis:"",children:e})}),Bt={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Ut=n=>{const{children:t,style:e}=n,o=typeof t=="string",i=o?t:t?.props?.title??t?.props?.children,d=(0,f.useRef)(),[p,y]=(0,f.useState)(!0);return(0,f.useEffect)(()=>{if(d.current){const{width:_}=jt(i,null,d.current.parentNode),{width:b}=q(d.current),w=~~_>~~b;w!==p&&y(w)}},[i]),(0,r.jsx)("span",{ref:d,style:{display:"flex",width:"100%",...e},children:p?o?(0,r.jsx)(Fn,{...n,ellipsis:!0}):(0,r.jsx)("span",{style:Bt,children:t}):o?t:t?.props?.children})},Lt=n=>n.children==null?"":(0,r.jsx)(Ut,{...n});var Ft=Object.defineProperty,Nt=(n,t,e)=>t in n?Ft(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Kt=(n,t,e)=>(Nt(n,typeof t!="symbol"?t+"":t,e),e);class Nn extends f.default.Component{constructor(){super(...arguments),Kt(this,"state",{error:null})}static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t,e){const{errorReport:o}=this.props;typeof o=="function"&&o({error:t,info:e.componentStack})}render(){const{error:t}=this.state,{fallback:e,children:o}=this.props;return t?e(t):o}}const Kn=n=>t=>{if(typeof t=="function"||typeof t?.render=="function")return(0,r.jsx)(t,{});if(typeof t=="string"){const e=n?.[t];return e?(0,r.jsx)(e,{}):(0,r.jsx)("i",{className:t})}return t??null},Zt=n=>Kn(n),$t=n=>({icon:t,defaultIcon:e})=>t?Zt(n)(t):t===!1?null:e,gn=["","webkit","moz","ms"],Ht=n=>gn.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>n[t]),Vt=n=>gn.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>n[t]),Yt=n=>gn.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>n[t]),Zn=gn.map(n=>`${n}fullscreenchange`),Xt=n=>{if(!H())return;n=F(n)?n.current:n??document.body;const t=Ht(document),e=Vt(n),o=Yt(document);document[t]?document[o]?.():n[e]?.()},Gt=n=>H()?(Zn.map(e=>document.addEventListener(e,n,!1)),()=>Zn.map(e=>document.removeEventListener(e,n,!1))):void 0,$n=n=>(0,r.jsx)("i",{...n,children:"..."}),Jt=({panel:n,fullIcon:t=$n,exitIcon:e=$n,...o})=>{const i=F(n)?n.current:n,[d,p]=(0,f.useState)();(0,f.useEffect)(()=>{const _=Gt(()=>{p(b=>!b)});return()=>_()},[]);const y=d?e:t;return(0,r.jsx)(y,{onClick:_=>Xt(i),...o})},Hn=(n,t)=>(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...t}),Vn=n=>{const{error:t={},info:e=""}=n||{},{message:o,stack:i,errMsg:d}=t;let p=d||i||t.toString();p=`${p}
${e}`.replace(/\r|\n|\r\n/g,"<br/>"),p=p.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),p=p.replace(/\s/g,"&nbsp;");const y=o?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,r.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Hn(p,{style:{color:"red"}}),y&&(0,r.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${y}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Qt=({children:n,report:t})=>{const e=(0,f.useRef)();return e.current?.state&&(e.current.state.error=null),(0,r.jsx)(Nn,{ref:e,fallback:(o,i)=>Vn({error:o,info:i}),errorReport:t,children:n})},Yn=(n,t)=>Object.keys(t).map(e=>n.style[e]=t[e]),qt=(n,t)=>Object.keys(t).map(e=>n.style[e]=""),ne={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Xn=({left:n,top:t,width:e,height:o})=>({left:`${n}px`,top:`${t}px`,width:`${e}px`,height:`${o}px`}),Gn=n=>(0,r.jsx)("i",{...n,children:"..."}),Jn=n=>{const{left:t,top:e}=q(n),{width:o,height:i}=fn(n);return{left:t,top:e,width:o,height:i}},te=({panel:n,target:t,fullIcon:e=Gn,exitIcon:o=Gn})=>{n=F(n)?n.current:n||document.body;const[i,d]=(0,f.useState)(),p=(0,f.useRef)(),y=(0,f.useRef)();(0,f.useEffect)(()=>{const w=typeof t=="function"?t:()=>document.getElementsByClassName(t)[0];y.current=Xn(Jn(w())),p.current={...ne,...Xn(Jn(n))}},[n]);const _=(w,g)=>{w?(Yn(g,p.current),setTimeout(()=>{Yn(g,y.current)},0)):qt(g,p.current),d(w)},b=i?o:e;return(0,r.jsx)(b,{onClick:w=>_(!i,n)})};var bn=E(548),en={};en.styleTagTransform=P(),en.setAttributes=m(),en.insert=c().bind(null,"head"),en.domAPI=s(),en.insertStyleElement=k();var Qr=a()(bn.Z,en);const K=bn.Z&&bn.Z.locals?bn.Z.locals:void 0,ee=({open:n,close:t,hasMask:e=!0,cancelText:o="\u53D6\u6D88",submit:i,submitText:d="\u786E\u5B9A",title:p="Modal \u5F39\u7A97",className:y,children:_,delay:b=250,...w})=>{const g=["modal-wrap",n?"open":"",...y?.split(" ")??[]].filter(Boolean).map(v=>K[v]).join(" ");return(0,r.jsx)(Tn,{open:n,close:t,delay:b,hasMask:e,className:"huxy-modal",children:(0,r.jsx)("div",{className:g,...w,children:(0,r.jsxs)("div",{className:K["modal-container"],children:[(0,r.jsx)("div",{className:K["modal-header"],children:p}),(0,r.jsx)("div",{className:K["modal-content"],children:_}),(0,r.jsxs)("div",{className:K["modal-footer"],children:[(0,r.jsx)("div",{className:`${K.btn} ${K.left}`,onClick:v=>t?.(v),children:o}),(0,r.jsx)("div",{className:`${K.btn} ${K.right}`,onClick:v=>i?.(v),children:d})]})]})})})};var wn=E(990),rn={};rn.styleTagTransform=P(),rn.setAttributes=m(),rn.insert=c().bind(null,"head"),rn.domAPI=s(),rn.insertStyleElement=k();var no=a()(wn.Z,rn);const to=wn.Z&&wn.Z.locals?wn.Z.locals:void 0,Qn=({global:n,absolute:t})=>(0,r.jsx)("div",{className:`spinner${n?" global":""}${t?" absolute":""}`,children:(0,r.jsx)("figure",{className:"spinning"})});var vn=E(232),on={};on.styleTagTransform=P(),on.setAttributes=m(),on.insert=c().bind(null,"head"),on.domAPI=s(),on.insertStyleElement=k();var ro=a()(vn.Z,on);const un=vn.Z&&vn.Z.locals?vn.Z.locals:void 0,re=n=>n?.filter?.(t=>typeof t=="function"),oe=(n,t)=>{const e=(0,f.useRef)(),{loading:o,title:i,plugins:d,children:p,className:y,..._}=n,b=re(d),w=b?.length,g=y?` ${y}`:"",v=F(t)?t:e;return(0,r.jsxs)("div",{className:`${un.panel}${g}`,..._,ref:v,children:[(i||w)&&(0,r.jsxs)("div",{className:un["panel-header"],children:[i&&(0,r.jsx)("h4",{className:un["panel-title"],children:i}),w&&(0,r.jsx)("div",{className:un["panel-plugins"],children:b.map((M,R)=>(0,r.jsx)("span",{className:"link",children:(0,r.jsx)(M,{panel:v})},R))})]}),(0,r.jsx)("div",{className:un["panel-body"],children:p}),o&&(0,r.jsx)(Qn,{})]})},ae=(0,f.forwardRef)(oe);var kn=E(249),an={};an.styleTagTransform=P(),an.setAttributes=m(),an.insert=c().bind(null,"head"),an.domAPI=s(),an.insertStyleElement=k();var oo=a()(kn.Z,an);const ao=kn.Z&&kn.Z.locals?kn.Z.locals:void 0,ie=({gutter:n=10,className:t,overflow:e="hidden",...o},i)=>{const d=t?` ${t}`:"";let p=10;if(Array.isArray(n)){const y=[...n];n=y[0],p=y[1]??y[0]}return(0,r.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(p/2)}px`,overflow:e},children:(0,r.jsx)("div",{className:`row${d}`,...o,ref:i})})},le=(0,f.forwardRef)(ie),On=n=>Mn(n)==="array",se=n=>On(n)&&!!n.length,ce=({to:n,preventDefault:t,stopPropagation:e,...o})=>t?(0,r.jsx)("span",{...o}):(0,r.jsx)("a",{href:n,...o}),de=({item:n,...t})=>(0,r.jsx)("ul",{...t}),he=(n,...t)=>{const e={};return Object.keys(n).filter(Boolean).map(o=>{e[o]=i=>n[o](i,...t)}),e},qn=({data:n=[],events:t={},List:e=de,Link:o=ce,leftIcon:i,rightIcon:d,isHorizontal:p,isCollapsed:y,level:_=0,parentOpen:b=!0})=>{const w=y&&!_,g=!p&&!y&&!b;return n.map(v=>{const{name:M,path:R,icon:z,rightIcon:D,active:W,open:I,children:j,linkProps:Z}=v,pn=se(j),N=v.id||R||M,cn=w?v.title??M:void 0,V=g?"hidden":"",$=z??i,U=D??d,X=$?(0,r.jsx)("div",{className:"node-left-icon",children:$===!0?(0,r.jsx)("i",{className:"default-left-icon"}):$}):null,Pn=M?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:M})}):null;if(pn){const ke=he(t,v,_),Ee=[V,I?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:Ee,"has-children":"true",...ke,children:[(0,r.jsxs)(o,{title:cn,className:`link${W?" active":""}`,to:R,preventDefault:!0,stopPropagation:!1,...Z,children:[X,Pn,U?(0,r.jsx)("div",{className:"node-right-icon",children:U===!0?(0,r.jsx)("i",{className:"default-right-icon"}):U}):null]}),(0,r.jsx)(e,{item:v,children:qn({data:j,events:t,List:e,Link:o,leftIcon:i,rightIcon:d,isHorizontal:p,isCollapsed:y,level:_+1,parentOpen:!!I})})]},N)}return(0,r.jsx)("li",{className:V,children:(0,r.jsxs)(o,{title:cn,className:`link${W?" active":""}`,to:R,...Z,children:[X,Pn]})},N)})},nt=qn,ue=(n,...t)=>(0,r.jsx)("div",{"v-html":n,...t});var En=E(575),ln={};ln.styleTagTransform=P(),ln.setAttributes=m(),ln.insert=c().bind(null,"head"),ln.domAPI=s(),ln.insertStyleElement=k();var co=a()(En.Z,ln);const ho=En.Z&&En.Z.locals?En.Z.locals:void 0,pe=n=>(0,r.jsx)("div",{style:{padding:"6px 15px"},children:n}),fe=({activekey:n,tabs:t=[],switchTab:e,trackColor:o,flex:i,...d},p)=>{const[y,_]=(0,f.useState)(n??t[0]?.key),[b,w]=(0,f.useState)({}),g=(0,f.useRef)({}),v=(0,f.useRef)();(0,f.useEffect)(()=>{const z=g.current[y];z&&M(z)},[]);const M=z=>{const{left:D,width:W}=q(z),I=q(v.current).left;w({left:D-I,width:W})},R=(z,D)=>{z.stopPropagation(),_(D),typeof e=="function"&&e(D),M(z.currentTarget)};return(0,r.jsxs)("div",{className:"tabs-header-wrap",...d,ref:p,children:[(0,r.jsx)("ul",{className:`tabs-header${i?" flex":""}`,ref:v,children:t.map(z=>(0,r.jsx)("li",{ref:D=>g.current[z.key]=D,className:`th-item${y===z.key?" active":""}`,onClick:D=>R(D,z.key),children:typeof z.renderTabs=="function"?z.renderTabs(z,y===z.key):pe(z.value)},z.key))}),(0,r.jsx)("div",{className:"th-track",style:{...b,color:o}})]})},xe=(0,f.forwardRef)(fe),ye=(n,t,e="id",o="children")=>{if(!On(n))return null;const i=d=>{for(let p=0,y=d.length;p<y;p++){const _=d[p];if(_[e]===t)return[_];if(On(_[o])){const b=i(_[o]);if(b)return[_].concat(b)}}};return i(n)},me=n=>++n,_e=()=>{const[,n]=(0,f.useState)(0);return(0,f.useCallback)(()=>n(me),[])},tt=n=>{const{children:t,open:e}=n;let o=0;if(e&&t?.length){o=t.length;let i=0;return t.map(d=>i+=tt(d)),o+i}return o},ge=({item:n,style:t,...e})=>(0,r.jsx)("ul",{style:{...t,"--count":tt(n)},...e});var Cn=E(942),sn={};sn.styleTagTransform=P(),sn.setAttributes=m(),sn.insert=c().bind(null,"head"),sn.domAPI=s(),sn.insertStyleElement=k();var xo=a()(Cn.Z,sn);const yo=Cn.Z&&Cn.Z.locals?Cn.Z.locals:void 0,be=n=>(0,r.jsx)("ul",{...n}),we=(n,t)=>n?ge:({item:e,...o})=>(0,r.jsx)(be,{className:t==="right"?"left":"",...o}),ve=n=>{const{data:t=[],collapsed:e=!1,type:o="vertical",Link:i,width:d,bgColor:p,itemHeight:y,collapsedWidth:_,itemPadding:b,style:w,className:g,...v}=n,M=(0,f.useRef)(),R=(0,f.useRef)();(0,f.useEffect)(()=>()=>clearTimeout(M.current),[]);const z=_e(),D=o==="horizontal",W=!D&&e,I={onClick:(V,$)=>{if(V.stopPropagation(),!D&&!W){const U=ye(t,$.path,"path"),X=U[U.length-1];X.open=!X.open,z()}},onMouseEnter:(V,$,U)=>{W&&!U&&(clearTimeout(M.current),R.current.style.width="var(--maxWidth)")},onMouseLeave:(V,$,U)=>{W&&!U&&(M.current=setTimeout(()=>R.current.style.width="",200))}},j=(D?["huxy-horizontal-tree",g]:["huxy-tree",g,W?"collapsed":""]).filter(Boolean).join(" "),{float:Z,...pn}=v?.style??{},N={"--bgColor":p,"--itemHeight":y,"--nodeListWidth":d,...pn};D?(N["--itemPadding"]=b,N["--nodeFloat"]=Z):(N["--width"]=d,N["--collapsedWidth"]=_);const cn=we(!D&&!W,Z);return(0,r.jsx)("div",{ref:R,className:j,style:N,...v,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:nt({data:t,events:I,List:cn,Link:i,leftIcon:!0,rightIcon:!0,isHorizontal:D,isCollapsed:W})})})})}})();var ze=S.PC,Se=S.rK,De=S.lr,Te=S.JX,Oe=S.dy,Ie=S.Ud,Me=S.mH,Re=S.SV,Ae=S.Hn,We=S.V7,je=S.AN,Be=S.zd,Ue=S.BQ,Le=S.u_,Fe=S.s_,Ne=S.h_,Ke=S.X2,Ze=S.$j,$e=S.GK,He=S.u,Ve=S.mp,Ye=S.C2,Xe=S.pC,Ge=S.ff,Je=S.d2,Qe=S.Uw;export{ze as Anico,Se as Base64Image,De as Carousel,Te as Col,Oe as Drawer,Ie as Drop,Me as Ellipsis,Re as ErrorBoundary,Ae as FullPage,We as HandleError,je as LoadError,Be as Mask,Ue as MaxSize,Le as Modal,Fe as Panel,Ne as Portal,Ke as Row,Ze as Spinner,$e as TabHeader,He as Tooltip,Ve as Tree,Ye as fixEle,Xe as fixIcon,Ge as renderTree,Je as str2React,Qe as str2Vue};
