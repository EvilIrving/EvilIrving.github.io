# WebPack

### 核心概念

- mode
- entry
- output
- loader
- plugins
- devServer
- optimization
- resolve

### 本地/全局安装

```js
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli webpack-dev-server --save-dev
```

### SourceMap

`source map` 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 `soucre map`。

`map` 文件只要不打开开发者工具，浏览器是不会加载的。

线上环境一般有三种处理方案：

- `hidden-source-map`：借助第三方错误监控平台 `Sentry` 使用
- `nosources-source-map`：只会显示具体行数以及查看源代码的错误栈。安全性比 `source map` 高
- `source map`：通过 `nginx` 设置将 `.map` 文件只对白名单开放（公司内网）

注意：避免在生产中使用 `inline-` 和 `eval-`，因为它们会增加 `bundle` 体积大小，并降低整体性能。

- 开发环境配置：`devtool: "cheap-module-eval-source-map`  
- 线上生成配置：`devtool: "none"`

### entry

指定打包⼊口文件，有三种不同的形式：`string | object | array`

- `string`：一对一
- `array`：多对一
- `object`：多对多

```js
module.exports = {
  entry: {
          test: './src/index.js',
          demo: './src/index.js',
  }
}
```

### output

```js
module.exports = {
    output: {
        publicPath: 'http://cdn.xxx.com/', // 默认在打包后的文件，加上引用前缀
        path: path.resolve(__dirname, 'bundles.js'),
        filename: "[name].[hash:6].bundles.js"
    },
}
```

### [loader](https://v4.webpack.js.org/loaders/)

> `loader` 的执行顺序是从右向左执行的，也就是后面的 `loader` 先执行。

- `file-loader`
  - 本质功能是复制资源文件并替换访问地址，音视频等资源也可以使用它
- url-loader
  - url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit.
- `style-loader`
  - Inject CSS into the DOM
- `css-loader`
  - The css-loader interprets @import and url() like import/require() and will resolve them.
- `postcss-loader`
  - Option
    - `execute` `postcssOptions` `sourceMap` `implementation`
  - 作用
    - `Autoprefixer` `PostCSS Preset Env` `CSS Modules` `提取 CSS` `触发资源打包`
