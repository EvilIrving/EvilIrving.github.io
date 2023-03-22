---
title: JavaScript Snippets
date: 2021-05-31 17:00:00
update: 2023-01-31 17:00:00
tags: 
- JavaScript
- Snippets
categories: 
- JavaScript
---
## 原型函数

### 对日期进行格式化输出

```javascript
Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format))
        format = format.replace(RegExp.$1, (this.getFullYear() + "")
            .substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
                ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}
```

### 输出名字后两字

```javascript
/**
 * @description: 输出名字后两字
 * @param { null }
 * @return { String }
 */
String.prototype.smallName = function () {
  if(this.length > 2){
    return this.slice(this.length - 2, this.length);
  }else{
    return this;
  }
}
```

## 其他函数

### URL编码

```javascript
function toParams(param) {
  let result = '';
  for (let name in param) {
    if (typeof param[name] != 'function') {
      if (param[name] === null) {
        result += '&' + name + '=';
      } else {
        result += '&' + name + '=' + encodeURI(param[name]);
      }
    }
  }
  return result.substring(1);
}
```

### 是否为url

```javascript
function isUrl(path) {
  // 开始符 ^
  // 协议部分http(s)://        表示为((https|http|ftp|rtsp|mms)?:\/\/)
  // 域名部分                  表示为(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+
  // 顶级域名com cn等为2-6位   表示为([a-zA-Z]{2,6})
  // 端口部分                  表示为(:\d+)?, ?表示0次或1次
  // 请求路径如/login          表示为 (\/.*)?
  // 问号传参及哈希值如?age=1   表示为 (\?.*)?和(#.*)?
  // 结束符 $
  const reg = /^((https|http|ftp|rtsp|mms)?:\/\/)(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]{2,6})(:\d+)?(\/.*)?(\?.*)?(#.*)?$/
  return reg.test(path)
}
```

### isEmpty

```javascript
 function isEmpty(v) {
  if (v == null || v == '' || v == undefined || v == 'null') {
    return '-';
  } else {
    if(v.length > 8){
      if(isNum(v)){
          return parseFloat(v).toFixed(2)
      }else{
        return v;
      }
    }else{
      return v;
    }
  }
}
```

### isNum

```javascript

function isNum(str){
  var numReg = /^[0-9]*$/
  var numRe = new RegExp(numReg)
  if (!numRe.test(str)) {
    return false;
  }else{
    return true;
  }
}
```

### 保留两位方法

```javascript
function returnFloat(value) {
        var value = Math.round(parseFloat(value) * 100) / 100;
        var xsd = value.toString().split(".");
        if (xsd.length == 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (xsd.length > 1) {
            if (xsd[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    }
```

### 数据类型判断

```js
function typeOf(params) {
    let res = Object.prototype.toString.call(obj).split(' ')[1]
    res = substring(0, res.length - 1).toLowerCase()
    return res
}
```

### 类数组转数组

```js
Array.from(document.querySelectorAll('div'))

Array.prototype.slice.call(document.querySelectorAll('div'))

Array.prototype.concat.apply([], document.querySelectorAll('div'))

[...document.querySelectorAll('div')]
```

### 数组扁平化

- `ES6 API flaten(Infinity)`
  
- 正则

  ```js
  const flatenRes = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']')
  ```

- reduce

  ```js
  const flaten = arr => {
      return arr.reduce((pre, cur) => {
          return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
      }, [])
  }
  ```

- 递归/合并

  ```js
  function flaten(arr) {
      let result = []
      for (let index = 0; index < arr.length; index++) {
          if (Array.isArray(arr[index])) {
              // flaten(arr[index]) // 递归
              result = result.concat(flaten(arr[index])) // 合并
          } else {
              result.push(arr[index])
          }
      }
  }

  function flaten(arr) {
      while (arr.some(item => Array.isArray(item))) {
          arr = [].concat(...arr)
      }
      return arr
  }
  ```

### Array.map
<!-- forEach、some、every -->
实现一个仿Array.map功能的"Array._map"函数，该函数创建一个新数组，该新数组的结果是数组中的每个元素都调用一次函数参数后的返回值。

```javascript

// 判断参数是否为函数，如果不是则直接返回
// 创建一个空数组用于承载新的内容
// 循环遍历数组中的每个值，分别调用函数参数，将返回值添加进空数组中
// 返回新的数组

Array.prototype._map = function(Fn) {
    if (typeof Fn !== 'function') return
    const array = this
    const newArray = new Array(array.length)
    for (let i=0; i<array.length; i++) {
        let result = Fn.call(arguments[1], array[i], i, array)
        newArray[i] = result
    }
    return newArray
}
```

### Array.filter

仿Array.filter功能的"Array._filter"函数，该函数创建一个新数组，该数组包含通过函数参数条件的所有元素。

