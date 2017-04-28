## 史上最简单Angular2教程，大叔都学会了

作者：王芃 wpcfan@gmail.com

# 第一节：认识Angular 
## 前言
[Angular][1] 是 Google 推出的一个跨平台全终端的框架，和目前比较火的 React 和 Vue.js 相比，有如下优点：

 1. 由于Google的目的是推出一个完整解决方案，所以官方默认提供的类库（比如 routing，http，依赖性注入（DI）等）非常完整，无需自己选择。React 的一大痛点就是选择太多导致在配置寻找组件和类库的过程中消耗太多精力，当然从另一方面看这也是其优势，选择众多且自由。
 2. 官方支持 [TypeScript][2]（微软出品，是 JavaScript 的超集，是 JavaScript 的强类型版本）作为首选编程语言，使得开发脚本语言的一些问题可以更早更方便的找到。
 3. [RxJS][3]友好使得响应式编程在 Augular 中变得极为容易（ Google 开发的框架依赖这么多的微软的产品，可见微软的转型还是很成功的）
 4. 支持[NativeScript][4]甚至[ReactNative][5]等进行原生 Android/iOS 应用开发（ React 支持 React Native ）
 5. 支持服务器端渲染（ React 也支持）

但总体来讲，个人认为 Angular 更适合从原生 App 开发或后端 Java/.Net 等转型过来开发前端的程序员，因为它的开发模型更接近于传统强类型语言的模式，加上官方内建的组件和类库比较完整，有[官方中文站][6]点，学习曲线要低一些。有过Angular 1.x 开发经验的同学要注意了，虽然只有一个版本号的差距，但 2+ 和 1.x 是完全不同的，不要奢望 1.x 的应用会平滑迁移到 2+。

## 环境配置要求
Angular 需要[node.js][7]和npm，我们下面的例子需要node.js 6.x.x和npm 3.x.x，请使用 `node -v` 和 `npm -v` 来检查。由于众所周知的原因，http://npmjs.org 的站点访问经常不是很顺畅，这里给出一个由淘宝团队维护的国内镜像 http://npm.taobao.org/ 。安装好node后，请打开命令行窗口（ Windows 用户推荐使用 PowerShell，其它平台打开 Terminal 即可）输入`npm config set registry https://registry.npm.taobao.org` 。或者直接使用淘宝团队的 `cnpm`，使用下面的命令安装 `cnpm` : `npm install -g cnpm --registry=https://registry.npm.taobao.org`。

和[官方快速起步文档][8]给出的例子不同，我们下面要使用Angular团队目前正在开发中的一个工具 -- [Angular CLI][9] 。这是一个类似于 React CLI 和 Ember CLI 的命令行工具，用于快速构建 Angular 的应用。它的优点是进一步屏蔽了很多配置的步骤、自动按官方推荐的模式进行代码组织、自动生成组件/服务等模板以及更方便的发布和测试代码。由于目前这个工具已经 release 了，安装时请使用 `npm install -g @angular/cli` 命令。这个安装过程有些长，请务必等待命令行提示符重新出现。安装好之后，我们就可以使用一个叫做 `ng` 的命令了，这个命令是我们后面经常要打交道的：包括创建新工程，启动工程，编译等。

IDE的选择也比较多，免费的 [Visual Studio Code][10] 和 [Atom][11]，收费的有 [WebStorm][12]。我们这里推荐采用 Visual Studio Code，可以到 https://code.visualstudio.com/ 下载 Windows/Linux/MacOS 版本。

安装完以上这些工具，开发环境就部署好了，下面我们将开始 Angular 的探险之旅。

## 第一个小应用 Hello Angular
那么现在开启一个 terminal （命令行窗口），键入 `ng new hello-angular --skip-install` , 然后进入 `hello-angular` 目录执行 `cnpm install`。由于很多童鞋遇到安装问题，推荐在新建 project 时忽略安装 ( 加 `--skip-install` 参数)，然后用 cnpm 执行依赖安装。
![c1_s1_ng_new_hello-angular.png-51.7kB][13] 如上图所示，这个命令为我们新建了一个名为 `hello-angular` 的工程，进入该工程目录，键入 `code .` 可以打开IDE看到如下目录
![c1_s1_vscode_project_struct.png-300.1kB][14] 

