# 数据类型

```jsx
window.onload = () => {
    var test1 = "abcdef";
    var test2 = 123;
    var test3 = true;
    var test4 = {};
    var test5 = [];
    var test6;
    var test7 = { "abcdef": 123 };
    var test8 = ["abcdef", 123];
    function test9() { return "abcdef" };
    var test10 = null;
    var test11 = 'q58';
    var test12 = '张';
    var test13 = '78';
    console.log(typeof test1); // string
    console.log(typeof test2); // number
    console.log(typeof test3); // boolean
    console.log(typeof test4); // object
    console.log(typeof test5); // object
    console.log(typeof test6); // undefined
    console.log(typeof test7); // object
    console.log(typeof test8); // object
    console.log(typeof test9); // function
    console.log(typeof test10); // object
    // # 无法转为数字的为true
    console.log(isNaN(test11)); // true
    console.log(isNaN(test12)); // true
    console.log(isNaN(test13)); // false
    // 数值比较
    console.log("1" - "1");
    // 5个假值：undefined null “” 0 NaN
    // ** 字符串方法 **
    // toLowerCase() 字符串大写 =>小写
    // toUpperCase() 字符串小写 => 大写
    // replace() 查找子串并将他们都替换为另一个字符串
    // slice() 删除字符串的一部分并返回结果
    // indexOf() 从头部开始查找子串,返回下标
    // lastIndexOf() 查找最后一个子串,返回下标
    // concat() 将字符串拼接起来
    // match() 在字符串中查找与正则表达啥匹配的子串
    // trim() 删除字符串开头和末尾的的空白字符,
    let phone = "123-8568";
    function phoneF(number) {
        return number.match(/^\d{3}-?\d{4}$/);
    }
    console.log(phoneF(phone));
    // 实例化对象
    function Duck(sound) {
        this.sound = sound;
        this.quack = () => { console.log(this.sound) }
    }
    let toy = new Duck('quack quack');
    toy.quack();
    console.log(typeof toy); // object
    console.log(toy instanceof Duck); // true
}
```