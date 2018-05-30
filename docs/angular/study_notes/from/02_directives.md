```typescript
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy } from '../change_detection/constants';
import { Provider } from '../di';
import { Type } from '../type';
import { TypeDecorator } from '../util/decorators';
import { ViewEncapsulation } from './view';
/**
 * 指令装饰器/构造函数的类型。
 *
 * @stable
 */
export interface DirectiveDecorator {
  /**
   * @它能做什么 将类标记为Angular指令，并收集指令配置
   * 元数据.
   *
   * @如何使用
   *
   * `.``
   * import {Directive} from '@angular/core';
   *
   * @Directive({
     *   selector: 'my-directive',
     * })
   * export class MyDirective {
     * }
   * `.``
   *
   * @描述
   *
   * 指令装饰器允许您将类标记为Angular指令，并提供其他元数据，
   * 以确定如何在运行时处理，实例化和使用伪指令。
   *
   * 指令允许您将行为附加到DOM中的元素
   *
   * 一个指令必须属于一个NgModule，
   * 以便它被另一个指令，组件或应用程序使用。 
   * 要指定一个指令是NgModule的成员，
   * 您应该将其列在该NgModule的“声明”字段中。
   *
   * 除了通过指令装饰器指定的元数据配置之外,
   * 指令可以通过实现各种生命周期钩子来控制其运行时行为.
   *
   * **元数据属性:**
   *
   * * **exportAs** - 组件实例在模板中导出的名称
   * * **host** - 类属性映射到事件，属性和属性的主机元素绑定
   * * **inputs** - 将类属性名称列表作为组件输入的数据绑定
   * * **outputs** - 列出其他可以订阅的输出事件的类属性名称
   * * **providers** - 该组件及其子组件可用的提供程序列表
   * * **queries** -  配置可以注入组件的查询
   * * **selector** - css选择器，用于标识模板中的此组件
   *
   * @稳定
   * @注解
   */
  (obj: Directive): TypeDecorator;
  /**
   * 请参阅{@link指令}装饰器。
   */
  new (obj: Directive): Directive;
}
export interface Directive {
  /**
   * 触发实例化指令的CSS选择器。
   *
   * Angular仅允许指令触发不跨越元素边界的CSS选择器。
   *
   * `selector` 可以被声明为以下之一:
   *
   * - `element-name`: 按元素名称选择.
   * - `.class`: 按类名选择.
   * - `[attribute]`: 按属性名称选择.
   * - `[attribute=value]`: 按属性名称和值选择.
   * - `:not(sub_selector)`: 只有当元素不匹配`sub_selector`时才选择.
   * - `selector1, selector2`: 选择“selector1”或“selector2”是否匹配.
   *
   *
   * ### 例
   *
   * 假设我们有一个`input [type = text]选择器的指令。
   *
   * 和以下HTML:
   *
   * `.``html
   * <form>
   *   <input type="text">
   *   <input type="radio">
   * <form>
   * `.``
   *
   * 该指令只能在`<input type =“text”>“元素上实例化.
   *
   */
  selector?: string;
  /**
   * 枚举一个指令的数据绑定输入属性集
   *
   * Angular在更改检测期间自动更新输入属性.
   *
   * `inputs`属性将一组`directiveProperty`定义为`bindingProperty`
   组态:
   *
   * - `directiveProperty`指定写入值的组件属性.
   * - `bindingProperty`指定读取值的DOM属性.
   *
   * 当没有提供`bindingProperty`时，它被假定为等于`directiveProperty`.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/ivhfXY?p=preview））
   *
   * 以下示例创建具有两个数据绑定属性的组件.
   *
   * `.``typescript
   * @Component({
     *   selector: 'bank-account',
     *   inputs: ['bankName', 'id: account-id'],
     *   template: `
     *     Bank Name: {{bankName}}
     *     Account Id: {{id}}
     *   `
     * })
   * class BankAccount {
     *   bankName: string;
     *   id: string;
     *
     *   // 此属性未绑定，不会被Angular自动更新
     *   normalizedBankName: string;
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
     *   `
     * })
   * class App {}
   * `.``
   *
   */
  inputs?: string[];
  /**
   * 枚举一组事件绑定的输出属性。
   *
   * 当输出属性发出一个事件时，附加到该事件的事件处理程序调用该模板。
   *
   * `outputs`属性将一组`directiveProperty`定义为`bindingProperty`配置:
   *
   * - `directiveProperty`指定发出事件的组件属性.
   * - `bindingProperty`指定事件处理程序所附加的DOM属性.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/d5CNq7?p=preview））
   *
   * `.``typescript
   * @Directive({
     *   selector: 'interval-dir',
     *   outputs: ['everySecond', 'five5Secs: everyFiveSeconds']
     * })
   * class IntervalDir {
     *   everySecond = new EventEmitter();
     *   five5Secs = new EventEmitter();
     *
     *   constructor() {
     *     setInterval(() => this.everySecond.emit("event"), 1000);
     *     setInterval(() => this.five5Secs.emit("event"), 5000);
     *   }
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
     *     </interval-dir>
     *   `
     * })
   * class App {
     *   everySecond() { console.log('second'); }
     *   everyFiveSeconds() { console.log('five seconds'); }
     * }
   * `.``
   *
   */
  outputs?: string[];
  /**
   * 指定与主机元素相关的事件，操作，属性和属性.
   *
   * ## 主机监听器
   *
   * 通过一组`（event）`指向`method`来指定一个指令侦听哪个DOM事件
   * 键值对:
   *
   * - `event`: 指令监听的DOM事件.
   * - `statement`: 发生事件时执行的语句.
   * 如果该语句的评估返回`false`，那么`preventDefault`应用于DOM事件
   *
   * 要侦听全局事件，必须将事件名称添加到目标.
   * 目标可以是“window”，“document”或“body”.
   *
   * 编写指令事件绑定时，还可以参考$ event局部变量.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/DlA5KU?p=preview））
   *
   * 以下示例声明将点击监听器附加到按钮并计数点击的指令.
   *
   * `.``typescript
   * @Directive({
     *   selector: 'button[counting]',
     *   host: {
     *     '(click)': 'onClick($event.target)'
     *   }
     * })
   * class CountClicks {
     *   numberOfClicks = 0;
     *
     *   onClick(btn) {
     *     console.log("button", btn, "number of clicks:", this.numberOfClicks++);
     *   }
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `<button counting>Increment</button>`
     * })
   * class App {}
   * `.``
   *
   * ## 主机属性绑定
   *
   * 指定指令更新的DOM属性。
   *
   * 在更改检测期间，Angular会自动检查主机属性绑定.
   * 如果绑定更改，它将更新指令的主机元素.
   *
   * ### 示例（[live demo]（http://plnkr.co/edit/gNg0ED?p=preview））
   *
   * 以下示例创建了一个在DOM元素上设置“valid”和“invalid”类的指令，
   * 该元素具有ngModel伪指令.
   *
   * `.``typescript
   * @Directive({
     *   selector: '[ngModel]',
     *   host: {
     *     '[class.valid]': 'valid',
     *     '[class.invalid]': 'invalid'
     *   }
     * })
   * class NgModelStatus {
     *   constructor(public control:NgModel) {}
     *   get valid { return this.control.valid; }
     *   get invalid { return this.control.invalid; }
     * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `<input [(ngModel)]="prop">`
     * })
   * class App {
     *   prop;
     * }
   * `.``
   *
   * ## 属性
   *
   * 指定应传播到主机元素的静态属性.
   *
   * ### 例
   *
   * 在这个例子中，
   * 使用主机元素（这里：`<div>`）上的`my-button`指令
   * （例如：`<div my-button> </ div>`）将确保该元素将获得“按钮 “角色。.
   *
   * `.``typescript
   * @Directive({
     *   selector: '[my-button]',
     *   host: {
     *     'role': 'button'
     *   }
     * })
   * class MyButton {
     * }
   * `.``
   */
  host?: {
    [key: string]: string;
  };
  /**
   * 定义指令和其轻型DOM子项可见的可注射对象集合.
   *
   * ## 简例
   *
   * 这是一个可以注入的类的例子:
   *
   * `.``
   * class Greeter {
     *    greet(name:string) {
     *      return 'Hello ' + name + '!';
     *    }
     * }
   *
   * @Directive({
     *   selector: 'greet',
     *   providers: [
     *     Greeter
     *   ]
     * })
   * class HelloWorld {
     *   greeter:Greeter;
     *
     *   constructor(greeter:Greeter) {
     *     this.greeter = greeter;
     *   }
     * }
   * `.``
   */
  providers?: Provider[];
  /**
   * 定义可以在模板中使用的名称，以将此指令分配给变量.
   *
   * ## 简例
   *
   * `.``
   * @Directive({
     *   selector: 'child-dir',
     *   exportAs: 'child'
     * })
   * class ChildDir {
     * }
   *
   * @Component({
     *   selector: 'main',
     *   template: `<child-dir #c="child"></child-dir>`
     * })
   * class MainComponent {
     * }
   *
   * `.``
   */
  exportAs?: string;
  /**
   * 配置将注入到指令中的查询.
   *
   * 内容查询在调用`ngAfterContentInit`回调之前设置.
   * 查询查询是在调用`ngAfterViewInit`回调之前设置的.
   *
   * ### 例
   *
   * `.``
   * @Component({
     *   selector: 'someDir',
     *   queries: {
     *     contentChildren: new ContentChildren(ChildDirective),
     *     viewChildren: new ViewChildren(ChildDirective)
     *   },
     *   template: '<child-directive></child-directive>'
     * })
   * class SomeDir {
     *   contentChildren: QueryList<ChildDirective>,
     *   viewChildren: QueryList<ChildDirective>
     *
     *   ngAfterContentInit() {
     *     // 内容节点设置
     *   }
     *
     *   ngAfterViewInit() {
     *     // 设图节点设在
     *   }
     * }
   * `.``
   */
  queries?: {
    [key: string]: any;
  };
}
/**
 * 指令装饰器和元数据.
 *
 * @稳定
 * @注解
 */