```javascript

// 判断参数是否为函数，如果不是则直接返回
// 创建一个空数组用于承载新的内容
// 循环遍历数组中的每个值，分别调用函数参数，将满足判断条件的元素添加进空数组中
// 返回新的数组

Array.prototype._filter = function(Fn) {
    if (typeof Fn !== 'function') return
    const array = this
    const newArray = []
    for (let i=0; i<array.length; i++) {
        const result = Fn.call(arguments[1], array[i], i, array)
        result && newArray.push(array[i])
    }
    return newArray
}
```

### Array.reduce

实现一个仿Array.reduce功能的"Array._reduce"函数，并且需要将”_reduce“函数挂载在Array的原型对象上。根据Array.reduce的特点有：

接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
可以接收一个初始值，当没有初始值时，默认初始值为数组中的第一项

```javascript

// 在Array的原型对象上添加”_reduce“函数
// ”_reduce“函数第一个参数为回调函数，第二个参数为初始值
// 进入数组长度的循环体中
// 当初始值为空时，首个被加数为数组的第一项
// 当初始值不为空时，首个被加数为初始值

Array.prototype._reduce = function(fn, prev) {
    for(let i=0 ; i<this.length ; i++) {
        if(prev === undefined) {
            prev = fn(this[i], this[i+1], i+1, this)
                ++i
        } else {
            prev = fn(prev, this[i], i, this)
        }
    }
    return prev
}

Array.prototype.selfReduce = function (callback, initValue) {
    // 判断是否是数组调用
    if (!Array.isArray(this)) throw new TypeError('not a array')
    // 数组为空 且无初始值
    if (this.length === 0 && !initValue) throw new TypeError('Reduce of empty array with no initial value')

    let arr = this, res = null
    // 若有初始值则赋值，无则取数组第一个值
    initValue ? res = initValue : res = arr[0]

    for (let i = initValue ? 0 : 1; i < arr.length; i++) {
        res = callback(res, arr[i], i, arr) // 覆盖上次计算结果
    }
    return res
}
```

### N个数组取交集

```js
const getIntersection = (...arrs) => {
    return Array.from(new Set(arrs.reduce((total, arr) => {
        return arr.filter(item => total.includes(item))
    })))
}
```

### 查找数组中最值

```javascript
// 查找数组中最小值
arrayMin(arrs) {
    var min = arrs[0];
    for (var i = 1, ilen = arrs.length; i < ilen; i += 1) {
        if (arrs[i] < min) {
            min = arrs[i];
        }
    }
    return min;
}

// 查找数组中最大值
arrayMax(arrs) {
    var max = arrs[0];
    for (var i = 1, ilen = arrs.length; i < ilen; i++) {
        if (arrs[i] > max) {
            max = arrs[i];
        }
    }
    return max;
}
```

### 全排列

要求以数组的形式返回字符串参数的所有排列组合。
注意：

1. 字符串参数中的字符无重复且仅包含小写字母
2. 返回的排列组合数组不区分顺序

```javascript

// 创建返回的结果数组
// 通过字符串参数创建等长的"被使用"数组用于递归过程中记录字符顺序
// 创建回溯函数，通过该函数内部递归调用
// 在回溯函数中，当临时数组的长度等于字符串参数长度时可以返回本次循环结果
// 进入字符串参数长度的循环体中，将该次字符保存在临时数组中
// 将该次字符的"被使用"数组位修改为true，表示该字符在本次之前的递归过程中已被记录使用，跳过即可
// 递归调用回溯函数
// 退栈时设置该字符"被使用"数组为false，删除临时数组最后一位
// 返回结果

const _permute = string => {
    const result = []
    const used = Array.from({length: string.length}, () => false)
    const _backTrack = (candidate, memo = []) => {
        if(memo.length === string.length) {
            result.push(memo.slice().join(''))
            return
        }
        for(let i=0 ; i<candidate.length ; i++) {
            if(used[i]) continue
            memo.push(candidate[i])
            used[i] = true
            _backTrack(candidate, memo)
            used[i] = false
            memo.pop()
        }
    }
    _backTrack(string)
    return result
}
```

### _Object.create

实现一个仿Object.create功能的"_objectCreate"函数，该函数创建一个新对象，使用现有的对象来提供新创建的对象的proto

```javascript

// 创建一个临时函数
// 将该临时函数的原型指向对象参数
// 返回该临时对象的实例

const _objectCreate = proto => {
    if(typeof proto !== 'object' || proto === null) return
    const fn = function() {}
    fn.prototype = proto
    return new fn()
}
```

### Function.call

实现一个仿Function.call功能的"Function._call"函数，该函数会临时修改内部this的指向并返回结果。

```javascript

// 参数默认为window
// 获取调用该方法的对象，将this赋给对象参数，可以任意命名
// 通过该对象参数临时调用函数并返回结果
// 最后删除对象参数的临时函数属性

Function.prototype._call = function(target = window) {
    target['fn'] = this
    const result = target['fn']([...arguments].shift())
    delete target['fn']
    return result
}
```

