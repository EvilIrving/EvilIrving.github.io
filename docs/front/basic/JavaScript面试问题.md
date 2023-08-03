

## 题目：无答案

- 浏览器
  - SEO
  - 跨域CORS
  - 浏览器缓存
  - 垃圾回收机制
  - 从URL 到渲染完成的整个过程，包括 DOM 构建的过程
  - 本地存储、Cookie及其之间的区别
- JavaScript
  - 数据类型
  - CommonJS、AMD、CMD、ES Modules，模块加载机制
  - 原型、原型链、原型继承、this、apply、call、New操作符
  - 图片格式：png、jpg、gif、webp
  - git和svn git工作流
  - 各种位置的区别
  - 文件编码、URL 编码、Unicode编码：一个gbk编码的页面如何正确引用一个utf8的的资源
  - 移动端适配方案、移动端300毫秒延迟、移动端点击穿透
  - Async 和 Defer 的作用和区别
  - DOMContentLoaded 事件和 Load 事件的区别
  - 作用域链、执行上下文和执行栈
  - Set、Map、WeakSet 和 WeakMap 的区别
  - GET和POST的不同
  - 闭包、其特性、影响
  - 常见的内存泄露
  - 事件委托、事件循环、事件(流)模型（冒泡、捕获）；什么事件不支持冒泡，捕获
  - 普通函数、箭头函数和构造函数的区别
  - Proxy Reflect
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
- Node
  - Nodejs 异步IO模型
  - Linux命令