export declare const Directive: DirectiveDecorator;
/**
 * Component装饰器/构造函数的类型.
 *
 * @stable
 */
export interface ComponentDecorator {
  /**
   * @whatItDoes将类标记为角度组件并收集组件配置元数据.
   *
   * @如何使用
   *
   * {@example core/ts/metadata/metadata.ts region='component'}
   *
   * @描述
   * 组件装饰器允许您将类标记为角度组件，
   * 并提供其他元数据，以确定如何在运行时处理，
   * 实例化和使用组件.
   *
   * 组件是Angular应用程序中UI最基本的构建块.
   * Angular应用是一个角度的组件树.
   * Angular组件是指令的一个子集。 
   * 与指令不同，组件始终具有模板，
   * 并且只能在模板中的元素中实例化一个组件.
   *
   * 组件必须属于NgModule，
   * 以便它可以被另一个组件或应用程序使用。 
   * 要指定组件是NgModule的成员，
   * 应将其列在该NgModule的“声明”字段中。
   *
   * 除了通过Component装饰器指定的元数据配置之外,
   * 组件可以通过实现各种生命周期钩子来控制其运行时行为.
   *
   * **元数据属性:**
   *
   * * **animations** - 该组件的动画列表
   * * **changeDetection** - 改变该组件使用的检测策略
   * * **encapsulation** - 该组件使用的样式封装策略
   * * **entryComponents** - 动态插入到此组件的视图中的组件列表
   * * **exportAs** - 组件实例在模板中导出的名称
   * * **host** - 类属性映射到事件，属性和属性的主机元素绑定
   * * **inputs** - 将类属性名称列表作为组件输入的数据绑定
   * * **interpolation** - 此组件模板中使用的自定义插值标记
   * * **moduleId** - 定义此组件的文件的ES / CommonJS模块ID
   * * **outputs** - 列出其他可以订阅的输出事件的类属性名称
   * * **providers** - 该组件及其子组件可用的提供程序列表
   * * **queries** -  配置可以注入组件的查询
   * * **selector** - css选择器，用于标识模板中的此组件
   * * **styleUrls** - 要应用于此组件视图的样式表的URL列表
   * * **styles** - 内联定义的样式应用于此组件的视图
   * * **template** - 视图的内联定义模板
   * * **templateUrl** - url到包含视图模板的外部文件
   * * **viewProviders** - 此组件及其查看子项可用的提供程序列表
   *
   * ### 例
   *
   * {@example core/ts/metadata/metadata.ts region='component'}
   *
   * @stable
   * @Annotation
   */
  (obj: Component): TypeDecorator;
  /**
   * 请参阅{@link Component}装饰器。
   */
  new (obj: Component): Component;
}
/**
 * 组件元数据的类型.
 *
 * @stable
 */
