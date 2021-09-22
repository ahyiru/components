## components

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/components/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/components.svg)](https://www.npmjs.com/package/@huxy/components)
[![Build Status](https://api.travis-ci.com/ahyiru/components.svg?branch=master)](https://app.travis-ci.com/github/ahyiru/components)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)

### Spinner

```javascript
const Spinner=({global})=>{
  const className=global?`${styles.spinner} ${styles.global}`:styles.spinner;
  return <div className={className}>
    <figure className={styles.spinning} />
  </div>;
};

```


## Anico

[anico](../styles/anico.md)

```javascript
const Anico=({type})=>{
  const className=type?`${styles.hline} ${styles[type]}`:styles.hline;
  return <span className={styles.anico}>
    <span className={className} />
  </span>;
};

图标 type：

- right：右箭头
- bottom：下箭头
- close：关闭
- play：播放
- pause：暂停

```

### ErrorBoundary

```javascript
export default class ErrorBoundary extends React.Component{
  state={
    error:null,
  };
  static getDerivedStateFromError(error){
    return {error};
  }
  render(){
    const {error}=this.state;
    const {fallback,children}=this.props;
    if(error){
      return fallback(error);
    }
    return children;
  }
}

```