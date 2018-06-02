# Array

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