export interface Component extends Directive {
  /**
   * 定义使用的变更检测策略.
   *
   * 当一个组件被实例化时，Angular创建一个变化检测器，
   * 它负责传播组件的绑定.
   *
   * `changeDetection`属性定义，
   * 是否会每次检查更改检测，或仅当组件告诉它进行检查时.
   */
  changeDetection?: ChangeDetectionStrategy;
  /**
   * 定义可视对象的集合，使其DOM DOM子项的视图可见.
   *
   * ## Simple Example
   *
   * 这是一个可以注入的类的例子:
   *
   * `.``
   * class Greeter {
     *    greet(name:string) {
     *      return 'Hello ' + name + '!';
     *    }
     * }
   *
   * @Directive({
     *   selector: 'needs-greeter'
     * })
   * class NeedsGreeter {
     *   greeter:Greeter;
     *
     *   constructor(greeter:Greeter) {
     *     this.greeter = greeter;
     *   }
     * }
   *
   * @Component({
     *   selector: 'greet',
     *   viewProviders: [
     *     Greeter
     *   ],
     *   template: `<needs-greeter></needs-greeter>`
     * })
   * class HelloWorld {
     * }
   *
   * `.``
   */
  viewProviders?: Provider[];
  /**
   * 包含组件的模块的模块ID.
   * 需要能够解析模板和样式的相对URL.
   * 在CommonJS中，这可以始终设置为`module.id`，同样的SystemJS在每个模块中都会显示`__moduleName`变量.
   *
   *
   * ## 简例
   *
   * `.``
   * @Directive({
     *   selector: 'someDir',
     *   moduleId: module.id
     * })
   * class SomeDir {
     * }
   *
   * `.``
   */
  moduleId?: string;
  /**
   * 指定Angular组件的模板URL.
   *
   *每个View只能定义“templateUrl”或“template”之一.
   */
  templateUrl?: string;
  /**
   * 指定Angular组件的内联模板.
   *
   * 每个组件只能定义“templateUrl”或“template”之一.
   */
  template?: string;
  /**
   * 指定Angular组件的样式表URL.
   */
  styleUrls?: string[];
  /**
   * 指定Angular组件的内联样式表.
   */
  styles?: string[];
  /**
   * 通过类似动画的DSL在组件上定义动画。 
   * 描述动画的这种DSL方法允许灵活性，
   * 这既有益于开发人员和框架.
   *
   * 通过侦听在模板中的元素上发生的状态更改来进行动画处理。 
   * 当发生状态变化时，角度可以利用它们之间的弧线并使其动画化。 
   * 这与CSS过渡的工作方式类似，但是通过使用编程式DSL，动画不限于DOM特定的环境.
   * (Angular还可以在幕后进行优化，使动画更加出色.)
   *
   * 为了使动画可以使用，动画状态更改位于{@link触发器动画触发器}中，
   * 它们位于“动画”注释元数据的内部。 
   * 在触发器中，可以放置{@link状态}和{@link转换转换}条目.
   *
   * `.``typescript
   * @Component({
     *   selector: 'animation-cmp',
     *   templateUrl: 'animation-cmp.html',
     *   animations: [
     *     // 这是我们的动画触发器，它将包含我们的状态变化动画.
     *     trigger('myTriggerName', [
     *       // 动画完成后，为元素定义的“on”和“off”状态的样式将保留在元素上.
     *       state('on', style({ opacity: 1 }),
     *       state('off', style({ opacity: 0 }),
     *
     *       // 这是我们的动画，当这个状态变化跳跃是真的时，它开始了
     *       transition('on => off', [
     *         animate("1s")
     *       ])
     *     ])
     *   ]
     * })
   * `.``
   *
   * 如上面的代码所示，
   * 一组相关的动画状态都包含在动画“触发器”（上面的代码示例称为触发器iggerName）中）。 
   * 当触发器被创建时，它可以被绑定到组件模板中的一个元素上，
   * 前缀是一个前缀为“@”符号的属性，后跟触发器名称和用于确定该触发器的状态值的表达式.
   *
   * `.``html
   * <!-- animation-cmp.html -->
   * <div @myTriggerName="expression">...</div>
   * `.``
   *
   * 对于要执行的状态更改，“expression”值必须将值从现有值更改为我们将动画设置为动画
   * （在上面的示例中，我们正在监听“on”和“off”之间的状态更改`）。 
   * 附加到触发器的“expression”值必须是可以使用模板/组件上下文来评估的值.
   *
   * ### DSL动画功能
   *
   * 请访问下面列出的每个动画DSL功能，以更好地了解如何以及为什么用于在Angular中制作动画:
   *
   * - {@link trigger trigger()}
   * - {@link state state()}
   * - {@link transition transition()}
   * - {@link group group()}
   * - {@link sequence sequence()}
   * - {@link style style()}
   * - {@link animate animate()}
   * - {@link keyframes keyframes()}
   */
  animations?: any[];
  /**
   * 指定模板和样式应如何封装:
   * - {@link ViewEncapsulation#Native `ViewEncapsulation.Native`} to use shadow roots - 仅在平台上可用的情况下才起作用,
   * - {@link ViewEncapsulation#Emulated `ViewEncapsulation.Emulated`} 使用模仿本机行为的shimmed CSS,
   * - {@link ViewEncapsulation#None `ViewEncapsulation.None`} 使用全局CSS而没有任何封装.
   *
   * 当没有为组件定义“封装”时，将使用{@link CompilerOptions}中的默认值。 默认为“ViewEncapsulation.Emulated”}。 提供一个新的`CompilerOptions`来覆盖这个值.
   *
   * 如果封装设置为“ViewEncapsulation.Emulated”，并且组件没有“样式”和“styleUrls”，封装将自动切换到“ViewEncapsulation.None”.
   */
  encapsulation?: ViewEncapsulation;
  /**
   * 覆盖默认的封装开始和结束分隔符（分别为{{`和`}}`）
   */
  interpolation?: [string, string];
  /**
   * 定义此组件时，还要定义应编译的组件。 对于此处列出的每个组件，Angular将创建一个{@link ComponentFactory}并将其存储在{@link ComponentFactoryResolver}.
   */
  entryComponents?: Array<Type<any> | any[]>;
}
/**
 * 组件装饰器和元数据.
 *
 * @stable
 * @Annotation
 */
