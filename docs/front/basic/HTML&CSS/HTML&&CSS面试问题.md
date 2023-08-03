# 题目：无答案

- CSS 盒模型：标准盒模型（Content-box）、怪异盒模型（Border-box）
- HTML 5、CSS3、ES6新增内容
- DocType 的作用
- Drag API
- 常见的浏览器内核
- 渐进增强和优雅降级
- HTML5 的离线储存和工作原理
- attribute 和 property 的区别
- 伪类 LVHA 的解释
- 块级格式化上下文（BFC）、外边距折叠解决方式
- 用css实现一个硬币旋转的效果
- rem和其他单位之间的区别
- 清除浮动方式及其特点
- 元素水平和垂直居中
- position 和 display 的取值和各自的意思和用法
- 简述选择器种类及优先级、伪类和伪元素，抽离样式模块怎么写
- chrome显示小于12px的文字
- 比较 opacity: 0、visibility: hidden、 display: none 优劣和适用场景
- 移动端视口配置
- 页面导入样式时，使用 link 和 @import 有什么区别？
- 常用块元素和行内元素
- 简述Flex布局及其属性
- media媒体查询
- 回流与重绘

## 题目：含答案

### 主流浏览器内核私有属性css前缀

mozilla firefox  -moz
webkit safari,chrome -webkit

### [Flex布局](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)

Flex布局相关属性正好分为两拨，一拨作用在flex容器上，还有一拨作用在flex子项上。

|容器  |  作用 | 子项 |作用 |
| -- | -- | --  | -- |
|flex-direction |  控制子项整体布局方向 |order|改变某一个flex子项的排序位置|
|flex-wrap | 控制子项整体单行显示还是换行显示| flex-grow|扩展的就是flex子项所占据的宽度，扩展所侵占的空间就是除去元素外的剩余的空白间隙。|
|flex-flow | 是flex-direction和flex-wrap的缩写 <br> 如 `flex-flow: row-reverse rap-reverse;| flex-shrink|--|
|justify-content | 水平方向子项的对齐和分布方式| flex-basis|--|
|align-items | flex子项们相对于flex容器在垂直方向上的对齐方式| flex|--|
|align-content | 指明垂直方向每一行flex元素的对齐和分布方式| align-self|--|

### 为什么 height:100% 会无效

对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。使用绝对定位的元素会有计算值，即使祖先元素的height计算为auto也是如此。

原因：如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto，因为解释成了auto，
所以无法参与计算。

### `min-width/max-width 和 min-height/max-height` 属性间的覆盖规则？

- max-width会覆盖width，即使width是行类样式或者设置了!important。
- min-width会覆盖max-width，此规则发生在min-width和max-width冲突的时候。

### text-indent 的特殊性

### 居中

水平居中对齐一个元素如`div`，可以使用`margin：auto`（设置宽度后外边距均分）；

文本：`text-align：center`

图片居中：`margin: auto`，并将图片放在块元素（`display：block`）中；

右对齐：`position：absolute；right：0px`(左对齐同理)，可以交叠元素；或者使用`float`左右对齐，如果子元素溢出，使用overflow解决。

垂直居中对齐：`margin-top`使用`padding`设置为块宽度。垂直居中还可以使用`line-height`设置为块高度；`padding`方式联合文本居中可以水平垂直均居中

### CSS 多列等高如何实现

- 利用`table-cell`所有单元格高度都相等
- flex布局中项目`align-items`属性不设置高度或设为`auto`

### 浏览器的兼容性有哪些

- png24位的图片在iE6浏览器上出现背景
  >解决方案：做成PNG8，也可以引用一段脚本处理。

- 浏览器默认的margin和padding不同
  >解决方案：加一个全局的*{margin:0;padding:0;}来统一。

- IE6双边距bug：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或
margin-right，margin值会加倍。
  > `#box{float:left;width:10px;margin:0 0 0 10px;}` 这种情况之下IE会产生20px的距离
  > 解决方案：在float的标签样式控制中加入`_display:inline`;将其转化为行内属性。(_这个符号只有ie6会识别)

- 渐进识别的方式，从总体中逐渐排除局部。
  >首先，巧妙的使用"\9"这一标记，将IE游览器从所有情况中分离出来。
  >接着，再次使用"+"将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

  ```css
  .bb{
  background-color:#f1ee18;/*所有识别*/
  .background-color:#00deff\9;/*IE6、7、8识别*/
  +background-color:#a200ff;/*IE6、7识别*/
  _background-color:#1e0bd1;/*IE6识别*/
  }
  ```

- IE下，可以使用获取常规属性的方法来获取自定义属性，也可以使用getAttribute()获取自定义属性；Firefox下，只能使用getAttribute()获取自定义属性
  > 解决方法：统一通过getAttribute()获取自定义属性。