- [计算机网络](https://juejin.cn/post/6901438933826502670#heading-1)
  - [DNS](http://www.sunhao.win/articles/netwrok-dns.html)
  - HTTP/HTTPS
  - AJAX、常见HTTP状态码
  - 三次握手和四次挥手
  - WebSocket
  - XSS：XSS 攻击是什么，XSS 攻击手段，XSS 防御方法？
  - CSRF：CSRF 攻击是什么，CSRF 攻击手段，CSRF 防御方法？
  - SQL 注入：什么是 SQL 注入？
  - 流量劫持：什么是 DNS 劫持，什么是 HTTP 劫持？
  - 对称加密 + 非对称加密
  - 公钥加密和私钥加密
- [设计模式](https://www.cnblogs.com/cczlovexw/p/16899624.html)
  
  | Singleton Pattern | 一个类只能构造出一个唯一实例 | Redux/Vuex 的 Store |
  | --- | --- | --- |
  | 工厂模式 | 对创建对象逻辑的封装 | jQuery 的 `$(selector)` `VNode` |
  | Observer Pattern | 当一个对象被修改时，会自动通知它的依赖对象 | EventBus、Vue 的双向绑定 |
  | 装饰器模式 | 对类的包装，动态地扩展类的功能 | React 的高阶组件、ES7 装饰器 |
  | Adapter Pattern | 兼容新旧接口，对类的包装 | Axios adapter |
  | Proxy Pattern | 控制对象的访问 | interceptor、ES6 的 `Proxy` |
  | Strategy Pattern | 策略的实现和使用分离 | 表格 `formatter` `validator` |

- 算法
  - 字符串、数组、栈、队列、链表、树、深度优先搜索、广度优先搜索、回溯、滑动窗口、双指针
- 框架
  - 组件通信
  - 响应式数据原理
  - 虚拟dom 与 diff 算法
  - 框架之间的对比
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
    - React Fiber
    - [自定义Hooks](https://ahooks.gitee.io/zh-CN/hooks/use-request/index)
  - 小程序
    - 小程序的页面构成/生命周期
    - 提高小程序的首屏加载时间
    - Wxss 与 css 的区别请简述
    - 小程序的双向绑定和 vue 的异同？
    - 微信扫一扫二维码网页上登陆前后端过程
    - 微信支付流程
  - Uni-app
- Webpack
  - 热更新原理
  - Tree Shaking
  - 性能优化
  - Babel的原理
    - **解析**：将代码转换成 `AST`
      - **词法分析**：将代码（字符串）分割为 `token` 流，即语法单元成的数组
      - **语法分析**：分析 token 流（上面生成的数组）并生成 `AST`
    - **转换**：访问 `AST` 的节点进行变换操作生产新的 `AST`
      - `Taro` 就是利用 `babel` 完成的小程序语法转换
    - **生成**：以新的 `AST` 为基础生成代码
  - 写一个babel插件
  - Webpack 与 Vite 区别

- 个人
  - 项目中难点、亮点、解决方案
  - 职业想法和规划
- 反问
  - 上下班时间，和加班情况，如何算加班费或调休
  - 晋升机制+薪资构成 年终奖几个月
  - 社保和公积金基数按什么标准
  - 是否有技术分享会或培训
  - 部门架构&&工作职责
  - 面试官本人在什么部门负责什么工作（如果对方在面试过程中没有自我介绍的话）
  - 面试官在该公司工作了多久，认为公司的优缺点是什么

## 浏览器

### 你做的页面在哪些流览器测试过？这些浏览器的内核分别是什么?

- IE --> trident内核
- Firefox --> gecko内核
- Safari --> webkit内核
- Opera -->  Blink
- Chrome --> Blink 基于webkit

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

### V8 垃圾回收

V8 是一款非常优秀的 JavaScript 引擎，在 Node.js 和 Chrome 等浏览器中广泛使用。V8 使用了基于标记-清除垃圾回收算法（Mark-and-Sweep Garbage Collection Algorithm）的自动垃圾回收机制，可以自动管理内存。

V8 内存分为新生代和老生代两个区域，新生代用于存放活跃时间较短的对象，而老生代则用于存放活跃时间较长的对象。新生代内存分为 From 和 To 两个空间，对象在 From 空间进行分配，当进行垃圾回收时，活跃对象会被复制到 To 空间，同时 From 空间变成空闲状态，反之亦然。垃圾回收的过程分为标记和清除两个阶段，通过遍历根对象，标记所有与其相关的对象，然后进行清除操作。

在老生代区域，V8 则使用了更高级别的垃圾回收算法，如标记-压缩垃圾回收算法（Mark-and-Compact Garbage Collection Algorithm）和增量标记（Incremental Marking）等。增量标记用于将标记和清除两个操作分为多个阶段，避免了长时间的停顿，可以提高应用运行的流畅性。

值得注意的是，V8 还有一项优化机制，叫做内联缓存（Inline Cache），通过记录对象属性的类型，可以减少变量访问的时间。当获取对象属性时，V8 会先检查对象上该属性的类型是否变化，从而提高函数的效率。

总的来说，V8 对于内存管理的优化非常细致，不仅使用了多种垃圾回收算法，还有内联缓存等优化措施，从而让 JavaScript 程序可以更高效、流畅地运行。

v8 的垃圾回收机制基于分代回收机制，这个机制又基于世代假说，这个假说有两个特点，一是新生的对象容易早死，另一个是不死的对象会活得更久。基于这个假说，v8 引擎将内存分为了新生代和老生代。新创建的对象或者只经历过一次的垃圾回收的对象被称为新生代。经历过多次垃圾回收的对象被称为老生代。
新生代被分为 From 和 To 两个空间，To 一般是闲置的。当 From 空间满了的时候会执行Scavenge 算法进行垃圾回收。当我们执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行。这个算法分为三步：

  1. 首先检查 From 空间的存活对象，如果对象存活则判断对象是否满足晋升到老生代的条件，如果满足条件则晋升到老生代。如果不满足条件则移动 To 空间。
  2. 如果对象不存活，则释放对象的空间。
  3. 最后将 From 空间和 To 空间角色进行交换。新生代对象晋升到老生代有两个条件：
     1. 第一个是判断是对象否已经经过一次 Scavenge 回收。若经历过，则将对象从 From 空间复制到老生代中；若没有经历，则复制到 To 空间。
     2. 第二个是 To 空间的内存使用占比是否超过限制。当对象从 From 空间复制到 To 空间时，若 To 空间使用超过 25%，则对象直接晋升到老生代中。设置 25% 的原因主要是因为算法结束后，两个空间结束后会交换位置，如果 To 空间的内存太小，会影响后续的内存分配。
老生代采用了标记清除法和标记压缩法。标记清除法首先会对内存中存活的对象进行标记，标记结束后清除掉那些没有标记的对象。由于标记清除后会造成很多的内存碎片，不便于后面的内存分配。所以了解决内存碎片的问题引入了标记压缩法。
由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法由于内存小，每次停顿的时间不会太长，但对于老生代来说每次垃圾回收的时间长，停顿会造成很大的影响。 为了解决这个问题 V8 引入了增量标记的方法，将一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会，就这样交替运行。

### 浏览器架构

- 用户界面
  - 主进程
  - 内核
    - 渲染引擎
    - JS 引擎
      - 执行栈
    - 事件触发线程
      - 消息队列
        - 微任务
        - 宏任务
    - 网络异步线程
    - 定时器线程

## HTTP

### http和https

#### HTTP

- HTTP/0.9：传输体积很小的文件，没有 `HTTP` 请求头和请求体，服务器也不返回头信息。
- HTTP/1.0：核心诉求是支持多种类型的文件下载。加入了请求头和响应头支持多种不同类型的数据。以及状态码、`Cache` 机制、用户代理等。
- HTTP/1.1
  - 默认开启 `Connection: keep-alive`，让一个 `TCP` 连接能重复发送/接收多次 `HTTP` 请求。
  - 新增了六种请求方法：`OPTIONS`、`PUT`、`PATCH`、`DELETE`、`TRACE` 和 `CONNECT` 方法。
- HTTP/2.0
  - **头部压缩**：`HTTP/2` 压缩消息头，减少了传输数据的大小
  - **多路复用**：即多个请求都通过一个 `TCP` 连接并发地完成
  - **服务器推送**：服务端能够主动把资源推送给客户端
- HTTP/3.0
  - 实现了类似 TCP 的流量控制、传输可靠性的功能。
  - 集成了 TLS 加密功能。
  - 实现了 HTTP/2 中的多路复用功能。
  - 实现了快速握手功能。

##### http1.1 和 和 http1.0 之间有哪些区别

1. 缓存策略：HTTP 1.1具有更强大和灵活的缓存策略，此版本允许客户端和服务器进行高效的缓存，以减少带宽和延迟。

2. 请求方式：HTTP 1.1引入了新的请求方法，如PUT和DELETE等。HTTP 1.0只支持GET和POST方法。

3. 流水线技术：HTTP 1.1具有流水线技术，它允许客户端一次发送多个请求，而HTTP 1.0只能一次进行一个请求和响应。

4. 请求头：HTTP 1.1中的请求头比HTTP 1.0中更具扩展性，允许更灵活的请求和响应。

5. 长连接:HTTP 1.1假设所有的连接都是持久化的，请求和响应之间可以多次复用同一个TCP连接，并在无需重新建立连接的情况下传输多个请求和响应。但在HTTP 1.0中，每次请求和响应都需要重新建立连接。

#### HTTPS

HTTPS 协议是由 HTTP 和 SSL 协议构建的可进行加密传输和身份认证的网络协议，作用是建立一个信息安全通道，来确保数组的传输，确保网站的真实性。

##### 工作原理

1. 浏览器请求 `URL`，找到服务器，向服务器发送请求。服务器将自己的证书（包含服务器公钥）、对称加密算法种类以及其他相关信息返回给浏览器。
2. 浏览器检查 `CA` 证书是否可依赖，确认证书有效。
3. 如果不是，给服务器发警告，询问是否可以继续使用。
4. 如果是，浏览器使用公钥加密一个随机对称秘钥，包含加密的 `URL` 一起发送给服务器。
5. 服务器用自己的私钥解密浏览器发送的钥匙，然后用这把对称加密的钥匙给浏览器请求的 `URL` 连接解密。
6. 服务器用浏览器发送的对称钥匙给请求的网页加密，浏览器使用相同的钥匙就可以解密网页。

#### 对比

- **概念对比**。`HTTP` 是超文本传输协议，信息是明文传输，`HTTPS` 则是具有安全性的 `SSL` 加密传输协议。
- **费用对比**。`HTTPS` 协议需要 `CA` 证书，费用较高。
- **连接方式和端口**。使用不同的连接方式，端口也不同，一般而言，`HTTP` 协议的端口为 `80`，`HTTPS` 的端口为 `443`。
- **安全性对比**。`HTTP` 的连接很简单，是无状态的；`HTTPS` 协议是由 `SSL + HTTP` 协议构建的可进行加密传输、身份认证的网络协议，比 `HTTP` 协议安全。

#### 三次握手和四次挥手

> 一句话：客户端和服务端都需要直到各自可收发，因此需要三次握手。  

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

#### TCP和UDP的区别

- TCP是面向连接的，udp是无连接的即发送数据前不需要先建立链接。
- TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付。 并且因为tcp可靠，面向连接，不会丢失数据因此适合大数据量的交换。
- TCP是面向字节流，UDP面向报文，并且网络出现拥塞不会使得发送速率降低（因此会出现丢包，对实时的应用比如IP电话和视频会议等）。
- TCP只能是 1 对 1 的，UDP支持 1 对 1 , 1 对多。
- TCP的首部较大为 20 字节，而UDP只有 8 字节。
- TCP是面向连接的可靠性传输，而UDP是不可靠的。

### WebSocket的实现和应用

`WebSocket` 是 `HTML5` 新增的一种全双工通信协议，客户端和服务器基于 TCP 握手连接成功后，两者之间就可以建立持久性的连接，实现双向数据传输。

对比一下 `HTTP` 和 `WebSocket`。

- 相同点
  1. 都需要建立 `TCP` 连接
  2. 都属于七层协议中的应用层协议
- 不同点
  1. `HTTP` 是单向数据流，客户端向服务器发送请求，服务器响应并返回数据；`WebSocket` 连接后可以实现客户端和服务器双向数据传递，除非某一端断开连接。
  2. `HTTP` 的 `url` 使用 `http//` 或者 `https//` 开头，而 `WebSocket` 的 `url` 使用 `ws//` 开头

 `WebSocket` 的一个使用方式

```js
const ws = new WebSocket("ws//:xxx.xx", [protocol])

ws.onopen = () => {
  ws.send('hello')
  console.log('send')
}

ws.onmessage = (ev) =>{
  console.log(ev.data)
  ws.close()
}

ws.onclose = (ev) =>{
  console.log('close')
}

ws.onerror = (ev) =>{
  console.log('error')
}
```

`Socket.io` 基于 `WebSocket`，加上轮询机制以及其他的实时通讯方面的内容，实现的一个库，它在服务端实现了实时机制的响应代码。

实现一个简单的聊天。通过 `npm i` 安装依赖包后，直接通过 `node index.js` 可以开启服务。

 服务端代码

```json
{
  "devDependencies": {
    "express": "^4.15.2",
    "socket.io": "^2.3.0"
  }
}
```

> index.js

```js
let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
let path = require('path');

app.use('/', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, 'index.html'));
});

// 开启 socket.io
io.on('connection', (client) => {

  // 如果有新客户端进来，显示 ID
  console.log(`客户端 ID：${client.id}`);

  // 监听客户端的输入信息
  client.on('channel', (data) => {
    console.log(`客户端 ${client.id} 发送信息 ${data}`);
    io.emit('broadcast', data);
  });

  // 判断客户端是否关闭
  client.on('disconnect', () => {
    console.log(`客户端关闭：${client.id}`);
  });
});

server.listen(3000, () => {
  console.log('服务监听 3000 端口');
});
```

客户端代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Socket.io</title>
  <script src="https://cdn.bootcss.com/socket.io/2.2.0/socket.io.slim.js"></script>
</head>

<body>

  <input type="text" id="input">
  <button id="btn">send</button>
  <div id="content-wrap"></div>

  <script>
    window.onload = function () {
      let inputValue = null;

      // 连接 socket.io
      let socket = io('http://localhost:3000');
      // 将创建的信息以添加 p 标签的形式展示成列表
      socket.on('broadcast', data => {
        let content = document.createElement('p');
        content.innerHTML = data;
        document.querySelector('#content-wrap').appendChild(content);
      })

      // 设置输入框的内容
      let inputChangeHandle = (ev) => {
        inputValue = ev.target.value;
      }
      // 获取输入框并监听输入
      let inputDom = document.querySelector("#input");
      inputDom.addEventListener('input', inputChangeHandle, false);

      // 当用户点击发送信息的时候，进行数据交互
      let sendHandle = () => {
        socket.emit('channel', inputValue);
      }
      let btnDom = document.querySelector("#btn");
      btnDom.addEventListener('click', sendHandle, false);

      // 打页面卸载的时候，通知服务器关闭
      window.onunload = () => {
        btnDom.removeEventListener('click', sendHandle, false);
        inputDom.removeEventListener('input', inputChangeHandle, false);
      }
    };
  </script>
</body>

</html>
```

`Socket.io` 不仅支持 `WebSocket`，还支持许多种轮询机制以及其他实时通信方式，并封装了通用的接口。

这些方式包含 `Adobe Flash Socket`、`Ajax` 长轮询、`Ajax multipart streaming`、持久 `Iframe`、`JSONP` 轮询等。

换句话说，当 `Socket.io` 检测到当前环境不支持 `WebSocket` 时，能够自动地选择最佳的方式来实现网络的实时通信。

- [x] [websocket 与Socket.IO介绍](https://www.cnblogs.com/mazg/p/5467960.html)【阅读建议：10min】
- [x] [WebSocket 与 Socket.IO](https://zhuanlan.zhihu.com/p/23467317)【阅读建议：10min】
- [x] [Websocket和Socket.io的区别及应用](https://www.jianshu.com/p/970dcfd174dc)【阅读建议：20min】

## BOM

Bom是浏览器对象

- location对象
  - location.href
  - location.search
  - location.hash
  - location.host  域名部分，例如www.dreamdu.com
  - location.hostname  主域名部分，例如dreamdu.com
  - location.pathname  路径。
  - location.port--端口
  - location.protocol
  - location.assign
  - location.replace()  
  - location.reload()
- history对象
  - history.go()
  - history.back()
  - history.forward()
- Navigator对象
  - navigator.userAgent--返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)
  - navigator.cookieEnabled--返回浏览器是否支持(启用)cookie

## JavaScript

### 基本数据类型

JS 数据类型：`Boolean`/`Null`/`Undefined`/`Number`/`String`/`Symbol`/`BigInt`/`Object`

简单数据类型存放在栈中，复杂数据类型存放在堆中

堆和栈的概念存在于数据结构中和操作系统内存中。在数据结构中，栈中数据的存取方式为先进后出。而堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。完全二叉树是堆的一种实现方式。在操作系统中，内存被分为栈区和堆区。栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。堆区内存一般由程序员分配释放，若程序员不释放，程序结束时可能由垃圾回收机制回收。

[JavaScript 标准内置对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

#### 类型转换规则

其他值到字符串
其他值到数字值
其他值到布尔类型

### `valueOf`和`toString`

`{}`的`valueOf`结果为`{}`，`toString`的结果为`"[object Object]"`

`[]`的`valueOf`结果为`[]`，`toString`的结果为`""`

### 不同进制数字的表示方式

### 整数的安全范围是多少

### `~`操作符的作用

`~` 返回 2 的补码，并且 `~` 会将数字转换为 32 位整数，因此我们可以使用 `~` 来进行取整操作。`~x` 大致等同于 `-(x+1)`。

### `["1", "2", "3"].map(parseInt)`

parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，其中radix 表示要解析的数字的基数。（该值介于 2 ~ 36 之间，并且字符串中的数字不能大于radix 才能正确返回数字结果值）。此处 map 传了 3 个参数 (element, index, array)，默认第三个参数被忽略掉，因此三次传入的参数分别为 "1-0", "2-1", "3-2"因为字符串的值不能大于基数，因此后面两次调用均失败，返回 NaN ，第一次基数为 0 ，按十进制解析返回 1。

### `[].forEach.call($$(""),function(a){a.style.outline="1px solid#"+(~~(Math.random()(1<<24))).toString(16)})` [解释代码意思](https://www.iteye.com/blog/2008winstar-2128290)

1. 选取页面所有 DOM 元素。在浏览器的控制台中可以使用$$()方法来获取页面中相应的元，这是现代浏览器提供的一个命令行 API 相当于 document.querySelectorAll 方法。
2. 循环遍历 DOM 元素
3. 给元素添加 outline 。由于渲染的 outline 是不在 CSS 盒模型中的，所以为元素添加outline 并不会影响元素的大小和页面的布局。
4. 生成随机颜色函数。Math.random()*(1<<24) 可以得到 0~2^24 - 1 之间的随机数，因为得到的是一个浮点数，但我们只需要整数部分，使用取反操作符 ~ 连续两次取反获得整数部分，然后再用 toString(16) 的方式，转换为一个十六进制的字符串。

### 不同进制数字的表示方式

### 请解释事件代理/事件委托（event delegation）

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

#### 如何让事件先冒泡后捕获

在DOM标准事件模型中，是先捕获后冒泡。但是如果要实现先冒泡后捕获的效果，对于同一个事件，监听捕获和冒泡，分别对应相应的处理函数，监听到捕获事件，先暂缓执行，直到冒泡事件被捕获后再执行捕获之间。

#### DOM的分级

### 原型，原型链，作用域链

#### js获取原型的方法

- `p.__proto__`
- `p.constructor.prototype`
- `Object.getPrototypeOf(p)`

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

### 即时通讯的实现，短轮询、长轮询、SSE 和 和 WebSocket 间的区别

即时通讯可以使用多种技术实现，其中包含短轮询、长轮询、SSE和WebSocket等。以下是它们之间的区别：

1. 短轮询：短轮询是客户端在一定时间间隔内持续向服务器发送HTTP请求来查询消息是否有更新。如果有更新，则服务器返回相应的数据，否则返回一个空的响应。这种方式相对简单，但需要频繁的网络请求，会导致带宽和服务器的负载增加。

2. 长轮询：长轮询是一种向服务器发送请求并保持连接打开状态的技术。客户端发送一个长时间打开的请求，直到服务器有消息时才会返回响应，否则会等待一段时间后再关闭连接并重新打开一个新的请求以保持连接。这种方式相对于短轮询来说减少了网络请求的次数，但仍然需要频繁的重新创建连接，因此也会增加服务器的负载。

3. SSE（Server-Sent Events）：SSE是一种基于HTTP的技术，通过允许服务器向客户端推送数据，减少了客户端持续发送请求的需要。客户端先向服务器发送一个开放请求，在服务器端绑定一个响应函数，当有状态更新时，服务器端推送一条消息给客户端，客户端响应函数被触发并处理消息。SSE提供了一种单向通信的方式，服务器只能向客户端发送信息。

4. WebSocket：WebSocket是一种基于TCP的双向通信协议，通过在客户端和服务器之间建立持久连接，允许真正的双向通信。服务器可以主动向客户端发送消息而不需要等待客户端请求。WebSocket 的通信过程类似于HTTP 握手过程，但在握手成功后不会关闭连接。WebSocket 允许客户端和服务器之间进行实时通信，能够更有效地协调消息交互，减少比轮询方式更多的网络流量和服务器负载。

因此，SSE和 WebSocket 是更现代、高效的实时通信技术。长轮询和短轮询是早期实时通信技术的代表，其效率和可扩展性相对较低，但在一些场合下仍有用武之地。

### 实现多个网站之间共享登录状态

1. 单点登录（Single Sign-On, SSO）：SSO是一种在多个网站和应用程序中实现单个登录会话的解决方案。当用户在任何一个接受SSO的网站登录时，他们也会在其他所有接受SSO的网站上自动登录。

2. 跨域共享Cookie：当用户在一个网站上登录时，将该网站创建的cookie设置为一个在所有网站上都可用的域，以在不同域名之间共享它。

3. 使用Token：用户在登录后，对应的后端系统会生成一个token，并将该token保存为Cookie或者在网址上保存。在其他网站中使用同样的方式将token保持一致，即可实现跨网站的登录状态共享。

4. 统一用户信息库：将所有用户信息集中存储到一个数据库中，并在所有网站中共享该数据库，以验证用户的登录状态。

### 二维码扫描登录的原理

1. 用户打开客户端登录界面，客户端向服务器请求一个二维码登录码，请求成功后，服务器会返回一个唯一的二维码码值。

2. 服务器生成一个唯一的登录ID，将登录ID与二维码码值存储在服务器端，等待客户端扫描二维码。

3. 客户端使用摄像头扫描二维码，并从中获取二维码码值，并在客户端中提交此码值给服务器。

4. 当服务器收到来自客户端发送的二维码码值后，将二维码码值从数据库中读取出来，然后与客户端提交的码值进行比较，如果匹配成功，服务器会获取该登录ID，并将其发送给客户端。

5. 客户端使用该登录ID向服务器发送请求，服务器验证该请求是否合法，如果合法，则将相关用户的信息返回给客户端。

在这个过程中，服务器需要及时通知客户端有关登录状态的变化。为了实现此功能，服务器可以使用以下两种不同的方式之一：

1. 服务器推送（Server Push）：通过开启一个长连接并将数据直接推送到客户端，即时通知客户端有关的登录状态变化。

2. 客户端轮询（Client Pull）：定时向服务器发出请求，查询是否有新的数据更新，这种方式相对于服务器推送，需要客户端不断地发出请求，占用更多的带宽和服务器资源。

需要注意的是，在使用服务器推送或客户端轮询时，也需要考虑到网络延迟和负载均衡等因素，以最优的性能和响应速度来完成数据传输和通知。

### escape,encodeURI,encodeURIComponent 有什么区别？ 有什么区别

encodeURI 是对整个 URI 进行转义，将 URI 中的非法字符转换为合法字符，所以对于一些在URI 中有特殊意义的字符不会进行转义。
encodeURIComponent 是对 URI 的组成部分进行转义，所以一些特殊字符也会得到转义。
escape 和 encodeURI 的作用相同，不过它们对于 unicode 编码为 0xff 之外字符的时候会有区别，escape 是直接在字符的 unicode 编码前加上 %u，而 encodeURI 首先会将字符转换为 UTF-8 的格式，再在每个字节前加上 %

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

### 发布/订阅模式和观察者模式区别

发布/订阅模式和观察者模式都是用于对象间的通信，但它们之间有几个关键的区别：

1. 松耦合性：在观察者模式中，观察者直接订阅主题，并接收更新。但在发布/订阅模式中，发布者和订阅者不知道对方的存在。它们只通过事件通道通信。这建立了一种松耦合的架构，使组件之间相互独立，互不影响。

2. 中心枢纽：发布/订阅模式中，有一个称为“事件总线”的中心枢纽，用于协调所有组件之间的通信。这样可以使组件间的通信更加简单和高效。然而，在观察者模式中，主题直接通知观察者，没有中心枢纽。

3. 编程范式：观察者模式通常被认为是一种面向对象编程范式，而发布/订阅模式则更加广义，可以用于其他编程范式，如函数式编程。

### 检测Webp

浏览器通常使用以下两种方法来检测 WebP 图片格式的支持：

1. 使用 canvas 的 toDataURL 进行判断

    ```js
    const isSupportWebp = function () {
      try {
        return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
      } catch(err) {
        return false;
      }
    }

    isSupportWebp()
    ```

2. 通过加载一张 webp 图片进行判断

    ```js
    const supportsWebp = ({ createImageBitmap, Image }) => {
      if (!createImageBitmap || !Image) return Promise.resolve(false);

      return new Promise(resolve => {
          const image = new Image();
          image.onload = () => {
              createImageBitmap(image)
                  .then(() => {
                      resolve(true);
                  })
                  .catch(() => {
                      resolve(false);
                  });
          };
          image.onerror = () => {
              resolve(false);
          };
          image.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
      });
    };

    supportsWebp(window)
    ```

3. [Modernizr](https://modernizr.com/)

### 图片优化

1. 图片压缩
2. 图片格式优化：选择合适的图片格式可以有效减小图片的文件大小。JPEG格式适合呈现大量的细节或颜色渐变的图片；PNG格式适合呈现颜色丰富、对比度较强或具有透明背景的图片；GIF格式适合呈现动态的图片。
3. 图片懒加载
4. 采用 CDN
5. 使用CSS精灵
6. 响应式图片
7. 图片缓存

### 保存滚动位置

1. 浏览器缓存

   - 在每次滚动事件中，记录滚动的scrollTop位置。
   - 在路由更改事件中，将scrollTop位置保存到会话存储或浏览器缓存中。
   - 在每次加载页面事件中，检查是否有scrollTop位置在会话存储或浏览器缓存中，如果有，则将其设置为scrollTop位置。

2. ScrollToTop

```js
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);
```

将`ScrollToTop`组件包装在路由配置中即可：

```js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
```

### [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

Performance API主要包括以下几个部分：

1. Navigation Timing：提供了有关当前页面加载性能的信息，如页面开始加载和结束加载的时间、DNS查询时间、TCP连接时间、DOM处理时间、资源加载时间等。

2. User Timing：允许开发者在代码中标记时间戳，以便跟踪自定义操作的性能。

3. Resource Timing：提供有关浏览器加载每个资源的性能信息，如CSS文件、JavaScript文件、图像等，包括DNS查询、TCP连接、发送时间、接收时间等。

4. Performance Entry：提供关于各种浏览器活动的高级性能指标，如长任务、跟踪符、内存使用等。

开发者可以使用Performance API执行以下操作：

1. 测量页面加载性能和资源性能。

2. 检测和识别性能瓶颈。

3. 优化代码和资源加载顺序，以提高性能和用户体验。

4. 监视应用程序的性能，并收集相关的性能数据。

以下是一个简单的示例代码，使用Performance API来测量页面加载时间：

```js
const performanceData = window.performance.timing;

const pageLoadTime = performanceData.loadEventEnd - performanceData.navigationStart;

console.log(`页面加载时间: ${pageLoadTime} 毫秒`);
```

### ES6模块和CommonJS/AMD/CMD

首先，ES6模块、CommonJS和AMD/CMD都是解决Javascript文件之间依赖关系的问题，并且都能够导出（export）和导入（import）模块。但它们的区别在于，ES6模块是语言层面的支持，而CommonJS/AMD/CMD是在库层面上实现的。

ES6模块与CommonJS的主要区别是：

1. CommonJS 的 require() 是同步加载模块，而ES6模块的加载是异步的，因为ES6模块的设计思想是面向浏览器的。

2. ES6模块的导出和导入模块的方式更加灵活。ES6模块的一个模块可以导出多个变量，在导入时可以使用 `import {name1, name2} from 'myModule'`的命名导入方法。也可以使用 `import * as myModule from 'myModule'` 一次性导入整个模块。而CommonJS则只能一次导出和导入一个模块。

3. ES6模块的时机更早，可以在解析代码前确定模块的依赖关系，因此在编译阶段可以做一些优化工作，例如提前导出变量、剪裁不需要的模块等。而CommonJS则需要在代码运行时解析模块的依赖关系，显得略有些低效。

ES6模块与AMD/CMD的主要区别是：

1. ES6模块是静态的，编译时确定依赖关系。而AMD/CMD则是动态的，需要在运行时确定依赖关系。

2. ES6模块的语法更加简洁，易于理解和使用。而AMD/CMD的语法相比ES6则更为复杂。

3. ES6模块支持 import/export 关键字进行导入和导出。而AMD/CMD则是使用 define()/require() 进行定义和引入。

总体而言，ES6模块相比其他模块具有更好的语法、更强的静态编译优化、更好的浏览器支持，并且是未来Javascript模块化的趋势。在现代开发中，如果不需要与旧系统集成，通常使用ES6模块是最好的选择。

### Proxy/Reflect

Proxy 是 ES6 中引入的一个新特性，它可以在目标对象和操作之间进行拦截。它提供了一个拦截器函数的集合，用来代理对目标对象属性的访问、赋值、方法调用等操作，从而可以在执行这些操作前后进行自定义处理和控制，可用于实现数据绑定、校验、缓存、权限控制、日志记录等功能。Proxy 可以代理包括基础数据类型、对象、数组、函数等各种类型的操作，极大地增强了 JavaScript 的灵活性和可扩展性。

Reflect 是一个全局对象，提供了一组静态方法，用于操作对象的属性和方法，它的每个方法和 Proxy 相应的拦截器进行性质的映射，它们是 Proxy 的基础组成部分，可以完成大多数与对象相关的元编程特性。Reflect 使得原本分散在对象上的操作变得集中和更容易分析维护，可以使代码更加清晰、简洁。

对于 Proxy 和 Reflect 的区别，主要表现在以下三个方面：

1. Proxy 对对象属性的拦截是通过钩子函数来实现的，而 Reflect 提供了与 Proxy 拦截器方法一一对应的 API，可以直接操作对象属性。

2. Proxy 可以通过修改拦截器函数，改变底层的操作行为；而 Reflect 只能通过提供新的 API 来改变底层操作行为。

3. 在 Proxy 中访问原始对象可以直接使用 target，而 Reflect 中需要传入目标对象和相关参数。

## TypeScript

### 主要特点和好处

- 特点
  - Cross-platform
  - ES6 features
  - Object-oriented language
  - Static type checking
  - Optional static typing
  - DOM manipulation
- 好处
  - less syntactical clutter
  - catching logical errors before compile-time
  - easier to read and more structured
  - due to versatile transpiling

### 内置类型（built-in data types）

- Number type

  ```ts
  let identifier: number = value;
  ```

- String type

  ```ts
  let identifier: string = " ";
  ```

- Boolean type

  ```ts
  let identifier: bool = Boolean value;
  ```

- Null type

  ```ts
  let num: number = null;
  ```

- Undefined type

  ```ts
  let num: number = undefined;
  ```

- Void type

  ```ts
  let unusable: void = undefined;
  ```

### interface

Interfaces define a contract or structure for objects that use that interface

```ts
interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (number) => number; // arrow function
    getManagerName(number): string; 
}
```

### 模块

TypeScript 中的模块是相关变量、函数、类和接口的集合

```ts
module module_name {
  class xyz{
    export sum(x, y){
      return x+y;
  }
}
```

### 类型断言

类似于其他语言中的类型转换，类型断言对运行时没有影响，仅由编译器使用。类型断言本质上是类型转换的软版本，它建议编译器将变量视为某种类型，但如果它处于不同的形式，则不会强制它进入该模型。

### 子类调用基类构造函数

  `super()`函数

### 检查 null 和 undefined

```ts
//juggle-check
if (x == null) {  
}

var a: number;  
var b: number = null;  
function check(x, name) {  
    if (x == null) {  
        console.log(name + ' == null');  
    }  
    if (x === null) {  
        console.log(name + ' === null');  
    }  
    if (typeof x === 'undefined') {  
        console.log(name + ' is undefined');  
    }  
}  
check(a, 'a');  
check(b, 'b');
```

### Omit类型

`Omit` is a form of utility type, which facilitates common type transformations. `Omit` lets you construct a type by passing a current `Type` and selecting `Keys` to be omitted in the new type.

### 装饰器

装饰器是一种特殊的声明，它允许你通过使用`@<name>`注释标记来一次性修改类或类成员。每个装饰器都必须引用一个将在运行时评估的函数。例如，装饰器`@sealed`将对应于sealed函数。任何标有 的`@sealed`都将用于评估sealed函数。

- <https://betterprogramming.pub/top-50-typescript-interview-questions-explained-5e69b73eeab1>
- [练习题](https://github.com/semlinker/awesome-typescript/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-asc)

## Node

## 框架

### MMVM、MVC

MMVM（Model-View-ViewModel）和MVC（Model-View-Controller）都是一种架构模式，用于构建应用程序。它们的区别主要在于以下几点：

1. 数据绑定方式不同。MVVM中的View和ViewModel之间使用了双向数据绑定，View中的变化会自动更新ViewModel，反之亦然。而MVC中，View和Controller之间采用的是单向数据绑定，只有Controller可以更新View。

2. 视图组件的复杂程度不同。MVVM中的ViewModel可以包含业务逻辑，因此它的功能比MVC的Controller更加复杂。ViewModel可处理网页的交互、服务端数据请求并作出回应，并控制页面的展示，避免了在View层中出现过多的业务判断逻辑和事件操作，使得View层只需专注于视图渲染和交互响应。

3. 界面开发方式不同。在MVVM中，ViewModel的自动翻译降低了View的前端开发难度，开发者无须再按照传统MVC方式编写繁琐的UI监听、事件绑定等代码。MVVM减少大量的冗余的代码，提升开发效率和开发者的开发体验。

4. 分工不同。MVVM将业务逻辑、数据映射、视图逻辑、页面展示分离，可以让各个模块更加独立，有利于团队成员的分工协作，提高开发效率。

综上所述，MVVM相对于MVC在分离视图显示和业务逻辑方面做得更加彻底，且简化开发模版和设计的复杂性，能够有效地解决大型项目中View层复杂业务逻辑的问题。

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

### 自定义React Hooks

 自定义React Hooks 是在 React v16.8 之后推出的，它允许我们将组件逻辑提取到可重用的函数中，从而可以减少组件中的样板代码，并更好地组织组件逻辑。自定义 React Hooks 应该遵循以下规则：

1. 自定义Hooks 命名应该以 “use” 开头。

2. React Hook 必须在组件的顶层作用域中调用，不能在循环，条件语句等函数内调用。

下面是一个自定义 React Hooks 的示例代码，该自定义 Hook 可以设置和获取元素的宽度和高度：

```js
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

```js
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

## 工程化