export declare const Component: ComponentDecorator;
/**
 * 管道装饰器/构造函数的类型.
 *
 * @stable
 */
export interface PipeDecorator {
  /**
   * 声明可重复使用的管道功能.
   *
   * 只有当输入或任何参数发生变化时，才会重新评估“纯”管道.
   *
   * 当未指定时，管道默认为纯.
   */
  (obj: Pipe): TypeDecorator;
  /**
   * 请参阅{@link Pipe}装饰器.
   */
  new (obj: Pipe): Pipe;
}
/**
 * 管道元数据的类型.
 *
 * @stable
 */
export interface Pipe {
  name: string;
  pure?: boolean;
}
/**
 * 管道装饰器和元数据.
 *
 * @stable
 * @Annotation
 */
export declare const Pipe: PipeDecorator;
/**
 * 输入装饰器/构造函数的类型.
 *
 * @stable
 */
export interface InputDecorator {
  /**
   * 声明数据绑定输入属性.
   *
   * Angular.
   *
   * `Input`接受一个可选参数，指定在模板中实例化组件时使用的名称。 未提供时，将使用装饰属性的名称.
   *
   * ### Example
   *
   * 以下示例创建一个具有两个输入属性的组件.
   *
   * `.``typescript
   * @Component({
     *   selector: 'bank-account',
     *   template: `
     *     Bank Name: {{bankName}}
     *     Account Id: {{id}}
     *   `
     * })
   * class BankAccount {
   *   @Input() bankName: string;
   *   @Input('account-id') id: string;
   *
   *   // 此属性未绑定，不会被Angular自动更新
   *   normalizedBankName: string;
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <bank-account bank-name="RBC" account-id="4747"></bank-account>
     *   `
     * })
   *
   * class App {}
   * `.``
   * @stable
   */
  (bindingPropertyName?: string): any;
  new (bindingPropertyName?: string): any;
}
/**
 * 输入元数据的类型.
 *
 * @stable
 */
