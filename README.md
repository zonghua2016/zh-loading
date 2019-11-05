# zh-loading
> 绚丽 vue loading 组件
## npm 地址
[https://www.npmjs.com/package/zh-loading](https://www.npmjs.com/package/zh-loading)

## vue 组件库地址
  [https://github.com/zonghua2016/zh-commons](https://github.com/zonghua2016/zh-commons)

## 1. Install
  ```js
  npm install zh-loading
  ```
  or
  ```js
  yarn add zh-loading
  ```

## 2. Quick Start
1.引入 `zh-loading` 组件
```js
import { ZhLoading } from 'zh-loading';
```

2.在vue组件中使用
```html
<template>
  <div>
    <ZhLoading />
  </div>
</template>
```

3. 参考参数

  |  参数名称  | 默认值 |      说明     |
  |:---------:|:-----:|---------------|
  |    size   |  200  | 加载图的整体大小 |
  | cicleNum  |   6   |     圆圈个数    |
  |borderWidth|   6   |     圆圈宽度    |
  |  colors   |`['#629', '#c28', '#e25', '#f53', '#fb2', '#8c4', '#0a9', '#17b']`|圆圈颜色，如果不传，用默认位置颜色值填充|
  - 以上参数可自由组合，效果自由搭配 😂 

## 3. Example

``` html
<ZhLoading :size="80" :cicleNum="4" :borderWidth="3" :colors="['#fb2', '#8c4', '#0a9', '#17b']" />
```