- IE下，event对象有x、y属性，但是没有pageX、pageY属性;Firefox下，event对象有
pageX、pageY属性，但是没有x、y属性。
  >解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

- Chrome中文界面下默认会将小于12px的文本强制按照12px显示
  > 解决方法：
  >
  >  1. 可通过加入CSS属性`-webkit-text-size-adjust:none;`解决。但是，在chrome更新到27版本之后就不可用了。
   > 2. 还可以使用`-webkit-transform:scale(0.5);`其收缩的是整个span的大小，这时候，必须要将span转换成块元素，可以使用`display：block/inline-block`；

### li 与 li 之间有看不见的空白间隔

浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个``<li>``放在一行，这导致``<li>``换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

- 为`<li>`设置`float:left`。不足：有些容器是不能设置浮动，如左右切换的焦点图等。-
- 将所有`<li>`写在同一行。不足：代码不美观。
- 将`<ul>`内的字符尺寸直接设为0，即`font-size:0`。不足：`<ul>`中的其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在Safari浏览器依然会出现空白间隔。
- 消除`<ul>`的字符间隔`letter-spacing:-8px`，不足：这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认`letter-spacing:normal`。

### margin 重叠问题

主要是掌握盒模型的概念和实际操作中盒模型如何变化，`margin`是外边框，在盒子外面。`padding`是内边框，`border`是`padding`外面的一个边，但是处于盒子里面。

必备条件：margin必须是邻接的

W3C规范条件：

- 必须是处于常规文档流（非float和绝对定位）的块级盒子，并且处于同一个BFC当中。
- 没有线盒，没有空隙，没有padding和border将他们分隔开
- 都属于垂直方向上相邻的外边距，可以是下面任意一种情况
- 元素的margin-top与其第一个常规文档流的子元素的margin-top
- 元素的margin-bottom与其下一个常规文档流的兄弟元素的margin-top
- height为auto的元素的margin-bottom与其最后一个常规文档流的子元素的margin-bottom
- 高度为0并且最小高度也为0，不包含常规文档流的子元素，并且自身没有建立新的BFC的元素的margin-top
和margin-bottom

合并的3种场景

- 相邻兄弟元素margin合并
  - 设置块状格式化上下文元素（BFC）
- 父级和第一个/最后一个子元素的margin合并
  - 对于margin-top合并，可以进行如下操作
    - 父元素设置为块状格式化上下文元素；
    - 父元素设置border-top值；
    - 父元素设置padding-top值；
    - 父元素和第一个子元素之间添加内联元素进行分隔。
  - 对于margin-bottom合并，可以进行如下操作
    - 父元素设置为块状格式化上下文元素；
    - 父元素设置border-bottom值；
    - 父元素设置padding-bottom值；
    - 父元素和最后一个子元素之间添加内联元素进行分隔；
    - 父元素设置height、min-height或max-height。
- 空块级元素的margin合并
  - 设置垂直方向的border；
  - 设置垂直方向的padding；
  - 里面添加内联元素，直接Space键空格是没用的；
  - 设置height或者min-height。

- 上下标签间隔最大值

- 左右标签间隔取相加

### 隐藏或显示标签

- `opacity: 0;`
- `visibility: hidden;`
- `display:none;`
- 绝对定位将元素移除可视区域内
- z-index 负值
- clip/clip-path 元素裁剪
- transform:scale(0,0) 来将元素缩放为 0
  - 后两种占据位置，不响应绑定的监听事件

### 有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？

这些方法与可访问性（a11y）有关。

- `width: 0; height: 0`：使元素不占用屏幕上的任何空间，导致不显示它。
- `position: absolute; left: -99999px`： 将它置于屏幕之外。
- `text-indent: -9999px`：这只适用于`block`元素中的文本。

- <https://www.w3.org/TR/wai-aria-1.1/>
- <https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA>
- <http://a11yproject.com/>

### 清除浮动

浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框的高度小于浮动框的时候，此时就会出现“高度塌陷”。

清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。

- 使用clear属性清除浮动
  - clear属性只有块级元素才有效的，而::after等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置display属性值的原因。

  ```css
  <!-- 也可以是'block'，或者是'list-item' -->
  .clear::after{
      content:'';
      display:table;
      clear:both;
   }
  ```

- 使用BFC块级格式化上下文来清除浮动

### 全屏滚动的原理是什么

`overflow：hidden；transition：all 1000 ms ease；`

### 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）

视差滚动是指多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。

question：如何实现视差滚动效果的网页

### 修改 chrome 记住密码后自动填充表单的黄色背景

### 让页面里的字体变清晰，变细用 CSS 怎么做

- webkit内核的私有属性：`-webkit-font-smoothing`，用于字体抗锯齿
- MacOS：`-webkit-font-smoothing:antialiased;`

