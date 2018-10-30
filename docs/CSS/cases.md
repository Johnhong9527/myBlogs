# 案例收集

## 去除表格单元格边距
```html
<!-- cellspacing="0" -->
<table class="ui celled table" border="0" cellspacing="0" cellpadding="0">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tr *ngFor="let p of people">
    <td>{{ p.name }}</td>
    <td>{{ p.age }}</td>
    <td>{{ p.city }}</td>
  </tr>
</table>
```

## 媒体查询
```css
/*常用案例展示,其他案例暂时不做过多记录
screen:用于 电脑 平板 手机端
and 后跟最大宽度500px
表示只有满足 screen 和 最大宽度是500px 的情况下,才会执行的css语句
*/
@media only screen and (max-width: 500px) {
    .gridmenu {
        width:100%;
    }

    .gridmain {
        width:100%;
    }

    .gridright {
        width:100%;
    }
}
```

## 箭头旋转

```css
.recharge-details .arrow {
    position: relative;
}
.recharge-details .arrow:after {
    position: absolute;
    right: 15px;
    top: 18px;
    width: 0;
    height: 0;
    content: "";
    border-width: 6px 6px 0 6px;
    border-style: solid;
    border-color: #fff transparent;

    -webkit-transition: all 0.25s;
    -moz-transition: all 0.25s;
    -ms-transition: all 0.25s;
    -o-transition: all 0.25s;
    transition: all 0.25s;
}

.recharge-details .arrow:before {
    position: absolute;
    right: 13px;
    top: 18px;
    width: 0;
    height: 0;
    content: "";
    border-width: 8px 8px 0 8px;
    border-style: solid;
    border-color: #333 transparent;
    -webkit-transition: transform 0.25s;
    -moz-transition: transform 0.25s;
    -ms-transition: transform 0.25s;
    -o-transition: transform 0.25s;
    transition: transform 0.25s;
}

.recharge-details .arrow.active:after {
    top: 20px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}
.recharge-details .arrow.active:before {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}
```

```js
$(this)
    .children("div.arrow")
    .toggleClass("active");
```

## 垂直居中

```css
div {
    width: 50%;
    margin: 0 auto;
    height: 200px;
    line-height: 200px;
    background-color: antiquewhite;
    text-align: center;
}

div img {
    vertical-align: middle;
    display: inline-block;
    /*margin: 0 0 -20px 0;*/
}
```

```html
<div>
<img src="http://oigzh9iic.bkt.clouddn.com/timg.jpg" width="50" height="50" alt="">
<span>文字与图标居中</span>
</div>
```

## 线性渐变色

```css
background: -webkit-linear-gradient(#ff71e0,#fffdfe, #ff71e0); /* Safari 5.1 - 6.0 */
background: -o-linear-gradient(#ff71e0, #fffdfe, #ff71e0); /* Opera 11.1 - 12.0 */
background: -moz-linear-gradient(#ff71e0,#fffdfe, #ff71e0); /* Firefox 3.6 - 15 */
background: linear-gradient(#ff71e0,#fffdfe, #ff71e0); /* 标准的语法 */
```

## 三角符号

```html
<div class="trangle-up"></div>
<div class="trangle-down"></div>
```

```css
.trangle-up {
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid black;
}

.trangle-down {
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 30px solid black;
}
```

## 文字|内容超过部分隐藏

```css
.text1 {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    white-space: nowrap;
}
```

```html
<div class="text1">热卖精选：从子频道（服饰鞋包，亲子，居家，美妆）档期里面挑选出来，库存大于30%的高信价比商品list，数量为50个</div>
```

解释
```
width：设置可是区域的宽度
overflow:hidden;设置超出父元素部分隐藏
text-overflow:ellipsis:文字溢出部分显示为  三个点
white-space:nowrap;设置段落中的文本不会换行
-webkit-line-clamp：2；设置段落中的文本的，需要换的行数
display:-webkit-box;设置子元素跟随父元素改变大小
word-break:break-all;在恰当的断字点进行换行：
```

```css
.item-text-city {
    font-size: 11pt;
    font-weight: 100;
    width: 450rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    -webkit-text-overflow: ellipsis;
    -moz-text-overflow: ellipsis;
    white-space: nowrap;
}
```

## 兼容前缀

```css
  -moz-(
代表firefox浏览器私有属性
)
  -ms-(
代表IE浏览器私有属性
)
  -o-(
代表opera私有属性
)
  -webkit-(
代表chrome、safari私有属性
)
```

## 边框(border-images)

```css
（border-images）在谷歌浏览器和火狐浏览器上面得到很好的支持

语法：
    border-image ： none | <image> [ <number> | <percentage>]{1,4}
                   [ / <border-width>{1,4} ]? [ stretch | repeat | round ]{0,2}

相关属性：
     border-image:  border-top-image ,
                    border-right-image ,
                    border-bottom-image ,
                    border-left-image
     border-corner-image:   border-top-left-image ,
                            border-top-right-image ,
                            border-bottom-left-image ,
                            border-bottom-right-image

-webkit-border-image: url(../images/1.jpg) 0 12 0 12 stretch stretch;
-moz-border-image: url(../images/1.jpg) 0 12 0 12 stretch stretch;

border-image: source slice width outset repeat;
使用方法: source （用于指定要用于绘制边框的图像的位置）
         slice （图像边界向内偏移）
         width  (图像边界的宽度)
         outset (用于指定在边框外部绘制 border-image-area 的量)
         repeat (这个例子演示了如何创建一个border-image 属性的按钮。)
```

## 字体去抗锯齿
示例:
```css
-webkit-font-smoothing:antialiased;
```
有三种可选值：
none|subpixel-antialiased|antialiased
![](http://images.cnitblog.com/blog/561179/201501/302206017378717.png)

## 设置input输入框背景色
可以改变任何情况下的背景色设定
```css
box-shadow:         0 0 0px 1000px rgb(255, 255, 255) inset;
-o-box-shadow:      0 0 0px 1000px rgb(255, 255, 255) inset;
-moz-box-shadow:    0 0 0px 1000px rgb(255, 255, 255) inset;
-webkit-box-shadow: 0 0 0px 1000px rgb(255, 255, 255) inset;
```

## buttom边框虚线
outline（轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。
```css
utline: 0;
```

## 文本不换行
> 规定段落中的文本不进行换行：
```css
white-space: nowrap
```

