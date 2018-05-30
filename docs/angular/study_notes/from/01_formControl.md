#### 表单——既重要,又复杂
> FormControl 代表单一的输入字段,它是Angular表单中的最小单元。<br/>FormControl 封装了这些字段的值和状态,比如是否有效、是否脏(被修改过)或是否有错误等。

##### app.module.ts 见Angular说明

#### 说明
* [#myForm="ngForm"]()
> 绑定 ngForm指令,该指令来自 NgForm,在这里的意思是 为当前视图中的ngForm创建一个别名,并且绑定到变量 #myForm上去. ngForm 是 FormGroup 类型的对象

* [(ngSubmit)="OS(myForm.value)"]()
> (ngSubmit) : 表单提交点击事件;<br>OS : 为事件名称;<br>(myForm.value) : 则是将变量myForm的value值传给OS函数

* [[(ngModel)]="name"]()
> 见[angular2_表单_ngModel](./5_表单_ngModel.md)中的说明

* [  name: string;<br>
     myForm: FormGroup;]()
> 定义变量类型

##### HTML
```html
<div class="ui raised segment">
  <h2 class="ui header">Demo Form: Sku</h2>
  <form #myForm="ngForm"
        (ngSubmit)="OS(myForm.value)"
        class="ui form">
    <div class="field">
      <label for="skuInput">SKU</label>
      <input type="text"
             id="skuInput"
             placeholder="SKU"
             name="sku" [(ngModel)]="name">
      <div>{{name}}</div>
    </div>
    <button type="submit" class="ui button">Submit</button>
  </form>
</div>
```

##### TS
```typescript
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator} from "@angular/forms"

@Component({
  selector: 'form-control',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {
  name: string;
  myForm: FormGroup;

  constructor() {
  }
  // 点击事件
  /* :void  表示可以传入任意参数到函数中*/
  OS(value: any):void {
    console.log('你的提交值', value);
  }
  // 
  ngOnInit(): void {
    this.nameForm = new FormGroup({
      'name': new FormControl(this.name)
    })
  }
}

```