### Function.bind

实现一个仿Function.bind功能的"Function._bind"函数，该函数会返回一个新的函数且该新函数内部通过apply修改了函数内部this指向

```javascript

// 创建一个新this用来保存旧的this对象
// 返回一个匿名函数，该匿名函数返回通过apply修改了指针指向的函数运算结果

Function.prototype._bind = function(target, ...arguments1) {
    const _this = this
    return function(...arguments2) {
        return _this.apply(target,arguments1.concat(arguments2))
    }
}
```

### instanceof

实现一个仿instanceof功能的"_instanceof"函数，该函数可以判断首参是否在第二个Fn构造函数的原型链上，核心步骤有：

获取首个对象参数的原型对象
获取Fn函数的原型对象
进入死循环，当两个参数的原型对象相等时返回true
当两个参数的原型对象不相等时获取首个对象参数原型的原型并且循环该步骤直到null时返回false

```javascript

// 创建返回的结果数组
// 通过字符串参数创建等长的"被使用"数组用于递归过程中记录字符顺序
// 创建回溯函数，通过该函数内部递归调用
// 在回溯函数中，当临时数组的长度等于字符串参数长度时可以返回本次循环结果
// 进入字符串参数长度的循环体中，将该次字符保存在临时数组中
// 将该次字符的"被使用"数组位修改为true，表示该字符在本次之前的递归过程中已被记录使用，跳过即可
// 递归调用回溯函数
// 退栈时设置该字符"被使用"数组为false，删除临时数组最后一位
// 返回结果

const _instanceof = (target, Fn) => {
    let proto = target.__proto__
    let prototype = Fn.prototype
    while(true) {
        if(proto === Fn.prototype) return true
        if(proto === null) return false
        proto = proto.__proto__
    }
}
```

#### 相关知识

##### 使用

`instanceof` 操作符用于检查一个对象是否属于某个特定的 `class`

```js
 // 如果 obj 隶属于 Class 类（或 Class 类的衍生类），则返回 true。
obj instanceof Class
```

静态方法 `Symbol.hasInstance` 可以设置自定义逻辑。如下：

```
// 设置 instanceOf 检查
// 并假设具有 canEat 属性的都是 animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

console.log(obj instanceof Animal); // true：Animal[Symbol.hasInstance](obj) 被调用
```

另外：
方法 `objA.isPrototypeOf(objB)`，如果 `objA` 处在 `objB` 的原型链中，则返回 `true`。所以，可以将 `obj instanceof Class` 检查改为 `Class.prototype.isPrototypeOf(obj)`。

##### 内部执行过程

- 如果有静态方法 `Symbol.hasInstance`，那就直接调用这个方法：
- 如果没有，使用 `obj instanceOf Class` 检查 `Class.prototype` 是否等于 `obj` 的原型链中的原型之一。

##### 类型检查

|  | 用于 | 返回值 |
| :-----:| :----: | :----: |
| typeof | 原始数据类型 | string |
| {}.toString | 原始数据类型，内建对象，包含 Symbol.toStringTag 属性的对象 | string |
| instanceof | 对象 | true/false |
  
### 实现new操作符

实现一个仿new功能的新"_new"函数，该函数会返回一个对象，该对象的构造函数为函数参数、原型对象为函数参数的原型

```javascript

// 创建一个新对象
// 获取函数参数
// 将新对象的原型对象和函数参数的原型连接起来
// 将新对象和参数传给构造器执行
// 如果构造器返回的不是对象，那么就返回第一个新对象

const _new = function() {
    const object1 = {}
    const Fn = [...arguments].shift()
    object1.__proto__ = Fn.prototype
    const object2 = Fn.apply(object1, arguments)
    return object2 instanceof Object ? object2 : object1
}
```

### Object.freeze

实现一个仿Object.freeze功能的"_objectFreeze"函数，该函数可以冻结一个对象，一个被冻结的对象不能被修改、不能添加新的属性、不能删除已有属性

```javascript

// 进入对象参数的遍历体中
// 判断当前对象参数是否为普通对象或数组
// 如果是普通对象或数组，则递归调用该函数，函数参数为当前遍历项
// 如果不是，则直接设置该参数的可写性为false
// 最后通过Object.seal函数封闭该对象，阻止添加新属性并将所有现有属性标记为不可配置

const _objectFreeze = object => {
    for(prop in object) {
        const type = Object.prototype.toString.call(object[prop])
        if(type === '[object Object]' || type === '[object Array]') {
            _objectFreeze(object[prop])
        } else {
            Object.defineProperty(object, prop, {
                writable: false
            })
        }
    }
    Object.seal(object)
}
```

### Object.is

```js
const is = (x, y) => {
    if (x === y) return x !== 0 || y !== 0 || 1 / x === 1 / y
    return x !== x && y !== y
}
```

### Object.assign

