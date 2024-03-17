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

## legnth与数据类型

```js
console.log(([]+[]).length)
console.log(({}+{}).length)
console.log((function(){}).length)
``` 

## Array push 方法

返回值是 新的数组长度

## Array 方法是否修改原数据

修改: push shift pop unshift reverse sort splice 
不修改: concat join slice toString 

## Selection对象

## String substring 方法

返回该字符串从起始索引到结束索引（不包括）的部分，如果未提供结束索引，则返回到字符串末尾的部分。
与 substr 相同,但是 substr 方法已废弃

```js
substring(indexStart) 
substring(indexStart, indexEnd)
```

## git 恢复已删除代码

```ssh
git log/reflog -> git reset  // 将当前版本回退到指定的commit id。
git log -> git cherry-pick // 将指定的提交应用到当前分支。
git log -> git revert // 创建一个新的提交，撤销指定的提交。
```