### italic 和 oblique 的区别

italic是使用当前字体的斜体字体，而oblique只是单纯地让文字倾斜

### `position:fixed;`在`android`下无效怎么处理

因为移动端浏览器默认的viewport叫做layout viewport。在移动端显示时，因为layout viewport的宽度大于移动端屏幕的宽度，所以页面会出现滚动条左右移动，fixed的元素是相对layout viewport来固定位置的，而不是移动端屏幕来固定位置的，所以会出现感觉fixed无效的情况。

如果想实现fixed相对于屏幕的固定效果，我们需要改变的是viewport的大小为ideal viewport，可以如下设置：

```txt
<metawidth=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-sca
le=1.0,user-sca/>
```

### 去除 inline-block 元素间间距

移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

### overflow:scroll 时不能平滑滚动

启用硬件加速特性：`-webkit-overflow-scrolling:touch;`

### img图片下面有间隙的5种解决方案

1、将图片转换为块级对像

即设置img为：`display：block；`

在本例中添加一组CSS代码：`sub img {display:block;}`

2、设置图片的垂直对齐方

即设置图片的`vertical-align`属性为`「top，text-top，bottom，text-bottom」`也可以解决。如本例中增加一组CSS代码： `sub img {vertical-align:top;}`

3、设置父对象的文字大小为`0px`

即，在`#sub`中添加一行： `font-size:0;`

可以解决问题。但这也引发了新的问题，在父对像中的文字都无法显示。就算文字部分被子对像括起来，设置子对像文字大小依然可以显示，但在CSS效验的时候会提示文字过小的错误。（不建议使用）

4、改变父对象的属性

如果父对象的宽、高固定，图片大小随父对像而定，那麽可以设置： overflow:hidden; 来解决。

如本例中可以向#sub中添加以下代码：`width:88px;height:31px;overflow:hidden;`

5、设置图片的浮动属性

即在本例中增加一行CSS代码： `#sub img {float:left;}`

如果要实现图文混排，这种方法是很好的选择。

### 弹性布局

#### 布局属性及设置

不依赖于盒模型，Flex可以完成响应式的布局。

容器 flex container：设置display：（flex或inline-flex）的元素；（假如你想设置行内元素为 flexible box，也可以置 `display` 属性的值为 `inline-flex。`）

子元素 flex item

主轴main axis 和 侧轴 cross axis：不真实存在，仅用作描述方便

main axis默认水平（row），左开始右结束，cross axis默认垂直，上开始下结束；

flex-direction: column;可以更改默认方向；flex-wrap当子元素溢出时换行；存在着 `flex-direction` 和 `flex-wrap` — 的缩写 `flex-flow，按顺序。`

使用 row-reverse 和 column-reverse 值反向排列 flex 项目。

#### 容器样式和子元素样式

`align-items` 控制 flex 项在交叉轴上的位置。

- 默认的值是 `stretch`，其会使所有 flex 项沿着交叉轴的方向拉伸以填充父容器。如果父容器在交叉轴方向上没有固定宽度（即高度），则所有 flex 项将变得与最长的 flex 项一样长（即高度保持一致）。**就是说不设置子元素高度时才有用。**

- `baseline`基线对齐：侧轴起点到元素基线距离最大的元素将会于侧轴起点对齐以确定基线。

- `center` 在交叉轴居中

- `flex-start` 或 `flex-end` 使 flex 项在交叉轴的开始或结束处对齐所有的值。

- 可以用 `align-self` 属性覆盖 `align-items` 的行为。

`justify-content`控制 flex 项在主轴上的位置。

- 默认值是 `flex-start`，这会使所有 flex 项都位于主轴的开始处。

- 你也可以用 `flex-end` 来让 flex 项到结尾处。

- `center` 在 `justify-content` 里也是可用的，可以让 flex 项在主轴居中。

- 而我们上面用到的值 `space-around` 是很有用的——它会使所有 flex 项沿着主轴均匀地分布，在任意一端都会留有一点空间。

- 还有一个值是 `space-between`，它和 `space-around` 非常相似，只是它不会在两端留下任何空间。

flex-grow：默认（值为0）不分配多余空间，此值允许子元素分配多余空间

flex-shrink：子元素当空间不足时的收缩比例，默认是1；容器中子元素溢出时应该如何计算收缩值：原始宽度和收缩比例是影响因素

- step1：权重：（子元素的原始宽度*收缩比例）之和

- step2：溢出量：子元素原始宽度之和-权重

- step3：收缩比例：单个子元素的原始宽度*收缩比例/权重*溢出量

**flex-basis指定了 flex 元素在主轴方向上的初始大小。如果不使用**`**box-sizing**`**改变盒模型的话，那么这个属性就决定了 flex 元素的内容盒（content-box）的尺寸。**可以理解为子元素放进容器之前的大小，是我们假设或理想的尺寸大小，但是不一定是真实的大小，弹性子元素最终实际大小取决于容器；

