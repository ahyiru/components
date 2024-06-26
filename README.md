## components

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ahyiru/components/blob/develop/LICENSE)
[![npm version](https://img.shields.io/npm/v/@huxy/components.svg)](https://www.npmjs.com/package/@huxy/components)
[![npm](https://img.shields.io/npm/dt/@huxy/components)](https://www.npmjs.com/package/@huxy/components)
[![](https://img.shields.io/badge/blog-ihuxy-blue.svg)](http://ihuxy.com/)

### Anico

几个动效 `icon`，默认三条短横线。

`type: close、right、bottom、play`

`default：''`

```html
<Anico type="{type}" />
```

### Base64Image

将图片 src 地址 改为 base64。

```html
<Base64Image {...props} />
```

### loadError/ErrorBoundary/HandleError

错误边界处理。

```html
<ErrorBoundary fallback="{loadError}">
  <ErrorComp state="{demoError}" name="eb" />
</ErrorBoundary>

<HandleError>
  <ErrorComp state="{demoError}" name="eb" />
</HandleError>
```

### fixEle/fixIcon

对传入的元素兼容处理。如传入函数、react 对象、原生 dom、className、注入元素、默认元素、null等。

```html
const Ele = fixEle(iconList)(iconValue); const Icon = fixIcon(icons);

<Icon icon="home" />
```

### FullPage

全屏面板。

- panel：面板元素
- fullIcon：最大化 icon，默认'...'
- exitIcon：最小化 icon，默认'...'

```html
<FullPage panel="{panel}" fullIcon="..." exitIcon="---" />
```

### Row/Col

栅格布局，默认分为 12 列。

- gutter：间隔大小，默认 10px
- span：栅格等分，默认 12
- offset：栅格左侧的间隔格数，默认 0
- xs：<768px，可为栅格数或一个包含其他属性的对象
- sm：768px<x<992px，可为栅格数或一个包含其他属性的对象
- md：992px<x<1200px，可为栅格数或一个包含其他属性的对象
- lg：1200px<x<1600px，可为栅格数或一个包含其他属性的对象
- xl：>1600px，可为栅格数或一个包含其他属性的对象
- width：自定义栅格宽度
- auto：响应式栅格宽度
- offsetWidth：左侧或右侧宽度

```html
<Row gutter={12}>
  <Col span={6} offset={3} xs={{span: 12, offset: 0}} sm={{span: 12, offset: 0}} md={12} lg={6} xl={{span: 3, offset: 2}}}></Col>
</Row>

<Row>
  <Col width="240px"></Col>
  <Col auto offsetWidth="240px"></Col>
</Row>

```

### Grid

基于 `Row/Col` 的栅格布局。

```html
<Grid rowProps="{{gutter:" 12}} colProps="{{span:" 6}} Row="{}" Col="{}">
  <p>list 1</p>
  <p>list 2</p>
  <p>list 3</p>
</Grid>
```

### MaxSize

最大化面板。

- panel：最大化面板挂载元素，默认 body
- target：最大化元素或类名
- fullIcon：最大化 icon，默认'...'
- exitIcon：最小化 icon，默认'...'

```html
<MaxSize target="{target}" panel="{panel}" fullIcon="..." exitIcon="---" />
```

### Portal

- mountNode：挂载点，默认`document.body`

```html
<Portal mountNode="{}"> portal </Portal>
```

### Mask

遮罩层

- mountNode：挂载点，默认`document.body`
- open：展示隐藏状态
- close：关闭事件
- delay：延迟关闭时间，默认 300ms

```html
<Mask open="{open}" close="{()" =""> setOpen(false)} /></Mask>
```

### Modal

模态框

- open：展示隐藏状态
- cancel：关闭事件
- cancelText：关闭文本
- submit：确定事件
- submitText：确定文本
- title：标题

```html
<Modal open="{open}" cancel="{()" =""> setOpen(false)} cancelText="取消" submit={() => setOpen(false)} submitText="确定" title="Modal 弹窗"> ... </Modal>
```

### Panel

面板

- title：标题
- plugins：标题右侧事件区域，如最大化、刷新等
- loading：加载状态

```html
<Panel title="panelTitle" plugins="{[]}"> ... </Panel>
```

### Spinner

加载动画

- global：是否为全局加载动画
- absolute：是否相对容器绝对定位

```html
<Spinner global /> <Spinner absolute />
```

### TabHeader

tab 切换

- activekey：选中 tab 项，默认选中第一个
- tabs：tabs 列表，[{key: '', value: '', renderTabs: null}]，key 为 tab 的 key 值，value 为展示名，renderTabs 是自定义渲染内容
- switchTab：切换 tab 事件
- flex：tabs 是否撑满容器
- trackColor：tabs 与 content 间边框颜色

```html
<TabHeader
  tabs={[
    {key: 1, value: 'tab1'},
    {key: 2, value: 'tab2'},
  ]}
  switchTab={() => {}}
  flex
/>
```

### Drawer

抽屉柜

- open：是否展示
- close：关闭事件
- footer：脚部内容
- header：头部内容
- width：宽度，默认 `300px`

```html
<Drawer
  close={() => setOpen(false)}
  open={open}
  className="configs-drawer"
  width="300px"
  header={
    <div>
      <Button onClick={() => saveConfig()}>{i18nCfg.saveConfig}</Button>
      <Button type="primary" onClick={() => copyConfig()} style={{marginLeft: 12}}>
        {i18nCfg.copyConfig}
      </Button>
    </div>
  }
>
  <TabHeader flex tabs={tabs(i18nCfg)} switchTab={key => setActive(key)} />
  <div className="layout-setting" style={{padding: '15px 0'}}>
    {comps[active]}
  </div>
</Drawer>
```

### Drop

元素触发位置展示弹出层信息。可根据元素所在位置自动优化展示层的位置。

- trigger：触发动作，默认 `click`
- dropList：弹出层内容 DOM。

```html
<Drop trigger="contextMenu" dropList="{fileDrop(filename)}">
  <div>{filename}</div>
</Drop>
```

### renderTree/Tree

渲染树。如菜单展示，支持横纵切换。

renderTree：

- data：树对象 []。
- events：节点事件表。如点击、鼠标移动等。`{onClick: () => {}, onMouseEnter: () => {}, ...}`
- Link：链接跳转，默认 `a` 标签跳转。
- List: 节点列表容器，默认 `const DefList = props => <ul {...props} />;` 。

Tree：

- data：树对象 []。
- type：展示类型，默认 'vertical' 。
- collapsed：是否为收缩状态，默认 'false' 。
- Link：链接跳转，默认 `a` 标签跳转。
- width：菜单宽度。
- bgColor：背景颜色。
- itemHeight：菜单节点高度。

```html
<ul className="huxy-tree-root">
  {render(data, events, Link, List)}
</ul>

<Tree data="{navMenu}" type="horizontal" Link="{Link}" style="{navMenuStyle}" />
```

### Carousel

轮播图。

```html
<Carousel>
  <div style={{height: '200px', background: 'var(--blue1)'}}>item1</div>
  <div style={{height: '200px', background: 'var(--orange1)'}}>item2</div>
  <div style={{height: '200px', background: 'var(--green1)'}}>item3</div>
  <div style={{height: '200px', background: 'var(--yellow1)'}}>item4</div>
  <div style={{height: '200px', background: 'var(--red1)'}}>item5</div>
</Carousel>
```

### Tooltip

```html
<Tooltip placement="topRight"> hello worldhello worldhello worldhello worldhello world </Tooltip>
```

- placement：tooltip 位置，有 topRight | topLeft | bottomRight | bottomLeft | rightTop ，默认 topRight 。

### Ellipsis

超出容器宽度展示省略号并且鼠标移上去有 tooltip 。

```html
<Ellipsis> hello worldhello worldhello worldhello worldhello world </Ellipsis>
<Ellipsis>
  <Tooltip placement="topLeft" title="hhhhhhhhh">
    <span>hhhhhhhhh</span>
  </Tooltip>
</Ellipsis>
```
