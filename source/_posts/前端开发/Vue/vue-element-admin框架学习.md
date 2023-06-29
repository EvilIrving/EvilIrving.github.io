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

### [render](https://cn.vuejs.org/guide/extras/rendering-mechanism.html#virtual-dom)

```vue
render(h) {
    return h()
}
```

### 使用svg图标

1. 创建 icon-component 组件

   ```vue
    //components/Icon-svg

    <template>
      <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
      </svg>
    </template>

    <script>
    export default {
      name: 'icon-svg',
      props: {
        iconClass: {
          type: String,
          required: true
        }
      },
      computed: {
        iconName() {
          return `#icon-${this.iconClass}`
        }
      }
    }
    </script>

    <style>
    .svg-icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
    </style>
   ```

2. 引入

   ```js
   //引入svg组件
    import IconSvg from '@/components/IconSvg'

    //全局注册icon-svg
    Vue.component('icon-svg', IconSvg)

    //在代码中使用
    <icon-svg icon-class="password" />
   ```

3. svg-sprite

   需规避vue-cli对svg默认的处理，
   ![svg webpack](https://s2.loli.net/2023/06/29/tj1HrZN5ywh8LJ6.png)
  
4. 自动导入

   新建js文件，使用require.context导入

   require.context有三个参数
    - directory：说明需要检索的目录
    - useSubdirectories：是否检索子目录
    - regExp: 匹配文件的正则表达式

    ```js
    const requireAll = requireContext => requireContext.keys().map(requireContext)
    const req = require.context('./svg', false, /\.svg$/)
    requireAll(req)
    ```

5. 优化svg

  script命令：`svgo -f src/icons/svg --config=src/icons/svgo.yml`

  yml文件保存压缩配置：

  ```yml
  - removeAttrs:
      attrs:
        - 'fill'
        - 'fill-rule'
  ```

- [svgo](https://github.com/svg/svgo)

### 封装input

### 封装文字hover动画

### 封装回到顶部

### 国际化

### 主题色

### 权限

### director

### utils

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

`getBoundingClientRect()`: `left、top、right、bottom、x、y、width` 和 `height`

normalize

## Webpack

### Git 约定式提交

## JS方法

## 库

- [clipboard](https://clipboardjs.com/)
- [Tinymce](https://www.tiny.cloud/docs/quick-start/)
- [JSON Lint](https://codemirror.net/5/doc/manual.html)
- [splitPane](https://github.com/PanJiaChen/vue-split-pane)
- [vue-image-crop-upload](https://github.com/dai-siki/vue-image-crop-upload)
- [dropzone](https://docs.dropzone.dev/)
- [vue2-dropzone](https://rowanwins.github.io/vue-dropzone/docs/dist/#/installation)
- [vue-count-to](https://panjiachen.github.io/countTo/demo/)
- js-cookie
- nprogress
- mockjs

## Code Snippest
