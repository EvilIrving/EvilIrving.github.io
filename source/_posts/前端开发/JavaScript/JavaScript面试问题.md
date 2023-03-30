---
title: JavaScript面试问题
date: 2021-07-30
updated: 2021-07-30
tags:
- 面试
- JavaScript
categories:
- 面试
keywords:
description:
cover:
---

## 题目：无答案

- JavaScript
  - 数据类型
  - CommonJS、AMD、CMD、ES Modules，模块加载机制
  - 原型、原型链、原型继承、this、apply、call、New操作符
  - 设计模式：单例、工厂、观察者
  - 跨域CORS
  - 图片格式：png、jpg、gif、webp
  - git和svn
  - 网络协议
  - 本地存储、Cookie及其之间的区别
  - 服务器和浏览器之间的 cookies 是怎么传的，httponly 的 cookies 和可读写的 cookie 有什么区别，有无长度限制
  - 各种位置的区别
  - 从URL 到渲染完成的整个过程，包括 DOM 构建的过程
  - 公钥加密和私钥加密
  - 文件编码、URL 编码、Unicode编码：一个gbk编码的页面如何正确引用一个utf8的的资源
  - 移动端适配方案、移动端300毫秒延迟、移动端点击穿透
  - Async 和 Defer 的作用和区别
  - DOMContentLoaded 事件和 Load 事件的区别
  - 需要注意哪些 SEO
  - 简述作用域链、执行上下文和执行栈
  - 介绍下 Set、Map、WeakSet 和 WeakMap 的区别
  - AJAX、常见HTTP状态码
  - GET和POST的不同
  - 闭包、其特性、影响
  - 常见的内存泄露
  - 事件委托、事件循环、事件(流)模型（冒泡、捕获）；什么事件不支持冒泡，捕获
  - 普通函数、箭头函数和构造函数的区别
  - 如何理解Proxy
  - 垃圾回收机制
  - webscoket的连接原理
  - 手写代码
    - 深浅拷贝
    - 节流和防抖、sleep
    - 数组去重、数组扁平化去并除其中重复部分数据
    - 排序
    - Bind、Apply、Call、 New、Promise、Async/Await、Generator、柯里化、Instanceof、Proxy + Fetch == axios
    - ES5和ES6的继承? 这两种方式除了写法, 还有其他区别吗
    - compose函数, 类似于koa的中间件洋葱模型
    - 实现一个函数, 可以间隔输出

    ```js
    function createRepeat(fn, repeat, interval) {}

    const fn = createRepeat(console.log, 3, 4);

    fn('helloWorld'); // 每4秒输出一次helloWorld, 输出3次
    ```

    - 二叉树光照，输出能被光照到的节点, dfs能否解决

    ```js
    /**

    - @param {TreeNode} root
    - @return {number[]}
    */
    function exposedElement(root) {  };
    ```

    - 判断数据是NaN
    - EventEmitter
    - 轮播图
    - 页面懒加载
      - 虚拟列表  
    - 表单验证
    - 弹窗功能
    - 分页功能
    - 批量请求函数, 能够限制并发量
    - 数组转树结构，如果要在树中新增节点或者删除节点, 函数应该怎么扩展
- Typescript
  - Typescript 与 JavaScript 的优势
- Node
  - Nodejs 异步IO模型
  - Linux命令
- 框架
  - 组件通信
  - 响应式数据原理
  - 虚拟dom 与 diff 算法，不同框架之间的区别
  - 生命周期函数
  - SSR 服务端渲染
