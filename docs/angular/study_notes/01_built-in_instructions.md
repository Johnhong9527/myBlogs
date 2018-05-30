### ngIf
> ** 如果你希望根据一个条件来决定显示或隐藏一个元素,可以使用 ngIf 指令。这个条件是由你传给指令的表达式的结果决定的。<br/>
** 如果表达式的结果返回的是一个假值,那么元素会从DOM上被移除。

```html
# 例子：
<div *ngIf = "false" ></div>
<div *ngIf = "a > b" ></div>
<div *ngIf = "str == 'yes'" ></div>
<div *ngIf = "myFunc()" ></div>
```
### ngSwitch
> ** 实际作用同等于 switch语句

```html
# 通过2组实例进行比较
## ngIf
  根据同值不同条件渲染不同元素
    <div class="container">
      <div *ngIf="myVar == 'A'">Var is A</div>
      <div *ngIf="myVar == 'B'">Var is B</div>
      <div *ngIf="myVar != 'A' && myVar != 'B'">Var is something else</div>
    </div>

  增加条件与值
  <div class="container">
    <div *ngIf="myVar == 'A'">Var is A</div>
    <div *ngIf="myVar == 'B'">Var is B</div>
    <div *ngIf="myVar == 'C'">Var is C</div>
    <div *ngIf="myVar != 'A' && myVar != 'B' && myVar != 'C'">Var is something else</div>
  </div>
### ngSwitch
改变上述情况，官方加入 ngSwitch
  使用 ngSwitchCase 指令描述已知结果
  使用 ngSwitchDefault 指令处理所有其他未知情况
    重写实例
      <div class="container" [ngSwitch]="myVar">
        <div *ngSwitchCase="'A'">Var is A</div>
        <div *ngSwitchCase="'B'">Var is B</div>
        <div *ngSwitchDefault>Var is something else</div>
      </div>
    添加条件： ngSwitchDefault 元素是可选的。如果我们不用它,那么当 myVar 没有匹配到任何期望的值
          时就不会渲染任何东西。
      <div class="container" [ngSwitch]="myVar">
        <div *ngSwitchCase="'A'">Var is A</div>
        <div *ngSwitchCase="'B'">Var is B</div>
        <div *ngSwitchCase="'C'">Var is C</div>
        <div *ngSwitchDefault>Var is something else</div>
      </div>
  为不同的元素声明同样的 *ngSwitchCase 值
  在下面的例子中,当 choice 的值是 2 的时候,第2个和第5个 li 都会被渲染。
    <h4 class="ui horizontal divider header">
      Current choice is {{ choice }}
    </h4>
    <div class="ui raised segment">
      <ul [ngSwitch]="choice">
        <li *ngSwitchCase="1">First choice</li>
        <li *ngSwitchCase="2">Second choice</li>
        <li *ngSwitchCase="3">Third choice</li>
        <li *ngSwitchCase="4">Fourth choice</li>
        <li *ngSwitchCase="2">Second choice, again</li>
        <li *ngSwitchDefault>Default choice</li>
      </ul>
    </div>
    <div style="margin-top: 20px;">
      <button class="ui primary button" (click)="nextChoice()">
      Next choice
      </button>
    </div>
```
### ngStyle
> 第一种用法：使用 ngStyle 指令,可以通过Angular表达式给特定的DOM元素设定CSS属性。
  该指令最简单的用法就是 [style.<cssproperty>]="value" 的形式,

```html
<div [style.background-color]="'yellow'">
  Uses fixed yellow background
</div>
```
> 第二种用法：设置固定值的方式就是使用 ngStyle 属性,使用键值对来设置每个属性

```html
<!--连字符是不允许出现在对象的键值对中的，需要使用引号-->
<div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
Uses fixed white text on blue background
</div>
```
> 第三种用法：这个才是ngStyle的出彩的地方

```html
<!--在component中声明变量，定义apply函数，将输入框中对应的值，通过ngStyle绑定到颜色与字体大小的属性上去-->
<div class="ui input">
  <input type="text" name="color" value="{{color}}" #colorinput>
</div>
<div class="ui input">
  <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
</div>
<button class="ui primary button" (click)="apply(colorinput.value, fontinput.value)">
  Apply setting
</button>
<!--数据绑定的2种方式-->
<span [ngStyle]="{color: color,'font-size': fontSize + 'em'}">
{{ color }} text
</span>

<div [style.background-color]="color"
     [style.font-size.em]="fontSize"
     style="color: white;">
  {{ color }} background
</div>
```
```typescript
// 定义数据类型，定义触发事件
export class InventoryAppComponent implements OnInit {
  color:string;
  fontSize:number;

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }
  constructor() {
  }
  ngOnInit() {
  }
}
```
### ngClass
> ngClass 指令在HTML模板中用 ngClass 属性来表示,让你能动态设置和改变一个给定DOM元素的CSS类。
以下是最简单的用法。