```js
Object.defineProperty(Object, 'assign', {
    value: function (target, ...args) {
        if (target == null) return new TypeError('Cannot convert undefined or null to object')
        const to = Object(target)
        for (let index = 0; index < args.length; index++) {
            const nextSource = args[index];
            if (nextSource !== null) {
                // 使用 for in 和 hasOwnProperty确保只拿到本身属性和方法，不含继承的
                for (const key in nextSource) {
                    if (Object.hasOwnProperty.call(nextSource, key)) {
                        to[key] = nextSource[key]
                    }
                }
            }
        }
        return to
    },
    enumerable: false,
    writable: true,
    configurable: true
})
```

### toSort按对象键名排序

```javascript
toSort(propertyName) {
      return (a, b) => {
        // return a[propertyName] - b[propertyName]    // 升序
        return b[propertyName] - a[propertyName]; // 降序
      };
    }
```

### 对象判空

```javascript
if (Object.keys(object).length === 0)  return false // 如果为空,返回false
return true // 如果不为空，则会执行到这一步，返回true


if (JSON.stringify(data) === '{}')  return false // 如果为空,返回false
return true // 如果不为空，则会执行到这一步，返回true


for (let i in obj) return true
return false // 如果为空,返回false
```

### 拷贝

#### 浅拷贝

实现一个对象参数的浅拷贝并返回拷贝之后的新对象，因为可能包含函数、正则、日期、ES6新对象，所以需要对这些对象类型进行特殊判断

```javascript

// 如果对象参数的数据类型不为"object"或为"null"，则直接返回该参数
// 如果是"object"，就获取该参数的构造函数名，通过正则表达式判断该对象是否为函数、正则、日期、ES6新对象等，如果返回true，则直接返回该参数
// 当以上条件判断之后函数依然没有结束时，此时通过数组的原型方法判断该参数为普通对象或数组并创建相应数据类型的新变量
// 进入遍历体，将对象参数的每一项赋值给新变量
// 最终返回该新变量

const _shallowClone = target => {
    if(typeof target === 'object' && target !== null) {
        const constructor = target.constructor
        if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return target
        const cloneTarget = Array.isArray(target) ? [] : {}
        for(prop in target) {
            if(target.hasOwnProperty(prop)) {
                cloneTarget[prop] = target[prop]
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
```

#### 简易深拷贝

实现对象参数的深拷贝并返回拷贝之后的新对象，因为参数对象和参数对象的每个数据项的数据类型范围仅在数组、普通对象（{}）、基本数据类型中且无需考虑循环引用问题，所以不需要做过多的数据类型判断

```javascript

// 如果对象参数的数据类型不为“object”或为“null”，则直接返回该参数
// 根据该参数的数据类型是否为数组创建新对象
// 遍历该对象参数，将每一项递归调用该函数本身的返回值赋给新对象

const _sampleDeepClone = target => {
    if(typeof target === 'object' && target !== null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        for(prop in target) {
            if(target.hasOwnProperty(prop)) {
                cloneTarget[prop] = _sampleDeepClone(target[prop])
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
```

> 其他方法
>
> - 递归
> - JSON.stringify
> - lodash
> - Jquery.extend
> - Reflect
> - slice(数组)

#### 完整深拷贝

实现对象参数的深拷贝并返回拷贝之后的新对象，因为需要考虑参数对象和参数对象的每个数据项的数据类型可能包括函数、正则、日期、ES6新对象且必须考虑循环引用问题，所以需要引入ES6新对象Map并且详细的判断数据类型

```javascript

// 首先判断对象参数是否为“null”，是则返回“null”
// 判断对象参数数据类型是否为“object”，不是则返回该参数
// 获取到对象参数的构造函数名，判断是否为函数、正则、日期、ES6新对象其中之一，如果是则直接返回通过该参数对象对应的构造函数生成的新实例对象
// 当以上条件判断之后函数依然没有结束时继续进行以下操作
// 在Map对象中获取当前参数对象，如果能获取到，则说明这里为循环引用并返回Map对象中该参数对象的值
// 如果在Map对象中没有获取到对应的值，则保存该参数对象到Map中，作为标记
// 根据该参数的数据类型是否为数组创建新对象
// 遍历该对象参数，将每一项递归调用该函数本身的返回值赋给新对象

const _completeDeepClone = (target, map = new Map()) => {
    if(target === null) return target
    if(typeof target !== 'object') return target
    const constructor = target.constructor
    if(/^(Function|RegExp|Date|Map|Set)$/i.test(constructor.name)) return new constructor(target)
    if(map.get(target)) return map.get(target)
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for(prop in target) {
        if(target.hasOwnProperty(prop)) {
            cloneTarget[prop] = _completeDeepClone(target[prop], map)
        }
    }
    return cloneTarget
}
```

### 继承

#### 原型链继承

> 原型中包含的引用类型属性被所有实例共享
> 子类在实例化时不能给父类构造函数传参

