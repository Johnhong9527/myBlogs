# Array

### 常见代码片段

```js
// 判断数组
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const obj = { name: "hello", age: 1 };

// instanceof方法(推荐使用)
console.log(arr instanceof Array); //true
console.log(arr instanceof Object); //true,在数组的原型链上也能找到Object构造函数
console.log(obj instanceof Array); //false

// constructor方法(不推荐:constructor方法可以被修改)
const a = [];
const b = {};
const c = /^[0-9]$/;
console.log(a.constructor == Array); //true
console.log(b.constructor == Array); //false
console.log(c.constructor == Array); //false

// 不推荐理由
const a = [];
//作死将constructor属性改成了别的
a.contrtuctor = Object;
console.log(a.constructor == Array); //false (哭脸)
console.log(a.constructor == Object); //true (哭脸)
console.log(a instanceof Array); //true (instanceof火眼金睛)

// 用Object的toString方法
const a = ["Hello", "Howard"];
const b = { 0: "Hello", 1: "Howard" };
const c = "Hello Howard";
console.log(a.toString()); //"Hello,Howard"
console.log(b.toString()); //"[object Object]"
console.log(c.toString()); //"Hello,Howard"
// 通过改变toString执行时的上下文判断是否为数组
// call | apply
Object.prototype.toString.call(a); // [object Array]
Object.prototype.toString.call(b); // [object Object]
Object.prototype.toString.call(c); // [object String]
// or
Object.prototype.toString.apply(a); //"[object Array]"
Object.prototype.toString.apply(b); //"[object Object]"
Object.prototype.toString.apply(c); //"[object String]"
// 合并上述过程为函数
const isArray = (something)=>{
    return Object.prototype.toString.call(something) === '[object Array]';
}
const a = [];
const b = {};
isArray(a);//true
isArray(b);//false

// 用Array对象的isArray方法判断
const a = [];
const b = {};
Array.isArray(a);//true
Array.isArray(b);//false


Object.prototype.toString = ()=>{
    console.log('Hello Howard');
}
const a = [];
Array.isArray(a);//true

// 兼容性写法
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// jquery方法判断
// 待续
```

### es6 常见代码片段

```js
// 遍历数组
[1, 2, 3].forEach(function(value, index) {
    console.log(value);
});
// 映射新数组
arr = [1, 2, 3].map(v => v * 2);
// 所有元素是否通过测试
[1, 2, , 3, 4].every(v => v > 3);
// 是否有元素通过测试
[1, 2, , 3, 4].some(v => v > 3);
// 过滤数组
[1, 2, 3, 4, 5].filter(v => v > 3);
// 查找符合条件的元素:
arr = [{ name: "dashing", age: 18 }, { name: "rmos", age: 1 }];
// 查找索引
[1, 2, 3].indexOf(2);
// 连接数组
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
[...arr1, ...arr2];
//数组去重
arr = [1, 2, 3, 4, 3, 2, 1];
[...new Set(arr)];
```