export interface Input {
  /**
   * 在模板中实例化组件时使用的名称.
   */
  bindingPropertyName?: string;
}
/**
 * 输入装饰器和元数据.
 *
 * @stable
 * @Annotation
 */
export declare const Input: InputDecorator;
/**
 * 输出装饰器/构造函数的类型.
 *
 * @stable
 */
export interface OutputDecorator {
  /**
   * 声明一个事件绑定的输出属性.
   *
   * 当输出属性发出一个事件时，附加到该事件的事件处理程序调用该模板.
   *
   * `Output`采用一个可选参数，指定在模板中实例化组件时使用的名称。 
   * 未提供时，将使用装饰属性的名称.
   *
   * ### 例
   *
   * `.``typescript
   * @Directive({
     *   selector: 'interval-dir',
     * })
   * class IntervalDir {
   *   @Output() everySecond = new EventEmitter();
   *   @Output('everyFiveSeconds') five5Secs = new EventEmitter();
   *
   *   constructor() {
     *     setInterval(() => this.everySecond.emit("event"), 1000);
     *     setInterval(() => this.five5Secs.emit("event"), 5000);
     *   }
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `
     *     <interval-dir (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()">
     *     </interval-dir>
     *   `
     * })
   * class App {
     *   everySecond() { console.log('second'); }
     *   everyFiveSeconds() { console.log('five seconds'); }
     * }
   * `.``
   * @stable
   */
  (bindingPropertyName?: string): any;
  new (bindingPropertyName?: string): any;
}
/**
 * 输出元数据的类型.
 *
 * @stable
 */