**和width区别：**

content < width < flex-basis < ( limited max | min-width )

flex-basis只在弹性布局中的子元素有效；在绝对定位中对元素无效

**Note:** 当一个元素同时被设置了 flex-basis (除值为 auto 外) 和 width (**或者在 flex-direction: column 情况下设置了height 即根据主轴方向改变影响维度**) , `flex-basis` 具有更高的优先级.

**基线**是指欧洲和西亚文字排版中，用于在上面放置字符的一条假象的基准线。

缩写flex可以指定以上三个值`flex：flex-grow flex-shrink flex-basis；默认`

`flex：0 1 auto；特别的：`

`flex：auto == 1 1 auto`  

`flex：none == 0 0 auto`

`flex：1 == 1 1 0%`

[**常用布局cookbook**](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook)

### 表单类型有哪些

```html
<!-- 表单类型 -->
<form action="" method="get">
    <p>邮箱标签: <input type="email"></p>
    <p>数字标签: <input type="number"></p>
    <p>滑动条标签: <input type="range"></p>
    <p>搜索框标签: <input type="search"></p>
    <p>日期框: <input type="date"></p>
    <p>星期框: <input type="week"></p>
    <p>月份框: <input type="month"></p>
    <p>颜色框: <input type="color"></p>
    <p>网址框: <input type="url"></p>
    <div>
      <input type="submit">
      <input type="reset">
    </div>
</form>
<!--  都是 input 标签，但是渲染出来的是不同类型的页面元素。除此之外，HTML5 对 form 表单还进行了内置属性的增强。比如通用属性 placeholder、autofocus，再比如如果是 number 类型，则可以设置 min 和 max 属性，如果是 password 类型，则可以设置 minLength 和 maxLength 属性。 -->
```

链接点击后 hover 失效：a 标签的四种伪元素有着前后规则，其中 hover 需要放在 visited 后，所以将两者调换位置就可以。

### 设备像素、css像素、设备独立像素、dpr、ppi

- 设备像素指的是设备的物理像素，一般等于屏幕的分辨率，且不可变；
- css 像素是相对像素，大小取决于屏幕的缩放和 dpr 的大小。
- 设备独立像素与 css 像素是等价的。
- dpr 是像素比，一般设备的 dpr 是 1，苹果推出的 retina 屏幕的 dpr 为 2
- ppi 是每英寸的物理像素的密度，当前手机 ppi 最高可达到 1000 以上

### 样式优化有哪些

- 加载性能
  - css 压缩
  - 减少使用 @import，它导入的样式需要页面加载完毕后才加载，推荐使用 link
- 选择器性能
  - 不使用通配符选择器，消耗性能
  - 选好关键选择器，减少层级
  - ID 作为关键选择器，不需要在左边添加额外的层级
  - 用类选择器代替元素选择器
- 渲染性能
  - 减少使用 浮动、定位
  - 去除空规则
  - 使用雪碧图减少请求次数
  - 继承属性不要重复指定
  - 选择器嵌套不要超过三层
- 样式抽离
  - 将相同属性的样式抽离，整合到同一个 class 中，提高维护性
  - 样式与结构分离，采用外部引入

### 编写高效的 CSS 应该注意什么？

首先，浏览器从最右边的选择器，即关键选择器（key selector），向左依次匹配。根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。避免使用标签和通用选择器作为关键选择器，因为它们会匹配大量的元素，浏览器必须要进行大量的工作，去判断这些元素的父元素们是否匹配。

