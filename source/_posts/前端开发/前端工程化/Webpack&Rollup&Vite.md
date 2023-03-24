---
title: Webpack、Rollup、Vite基础配置
date: 2022-12-31
updated: 2023-03-16
tags:
- WebPack
- Vite
- Rollup
categories:
- 前端工程化
---

## WebPack

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
