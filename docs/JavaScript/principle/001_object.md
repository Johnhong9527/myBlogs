# Object

### 判断 obj 对象

参考文章:[判断 JS 数据类型的 4 种方法](https://www.cnblogs.com/onepixel/p/5126046.html)


typeof
```js
/* typeof 是一个操作符，其右侧跟一个一元表达式，
并返回这个表达式的数据类型。
返回的结果用该类型的字符串(全小写字母)形式表示，
包括以下 7 种：
    number、boolean、symbol、string、
    object、undefined、function 等。
*/

typeof ''; // string 有效
typeof 1; // number 有效
typeof Symbol(); // symbol 有效
typeof true; //boolean 有效
typeof undefined; //undefined 有效
typeof null; //object 无效
typeof [] ; //object 无效
typeof new Function(); // function 有效
typeof new Date(); //object 无效
typeof new RegExp(); //object 无效

/*
其他正确,但不符合判断的结果
  对于基本类型，除 null 以外，均可以返回正确的结果。
  对于引用类型，除 function 以外，一律返回 object 类型。
  对于 null ，返回 object 类型。
  对于 function 返回  function 类型。
*/
```

instanceof
>instanceof认为能够判断出 [ ] 是Array的实例，但它认为 [ ] 也是Object的实例
why?<br/>
从 instanceof 能够判断出 [ ].__proto__  指向 Array.prototype，而 Array.prototype.__proto__ 又指向了Object.prototype，最终 Object.prototype.__proto__ 指向了null，标志着原型链的结束。因此，[]、Array、Object 就在内部形成了一条原型链：

```js
// 内部执行过程
function instanceof (A,B) = {
  var L = A.__proto__;
  var R = B.prototype;
  if(L === R) {
      // A的内部属性 __proto__ 指向 B 的原型对象
      return true;
  }
  return false;
}
```
constructor使用技巧
![constructor](constructor.png)

toString
```js
Object.prototype.toString.call('') ;   // [object String]
Object.prototype.toString.call(1) ;    // [object Number]
Object.prototype.toString.call(true) ; // [object Boolean]
Object.prototype.toString.call(Symbol()); //[object Symbol]
Object.prototype.toString.call(undefined) ; // [object Undefined]
Object.prototype.toString.call(null) ; // [object Null]
Object.prototype.toString.call(new Function()) ; // [object Function]
Object.prototype.toString.call(new Date()) ; // [object Date]
Object.prototype.toString.call([]) ; // [object Array]
Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
Object.prototype.toString.call(new Error()) ; // [object Error]
Object.prototype.toString.call(document) ; // [object HTMLDocument]
Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
```

### 代码风格
```jsx
let time = {
    a: function(a) {
        console.log(a);
    },
    b: function(b) {
        console.log("b:" + b);
    },
};
time.b(385);
```

### es6 常见代码片段

```js
// 获取对象的key
Object.keys({ name: "seamong", age: 1 });
// 获取对象里数据的数量
Object.keys({ name: "seamong", age: 1 }).length;
// 遍历数组
Object.entries({ name: "seamong", age: 1 });
// extend功能
const obj = { name: "seamong", age: 3 };
const newObj = { ...obj, job: "IT", age: 18 };
console.log(newObj);
// 获取列表的头和尾
const [head, ...tail] = [1, 2, 3];
const [head, ...initial] = [1, 2, 3].reverse();
```