[BEM (Block Element Modifier)](https://bem.info/)原则上建议为独立的 CSS 类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。

搞清楚哪些 CSS 属性会触发重新布局（reflow）、重绘（repaint）和合成（compositing）。在写样式时，避免触发重新布局的可能。

### 什么情况下，用`translate()`而不用绝对定位？什么时候，情况相反

`translate()`是`transform`的一个值。改变`transform`或`opacity`不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。`transform`使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此`translate()`更高效，可以缩短平滑动画的绘制时间。

当使用`translate()`时，元素仍然占据其原始空间（有点像`position：relative`），这与改变绝对定位不同。

#### 参考

- <https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/>

### 浏览器如何管理和加载 HTML5 离线存储资源

1. 用户首次访问站点时，浏览器会通过 cache.manifest 文件指定的缓存清单文件中列出的所有资源将它们缓存在本地。
2. 浏览器检查清单文件中指定的资源并将它们与服务器上的副本进行比较，如有差异，它将自动下载新版本的文件并更新本地缓存。
3. 当离线用户尝试访问站点时，浏览器会从本地缓存加载资源，而不是从服务器请求新文件。

### link标签和import标签的区别

link属于html标签，而@import是css提供的页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。link是html标签，因此没有兼容性，而@import只有IE 5 以上才能识别。link方式样式的权重高于@import的。

### transition和animation的区别

Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为 2 帧，从from....to，而animation可以一帧一帧的。

### track

`<track>` 是 HTML5 中一种用于为诸如 `<video>` 和 `<audio>` 等媒体元素提供外部文本轨道的标记。

`<track>` 标签包含以下属性：

- src：文本轨道文件的 URL 地址。
- kind：指定轨道的类型。可选值包括：subtitles、captions、descriptions、chapters 和 metadata。
- srclang：轨道的语言，使用 BCP 47 格式指定。
- label：轨道的标签，用于在用户界面上显示，通常是人类可读的文本。
- default：布尔值，指示该轨道是否应该作为默认轨道。可选值为 true 或 false。

以下是一个使用 `<track>` 标签的示例：

```txt
<video controls>
  <source src="video.mp4" type="video/mp4">
  <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English" default>
  <track src="subtitles-fr.vtt" kind="subtitles" srclang="fr" label="Français">
</video>
```

在这个例子中，我们为一个 `<video>` 元素添加了两个字幕轨道，分别是英文和法文。其中，kind 属性指定了轨道的类型为字幕（subtitles），srclang 属性指定了轨道的语言，label 属性设置了轨道的文本标签，default 属性指示了默认轨道为英文字幕。

在浏览器中播放视频时，如果用户启用了字幕选项，将会显示相应的字幕。浏览器会自动选择与当前语言匹配的字幕轨道。如果没有匹配的轨道，浏览器会显示默认轨道。
浏览器缓存策略是指在浏览器中加载Web页面资源时，如何判断资源是否需要重新获取，从而达到减少网络请求，加快网页访问速度的目的。常见的浏览器缓存策略如下：

### 缓存策略

1. 强制缓存：浏览器第一次请求Web页面资源时，服务器返回资源时可以设置强制缓存，浏览器在之后的请求中，如果发现该资源存在强制缓存时，直接从本地缓存中读取资源，减少了网络请求。常用的强制缓存策略有两种：

   - Expires：设置过期时间，当客户端发起请求时，判断本地缓存是否过期，如果未过期，则直接从缓存中取数据。

   - Cache-Control：在HTTP/1.1中，Cache-Control提供了多种控制缓存的方式，如max-age、no-cache、no-store等等，默认为private。

2. 协商缓存：当强制缓存失效或者浏览器不支持强制缓存时，浏览器会发起协商缓存请求，判断服务器端资源发生了变化没有。常用的协商缓存策略有两种：

   - Last-Modified/If-Modified-Since：在请求时，服务器返回资源的最后修改时间，浏览器在下次请求时，通过If-Modified-Since请求头将上次请求时的更新时间传递给服务器，服务器根据这个时间来判断资源是否更新过。

   - ETag/If-None-Match：ETag是服务器根据资源生成的唯一标识，当客户端请求资源时，服务器返回ETag值，客户端再次请求时，带上If-None-Match请求头，服务器检查这个值是否和服务端生成的一致，如果一致，则返回304状态码，表示客户端本地缓存资源可用。

总之，浏览器缓存策略可以有效减少网络请求，提高网页载入速度，而且可以减轻服务器的负担。同时，为了避免用户看到过期的缓存资源，应该合理设置缓存时间，并定期更新缓存资源。

### dragapi

- `dragstart`：事件主体是被拖放元素，在开始拖放被拖放元素时触发，。
- `darg`：事件主体是被拖放元素，在正在拖放被拖放元素时触发。
- `dragenter`：事件主体是目标元素，在被拖放元素进入某元素时触发。
- `dragover`：事件主体是目标元素，在被拖放在某元素内移动时触发。
- `dragleave`：事件主体是目标元素，在被拖放元素移出目标元素是触发。
- `drop`：事件主体是目标元素，在目标元素完全接受被拖放元素时触发。
- `dragend`：事件主体是被拖放元素，在整个拖放操作结束时触发

### HTTP状态码

 HTTP 状态码为 3 位数，被归为 5 类：

- **1XX**：表示目前是协议处理的中间状态，还需要后续操作。
- **2XX**：表示成功状态。
- **3XX**：重定向状态，资源位置发生变动，需要重新请求。
- **4XX**：请求报文有误。
- **5XX**：服务器端发生错误。

- **101 Switching Protocols**：在 HTTP 升级为 `WebSocket` 的时候，如果服务器同意变更，就会发送状态码为 101。
- **200 OK**：请求成功状态码，响应体中含有数据。
- **204 No Content**：含义同 200，但是响应报文不含实体的主体部分。
- **206 Partial Content**：表示部分内容请求成功。使用场景为 HTTP 分块下载和断点续传，当然也会带上相应的响应头字段 `Content-Range`。
- **301 Move Permanently**：永久重定向。HTTP 升级 HTTPS，之前站点再也不用，那就是 301。
- **302 Found**：临时重定向。当前站点暂时不可用，那就是 302，后续可能换回来。
- **304 Not Modified**：当命中协商缓存时会返回这个状态码。
- **400 Bad Request**：请求无效。通常为前后端数据格式不一致或者其他原因。
- **403 Forbidden**：服务器已经得到请求，但是拒绝执行，比如没权限、法律禁止等。
- **404 Not Found**：资源未找到，服务器不存在对应的资源。
- **500 Internal Server Error**：服务器报错，有些时候可以在 Response 看到后端 PHP 等技术的报错信息等。
- **502 Bad Gateway**：服务器正常，但是访问出错。
- **503 Service Unavailable**：服务器繁忙或者停机维护，暂时无法处理请求。

### cookies、session、sessionStorage、localStorage的区别

- **cookies**：存储于浏览器端的数据。可以设置 cookies 的到期时间，如果不设置时间，则在浏览器关闭窗口的时候会消失。
- **session**：存储于服务器端的数据。session 存储特定用户会话所需的属性和配置信息。
- **cookies** 和 **session** 的区别在于：

1. cookies 数据存放在客户的浏览器上，session 数据存放在服务器上。
2. 前端都是裸君子，没有安全可言，cookies 可能会被黑客利用作数据欺骗。所以重要信息记得存 session。
3. session 如果在生效期内量过大，会占用服务器性能。
4. 单个 cookies 保存的数据不能超过 4 K，很多浏览器限制一个站点保存最多 20 个 cookies。

cookie有哪些字段可以设置

name字段为一个cookie的名称。
value字段为一个cookie的值。
domain字段为可以访问此cookie的域名。

- **sessionStorage**：生命周期存在于标签页或窗口，用于本地存储一个会话（session）中的数据，这些数据会随着窗口或者标签页的关闭而被清空。
- **localStorage**：生命周期是永久的，除非用户主动清除浏览器上存储的 localStorage 信息，否则它将会永久存在，空间 达到 5 M或更大
- **sessionStorage** 和 **localStorage** 操作方法：`setItem`、`getItem` 以及 `removeItem`。

[《前端分享之cookie的使用及单点登录》](https://segmentfault.com/a/1190000011295587)  
[《Cookie、session和localStorage、以及sessionStorage之间的区别》](https://www.cnblogs.com/zr123/p/8086525.html)

### Web Worker

在 HTML5 的新规范中，实现了 `Web Worker` 来引入 JavaScript 的 “多线程” 技术，他的能力让我们可以在页面主运行的 JavaScript 线程中加载运行另外单独的一个或者多个 JavaScript 线程。

> 注意：JavaScript 本质上还是单线程的，`Web Worker` 只是浏览器（宿主环境）提供的一个得力 API。
>
#### 调用 Web Worker

> index.js

```js
console.log('index-同步任务');
Promise.resolve().then((res) => {
  console.log('index-Promise');
});
setTimeout(() => {
  console.log('index-setTimeout');
}, 1000);
```

> index.html

```html
<script>
  window.onload = function() {
    console.log('本地-同步任务');
    // 微任务之间
    Promise.resolve().then((res) => {
      console.log('本地-微任务 1');
    })
    const worker1 = new Worker('./index.js');
    Promise.resolve().then((res) => {
      console.log('本地-微任务 2');
    })

    // 宏任务之间
    setTimeout(() => {
      console.log('本地-宏任务 1');
    }, 1000);
    const worker2 = new Worker('./index.js');
    setTimeout(() => {
      console.log('本地-宏任务 2');
    }, 1000);
  };
</script>
```

执行的时候打印结果：

```
本地-同步任务
本地-微任务 1
本地-微任务 2
index-同步任务
index-Promise
index-同步任务
index-Promise
本地-宏任务 1
本地-宏任务 2
index-setTimeout
index-setTimeout
```

可以看到：

1. 先执行 `script` 中同步任务
2. 再执行 `script` 中微任务
3. 然后执行 UI 线程的渲染工作（这里在代码中没有体现，感兴趣的可以试试添加 `rAF`）
4. 接着才执行 `Web Worker` 里面内容
5. 再来是 `index.html` 中的宏任务
6. 最后才是 `Web Worker` 文件中的宏任务

可以看出它仍符合 `Event Loop` 流程。

#### Web Worker 数据通讯

> index.js

```js
onmessage = (res) => {
  // Worker 接收数据
  console.log('Worker 收到数据：', res);
  // Worker 收到数据：
  // MessageEvent {isTrusted: true, data: "查房，这里是 index.html！", origin: "", lastEventId: "", source: null, …}

  // Worker 发送数据
  postMessage('开门！这里是 index.js');
}
```

> index.html

```html
<script>
window.onload = function() {
  // 实例化 Worker
  const worker = new Worker('./index.js');

  // index.html 接收数据
  worker.addEventListener('message', (res) => {
  console.log('index.html 收到数据：', res);
  // index.html 收到数据：
  // MessageEvent {isTrusted: true, data: "开门！这里是 index.js", origin: "", lastEventId: "", source: null, …}
  });

  // index.html 发送数据
  worker.postMessage('查房，这里是 index.html！');

  //  终止 Worker
  worker.terminate();
};
</script>
```

在 `index.html` 中，通过：

- `worker.addEventListener('message', callback)`。接收 Web Worker 传递的数据。
- `worker.postMessage('xxx')`。发送数据给 Web Worker。
- `worker.terminate()`。终止通讯

在 `index.js` 中，通过：

```js
onmessage = (res) => {
  console.log(res); // 在 onmessage 方法接受数据
  postMessage('xxx'); // 通过 postMessage 发送数据
}
```

#### Web Worker 可操作 API

- `setTimeout()， clearTimeout()， setInterval()， clearInterval()`：有了这几个函数，就可以在 `Web Worker` 线程中执行定时操作了；
- `XMLHttpRequest` 对象：意味着我们可以在 `Web Worker` 线程中执行 `Ajax` 请求；
- `navigator` 对象：可以获取到 `ppName`，`appVersion`，`platform`，`userAgent` 等信息；
- `location` 对象（只读）：可以获取到有关当前 URL 的信息；

如果需要加载其他 JS 脚本：

```js
importScripts('./index2.js', './index3.js');

// 或者

// importScripts('./index2.js');
// importScripts('./index3.js');
```

#### Web Worker 兼容性

- IE：11 版本
- Edge：14+ 版本
- Firefox：51+ 版本
- Chrome：56+ 版本
- 其他：看 [caniuse 链接](https://caniuse.com/webworkers)

### HTML语义化标签

为什么需要语义化

- 易修改、易维护
- 无障碍阅读支持
- 搜索引擎良好，利于 SEO
- 面向未来的 HTML，浏览器在未来可能提供更丰富的支持

常见的 HTML5 标签有：

- `<section>` - 章节
- `<nav>` - 导航
- `<article>` - 完整独立内容块
- `<aside>` - 和页面内容关联度较低的内容：例如广告（剩余的）
- `<header>` - 页面或者文章头部
- `<footer>` - 页面或者文字尾部
- `<main>` - 文档主要内容
- `<figure>` - 一个和文档有关的图例
- `<figcaption>` - 图例说明
- `<mark>` - 需要被高亮的引用文字
- `<video>` - 视频
- `<audio>` - 音频
- `<source>` - 为 `video` 和 `audio` 指定 **媒体源**
- `<track>` - 为 `video` 和 `audio` 指定 **文本轨道**（字幕）
- `<canvas>` - 位图区域
- `<svg>` - 矢量图
- `<progress>` - 进度条
- `<meter>` - 滑动条

结构语义化

```html
<!-- 头部 -->
<header>
  <nav></nav>
</header>

<!-- 内容区 -->
<main>
  <!-- 左侧 -->
  <article>
    <!-- 左侧标题 -->
    <header></header>
    <!-- 图片区块 -->
    <figure>
      <img>
      <figcaption></figcaption>
    </figure>
  </article>

  <!-- 右侧 -->
  <aside>
    <!-- 友情链接 -->
    <nav></nav>
    <section></section>
  </aside>
</main>

<!-- 底部 -->
<footer></footer>
```

### 替换元素和不可替换元素

**替换元素** 就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。

- `<img>` 根据 `src` 属性来读取图片信息并显示出来
- `<input>` 根据标签的 `type` 属性来决定是显示输入框，还是单选按钮。

替换元素有：`<img>`、`<input>`、`<textarea>`、`<select>`、`<object>`。

HTML 大多数元素都是不可替换的，即其内容直接展现给浏览器。

- `<p>` 直接全部展示

### 行内元素和块级元素

| 块级元素 | 行内元素 |
| --- | --- |
| 独占一行。默认情况下宽度自动填充父元素宽度 | 宽度随元素内容变化。相邻的行内元素会排列在同一行内，直到一行排不下，才会换行。 |
| 可以设置 `width`、`height` | 设置 `width`、`height` 无效 |
| 可以设置 `margin` 和 `padding` | 可以设置 `margin-left`、`margin-right`、`padding-left`、`padding-right` |
| 对应：`display: block` | 对应 `display: inline` |

#### 常见块级元素

- `<div>` - 标签块
- `<h1>`、`<h2>`、`<h3>`、`<h4>`、`<h5>`、`<h6>` - 标题 1 - 标题 6
- `<form>` - 表单
- `<hr>` - 水平线
- `<ul>` - 无序列表
- `<ol>` - 有序列表
- `<li>` - 定义列表项目，用于 `ul` 和 `li` 中
- `<p>` - 段落
- `<table>`、`<thead>`、`<tbody>`、`<thead>`、`<th>`、`<tr>`、`<td>` - 表格元素

#### 常见行内元素
  
- `<a>` - 超链接或者锚点
- `<b>` - 字体加粗
- `<br>` - 换行
- `<code>` - 定义计算机代码文本
- `<i>` - 斜体
- `<img>` - 图片
- `<input>` - 输入框
- `<label>` - 为 `input` 进行标记/标注
- `<button>` - 按钮
- `<textarea>` - 多行文本框

#### 行内元素和块级元素转换

`display` 属性可以使行内元素和块级元素之间转换。

- `display: inline` - 转换为行内元素
- `display: block` - 转换为块级元素
- `display: inline-block` - 转换为行内块元素

### Doctype作用?严格模式与混杂模式如何区分？它们有何意义?

Doctype声明于文档最前面，告诉浏览器以何种方式来渲染页面，这里有两种模式，严格模式和混杂模式。

- 严格模式的排版和JS运作模式是以该浏览器支持的最高标准运行。
- 混杂模式，向后兼容，模拟老式浏览器，防止浏览器无法兼容页面。

### XSS、CSRF、流量劫持

#### XSS

XSS（Cross Site Script）跨站脚本攻击。指的是攻击者向网页注入恶意的客户端代码，通过恶意的脚本对客户端网页进行篡改，从而在用户浏览网页时，对用户浏览器进行控制或者获取用户隐私数据的一种攻击方式。

- XSS 攻击类型
  1. 存储型
  2. 反射型
  3. 文档型
- 防御 XSS 攻击
  - **输入检查**：对输入内容中的 `script` 和 `<iframe>` 等标签进行转义或者过滤
  - **设置 httpOnly**：设置此属性可防止 JavaScript 获取 `Cookie`，只能在 HTTP 请求过程中使用 `Cookie`
  - **开启 CSP 白名单**：即开启白名单，可阻止白名单以外的资源加载和运行

#### CSRF

CSRF 攻击（Cross-site request forgery）即跨站请求伪造。

是一种劫持受信任用户向服务器发送非预期请求的攻击方式，通常情况下，它是攻击者借助受害者的 Cookie 骗取服务器的信任，但是它并不能拿到 Cookie，也看不到 Cookie 的内容，它能做的就是给服务器发送请求，然后执行请求中所描述的命令，以此来改变服务器中的数据，也就是并不能窃取服务器中的数据。

CSRF 攻击就是黑客利用用户的登录状态，并通过第三方的站点来做一些坏事。

1. 利用用户的登录状态，并通过第三方的站点来做一些坏事
2. 自动发 GET 请求
3. 自动发 POST 请求
4. 诱导点击发送 GET 请求

- 防御 CSRF 攻击：
  - **验证 Token**：浏览器请求服务器时，服务器返回一个 `token`，之后每个请求都需要同时带上 `token` 和 `Cookie` 才会被认为是合法请求
  - **验证 Referer**：通过验证请求头的 `Referer` 来验证来源站点，但请求头很容易伪造
  - **设置 SameSite**：设置 `Cookie` 的 `SameSite`，可以让 `Cookie` 不随跨站请求发出，但浏览器兼容不一

#### 流量劫持

流量劫持基本分两种：`DNS` 劫持 和 `HTTP` 劫持，

> `DNS` 劫持，也叫做域名劫持。
>
> 当用户通过某一个域名访问一个站点的时候，被篡改的 `DNS` 服务器返回的是一个恶意的钓鱼站点的 `IP`，用户就被劫持到了恶意钓鱼站点，然后继而会被钓鱼输入各种账号密码信息，泄漏隐私。
>
> HTTP 劫持
>
> `HTTP` 劫持主要是当用户访问某个站点的时候会经过运营商网络，而不法运营商和黑产勾结能够截获 `HTTP` 请求返回内容，并且能够篡改内容，然后再返回给用户，从而实现劫持页面。
>
> `HTTPS` 是基于 `SSL` 协议的安全加密网络应用层协议，相当于 `HTTP` + `SSL`，可以很好地防止 `HTTP` 劫持。
>
### click在ios上有 300 ms延迟，原因及如何解决

- 粗暴型，禁用缩放`<metaname="viewport"content="width=device-width,user-scalable=no">`
- 利用FastClick，其原理是：检测到touchend事件后，立刻出发模拟click事件，并且把浏览器 300 毫秒之后真正出发的事件给阻断掉

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
