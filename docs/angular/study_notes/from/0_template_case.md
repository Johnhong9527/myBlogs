### 表单——既重要,又复杂

####　实例展示
> 以下实例来着angular官网<br>以下例子通过数据绑定与内置模板的集成，编写而来。

```html
<!-- hero-from.component.html -->
<div class="container">
  <div [hidden]="submitted">
    <h4>Hero Form</h4>
    <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
               required
               [(ngModel)]="model.name" name="name"
               #name="ngModel">
        <!--判读用户是否输入了表单内容-->
        <div [hidden]="name.valid || name.pristine"
             class="alert alert-danger">
          Name is required
        </div>
      </div>

      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input type="text" class="form-control" id="alterEgo"
               [(ngModel)]="model.alterEgo" name="alterEgo">
      </div>

      <div class="form-group">
        <label for="power">Hero Power</label>
        <select class="form-control" id="power"
                required
                [(ngModel)]="model.power" name="power"
                #power="ngModel">
          <option *ngFor="let pow of powers" [value]="pow">{{pow}}</option>
        </select>
        <div [hidden]="power.valid || power.pristine" class="alert alert-danger">
          Power is required
        </div>
      </div>

      <button type="submit" class="btn btn-success" [disabled]="!heroForm.form.valid">Submit</button>
      <button type="button" class="btn btn-default" (click)="newHero(); heroForm.reset()">New Hero</button>
    </form>
  </div>

  <div [hidden]="!submitted">
    <h2>You submitted the following:</h2>
    <div class="row">
      <div class="col-xs-3">Name</div>
      <div class="col-xs-9  pull-left">{{ model.name }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Alter Ego</div>
      <div class="col-xs-9 pull-left">{{ model.alterEgo }}</div>
    </div>
    <div class="row">
      <div class="col-xs-3">Power</div>
      <div class="col-xs-9 pull-left">{{ model.power }}</div>
    </div>
    <br>
    <button class="btn btn-primary" (click)="submitted=false">Edit</button>
  </div>
</div>
```

```css
/*hero-from.component.css*/
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
```

```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFromComponent } from './hero-from/hero-from.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFromComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// hero-from.component.ts
import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero'

@Component({
  selector: 'hero-from',
  templateUrl: './hero-from.component.html',
  styleUrls: ['./hero-from.component.css']
})
export class HeroFromComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }
}
```

```typescript
// Hero.ts 定义数据类型
export class Hero {
  constructor(public id: number,
              public name: string,
              public power: string,
              public alterEgo?: string) {
  }
}
```

####　实例解析
> 该例，使用ngModel ,绑定数据，并通过　`valid` `pristine`　判断input是否有输入。最后用`submitted`控制表单模拟提交事件

html代码解析:<br/>
绑定ng内置froms模板:方法 => `#heroForm="ngForm"`<br/> 
为表单元素绑定ngModule: 
```html
<input type="text" 
       class="form-control" 
       id="name"
       name="name"
       required
       [(ngModel)]="model.name"
       #name="ngModel">
```
展示ngModel : 方法　=> `{{ model.name }}`<br/>

判断表单内容是否输入
```html
<!--判读用户是否输入了表单内容-->
<div [hidden]="name.valid || name.pristine"
     class="alert alert-danger">
  Name is required
</div>
```
控制组件是否显示: 方法 => `[hidden]="!submitted"`<br/> `submitted`为变量，受事件驱动
