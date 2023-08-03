
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

### 多环境发布

### 动态侧边栏

### 面包屑

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

### timeAgo

```js
/**
 * @param {number} time
 */
function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
```

### 数字添加单位

```js
/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}
```

### 千分位

```js
/**
 * 10000 => "10,000"
 * @param {number} num
 */
function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
```

### 首字母大写

```js
/**
 * Upper case first char
 * @param {String} string
 */
function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
```

### name

```js

```

### name

```js

```

## 正则

### isExternal

```js
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
```

### validURL

```js
/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}
```

### validEmail

```js
/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}
```

### validUpperCase

```js
/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
```

## other

echarts 饼图中自定义图例文字颜色

```txt
设置图例文字颜色与图例一致: 设置textStyle的 color为'auto'，自定义样式rich放在后面，避免覆盖。如下：

textStyle: {
        color: 'auto'  , // 图例文字颜色
        rich: { // 图例自定义样式
          a: {
            color: '#FFFFFF',
          },
          b: {
            color: '#3F98FD',
          }
        }
      }

使用：
formatter: function(name){
  return name + '{a| custom},{a| custom}'
}
```

参考：<https://www.cnblogs.com/YiFeng-Liu/p/15308026.html>
