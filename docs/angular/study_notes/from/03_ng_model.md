###  双向绑定数据写法说明
> 双向绑定数据的写法是[(ngModel)]="modelName".modelName命名必须为有意义,如:productName
使用: 
```html
<input type="text" [(ngModel)]="productName">
<input type="text" placeholder="{{productName}}">
```
环境:
```typescript
// 必须在根模块导入 FormsModule 才可以使用 ngModel
import {FormsModule} from '@angular/forms';
@NgModule({
  // ...
  imports: [
    // ...
    FormsModule
    // ...
  ]
  //...
})
```

### 设置app.module.ts
```typescript
// 下面是引入开发使用到的库(模板仓库)
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// 组件引入方式如下:
// import { NgModelComponent } from './ng-model/ng-model.component';
@NgModule({
  declarations: [
    // ...  这里是引入组件
    // NgModelComponent
  ],
  // 导入库
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
### 创建组件
```bash
$ ng generate component ngModel
  # installing component
  #  create src/app/ok/ng-model.component.css
  #  create src/app/ok/ng-model.component.html
  #  create src/app/ok/ng-model.component.spec.ts
  #  create src/app/ok/ng-model.component.ts
  #  update src/app/app.module.ts
```
### 设置ng-model组件样式
```html
<div class="ui raised segment">
  <form [formGroup]="myForm"
        (ngSubmit)="onSubmit(myForm.value)"
        class="ui form">

    <div class="field">
      <label for="productNameInput">Product Name</label>
      <input type="text"
             id="productNameInput"
             placeholder="Product Name"
             [formControl]="myForm.get('productName')"
             [(ngModel)]="productName">
    </div>

    <div class="ui info message">
      The product name is: {{productName}}
    </div>

    <button type="submit" class="ui button">提交</button>
    <button type="submit" class="ui button" (click)="myForm.reset()">重置</button>
  </form>
</div>
```

### 设置ng-model组件逻辑部分
```typescript
import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms"

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  myForm: FormGroup;
  productName: string;
  // 注入: FormBuilder
  /*在这期间, Angular将会注入一个从 FormBuilder 类创建的对象实例,并把它赋值给 fb 变量(来
  自构造函数)*/
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    })
  }

  onSubmit(value: string): void {
    console.log('你的提交值', value);
  }

  ngOnInit() {
  }
}
```