```js
function Animal() {
    this.colors = ['black', 'white']
}

Animal.prototype.getColor = function () {
    return this.colors
}

function Dog() { }

Dog.prototype = new Animal()

let dog = new Dog()
dog.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors); // ['black', 'white', 'brown']
```

#### 构造函数继承

```js
function Father(name) {
    this.name = name
    this.getName = function () {
        return this.name
    }
}

function Child(name) {
    Father.call(this, name)
}
Child.prototype = new Father()
```

#### （寄生）组合式继承

```js
function Person(name) {
    this.name = name
    this.colors = ['black', 'white']
}

Person.prototype.getName = function () {
    return this.name
}

function Stu(name, age) {
    Person.call(this, name)
    this.age = age
}

Stu.prototype = new Person()
// 寄生组合式继承
// Stu.prototype = Object.create(Person.prototype)
Stu.prototype.constructor = Person

let stu = new Stu('Shally', 17)

stu.colors.push('brown')
let stu2 = new Stu('Lee', 23)
console.log(stu2); // {name: 'Lee', colors: ['black', 'white'], age: 23}
```

#### 寄生组合式继承（完整）

通过寄生组合式继承使"Chinese"构造函数继承于"Human"构造函数。寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的形式来继承方法，只调用了一次父类构造函数，效率高，也避免了在子类的原型对象上创建不必要的、多余的属性，原型链也不会被改变

```javascript

// 在"Human"构造函数的原型上添加"getName"函数
// 在”Chinese“构造函数中通过call函数借助”Human“的构造器来获得通用属性
// Object.create函数返回一个对象，该对象的__proto__属性为对象参数的原型。此时将”Chinese“构造函数的原型和通过Object.create返回的实例对象联系起来
// 最后修复"Chinese"构造函数的原型链，即自身的"constructor"属性需要指向自身
// 在”Chinese“构造函数的原型上添加”getAge“函数

function Human(name) {
    this.name = name
    this.kingdom = 'animal'
    this.color = ['yellow', 'white', 'brown', 'black']
}
Human.prototype.getName = function() {
    return this.name
}
function Chinese(name,age) {
    Human.call(this,name)
    this.age = age
    this.color = 'yellow'
}
Chinese.prototype = Object.create(Human.prototype)
Chinese.prototype.constructor = Chinese
Chinese.prototype.getAge = function() {
    return this.age
}
```

#### class 继承

```js
class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }
}
```

### 事件委托

1. 给"ul"标签添加点击事件
2. 当点击某"li"标签时，该标签内容拼接"."符号。如：某"li"标签被点击时，该标签内容为".."

```javascript
document.querySelector('ul')
  .onclick = e => {
    e = e || window.event;
    e.target.nodeName.toLowerCase() == 'li'
      ? e.target.innerText += '.'
      : ''
  }
```

### 发布订阅模式

完成"EventEmitter"类实现发布订阅模式，考虑到同一名称事件可能有多个不同的执行函数，所以在构造函数中需要以对象的结构存放事件

```javascript

// 构造函数中创建”events“对象变量用于存放所有的事件
// 添加”on“函数，用于订阅事件。当总事件中不存在此事件时创建新的事件数组，当存在时将”fn“函数添加在该事件对应数组中
// 添加”emit“函数，用于发布事件，遍历该事件下的函数数组并全部执行

class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(event, fn) {
        if(!this.events[event]) {
            this.events[event] = [fn]
        } else {
            this.events[event].push(fn)
        }
    }
    emit(event) {
        if(this.events[event]) {
            this.events[event].forEach(callback => callback())
        }
    }
}
```

### 观察者模式

完成"Observer"、"Observerd"类实现观察者模式。

```javascript

// 被观察者构造函数声明三个属性分别为"name"用于保存被观察者姓名、"state"用于保存被观察者状态、"observers"用于保存观察者们
// 被观察者创建"setObserver"函数，该函数通过数组的push函数将观察者参数传入"observers"数组中
// 被观察者创建"setState"函数，该函数首先通过参数修改被观察者的"state"属性，然后通过遍历"observers"数组分别调用各个观察者的"update"函数并且将该被观察者作为参数传入
// 观察者创建"update"函数，用于打印信息

class Observerd {
    constructor(name) {
        this.name = name
        this.state = '走路'
        this.observers = []
    }
    setObserver(observer) {
        this.observers.push(observer)
    }
    setState(state) {
        this.state = state
        this.observers.forEach(observer => observer.update(this))
    }
}
class Observer {
    constructor() {
         
    }
    update(observerd) {
        console.log(observerd.name + '正在' + observerd.state)
    }
}
```

```js
function typeOf(params) {
    let res = Object.prototype.toString.call(obj).split(' ')[1]
    res = substring(0, res.length - 1).toLowerCase()
    return res
}
```

### 装饰器模式

装饰器模式是一种动态地为对象添加功能的设计模式，它通过将一个对象嵌入到另一个对象中实现对原对象的包装，并且可以在不改变原有对象的情况下添加新的功能。