- Vue
  - **首屏加载慢、闪烁问题、[白屏时间检测](https://juejin.cn/post/7041571419381039118)及解决**
    - 路由懒加载 组件懒加载 CDN 资源优化 gzip 关闭SourceMap 加速优化 SSR loading或 骨架屏
    - 浏览器开始渲染 `<body>` 标签或者解析完 `<head>` 标签
    - 白屏时间 = `firstPaint` - `performance.timing.navigationStart` / `firstPaint` - `pageStartTime`
  - 响应式数据原理 `Object.defineProperty()` / `Proxy`
  - 常用指令和自定义指令
  - 过滤器
  - Computed、Watch原理
  - template模版编译原理 template会变成什么?
  - keep-alive的作用是什么？怎么实现的？如何刷新的?
  - 什么是 FOUC（无样式内容闪烁）
  - 性能优化？具体哪些优化的收益较大？
- React
  - Redux实现原理
  - [自定义Hooks](https://ahooks.gitee.io/zh-CN/hooks/use-request/index)
- 小程序
  - 小程序的页面构成/生命周期
  - 提高小程序的首屏加载时间
  - Wxss 与 css 的区别请简述
  - 小程序的双向绑定和 vue 的异同？
  - 微信扫一扫二维码网页上登陆前后端过程
  - 微信支付流程
- 微前端
- Uni-app
- Electron
- Flutter
- webpack
  - 打包原理
  - Webpack 与 Vite 区别
  - 热更新原理
- 个人
  - 项目中难点、亮点、解决方案
  - 职业想法和规划
- 反问
  - 晋升机制+薪资构成 年终奖几个月
  - 社保和公积金基数按什么标准
  - 是否有技术分享会或培训
  - 这个部门多数人几点上班，几点下班
  - 工作日几点下班或工时达到多少小时算加班，如何算加班费或调休，是否有餐补或交通补助
  - 部门架构&&工作职责
  - 面试官本人在什么部门负责什么工作（如果对方在面试过程中没有自我介绍的话）
  - 面试官在该公司工作了多久，认为公司的优缺点是什么

## 题目：含答案

### 从URL 到渲染完成的整个过程，包括 DOM 构建的过程

从 URL 到渲染完成的整个过程包含以下几个步骤：

1. URL 解析：浏览器通过解析输入的 URL，获取域名、协议、端口、路径等信息。

2. DNS 解析：浏览器向 DNS 服务器发送域名解析请求，并根据返回的 IP 地址进行连接。

3. 建立 TCP 连接：浏览器和服务器进行 TCP 三次握手建立连接。

4. 发送 HTTP 请求：浏览器向服务器发送 HTTP 请求，请求资源文件。

5. 服务器处理请求：服务器接收到浏览器发送的请求，进行解析和处理，并返回相应的资源文件。

6. 接收响应数据：浏览器接收到服务器返回的资源文件。

7. HTML 解析：浏览器开始解析 HTML，构建 DOM 树。

8. CSS 解析：解析 CSS 文件，并构建 CSSOM 树。

9. 渲染页面：根据 DOM 树和 CSSOM 树构建渲染树，计算节点尺寸、位置等信息，并最终将页面渲染出来。

10. JavaScript 执行：当浏览器遇到 JavaScript 时，会执行脚本，对 DOM 树和 CSSOM 树进行修改，从而还要重新进行渲染。

11. 页面加载完成：当渲染进程完成页面渲染后，页面加载完成。

至此，从 URL 到渲染完成的整个过程就结束了。在整个过程中，DOM 构建的过程是将 HTML 文件解析为一个文档树的过程，CSS 解析的过程是将 CSS 代码解析为 CSSOM 树的过程。DOM 树和 CSSOM 树构成了渲染树，完成了页面的渲染。

### 三次握手和四次挥手

TCP（Transmission Control Protocol）是基于连接的协议，用于在网络上的两个应用程序之间稳定、可靠地传输数据。在 TCP 连接中，三次握手和四次挥手是 TCP 协议中的两个重要的过程，下面分别进行介绍：

- 三次握手
  
  >三次握手（Three-way Handshake）是建立 TCP 连接的过程，主要包含以下三个步骤：
  >
  > 1. 客户端向服务器发送 SYN 报文。
  > 2. 服务器收到 SYN 报文后，回应一个 SYN + ACK 报文。
  > 3. 客户端收到 SYN + ACK 报文后，回应一个 ACK 报文，表示建立连接。

- 四次挥手
  > 四次挥手（Four-way Handshake）是关闭 TCP 连接的过程，主要包含以下四个步骤：
  >
  >1. 客户端向服务器发送一个 FIN 报文，表示希望关闭连接。
  >2. 服务器收到 FIN 报文后，回应一个 ACK 报文，表示已经接收到关闭请求。
  > 3. 服务器向客户端发送一个 FIN 报文，表示服务器准备关闭连接。
  > 4. 客户端收到 FIN 报文后，回应一个 ACK 报文，表示已经接收到关闭请求，并确认可以关闭连接。

总之，三次握手和四次挥手是 TCP 协议中保证连接稳定和可靠的核心过程。在建立 TCP 连接之前，需要进行三次握手以确保双方都能正常通信。而在关闭连接之前，需要进行四次挥手以确保双方都能安全、顺利地关闭连接。

### MMVM、MVC

MMVM（Model-View-ViewModel）和MVC（Model-View-Controller）都是一种架构模式，用于构建应用程序。它们的区别主要在于以下几点：

1. 数据绑定方式不同。MVVM中的View和ViewModel之间使用了双向数据绑定，View中的变化会自动更新ViewModel，反之亦然。而MVC中，View和Controller之间采用的是单向数据绑定，只有Controller可以更新View。

2. 视图组件的复杂程度不同。MVVM中的ViewModel可以包含业务逻辑，因此它的功能比MVC的Controller更加复杂。ViewModel可处理网页的交互、服务端数据请求并作出回应，并控制页面的展示，避免了在View层中出现过多的业务判断逻辑和事件操作，使得View层只需专注于视图渲染和交互响应。

3. 界面开发方式不同。在MVVM中，ViewModel的自动翻译降低了View的前端开发难度，开发者无须再按照传统MVC方式编写繁琐的UI监听、事件绑定等代码。MVVM减少大量的冗余的代码，提升开发效率和开发者的开发体验。

4. 分工不同。MVVM将业务逻辑、数据映射、视图逻辑、页面展示分离，可以让各个模块更加独立，有利于团队成员的分工协作，提高开发效率。

综上所述，MVVM相对于MVC在分离视图显示和业务逻辑方面做得更加彻底，且简化开发模版和设计的复杂性，能够有效地解决大型项目中View层复杂业务逻辑的问题。

### 请解释事件委托（event delegation）

事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。这种技术的好处是：

- 内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。
- 无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。

- <https://davidwalsh.name/event-delegate>
- <https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation>

### 事件流模型

事件流模型表示的是一个事件触发的完整步骤，该步骤一共有三步：

1. 事件捕获：第一阶段，某个节点触发事件后，系统从根节点开始，一直向下寻找，直至真正触发该事件的节点，沿途在直系继承树上绑定了相同事件的节点会按照顺序依次触发；即同一事件，自父元素捕获至子元素（事件源元素）。自顶向下；

2. 事件触发：真正触发事件的节点，触发事件；

3. 事件冒泡：第三阶段，真正触发事件的节点触发完毕，会沿着直系继承树一直向上传递该事件，一直传递到根节点，沿途绑定了相同事件的节点会依次触发。即同一事件，自子元素冒泡向父元素。自底向上。

触发顺序：捕获 >> 触发 >> 冒泡

### 请简述`JavaScript`中的`this`

JS 中的`this`是一个相对复杂的概念，不是简单几句能解释清楚的。粗略地讲，函数的调用方式决定了`this`的值。我阅读了网上很多关于`this`的文章，[Arnav Aggrawal](https://medium.com/@arnav_aggarwal) 写的比较清楚。`this`取值符合以下规则：

1. 在调用函数时使用`new`关键字，函数内的`this`是一个全新的对象。
1. 如果`apply`、`call`或`bind`方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。
1. 当函数作为对象里的方法被调用时，函数内的`this`是调用该函数的对象。比如当`obj.method()`被调用时，函数内的 this 将绑定到`obj`对象。
1. 如果调用函数不符合上述规则，那么`this`的值指向全局对象（global object）。浏览器环境下`this`的值指向`window`对象，但是在严格模式下(`'use strict'`)，`this`的值为`undefined`。
1. 如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定`this`的值。
1. 如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，`this`被设置为它被创建时的上下文。

### onkeydown、 onkeyup 、onkeypress

在網頁的鍵盤事件操作有三種 keydown, keypress, keyup，針對這三者之間的差異，以下就做個簡單的分享與介紹：

1. **keydown**
   所謂的keydown就是指按下鍵盤的那個剎那，任何的鍵盤按鍵按下都可以取得對應的鍵盤代碼，也就是所謂的keyCode。例如：a -> 65、b -> 66、 c -> 67……依此類推，但不區分大小寫。也就是說大寫和小寫是一樣的keyCode。其中也包括Enter -> 13、ESC -> 27、方向鍵 -> 37~40、倒退鍵 -> 8 ......等等。此外當按下鍵盤不放時，則會不斷地連續觸發該事件。
2. **keypress**
   與keydown不同在於，keypress只會針對可以輸出文字符號的按鍵有效，也就是說ESC、方向鍵、倒退鍵......等等。這類沒有辦法輸出文字的鍵無法觸發該事件。此外也會因為大小寫的不同取得不同的keyCode，舉例來說：a -> 97、A -> 65、b -> 98、B -> 66......依此類推。也和keydown一樣當按下鍵盤不放時，則會不斷地連續觸發該事件。
3. **keyup**
   而keyup是指放開鍵盤的那個剎那，觸發該事件。因為每次只會放開鍵盤一次，所以不會有連續觸發的狀況發生。取得keyCode的部分基本上跟keydown是一樣的。不過若是想要取得input的value，也只有在keyup的事件上可以拿到目前最新的value。

這三者事件的觸發優先順序為：keydown→keypress→keyup

### NodeList与HTMLCollection之间的区别

**NodeList：**`Node.childNodes` 是实时集合。在其他情况下，`NodeList` 是一个静态集合，也就意味着随后对文档对象模型的任何改动都不会影响集合的内容，如`document.querySelectorAll`;

**HTMLCollection：**`HTMLCollection` 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合**；**HTML DOM 中的 `HTMLCollection` 是即时更新的（live）；当其所包含的文档结构发生改变时，它会自动更新。

### 回流与重绘

在讨论回流与重绘之前，我们要知道：

浏览器使用流式布局模型 (Flow Based Layout)。
浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree。
有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一。

一句话：回流必将引起重绘，重绘不一定会引起回流。

#### 回流 (Reflow)

当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。
会导致回流的操作：

页面首次渲染
浏览器窗口大小发生改变
元素尺寸或位置发生改变
元素内容变化（文字数量或图片大小等等）
元素字体大小变化
添加或者删除可见的DOM元素
激活CSS伪类（例如：:hover）
查询某些属性或调用某些方法

#### 一些常用且会导致回流的属性和方法

clientWidth、clientHeight、clientTop、clientLeft
offsetWidth、offsetHeight、offsetTop、offsetLeft
scrollWidth、scrollHeight、scrollTop、scrollLeft
scrollIntoView()、scrollIntoViewIfNeeded()
getComputedStyle()
getBoundingClientRect()
scrollTo()

#### 重绘 (Repaint)

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

##### 性能影响

回流比重绘的代价要更高。
有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。

优化：

浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。
当你访问以下属性或方法时，浏览器会立刻清空队列：

- clientWidth、clientHeight、clientTop、clientLeft
- offsetWidth、offsetHeight、offsetTop、offsetLeft
- scrollWidth、scrollHeight、scrollTop、scrollLeft
- width、height
- getComputedStyle()
- getBoundingClientRect()

因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，浏览器也会强行清空队列，确保你拿到的值是最精确的。

#### 如何避免

##### CSS

1. 避免使用table布局。
2. 尽可能在DOM树的最末端改变class。
3. 避免设置多层内联样式。
4. 将动画效果应用到position属性为absolute或fixed的元素上。
5. 避免使用CSS表达式（例如：calc()）。

##### JavaScript

1. 避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
2. 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。
3. 也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。
4. 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
5. 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流

### 滚轮事件浏览器兼容性

#### mousewheel事件(兼容opera,chrome,safari,IE)

mousewheel事件对应的event对象包含一个wheelDelta属性。用户滚动鼠标滚轮时，wheelDelta的值是正负120的倍数。一般情况下，监听wheelDelta的正负值，就可以确定鼠标滚轮的滚动方向。

```js
document.addEventListener('mousewheel',function(event){
    console.log( event.wheelDelta > 0 )
},false) 
```

#### DOMMouseScroll事件(兼容FireFox)

FireFox支持一个名为DOMMouseScroll的类似事件，类比于mousewheel。不同的是，鼠标滚轮的信息保存在detail属性里面。还有一点，用户滚动鼠标滚轮时，detail的值是正负3的倍数。

```js
document.addEventListener('DOMMouseScroll',function(event){
    console.log( event.detail > 0 )
},false)
```

### 跨域问题及其解决办法

如果两个 URL 具有相同的协议，域和端口，则称它们是“同源”的。，而“同源策略”的机制规定，同源下的文件可以相互通信，非同源下的不可以，如果非要通信，JS就报错---“跨域错误”。

#### 解决

- document.domain + iframe跨域
- location.hash + iframe
- window.name + iframe跨域
- postMessage跨域
- nginx代理跨域
- nodejs中间件代理跨域
- WebSocket协议跨域

### attr() 和 prop()区别

- attr()的内部原生JS实现set get方法；prop()的原生实现是直接的点语法
- 操作自带属性用prop()，自定义属性用attr()
- 操作属性名和属性值相同的属性时，使用prop()

- 特性（attribute）— 写在 HTML 中的内容。
- 属性（property）— DOM 对象中的内容。

简略的对比：

|      | 属性                                   | 特性                         |
| :--- | :------------------------------------- | :--------------------------- |
| 类型 | 任何值，标准的属性具有规范中描述的类型 | 字符串                       |
| 名字 | 名字（name）是大小写敏感的             | 名字（name）是大小写不敏感的 |

操作特性的方法：

- `elem.hasAttribute(name)` — 检查是否存在这个特性。
- `elem.getAttribute(name)` — 获取这个特性值。
- `elem.setAttribute(name, value)` — 设置这个特性值。
- `elem.removeAttribute(name)` — 移除这个特性。
- `elem.attributes` — 所有特性的集合。

在大多数情况下，最好使用 DOM 属性。仅当 DOM 属性无法满足开发需求，并且我们真的需要特性时，才使用特性。

### 什么是闭包（closure），为什么使用闭包？

闭包是指有权访问另一个函数作用域中变量的函数，即被保护起来的函数和变量形成的作用域称为闭包。闭包使得函数可以在其作用域外部获取外部变量，而这些变量在函数定义时不在其作用域内。

当一个函数内嵌套另一个函数时，内部函数可以访问外部函数的变量。外部函数的变量会被保存在内部函数的作用域中，即使外部函数的执行已经结束，这些变量仍然可以被内部函数访问。由于内部函数可以访问外部函数的变量，而外部函数又无法访问内部函数的变量，所以形成了闭包。

闭包可以用来模拟块作用域，可以用来封装私有变量和私有方法，还可以用来实现函数柯里化和函数记忆等高级函数。当然，闭包也会带来一定的风险，比如内存不释放、变量污染等问题，需要注意管理好闭包。

下面是一个简单的闭包示例：

```javascript
function outerFunction() {
  var outerValue = 'I am outside!';

  function innerFunction() {
    console.log(outerValue);
  }

  return innerFunction;
}

var inner = outerFunction();
inner(); // 输出 "I am outside!"
```

在这个示例中，函数`innerFunction`引用了其外部作用域`outerFunction`中的变量`outerValue`，因此`innerFunction`形成了闭包。在调用`outerFunction`后，返回值被赋给了变量`inner`。当在调用`inner`时，`innerFunction`仍然可以访问`outerValue`的值，因为它形成了闭包。

其他应用：

- 利用闭包实现数据私有化或模拟私有方法。这个方式也称为[模块模式（module pattern）](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)。
- [部分参数函数（partial applications）柯里化（currying）](https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.l4b6l1i3x).

### JavaScript 中创建对象的方式

1. 使用 `{}` 语法创建对象字面量。
2. 使用 `new Object()` 方法创建对象。
3. 使用构造函数创建对象，例如 `function Person(name) { this.name = name; }`，然后通过 `new Person('张三')` 来创建实例。
4. 使用原型方式创建对象，例如 `var obj = Object.create(proto)`。其中 `proto` 是指定的原型对象。
5. 使用 ES6 的 class 语法来创建面向对象的形式，例如 `class Person { constructor(name) {this.name = name;} }`，然后通过  `new Person('张三')` 来创建实例。

### node加载http

在 `Node.js` 中，可以使用内置模块 `http` 来创建 `HTTP` 服务器和客户端。以下是一个简单的示例：

```js
// 加载 http 模块
const http = require('http');

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头
  res.setHeader('Content-Type', 'text/plain');

  // 发送响应数据
  res.write('Hello, World!');
  res.end();
});

// 监听端口
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

在这个例子中，我们首先使用 `require` 函数加载了 `http` 模块，然后使用 `http.createServer` 方法创建了一个 `HTTP` 服务器。在服务器的回调函数中，我们设置了响应头和响应数据，并发送了响应数据。最后，我们使用 `server.listen` 方法监听了端口 `3000`，并在控制台输出了一条提示信息。

可以在浏览器中访问 [localhost](http://localhost:3000) 来查看服务器返回的响应数据。

### `with`改变作用域

`with` 是 JavaScript 中的一个语句，它可以将一个对象添加到作用域链的头部，从而在代码块内快速访问该对象的属性和方法。

使用 `with` 可能会改变作用域，因为在使用 `with` 语句时，JavaScript 引擎需要在执行代码块之前检查对象的所有属性，以便将它们添加到作用域链。这可能会导致代码的性能下降，并且在搜索属性时可能会出现意外的结果。此外，`with` 语句可能会使代码更难以理解和维护。

以下是一个使用 `with` 语句的示例：

```js
var person = {
  name: 'John',
  age: 30
};

`with` (person) {
  console.log(name + ' is ' + age + ' years old.');
}
```

在这个例子中，我们定义了一个包含 name 和 age 属性的对象 person。然后，我们使用 `with` 语句将 person 对象添加到作用域链的头部，并在代码块内使用了它的 name 和 age 属性。在这个例子中，使用 `with` 语句可以使代码更加简洁。

但是，建议不要使用 `with` 语句，因为它可能会导致代码性能下降并引起不必要的错误。在绝大部分情况下，都可以通过其他方式实现相同的效果。

### 微信小程序生命周期、鉴权登录、支付流程

#### 微信小程序的生命周期

1. 小程序启动阶段：小程序启动时，会执行app.js中的onLaunch()方法，这是小程序生命周期的开始。

2. 小程序显示阶段：当小程序启动后，会根据配置文件app.json中的配置信息，显示各个页面。

3. 小程序隐藏阶段：当小程序不再处于前台时，进入隐藏状态，此时会触发onHide()方法。

4. 小程序卸载阶段：当小程序被完全关闭时，会触发onUnload()方法。

#### 微信小程序的鉴权登录流程

1. 用户进入小程序，在小程序中点击登录按钮。

2. 小程序会请求服务器获取code。

3. 获取到code之后，小程序向服务器发送请求，请求服务器换取sessionkey。

4. 服务器根据code换取sessionkey，并将sessionkey和一个唯一的openid返回给小程序。

5. 小程序将sessionkey和openid缓存到本地。

6. 用户在小程序内部进行各种操作时，小程序会将用户的openid发送到服务器，服务器根据openid判断用户信息是否合法。

#### 微信小程序的支付流程

1. 用户在小程序内部选择商品并提交订单。

2. 小程序向服务器发送请求，请求下单接口。

3. 服务器返回预支付订单信息和签名串。

4. 小程序调用微信支付接口，并将预支付信息和签名传输给微信支付后台。

5. 微信支付后台校验预支付信息和签名，校验通过后返回预支付结果。

6. 小程序接收到预支付结果，提示用户进行支付。

7. 用户成功完成支付后，微信支付后台返回支付结果，小程序接收到支付结果，并将结果发送到服务器进行校验。

8. 服务器接收到状态为支付成功的回调通知，更新订单状态，并向用户发送订单支付成功的通知。

### V8 垃圾回收

V8 是一款非常优秀的 JavaScript 引擎，在 Node.js 和 Chrome 等浏览器中广泛使用。V8 使用了基于标记-清除垃圾回收算法（Mark-and-Sweep Garbage Collection Algorithm）的自动垃圾回收机制，可以自动管理内存。

V8 内存分为新生代和老生代两个区域，新生代用于存放活跃时间较短的对象，而老生代则用于存放活跃时间较长的对象。新生代内存分为 From 和 To 两个空间，对象在 From 空间进行分配，当进行垃圾回收时，活跃对象会被复制到 To 空间，同时 From 空间变成空闲状态，反之亦然。垃圾回收的过程分为标记和清除两个阶段，通过遍历根对象，标记所有与其相关的对象，然后进行清除操作。

在老生代区域，V8 则使用了更高级别的垃圾回收算法，如标记-压缩垃圾回收算法（Mark-and-Compact Garbage Collection Algorithm）和增量标记（Incremental Marking）等。增量标记用于将标记和清除两个操作分为多个阶段，避免了长时间的停顿，可以提高应用运行的流畅性。

值得注意的是，V8 还有一项优化机制，叫做内联缓存（Inline Cache），通过记录对象属性的类型，可以减少变量访问的时间。当获取对象属性时，V8 会先检查对象上该属性的类型是否变化，从而提高函数的效率。

总的来说，V8 对于内存管理的优化非常细致，不仅使用了多种垃圾回收算法，还有内联缓存等优化措施，从而让 JavaScript 程序可以更高效、流畅地运行。

### OpenLayer常用对象

1. Map （地图对象）
2. View （视图对象）
3. Layer （图层对象）
4. Source （数据源对象）
5. Feature （要素对象）
6. Geometry （几何对象）
7. Style （样式对象）
8. Control （控件对象）
9. Interaction （交互对象）
10. Projection （投影对象）

### 自定义React Hooks

 自定义React Hooks 是在 React v16.8 之后推出的，它允许我们将组件逻辑提取到可重用的函数中，从而可以减少组件中的样板代码，并更好地组织组件逻辑。自定义 React Hooks 应该遵循以下规则：

1. 自定义Hooks 命名应该以 “use” 开头。

2. React Hook 必须在组件的顶层作用域中调用，不能在循环，条件语句等函数内调用。

下面是一个自定义 React Hooks 的示例代码，该自定义 Hook 可以设置和获取元素的宽度和高度：

```
import { useState, useEffect } from 'react';

function useElementSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      });
    }

    if (ref.current) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [ref.current]);

  return size;
}

