---
title: 框架笔记
date: 2023-06-28
tags:
  - Vue
categories: Vue
keywords: 'Vue'
description: 看vue-element-admin过程中的笔记，包含js，库使用技巧等
---
## Vue

### 传入`router.query`对象

```js
getQuery(query) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {})
  }
```

### render

```vue
render(h) {
    return h()
}
```

## Css

```css
@supports
```

[supports](https://sass-lang.com/documentation/at-rules/css/#supports)

```css
@media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
```

[media](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)

```scss
$cursor: #fff;
caret-color: $cursor; // 光标颜色
```

## Webpack插件

## JS方法

## 库

## Code Snippest