在装饰器模式中，有三个核心角色：

1. 抽象构件(Component)：定义一个对象接口，可以给这些对象动态地添加职责。

2. 具体构建(ConcreteComponent)：实现抽象构件接口，提供了具体的功能实现。

3. 装饰器(Decorator)：持有一个构件(Component)对象的实例，并定义一个与抽象构件接口一致的接口。

装饰器模式通过将对象的包装层层叠加，在不改变原有对象的基础上，动态地添加新的行为或功能，这使得行为或功能的添加变得更加灵活和方便，并且降低了系统的耦合度，增强了对象的扩展性。

举个例子来说，我们可以使用装饰器模式为一个类动态地添加新的方法或改变其属性，而不需要修改原有的代码。例如，我们可以给一个已经存在的类添加一个日志记录的功能：

```javascript
class Order {
  constructor(name) {
    this.name = name;
  }
  
  getName() {
    return this.name;
  }
}

// 日志装饰器
class OrderLogDecorator {
  constructor(order) {
    this.order = order;
  }
  
  getName() {
    console.log(`Order has been created with name: ${this.order.getName()}`);
    return this.order.getName();
  }
}

// 使用装饰器
const order = new Order('test');
const orderLogDecorator = new OrderLogDecorator(order);
orderLogDecorator.getName(); // 输出结果：Order has been created with name: test
```

在上述代码中，我们首先定义了一个原有的Order类。然后我们又定义了一个装饰器类OrderLogDecorator，它持有了一个Order对象的实例，通过在getName()方法中添加日志记录的功能，实现了对原有Order类的包装。最后，我们将Order对象传递给OrderLogDecorator，通过调用OrderLogDecorator的getName()方法来让Order对象拥有了日志记录的功能。

装饰器模式常常与其他设计模式相结合，如工厂方法模式、抽象工厂模式、建造者模式等，以实现更复杂的功能和逻辑。

### 模板字符串

```js
function render(template, data) {
    const reg = /\{\{(\w+)\}\}/;
    if (reg.test(template)) { // 判断模板是否包含 模板字符串
        const param = res.exec(template)[1] // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[param]) // 将第一个模板字符串渲染
        return render(template, data) // 递归渲染并返回模板后的结构
    }
    return template
}

let template = '我是{{name}},年龄{{age}}'
let person = {
    name: 'black',
    age: 18
}

console.log(render(template, person));
```

### 图片懒加载

```js
let imgList = [...document.querySelectorAll('img')], length = imgList.length

const imgLazyLoad = function () {
    let count = 0
    return (function () {
        let deleteIndexList = []
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect()
            if (rect.top < window.innerHeight) {
                img.src = img.dataset.src
                deleteIndexList.push(index)
                count++
                count === length && document.removeEventListener('scroll', imgLazyLoad)
            }
        })
        imgList = imgList.filter((img, index) => !deleteIndexList.includes(index))
    })()
}

document.addEventListener('scroll', imgLazyLoad) // 添加防抖
```

### 滚动加载

```js
window.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollHeight = document.documentElement.scrollHeight
    if (clientHeight + scrollTop >= scrollHeight - 100) {
        // 检测滚动至页面底部
    }
}, false)
```

### 打印当前页面使用多少HTML元素

```js
const fn = () => [...new Set([...document.querySelectorAll('*').map(el => el.tagName)])].length
```

### VirtualDom 转 Dom

```js
function render(vnode, container) {
    container.appendChild(_render(vnode))
}

function _render(vnode) {
    if (typeof (vnode) === 'number') vnode = String(vnode)
    if (typeof (vnode) === 'string') return document.createTextNode(vnode)
    const dom = document.createElement(vnode.tag)
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key]
            dom.setAttribute(key, value)
        });
    }
    vnode.children.forEach(child => render(child, dom))
    return dom
}
```

### promise --> promise.all

```js
Promise.all = function (array) {
    return new Promise((resolve, reject) => {
        const ans = []
        let idx = 0
        for (let index = 0; index < array.length; index++) {
            array[index].then(res => {
                ans[i] = res
                idx++
                idx === array.length && resolve(ans)
            }).catch(err => reject(err))
        }
    })
}
```

### promise.race

```js
Promise.race = function (array) {
    return new Promise((resolve, reject) => {
        array.forEach(item => {
            Promise.resolve(item).then(
                res => resolve(res),
                err => reject(err)
            )
        })
    })
}
```

### Promise 并行限制

```js
class Scheduler {
    constructor() {
        this.queue = []
        this.maxCount = 10
        this.runCount = 0
    }
    add(promiseCreator) {
        this.queue.push(promiseCreator)
    }

    start() {
        for (let i = 0; i < this.maxCount.length; i++) {
            this.request()
        }
    }

    request() {
        if (!this.queue || !this.queue.length || this.runCount >= this.maxCount) return;
        this.maxCount++
        this.queue.shift()().then(() => {
            this.runCount++
            this.request()
        })
    }
}

const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler()

const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}
addTask(190, '1')
addTask(500, '2')
addTask(600, '3')
addTask(900, '4')

scheduler.start()
```

