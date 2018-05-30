##### HTML
```html
<div class="ui raised segment">
  <h2 class="ui header">演示形式：具有自定义验证</h2>
  <form [formGroup]="myFoem"
        (ngSubmit)="onSubmit(myFoem.value)"
        class="ui form">

    <div class="field"
        [class.error]="!sku.valid && sku.touched">
      <label for="skuInput">SKU</label>
      <input type="text"
             id="skuInput"
             placeholder="SKU"
             [formControl]="sku">
             <!--表单验证的应用-->
       <div *ngIf="!sku.valid"
         class="ui error message">SKU无效</div>
       <div *ngIf="sku.hasError('required')"
         class="ui error message">SKU是必需的</div>
       <div *ngIf="sku.hasError('invalidSku')"
         class="ui error message">SKU必须开头以<span>123</span>开始</div>
    </div>

    <div *ngIf="!myFoem.valid"
      class="ui error message">表单无效</div>
    <button type="submit" class="ui button">提交</button>
  </form>
</div>
```

##### TS
```typescript
import {Component, OnInit} from '@angular/core';
// 
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from "@angular/forms"

// 自定义验证器
/*用正则匹配 传入的值是否以 123 开始.根据传入参数返回 boolean*/
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  name: string;
  myFoem: FormGroup;
  sku: AbstractControl;
  // 注入: FormBuilder
  /*在这期间, Angular将会注入一个从 FormBuilder 类创建的对象实例,并把它赋值给 fb 变量(来
  自构造函数)*/
  constructor(fb: FormBuilder) {
    this.myFoem = fb.group({
      'sku': ['', Validators.compose([
      Validators.required,skuValidator])
      ]
    })
    this.sku = this.myFoem.controls['sku']
  }

  onSubmit(value: string): void {
    console.log('你的提交值', value);
  }

  ngOnInit() {
  }

}
```