# Object

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

### 常见代码片段

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