### AJAX

### JSONP

- `vue-resource`

  `npm install vue-resource`

  ```js
  this.$http.jsonp('/jsonp', { params: { foo: 'bar' } }).then(response => {
      // success callback
      console.log(response.body)
  }, response => {
      // error callback
  })
  ```

- 原生

  ```js
  const jsonp = ({ url, params, cbName }) => {
      const generateUrl = () => {
          let dataSrc = '';
          for (const key in params) {
              if (Object.hasOwnProperty.call(params, key)) dataSrc += `${key}=${params[key]}&`
          }
          dataSrc += `callback=${cbName}`
          return `${url}?${dataSrc}`
      }

      return new Promise((resolve, reject) => {
          const scriptEle = document.createElement('script')
          scriptEle.src = generateUrl()
          document.body.appendChild(scriptEle)
          window[cbName] = data => {
              resolve(data)
              document.removeChild(scriptEle)
          }
      })
  }
  ```

### 防抖

防抖：在用户停止某个操作一段时间之后才执行相应的监听函数，当事件被触发时，设定一个周期延迟执行动作，若期间又被触发，则重新设定周期，直到周期结束，执行监听函数。

```javascript
/**
 * @description: 防抖函数
 * @param { Function } fn 高频函数
 * @param { Number, String } wait 等待时间
 * @returns { Function }
 */
function debounce(fn, wait) {
  let context = this,
    args = arguments,
    timer = null;
  return function() {
    context = this;
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, wait || 250);
  };
}
let debounce = (fn, wait) => {
    let timer, timeStamp = 0, context, args
    let run = () => {
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }

    let clean = () => {
        clearTimeout(timer)
        timer = null
    }

    return function (params) {
        context = this
        args = arguments
        let now = (new Date()).getTime()
        if (now - timeStamp < wait) {
            clean()
            run()
        } else {
            run()
        }
        timeStamp = now
    }
}
```

### 节流

节流：当持续触发事件时，保证隔间时间触发一次事件，固定周期内，只执行一次动作，若有新事件触发，不执行。周期结束后，又有事件触发，开始新的周期。

```js
let throtting = (fn, wait) => {
    let timer, context, args
    let run = () => {
        timer = setTimeout(() => {
            fn.apply(context, args)
            clearTimeout(timer)
            timer = null
        }, wait)
    }

    return function () {
        context = this
        args = arguments
        if (!timer) run()
    }
}
```

### 柯里化

```ts
function sum(a: number, b: number, c: number, d: number): number {
    return a + b + c + d
}
const currying = (fn: Functin) => {
    const exec = (sumArgs: any[] = []) => {
        if (sumArgs.length >= fn.length) {
            return fn(...sumArgs)
        } else {
            return (...args: any[]) => exec([...sumArgs, ...args])
        }
    }
    return exec()
}
console.log(currying(sum)(1)(2, 3)(4)); // 10
```

```js
function curry() {
    const _args = [...arguments]
    function fn() {
        _args.push(...arguments)
        return fn
    }

    fn.toString = function () {
        return _args.reduce((sum, cur) => sum + cur)
    }
    return fn
}
```

### getQueryString

```javascript
function getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }

function getQueryString(name){
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == name){return pair[1];}
  }
  return(false);
}

```

### url查询参数转为params

```js
function query2Dict(param) {
    let pattern = /([^?&=]+)=([^&#]*)/g;
    let dict = {}, search = null
    if (typeof param === 'object' && param instanceof Location) { search = param.search }
    else if (typeof param === 'string') { search = param }
    else {
        throw new Error('参数类型非法！请传入window.loaction对象或者url字符串。')
    }
    search.replace(pattern, function (rs, $1, $2) {
        let key = decodeURIComponent($1)
        let value = decodeURIComponent($2)
        dict[key] = value
        return rs
    })
    return dict
}
```

### 屏幕自动滚动

```javascript
setInterval(() => {
    window.scrollBy({
        top: 1,
        left: 0,
        behavior: "smooth"
    });
}, 30);
```

### 格式化数字 每隔3位添加一个逗号

```javascript
/**
 * @description: 格式化数字 每隔3位添加一个逗号
 * @param { Number } value
 * @param { Boolean } int 是否返回整数 默认false
 * @return { String }
 */
function numFormat(value, int) {
  if (!value) return "0.00";

  var intPart = Number(value) - (Number(value) % 1); 
  var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); 

  var floatPart = ".00"; 
  var value2Array = value.toString().split(".");

  //=2表示数据有小数位
  if (value2Array.length == 2) {
    floatPart = value2Array[1].toString(); //拿到小数部分
  } else {
    if (int) return intPartFormat;
    return intPartFormat + floatPart;
  }
}
```

