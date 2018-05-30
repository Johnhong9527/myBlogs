### app.moduel.ts
```typescript
// 导入依赖库
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
// 组件来源
import {AppComponent} from './app.component';
import {HeroFromComponent} from './hero-from/hero-from.component';
import {SukComponent} from './suk/suk.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { OkComponent } from './ok/ok.component';

// 注入
@NgModule({
  // 注册组件
  declarations: [
    AppComponent,
    HeroFromComponent,
    SukComponent,
    FormcontrolComponent,
    FormBuilderComponent,
    EventEmitterComponent,
    NgModelComponent,
    OkComponent
  ],
  // 引入依赖库
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  // 引导组件
  bootstrap: [AppComponent]
})
export class AppModule {
}

```