export default useElementSize;
```

在这个例子中，我们使用了 useState 和 useEffect 这两个常见的 React Hooks，来获取元素的宽度和高度，并实时更新宽度和高度。我们将其封装在自定义 Hook 中，这样，每个需要获取元素大小的组件都可以使用这个自定义 Hook，而无需再重复编写代码。

在组件中使用该 Hook：

```
import useElementSize from './useElementSize';

function App() {
  const ref = useRef(null);
  const { width, height } = useElementSize(ref);

  return (
    <div ref={ref}>
      The size of this div is {width}px x {height}px.
    </div>
  );
}

export default App;
```

在这个例子中，我们使用了 useRef 来获取元素的引用，然后将其传递给 useElementSize 这个自定义 Hook 中，从而获取 div 元素的宽度和高度，并实时更新这两个值。

总之，自定义 React Hooks 允许我们在组件之间和项目之间共享逻辑代码，并且可以有效减少代码的重复程度，提高代码的重用性和维护性。

### 函数和自定义 Hook 的区别

在 React 中，函数和自定义 Hook 都可以达到封装代码的效果。但是，它们的使用场景和优劣势是不一样的，下面是它们之间的优异比较：

使用场景：

- 函数通常用于封装一些简单的、单一的逻辑代码，如计算、格式化、验证等操作。
- 自定义 Hook 通常用于封装一组相关的、共享的状态逻辑，如获取远程数据、订阅事件等操作。

优劣势：

- 函数的优劣势在于使用简单灵活，可随意添加、删除、修改函数。
- 自定义 Hook 的优点是提高了代码的复用性，尤其是在实现类似的功能时，可以减少代码的复制和粘贴。

使用注意：

- 在使用自定义 Hook 时应注意，使用 Hook 的组件与自定义 Hook 之间是解耦的，自定义 hook 中尽量不要对组件进行调用和操作，保持独立性和可复用性。
- 函数代码尽量可被重用，配置项使用更加模块化和易用。

总之，在 React 中，函数和自定义 Hook 的优劣势，以及针对不同的使用场景，开发者可以根据具体情况灵活选择和使用，以达到更好的代码复用和封装效果。

### useDebounce

自定义 `useDebounce` 是一个常见的操作，其作用是将一个容易频繁触发的操作（如搜索、滚动等）进行节流，避免频繁的无效请求。

下面是一个自定义 `useDebounce` 的示例代码：

```jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

该代码将使用 `useState` 和 `useEffect` 自定义了一个 `useDebounce` Hook，用于对 `value` 进行 `delay` 毫秒的节流处理，并返回节流处理后的结果。

使用该 Hook 的代码示例：

```jsx
import { useState } from 'react';
import useDebounce from './useDebounce';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 500);

  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }

  function handleSearch() {
    // 发送搜索请求
  }

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchValue]);

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button onClick={handleSearch}>搜索</button>
    </div>
  );
}

export default App;
```

在这个例子中，我们将用户输入的搜索关键字通过 `useState` 更新，并用 `useDebounce` 对其进行节流处理，最后在搜索请求前，通过 `useEffect` 监听节流处理后的搜索关键字，并进行搜索请求。

总之，使用自定义的 `useDebounce` Hook 可以对容易频繁触发的操作进行节流处理，从而达到更好的用户体验和代码优化效果。