- `sass-loader`
  - Loads a Sass/SCSS file and compiles it to CSS
  - 需要预先安装 [Node Sass](https://github.com/sass/node-sass) 或 [Dart Sass](https://github.com/sass/dart-sass)
- `babel-loader`
  - 使用 Babel 和 webpack 转译 JavaScript 文件
  - 安装：`npm i babel-loader @babel/core @babel-preset-env -D`
    - `@babel/core`：babel 核心
    - `babel-loader`：babel 和 Webpack 的连接桥梁
    - `babel-preset-env`：输出什么样的代码，用它来解决
    - `babel-loader`：解析 ES6+
    - `@babel/polyfill`：垫片。包含所有 ES6+ 新特性代码
    .babelrc
- [`ts-loader`](https://github.com/TypeStrong/ts-loader)
  - 进行 转译 和 类型检查
  - 使用 [fork-ts-checker-webpack-plugin](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) ，开辟一个单独的线程去执行类型检查的任务，这样就不会影响 webpack 重新编译的速度
  - `ts-loader` 是不会读取 `.babelrc` 里的配置，即无法使用 `babel` 系列的插件

### plugins

- `html-webpack-plugin`
  - 配置生成一个 HTML5 文件，其中 script 标签包含所有 Webpack 包
- `clean-webpack-plugin`
  - 打包前自动清理 dist 目录，防止文件残留
- `css-minimizer-webpack-plugin`
  - 使用 cssnano 优化和压缩 CSS。
- `mini-css-extract-plugin`
  - CSS 抽离出来单独打包并且通过配置可以设置是否压缩。
- `eslint-webpack-plugin`
- 提高效率
  - `webpack-merge`
    - 提取公共配置
  - `HotModuleReplacementPlugin`
    - 核心是 `chunk diff`：`webpack-dev-server`与浏览器之间维护了一个 `Websocket`，当本地资源发生变化时，`WDS` 会向浏览器推送更新，并带上构建时的 `hash`，让客户端与上一次资源进行对比。

    ```js
    const webpack = require('webpack');
    module.exports = {
      devServer: {
        hot: true
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin() // 热更新插件
      ]
    }
    ```

  - `speed-measure-webpack-plugin`
    - 分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时

### devServer

```js
module.exports = {
  devServer: {
          watchOptions: {
              ignored: /node_modules/,
          },
          // contentBase: "./dist",
          open: true,
          hot: true,
          port: 3000,
          proxy: {
              '/api': {
                  'target': 'http://localhost:3000',
                  'changeOrigin': true,
                  'pathRewrite': { '^/api': '' },
              },
          }
      },
}
```

### optimization

### resolve

resolve 配置 Webpack 如何寻找模块所对应的文件。

```js
module.exports = {
  resolve: {
    modules: ['./src/components', 'node_modules'] // 从左到右依次查找
  }
}
```

- `resolve.modules`
- `resolve.alias`：配置别名
- `resolve.extensions`：导入时想要省略的扩展名列表。 如：`['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']` 。

### 配置Webpack的技术选型参考

- 移动端 || PC
- MPA || SPA
- HTML || 模板引擎
- CSS || 预处理器
- JavaScript ES5 || ES6
- 本地发布服务（数据模拟）
- React || Vue
- 多人项目 || 单人项目
- 语法规范 Eslint
- 单元测试
- 提交规范

### 性能优化

- 缩小 `loader` 的文件范围：`loader` 的 `include` 配置，可以指定 `src` 目录，减少检查范围。
- 优化 `resolve.modules` 配置：配置 `Webpack` 去哪些目录下寻找第三方模块，默认 `node_modules`。
- 分离 CSS：`MiniCssExtractPlugin`
- `hash`、`chunkhash`、`contenthash` 区别
  - `hash` 作用域 JS、CSS，图片的 `hash` 有区别，每次打包构建都会变化一次。
  - `chunkhash` 以 `chunk` 为单位，修改了那部分就改动哪部分的 `hash`。（同时依赖的模块也会改变 `hash`）
  - `contenthash` 只有自己内容发生改变，才发生改变（区别于 `chunkhash`。
  - 所以 JS 适用于 `chunkhash`；CSS 适用于 `contenthash`；Image 适用于 `hash`
- 压缩 CSS：`optimize-css-assets-webpack-plugin` 和 `cssnano`
- 压缩 HTML：`html-webpack-plugin`
- 压缩图片：`img-webpack-loader`
- 分离 `Webpack` 配置：分离 `base.config`、`dev.config`、`mpa.config` 和 `pro.config` 4 个，通过 `merge` 进行 `config` 配置的合并

### 练习

- 编写 `Webpack` 解析器
  1. 利用 `babel` 完成代码转换，并生成单个文件的依赖
  2. 生成依赖图谱
  3. 生成最后打包代码
- 编写 `Webpack loader`
- 编写 `Webpack plugin`

### 学习资料

- WebPack
  - [官网中文文档](https://webpack.docschina.org/concepts/)
  - [学习笔记](https://segmentfault.com/a/1190000040646081)
  - [Webpack小书](https://www.timsrc.com/article/2/webpack-book)
  - [Webpack配置全解析（优化篇）](https://xieyufei.com/2020/07/30/Webpack-Optimize.html#%E7%BC%A9%E5%B0%8F%E6%96%87%E4%BB%B6%E6%90%9C%E7%B4%A2%E8%8C%83%E5%9B%B4)

- Vue 配置
  - [Vue WebPack 简单配置](https://cli.vuejs.org/zh/guide/)
  - [Vue CLI](https://cli.vuejs.org/zh/config/#configurewebpack)

## Rollup

- 安装：`npm install -g rollup`
- 使用配置

  ```js
  import resolve from '@rollup/plugin-node-resolve';
  import { terser } from "rollup-plugin-terser";
  import commonjs from 'rollup-plugin-commonjs';
  import cleanup from 'rollup-plugin-cleanup';
  import babel from 'rollup-plugin-babel';
  export default {
      input: 'app.js',
      output: {
          // dir: 'dist',
          file: 'bundles.js',
          // format: 'es', // es cjs umd amd iife
      },
      // 指出哪些模块需要被视为外部引入
      external: ['lodash-es'],
      plugins: [
          resolve({
              // 将自定义选项传递给解析插件
              customResolveOptions: {
                  moduleDirectory: 'node_modules'
              }
          }),
          commonjs(),
          terser(),

          babel({
              babelHelpers: 'bundled',
              exclude: 'node_modules/**' // 只编译我们的源代码
          }),
          cleanup(),
      ],
  }
  ```

## Vite

```js
// 天生支持 ts css 以及各种资源

//  vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import postcssPxToViewport from 'postcss-px-to-viewport'
export default defineConfig({
    // root: '/',
    base: "www.xx.com",
    publicPath: './static',
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: 'import {h} from "vue";'
    },
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData: `$injectedColor: orange;` // 全局变量
                additionalData: `@import '/src/assets/styles/variables.scss';` // 引入全局变量文件
            }
        },
        postcss: {
            plugins: [
                // viewport 布局适配
                postcssPxToViewport({
                    viewportWidth: 375
                })
            ]
        }
    },
    reslove: {
        extension: ['.js', '.ts', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@views': path.resolve(__dirname, 'src/views'),
            '@layout': path.resolve(__dirname, 'src/layout'),
            '@components': path.resolve(__dirname, 'src/components')
        }

    },
    optimizeDeps: {
        force: true // 强制进行依赖预构建 或通过删除 .vite 文件夹或运行 npx vite --force 来强制进行依赖预构建
    },
    build: {
        // outDir: 'build' // 打包文件的输出目录
        // assetsDir: 'static' // 静态资源的存放目录
        // assetsInlineLimit: 4096 // 图片转 base64 编码的阈值
        // 压缩
        minify: process.env.VITE_NODE_ENV === 'production' ? 'esbuild' : false,
        // 服务端渲染
        ssr: false,
        emptyOutDir: true,
        rollupOptions: {
            // 将vue切分出来 
            // manualChunks: {
            //     vendor: ['vue']
            // }
            input: './index.html',
            output: {
                entryFileNames: 'bundle.js',
                chunkFileNames: '[name].chunks.js'
            },

            manualChunks: (id) => {
                if (id.includes('node_modules')) {
                    return 'vendor'
                }
                // if (id.includes('node_modules')) {
                //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
                // }

            }
        },
        assetsInlineLimit: 20000
    },
    server: {
        port: 2000,
        proxy: {
            "/api": {
                targer: 'www.xxx.com',
                rewrite: (path) => {
                    return path.replace(/^\/api/, 'xxx')
                },
            }
        },
        headers: {

        }
    },
    plugins: [
        vue()
    ]
})
```

### 学习资料

- [Vite 3](https://v3.vitejs.dev/guide/)
- [React18 + Vite + TypeScript 完成公司项目经验总结](https://juejin.cn/post/7205842390842458149)

## 常见问题

### Webpack 和 Vite打包原理和优势

#### Webpack 打包原理和优势

Webpack 是一个模块打包工具，它将各种类型的资源（如 JavaScript、CSS、图片等）视为模块，并将它们转换为适合浏览器使用的格式。Webpack 实现打包的主要过程如下：

1. 读取入口文件及其依赖的模块。
2. 将不同类型的模块使用不同的 loader 进行转换，将它们转成 JavaScript 代码或其他浏览器可识别的格式。
3. 将转换后的模块以及其它需要打包的资源打包成一个或多个 bundle。
4. 将 bundle 传输给浏览器，自动加载脚本以渲染出页面。

Webpack 的主要优势包括：

1. **支持代码分割和懒加载**：Webpack 可以将代码分为不同的 chunk，实现按需加载，提高效率和降低加载时间。
2. **支持多种类型的资源处理**：Webpack 可以使用 loader 处理 JavaScript、CSS、图片等各种类型的资源，非常灵活。
3. **可高度自定义**：Webpack 非常灵活，可以通过配置来实现各种自定义的打包方式，满足不同的需求。
4. **活跃的开发生态**：Webpack 社区非常活跃，可查找到大量的官方和第三方插件，支持各种场景。

#### Vite 打包原理和优势

Vite 是一种基于原生 ES modules 的开发工具，它可以快速地在开发过程中构建应用，将前端开发的热重载能力提升到了一个新的层次。它的打包原理和 Webpack 相比非常不同，主要分为以下几个步骤：

1. 首先启动一个包含 HTTP 服务器和服务端渲染引擎的 Node.js 进程。
2. 当一个请求被接收后，Vite 会从代码仓库中读取对应的模块并加载到内存中。
3. Vite 会同时执行模块依赖分析和 AST 转换，并将生成的代码作为一个 ESM（ES module） 交给浏览器处理。
4. 浏览器根据交给它的 ESM 自己去构建模块依赖关系，并发起网络请求获取需要的模块。

Vite 的主要优势如下：

1. **基于 ESM**：利用 ES6 中原生支持的模块化系统，达到了开发过程中始终保持“原生”的速度。
2. **支持快速热重载**：Vite 支持非常快速的热重载，不需要重新构建整个应用程序，所以非常适合开发过程中快速迭代和测试。
3. **开发全程零配置**：Vite 支持开箱即用，可以自动适应各种常见的应用类型和技术。
4. **插件友好**：Vite 的插件机制十分简单，各种插件可以轻松地使用到应用中，也可以自己编写插件来增强应用。

### CSS预处理器的优缺点

CSS预处理器是指一种基于CSS语法之上，添加了一些编程特性的脚本语言，通过这些语言可以方便地生成CSS样式代码。常见的CSS预处理器有Sass、Less、Stylus等。

CSS预处理器的优点：

1. 提高CSS的维护性。CSS预处理器可以引入变量、函数、Mixin等特性，使得CSS代码更加模块化和结构化，减少代码冗余和复制粘贴，同时避免了修改多处代码的情况。

2. 提高CSS代码的可读性。CSS预处理器可以使用嵌套语法，使得代码结构更加清晰，易于阅读和理解。

3. 提高CSS的可复用性。CSS预处理器可以定义Mixin、函数等特性，从而可以实现样式的可复用，避免了大量的重复性工作。

4. 方便地使用第三方库。CSS预处理器可以方便地引入第三方库，同时可以自由地设置变量，实现更加灵活的风格定制。

CSS预处理器的缺点：

1. 增加学习成本。使用CSS预处理器需要掌握一定的编程知识和语法，对于新手而言会增加学习成本。

2. 可能会增加编译时间。CSS预处理器需要将源文件编译成CSS文件，这个过程需要一定的时间。

3. 可能会导致代码冗余。如果不小心使用了代码不规范的方法，可能会导致代码冗余。

常见的CSS预处理器：

1. Sass：是一款比较成熟的CSS预处理器，支持多种语言特性，包括变量、Mixin、继承、函数等，同时也有丰富的第三方库和工具支持。

2. Less：是一款与Sass类似的CSS预处理器，语法相对简单，易于上手，常常应用于Bootstrap等UI框架中。

3. Stylus：是一款使用JavaScript语法的CSS预处理器，语法简洁、易于扩展。

总之，CSS预处理器是一种强大而灵活的工具，能够提高CSS代码的可维护性、可复用性和可读性，同时也有一些缺点需要注意。选择合适的CSS预处理器，可以大幅提高前端开发效率和代码质量。