|-- .editorconfig //通用的编辑器配置文件，以后换IDE时可以保持一些设置的平滑迁移
|-- .gitignore //需要Git忽略的文件列表
|-- angular-cli.json //Angular-CLI配置文件
|-- karma.conf.js //Karma单元测试配置文件
|-- package.json //node打包文件
|-- protractor.conf.js //端到端测试配置文件（集成测试）
|-- README.md
|-- tslint.json //代码Lint静态检查的配置
|-- e2e //端到端测试代码目录
|   |-- app.e2e-spec.ts
|   |-- app.po.ts
|   |-- tsconfig.json
|-- src //源码
    |-- favicon.ico //站点收藏图标
    |-- index.html //入口页面
    |-- main.ts //入口ts文件
    |-- polyfills.ts //针对浏览器能力增强的polyfills引用文件
    |-- styles.css //全局样式文件
    |-- test.ts //测试入口文件
    |-- tsconfig.json //TypeScript配置文件
    |-- typings.d.ts //项目中使用的TypeScript类型定义引用文件
    |-- app //应用目录
    |   |-- app.component.css //引导性组件的样式文件
    |   |-- app.component.html //引导性组件的HTML模板
    |   |-- app.component.spec.ts //引导性组件测试文件
    |   |-- app.component.ts //系统引导性组件
    |   |-- app.module.ts //应用根模块
    |   |-- index.ts //应用入口
    |-- assets //站点资源文件夹
    |   |-- .gitkeep
    |-- environments
        |-- environment.prod.ts //生产环境配置文件
        |-- environment.ts //环境配置
大概了解了文件目录结构后，我们重新回到命令行，在应用根目录键入 `ng serve` 可以看到应用编译打包后server运行在4200端口。
![c1_s1_ng_serve.png-42.5kB][15]
打开浏览器输入 http://localhost:4200 即可看到程序运行成功啦！
![c1_s1_project_1st_browser.png-135.7kB][16]
自动生成的太没有成就感了是不是，那么我们动手改一下吧。保持运行服务的命令窗口，然后进入 VSCode ，打开 `src/app/app.component.ts` 修改 title ，比如： `title = 'This is a hello-angular app';`，保存后返回浏览器看一下吧，结果已经更新了，这种热装载的特性使得开发变得很方便。
![c1_s1_project_1st_browser_update.png-146.5kB][17]

## 第一个组件
那么我们来为我们的app增加一个 Component 吧，在命令行窗口输入 `ng generate component login --inline-template --inline-style` 。 顾名思义，参数 generate 是用来生成文件的，参数 component 是说明我们要生成一个组件， login 呢是我们的组件名称，你可以自己想个其他有意思的名字。后面的两个参数是告诉angular-cli：生成组件时，请把组件的HTML模板和CSS样式和组件放在同一个文件中（其实分开文件更清晰，但第一个例子我们还是采用inline方式了）。是不是感觉这个命令行太长了？幸运的是 Angular 团队也这么想，所以你可以把上面的命令改写成 `ng g c login -it -is` ,也就是说可以用 generate 的首字母g来代替 generate ，用 component 的首字母c来代替 component ，类似的`--inline-template`的两个词分别取首字母变成`-it`
![image_1b27r02qlo6f11f19qg1q9k1fclm.png-30.3kB][18]
 angular-cli 为我们在 `\src\app` 目录下生成了一个新文件夹 login，在 login 目录下生成了2个文件，其中 `login.component.spec.ts` 是测试文件，我们这里暂时不提。另一个是 `login.component.ts` 这个就是我们新建的Component了。Angular提倡的文件命名方式是这样的：`组件名称.component.ts` ，组件的HTML模板命名为： `组件名称.component.html`，组件的样式文件命名为： `组件名称.component.css`,大家在编码中尽量遵循 Google 的官方建议。

我们新生成的Login组件源码如下

```javascript
import { Component, OnInit } from '@angular/core';

//@Component是Angular提供的装饰器函数，用来描述Compoent的元数据
//其中selector是指这个组件的在HTML模板中的标签是什么
//template是嵌入（inline）的HTML模板，如果使用单独文件可用templateUrl
//styles是嵌入（inline）的CSS样式，如果使用单独文件可用styleUrls
@Component({
  selector: 'app-login',
  template: `
    <p>
      login Works!
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
那么这个组件建成后，我们怎么使用呢？注意上面的代码中 `@Component` 修饰配置中的 `selector: 'app-login'`，这意味着我们可以在其他组件的template中使用 `<app-login></app-login>` 来引用我们的这个组件。

现在我们打开 `hello-angular\src\app\app.component.html` 加入我们的组件引用

```html
<h1>
  {{title}}
</h1>
<app-login></app-login>
```
保存后返回浏览器，可以看到我们的第一个组件也显示出来了。
![image_1b27qsmhp1nlrb8g1uh6cp71qcj9.png-19kB][19]