### 金额格式化

```JavaScript
// 1 
const num = String(1234567890);
let result = '';

for (let i = num.length - 1; i >= 0; i--) {
  if (i !== num.length - 1 && i % 3 === 0) {
    result = num[i] + ',' + result;
  } else {
    result = num[i] + result;
  }
}
// 2
String(1234567890).split('').reverse().reduce((prev, next, index) => (index % 3) === 0 ? next + ',' + prev : next + prev)
// 3
(1234567890).toLocaleString('en-US')
// 4
String(1234567890).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```

### 根据日期获取星期几

```javascript
/**
 * @description: 根据日期获取星期几
 * @param { String } dateString 日期字符串（如：2020-05-02）
 * @return { String }
 */
function getWeek(dateString) {
  let dateArray = dateString.split("-");
  let date = new Date(dateArray[0], parseInt(dateArray[1] - 1), dateArray[2]);
  return "周" + "日一二三四五六".charAt(date.getDay());
}
```

### 以下载方式保存Blob格式

```javascript
/**
 * 以下载方式保存Blob格式
 * @param {Blob} blob Blob格式的数据
 * @param {String} filename 文件名
 */
function saveFile(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        let link = document.createElement("a");
        let body = document.querySelector("body");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename; //html5
        // fix Firefox
        link.style.display = "none";
        body.appendChild(link);
        link.click();
        body.removeChild(link);
        window.URL.revokeObjectURL(link.href);
    }
}
```

### 计时器清除

定时器返回值其实就是一个整数，并且是顺序生成的，因此循环清除定时器，在你构造的定时器数量不是太夸张（小于100）的情况下，该方法可以清除所有定时器

```js
var end = setTimeout(function(){},1);
var start = (end -100)>0?end-100:0;
for(var i=start;i<=end;i++){
  clearTimeout(i);
}
```

```js
let endTid = setTimeout(function () {});
for (let i = 0; i <= endTid; i++) {
  clearTimeout(i)
  clearInterval(i)
}
```

## 输入框数字大小限制

方式一：`max="100"` `min="10"`，限制的是数字输入框右边的增减箭头按钮，最大值和最小值，不能对手动输入的数进行限制。

方式二：`oninput`

```javascript
// 只限制长度：输入四位数的数字
<input type="number" oninput="if(value.length>4)value=value.slice(0,4)" />

// 只限制最大值100：最大为100，即使手动输入大于100的数也会自动变成100
<input type="number" oninput="if(value>100)value=100" />

// 只限制最小值0：最小为0，即使手动输入小于0的负数也会自动变成0
<input type="number" oninput="if(value<0)value=0" />

// 均作限制：长度4 最大值100 最小值0
<input type="number" oninput="if(value>100)value=100;if(value.length>4)value=value.slice(0,4);if(value<0)value=0" />
```

### 缓存封装

```JavaScript
/**
 * @description: localStorage操作
 * @param { String } method get获取，set存入或覆盖，clean清除
 * @param { String } name 缓存数据的名称
 * @param obj 存入的内容，可以是任意类型
 */
const localData = function (method, name, obj) {
  switch (method) {
    case 'get':
      if (localStorage.getItem(name + '_obj')) {
        return JSON.parse(localStorage.getItem(name + '_obj'));
      } else if (localStorage.getItem(name + '_str')) {
        return localStorage.getItem(name + '_str');
      } else {
        return null
      }
    case 'set':
      localData('clean', name);
      if (typeof obj == 'object') {
        localStorage.setItem(name + '_obj', JSON.stringify(obj));
      } else {
        localStorage.setItem(name + '_str', obj);
      }
      return true;
    case 'clean':
      localStorage.removeItem(name + '_obj');
      localStorage.removeItem(name + '_str');
      return true;
  }
};

/**
 * @description: sessionStorage操作
 * @param { String } method get获取，set存入或覆盖，clean清除
 * @param { String } name 缓存数据的名称
 * @param obj 存入的内容，可以是任意类型
 */
const sessionData = function (method, name, obj) {
  switch (method) {
    case 'get':
      if (sessionStorage.getItem(name + '_obj')) {
        return JSON.parse(sessionStorage.getItem(name + '_obj'));
      } else if (sessionStorage.getItem(name + '_str')) {
        return sessionStorage.getItem(name + '_str');
      } else {
        return null
      }
    case 'set':
      sessionData('clean', name);
      if (typeof obj == 'object') {
        sessionStorage.setItem(name + '_obj', JSON.stringify(obj));
      } else {
        sessionStorage.setItem(name + '_str', obj);
      }
      return true;
    case 'clean':
      sessionStorage.removeItem(name + '_obj');
      sessionStorage.removeItem(name + '_str');
      return true;
  }
};

export {localData, sessionData}

```

## 参考

- <https://bigfrontend.dev/problem>
