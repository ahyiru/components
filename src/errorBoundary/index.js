import { default as __WEBPACK_EXTERNAL_MODULE_react_default__ } from "react";

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
