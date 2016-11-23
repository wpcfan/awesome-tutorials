<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Angular 2.x 从0到1](#angular-2x-%E4%BB%8E0%E5%88%B01)
  - [史上最简单Angular 2.x教程，大叔都学会了](#%E5%8F%B2%E4%B8%8A%E6%9C%80%E7%AE%80%E5%8D%95angular-2x%E6%95%99%E7%A8%8B%E5%A4%A7%E5%8F%94%E9%83%BD%E5%AD%A6%E4%BC%9A%E4%BA%86)
  - [标签（空格分隔）： 编程 前端 javascript 框架 教程](#%E6%A0%87%E7%AD%BE%E7%A9%BA%E6%A0%BC%E5%88%86%E9%9A%94-%E7%BC%96%E7%A8%8B-%E5%89%8D%E7%AB%AF-javascript-%E6%A1%86%E6%9E%B6-%E6%95%99%E7%A8%8B)
- [第一节：认识Angular 2.0](#%E7%AC%AC%E4%B8%80%E8%8A%82%E8%AE%A4%E8%AF%86angular-20)
  - [前言](#%E5%89%8D%E8%A8%80)
  - [环境配置要求](#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E8%A6%81%E6%B1%82)
  - [第一个小应用 Hello Angular](#%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%B0%8F%E5%BA%94%E7%94%A8-hello-angular)
  - [第一个组件](#%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6)
  - [一些基础概念](#%E4%B8%80%E4%BA%9B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5)
    - [什么是模块？](#%E4%BB%80%E4%B9%88%E6%98%AF%E6%A8%A1%E5%9D%97)
    - [引导过程](#%E5%BC%95%E5%AF%BC%E8%BF%87%E7%A8%8B)
- [第二节：用Form表单做一个登录控件](#%E7%AC%AC%E4%BA%8C%E8%8A%82%E7%94%A8form%E8%A1%A8%E5%8D%95%E5%81%9A%E4%B8%80%E4%B8%AA%E7%99%BB%E5%BD%95%E6%8E%A7%E4%BB%B6)
  - [对于login组件的小改造](#%E5%AF%B9%E4%BA%8Elogin%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B0%8F%E6%94%B9%E9%80%A0)
  - [建立一个服务去完成业务逻辑](#%E5%BB%BA%E7%AB%8B%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%8E%BB%E5%AE%8C%E6%88%90%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)
    - [什么是依赖性注入？](#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BE%9D%E8%B5%96%E6%80%A7%E6%B3%A8%E5%85%A5)
  - [双向数据绑定](#%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
  - [表单数据的验证](#%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE%E7%9A%84%E9%AA%8C%E8%AF%81)
  - [验证结果的样式自定义](#%E9%AA%8C%E8%AF%81%E7%BB%93%E6%9E%9C%E7%9A%84%E6%A0%B7%E5%BC%8F%E8%87%AA%E5%AE%9A%E4%B9%89)
  - [进一步的练习](#%E8%BF%9B%E4%B8%80%E6%AD%A5%E7%9A%84%E7%BB%83%E4%B9%A0)
- [第三节：建立一个待办事项应用](#%E7%AC%AC%E4%B8%89%E8%8A%82%E5%BB%BA%E7%AB%8B%E4%B8%80%E4%B8%AA%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%BA%94%E7%94%A8)
  - [建立routing的步骤](#%E5%BB%BA%E7%AB%8Brouting%E7%9A%84%E6%AD%A5%E9%AA%A4)
  - [让待办事项变得有意义](#%E8%AE%A9%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%8F%98%E5%BE%97%E6%9C%89%E6%84%8F%E4%B9%89)
  - [建立模拟web服务和异步操作](#%E5%BB%BA%E7%AB%8B%E6%A8%A1%E6%8B%9Fweb%E6%9C%8D%E5%8A%A1%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C)
- [第四节：进化！模块化你的应用](#%E7%AC%AC%E5%9B%9B%E8%8A%82%E8%BF%9B%E5%8C%96%E6%A8%A1%E5%9D%97%E5%8C%96%E4%BD%A0%E7%9A%84%E5%BA%94%E7%94%A8)
  - [一个复杂组件的分拆](#%E4%B8%80%E4%B8%AA%E5%A4%8D%E6%9D%82%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E6%8B%86)
  - [封装成独立模块](#%E5%B0%81%E8%A3%85%E6%88%90%E7%8B%AC%E7%AB%8B%E6%A8%A1%E5%9D%97)
  - [更真实的web服务](#%E6%9B%B4%E7%9C%9F%E5%AE%9E%E7%9A%84web%E6%9C%8D%E5%8A%A1)
  - [完善Todo应用](#%E5%AE%8C%E5%96%84todo%E5%BA%94%E7%94%A8)
    - [TodoItem和TodoList组件](#todoitem%E5%92%8Ctodolist%E7%BB%84%E4%BB%B6)
  - [填坑，完成漏掉的功能](#%E5%A1%AB%E5%9D%91%E5%AE%8C%E6%88%90%E6%BC%8F%E6%8E%89%E7%9A%84%E5%8A%9F%E8%83%BD)
    - [用路由参数传递数据](#%E7%94%A8%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
    - [批量修改和批量删除](#%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9%E5%92%8C%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4)
- [多用户版本的待办事项应用](#%E5%A4%9A%E7%94%A8%E6%88%B7%E7%89%88%E6%9C%AC%E7%9A%84%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%BA%94%E7%94%A8)
  - [数据驱动开发](#%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91)
  - [验证用户账户的流程](#%E9%AA%8C%E8%AF%81%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E7%9A%84%E6%B5%81%E7%A8%8B)
    - [核心模块](#%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97)
    - [路由守卫](#%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB)
  - [用VSCode进行调试](#%E7%94%A8vscode%E8%BF%9B%E8%A1%8C%E8%B0%83%E8%AF%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Angular 2.x 从0到1 
## 史上最简单Angular 2.x教程，大叔都学会了

作者：王芃 wpcfan@gmail.com
标签（空格分隔）： 编程 前端 javascript 框架 教程
---
[TOC]

# 第一节：认识Angular 2.0
## 前言
[Angular 2][1] 是Google推出的一个跨平台全终端的框架，和目前比较火的React和Vue.js相比，有如下优点：

 1. 由于Google的目的是推出一个完整解决方案，所以官方默认提供的类库（比如routing，http，依赖性注入（DI）等）非常完整，无需自己选择。React的一大痛点就是选择太多导致在配置寻找组件和类库的过程中消耗太多精力，当然从另一方面看这也是其优势，选择众多且自由。
 2. 官方支持[TypeScript][2]（微软出品，是JavaScript的超集，是 JavaScript 的强类型版本）作为首选编程语言，使得开发脚本语言的一些问题可以更早更方便的找到。
 3. [RxJS][3]友好使得响应式编程在Augular2中变得极为容易（Google开发的框架依赖这么多的微软的产品，可见微软的转型还是很成功的）
 4. 支持[NativeScript][4]甚至[ReactNative][5]等进行原生Android/iOS应用开发（React支持React Native）
 5. 支持服务器端渲染（React也支持）

但总体来讲，个人认为Angular2更适合从原生App开发或后端Java/.Net等转型过来开发前端的程序员，因为它的开发模型更接近于传统强类型语言的模式，加上官方内建的组件和类库比较完整，有[官方中文站][6]点，学习曲线要低一些。有过Angular 1.x 开发经验的同学要注意了，虽然只有一个版本号的差距，但2.x和1.x是完全不同的，不要奢望1.x的应用会平滑迁移到2.x。

## 环境配置要求
Angular2需要[node.js][7]和npm，我们下面的例子需要node.js 6.x.x和npm 3.x.x，请使用 `node -v` 和 `npm -v` 来检查。由于众所周知的原因，http://npmjs.org 的站点访问经常不是很顺畅，这里给出一个由淘宝团队维护的国内镜像 http://npm.taobao.org/ 。安装好node后，请输入`npm config set registry https://registry.npm.taobao.org`

和[官方快速起步文档][8]给出的例子不同，我们下面要使用Angular团队目前正在开发中的一个工具--[Angular CLI][9] 。这是一个类似于React CLI和Ember CLI的命令行工具，用于快速构建Angular2的应用。它的优点是进一步屏蔽了很多配置的步骤、自动按官方推荐的模式进行代码组织、自动生成组件/服务等模板以及更方便的发布和测试代码。由于目前这个工具还在beta阶段，安装时请使用 `npm install -g angular-cli@latest` 命令。

IDE的选择也比较多，免费的[Visual Studio Code][10] 和 [Atom][11]，收费的有[WebStorm][12]。我们这里推荐采用 Visual Studio Code，可以到 https://code.visualstudio.com/ 下载 Windows/Linux/MacOS 版本。

安装完以上这些工具，开发环境就部署好了，下面我们将开始Angular2的探险之旅。

## 第一个小应用 Hello Angular
那么现在开启一个terminal（命令行窗口），键入 `ng new hello-angular`
![c1_s1_ng_new_hello-angular.png-51.7kB][13] 如上图所示，这个命令为我们新建了一个名为“hello-angular”的工程，进入该工程目录，键入 `code .` 可以打开IDE看到如下目录
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
自动生成的太没有成就感了是不是，那么我们动手改一下吧。保持运行服务的命令窗口，然后进入VSCode，打开 `src/app/app.component.ts` 修改title，比如： `title = 'This is a hello-angular app';`，保存后返回浏览器看一下吧，结果已经更新了，这种热装载的特性使得开发变得很方便。
![c1_s1_project_1st_browser_update.png-146.5kB][17]

## 第一个组件
那么我们来为我们的app增加一个Component吧，在命令行窗口输入 `ng generate component login --inline-template --inline-style` 。 顾名思义，参数generate是用来生成文件的，参数component是说明我们要生成一个组件，login呢是我们的组件名称，你可以自己想个其他有意思的名字。后面的两个参数是告诉angular-cli：生成组件时，请把组件的HTML模板和CSS样式和组件放在同一个文件中（其实分开文件更清晰，但第一个例子我们还是采用inline方式了）。是不是感觉这个命令行太长了？幸运的是Angular团队也这么想，所以你可以把上面的命令改写成 `ng g c login -it -is` ,也就是说可以用generate的首字母g来代替generate，用component的首字母c来代替component，类似的`--inline-template`的两个词分别取首字母变成`-it`
![image_1b27r02qlo6f11f19qg1q9k1fclm.png-30.3kB][18]
angular-cli为我们在\src\app目录下生成了一个新文件夹login，在login目录下生成了2个文件，其中 `login.component.spec.ts` 是测试文件，我们这里暂时不提。另一个是 `login.component.ts` 这个就是我们新建的Component了。Angular提倡的文件命名方式是这样的：`组件名称.component.ts` ，组件的HTML模板命名为： `组件名称.component.html`，组件的样式文件命名为： `组件名称.component.css`,大家在编码中尽量遵循Google的官方建议。

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
那么这个组件建成后，我们怎么使用呢？注意上面的代码中@Component修饰配置中的 `selector: 'app-login'`，这意味着我们可以在其他组件的template中使用 `<app-login></app-login>` 来引用我们的这个组件。

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
@NgModule装饰器用来为模块定义元数据。declarations列出了应用中的顶层组件，包括引导性组件AppComponent和我们刚刚创建的LoginComponent。在module里面声明的组件在module范围内都可以直接使用，也就是说在同一module里面的任何Component都可以在其模板文件中直接使用声明的组件，就想我们在AppComponent的模板末尾加上 `<app-login></app-login>` 一样。

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
# 第二节：用Form表单做一个登录控件
## 对于login组件的小改造
在 `hello-angular\src\app\login\login.component.ts` 中更改其模板为下面的样子
```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input type="text">
      <button>Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```
我们增加了一个文本输入框和一个按钮，保存后返回浏览器可以看到结果
![c2_s1_input_button_added.png-109.6kB][20]
接下来我们尝试给Login按钮添加一个处理方法 `<button (click)="onClick()">Login</button>`。`(click)`表示我们要处理这个button的click事件，圆括号是说**发生此事件时，调用等号后面的表达式或函数**。等号后面的`onClick()`是我们自己定义在LoginComponent中的函数，这个名称你可以随便定成什么，不一定叫`onClick()`。下面我们就来定义这个函数，在LoginComponent中写一个叫`onClick()`的方法，内容很简单就是把“button was clicked”输出到Console。
```javascript
  onClick() {
    console.log('button was clicked');
  }
```
返回浏览器，并按F12调出开发者工具。当你点击Login时，会发现Console窗口输出了我们期待的文字。
![c2_s1_handle_click_method.png-141kB][21]
那么如果要在onClick中传递一个参数，比如是上面的文本输入框输入的值怎么处理呢？我们可以在文本输入框标签内加一个#usernameRef，这个叫引用（reference）。注意这个**引用是的input对象**，我们如果想传递input的值，可以用`usernameRef.value`，然后就可以把`onClick()`方法改成`onClick(usernameRef.value)`
```javascript
<div>
  <input #usernameRef type="text">
  <button (click)="onClick(usernameRef.value)">Login</button>
</div>
```
在Component内部的onClick方法也要随之改写成一个接受username的方法
```javascript
  onClick(username) {
    console.log(username);
  }
```
现在我们再看看结果是什么样子，在文本输入框中键入“hello”，点击Login按钮，观察Console窗口：hello被输出了。
![c2_s1_input_button_ref.png-141.1kB][22]
好了，现在我们再加一个密码输入框，然后改写onClick方法可以同时接收2个参数：用户名和密码。代码如下：
```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(username, password) {
    console.log('username:' + username + "\n\r" + "password:" + password);
  }

}
```
看看结果吧，在浏览器中第一个输入框输入“wang”，第二个输入框输入“1234567”，观察Console窗口，Bingo！
![c2_s1_username_password_ref.png-141.8kB][23]

## 建立一个服务去完成业务逻辑
如果我们把登录的业务逻辑在onClick方法中完成，当然也可以，但是这样做的耦合性太强了。设想一下，如果我们增加了微信登录、微博登录等，业务逻辑会越来越复杂，显然我们需要把这个业务逻辑分离出去。那么我们接下来创建一个AuthService吧, 首先我们在src\app下建立一个core的子文件夹（`src\app\core`）,然后命令行中输入 `ng g s core\auth` （s这里是service的缩写，core\auth是说在core的目录下建立auth服务相关文件）。`auth.service.ts`和`auth.service.spec.ts`这个两个文件应该已经出现在你的目录里了。

下面我们为这个service添加一个方法，你可能注意到这里我们为这个方法指定了返回类型和参数类型。这就是TypeScript带来的好处，有了类型约束，你在别处调用这个方法时，如果给出的参数类型或返回类型不正确，IDE就可以直接告诉你错了。
```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string): boolean {
    if(username === 'wangpeng')
      return true;
    return false;
  }

}
```
等一下，这个service虽然被创建了，但仍然无法在Component中使用。当然你可以在Component中import这个服务，然后实例化后使用，但是这样做并不好，仍然时一个紧耦合的模式，Angular2提供了一种依赖性注入（Dependency Injection）的方法。

### 什么是依赖性注入？
如果不使用DI（依赖性注入）的时候，我们自然的想法是这样的，在`login.component.ts`中import引入AuthService，在构造中初始化service，在onClick中调用service。
```javascript
import { Component, OnInit } from '@angular/core';
//引入AuthService
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  //声明成员变量，其类型为AuthService
  service: AuthService;

  constructor() {
    this.service = new AuthService();
  }

  ngOnInit() {
  }

  onClick(username, password) {
    //调用service的方法
    console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  }

}
```
这么做呢也可以跑起来，但存在几个问题：

 - 由于实例化是在组件中进行的，意味着我们如果更改service的构造函数的话，组件也需要更改。
 - 如果我们以后需要开发、测试和生产环境配置不同的AuthService，以这种方式实现会非常不方便。

下面我们看看如果使用DI是什么样子的，首先我们需要在组件的修饰器中配置AuthService，然后在组件的构造函数中使用参数进行依赖注入。
```javascript
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: [],
  //在providers中配置AuthService
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  //在构造函数中将AuthService示例注入到成员变量service中
  //而且我们不需要显式声明成员变量service了
  constructor(private service: AuthService) {
  }

  ngOnInit() {
  }

  onClick(username, password) {
    console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  }

}
```
看到这里你会发现我们仍然需要import相关的服务，这是import是要将类型引入进来，而provider里面会配置这个类型的实例。当然即使这样还是不太爽，可不可以不引入AuthService呢？答案是可以。

我们看一下`app.module.ts`，这个根模块文件中我们发现也有个providers，根模块中的这个providers是配置在模块中全局可用的service或参数的。
```javascript
providers: [
    {provide: 'auth',  useClass: AuthService}
    ]
```
providers是一个数组，这个数组呢其实是把你想要注入到其他组件中的服务配置在这里。大家注意到我们这里的写法和上面优点区别，没有直接写成
```javascript
providers:[AuthService]
```
而是给出了一个对象，里面有两个属性，provide和useClass，provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。useClass指明这个名称对应的服务是一个类，本例中就是AuthService了。这样定义好之后，我们就可以在任意组件中注入这个依赖了。下面我们改动一下`login.component.ts`，去掉头部的`import { AuthService } from '../core/auth.service';`和组件修饰器中的providers，更改其构造函数为
```javascript
onstructor(@Inject('auth') private service) {
  }
```
我们去掉了service的类型声明，但加了一个修饰符`@Inject('auth')`，这个修饰符的意思是请到系统配置中找到名称为`auth`的那个依赖注入到我修饰的变量中。当然这样改完后你会发现`Inject`这个修饰符系统不识别，我们需要在`@angular/core`中引用这个修饰符，现在`login.component.ts`看起来应该是下面这个样子
```javascript
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input #usernameRef type="text">
      <input #passwordRef type="password">
      <button (click)="onClick(usernameRef.value, passwordRef.value)">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  onClick(username, password) {
    console.log('auth result is: ' + this.service.loginWithCredentials(username, password));
  }

}
```
## 双向数据绑定
接下来的问题是我们是否只能通过这种方式进行表现层和逻辑之间的数据交换呢？如果我们希望在组件内对数据进行操作后再反馈到界面怎么处理呢？Angular2提供了一个双向数据绑定的机制。这个机制是这样的，在组件中提供成员数据变量，然后在模板中引用这个数据变量。我们来改造一下`login.component.ts`，首先在class中声明2个数据变量username和password。
```javascript
  username = "";
  password = "";
```
然后去掉`onClick`方法的参数，并将内部的语句改造成如下样子：
```javascript
console.log('auth result is: '
      + this.service.loginWithCredentials(this.username, this.password));
```
去掉参数的原因是双向绑定后，我们通过数据成员变量就可以知道用户名和密码了，不需要在传递参数了。而成员变量的引用方式是`this.成员变量`。
然后我们来改造模板：
```html
    <div>
      <input type="text"
        [(ngModel)]="username"
        />
      <input type="password"
        [(ngModel)]="password"
        />
      <button (click)="onClick()">Login</button>
    </div>
```
`[(ngModel)]="username"`这个看起来很别扭，稍微解释一下，方括号[]的作用是说把等号后面当成表达式来解析而不是当成字符串，如果我们去掉方括号那就等于说是直接给这个ngModel赋值成“username”这个字符串了。方括号的含义是单向绑定，就是说我们在组件中给model赋的值会设置到HTML的input控件中。`[()]`是双向绑定的意思，就是说HTML对应控件的状态的改变会反射设置到组件的model中。ngModel是FormModule中提供的指令，它负责从Domain Model（这里就是username或password，以后我们可用绑定更复杂的对象）中创建一个FormControl的实例，并将这个实例和表单的控件绑定起来。同样的对于click事件的处理，我们不需要传入参数了，因为其调用的是刚刚我们改造的组件中的onClick方法。现在我们保存文件后打开浏览器看一下，效果和上一节的应该一样的。本节的完整代码如下：
```javascript
//login.component.ts
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <input type="text"
        [(ngModel)]="username"
        />
      <input type="password"
        [(ngModel)]="password"
        />
      <button (click)="onClick()">Login</button>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  onClick() {
    console.log('auth result is: '
      + this.service.loginWithCredentials(this.username, this.password));
  }

}
```

## 表单数据的验证
通常情况下，表单的数据是有一定的规则的，我们需要依照其规则对输入的数据做验证以及反馈验证结果。Angular2中对表单验证有非常完善的支持，我们继续上面的例子，在`login`组件中，我们定义了一个用户名和密码的输入框，现在我们来为它们加上规则。首先我们定义一下规则，用户名和密码都是必须输入的，也就是不能为空。更改`login.component.ts`中的模板为下面的样子
```html
    <div>
      <input required type="text"
        [(ngModel)]="username"
        #usernameRef="ngModel"
        />
        {{usernameRef.valid}}
      <input required type="password"
        [(ngModel)]="password"
        #passwordRef="ngModel"
        />
        {{passwordRef.valid}}
      <button (click)="onClick()">Login</button>
    </div>
```
注意到我们只是为username和password两个控件加上了required这个属性，表明这两个控件为必填项。通过`#usernameRef="ngModel"`我们重新又加入了引用，这次的引用指向了ngModel，这个引用是要在模板中使用的，所以才加入这个引用如果不需要在模板中使用，可以不要这句。`{{表达式}}`双花括号表示解析括号中的表达式，并把这个值输出到模板中。这里我们为了可以显性的看到控件的验证状态，直接在对应控件后输出了验证的状态。初始状态可以看到2个控件的验证状态都是false，试着填写一些字符在两个输入框中，看看状态变化吧。
![c2_s2_form_validation.png-8.5kB][24]

我们是知道了验证的状态是什么，但是如果我们想知道验证失败的原因怎么办呢？我们只需要将`{{usernameRef.valid}}`替换成`{{usernameRef.errors | json}}`。`|`是管道操作符，用于将前面的结果通过管道输出成另一种格式，这里就是把errors对象输出成json格式的意思。看一下结果吧，返回的结果如下
![c2_s2_form_validation_errors.png-11kB][25]
如果除了不能为空，我们为username再添加一个规则试试看呢，比如字符数不能少于3。
```html
      <input type="text"
        [(ngModel)]="username"
        #usernameRef="ngModel"
        required 
        minlength="3"
        />
```
![c2_s2_form_validation_errors_multiple.png-14.4kB][26]
现在我们试着把`{{表达式}}`替换成友好的错误提示，我们想在有错误发生时显示错误的提示信息。那么我们来改造一下template。
```html
    <div>
      <input type="text"
        [(ngModel)]="username"
        #usernameRef="ngModel"
        required
        minlength="3"
        />
        {{ usernameRef.errors | json }}
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
      <input required type="password"
        [(ngModel)]="password"
        #passwordRef="ngModel"
        />
        <div *ngIf="passwordRef.errors?.required">this is required</div>
      <button (click)="onClick()">Login</button>
    </div>
```
`ngIf`也是一个Angular2的指令，顾名思义，是用于做条件判断的。`*ngIf="usernameRef.errors?.required"`的意思是当`usernameRef.errors.required`为`true`时显示`div`标签。那么那个`?`是干嘛的呢？因为`errors`可能是个null，如果这个时候调用`errors`的`required`属性肯定会引发异常，那么`?`就是标明`errors`可能为空，在其为空时就不用调用后面的属性了。

如果我们把用户名和密码整个看成一个表单的话，我们应该把它们放在一对`<form></form>`标签中，类似的加入一个表单的引用`formRef`。
```html
    <div>
      <form #formRef="ngForm">
        <input type="text"
          [(ngModel)]="username"
          #usernameRef="ngModel"
          required
          minlength="3"
          />
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
        <input type="password"
          [(ngModel)]="password"
          #passwordRef="ngModel"
          required
          />
          <div *ngIf="passwordRef.errors?.required">this is required</div>
        <button (click)="onClick()">Login</button>
      </form>
    </div>
```
这时运行后会发现原本好用的代码出错了，这是由于如果在一个大的表单中，ngModel会注册成Form的一个子控件，注册子控件需要一个name，这要求我们显式的指定对应控件的name，因此我们需要为`input`增加name属性
```html
    <div>
      <form #formRef="ngForm">
        <input type="text"
          name="username"
          [(ngModel)]="username"
          #usernameRef="ngModel"
          required
          minlength="3"
          />
          <div *ngIf="usernameRef.errors?.required">this is required</div>
          <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
        <input type="password"
          name="password"
          [(ngModel)]="password"
          #passwordRef="ngModel"
          required
          />
          <div *ngIf="passwordRef.errors?.required">this is required</div>
        <button (click)="onClick()">Login</button>
        <button type="submit">Submit</button>
      </form>
    </div>
```

既然我们增加了一个`formRef`，我们就看看`formRef.value`有什么吧。
首先为form增加一个表单提交事件的处理
`<form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">`。
然后在组件中增加一个`onSubmit`方法
```javascript
  onSubmit(formValue) {
    console.log(formValue);
  }
```
你会发现`formRef.value`中包括了表单所有填写项的值。
![c2_s2_form_validation_form_submit.png-27.7kB][27]
有时候在表单项过多时我们需要对表单项进行分组，HTML中提供了`fieldset`标签用来处理。那么我们看看怎么和Angular2结合吧：
```html
    <div>
      <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
        <fieldset ngModelGroup="login">
          <input type="text"
            name="username"
            [(ngModel)]="username"
            #usernameRef="ngModel"
            required
            minlength="3"
            />
            <div *ngIf="usernameRef.errors?.required">this is required</div>
            <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
          <input type="password"
            name="password"
            [(ngModel)]="password"
            #passwordRef="ngModel"
            required
            />
            <div *ngIf="passwordRef.errors?.required">this is required</div>
          <button (click)="onClick()">Login</button>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
```
`<fieldset ngModelGroup="login">`意味着我们对于fieldset之内的数据都分组到了`login`对象中。
![c2_s2_form_validation_fieldset.png-43.5kB][28]
接下来我们改写onSubmit方法用来替代onClick，因为看起来这两个按钮重复了，我们需要去掉onClick。首先去掉template中的`<button (click)="onClick()">Login</button>`，然后把`<button type="submit">`标签后的`Submit`文本替换成`Login`，最后改写onSubmit方法。
```javascript
  onSubmit(formValue) {
    console.log('auth result is: '
      + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }
```
在浏览器中试验一下吧，所有功能正常工作。
## 验证结果的样式自定义
如果我们在开发工具中查看网页源码，可以看到
![c2_s2_form_validation_form_styling.png-92.5kB][29]
用户名控件的HTML代码是下面的样子：在验证结果为false时input的样式是`ng-invalid`
```html
<input 
    name="username" 
    class="ng-pristine ng-invalid ng-touched" 
    required="" 
    type="text" 
    minlength="3" 
    ng-reflect-minlength="3" 
    ng-reflect-name="username">
```
类似的可以实验一下，填入一些字符满足验证要求之后，看input的HTML是下面的样子：在验证结果为true时input的样式是`ng-valid`
```html
<input 
    name="username" 
    class="ng-touched ng-dirty ng-valid" 
    required="" 
    type="text" 
    ng-reflect-model="ssdsds" 
    minlength="3" 
    ng-reflect-minlength="3" 
    ng-reflect-name="username">
```
知道这个后，我们可以自定义不同验证状态下的控件样式。在组件的修饰符中把styles数组改写一下：
```javascript
  styles: [`
    .ng-invalid{
      border: 3px solid red;
    }
    .ng-valid{
      border: 3px solid green;
    }
  `]
```
保存一下，返回浏览器可以看到，验证不通过时
![c2_s2_form_validation_style_fail.png-8.9kB][30]
验证通过时是这样的：
![c2_s2_form_validation_style_pass.png-4.6kB][31]

最后说一下，我们看到这样设置完样式后连form和fieldset都一起设置了，这是由于form和fieldset也在样式中应用了`.ng-valid`和`.ng-valid`，那怎么解决呢？只需要在`.ng-valid`加上`input`即可，它表明的是应用于input类型控件并且class引用了ng-invalid的元素。
```javascript
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]
```
很多开发人员不太了解CSS，其实CSS还是比较简单的，我建议先从Selector开始看，Selector的概念弄懂后Angular2的开发CSS就会顺畅很多。具体可见[W3School中对于CSS Selctor的参考][32]和https://css-tricks.com/multiple-class-id-selectors/。

本节代码： https://github.com/wpcfan/awesome-tutorials/tree/chap02/angular2/ng2-tut

## 进一步的练习

练习1：如果我们想给username和password输入框设置默认值。比如“请输入用户名”和“请输入密码”，自己动手试一下吧。
练习2：如果我们想在输入框聚焦时把默认文字清除掉，该怎么做？
练习3：如果我们想把默认文字颜色设置成浅灰色该怎么做？

# 第三节：建立一个待办事项应用

这一章我们会建立一个更复杂的待办事项应用，当然我们的登录功能也还保留，这样的话我们的应用就有了多个相对独立的功能模块。以往的web应用根据不同的功能跳转到不同的功能页面。但目前前端的趋势是开发一个SPA（Single Page Application 单页应用），所以其实我们应该把这种跳转叫视图切换：根据不同的路径显示不同的组件。那我们怎么处理这种视图切换呢？幸运的是，我们无需寻找第三方组件，Angular官方内建了自己的路由模块。

## 建立routing的步骤

由于我们要以路由形式显示组件，建立路由前，让我们先把`src\app\app.component.html`中的`<app-login></app-login>`删掉。

- 第一步：在`src/index.html`中指定基准路径，即在`<header>`中加入`<base href="/">`，这个是指向你的`index.html`所在的路径，浏览器也会根据这个路径下载css，图像和js文件，所以请将这个语句放在header的最顶端。
- 第二步：在`src/app/app.module.ts`中引入RouterModule：`import { RouterModule }   from '@angular/router';`
- 第三步：定义和配置路由数组，我们暂时只为login来定义路由，仍然在`src/app/app.module.ts`中的imports中
```javascript
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
```
注意到这个形式和其他的比如BrowserModule、FormModule和HTTPModule表现形式好像不太一样，这里解释一下，forRoot其实是一个静态的工厂方法，它返回的仍然是Module，下面的是Angular API文档给出的`RouterModule.forRoot`的定义。
```
forRoot(routes: Routes, config?: ExtraOptions) : ModuleWithProviders
```
为什么叫forRoot呢？因为这个路由定义是应用在应用根部的，你可能猜到了还有一个工厂方法叫forChild，后面我们会详细讲。接下来我们看一下forRoot接收的参数，参数看起来是一个数组，每个数组元素是一个`{path: 'xxx', component: XXXComponent}`这个样子的对象。这个数组就叫做路由定义（RouteConfig）数组，每个数组元素就叫路由定义，目前我们只有一个路由定义。路由定义这个对象包括若干属性：

 - path：路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /login 。 
 - component：导航到此路由时，路由器需要创建的组件，如 `LoginComponent` 。
 - redirectTo：重定向到某个path，使用场景的话，比如在用户输入不存在的路径时重定向到首页。
 - pathMatch：路径的字符匹配策略
 - children：子路由数组
运行一下，我们会发现出错了
![image_1b0hgdsiu87n1lha1kcahl51ckb9.png-233.2kB][33]
 这个错误看上去应该是对于''没有找到匹配的route，这是由于我们只定义了一个'login'，我们再试试在浏览器地址栏输入：`http://localhost:4200/login`。这次仍然出错，但错误信息变成了下面的样子，意思是我们没有找到一个outlet去加载LoginComponent。对的，这就引出了router outlet的概念，如果要显示对应路由的组件，我们需要一个插头（outlet）来装载组件。
```
error_handler.js:48EXCEPTION: Uncaught (in promise): Error: Cannot find primary outlet to load 'LoginComponent'
Error: Cannot find primary outlet to load 'LoginComponent'
    at getOutlet (http://localhost:4200/main.bundle.js:66161:19)
    at ActivateRoutes.activateRoutes (http://localhost:4200/main.bundle.js:66088:30)
    at http://localhost:4200/main.bundle.js:66052:19
    at Array.forEach (native)
    at ActivateRoutes.activateChildRoutes (http://localhost:4200/main.bundle.js:66051:29)
    at ActivateRoutes.activate (http://localhost:4200/main.bundle.js:66046:14)
    at http://localhost:4200/main.bundle.js:65787:56
    at SafeSubscriber._next (http://localhost:4200/main.bundle.js:9000:21)
    at SafeSubscriber.__tryOrSetError (http://localhost:4200/main.bundle.js:42013:16)
    at SafeSubscriber.next (http://localhost:4200/main.bundle.js:41955:27)
```
下面我们把`<router-outlet></router-outlet>`写在`src\app\app.component.html`的末尾，地址栏输入`http://localhost:4200/login`重新看看浏览器中的效果吧，我们的应用应该正常显示了。但如果输入`http://localhost:4200`时仍然是有异常出现的，我们需要添加一个路由定义来处理。输入`http://localhost:4200`时相对于根路径的path应该是空，即''。而我们这时希望将用户仍然引导到登录页面，这就是`redirectTo: 'login'`的作用。`pathMatch: 'full'`的意思是必须完全符合路径的要求，也就是说`http://localhost:4200/1`是不会匹配到这个规则的，必须严格是`http://localhost:4200`
```javascript
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
```
注意路径配置的**顺序**是非常重要的，Angular2使用“先匹配优先”的原则，也就是说如果一个路径可以同时匹配几个路径配置的规则的话，以第一个匹配的规则为准。

但是现在还有一点小不爽，就是直接在`app.modules.ts`中定义路径并不是很好的方式，因为随着路径定义的复杂，这部分最好还是用单独的文件来定义。现在我们新建一个文件`src\app\app.routes.ts`，将上面在`app.modules.ts`中定义的路径删除并在`app.routes.ts`中重新定义。
```javascript
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(routes);
```
接下来我们在`app.modules.ts`中引入routing，`import { routing } from './app.routes';`，然后在imports数组里添加routing，现在我们的`app.modules.ts`看起来是下面这个样子。
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: 'auth',  useClass: AuthService}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## 让待办事项变得有意义
现在我们来规划一下根路径''，对应根路径我们想建立一个todo组件，那么我们使用`ng g c todo`来生成组件，然后在`app.routes.ts`中加入路由定义，对于根路径我们不再需要重定向到登录了，我们把它改写成重定向到todo。
```javascript
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
```
在浏览器中键入`http://localhost:4200`可以看到自动跳转到了todo路径，并且我们的todo组件也显示出来了。
![image_1b0k2ba0d1qqraa51mj51hpdpeo9.png-81kB][34]

我们希望的Todo页面应该有一个输入待办事项的输入框和一个显示待办事项状态的列表。那么我们先来定义一下todo的结构，todo应该有一个id用来唯一标识，还应该有一个desc用来描述这个todo是干什么的，再有一个completed用来标识是否已经完成。好了，我们来建立这个todo模型吧，在todo文件夹下新建一个文件`todo.model.ts`
```javascript
export class Todo {
  id: number;
  desc: string;
  completed: boolean;
}
```
然后我们应该改造一下todo组件了，引入刚刚建立好的todo对象，并且建立一个todos数组作为所有todo的集合，一个desc是当前添加的新的todo的内容。当然我们还需要一个addTodo方法把新的todo加到todos数组中。这里我们暂且写一个漏洞百出的版本。
```javascript
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';
  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    this.todos.push({id: 1, desc: this.desc, completed: false});
    this.desc = '';
  }
}
```
然后我们改造一下`src\app\todo\todo.component.html`
```html
<div>
  <input type="text" [(ngModel)]="desc" (keyup.enter)="addTodo()">
  <ul>
    <li *ngFor="let todo of todos">{{ todo.desc }}</li>
  </ul>
</div>
```
如上面代码所示，我们建立了一个文本输入框，这个输入框的值应该是新todo的描述（desc），我们想在用户按了回车键后进行添加操作（`(keyup.enter)="addTodo()`）。由于todos是个数组，所以我们利用一个循环将数组内容显示出来（`<li *ngFor="let todo of todos">{{ todo.desc }}</li>`）。好了让我们欣赏一下成果吧
![image_1b0kgg9mnppf16pkip81b2hhbrm.png-90.1kB][35]

如果我们还记得之前提到的业务逻辑应该放在单独的service中，我们还可以做的更好一些。在todo文件夹内建立TodoService：`ng g s todo\todo`。上面的例子中所有创建的todo都是id为1的，这显然是一个大bug，我们看一下怎么处理。常见的不重复id创建方式有两种，一个是搞一个自增长数列，另一个是采用随机生成一组不可能重复的字符序列，常见的就是UUID了。我们来引入一个uuid的包：`npm i --save angular2-uuid`，由于这个包中已经含有了用于typescript的定义文件，这里就执行这一个命令就足够了。
然后修改service成下面的样子：
```javascript
import { Injectable } from '@angular/core';
import {Todo} from './todo.model';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {

  todos: Todo[] = [];

  constructor() { }

  addTodo(todoItem:string): Todo[] {
    let todo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false
    };
    this.todos.push(todo);
    return this.todos;
  }
}
```
当然我们还要把组件中的代码改成使用service的
```javascript
import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';
  constructor(private service:TodoService) { }

  ngOnInit() {
  }

  addTodo(){
    this.todos = this.service.addTodo(this.desc);
    this.desc = '';
  }
}
```
为了可以清晰的看到我们的成果，我们为chrome浏览器装一个插件，在chrome的地址栏中输入`chrome://extensions`，拉到最底部会看到一个“获取更多扩展程序”的链接，点击这个链接然后搜索“Angury”，安装即可。安装好后，按F12调出开发者工具，里面出现一个叫“Angury”的tab。
![image_1b0kr7gpn17td7v1p4s1qucuu313.png-273.8kB][36]
我们可以看到id这时候被设置成了一串字符，这个就是UUID了。

## 建立模拟web服务和异步操作
实际的开发中我们的service是要和服务器api进行交互的，而不是现在这样简单的操作数组。但问题来了，现在没有web服务啊，难道真要自己开发一个吗？答案是可以做个假的，假作真时真亦假。我们在开发过程中经常会遇到这类问题，等待后端同学的进度是很痛苦的。所以Angular内建提供了一个可以快速建立测试用web服务的方法：内存 (in-memory) 服务器。

一般来说，你需要知道自己对服务器的期望是什么，期待它返回什么样的数据，有了这个数据呢，我们就可以自己快速的建立一个内存服务器了。拿这个例子来看，我们可能需要一个这样的对象
```javascript
class Todo {
  id: string;
  desc: string;
  completed: boolean;
}
```
对应的JSON应该是这样的
```javascript
{
  "data": [
    {
      "id": "f823b191-7799-438d-8d78-fcb1e468fc78",
      "desc": "blablabla",
      "completed": false
    },
    {
      "id": "c316a3bf-b053-71f9-18a3-0073c7ee3b76",
      "desc": "tetssts",
      "completed": false
    },
    {
      "id": "dd65a7c0-e24f-6c66-862e-0999ea504ca0",
      "desc": "getting up",
      "completed": false
    }
  ]
}
```
现在我们在todo文件夹下创建一个`src\app\todo\todo.model.ts`
```javascript
export class Todo {
  id: string;
  desc: string;
  completed: boolean;
}
```
然后在同一文件夹下创建一个文件`src\app\todo\todo-data.ts`
```javascript
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo.model';

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [
      {id: "f823b191-7799-438d-8d78-fcb1e468fc78", desc: 'Getting up', completed: true},
      {id: "c316a3bf-b053-71f9-18a3-0073c7ee3b76", desc: 'Go to school', completed: false}
    ];
    return {todos};
  }
}
```
可以看到，我们创建了一个实现`InMemoryDbService`的内存数据库，这个数据库其实也就是把数组传入进去。接下来我们要更改`src\app\app.module.ts`，加入类引用和对应的模块声明：
```javascript
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';
```
然后在imports数组中紧挨着`HttpModule`加上`InMemoryWebApiModule.forRoot(InMemoryTodoDbService),`。

现在我们在service中试着调用我们的“假web服务”吧
```javascript
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  //定义你的假WebAPI地址，这个定义成什么都无所谓
  //只要确保是无法访问的地址就好
  private api_url = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // POST /todos
  addTodo(desc:string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Todo)
            .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
```
上面的代码我们看到定义了一个`api_url = 'api/todos'`，你可能会问这个是怎么来的？其实这个我们改写成`api_url = 'blablabla/nahnahnah'`也无所谓，因为这个内存web服务的机理是拦截web访问，也就是说随便什么地址都可以，内存web服务会拦截这个地址并解析你的请求是否满足RESTful API的要求。

简单来说RESTful API中GET请求用于查询，PUT用于更新，DELETE用于删除，POST用于添加。比如如果url是api/todos，那么

 - 查询所有待办事项：以GET方法访问`api/todos`
 - 查询单个待办事项：以GET方法访问`api/todos/id`，比如id是1，那么访问`api/todos/1`
 - 更新某个待办事项：以PUT方法访问`api/todos/id`
 - 删除某个待办事项：以DELETE方法访问`api/todos/id`
 - 增加一个待办事项：以POST方法访问`api/todos`

在service的构造函数中我们注入了Http，而angular的Http封装了大部分我们需要的方法，比如例子中的增加一个todo，我们就调用`this.http.post(url, body, options)`，上面代码中的`.post(this.api_url, JSON.stringify(todo), {headers: this.headers})`含义是：构造一个POST类型的HTTP请求，其访问的url是`this.api_url`，request的body是一个JSON（把todo对象转换成JSON），在参数配置中我们配置了request的header。

这个请求发出后返回的是一个Observable（可观察对象），我们把它转换成Promise然后处理res（Http Response）。Promise提供异步的处理，注意到then中的写法，这个和我们传统编程写法不大一样，叫做lamda表达式，相当于是一个匿名函数，`(input parameters) => expression`，`=>`前面的是函数的参数，后面的是函数体。

还要一点需要强调的是：在用内存Web服务时，一定要注意`res.json().data`中的data属性必须要有，因为内存web服务坑爹的在返回的json中加了data对象，你真正要得到的json是在这个data里面。

下一步我们来更改Todo组件的addTodo方法以便可以使用我们新的异步http方法
```javascript
  addTodo(){
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      });
  }
```
这里面的前半部分应该还是好理解的：`this.service.addTodo(this.desc)`是调用service的对应方法而已，但后半部分是什么鬼？`...`这个貌似省略号的东东是ES7中计划提供的Object Spread操作符，它的功能是将对象或数组“打散，拍平”。这么说可能还是不懂，举例子吧：
```javascript
let arr = [1,2,3];
let arr2 = [...arr]; 
arr2.push(4); 

// arr2 变成了 [1,2,3,4]
// arr 保存原来的样子

let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
arr3.push(...arr4);
// arr3变成了[0, 1, 2, 3, 4, 5]

let arr5 = [0, 1, 2];
let arr6 = [-1, ...arr5, 3];
// arr6 变成了[-1, 0, 1, 2, 3]
```
所以呢我们上面的`this.todos = [...this.todos, todo];`相当于为todos增加一个新元素，和push很像，那为什么不用push呢？因为这样构造出来的对象是全新的，而不是引用的，在现代编程中一个明显的趋势是不要在过程中改变输入的参数。第二个原因是这样做会带给我们极大的便利性和编程的一致性。下面通过给我们的例子添加几个功能，我们来一起体会一下。
首先更改`src\app\todo\todo.service.ts`
```javascript
//src\app\todo\todo.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  private api_url = 'api/todos';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  // POST /todos
  addTodo(desc:string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Todo)
            .catch(this.handleError);
  }
  // PUT /todos/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
            .put(url, JSON.stringify(updatedTodo), {headers: this.headers})
            .toPromise()
            .then(() => updatedTodo)
            .catch(this.handleError);
  }
  // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
  }
  // GET /todos
  getTodos(): Promise<Todo[]>{
    return this.http.get(this.api_url)
              .toPromise()
              .then(res => res.json().data as Todo[])
              .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
}
```
然后更新`src\app\todo\todo.component.ts`
```javascript
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todos : Todo[];
  desc = '';

  constructor(private service: TodoService) {}
  ngOnInit() {
    this.getTodos();
  }
  addTodo(){
    this.service
      .addTodo(this.desc)
      .then(todo => {
        this.todos = [...this.todos, todo];
        this.desc = '';
      });
  }
  toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
          ];
      });
  }
  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
      });
  }
  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }
}
```
更新模板文件`src\app\todo\todo.component.html`
```html
<section class="todoapp">
  <header class="header">
    <h1>Todos</h1>
    <input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="desc" (keyup.enter)="addTodo()">
  </header>
  <section class="main" *ngIf="todos?.length > 0">
    <input class="toggle-all" type="checkbox">
    <ul class="todo-list">
      <li *ngFor="let todo of todos" [class.completed]="todo.completed">
        <div class="view">
          <input class="toggle" type="checkbox" (click)="toggleTodo(todo)" [checked]="todo.completed">
          <label (click)="toggleTodo(todo)">{{todo.desc}}</label>
          <button class="destroy" (click)="removeTodo(todo); $event.stopPropagation()"></button>
        </div>
      </li>
    </ul>
  </section>
  <footer class="footer" *ngIf="todos?.length > 0">
    <span class="todo-count">
      <strong>{{todos?.length}}</strong> {{todos?.length == 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
      <li><a href="">All</a></li>
      <li><a href="">Active</a></li>
      <li><a href="">Completed</a></li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
</section
```
更新组件的css样式:`src\app\todo\todo.component.css`
```css
.todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
.todoapp input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
.todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
.todoapp h1 {
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
}
.new-todo,
.edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}
label[for='toggle-all'] {
    display: none;
}
.toggle-all {
    position: absolute;
    top: -55px;
    left: -12px;
    width: 60px;
    height: 34px;
    text-align: center;
    border: none; /* Mobile Safari */
}
.toggle-all:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}
.toggle-all:checked:before {
    color: #737373;
}
.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}
.todo-list li:last-child {
    border-bottom: none;
}
.todo-list li.editing {
    border-bottom: none;
    padding: 0;
}
.todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
}
.todo-list li.editing .view {
    display: none;
}
.todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}
.todo-list li .toggle:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}
.todo-list li .toggle:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}
.todo-list li label {
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}
.todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}
.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}
.todo-list li .destroy:hover {
    color: #af5b5e;
}
.todo-list li .destroy:after {
    content: '×';
}
.todo-list li:hover .destroy {
    display: block;
}
.todo-list li .edit {
    display: none;
}
.todo-list li.editing:last-child {
    margin-bottom: -1px;
}
.footer {
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
}
.footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.todo-count {
    float: left;
    text-align: left;
}
.todo-count strong {
    font-weight: 300;
}
.filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
}
.filters li {
    display: inline;
}
.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}
.filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
}
.filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}
.clear-completed,
html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
}
.clear-completed:hover {
    text-decoration: underline;
}
/*
    Hack to remove background from Mobile Safari.
    Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    .toggle-all,
    .todo-list li .toggle {
        background: none;
    }
    .todo-list li .toggle {
        height: 40px;
    }
    .toggle-all {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-appearance: none;
        appearance: none;
    }
}
@media (max-width: 430px) {
    .footer {
        height: 50px;
    }
    .filters {
        bottom: 10px;
    }
}
```
更新`src\styles.css`为如下
```css
/* You can add global styles to this file, and also import other style files */
html, body {
    margin: 0;
    padding: 0;
}
button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
}
:focus {
    outline: 0;
}
.hidden {
    display: none;
}
.info {
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
}
.info p {
    line-height: 1;
}
.info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
}
.info a:hover {
    text-decoration: underline;
}
```
现在我们看看成果吧，现在好看多了
![image_1b11jlmes1nithths9q1n8ijqg9.png-78.9kB][37]

# 第四节：进化！模块化你的应用
## 一个复杂组件的分拆
上一节的末尾我偷懒的甩出了大量代码，可能你看起来都有点晕了，这就是典型的一个功能经过一段时间的需求累积后，代码也不可避免的臃肿起来。现在我们看看怎么分拆一下吧。
![image_1b11kjibcelb6upnb21su41dilm.png-59.5kB][38]
我们的应用似乎可以分为Header，Main和Footer几部分。首先我们来建立一个新的Component，键入`ng g c todo/todo-footer`。然后将`src\app\todo\todo.component.html`中的`<footer>...</footer>`段落剪切到`src\app\todo\todo-footer\todo-footer.component.html`中。
```html
  <footer class="footer" *ngIf="todos?.length > 0">
    <span class="todo-count">
      <strong>{{todos?.length}}</strong> {{todos?.length == 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
      <li><a href="">All</a></li>
      <li><a href="">Active</a></li>
      <li><a href="">Completed</a></li>
    </ul>
    <button class="clear-completed">Clear completed</button>
  </footer>
```
观察上面的代码，我们看到似乎所有的变量都是`todos?.length`，这提醒我们其实对于Footer来说，我们并不需要传入todos，而只需要给出一个item计数即可。那么我们来把所有的`todos?.length`改成`itemCount`。
```html
<footer class="footer" *ngIf="itemCount > 0">
  <span class="todo-count">
    <strong>{{itemCount}}</strong> {{itemCount == 1 ? 'item' : 'items'}} left
  </span>
  <ul class="filters">
    <li><a href="">All</a></li>
    <li><a href="">Active</a></li>
    <li><a href="">Completed</a></li>
  </ul>
  <button class="clear-completed">Clear completed</button>
</footer>
```
这样的话也就是说如果在`src\app\todo\todo.component.html`中我们可以用`<app-todo-footer [itemCount]="todos?.length"></app-todo-footer>`去传递todo项目计数给Footer即可。所以在`src\app\todo\todo.component.html`中刚才我们剪切掉代码的位置加上这句吧。当然，如果要让父组件可以传递值给子组件，我们还需要在子组件中声明一下。`@Input()`是输入型绑定的修饰符，用于把数据从父组件传到子组件。
```javascript
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  //声明itemCount是可以一个可输入值（从引用者处）
  @Input() itemCount: number;
  constructor() { }
  ngOnInit() {
  }
}
```

运行一下看看效果，应该一切正常！

类似的我们建立一个Header组件，键入`ng g c todo/todo-header`，同样的把下面的代码从`src\app\todo\todo.component.html`中剪切到`src\app\todo\todo-header\todo-header.component.html`中
```html
<header class="header">
  <h1>Todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="desc" (keyup.enter)="addTodo()">
</header>
```
这段代码看起来有点麻烦，主要原因是我们好像不但需要给子组件输入什么，而且希望子组件给父组件要输出一些东西，比如输入框的值和按下回车键的消息等。当然你可能猜到了，Angular2里面有`@Input()`就相应的有`@Output()`修饰符。
我们希望输入框的占位文字（没有输入的情况下显示的默认文字）是一个输入型的参数，在回车键抬起时可以发射一个事件给父组件，同时我们也希望在输入框输入文字时父组件能够得到这个字符串。也就是说父组件调用子组件时看起来是下面的样子，相当于我们自定义的组件中提供一些事件，父组件调用时可以写自己的事件处理方法，而$event就是子组件发射的事件对象：
```html
<app-todo-header 
    placeholder="What do you want"
    (onTextChanges)="onTextChanges($event)"
    (onEnterUp)="addTodo()" >
</app-todo-header>
```
但是第三个需求也就是“在输入框输入文字时父组件能够得到这个字符串”，这个有点问题，如果每输入一个字符都要回传给父组件的话，系统会过于频繁进行这种通信，有可能会有性能的问题。那么我们希望可以有一个类似滤波器的东东，它可以过滤掉一定时间内的事件。因此我们定义一个输入型参数delay。
```html
<app-todo-header 
    placeholder="What do you want"
    delay="400"
    (textChanges)="onTextChanges($event)"
    (onEnterUp)="addTodo()" >
</app-todo-header>
```
现在的标签引用应该是上面这个样子，但我们只是策划了它看起来是什么样子，还没有做呢。我们一起动手看看怎么做吧。
`todo-header.component.html`的模板中我们调整了一些变量名和参数以便让大家不混淆子组件自己的模板和父组件中引用子组件的模板片段。
```html
//todo-header.component.html
<header class="header">
  <h1>Todos</h1>
  <input
    class="new-todo"
    [placeholder]="placeholder"
    autofocus=""
    [(ngModel)]="inputValue"
    (keyup.enter)="enterUp()">
</header>
```
记住子组件的模板是描述子组件自己长成什么样子，应该有哪些行为，这些东西和父组件没有任何关系。比如`todo-header.component.html`中的`placeholder`就是HTML标签Input中的一个属性，和父组件没有关联，如果我们不在`todo-header.component.ts`中声明`@Input() placeholder`，那么子组件就没有这个属性，在父组件中也无法设置这个属性。父组件中的声明为`@Input()`的属性才会成为子组件对外可见的属性，我们完全可以把`@Input() placeholder`声明为`@Input() hintText`，这样的话在引用header组件时，我们就需要这样写`<app-todo-header hintText="What do you want" ...`
现在看一下`todo-header.component.ts`
```javascript
import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {
  inputValue: string = '';
  @Input() placeholder: string = 'What needs to be done?';
  @Input() delay: number = 300;

  //detect the input value and output this to parent
  @Output() textChanges = new EventEmitter<string>();
  //detect the enter keyup event and output this to parent
  @Output() onEnterUp = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));
  }
  ngOnInit() {
  }
  enterUp(){
    this.onEnterUp.emit(true);
    this.inputValue = '';
  }
}
```
下面我们来分析一下代码：
placeholder和delay作为2个输入型变量，这样`<app-todo-header>`标签中就可以设置这两个属性了。
接下来我们看到了由`@Output`修饰的onTextChanges和onEnterUp，这两个顾名思义是分别处理文本变化和回车键抬起事件的，这两个变量呢都定义成了EventEmitter（事件发射器）。我们会在子组件的逻辑代码中以适当的条件去发射对应事件，而父组件会接收到这些事件。我们这里采用了2中方法来触发发射器

 - enterUp：这个是比较常规的方法，在`todo-header.component.html`中我们定义了`(keyup.enter)="enterUp()"`，所以在组件的enterUp方法中，我们直接让onEnterUp发射了对应事件。
 - 构造器中使用Rx：这里涉及了很多新知识，首先我们注入了ElementRef，这个是一个Angular中需要谨慎使用的对象，因为它可以让你直接操作DOM，也就是HTML的元素和事件。同时我们使用了Rx（响应式对象），Rx是一个很复杂的话题，这里我们不展开了，但我们主要是利用Observable去观察HTML中的keyup事件，然后在这个事件流中做一个转换把输入框的值发射出来（map），应用一个时间的滤波器（debounceTime），然后应用一个筛选器（distinctUntilChanged）。这里由于这个事件的发射条件是依赖于输入时的当时条件，我们没有办法按前面的以模板事件触发做处理。

最后由于组件分拆后，我们希望也分拆一下css，这里就直接给代码了
`todo-header.component.css`的样式如下：
```css
h1 {
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
}
input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
}
.new-todo,
.edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
```
`todo-footer.component.css`的样式如下
```css
.footer {
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
}
.footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.todo-count {
    float: left;
    text-align: left;
}
.todo-count strong {
    font-weight: 300;
}
.filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
}
.filters li {
    display: inline;
}
.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}
.filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
}
.filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}
.clear-completed,
html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
}
.clear-completed:hover {
    text-decoration: underline;
}
@media (max-width: 430px) {
    .footer {
        height: 50px;
    }
    .filters {
        bottom: 10px;
    }
}
```
当然上述代码要从`todo.component.css`中删除，现在的`todo.component.css`看起来是这个样子
```css
.todoapp {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}
.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}
.todo-list li:last-child {
    border-bottom: none;
}
.todo-list li.editing {
    border-bottom: none;
    padding: 0;
}
.todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
}
.todo-list li.editing .view {
    display: none;
}
.todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
}
.todo-list li .toggle:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}
.todo-list li .toggle:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}
.todo-list li label {
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}
.todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
}
.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}
.todo-list li .destroy:hover {
    color: #af5b5e;
}
.todo-list li .destroy:after {
    content: '×';
}
.todo-list li:hover .destroy {
    display: block;
}
.todo-list li .edit {
    display: none;
}
.todo-list li.editing:last-child {
    margin-bottom: -1px;
}
label[for='toggle-all'] {
    display: none;
}
.toggle-all {
    position: absolute;
    top: -55px;
    left: -12px;
    width: 60px;
    height: 34px;
    text-align: center;
    border: none; /* Mobile Safari */
}
.toggle-all:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}
.toggle-all:checked:before {
    color: #737373;
}
/*
    Hack to remove background from Mobile Safari.
    Can't use it globally since it destroys checkboxes in Firefox
*/
@media screen and (-webkit-min-device-pixel-ratio:0) {
    .toggle-all,
    .todo-list li .toggle {
        background: none;
    }
    .todo-list li .toggle {
        height: 40px;
    }
    .toggle-all {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-appearance: none;
        appearance: none;
    }
}
```
## 封装成独立模块
现在我们的todo目录下好多文件了，而且我们观察到这个功能相对很独立。这种情况下我们似乎没有必要将所有的组件都声明在根模块AppModule当中，因为类似像子组件没有被其他地方用到。Angular中提供了一种组织方式，那就是模块。模块和根模块很类似，我们先在todo目录下建一个文件`src\app\todo\todo.module.ts`
```javascript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing} from './todo.routes'

import { TodoComponent } from './todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
    ]
})
export class TodoModule {}
```
注意一点，我们没有引入BrowserModule，而是引入了CommonModule。导入 BrowserModule 会让该模块公开的所有组件、指令和管道在 AppModule 下的任何组件模板中直接可用，而不需要额外的繁琐步骤。CommonModule 提供了很多应用程序中常用的指令，包括 NgIf 和 NgFor 等。BrowserModule 导入了 CommonModule 并且 重新导出 了它。 最终的效果是：只要导入 BrowserModule 就自动获得了 CommonModule 中的指令。几乎所有要在浏览器中使用的应用的 **根模块** （ AppModule ）都应该从 @angular/platform-browser 中导入 BrowserModule 。在其它任何模块中都 **不要导入** BrowserModule，应该改成导入 CommonModule 。 它们需要通用的指令。它们不需要重新初始化全应用级的提供商。
由于和根模块很类似，我们就不展开讲了。需要做的事情是把`TodoComponent`中的`TodoService`改成用`@Inject('todoService')`来注入。但是注意一点，我们需要模块自己的路由定义。我们在todo目录下建立一个`todo.routes.ts`的文件，和根目录下的类似。
```javascript
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
];
export const routing = RouterModule.forChild(routes);
```
这里我们只定义了一个路由就是“todo”，另外一点和根路由不一样的是`export const routing = RouterModule.forChild(routes);`，我们用的是`forChild`而不是`forRoot`，因为`forRoot`只能用于根目录，所有非根模块的其他模块路由都只能用`forChild`。下面就得更改根路由了，`src\app\app.routes.ts`看起来是这个样子：
```javascript
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todo',
    redirectTo: 'todo'
  }
];
export const routing = RouterModule.forRoot(routes);
```
注意到我们去掉了TodoComponent的依赖，而且更改todo路径定义为redirecTo到todo路径，但没有给出组件，这叫做“无组件路由”，也就是说后面的事情是TodoModule负责的。

## 更真实的web服务
这里我们不想再使用内存Web服务了，因为如果使用，我们无法将其封装在TodoModule中。所以我们使用一个更“真”的web服务：json-server。使用`npm install -g json-server`安装json-server。然后在todo目录下建立`todo-data.json`
```javascript
{
  "todos": [
    {
      "id": "f823b191-7799-438d-8d78-fcb1e468fc78",
      "desc": "blablabla",
      "completed": false
    },
    {
      "id": "dd65a7c0-e24f-6c66-862e-0999ea504ca0",
      "desc": "getting up",
      "completed": false
    },
    {
      "id": "c1092224-4064-b921-77a9-3fc091fbbd87",
      "desc": "you wanna try",
      "completed": false
    },
    {
      "id": "e89d582b-1a90-a0f1-be07-623ddb29d55e",
      "desc": "have to say good",
      "completed": false
    }
  ]
}
```
在`src\app\todo\todo.service.ts`中更改
```javascript
// private api_url = 'api/todos';
  private api_url = 'http://localhost:3000/todos';
```
并将addTodo和getTodos中then语句中的 `res.json().data`替换成`res.json()`。
另外打开一个命令窗口，进入工程目录，输入`json-server ./src/app/todo/todo-data.json`

最后别忘了在根模块中引入TodoModule和清理你的根模块中现在不需要的类库引用。
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './core/auth.service';
import { routing } from './app.routes';
import { TodoModule } from './todo/todo.module';

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
    HttpModule,
    routing,
    TodoModule
  ],
  providers: [
    {provide: 'auth',  useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
欣赏一下成果吧
![image_1b12b5v4onlm16ai1bdn7pu143e9.png-165.7kB][39]
## 完善Todo应用
在结束本节前，我们得给Todo应用收个尾，还差一些功能没完成：

 - 从架构上来讲，我们似乎还可以进一步构建出TodoList和TodoItem两个组件
 - 全选并反转状态 
 - 底部筛选器：All，Active，Completed 
 - 清理已完成项目

### TodoItem和TodoList组件
在命令行窗口键入`ng g c todo/todo-item`，angular-cli会十分聪明的帮你在todo目录下建好TodoItem组件，并且在TodoModule中声明。一般来说，如果要生成某个模块下的组件，输入`ng g c 模块名称/组件名称`。 好的，类似的我们再建立一个TodoList控件，`ng g c todo/todo-list`。我们希望未来的`todo.component.html`是下面这个样子的
```html
//todo.component.html
<section class="todoapp">
  <app-todo-header
    placeholder="What do you want"
    (textChanges)="onTextChanges($event)"
    (onEnterUp)="addTodo()" >
  </app-todo-header>
  <app-todo-list
    [todos]="todos"
    (onRemoveTodo)="removeTodo($event)"
    (onToggleTodo)="toggleTodo($event)"
    >
  </app-todo-list>
  <app-todo-footer [itemCount]="todos?.length"></app-todo-footer>
</section>
```
那么TodoItem哪儿去了呢？TodoItem是TodoList的子组件，TodoItem的模板应该是todos循环内的一个todo的模板。TodoList的HTML模板看起来应该是下面的样子：
```html
<section class="main" *ngIf="todos?.length > 0">
  <input class="toggle-all" type="checkbox">
  <ul class="todo-list">
    <li *ngFor="let todo of todos" [class.completed]="todo.completed">
      <app-todo-item
        [isChecked]="todo.completed"
        (onToggleTriggered)="onToggleTriggered(todo)"
        (onRemoveTriggered)="onRemoveTriggered(todo)"
        [todoDesc]="todo.desc">
      </app-todo-item>
    </li>
  </ul>
</section>
```
那么我们先从最底层的TodoItem看，这个组件怎么剥离出来？首先来看`todo-item.component.html`
```html
<div class="view">
  <input class="toggle" type="checkbox" (click)="toggle()" [checked]="isChecked">
  <label [class.labelcompleted]="isChecked" (click)="toggle()">{{todoDesc}}</label>
  <button class="destroy" (click)="remove(); $event.stopPropagation()"></button>
</div>
```
我们需要确定有哪些输入型和输出型参数

 - isChecked：输入型参数，用来确定是否被选中，由父组件（TodoList）设置
 - todoDesc：输入型参数，显示Todo的文本描述，由父组件设置
 - onToggleTriggered：输出型参数，在用户点击checkbox或label时以事件形式通知父组件。在TodoItem中我们是在处理用户点击事件时在toggle方法中发射这个事件。
 - onRemoveTriggered：输出型参数，在用户点击删除按钮时以事件形式通知父组件。在TodoItem中我们是在处理用户点击按钮事件时在remove方法中发射这个事件。

```javascript
//todo-item.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{
  @Input() isChecked: boolean = false;
  @Input() todoDesc: string = '';
  @Output() onToggleTriggered = new EventEmitter<boolean>();
  @Output() onRemoveTriggered = new EventEmitter<boolean>();

  toggle() {
    this.onToggleTriggered.emit(true);
  }
  remove() {
    this.onRemoveTriggered.emit(true);
  }
}
```
建立好TodoItem后，我们再来看TodoList，还是从模板看一下
```html
<section class="main" *ngIf="todos?.length > 0">
  <input class="toggle-all" type="checkbox">
  <ul class="todo-list">
    <li *ngFor="let todo of todos" [class.completed]="todo.completed">
      <app-todo-item
        [isChecked]="todo.completed"
        (onToggleTriggered)="onToggleTriggered(todo)"
        (onRemoveTriggered)="onRemoveTriggered(todo)"
        [todoDesc]="todo.desc">
      </app-todo-item>
    </li>
  </ul>
</section>
```
TodoList需要一个输入型参数todos，由父组件（TodoComponent）指定，TodoList本身不需要知道这个数组是怎么来的，它和TodoItem只是负责显示而已。当然我们由于在TodoList里面还有TodoITem子组件，而且TodoList本身不会处理这个输出型参数，所以我们需要把子组件的输出型参数再传递给TodoComponent进行处理。
```javascript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  _todos: Todo[] = [];
  @Input()
  set todos(todos:Todo[]){
    this._todos = [...todos];
  }
  get todos() {
    return this._todos;
  }
  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();

  onRemoveTriggered(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }
}
```
上面代码中有一个新东东，就是在`todos()`方法前我们看到有`set`和`get`两个访问修饰符。这个是由于我们如果把todos当成一个成员变量给出的话，在设置后如果父组件的todos数组改变了，子组件并不知道这个变化，从而不能更新子组件本身的内容。所以我们把todos做成了方法，而且通过get和set修饰成属性方法，也就是说从模板中引用的话可以写成`{{todos}}`。通过标记`set todos()`为`@Input`我们可以监视父组件的数据变化。

现在回过头来看一下`todo.component.html`，我们看到`(onRemoveTodo)="removeTodo($event)"`，这句是为了处理子组件（TodoList）的输出型参数（onRemoveTodo），而$event其实就是这个事件反射器携带的参数（这里是`todo:Todo`）。我们通过这种机制完成组件间的数据交换。
```html
//todo.component.html
<section class="todoapp">
  <app-todo-header
    placeholder="What do you want"
    (textChanges)="onTextChanges($event)"
    (onEnterUp)="addTodo()" >
  </app-todo-header>
  <app-todo-list
    [todos]="todos"
    (onRemoveTodo)="removeTodo($event)"
    (onToggleTodo)="toggleTodo($event)"
    >
  </app-todo-list>
  <app-todo-footer [itemCount]="todos?.length"></app-todo-footer>
</section>
```
讲到这里大家可能要问是不是过度设计了，这么少的功能用得着这么设计吗？是的，本案例属于过度设计，但我们的目的是展示出更多的Angular实战方法和特性。

## 填坑，完成漏掉的功能
现在我们还差几个功能：全部反转状态（ToggleAll），清除全部已完成任务（Clear Completed）和状态筛选器。我们的设计方针是逻辑功能放在TodoComponent中，而其他子组件只负责表现。这样的话，我们先来看看逻辑上应该怎么完成。

### 用路由参数传递数据
首先看一下过滤器，在Footer中我们有三个过滤器：All，Active和Completed，点击任何一个过滤器，我们只想显示过滤后的数据。

![image_1b17mtibdkjn105l1ojl1dgr9il9.png-6.5kB][40]

这个功能其实有几种可以实现的方式，第一种我们可以按照之前讲过的组件间传递数据的方式设置一个`@Output`的事件发射器来实现。但本节中我们采用另一种方式，通过路由传递参数来实现。Angular2可以给路由添加参数，最简单的一种方式是比如/todo是我们的TodoComponent处理的路径，如果希望携带一个filter参数的话，可以在路由定义中写成
```javascript
  {
    path: 'todo/:filter',
    component: TodoComponent
  }
```
这个`:filter`是一个参数表达式，也就是说例如`todo/ACTIVE`就意味着参数`filter='ACTIVE'`。看上去有点像子路由，但这里我们使用一个组件去处理不同路径的，所以`todo/`后面的数据就被当作路由参数来对待了。这样的话就比较简单了，我们在`todo-footer.component.html`中把几个过滤器指向的路径写一下，注意这里和需要使用Angular2特有的路由链接指令（routerLink）
```html
  <ul class="filters">
    <li><a routerLink="/todo/ALL">All</a></li>
    <li><a routerLink="/todo/ACTIVE">Active</a></li>
    <li><a routerLink="/todo/COMPLETED">Completed</a></li>
  </ul>
```
当然我们还需要在`todo.routes.ts`中增加路由参数到路由数组中
```javascript
  {
    path: 'todo/:filter',
    component: TodoComponent
  }
```
根路由定义也需要改写一下，因为原来todo不带参数时，我们直接重定向到todo模块即可，但现在有参数的话应该重定向到默认参数是“ALL”的路径；
```javascript
  {
    path: 'todo',
    redirectTo: 'todo/ALL'
  }
```
现在打开`todo.component.ts`看看怎么接收这个参数：
1. 引入路由对象 `import { Router, ActivatedRoute, Params } from '@angular/router';`
2. 在构造中注入`ActivatedRoute`和`Router`
```javascript
  constructor(
    @Inject('todoService') private service,
    private route: ActivatedRoute,
    private router: Router) {}
```
然后在`ngOnInit()`中添加下面的代码，一般的逻辑代码如果需要在`ngOnInit()`中调用。
```javascript
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'];
      this.filterTodos(filter);
    });
  }
```
从`this.route.params`返回的是一个Observable，里面包含着所以传递的参数，当然我们这个例子很简单只有一个，就是刚才定义的`filter`。当然我们需要在组件内添加对各种filter处理的方法：调用service中的处理方法后对todos数组进行操作。
```javascript
  filterTodos(filter: string): void{
    this.service
      .filterTodos(filter)
      .then(todos => this.todos = [...todos]);
  }
```
最后我们看看在`todo.service.ts`中我们如何实现这个方法

```javascript
  // GET /todos?completed=true/false
  filterTodos(filter: string): Promise<Todo[]> {
    switch(filter){
      case 'ACTIVE': return this.http
                        .get(`${this.api_url}?completed=false`)
                        .toPromise()
                        .then(res => res.json() as Todo[])
                        .catch(this.handleError);
      case 'COMPLETED': return this.http
                          .get(`${this.api_url}?completed=true`)
                          .toPromise()
                          .then(res => res.json() as Todo[])
                          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }
```
至此大功告成，我们来看看效果吧。现在输入`http://localhost:4200/todo`进入后观察浏览器地址栏，看到了吧，路径自动被修改成了`http://localhost:4200/todo/ALL`，我们的在跟路由中定义的重定向起作用了！
![image_1b17o06nv10ob13d6pb1f5613pnm.png-137.8kB][41]
现在，试着点击其中某个todo更改其完成状态，然后点击Active，我们看到不光路径变了，数据也按照我们期待的方式更新了。
![image_1b17o6qjlb31grg1o7edjm1q4l13.png-128kB][42]

### 批量修改和批量删除
ToggleAll和ClearCompleted的功能其实是一个批量修改和批量删除的过程。
在`todo-footer.component.html`中增加`Clear Completed`按钮的事件处理
```html
<button class="clear-completed" (click)="onClick()">Clear completed</button>
```
`Clear Completed`在Footer中，所以我们需要给Footer组件增加一个输出型参数`onClear`和`onClick()`事件处理方法
```javascript
//todo-footer.component.ts
...
  @Output() onClear = new EventEmitter<boolean>();
  onClick(){
    this.onClear.emit(true);
  }
...
```
类似的，ToggleAll位于TodoList中，所以在`todo-list.component.html`中为其增加点击事件
```html
<input class="toggle-all" type="checkbox" (click)="onToggleAllTriggered()">
```
在`todo-list.component.ts`中增加一个输出型参数onToggleAll和onToggleAllTriggered的方法
```javascript
  @Output() onToggleAll = new EventEmitter<boolean>();
  onToggleAllTriggered() {
    this.onToggleAll.emit(true);
  }
```
在父组件模板中添加子组件中刚刚声明的新属性，在`todo.component.html`中为app-todo-list和app-todo-footer添加属性：
```html
  ...
  <app-todo-list
    ...
    (onToggleAll)="toggleAll()"
    >
  </app-todo-list>
  <app-todo-footer
    ...
    (onClear)="clearCompleted()">
  </app-todo-footer>
  ...
```
最后在父组件（`todo.component.ts`）中添加对应的处理方法。最直觉的做法是循环数组，执行已有的`toggleTodo(todo: Todo)`和`removeTodo(todo: Todo)`。我们更改一下`todo.component.ts`，增加下面两个方法：
```javascript
  toggleAll(){
    this.todos.forEach(todo => this.toggleTodo(todo));
  }

  clearCompleted(){
    const todos = this.todos.filter(todo=> todo.completed===true);
    todos.forEach(todo => this.removeTodo(todo));
  }
```
先保存一下，点击一下输入框左边的下箭头图标或者右下角的“Clear Completed”，看看效果
![image_1b1c8if181tld15hlj531aasi8a9.png-140kB][43]
大功告成！慢着，等一下，哪里好像不太对。让我们回过头再看看`toggleAll`方法和`clearCompleted`方法。目前的实现方式有个明显问题，那就是现在的处理方式又变成同步的了（`this.todos.forEach()`是个同步方法），如果我们的处理逻辑比较复杂的话，现在的实现方式会导致UI没有响应。但是如果不这么做的话，对于一系列的异步操作我们怎么处理呢？`Promise.all(iterable)`就是应对这种情况的，它适合把一系列的Promise一起处理，直到所有的Promise都处理完（或者是异常时reject），之后也返回一个Promise，里面是所有的返回值。
```javascript
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});
```
但是还有个问题，我们目前的`toggleTodo(todo: Todo)`和`removeTodo(todo: Todo)`并不返回Promise，所以也需要小改造一下：
```javascript
//todo.component.ts片段
toggleTodo(todo: Todo): Promise<void> {
    const i = this.todos.indexOf(todo);
    return this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
          ];
        return null;
      });
  }
  removeTodo(todo: Todo): Promise<void>  {
    const i = this.todos.indexOf(todo);
    return this.service
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
        return null;
      });
  }
  toggleAll(){
    Promise.all(this.todos.map(todo => this.toggleTodo(todo)));
  }
  clearCompleted(){
    const todos = this.todos.filter(todo=> todo.completed===true);
    Promise.all(todos.map(todo => this.removeTodo(todo)));
  }
```
现在再去试试效果，应该一切功能正常。当然这个版本其实还是有问题的，本质上还是在循环调用`toggleTodo`和`removeTodo`，这样做会导致多次进行HTTP连接，所以最佳策略应该是请服务器后端同学增加一个批处理的API给我们。但是服务器端的编程不是本教程的范畴，这里就不展开了，大家只需记住如果在生产环境中切记要减少HTTP请求的次数和缩减发送数据包的大小。说到减小HTTP交互数据的大小的话，我们的`todo.service.ts`中可以对`toggleTodo`方法做点改造。原来的put方法是将整个todo数据上传，但其实我们只改动了`todo.completed`属性。如果你的web api是符合REST标准的话，我们可以用Http的`PATCH`方法而不是`PUT`方法，`PATCH`方法会只上传变化的数据。
```javascript
  // It was PUT /todos/:id before
  // But we will use PATCH /todos/:id instead
  // Because we don't want to waste the bytes those don't change
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
            .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
            .toPromise()
            .then(() => updatedTodo)
            .catch(this.handleError);
  }
```
# 多用户版本的待办事项应用
第四节我们完成的Todo的基本功能看起来还不错，但是有个大问题，就是每个用户看到的都是一样的待办事项，我们希望的是每个用户拥有自己的待办事项列表。我们来分析一下怎么做，如果每个todo对象带一个UserId属性是不是可以解决呢？好像可以，逻辑大概是这样：用户登录后转到/todo，TodoComponent得到当前用户的UserId，然后调用TodoService中的方法，传入当前用户的UserId，TodoService中按UserId去筛选当前用户的Todos。
但可惜我们目前的LoginComponent还是个实验品，很多功能的缺失，我们是先去做Login呢，还是利用现有的Todo对象先试验一下呢？我个人的习惯是先进行试验。

## 数据驱动开发
按之前我们分析的，给todo加一个userId属性，我们手动给我们目前的数据加上userId属性吧。更改`todo\todo-data.json`为下面的样子：
```javascript
{
  "todos": [
    {
      "id": "bf75769b-4810-64e9-d154-418ff2dbf55e",
      "desc": "getting up",
      "completed": false,
      "userId": 1
    },
    {
      "id": "5894a12f-dae1-5ab0-5761-1371ba4f703e",
      "desc": "have breakfast",
      "completed": true,
      "userId": 2
    },
    {
      "id": "0d2596c4-216b-df3d-1608-633899c5a549",
      "desc": "go to school",
      "completed": true,
      "userId": 1
    },
    {
      "id": "0b1f6614-1def-3346-f070-d6d39c02d6b7",
      "desc": "test",
      "completed": false,
      "userId": 2
    },
    {
      "id": "c1e02a43-6364-5515-1652-a772f0fab7b3",
      "desc": "This is a te",
      "completed": false,
      "userId": 1
    }
  ]
}
```
如果你还没有启动json-server的话让我们启动它: `json-server ./src/app/todo/todo-data.json`，然后打开浏览器在地址栏输入`http://localhost:3000/todos/?userId=2`你会看到只有`userId=2`的json被输出了
```
[
  {
    "id": "5894a12f-dae1-5ab0-5761-1371ba4f703e",
    "desc": "have breakfast",
    "completed": true,
    "userId": 2
  },
  {
    "id": "0b1f6614-1def-3346-f070-d6d39c02d6b7",
    "desc": "test",
    "completed": false,
    "userId": 2
  }
]
```
有兴趣的话可以再试试`http://localhost:3000/todos/?userId=2&completed=false`或其他组合查询。现在`todo`有了`userId`字段，但我们还没有User对象，User的json表现形式看起来应该是这样：
```
    {
      "id": 1,
      "username": "wang",
      "password": "1234"
    }
```
当然这个表现形式有很多问题，比如密码是明文的，这些问题我们先不管，但大概样子是类似的。那么现在如果要建立User数据库的话，我们应该新建一个`user-data.json`
```
{
  "users": [
    {
      "id": 1,
      "username": "wang",
      "password": "1234"
    },
    {
      "id": 2,
      "username": "peng",
      "password": "5678"
    }
  ]
}
```
但这样做的话感觉单独为其建一个文件有点不值得，我们干脆把user和todo数据都放在一个文件吧，现在删除`./src/app/todo/todo-data.json`删除，在`src\app`下面新建一个`data.json`
```javascript
//src\app\data.json
{
  "todos": [
    {
      "id": "bf75769b-4810-64e9-d154-418ff2dbf55e",
      "desc": "getting up",
      "completed": false,
      "userId": 1
    },
    {
      "id": "5894a12f-dae1-5ab0-5761-1371ba4f703e",
      "desc": "have breakfast",
      "completed": true,
      "userId": 2
    },
    {
      "id": "0d2596c4-216b-df3d-1608-633899c5a549",
      "desc": "go to school",
      "completed": true,
      "userId": 1
    },
    {
      "id": "0b1f6614-1def-3346-f070-d6d39c02d6b7",
      "desc": "test",
      "completed": false,
      "userId": 2
    },
    {
      "id": "c1e02a43-6364-5515-1652-a772f0fab7b3",
      "desc": "This is a te",
      "completed": false,
      "userId": 1
    }
  ],
  "users": [
    {
      "id": 1,
      "username": "wang",
      "password": "1234"
    },
    {
      "id": 2,
      "username": "peng",
      "password": "5678"
    }
  ]
}
```
当然有了数据，我们就得有对应的对象，基于同样的理由，我们把所有的entity对象都放在一个文件：删除`src\app\todo\todo.model.ts`，在`src\app`下新建一个目录domain，然后在domain下新建一个`entities.ts`，请别忘了更新所有的引用。
```javascript
export class Todo {
  id: string;
  desc: string;
  completed: boolean;
  userId: number;
}
export class User {
  id: number;
  username: string;
  password: string;
}
```
## 验证用户账户的流程
我们来梳理一下用户验证的流程

 1. 存储要访问的URL
 2. 根据本地的已登录标识判断是否此用户已经登录，如果已登录就直接放行
 2. 如果未登录导航到登录页面 用户填写用户名和密码进行登录
 3. 系统根据用户名查找用户表中是否存在此用户，如果不存在此用户，返回错误
 4. 如果存在对比填写的密码和存储的密码是否一致，如果不一致，返回错误
 5. 如果一致，存储此用户的已登录标识到本地
 6. 导航到原本要访问的URL即第一步中存储的URL，删掉本地存储的URL

看上去我们需要实现

 - UserService：用于通过用户名查找用户并返回用户
 - AuthService：用于认证用户，其中需要利用UserService的方法
 - AuthGuard：路由拦截器，用于拦截到路由后通过AuthService来知道此用户是否有权限访问该路由，根据结果导航到不同路径。
看到这里，你可能有些疑问，为什么我们不把UserService和AuthService合并呢？这是因为UserService是用于对用户的操作的，不光认证流程需要用到它，我们未来要实现的一系列功能都要用到它，比如注册用户，后台用户管理，以及主页要显示用户名称等。

### 核心模块
根据这个逻辑流程，我们来组织一下代码。开始之前我们想把认证相关的代码组织在一个新的模块下，我们暂时叫它`core`吧。在`src\app`下新建一个`core`目录，然后在`core`下面新建一个`core.module.ts`
```
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
```
注意到这个模块和其他模块不太一样，原因是我们希望**只在应用启动时导入它一次，而不会在其它地方导入它。**在模块的构造函数中我们会要求Angular把CoreModule注入自身，这看起来像一个危险的循环注入。不过，`@SkipSelf`装饰器意味着*在当前注入器的所有祖先注入器中寻找CoreModule。*如果该构造函数在我们所期望的AppModule中运行，就没有任何祖先注入器能够提供CoreModule的实例，于是注入器会放弃查找。默认情况下，当注入器找不到想找的提供商时，会抛出一个错误。 但`@Optional`装饰器表示找不到该服务也无所谓。 于是注入器会返回null，parentModule参数也就被赋成了空值，而构造函数没有任何异常。
那么我们在什么时候会需要这样一个模块？比如在这个模块中我们可能会要提供用户服务（UserService），这样的服务系统各个地方都需要，但我们不希望它被创建多次，希望它是一个单例。再比如某些只应用于`AppComponent`模板的一次性组件，没有必要共享它们，然而如果把它们留在根目录，还是显得太乱了。我们可以通过这种形式隐藏它们的实现细节。然后通过根模块AppModule导入CoreModule来获取其能力。

### 路由守卫
首先我们来看看Angular内建的路由守卫机制，在实际工作中我们常常会碰到下列需求：

 - 该用户可能无权导航到目标组件。 导航前需要用户先登录（认证）。
 - 在显示目标组件前，我们可能得先获取某些数据。
 - 在离开组件前，我们可能要先保存修改。
 - 我们可能要询问用户：你是否要放弃本次更改，而不用保存它们？

我们可以往路由配置中添加守卫，来处理这些场景。守卫返回`true`，导航过程会继续；返回`false`，导航过程会终止，且用户会留在原地（守卫还可以告诉路由器导航到别处，这样也取消当前的导航）。

路由器支持多种守卫：

 - 用CanActivate来处理导航到某路由的情况。
 - 用CanActivateChild处理导航到子路由的情况。
 - 用CanDeactivate来处理从当前路由离开的情况。
 - 用Resolve在路由激活之前获取路由数据。
 - 用CanLoad来处理异步导航到某特性模块的情况。

在分层路由的每个级别上，我们都可以设置多个守卫。路由器会先按照从最深的子路由**由下往上**检查的顺序来检查`CanDeactivate`守护条件。然后它会按照**从上到下**的顺序检查`CanActivate`守卫。如果任何守卫返回`false`，其它尚未完成的守卫会被取消，这样整个导航就被取消了。

本例中我们希望用户未登录前不能访问todo，那么需要使用`CanActivate`
```javascript
import { AuthGuardService } from '../core/auth-guard.service';
const routes: Routes = [
  {
    path: 'todo/:filter',
    canActivate: [AuthGuardService],
    component: TodoComponent
  }
];
```

当然光这么写是没有用的，下面我们来建立一个`AuthGuardService`，命令行中键入`ng g s core/auth-guard`（angular-cli对于Camel写法的文件名是采用`-`来分隔每个大写的词）。
```javascript
import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //取得用户访问的URL
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): boolean {
    //如果用户已经登录就放行
    if (localStorage.getItem('userId') !== null) { return true; }
    //否则，存储要访问的URl到本地
    localStorage.setItem('redirectUrl', url);
    //然后导航到登陆页面
    this.router.navigate(['/login']);
    //返回false，取消导航
    return false;
  }
}
```
观察上面代码，我们发现本地存储的userId的存在与否决定了用户是否已登录的状态，这当然是一个漏洞百出的实现，但我们暂且不去管它。现在我们要在登录时把这个状态值写进去。我们新建一个登录鉴权的`AuthService`：`ng g s core/auth`
```javascript
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Auth } from '../domain/entities';

@Injectable()
export class AuthService {

  constructor(private http: Http, @Inject('user') private userService) { }

  loginWithCredentials(username: string, password: string): Promise<Auth> {
    return this.userService
      .findUser(username)
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');
        let redirectUrl = (localStorage.getItem('redirectUrl') === null)?
          '/': localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        if (null === user){
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (password === user.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId',user.id);
        } else {
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }

        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
```
注意到我们返回了一个Auth对象，这是因为我们要知道几件事：

 - 用户最初要导航的页面URL 
 - 用户对象 
 - 如果发生错误的话，是什么错误，我们需要反馈给用户

这个Auth对象同样在`src\app\domain\entities.ts`中声明
```javascript
export class Auth {
  user: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}
```

当然我们还得实现UserService：`ng g s user`
```javascript
import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { User } from '../domain/entities';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  findUser(username: string): Promise<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
              .toPromise()
              .then(res => {
                let users = res.json() as User[];
                return (users.length>0)?users[0]:null;
              })
              .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
```

这段代码比较简单，就不细讲了。下面我们改造一下`src\app\login\login.component.html`，在原来用户名的验证信息下加入，用于显示用户不存在或者密码不对的情况
```html
        <div *ngIf="usernameRef.errors?.required">this is required</div>
        <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
        <!--add the code below-->
        <div *ngIf="auth?.hasError">{{auth.errMsg}}</div>
```

当然我们还得改造`src\app\login\login.component.ts`

```javascript
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Auth } from '../domain/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  auth: Auth;

  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formValue){
    this.service
      .loginWithCredentials(formValue.login.username, formValue.login.password)
      .then(auth => {
        let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
        if(!auth.hasError){
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirectUrl');
        } else {
          this.auth = Object.assign({}, auth);
        }
      });
  }
}
```

然后我们别忘了在core模块中声明我们的服务`src\app\core\core.module.ts`
```javascript
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'auth', useClass: AuthService },
    { provide: 'user', useClass: UserService },
    AuthGuardService
    ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
```
最后我们得改写一下`TodoService`，因为我们访问的URL变了，要传递的数据也有些变化
```javascript
//todo.service.ts代码片段
  // POST /todos
  addTodo(desc:string): Promise<Todo> {
    //“+”是一个简易方法可以把string转成number
    const userId:number = +localStorage.getItem('userId');
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId
    };
    return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Todo)
            .catch(this.handleError);
  }
  // GET /todos
  getTodos(): Promise<Todo[]>{
    const userId = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    return this.http.get(url)
              .toPromise()
              .then(res => res.json() as Todo[])
              .catch(this.handleError);
  }

  // GET /todos?completed=true/false
  filterTodos(filter: string): Promise<Todo[]> {
    const userId:number = +localStorage.getItem('userId');
    const url = `${this.api_url}/?userId=${userId}`;
    switch(filter){
      case 'ACTIVE': return this.http
                        .get(`${url}&completed=false`)
                        .toPromise()
                        .then(res => res.json() as Todo[])
                        .catch(this.handleError);
      case 'COMPLETED': return this.http
                          .get(`${url}&completed=true`)
                          .toPromise()
                          .then(res => res.json() as Todo[])
                          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }
```
现在应该已经ok了，我们来看看效果：
用户密码不匹配时，显示`password not match`
![image_1b23h2m601puv1q9664c52c1jem9.png-7.2kB][44]
用户不存在时，显示`user not found`
![image_1b23h3l811dn4g9h16qu1jm11htbm.png-5.6kB][45]
 直接在浏览器地址栏输入`http://localhost:4200/todo`，你会发现被重新导航到了`login`。输入正确的用户名密码后，我们被导航到了todo，现在每个用户都可以创建属于自己的待办事项了。
 ![image_1b23hdv51l621elh1uucsri32213.png-51.1kB][46]

## 用VSCode进行调试
有读者问如何用vscode进行debug，这章我们来介绍一下。首先需要安装一个vscode插件，点击左侧最下面的图标或者“在查看菜单中选择命令面板，输入install，选择扩展：安装扩展”，然后输入“debugger for chrome”回车，点击安装即可。
![image_1b23hjd3rble1nb11u7i19qgjqb1g.png-170.5kB][47]
然后点击最左边的倒数第二个按钮
![image_1b23htavu19i412obd751h8kusj1t.png-72.5kB][48]
如果是第一次使用的话，齿轮图标上会有个红点，点击选择`debugger for chrome`，vscode会帮你创建一个配置文件，这个文件位于`\.vscode\launch.json`是debugger的配置文件，请改写成下面的样子。注意如果是MacOSX或者Linux，请把`userDataDir`替换成对应的临时目录，另外把`"webpack:///C:*":"C:/*"`替换成`"webpack:///*": "/*"`，这句是因为angular-cli是采用webpack打包的，如果没有使用angular-cli不需要添加这句。
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Chrome against localhost, with sourcemaps",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:4200",
            "sourceMaps": true,
            "runtimeArgs": [
                "--disable-session-crashed-bubble",
                "--disable-infobars"
            ],
            "diagnosticLogging": true,
            "webRoot": "${workspaceRoot}/src",
            //windows setup
            "userDataDir": "C:\\temp\\chromeDummyDir",
            "sourceMapPathOverrides": {
                "webpack:///C:*":"C:/*"
                //use "webpack:///*": "/*" on Linux/OSX
            }
        },
        {
            "name": "Attach to Chrome, with sourcemaps",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "sourceMaps": true,
            "diagnosticLogging": true,
            "webRoot": "${workspaceRoot}/src",
            "sourceMapPathOverrides": {
                "webpack:///C:*":"C:/*"
            }
        }
    ]
}
```
现在你可以试着在源码中设置一个断点，点击debug视图中的debug按钮，可以尝试右键点击变量把它放到监视中看看变量值或者逐步调试应用。
![image_1b23igfkdhn71ug71cng3in94t2a.png-400.1kB][49]

本章完整代码见： https://github.com/wpcfan/hi-angular


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
  [18]: http://static.zybuluo.com/wpcfan/cemx8k69lys6xcjtecvgns3o/image_1b27r02qlo6f11f19qg1q9k1fclm.png
  [19]: http://static.zybuluo.com/wpcfan/hykairb7gc7indb3ytousn2r/image_1b27qsmhp1nlrb8g1uh6cp71qcj9.png
  [20]: http://static.zybuluo.com/wpcfan/g2c5iklgoiefb4gwf032ewy3/c2_s1_input_button_added.png
  [21]: http://static.zybuluo.com/wpcfan/vguefg9j7ogiyrnqyymb0tkd/c2_s1_handle_click_method.png
  [22]: http://static.zybuluo.com/wpcfan/6v6bvj0yj60rrei7y8bhk0t3/c2_s1_input_button_ref.png
  [23]: http://static.zybuluo.com/wpcfan/opkt3h9vqpne88q3e988oghr/c2_s1_username_password_ref.png
  [24]: http://static.zybuluo.com/wpcfan/ep2fv9smcl6wpesjd9lyymn5/c2_s2_form_validation.png
  [25]: http://static.zybuluo.com/wpcfan/r5or515a7vbbaegcumt1szrg/c2_s2_form_validation_errors.png
  [26]: http://static.zybuluo.com/wpcfan/o1581cncbnl7zi8hvhvo9vn4/c2_s2_form_validation_errors_multiple.png
  [27]: http://static.zybuluo.com/wpcfan/vngx0hc0nusbyyfzhb1tfjro/c2_s2_form_validation_form_submit.png
  [28]: http://static.zybuluo.com/wpcfan/vy66ed38x1rr3686bkzbbcfy/c2_s2_form_validation_fieldset.png
  [29]: http://static.zybuluo.com/wpcfan/cvugsjs3o68u9aeb30xvwsr2/c2_s2_form_validation_form_styling.png
  [30]: http://static.zybuluo.com/wpcfan/b7kn9wpntcooxbucnddg59xg/c2_s2_form_validation_style_fail.png
  [31]: http://static.zybuluo.com/wpcfan/t85mj8zde5zgjxwymtbvh6mg/c2_s2_form_validation_style_pass.png
  [32]: http://www.w3schools.com/cssref/css_selectors.asp
  [33]: http://static.zybuluo.com/wpcfan/8jg6bdnos6i7an84mt1zqoov/image_1b0hgdsiu87n1lha1kcahl51ckb9.png
  [34]: http://static.zybuluo.com/wpcfan/s7fmz6gcsek66kc5y2729j10/image_1b0k2ba0d1qqraa51mj51hpdpeo9.png
  [35]: http://static.zybuluo.com/wpcfan/slqndbbtc8v2chwgtfb5cmoc/image_1b0kgg9mnppf16pkip81b2hhbrm.png
  [36]: http://static.zybuluo.com/wpcfan/vuqanfa8jbnt6hwqmtdr05bc/image_1b0kr7gpn17td7v1p4s1qucuu313.png
  [37]: http://static.zybuluo.com/wpcfan/m9xxtfp9xebdrsv4tfl1oihj/image_1b11jlmes1nithths9q1n8ijqg9.png
  [38]: http://static.zybuluo.com/wpcfan/b0daucv4po2molx9kff47efe/image_1b11kjibcelb6upnb21su41dilm.png
  [39]: http://static.zybuluo.com/wpcfan/crrogqqkksstx3ztoh2mk1bi/image_1b12b5v4onlm16ai1bdn7pu143e9.png
  [40]: http://static.zybuluo.com/wpcfan/3im2e8fi5fhgxy2olfg6kp3x/image_1b17mtibdkjn105l1ojl1dgr9il9.png
  [41]: http://static.zybuluo.com/wpcfan/3t0c5c4q1o0n7t5d0rflx9zd/image_1b17o06nv10ob13d6pb1f5613pnm.png
  [42]: http://static.zybuluo.com/wpcfan/2s1k9xfhfwo4ya6gc1kyi8sg/image_1b17o6qjlb31grg1o7edjm1q4l13.png
  [43]: http://static.zybuluo.com/wpcfan/kd81ovbb5t1tix59oyft2doy/image_1b1c8if181tld15hlj531aasi8a9.png
  [44]: http://static.zybuluo.com/wpcfan/8bm5aa4ux233zro0vpqh9oun/image_1b23h2m601puv1q9664c52c1jem9.png
  [45]: http://static.zybuluo.com/wpcfan/f2z6lh68bsymwnqhbb6z8ovf/image_1b23h3l811dn4g9h16qu1jm11htbm.png
  [46]: http://static.zybuluo.com/wpcfan/y5ar6642glaj2y0jbtsjp75n/image_1b23hdv51l621elh1uucsri32213.png
  [47]: http://static.zybuluo.com/wpcfan/xpf46qrbe9wrdwi2d5r1rp4s/image_1b23hjd3rble1nb11u7i19qgjqb1g.png
  [48]: http://static.zybuluo.com/wpcfan/0b7dqnyzc2a50z5jvohr2nxz/image_1b23htavu19i412obd751h8kusj1t.png
  [49]: http://static.zybuluo.com/wpcfan/p7dr7hd1wkwcz1rn9bdlmlrm/image_1b23igfkdhn71ug71cng3in94t2a.png