## 一些基础概念
这里我们粗略介绍一些Angular的基础概念，这些基础概念在后面的章节中会更详细的讲解。
### 什么是模块？
简单来说模块就是提供相对独立功能的功能块，每块聚焦于一个特定业务领域。Angular内建的很多库是以模块形式提供的，比如FormsModule封装了表单处理，HttpModule封装了Http的处理等等。每个Angular应用至少有一个模块类 —— *根模块*，我们将通过引导根模块来启动应用。按照约定，根模块的类名叫做AppModule，被放在 `app.module.ts` 文件中。我们这个例子中的根模块位于 `hello-angular\src\app\app.module.ts`

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
@NgModule装饰器用来为模块定义元数据。declarations 列出了应用中的顶层组件，包括引导性组件 AppComponent 和我们刚刚创建的 LoginComponent 。在 module 里面声明的组件在 module 范围内都可以直接使用，也就是说在同一 module 里面的任何 Component 都可以在其模板文件中直接使用声明的组件，就想我们在 AppComponent 的模板末尾加上 `<app-login></app-login>` 一样。

imports引入了3个辅助模块：

 - BrowserModule提供了运行在浏览器中的应用所需要的关键服务（Service）和指令（Directive），这个模块所有需要在浏览器中跑的应用都必须引用；
 - FormsModule提供了表单处理和双向绑定等服务和指令
 - HttpModule提供Http请求和响应的服务

providers列出会在此模块中“注入”的服务（Service），关于依赖性注入会在后面章节中详细解释。
bootstrap指明哪个组件为引导性组件（本案例中的AppComponent）。当Angular引导应用时，它会在DOM中渲染这个引导性组件，并把结果放进index.html的该组件的元素标签中（本案例中的app-root）。

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>HelloAngular</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
```
### 引导过程
Angular2通过在main.ts中引导AppModule来启动应用。针对不同的平台，Angular提供了很多引导选项。下面的代码是通过即时（JiT）编译器动态引导，一般在进行开发调试时，默认采用这种方式。

```javascript
//main.ts
import './polyfills.ts';

// 连同Angular编译器一起发布到浏览器
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}
//Angular编译器在浏览器中编译并引导该应用
platformBrowserDynamic().bootstrapModule(AppModule);
```
另一种方式是使用预编译器（AoT - Ahead-Of-Time）进行静态引导，静态方案可以生成更小、启动更快的应用，建议优先使用它，特别是在移动设备或高延迟网络下。使用static选项，Angular编译器作为构建流程的一部分提前运行，生成一组类工厂。它们的核心就是AppModuleNgFactory。引导预编译的AppModuleNgFactory的语法和动态引导AppModule类的方式很相似。

```javascript
// 不把编译器发布到浏览器
import { platformBrowser } from '@angular/platform-browser';

// 静态编译器会生成一个AppModule的工厂AppModuleNgFactory
import { AppModuleNgFactory } from './app.module.ngfactory';

// 引导AppModuleNgFactory
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```
本节代码：https://github.com/wpcfan/awesome-tutorials/tree/chap01/angular2/ng2-tut

下一节我们再继续，记住大叔能学会的你也能。

纸书出版了，比网上内容丰富充实了，欢迎大家订购！
京东链接：https://item.m.jd.com/product/12059091.html?from=singlemessage&isappinstalled=0
![Angular从零到一][20]


  [1]: https://angular.io/
  [2]: http://www.typescriptlang.org/
  [3]: http://reactivex.io/rxjs/
  [4]: https://www.nativescript.org/
  [5]: http://angular.github.io/react-native-renderer/
  [6]: https://angular.cn
  [7]: https://nodejs.org/en/
  [8]: https://angular.cn/docs/ts/latest/quickstart.html
  [9]: https://github.com/angular/angular-cli
  [10]: https://code.visualstudio.com/
  [11]: https://atom.io/
  [12]: https://www.jetbrains.com/webstorm/
  [13]: http://static.zybuluo.com/wpcfan/zrmu59kvd6986hbojldvzu4t/c1_s1_ng_new_hello-angular.png
  [14]: http://static.zybuluo.com/wpcfan/hwsg3a6eashfnxhodwgzmd6r/c1_s1_vscode_project_struct.png
  [15]: http://static.zybuluo.com/wpcfan/4xrvfcelykg9dbmft73rm3ym/c1_s1_ng_serve.png
  [16]: http://static.zybuluo.com/wpcfan/1fhyangnbqqjemxr5md4qa2p/c1_s1_project_1st_browser.png
  [17]: http://static.zybuluo.com/wpcfan/00ujvqg9m6ir0km0nzp54x4d/c1_s1_project_1st_browser_update.png
  [18]: http://static.zybuluo.com/wpcfan/fyyy1bsjffockae39ohyar1g/c1_s1_ng_generate_component.png
  [19]: http://static.zybuluo.com/wpcfan/221myv71bszofiagzj9zn8nq/image_1b0uon4nk166c1t8csvittehk9.png
  [20]: https://m.360buyimg.com/n12/jfs/t4189/113/3010039843/174960/9aa3cc44/58d8d48bNd0392b98.jpg!q70.jpg