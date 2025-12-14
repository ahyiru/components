import { default as __WEBPACK_EXTERNAL_MODULE_react_default__ } from "react";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// external "react"

;// ../huxy/components/errorBoundary/index.jsx

class ErrorBoundary extends __WEBPACK_EXTERNAL_MODULE_react_default__.Component {
  state = {
    error: null
  };
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    const { errorReport } = this.props;
    if (typeof errorReport === "function") {
      errorReport({ error, info: info.componentStack });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.error) {
      this.setState({
        error: null
      });
    }
  }
  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;
    if (error) {
      return fallback?.(error) ?? error;
    }
    return children;
  }
}

export { ErrorBoundary as default };