```scss
.bordered {
  border: 1px dashed black;
  background-color: #eee;
}
```
```html
<div [ngClass]="{bordered: false}">This is never bordered</div>
<div [ngClass]="{bordered: true}">This is always bordered</div>
```
> 动态添加class


```html
<!-- *'`'符号是为了避免gitbook渲染页面出现故障* -->
<!-- 通过ngClass绑定数据到各元素的class上 -->
<div [ngClass]="classesObj">
  Using object var. Border `{{ classesObj.bordered ? "ON" : "OFF" }}`
</div>

<hr>
<!-- 根据条件绑定数据 -->
<div [ngClass]="{bordered: isBordered}">
  Using object literal. Border `{{ isBordered ? "ON" : "OFF" }}`
</div>
<hr>
<!-- 定义数组绑定class -->
<div class="base" [ngClass]="['blue', 'round']">
  This will always have a blue background and
  round corners
</div>
<!-- 动态定义数组绑定类 -->
<div class="base" [ngClass]="classList">
  <!-- 判断类是否存在 -->
  This is { { classList.indexOf('blue') > -1 ? "" : "NOT"}} blue
  and { { classList.indexOf('round') > 1 ? "" :"NOT" }} round
</div>
```

```typescript
// 定义数据，并赋值
export class InventoryAppComponent implements OnInit {
  isBordered: boolean;
  classesObj: Object;
  classList: string[];
  constructor() {
    this.isBordered = true;
    this.classesObj = {
      bordered : "bordered"
    };
    this.classList = ['blue', 'round'];
    console.log(this)
  }
  ngOnInit() {
  }

}
```

### ngFor
> 这个指令的任务是重复一个给定的DOM元素 (或一组DOM元素),每次重复都会从数组中取
一个不同的值。<br>
它的语法是 *ngFor="let item of items" 。

`简化版`
```typescript
cities: string[];
constructor() {
  this.cities = ['Miami', 'Sao Paulo', 'New York'];
}
```
```HTML
<h4 class="ui horizontal divider header">
  Simple list of strings
</h4>
<div class="ui list" *ngFor="let c of cities">
  <div class="item">{{ c }}</div>
</div>
<!-- 输出 -->
Miami
Sao Paulo
New York
```
`进阶版`
```typescript
people: Object[];
constructor() {
  this.people = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' }
  ];
}
```
```HTML
<h4>table</h4>
<h4 class="ui horizontal divider header">
  List of objects
</h4>
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
`输出`

Name|Age|City
:----:|:----:|:----:
Anderson|35|Sao Paulo
John|12|Miami
Peter|22|New York

`嵌套数组`

```HTML
<h4 class="ui horizontal divider header">
  Nested data
</h4>
<div *ngFor="let item of peopleByCity">
  <h2 class="ui header">{{ item.city }}</h2>
  <table class="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tr *ngFor="let p of item.people">
      <td>{{ p.name }}</td>
      <td>{{ p.age }}</td>
    </tr>
  </table>
</div>
```
```typescript
peopleByCity: Object;
constructor() {
  this.peopleByCity = [
    {
      city: 'Miami',
      people: [
        { name: 'John', age: 12 },
        { name: 'Angel', age: 22 }
      ]
    },
    {
      city: 'Sao Paulo',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'Felipe', age: 36 }
      ]
    }
  ];
}
```
`输出 Miami`


Name|Age
:-:|:-:
John|12
Angel|22

`输出 Sao Paulo`

Name|Age
:-:|:-:
Anderson|35
Felipe|36

`获取索引`
```html
<div class="ui list" *ngFor="let c of cities; let num = index">
  <div class="item">{{ num+1 }} - {{ c }}</div>
</div>
<!-- 输出 -->
1-Miami
2-Sao Paulo
3-New York
```

### ngNonBindable
> 当我们想告诉Angular不要编译或者绑定页面中的某个特殊部分时,要使用 ngNodBindable指令。

```html
<div class="ngNonBindableDome">
  <span class="borderd">{{content}}</span>
  <span class="pre" ngNonBindable>
    &larr;This is what {{ content }} rendered
  </span>
</div>
输出
文章 ←This is what {{ content }} rendered
```