export interface Output {
  bindingPropertyName?: string;
}
/**
 * 输出装饰器和元数据.
 *
 * @stable
 * @Annotation
 */
export declare const Output: OutputDecorator;
/**
 * HostBinding装饰器/构造函数的类型.
 *
 * @stable
 */
export interface HostBindingDecorator {
  /**
   * 声明主机属性绑定.
   *
   * 在更改检测期间，Angular会自动检查主机属性绑定.
   * 如果绑定更改，它将更新指令的主机元素.
   *
   * `HostBinding`接受一个可选参数，
   * 指定要更新的主机元素的属性名称。 
   * 未提供时，使用类属性名称.
   *
   * ### 例
   *
   * 以下示例创建了一个在DOM元素上设置“valid”和“invalid”类的指令，该元素具有ngModel伪指令.
   *
   * `.``typescript
   * @Directive({selector: '[ngModel]'})
   * class NgModelStatus {
     *   constructor(public control:NgModel) {}
   *   @HostBinding('class.valid') get valid() { return this.control.valid; }
   *   @HostBinding('class.invalid') get invalid() { return this.control.invalid; }
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: `<input [(ngModel)]="prop">`,
     * })
   * class App {
     *   prop;
     * }
   * `.``
   * @stable
   */
  (hostPropertyName?: string): any;
  new (hostPropertyName?: string): any;
}
/**
 * HostBinding元数据的类型.
 *
 * @stable
 */
export interface HostBinding {
  hostPropertyName?: string;
}
/**
 * HostBinding装饰器和元数据.
 *
 * @stable
 * @Annotation
 */
export declare const HostBinding: HostBindingDecorator;
/**
 * HostListener装饰器/构造函数的类型.
 *
 * @stable
 */
export interface HostListenerDecorator {
  /**
   * 声明主机侦听器.
   *
   * 当主机元素发出指定的事件时，Angular将调用装饰的方法.
   *
   * 如果装饰方法返回`false`，那么`preventDefault`应用于DOM事件.
   *
   * ### Example
   *
   * 以下示例声明将点击监听器附加到按钮并计数点击的指令.
   *
   * `.``typescript
   * @Directive({selector: 'button[counting]'})
   * class CountClicks {
     *   numberOfClicks = 0;
     *
   *   @HostListener('click', ['$event.target'])
   *   onClick(btn) {
     *     console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
     *   }
   * }
   *
   * @Component({
     *   selector: 'app',
     *   template: '<button counting>Increment</button>',
     * })
   * class App {}
   * `.``
   * @stable
   * @Annotation
   */
  (eventName: string, args?: string[]): any;
  new (eventName: string, args?: string[]): any;
}
/**
 * HostListener元数据的类型.
 *
 * @stable
 */
export interface HostListener {
  eventName?: string;
  args?: string[];
}
/**
 * HostListener装饰器和元数据.
 *
 * @stable
 * @Annotation
 */
export declare const HostListener: HostListenerDecorator;

```