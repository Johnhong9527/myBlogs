# 案例

# 埋坑
### 字体去抗锯齿
示例:
```css
-webkit-font-smoothing:antialiased;
```
有三种可选值：
none|subpixel-antialiased|antialiased
![](http://images.cnitblog.com/blog/561179/201501/302206017378717.png)

### 第一个坑：设置input输入框背景色
>可以改变任何情况下的背景色设定
```css
box-shadow:         0 0 0px 1000px rgb(255, 255, 255) inset;
-o-box-shadow:      0 0 0px 1000px rgb(255, 255, 255) inset;
-moz-box-shadow:    0 0 0px 1000px rgb(255, 255, 255) inset;
-webkit-box-shadow: 0 0 0px 1000px rgb(255, 255, 255) inset;
```

### 第二个坑：buttom边框虚线
> outline（轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
```css
utline: 0;
```

### 第三个坑：文本不换行
> 规定段落中的文本不进行换行：
```css
white-space: nowrap
```