# javascript问题

## 大圆套小圆

## 数组初始化

## 解构赋值与默认参数的区分

## chrome接口数据捕获失败

## 在Array原型上添加获取最后一个元素和第一个元素方法

```javascript
// 在Array原型上添加last方法，获取最后一个元素
Array.prototype.last = function() {
  if (this.length === 0) {
    return undefined;
  }
  return this[this.length - 1];
};

// 在Array原型上添加first方法，获取第一个元素
Array.prototype.first = function() {
  if (this.length === 0) {
    return undefined;
  }
  return this[0];
};

const array = [1, 2, 3, 4, 5];

console.log(array.last()); // 输出：5
console.log(array.first()); // 输出：1

const emptyArray = [];

console.log(emptyArray.last()); // 输出：undefined
console.log(emptyArray.first()); // 输出：undefined
```

这样，当数组为空时，`last()` 和 `first()` 方法将返回 `undefined`，以避免出现错误。

## 按位运算

## vxe-table renderer渲染器

## vxe-table show-overflow无效

 和tooltip的`z-index`有关

## vxe-table 表格线不显示