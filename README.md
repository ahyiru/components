## components

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/router/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/components.svg)](https://www.npmjs.com/package/@huxy/components)
[![Build Status](https://api.travis-ci.com/ahyiru/components.svg?branch=master)](https://app.travis-ci.com/github/ahyiru/components)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)

### Anico

几个动效 `icon`，默认三条短横线。

`type: close、right、bottom、play`

`default：''`

```jsx
<Anico type={type} />

```

### loadError/ErrorBoundary/HandleError

错误边界处理。

```jsx
<ErrorBoundary fallback={loadError}>
  <ErrorComp state={demoError} name="eb" />
</ErrorBoundary>

<HandleError>
  <ErrorComp state={demoError} name="eb" />
</HandleError>

```

### FullPage

全屏面板。

- panel：面板元素
- fullIcon：最大化icon，默认'...'
- exitIcon：最小化icon，默认'...'

```jsx
<FullPage panel={panel} fullIcon="..." exitIcon="---" />

```

### Row/Col

栅格布局，默认分为12列。

- gutter：间隔大小，默认10px
- span：栅格等分，默认12
- offset：栅格左侧的间隔格数，默认0
- xs：<768px，可为栅格数或一个包含其他属性的对象
- sm：768px<x<992px，可为栅格数或一个包含其他属性的对象
- md：992px<x<1200px，可为栅格数或一个包含其他属性的对象
- lg：1200px<x<1600px，可为栅格数或一个包含其他属性的对象
- xl：>1600px，可为栅格数或一个包含其他属性的对象
- width：自定义栅格宽度
- auto：响应式栅格宽度
- offsetWidth：左侧或右侧宽度

```jsx
<Row gutter={12}>
  <Col span={6} offset={3} xs={{span:12,offset:0}} sm={{span:12,offset:0}} md={12} lg={6} xl={{span:3,offset:2}}}></Col>
</Row>

<Row>
  <Col width="240px"></Col>
  <Col auto offsetWidth="240px"></Col>
</Row>

```

### MaxSize

最大化面板。

- panel：最大化面板挂载元素，默认body
- target：最大化元素或类名
- fullIcon：最大化icon，默认'...'
- exitIcon：最小化icon，默认'...'

```jsx
<MaxSize target={target} panel={panel} fullIcon="..." exitIcon="---" />

```

### Portal

- mountNode：挂载点，默认`document.body`

```jsx
<Portal mountNode={}> portal </Portal>

```

### Mask

遮罩层

- mountNode：挂载点，默认`document.body`
- open：展示隐藏状态
- close：关闭事件
- delay：延迟关闭时间，默认300ms

```jsx
<Mask open={visible} close={()=>setVisible(false)} />

```

### Modal

模态框

- open：展示隐藏状态
- cancel：关闭事件
- cancelText：关闭文本
- submit：确定事件
- submitText：确定文本
- title：标题


```jsx
<Modal open={visible} cancel={()=>setVisible(false)} cancelText="取消" submit={()=>setVisible(false)} submitText="确定" title='Modal 弹窗'>
  ...
</Modal>

```

### Panel

面板

- title：标题
- plugins：标题右侧事件区域，如最大化、刷新等
- loading：加载状态

```jsx

<Panel title="panelTitle" plugins={[]}>
  ...
</Panel>

```

### Spinner

加载动画

- global：是否为全局加载动画

```jsx
<Spinner global />

```

### TabHeader

tab切换

- activekey：选中tab项，默认选中第一个
- tabs：tabs列表，[{key:'',value:'',renderTabs:null}]，key为tab的key值，value为展示名，renderTabs是自定义渲染内容
- switchTab：切换tab事件
- flex：tabs是否撑满容器
- trackColor：tabs与content间边框颜色

```jsx
<TabHeader tabs={[{key:1,value:'tab1'},{key:2,value:'tab2'}]} switchTab={()=>{}} flex />

```
