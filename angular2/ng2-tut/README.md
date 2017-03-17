<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Angular 2.x 从0到1](#angular-2x-%E4%BB%8E0%E5%88%B01)
  - [史上最简单Angular 2.x教程，大叔都学会了](#%E5%8F%B2%E4%B8%8A%E6%9C%80%E7%AE%80%E5%8D%95angular-2x%E6%95%99%E7%A8%8B%E5%A4%A7%E5%8F%94%E9%83%BD%E5%AD%A6%E4%BC%9A%E4%BA%86)
  - [标签（空格分隔）： 编程 前端 javascript 框架 教程](#%E6%A0%87%E7%AD%BE%E7%A9%BA%E6%A0%BC%E5%88%86%E9%9A%94-%E7%BC%96%E7%A8%8B-%E5%89%8D%E7%AB%AF-javascript-%E6%A1%86%E6%9E%B6-%E6%95%99%E7%A8%8B)
- [前言 -- 一个大叔码农的Angular2创世纪](#%E5%89%8D%E8%A8%80----%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%8F%94%E7%A0%81%E5%86%9C%E7%9A%84angular2%E5%88%9B%E4%B8%96%E7%BA%AA)
- [第一章：认识Angular 2.0](#%E7%AC%AC%E4%B8%80%E7%AB%A0%E8%AE%A4%E8%AF%86angular-20)
  - [Angular2简介](#angular2%E7%AE%80%E4%BB%8B)
  - [环境配置要求](#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E8%A6%81%E6%B1%82)
  - [第一个小应用 Hello Angular](#%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%B0%8F%E5%BA%94%E7%94%A8-hello-angular)
  - [第一个组件](#%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6)
  - [一些基础概念](#%E4%B8%80%E4%BA%9B%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5)
    - [什么是模块？](#%E4%BB%80%E4%B9%88%E6%98%AF%E6%A8%A1%E5%9D%97)
    - [引导过程](#%E5%BC%95%E5%AF%BC%E8%BF%87%E7%A8%8B)
- [第二章：用Form表单做一个登录控件](#%E7%AC%AC%E4%BA%8C%E7%AB%A0%E7%94%A8form%E8%A1%A8%E5%8D%95%E5%81%9A%E4%B8%80%E4%B8%AA%E7%99%BB%E5%BD%95%E6%8E%A7%E4%BB%B6)
  - [对于login组件的小改造](#%E5%AF%B9%E4%BA%8Elogin%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B0%8F%E6%94%B9%E9%80%A0)
  - [建立一个服务去完成业务逻辑](#%E5%BB%BA%E7%AB%8B%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%E5%8E%BB%E5%AE%8C%E6%88%90%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)
    - [什么是依赖性注入？](#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BE%9D%E8%B5%96%E6%80%A7%E6%B3%A8%E5%85%A5)
  - [双向数据绑定](#%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A)
  - [表单数据的验证](#%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE%E7%9A%84%E9%AA%8C%E8%AF%81)
  - [验证结果的样式自定义](#%E9%AA%8C%E8%AF%81%E7%BB%93%E6%9E%9C%E7%9A%84%E6%A0%B7%E5%BC%8F%E8%87%AA%E5%AE%9A%E4%B9%89)
  - [组件样式](#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F)
  - [进一步的练习](#%E8%BF%9B%E4%B8%80%E6%AD%A5%E7%9A%84%E7%BB%83%E4%B9%A0)
- [第三章：建立一个待办事项应用](#%E7%AC%AC%E4%B8%89%E7%AB%A0%E5%BB%BA%E7%AB%8B%E4%B8%80%E4%B8%AA%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%BA%94%E7%94%A8)
  - [建立routing的步骤](#%E5%BB%BA%E7%AB%8Brouting%E7%9A%84%E6%AD%A5%E9%AA%A4)
    - [路由插座](#%E8%B7%AF%E7%94%B1%E6%8F%92%E5%BA%A7)
    - [分离路由定义](#%E5%88%86%E7%A6%BB%E8%B7%AF%E7%94%B1%E5%AE%9A%E4%B9%89)
  - [让待办事项变得有意义](#%E8%AE%A9%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%8F%98%E5%BE%97%E6%9C%89%E6%84%8F%E4%B9%89)
    - [隔离业务逻辑](#%E9%9A%94%E7%A6%BB%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)
  - [建立模拟web服务和异步操作](#%E5%BB%BA%E7%AB%8B%E6%A8%A1%E6%8B%9Fweb%E6%9C%8D%E5%8A%A1%E5%92%8C%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C)
    - [构建数据模型](#%E6%9E%84%E5%BB%BA%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B)
    - [实现内存web服务](#%E5%AE%9E%E7%8E%B0%E5%86%85%E5%AD%98web%E6%9C%8D%E5%8A%A1)
    - [内存服务器提供的Restful API](#%E5%86%85%E5%AD%98%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8F%90%E4%BE%9B%E7%9A%84restful-api)
    - [Angular2内建的Http方法](#angular2%E5%86%85%E5%BB%BA%E7%9A%84http%E6%96%B9%E6%B3%95)
    - [页面展现](#%E9%A1%B5%E9%9D%A2%E5%B1%95%E7%8E%B0)
- [第四章：进化！模块化你的应用](#%E7%AC%AC%E5%9B%9B%E7%AB%A0%E8%BF%9B%E5%8C%96%E6%A8%A1%E5%9D%97%E5%8C%96%E4%BD%A0%E7%9A%84%E5%BA%94%E7%94%A8)
  - [一个复杂组件的分拆](#%E4%B8%80%E4%B8%AA%E5%A4%8D%E6%9D%82%E7%BB%84%E4%BB%B6%E7%9A%84%E5%88%86%E6%8B%86)
    - [输入和输出属性](#%E8%BE%93%E5%85%A5%E5%92%8C%E8%BE%93%E5%87%BA%E5%B1%9E%E6%80%A7)
    - [CSS样式的一点小说明](#css%E6%A0%B7%E5%BC%8F%E7%9A%84%E4%B8%80%E7%82%B9%E5%B0%8F%E8%AF%B4%E6%98%8E)
    - [控制视图的封装模式](#%E6%8E%A7%E5%88%B6%E8%A7%86%E5%9B%BE%E7%9A%84%E5%B0%81%E8%A3%85%E6%A8%A1%E5%BC%8F)
  - [封装成独立模块](#%E5%B0%81%E8%A3%85%E6%88%90%E7%8B%AC%E7%AB%8B%E6%A8%A1%E5%9D%97)
  - [更真实的web服务](#%E6%9B%B4%E7%9C%9F%E5%AE%9E%E7%9A%84web%E6%9C%8D%E5%8A%A1)
  - [完善Todo应用](#%E5%AE%8C%E5%96%84todo%E5%BA%94%E7%94%A8)
    - [TodoItem和TodoList组件](#todoitem%E5%92%8Ctodolist%E7%BB%84%E4%BB%B6)
  - [填坑，完成漏掉的功能](#%E5%A1%AB%E5%9D%91%E5%AE%8C%E6%88%90%E6%BC%8F%E6%8E%89%E7%9A%84%E5%8A%9F%E8%83%BD)
    - [用路由参数传递数据](#%E7%94%A8%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
    - [批量修改和批量删除](#%E6%89%B9%E9%87%8F%E4%BF%AE%E6%94%B9%E5%92%8C%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4)
- [第五章：多用户版本的待办事项应用](#%E7%AC%AC%E4%BA%94%E7%AB%A0%E5%A4%9A%E7%94%A8%E6%88%B7%E7%89%88%E6%9C%AC%E7%9A%84%E5%BE%85%E5%8A%9E%E4%BA%8B%E9%A1%B9%E5%BA%94%E7%94%A8)
  - [数据驱动开发](#%E6%95%B0%E6%8D%AE%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91)
  - [验证用户账户的流程](#%E9%AA%8C%E8%AF%81%E7%94%A8%E6%88%B7%E8%B4%A6%E6%88%B7%E7%9A%84%E6%B5%81%E7%A8%8B)
    - [核心模块](#%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97)
    - [路由守卫](#%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB)
  - [路由模块化](#%E8%B7%AF%E7%94%B1%E6%A8%A1%E5%9D%97%E5%8C%96)
  - [用VSCode进行调试](#%E7%94%A8vscode%E8%BF%9B%E8%A1%8C%E8%B0%83%E8%AF%95)
- [第六章：使用第三方样式库及模块优化](#%E7%AC%AC%E5%85%AD%E7%AB%A0%E4%BD%BF%E7%94%A8%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A0%B7%E5%BC%8F%E5%BA%93%E5%8F%8A%E6%A8%A1%E5%9D%97%E4%BC%98%E5%8C%96)
  - [生产环境初体验](#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%88%9D%E4%BD%93%E9%AA%8C)
  - [第三方样式库](#%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A0%B7%E5%BC%8F%E5%BA%93)
  - [模块优化](#%E6%A8%A1%E5%9D%97%E4%BC%98%E5%8C%96)
    - [关于模块的最佳实践](#%E5%85%B3%E4%BA%8E%E6%A8%A1%E5%9D%97%E7%9A%84%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)
  - [多个不同组件间的通信](#%E5%A4%9A%E4%B8%AA%E4%B8%8D%E5%90%8C%E7%BB%84%E4%BB%B6%E9%97%B4%E7%9A%84%E9%80%9A%E4%BF%A1)
- [第七章：给组件带来活力](#%E7%AC%AC%E4%B8%83%E7%AB%A0%E7%BB%99%E7%BB%84%E4%BB%B6%E5%B8%A6%E6%9D%A5%E6%B4%BB%E5%8A%9B)
  - [更炫的登陆页](#%E6%9B%B4%E7%82%AB%E7%9A%84%E7%99%BB%E9%99%86%E9%A1%B5)
    - [响应式的CSS框架](#%E5%93%8D%E5%BA%94%E5%BC%8F%E7%9A%84css%E6%A1%86%E6%9E%B6)
    - [寻找免费的图片源](#%E5%AF%BB%E6%89%BE%E5%85%8D%E8%B4%B9%E7%9A%84%E5%9B%BE%E7%89%87%E6%BA%90)
  - [自带动画技能的Angular2](#%E8%87%AA%E5%B8%A6%E5%8A%A8%E7%94%BB%E6%8A%80%E8%83%BD%E7%9A%84angular2)
  - [完成遗失已久的注册功能](#%E5%AE%8C%E6%88%90%E9%81%97%E5%A4%B1%E5%B7%B2%E4%B9%85%E7%9A%84%E6%B3%A8%E5%86%8C%E5%8A%9F%E8%83%BD)
    - [Restful API的实验](#restful-api%E7%9A%84%E5%AE%9E%E9%AA%8C)
  - [Angular 2的组件生命周期](#angular-2%E7%9A%84%E7%BB%84%E4%BB%B6%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
- [番外：Rx--隐藏在Angular 2.x中利剑](#%E7%95%AA%E5%A4%96rx--%E9%9A%90%E8%97%8F%E5%9C%A8angular-2x%E4%B8%AD%E5%88%A9%E5%89%91)
  - [Rx再体验](#rx%E5%86%8D%E4%BD%93%E9%AA%8C)
  - [常见操作](#%E5%B8%B8%E8%A7%81%E6%93%8D%E4%BD%9C)
    - [合并类操作符](#%E5%90%88%E5%B9%B6%E7%B1%BB%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [combineLatest操作符](#combinelatest%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [zip操作符](#zip%E6%93%8D%E4%BD%9C%E7%AC%A6)
    - [创建类操作符](#%E5%88%9B%E5%BB%BA%E7%B1%BB%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [from操作符](#from%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [fromEvent操作符](#fromevent%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [fromEventPattern](#fromeventpattern)
      - [defer操作符](#defer%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [Interval](#interval)
      - [Timer](#timer)
    - [过滤类操作符](#%E8%BF%87%E6%BB%A4%E7%B1%BB%E6%93%8D%E4%BD%9C%E7%AC%A6)
      - [filter](#filter)
      - [debounceTime](#debouncetime)
  - [Angular2中的内建支持](#angular2%E4%B8%AD%E7%9A%84%E5%86%85%E5%BB%BA%E6%94%AF%E6%8C%81)
    - [Async管道](#async%E7%AE%A1%E9%81%93)
    - [Rx版本的Todo](#rx%E7%89%88%E6%9C%AC%E7%9A%84todo)
  - [小结](#%E5%B0%8F%E7%BB%93)
- [第八章：查缺补漏大合集(上)](#%E7%AC%AC%E5%85%AB%E7%AB%A0%E6%9F%A5%E7%BC%BA%E8%A1%A5%E6%BC%8F%E5%A4%A7%E5%90%88%E9%9B%86%E4%B8%8A)
  - [第三方JS类库的引入](#%E7%AC%AC%E4%B8%89%E6%96%B9js%E7%B1%BB%E5%BA%93%E7%9A%84%E5%BC%95%E5%85%A5)
    - [为什么JS不能直接使用](#%E4%B8%BA%E4%BB%80%E4%B9%88js%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8)
    - [标准的JS库引入方法](#%E6%A0%87%E5%87%86%E7%9A%84js%E5%BA%93%E5%BC%95%E5%85%A5%E6%96%B9%E6%B3%95)
    - [引入库的特殊情况](#%E5%BC%95%E5%85%A5%E5%BA%93%E7%9A%84%E7%89%B9%E6%AE%8A%E6%83%85%E5%86%B5)
  - [惰性路由和子路由](#%E6%83%B0%E6%80%A7%E8%B7%AF%E7%94%B1%E5%92%8C%E5%AD%90%E8%B7%AF%E7%94%B1)
    - [惰性路由](#%E6%83%B0%E6%80%A7%E8%B7%AF%E7%94%B1)
    - [子路由](#%E5%AD%90%E8%B7%AF%E7%94%B1)
- [第九章：查缺补漏大合集(下)](#%E7%AC%AC%E4%B9%9D%E7%AB%A0%E6%9F%A5%E7%BC%BA%E8%A1%A5%E6%BC%8F%E5%A4%A7%E5%90%88%E9%9B%86%E4%B8%8B)
  - [Angular2 动画再体验](#angular2-%E5%8A%A8%E7%94%BB%E5%86%8D%E4%BD%93%E9%AA%8C)
    - [State和Transition](#state%E5%92%8Ctransition)
    - [奇妙的animate函数](#%E5%A5%87%E5%A6%99%E7%9A%84animate%E5%87%BD%E6%95%B0)
    - [关键帧](#%E5%85%B3%E9%94%AE%E5%B8%A7)
  - [方便的管道--PIPE](#%E6%96%B9%E4%BE%BF%E7%9A%84%E7%AE%A1%E9%81%93--pipe)
    - [自定义一个Pipe](#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%80%E4%B8%AApipe)
    - [内建的Pipe](#%E5%86%85%E5%BB%BA%E7%9A%84pipe)
      - [Decimal Pipe](#decimal-pipe)
      - [Currency Pipe](#currency-pipe)
      - [Percent Pipe](#percent-pipe)
      - [Json Pipe](#json-pipe)
  - [指令——Directive](#%E6%8C%87%E4%BB%A4directive)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Angular 2.x 从0到1 

## 史上最简单Angular 2.x教程，大叔都学会了

作者：王芃 wpcfan@gmail.com
标签（空格分隔）： 编程 前端 javascript 框架 教程
---
[TOC]

---

# 前言 -- 一个大叔码农的Angular2创世纪

作为一个出生于70年代的大叔，我在软件这个领域已经摸爬滚打了16年：从程序员、项目经理、产品经理、项目总监到部门管理等各个角色都体验过。深深地了解这个行业发展的速度之快是其他行业无法比拟的：从编程语言、各种平台、各种框架、设计模式到各类开源工具、组件林林种种，要学习的东西实在太多，变化太快。

但万变不离其宗，名词变化虽多，但透射的本质其实是趋同的：那就是程序员受不了代码的折磨，千方百计的想让这个工作更简单，更能应对变化。比如说，面向对象编程（Object-Oriented Programming）理念的提出其实是牺牲了部分性能换来代码层次结构的清晰，因此也催生了C++，Java，C#等一系列优秀的面向对象编程语言；后来程序员们发现在实际的逻辑中，往往不是像对象树那样可以划分的那么清楚。还有一些类似安全、日志等功能其实是撒在系统各个角落的，然后，面向切面的编程（Aspect-Oriented Programming）应运而生。再后来一部分科学家发现现有的编程语言做分析或数据计算实在太麻烦，明明要计算的逻辑很清晰，却要用一大堆的对象封装赋值，函式编程（Functional Programming）出现了。最近几年被产品经理逼疯的程序员认为强类型语言改动起来太慢太繁琐，于是动态脚本类语言大行其道。

但仔细分析一下，这些不是互斥的，其实好的元素都会被慢慢吸收到各自的语言、平台上面去的。比如C#、Java也采纳了函式编程的一些特点，比如Lamda表达式，.Net和Java平台上也拥有动态脚本语言。本书写的Angular2就是在JavaScript这种脚本语言基础上引入了TypeScript，进而可以享受面向对象编程和强类型语言的优点；引入了依赖性注入（Dependency Injection）这种在强类型语言中被证明非常有用的设计模式；通过引入Rx，让Javascript拥有了函式编程的能力。

在本书中，我们通过做一个待办事项列表的小应用来逐渐体会这些优点。同时建议学习一些其他框架，比如React或Vue，参照后你会发现很多事情其实异曲同工。希望年轻的你和大叔的我一起学习，一起面对这个迅速成长的行业！

										    王芃

---

# 第一章：认识Angular 2.0

## Angular2简介

[Angular 2][1] 是Google推出的一个跨平台全终端的框架，和目前比较火的React和Vue.js相比，有如下优点：

 1. 由于Google的目的是推出一个完整解决方案，所以官方默认提供的类库（比如routing，http，依赖性注入（DI）等）非常完整，无需自己选择。React的一大痛点就是选择太多导致在配置寻找组件和类库的过程中消耗太多精力，当然从另一方面看这也是其优势，选择众多且自由。
 2. 官方支持[TypeScript][2]（微软出品，是JavaScript的超集，是 JavaScript 的强类型版本）作为首选编程语言，使得开发脚本语言的一些问题可以更早更方便的找到。
 3. [RxJS][3]友好使得响应式编程在Augular2中变得极为容易（Google开发的框架依赖这么多的微软的产品，可见微软的转型还是很成功的）
 4. 支持[NativeScript][4]甚至[ReactNative][5]等进行原生Android/iOS应用开发（React支持React Native）
 5. 支持服务器端渲染（React也支持）

但总体来讲，个人认为Angular2更适合从原生App开发或后端Java/.Net等转型过来开发前端的程序员，因为它的开发模型更接近于传统强类型语言的模式，加上官方内建的组件和类库比较完整，有[官方中文网站 https://angular.cn ][6]，学习曲线要低一些。有过Angular 1.x 开发经验的同学要注意了，虽然只有一个版本号的差距，但2.x和1.x是完全不同的，不要奢望1.x的应用会平滑迁移到2.x。

Angular 支持大多数常用浏览器，包括下列版本：

|Chrome|Firefox|Edge|IE|Safari|iOS|Android|IE Mobile|
|---|---|---|---|---|---|---|---|---|---|
|45以上|40以上|13以上|9以上|7以上|7以上|4.1以上|11以上|


## 环境配置要求

Angular2需要[node.js][7]和npm，我们下面的例子需要node.js 6.x.x和npm 3.x.x，请使用 `node -v` 和 `npm -v` 来检查。由于众所周知的原因，http://npmjs.org 的站点访问经常不是很顺畅，这里给出一个由淘宝团队维护的国内镜像 http://npm.taobao.org/ 。安装好node后，请输入`npm config set registry https://registry.npm.taobao.org`

和[官方快速起步文档][8]给出的例子不同，我们下面要使用Angular团队目前正在开发中的一个工具--[Angular CLI][9] 。这是一个类似于React CLI和Ember CLI的命令行工具，用于快速构建Angular2的应用。它的优点是进一步屏蔽了很多配置的步骤、自动按官方推荐的模式进行代码组织、自动生成组件/服务等模板以及更方便的发布和测试代码。由于目前这个工具还在beta阶段，安装时请使用 `npm install -g @angular/cli@latest` 命令。

IDE的选择也比较多，免费的[Visual Studio Code][10] 和 [Atom][11]，收费的有[WebStorm][12]。我们这里推荐采用 Visual Studio Code，可以到 https://code.visualstudio.com/ 下载 Windows/Linux/MacOS 版本。

安装完以上这些工具，开发环境就部署好了，下面我们将开始Angular2的探险之旅。

## 第一个小应用 Hello Angular

那么现在开启一个terminal（命令行窗口），键入 `ng new hello-angular`

![angular-cli创建新项目][13] 

如上图所示，这个命令为我们新建了一个名为“hello-angular”的工程，进入该工程目录，键入 `code .` 可以打开IDE看到如下目录

![VSCode管理工程][14] 

使用Mac的用户可能发现找不到我们刚才使用的命令行的 `code`，您需要通过IDE安装一下，点击F1，输入install，即可看到“在Path中安装code命令”，选择之后就ok了。

![Mac用户需要安装命令行][15]

![文件目录结构][16]

大概了解了文件目录结构后，我们重新回到命令行，在应用根目录键入 `ng serve` 可以看到应用编译打包后server运行在4200端口。

![使用ng serve运行应用][17]

打开浏览器输入 http://localhost:4200 即可看到程序运行成功啦！

![第一次运行应用][18]

自动生成的太没有成就感了是不是，那么我们动手改一下吧。保持运行服务的命令窗口，然后进入VSCode，打开 `src/app/app.component.ts` 修改title，比如： `title = 'This is a hello-angular app';`，保存后返回浏览器看一下吧，结果已经更新了，这种热装载的特性使得开发变得很方便。

![第一次小修改][19]

## 第一个组件

那么我们来为我们的app增加一个Component吧，在命令行窗口输入 `ng generate component login --inline-template --inline-style` 。 顾名思义，参数generate是用来生成文件的，参数component是说明我们要生成一个组件，login呢是我们的组件名称，你可以自己想个其他有意思的名字。后面的两个参数是告诉angular-cli：生成组件时，请把组件的HTML模板和CSS样式和组件放在同一个文件中（其实分开文件更清晰，但第一个例子我们还是采用inline方式了）。

是不是感觉这个命令行太长了？幸运的是Angular团队也这么想，所以你可以把上面的命令改写成 `ng g c login -it -is` ,也就是说可以用generate的首字母g来代替generate，用component的首字母c来代替component，类似的`--inline-template`的两个词分别取首字母变成`-it`

![CLI生成新组件][20]

angular-cli为我们在\src\app目录下生成了一个新文件夹login，在login目录下生成了2个文件，其中 `login.component.spec.ts` 是测试文件，我们这里暂时不提。另一个是 `login.component.ts` 这个就是我们新建的Component了。

Angular提倡的文件命名方式是这样的：`组件名称.component.ts` ，组件的HTML模板命名为： `组件名称.component.html`，组件的样式文件命名为： `组件名称.component.css`,大家在编码中尽量遵循Google的官方建议。

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

![image_1b27qsmhp1nlrb8g1uh6cp71qcj9.png-19kB][21]

## 一些基础概念

这里我们粗略介绍一些Angular的基础概念，这些基础概念在后面的章节中会更详细的讲解。

### 什么是模块？

简单来说模块就是提供相对独立功能的功能块，每块聚焦于一个特定业务领域。Angular内建的很多库是以模块形式提供的，比如FormsModule封装了表单处理，HttpModule封装了Http的处理等等。

每个Angular应用至少有一个模块类 —— *根模块*，我们将通过引导根模块来启动应用。按照约定，根模块的类名叫做AppModule，被放在 `app.module.ts` 文件中。我们这个例子中的根模块位于 `hello-angular\src\app\app.module.ts`

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

---

# 第二章：用Form表单做一个登录控件

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

![第一个组件][22]

接下来我们尝试给Login按钮添加一个处理方法 `<button (click)="onClick()">Login</button>`。`(click)`表示我们要处理这个button的click事件，圆括号是说**发生此事件时，调用等号后面的表达式或函数**。等号后面的`onClick()`是我们自己定义在LoginComponent中的函数，这个名称你可以随便定成什么，不一定叫`onClick()`。

下面我们就来定义这个函数，在LoginComponent中写一个叫`onClick()`的方法，内容很简单就是把“button was clicked”输出到Console。

```javascript
  onClick() {
    console.log('button was clicked');
  }
```

返回浏览器，并按F12调出开发者工具。当你点击Login时，会发现Console窗口输出了我们期待的文字。

![Chrome开发者工具][23]

那么如果要在onClick中传递一个参数，比如是上面的文本输入框输入的值怎么处理呢？我们可以在文本输入框标签内加一个#usernameRef，这个叫引用（reference）。注意这个**引用是的input对象**，我们如果想传递input的值，可以用`usernameRef.value`，然后就可以把`onClick()`方法改成`onClick(usernameRef.value)`：

```html
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

![Console窗口][24]

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

![元素引用的使用][25]

## 建立一个服务去完成业务逻辑

如果我们把登录的业务逻辑在onClick方法中完成，当然也可以，但是这样做的耦合性太强了。设想一下，如果我们增加了微信登录、微博登录等，业务逻辑会越来越复杂，显然我们需要把这个业务逻辑分离出去。

那么我们接下来创建一个AuthService吧, 首先我们在src\app下建立一个core的子文件夹（`src\app\core`）,然后命令行中输入 `ng g s core/auth` （s这里是service的缩写，core/auth是说在core的目录下建立auth服务相关文件）。`auth.service.ts`和`auth.service.spec.ts`这个两个文件应该已经出现在你的目录里了。

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

而是给出了一个对象，里面有两个属性，provide和useClass，provide定义了这个服务的名称，有需要注入这个服务的就引用这个名称就好。useClass指明这个名称对应的服务是一个类，本例中就是AuthService了。这样定义好之后，我们就可以在任意组件中注入这个依赖了。

下面我们改动一下`login.component.ts`，去掉头部的`import { AuthService } from '../core/auth.service';`和组件修饰器中的providers，更改其构造函数为

```javascript
constructor(@Inject('auth') private service) {
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

注意依赖性注入**不是**仅仅为Service服务的，任何的类都可以通过这种方式提供和注入，它提供了一种解耦的方式，通过Providers提供，通过constructor注入。：

```javascript
constructor(userService: UserService) {
  userService.addUser({username: 'wang', password:'1234'});
}
```

注入器从哪得到的依赖？它可能在自己内部容器里已经有该依赖了。如果它没有，也能在提供商的帮助下新建一个。提供商就是一个用于交付服务的配方，它被关联到一个令牌。Angular会使用一些自带的提供商来初始化这些注入器。我们必须自行注册属于自己的提供商，通常用组件或者指令元数据中的providers数组进行注册。简单的类提供商是最典型的例子。只要在providers数值里面提到该类就可以了。

```javascript
providers: [ AuthService, UserService ]
```

除了上面那种最简单的提供方式之外，我们还可以以令牌方式提供。我们通常在构造函数里面，为参数指定类型，让Angular来处理依赖注入。该参数类型就是依赖注入器所需的令牌。Angular把该令牌传给注入器，然后把得到的结果赋给参数。下面是一个典型的例子

```javascript
providers: [
    { provide: 'auth', useClass: AuthService },
    { provide: 'user', useClass: UserService },
    { provide: BASE_URL,  useValue:   'http://localhost:3000/todos' },
    AuthGuardService
    ]
```

我们发现providers数组是由一系列的provide对象构成的，这个对象是`{provide: ..., useClass: ...}`或者`{provide: ..., useValue: ...}`形式的。我们把第一个属性叫令牌，第二个属性叫定义对象。这两种形式分别对应**类供应商**和**值供应商**。

值供应商通常用来进行运行期常量设置，比如网站的基础地址和功能标志等。那么最简单那种情形是怎么回事呢？比如：`providers: [ AuthGuardService ]`，其实这是一个语法糖，等价于`{provide: AuthGuardService, useClass:    AuthGuardService}` 。

```
{ provide: BASE_URL,  useValue:   'http://localhost:3000/todos' }
```

这个例子和其他的好像还是不太一样，BASE_URL不是个字符串对象也不是一个类对象。这是我们创建的一个令牌，这样创建的令牌拥有一个友好的名字，但不会与其它的同名令牌发生冲突。

```javascript
import { OpaqueToken } from '@angular/core';

export const BASE_URL = new OpaqueToken('BASE_URL');
```

当然还有另外两种情形，一种叫别名提供商，我们为同一个对象起了不同的别名。

```javascript
{ provide: MinimalLogger, useExisting: LoggerService },
```

另一种叫工厂提供商，提供商通过调用工厂函数来新建一个依赖对象，如下例所示。

```javascript
{ provide: HELLO, useFactory:  helloFactory(2), deps: [Greeting, HelloService] }
```

使用这项技术，可以用包含了一些依赖服务和本地状态输入的工厂函数来建立一个依赖对象。helloFactory自身不是提供商工厂函数。真正的提供商工厂函数是helloFactory返回的函数。

```javascript
export function helloFactory(take: number) {
  return (greeting: Greeting, helloService: HelloService): string => {
    /* ... */
  };
};
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

`[(ngModel)]="username"`这个看起来很别扭，稍微解释一下，方括号[]的作用是说把等号后面当成表达式来解析而不是当成字符串，如果我们去掉方括号那就等于说是直接给这个ngModel赋值成“username”这个字符串了。方括号的含义是单向绑定，就是说我们在组件中给model赋的值会设置到HTML的input控件中。

`[()]`是双向绑定的意思，就是说HTML对应控件的状态的改变会反射设置到组件的model中。ngModel是FormModule中提供的指令，它负责从Domain Model（这里就是username或password，以后我们可用绑定更复杂的对象）中创建一个FormControl的实例，并将这个实例和表单的控件绑定起来。

同样的对于click事件的处理，我们不需要传入参数了，因为其调用的是刚刚我们改造的组件中的onClick方法。现在我们保存文件后打开浏览器看一下，效果和上一节的应该一样的。本节的完整代码如下：

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

注意到我们只是为username和password两个控件加上了required这个属性，表明这两个控件为必填项。通过`#usernameRef="ngModel"`我们重新又加入了引用，这次的引用指向了ngModel，这个引用是要在模板中使用的，所以才加入这个引用如果不需要在模板中使用，可以不要这句。`{{表达式}}`双花括号表示解析括号中的表达式，并把这个值输出到模板中。

这里我们为了可以显性的看到控件的验证状态，直接在对应控件后输出了验证的状态。初始状态可以看到2个控件的验证状态都是false，试着填写一些字符在两个输入框中，看看状态变化吧。

![表单验证状态][26]

我们是知道了验证的状态是什么，但是如果我们想知道验证失败的原因怎么办呢？我们只需要将`{{usernameRef.valid}}`替换成`{{usernameRef.errors | json}}`。`|`是管道操作符，用于将前面的结果通过管道输出成另一种格式，这里就是把errors对象输出成json格式的意思。看一下结果吧，返回的结果如下

![管道输出][27]

如果除了不能为空，我们为username再添加一个规则试试看呢，比如字符数不能少于3。
```html
      <input type="text"
        [(ngModel)]="username"
        #usernameRef="ngModel"
        required 
        minlength="3"
        />
```

![多规则验证][28]

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

![表单引用][29]

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

![表单验证][30]

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

![验证的样式][31]

用户名控件的HTML代码是下面的样子：在验证结果为false时input的样式是`ng-invalid`：

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

类似的可以实验一下，填入一些字符满足验证要求之后，看input的HTML是下面的样子：在验证结果为true时input的样式是`ng-valid`：

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

![验证失败的样式][32]

验证通过时是这样的：

![验证通过的样式][33]

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

很多开发人员不太了解CSS，其实CSS还是比较简单的，我建议先从Selector开始看，Selector的概念弄懂后Angular2的开发CSS就会顺畅很多。具体可见[W3School中对于CSS Selctor的参考][34]和https://css-tricks.com/multiple-class-id-selectors/。

## 组件样式

刚刚我们其实已经使用了组件样式，这里简单介绍一下什么是组件样式。对于我们写的每个Angular组件来说，除了定义HTML模板之外，我们还要定义用于模板的 CSS 样式、指定任意的选择器、规则和媒体查询。

实现方式之一，是在组件的元数据中设置styles属性。styles属性可以接受一个包含 CSS 代码的字符串数组。通常我们只给它一个字符串就行了，就像我们在LoginComponent中做的那样。

```javascript
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
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }
  `]
})
```

组件样式在很多方面都不同于传统的全局性样式。我们放在组件样式中的选择器，只会应用在组件自身的模板中。上面这个例子中的input选择器只会对 LoginComponent模板中的`<input>`标签生效，而对应用中其它地方的`<input>`元素毫无影响。

这种模块化相对于CSS的传统工作方式有如下优点：

 1. CSS 类名和选择器是控件范围的。属于组件内部的，它不会和应用中其它地方的类名和选择器出现冲突。
 2. 我们组件的样式不会因为别的地方修改了样式而被意外改变。
 3. 我们可以让每个组件的CSS代码和它的TypeScript、HTML代码放在一起，这将促成清爽整洁的项目结构。
 4. 修改或移除组件的CSS代码时，不用搜索整个应用来看它有没有被别处用到。

本节代码： https://github.com/wpcfan/awesome-tutorials/tree/chap02/angular2/ng2-tut

## 进一步的练习

 - 练习1：如果我们想给username和password输入框设置默认值。比如“请输入用户名”和“请输入密码”，自己动手试一下吧。
 - 练习2：如果我们想在输入框聚焦时把默认文字清除掉，该怎么做？
 - 练习3：如果我们想把默认文字颜色设置成浅灰色该怎么做？

---

# 第三章：建立一个待办事项应用

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

```javascript
forRoot(routes: Routes, config?: ExtraOptions) : ModuleWithProviders
```

为什么叫forRoot呢？因为这个路由定义是应用在应用根部的，你可能猜到了还有一个工厂方法叫forChild，后面我们会详细讲。接下来我们看一下forRoot接收的参数，参数看起来是一个数组，每个数组元素是一个`{path: 'xxx', component: XXXComponent}`这个样子的对象。这个数组就叫做路由定义（RouteConfig）数组，每个数组元素就叫路由定义，目前我们只有一个路由定义。路由定义这个对象包括若干属性：

 - path：路由器会用它来匹配路由中指定的路径和浏览器地址栏中的当前路径，如 /login 。 
 - component：导航到此路由时，路由器需要创建的组件，如 `LoginComponent` 。
 - redirectTo：重定向到某个path，使用场景的话，比如在用户输入不存在的路径时重定向到首页。
 - pathMatch：路径的字符匹配策略
 - children：子路由数组

### 路由插座

运行一下，我们会发现出错了

![没有路由插座导致的报错][35]

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

下面我们把`<router-outlet></router-outlet>`写在`src\app\app.component.html`的末尾，地址栏输入`http://localhost:4200/login`重新看看浏览器中的效果吧，我们的应用应该正常显示了。但如果输入`http://localhost:4200`时仍然是有异常出现的，我们需要添加一个路由定义来处理。输入`http://localhost:4200`时相对于根路径的path应该是空，即''。而我们这时希望将用户仍然引导到登录页面，这就是`redirectTo: 'login'`的作用。`pathMatch: 'full'`的意思是必须完全符合路径的要求，也就是说`http://localhost:4200/1`是不会匹配到这个规则的，必须严格是`http://localhost:4200`：

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

注意路径配置的**顺序**是非常重要的，Angular2使用“先匹配优先”的原则，也就是说如果一个路径可以同时匹配几个路径配置的规则的话，以第一个匹配的规则为准。现在打开浏览器试验一下，我们的功能又恢复了正常。

### 分离路由定义

但是现在还有一点小不爽，就是直接在`app.modules.ts`中定义路径并不是很好的方式，因为随着路径定义的复杂，这部分最好还是用单独的文件来定义。现在我们新建一个文件`src\app\app.routes.ts`，将上面在`app.modules.ts`中定义的路径删除并在`app.routes.ts`中重新定义。

```javascript
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';

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

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
```

接下来我们在`app.modules.ts`中引入routing，`import { routing } from './app.routes';`，然后在imports数组里添加routing，现在我们的`app.modules.ts`看起来是下面这个样子。

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
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

现在我们来规划一下根路径`''`，对应根路径我们想建立一个todo组件，那么我们使用`ng g c todo`来生成组件，然后在`app.routes.ts`中加入路由定义，对于根路径我们不再需要重定向到登录了，我们把它改写成重定向到todo。

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

![Todo组件][36]

## 让待办事项变得有意义

我们希望的Todo页面应该有一个输入待办事项的输入框和一个显示待办事项状态的列表。那么我们先来定义一下todo的结构，todo应该有一个id用来唯一标识，还应该有一个desc用来描述这个todo是干什么的，再有一个completed用来标识是否已经完成。好了，我们来建立这个todo模型吧，在todo文件夹下新建一个文件`todo.model.ts`：

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

![有实际意义的Todo][37]

### 隔离业务逻辑

如果我们还记得之前提到的业务逻辑应该放在单独的service中，我们还可以做的更好一些。在todo文件夹内建立TodoService：`ng g s todo\todo`。上面的例子中所有创建的todo都是id为1的，这显然是一个大bug，我们看一下怎么处理。常见的不重复id创建方式有两种，一个是搞一个自增长数列，另一个是采用随机生成一组不可能重复的字符序列，常见的就是UUID了。

我们来引入一个uuid的包：`npm i --save angular2-uuid`，由于这个包中已经含有了用于typescript的定义文件，这里就执行这一个命令就足够了。这里稍微提一下如何引入第三方JS类库，分几种情况：

 1. 如果类库的npm包中含有类型定义文件（查看`node_modules/第三方类库` 中是否有 `.d.ts` 后缀的文件），那么直接使用 `npm i --save 要引入包的名称`即可。
 2. 如果类库中没有类型定义文件，可先使用  `npm i --save 要引入包的名称` 正常安装，然后执行 `npm install @types/要引入包的名称 --save-dev`。这个命令是要在 `@types/` 搜索安装类型定义文件。
 3. 当然还是有可能找不到类型定义文件，这时还是可以使用的，但需要手动添加类型定义：首先在 `src/typings.d.ts` 中写 `declare module '要引入包的名称';`，然后在组件中可以这样引入 `import * as friendName from '要引入包的名称';`（`friendName`是个友好别名，起一个你认为符合你风格的名称就行），使用时就可以这样调用方法了 `friendName.method();`

由于此时`Todo`对象的`id`已经是字符型了，请更改其声明为`id: string;`。
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

为了可以清晰的看到我们的成果，我们为chrome浏览器装一个插件，在chrome的地址栏中输入`chrome://extensions`，拉到最底部会看到一个“获取更多扩展程序”的链接，点击这个链接然后搜索“Augury”，安装即可。安装好后，按F12调出开发者工具，里面出现一个叫“Augury”的tab。

![Auguary可以是一个专门针对Angular的Chrome插件][38]

我们可以看到id这时候被设置成了一串字符，这个就是UUID了。

## 建立模拟web服务和异步操作

实际的开发中我们的service是要和服务器api进行交互的，而不是现在这样简单的操作数组。但问题来了，现在没有web服务啊，难道真要自己开发一个吗？答案是可以做个假的，假作真时真亦假。我们在开发过程中经常会遇到这类问题，等待后端同学的进度是很痛苦的。所以Angular内建提供了一个可以快速建立测试用web服务的方法：内存 (in-memory) 服务器。

### 构建数据模型

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

首先我们需要安装`angular-in-memory-web-api`，输入`npm install --save angular-in-memory-web-api`
然后在Todo文件夹下创建一个文件`src\app\todo\todo-data.ts`：

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

### 实现内存web服务

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

上面的代码我们看到定义了一个 `api_url = 'api/todos'`，你可能会问这个是怎么来的？分两部分看，`api/todos` 中前面的api定义成什么都可以，但后面这个todos是有讲究的，我们回去看一下 `src\app\todo\todo-data.ts` 返回的 `return {todos}` ，这个其实是 `return {todos: todos}` 的省略表示形式，如果我们不想让这个后半部分是todos，我们可以写成`{nahnahnah: todos}`。这样的话我们改写成 `api_url = 'blablabla/nahnahnah'` 也无所谓，因为这个内存Web服务的机理是拦截Web访问，也就是说随便什么地址都可以，内存Web服务会拦截这个地址并解析你的请求是否满足RESTful API的要求

### 内存服务器提供的Restful API

简单来说RESTful API中以“名词”来标识资源，比如todos；以don“动词”标识操作，比如：GET请求用于查询，PUT用于更新，DELETE用于删除，POST用于添加。比如如果url是api/todos，那么

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

### Angular2内建的Http方法

首先更改`src\app\todo\todo.service.ts`：

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

上面的代码中可以看到对应Restful API的各个“动词”，angular 2.x 提供了一系列对应名称的方法，非常简单易用。比如说在`deleteTodoById`方法中，我们要访问的API是`/todos/:id`，使用的HTTP方法是DELETE，那么我们就使用`this.http.delete(url, {headers: this.headers})`

### 页面展现

更新`src\app\todo\todo.component.ts`，调用我们新的service中的方法。有趣的是利用Object Spread操作符，我们看到代码风格更一致，逻辑也更容易理解了。

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
  todos : Todo[] = [];
  desc: string = '';

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

模板文件`src\app\todo\todo.component.html`需要把对应的功能体现在页面上，于是我们增加了toggleTodo（切换完成状态）的checkbox和removeTodo（删除待办事项）的button。

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

更新组件的css样式: `src\app\todo\todo.component.css` 和 `src\styles.css`，这两个文件比较大，可以到下面列出的本节代码中去查看。

其中`src\app\todo\todo.component.css`有一段代码稍微讲一下，这段代码把复选框原本的方块替换成SVG格式的图片，以便实现比较炫酷的效果。

```css
...
.todo-list li .toggle:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
}
.todo-list li .toggle:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}
...
```

现在我们看看成果吧，现在好看多了

![带样式的待办事项][39]

本节代码：https://github.com/wpcfan/awesome-tutorials/tree/chap03/angular2/ng2-tut

---

# 第四章：进化！模块化你的应用

## 一个复杂组件的分拆

上一节的末尾我们堆砌了大量代码，可能你看起来都有点晕了，这就是典型的一个功能经过一段时间的需求累积后，代码也不可避免的臃肿起来。现在我们看看怎么分拆一下吧。

![页面的功能区划分][40]

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

![分拆footer之后的待办事项列表][41]

### 输入和输出属性

类似的我们建立一个Header组件，键入`ng g c todo/todo-header`，同样的把下面的代码从`src\app\todo\todo.component.html`中剪切到`src\app\todo\todo-header\todo-header.component.html`中

```html
<header class="header">
  <h1>Todos</h1>
  <input class="new-todo" placeholder="What needs to be done?" autofocus="" [(ngModel)]="desc" (keyup.enter)="addTodo()">
</header>
```

这段代码看起来有点麻烦，主要原因是我们好像不但需要给子组件输入什么，而且希望子组件给父组件要输出一些东西，比如输入框的值和按下回车键的消息等。当然你可能猜到了，Angular2里面有`@Input()`就相应的有`@Output()`修饰符。

我们希望输入框的占位文字（没有输入的情况下显示的默认文字）是一个输入型的参数，在回车键抬起时可以发射一个事件给父组件，同时我们也希望在输入框输入文字时父组件能够得到这个字符串。也就是说父组件调用子组件时看起来是下面的样子，相当于我们自定义的组件中提供一些事件，父组件调用时可以写自己的事件处理方法，而$event就是子组件发射的事件对象：

```
<app-todo-header 
    placeholder="What do you want"
    (onTextChanges)="onTextChanges($event)"
    (onEnterUp)="addTodo()" >
</app-todo-header>
```

但是第三个需求也就是“在输入框输入文字时父组件能够得到这个字符串”，这个有点问题，如果每输入一个字符都要回传给父组件的话，系统会过于频繁进行这种通信，有可能会有性能的问题。那么我们希望可以有一个类似滤波器的东东，它可以过滤掉一定时间内的事件。因此我们定义一个输入型参数delay。

```
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

牢记子组件的模板是描述子组件自己长成什么样子，应该有哪些行为，这些东西和父组件没有任何关系。比如`todo-header.component.html`中的`placeholder`就是HTML标签Input中的一个属性，和父组件没有关联，如果我们不在`todo-header.component.ts`中声明`@Input() placeholder`，那么子组件就没有这个属性，在父组件中也无法设置这个属性。

父组件中的声明为`@Input()`的属性才会成为子组件对外可见的属性，我们完全可以把`@Input() placeholder`声明为`@Input() hintText`，这样的话在引用header组件时，我们就需要这样写`<app-todo-header hintText="What do you want" ...`

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

分析一下代码：
placeholder和delay作为2个输入型变量，这样`<app-todo-header>`标签中就可以设置这两个属性了。
接下来我们看到了由`@Output`修饰的onTextChanges和onEnterUp，这两个顾名思义是分别处理文本变化和回车键抬起事件的，这两个变量呢都定义成了EventEmitter（事件发射器）。我们会在子组件的逻辑代码中以适当的条件去发射对应事件，而父组件会接收到这些事件。我们这里采用了2中方法来触发发射器

 - enterUp：这个是比较常规的方法，在`todo-header.component.html`中我们定义了`(keyup.enter)="enterUp()"`，所以在组件的enterUp方法中，我们直接让onEnterUp发射了对应事件。
 - 构造器中使用Rx：这里涉及了很多新知识，首先我们注入了ElementRef，这个是一个Angular中需要谨慎使用的对象，因为它可以让你直接操作DOM，也就是HTML的元素和事件。同时我们使用了Rx（响应式对象），Rx是一个很复杂的话题，这里我们不展开了，但我们主要是利用Observable去观察HTML中的keyup事件，然后在这个事件流中做一个转换把输入框的值发射出来（map），应用一个时间的滤波器（debounceTime），然后应用一个筛选器（distinctUntilChanged）。这里由于这个事件的发射条件是依赖于输入时的当时条件，我们没有办法按前面的以模板事件触发做处理。
最后需要在`todo.component.ts`中加入对header输出参数发射事件的处理

```javascript
  onTextChanges(value) {
    this.desc = value;
  }
```
 
最后由于组件分拆后，我们希望也分拆一下css， `todo-header.component.css` ， `todo-footer.component.css` 和 `todo.component.css` 都需要更新。

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
.new-todo {
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
.clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
}
.clear-completed:hover {
    text-decoration: underline;
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
```

### CSS样式的一点小说明

上一张我们讲了组件CSS样式，这一章我们进一步讲一下。我们有几种方式来把样式加入组件：

 1. 内联在模板的 HTML 中 
 2. 设置styles或styleUrls元数据 
 3. 通过 CSS 文件导入

第一种方式我们也可以把它们放到 `<style>` 标签中来直接在 `HTML` 模板中嵌入样式。

```javascript
@Component({
  selector: 'hello-app',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button (click)="activate()">Activate</button>
  `
})
export class HelloAppComponent {
/* . . . */
}
```

第二种方式中我们可以给`@Component`装饰器添加一个styles数组型属性。这个数组中的每一个字符串（通常也只有一个）定义一份 CSS。

```javascript
@Component({
  selector: 'hello-app',
  template: `
    <h1>Hello World</h1>
    <app-hello-main></app-hello-main>`,
  styles: ['h1 { font-weight: normal; }']
})
export class HelloAppComponent {
/* . . . */
}
```

或者使用URL指定样式文件

```javascript
@Component({
  selector: 'hello-app',
  template: `
    <h1>Hello World</h1>
    <app-hello-main></app-hello-main>`,
  styleUrls: ['app/hello-app.component.css']
})
export class HelloAppComponent {
/* . . . */
}
```

第三种方式是通过在组件的 HTML 模板中嵌入`<link>`标签或通过标准的 CSS  `@import` 规则来把其它 CSS 文件导入到我们的 CSS 文件中。

```javascript
@Component({
  selector: 'hello-app',
  template: `
    <link rel="stylesheet" href="app/hello-app.component.css">
    <h3>Todos</h3>`
})
```

像styleUrls标签一样，这个link标签的href指向的URL也是 **相对于应用的根目录的** ，而不是组件文件。

通过CSS的`import`引入的URL 是 **相对于我们执行导入操作的 CSS 文件的** ，这点需要注意。

```css
@import 'hello-app-blablabla.css';
```

### 控制视图的封装模式

我们前面提过了，组件的CSS样式被封装进了自己的视图中，而不会影响到应用程序的其它部分。而控制视图的封装模式分为：原生 (Native)、仿真 (Emulated) 和无 (None)

- Native模式：完全隔离，外面的样式无法影响组件，组件里面的样式也无法影响外面。
- Emulated模式（默认值）：全局样式可以影响组件，但组件样式无法影响外层。
- None意味着完全消除隔离特性，全局样式可以影响组件，组件样式也可以影响外层。这种情况下 Angular 不使用视图封装。Angular 会把CSS添加到全局样式中。而不会应用上前面讨论过的那些作用域规则、隔离和保护等。从本质上来说，这跟把组件的样式直接放进 HTML 是一样的。

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

注意一点，我们没有引入BrowserModule，而是引入了CommonModule。导入 BrowserModule 会让该模块公开的所有组件、指令和管道在 AppModule 下的任何组件模板中直接可用，而不需要额外的繁琐步骤。CommonModule 提供了很多应用程序中常用的指令，包括 NgIf 和 NgFor 等。BrowserModule 导入了 CommonModule 并且 重新导出 了它。 最终的效果是：只要导入 BrowserModule 就自动获得了 CommonModule 中的指令。

几乎所有要在浏览器中使用的应用的 **根模块** （ AppModule ）都应该从 @angular/platform-browser 中导入 BrowserModule 。在其它任何模块中都 **不要导入** BrowserModule，应该改成导入 CommonModule 。 它们需要通用的指令。它们不需要重新初始化全应用级的提供商。
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

注意到我们去掉了TodoComponent的依赖，而且更改todo路径定义为redirecTo到todo路径，但没有给出组件，这叫做“无组件路由”，也就是说后面的事情是TodoModule负责的。此时我们就可以去掉AppModule中引用的Todo相关的组件了。

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoModule } from './todo/todo.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
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
而且此时我们注意到其实没有任何一个地方目前还需引用`<app-todo></app-todo>`了，这就是说我们可以安全地把`selector: 'app-todo',`从Todo组件中的`@Component`修饰符中删除了。

## 更真实的web服务

这里我们不想再使用内存Web服务了，所以我们使用一个更“真”的web服务：json-server。使用`npm install -g json-server`安装json-server。然后在todo目录下建立`todo-data.json`。这个json-server的牛逼之处在于可以根据一个或多个json数据建立一个完整的web服务，提供Restful的API形式。比内存Web服务好的地方在于，我们可以通过浏览器或一些工具（比如Postman）检验API的有效性和数据传递。

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
现在我们的json结构并不在data节点下了，所以请将addTodo和getTodos中then语句中的 `res.json().data`替换成`res.json()`。在AppModule中删掉内存web服务相关的语句。
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoModule } from './todo/todo.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';


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
另外打开一个命令窗口，进入工程目录，输入`json-server ./src/app/todo/todo-data.json`

欣赏一下成果吧

![Angury插件][42]

## 完善Todo应用

在结束本节前，我们得给Todo应用收个尾，还差一些功能没完成：

 - 从架构上来讲，我们似乎还可以进一步构建出TodoList和TodoItem两个组件
 - 全选并反转状态 
 - 底部筛选器：All，Active，Completed 
 - 清理已完成项目

### TodoItem和TodoList组件

在命令行窗口键入`ng g c todo/todo-item`，angular-cli会十分聪明的帮你在todo目录下建好TodoItem组件，并且在TodoModule中声明。一般来说，如果要生成某个模块下的组件，输入`ng g c 模块名称/组件名称`。 好的，类似的我们再建立一个TodoList控件，`ng g c todo/todo-list`。我们希望未来的`todo.component.html`是下面这个样子的
```html
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

上面代码中有一个新东东，就是在`todos()`方法前我们看到有`set`和`get`两个访问修饰符。这个是由于我们如果把todos当成一个成员变量给出的话，在设置后如果父组件的todos数组改变了，子组件并不知道这个变化，从而不能更新子组件本身的内容。所以我们把todos做成了方法，而且通过get和set修饰成属性方法，也就是说从模板中引用的话可以写成`{{todos}}`。

通过标记`set todos()`为`@Input`我们可以监视父组件的数据变化。也就是说如果只定义一个输入型属性的话，那么这个属性是“只写”的，如果要检测父组件给设置的值的变化，我们需要读，所以要提供读和写两个方法。

现在回过头来看一下`todo.component.html`，我们看到`(onRemoveTodo)="removeTodo($event)"`，这句是为了处理子组件（TodoList）的输出型参数（onRemoveTodo），而$event其实就是这个事件反射器携带的参数（这里是`todo:Todo`）。我们通过这种机制完成组件间的数据交换。

```html
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

![待办事项的过滤器][43]

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

从`this.route.params`返回的是一个Observable，里面包含着所以传递的参数，当然我们这个例子很简单只有一个，就是刚才定义的`filter`。当然我们需要在组件内添加对各种filter处理的方法：调用service中的处理方法后对todos数组进行操作。组件中原有的getTodos方法已经没有用了，删掉吧。

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

![路由重定向][44]

现在，试着点击其中某个todo更改其完成状态，然后点击Active，我们看到不光路径变了，数据也按照我们期待的方式更新了。

![待办事项过滤器仍然好用][45]

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

![完成Clear Completed功能][46]

大功告成！慢着，等一下，哪里好像不太对。让我们回过头再看看`toggleAll`方法和`clearCompleted`方法。目前的实现方式有个明显问题，那就是现在的处理方式又变成同步的了（`this.todos.forEach()`是个同步方法），如果我们的处理逻辑比较复杂的话，现在的实现方式会导致UI没有响应。

但是如果不这么做的话，对于一系列的异步操作我们怎么处理呢？`Promise.all(iterable)`就是应对这种情况的，它适合把一系列的Promise一起处理，直到所有的Promise都处理完（或者是异常时reject），之后也返回一个Promise，里面是所有的返回值。

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
    const completed_todos = this.todos.filter(todo => todo.completed === true);
    const active_todos = this.todos.filter(todo => todo.completed === false);
    Promise.all(completed_todos.map(todo => this.service.deleteTodoById(todo.id)))
      .then(() => this.todos = [...active_todos]);
  }
```

现在再去试试效果，应该一切功能正常。当然这个版本其实还是有问题的，本质上还是在循环调用`toggleTodo`和`removeTodo`，这样做会导致多次进行HTTP连接，所以最佳策略应该是请服务器后端同学增加一个批处理的API给我们。但是服务器端的编程不是本教程的范畴，这里就不展开了，大家只需记住如果在生产环境中切记要减少HTTP请求的次数和缩减发送数据包的大小。

说到减小HTTP交互数据的大小的话，我们的`todo.service.ts`中可以对`toggleTodo`方法做点改造。原来的put方法是将整个todo数据上传，但其实我们只改动了`todo.completed`属性。如果你的web api是符合REST标准的话，我们可以用Http的`PATCH`方法而不是`PUT`方法，`PATCH`方法会只上传变化的数据。

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

最后其实Todo的所有子组件其实都没有用到ngInit，所以不必实现NgInit接口，可以去掉ngInit方法和相关的接口引用。

本节代码： https://github.com/wpcfan/awesome-tutorials/tree/chap04/angular2/ng2-tut

---

# 第五章：多用户版本的待办事项应用

第四章我们完成的Todo的基本功能看起来还不错，但是有个大问题，就是每个用户看到的都是一样的待办事项，我们希望的是每个用户拥有自己的待办事项列表。

我们来分析一下怎么做，如果每个todo对象带一个UserId属性是不是可以解决呢？好像可以，逻辑大概是这样：用户登录后转到/todo，TodoComponent得到当前用户的UserId，然后调用TodoService中的方法，传入当前用户的UserId，TodoService中按UserId去筛选当前用户的Todos。
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

```javascript
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

```javascript
    {
      "id": 1,
      "username": "wang",
      "password": "1234"
    }
```

当然这个表现形式有很多问题，比如密码是明文的，这些问题我们先不管，但大概样子是类似的。那么现在如果要建立User数据库的话，我们应该新建一个`user-data.json`

```javascript
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

对于TodoService来说，我们可以做的就是按照刚才的逻辑进行改写：删除和切换状态的逻辑不用改，因为是用Todo的ID标识的。其他的要在访问的URL中加入userId的参数。添加用户的时候要把userId传入：

```javascript
  ...
  addTodo(desc:string): Promise<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId: this.userId
    };
    return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Todo)
            .catch(this.handleError);
  }
  getTodos(): Promise<Todo[]>{
    return this.http.get(`${this.api_url}?userId=${this.userId}`)
              .toPromise()
              .then(res => res.json() as Todo[])
              .catch(this.handleError);
  }
  filterTodos(filter: string): Promise<Todo[]> {
    switch(filter){
      case 'ACTIVE': return this.http
                        .get(`${this.api_url}?completed=false&userId=${this.userId}`)
                        .toPromise()
                        .then(res => res.json() as Todo[])
                        .catch(this.handleError);
      case 'COMPLETED': return this.http
                          .get(`${this.api_url}?completed=true&userId=${this.userId}`)
                          .toPromise()
                          .then(res => res.json() as Todo[])
                          .catch(this.handleError);
      default:
        return this.getTodos();
    }
  }
  ...
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

```javascript
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

注意到这个模块和其他模块不太一样，原因是我们希望**只在应用启动时导入它一次，而不会在其它地方导入它。**在模块的构造函数中我们会要求Angular把CoreModule注入自身，这看起来像一个危险的循环注入。不过，`@SkipSelf`装饰器意味着*在当前注入器的所有祖先注入器中寻找CoreModule。*如果该构造函数在我们所期望的AppModule中运行，就没有任何祖先注入器能够提供CoreModule的实例，于是注入器会放弃查找。默认情况下，当注入器找不到想找的提供商时，会抛出一个错误。但`@Optional`装饰器表示找不到该服务也无所谓。 于是注入器会返回null，parentModule参数也就被赋成了空值，而构造函数没有任何异常。

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

观察上面代码，我们发现本地存储的userId的存在与否决定了用户是否已登录的状态，这当然是一个漏洞百出的实现，但我们暂且不去管它。现在我们要在登录时把这个状态值写进去。我们新建一个登录鉴权的`AuthService`：`ng g s core/auth`：

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

当然我们还得实现UserService：`ng g s user`：

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

接下来我们还得改造`src\app\login\login.component.ts`：

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

然后我们别忘了在core模块中声明我们的服务`src\app\core\core.module.ts`：

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

![用户密码不匹配时提示][47]

用户不存在时，显示`user not found`

![用户不存在的提示][48]

 直接在浏览器地址栏输入`http://localhost:4200/todo`，你会发现被重新导航到了`login`。输入正确的用户名密码后，我们被导航到了todo，现在每个用户都可以创建属于自己的待办事项了。
 
 ![image_1b23hdv51l621elh1uucsri32213.png-51.1kB][49]

## 路由模块化

Angular团队推荐把路由模块化，这样便于使业务逻辑和路由松耦合。虽然目前在我们的应用中感觉用处不大，但按官方推荐的方式还是和大家一起改造一下吧。删掉原有的`app.routes.ts`和`todo.routes.ts`。添加`app-routing.module.ts`:

```javascript
import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
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
    redirectTo: 'todo/ALL'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
```

以及`src\app\todo\todo-routing.module.ts`：

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo.component';

import { AuthGuardService } from '../core/auth-guard.service';

const routes: Routes = [
  {
    path: 'todo/:filter',
    canActivate: [AuthGuardService],
    component: TodoComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TodoRoutingModule { }

```

并分别在AppModule和TodoModule中引入路由模块。

## 用VSCode进行调试

我们一直都没讲如何用vscode进行debug，这章我们来介绍一下。首先需要安装一个vscode插件，点击左侧最下面的图标或者“在查看菜单中选择命令面板，输入install，选择扩展：安装扩展”，然后输入“debugger for chrome”回车，点击安装即可。

![VS Code Chome 调试插件][50]

然后点击最左边的倒数第二个按钮

![debug profile创建][51]

如果是第一次使用的话，齿轮图标上会有个红点，点击选择`debugger for chrome`，vscode会帮你创建一个配置文件，这个文件位于`\.vscode\launch.json`是debugger的配置文件，请改写成下面的样子。注意如果是MacOSX或者Linux，请把`userDataDir`替换成对应的临时目录，另外把`"webpack:///C:*":"C:/*"`替换成`"webpack:///*": "/*"`，这句是因为angular-cli是采用webpack打包的，如果没有使用angular-cli不需要添加这句。

```javascript
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

![在VSCODE中 Debug][52]

在笔者写书的时间点，由于一些问题（可能是zone.js引起的异常），启动VSCode debug时可能会自动进入一个断点，只要点击继续就可以了，并不影响调试。

![可能由于Angular的zone.js引起的异常][53]


本章完整代码见： https://github.com/wpcfan/awesome-tutorials/tree/chap05/angular2/ng2-tut

---

# 第六章：使用第三方样式库及模块优化

## 生产环境初体验

用angular-cli建立生产环境是非常简单的，只需输入`ng build --prod --aot`即可。--prod会使用生产环境的配置文件，--aot会使用AOT替代JIT进行编译。现在实验一下

![执行生产环境编译][54]

仔细看一下命令行输出，我们应该可以猜到angular移除了一些没有用到的类库（Google称之为Shaking过程），对js和css等进行了压缩等优化工作。angular在我们的项目根目录下建立了一个`dist`文件夹，用于生产环境的文件就输出在这个文件夹了。

![生产环境输出的文件][55]

我们安装一个http-server，`npm i -g http-server`，然后在dist目录键入`http-server .`。打开浏览器进入`http://localhost:8080`，我们会看到网页打开了。但如果打开console，或者试着登录一下，你会发现存在很多错误。

![由于未配置Hash造成的错误][56]

这是由于angular-cli当前的bug产生的，目前需要对路由做hash处理。

```javascript
...
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
...
```

只需在`app-routing.module.ts`中为RouterModule配置`{ useHash: true }`的属性即可。这样的话angular会在url上加上一个`#`，比如login的url现在是`http://localhost:8080/#/login`。这样改动后，功能又好用了。以后我们项目如果需要发布到生产环境的，大家利用angular-cli可以很方便的处理了。然后下面我们回到开发环境，请关掉8080端口的http服务器，并删掉dist。

## 第三方样式库

之前我们使用的是自己为各个组件写样式，其实angular团队有一套官方的符合Material Design的内建组件库：[https://github.com/angular/material2][57]（这个库还属于早期阶段，很多控件不可用，所以大家可以关注，但现阶段不建议在生产环境中使用）。

除了官方之外，目前有大量的比较成熟的样式库，比如bootstrap，material-design-lite等。我们这节课以material-design-lite来看一下怎么使用。[Material Desing Lite][58]是Google为web开发的一套基于Material Design的样式库。由于是Google开发的，所以你要去访问之前要科学上网。

我们当然可以直接使用官方的css样式库，但是有好心人已经帮我们封装成了比较好用的[组件模块][59]了，组件模块的好处是可以使模板写起来更简洁，而且易于扩展。现在打开一个terminal输入`npm install --save angular2-mdl`。然后在你需要使用MDL组件的模块中引入MdlModule。我们首先希望改造一下我们的AppComponent，目前它只有一句简陋的文字输出。

```html
<mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed>
  <mdl-layout-header>
    <mdl-layout-header-row>
      <mdl-layout-title>Awesome Todos</mdl-layout-title>
      <mdl-layout-spacer></mdl-layout-spacer>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link">Logout</a>
      </nav>
    </mdl-layout-header-row>
  </mdl-layout-header>
  <mdl-layout-drawer>
    <mdl-layout-title>Title</mdl-layout-title>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link">Link</a>
    </nav>
  </mdl-layout-drawer>
  <mdl-layout-content class="content">
    <router-outlet></router-outlet>
  </mdl-layout-content>
</mdl-layout>
```

这段代码里面mdl开头的标签都是我们刚引入的组件库封装的组件，具体的用法可以去 http://mseemann.io/angular2-mdl/ 和 https://getmdl.io  参考文档资料。

`<mdl-layout></mdl-layout>`是一个布局组件，`mdl-layout-fixed-header`是一个可以让header固定在页面顶部的属性，`mdl-layout-header-seamed`是要header没有阴影。`mdl-layout-header`是一个顶部组件，`mdl-layout-header-row`是在顶部组件中形成一行的容器。`mdl-layout-spacer`是一个占位的组件，它会把组件剩余位置占满，防止出现错位。`mdl-layout-drawer`是一个抽屉组件，和Android的标准应用类似，点击顶部菜单图标会从侧面滑出一个菜单。别忘了在AppModule中引入

```javascript
...
import { MdlModule } from 'angular2-mdl';
...
@NgModule({
  ...
  imports: [
    ...
    MdlModule,
    ...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

我们为了使用，还需要对颜色做个定制，这个定制需要使用一种CSS的预编译技术叫[SASS][60]，需要建立一个`src\styles.scss`，然后定义Material Design的颜色，具体颜色名字的定义是在Google调色板类中定义的，可以去  [http://mseemann.io/angular2-mdl/theme][61] 查看。

```css
@import "~angular2-mdl/scss/color-definitions";

$color-primary: $palette-blue-500;
$color-primary-dark: $palette-blue-700;
$color-accent: $palette-amber-A200;
$color-primary-contrast: $color-dark-contrast;
$color-accent-contrast: $color-dark-contrast;

@import '~angular2-mdl/scss/material-design-lite';
```

![Material Design 调色板][62]

Material Design中区分主色（Primary）和配色（Accent），比如像图中的颜色搭配，主色是blue，在scss中我们可以让 `$color-primary: $palette-blue-500;`，`500` 是指的颜色深度，如果想更深一些就指定成600，900等，可以自己实验一下。类似的配色pink，就可以让 `$color-accent: $palette-pink-300;`。那么 `$color-primary-dark` 是什么意思呢，顾名思义是更深的主色的意思，Material Design的主要设计目标也是以色彩和动画的变化来给用户不同的体验，所以主色尽量不要过深，因为还有更深的主色需要定义。

由于我们使用的CLI并不知道我们采用了预编译的css，所以需要改一下`angular-cli.json`，把styles改写成下面的样子

```javascript
"styles": [
        "styles.scss"
      ],
```

保存后打开浏览器看一下效果：

![image_1b2g0jju71mdsnd3k2v174k7129.png-11.5kB][63]

我们接下来改造一下login的模板

```html
<div>
  <form (ngSubmit)="onSubmit()">
    <mdl-textfield
      type="text"
      label="Username..."
      name="username"
      floating-label
      required
      [(ngModel)]="username"
      #usernameRef="ngModel"
      >
    </mdl-textfield>
    <div *ngIf="auth?.hasError" >
      {{auth?.errMsg}}
    </div>
    <mdl-textfield
      type="password"
      label="Password..."
      name="password"
      floating-label
      required
      [(ngModel)]="password"
      #passwordRef="ngModel">
    </mdl-textfield>
    <button 
      mdl-button mdl-button-type="raised" 
      mdl-colored="primary" 
      mdl-ripple type="submit">
      Login
    </button>
  </form>
</div>
```

由于采用了符合Material Design的组件，我们就不需要原来的用于验证的`div`了。

![采用Material Design风格的表单控件][64]

下面看一下Todo，原来我们在css中用了svg来改写复选框的样子，现在我们试试用mdl来做。在`todo-list.component.html`中把ToggleAll改写成下面的样子

```html
<mdl-icon-toggle class="toggle-all" [mdl-ripple]="true" (click)="onToggleAllTriggered()">expand_more</mdl-icon-toggle>
```

这个标签是把一个图标做成可复选框的效果，这里用到了Google的icon font，所以需要在`index.html`中引入

```html
<!doctype html>
<html>
<head>
  ...
  <link rel="stylesheet" href="https://fonts.lug.ustc.edu.cn/icon?family=Material+Icons">
</head>
<body>
  <app-root>Loading...</app-root>
</body>
</html>
```

我们用了科大的镜像，因为Google的产品，你懂的。
当然TodoItem模板中的checkbox也需要改造成

```html
<mdl-icon-toggle (click)="toggle()" [(ngModel)]="isChecked">check_circle</mdl-icon-toggle>
```
Todo变成下面的样子，也还不错啊~~

![清爽的TodoList][65]

## 模块优化

现在仔细看一下我们的各个模块定义，发现我们不断地重复引入了`CommonModule`、`FormsModule`、`MdlModule`，这些如果在大部分的组件中都会用到话，我们不妨建立一个SharedModule （`src\app\shared\shared.module.ts`）

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdlModule
  ]
})
export class SharedModule { }
```

这个模块的作用是把常用的组件和模块打包起来（虽然现在没有组件，只是把常用的模块导入又导出），这样在其他模块中只需引入这个模块即可，比如TodoModule现在看起来是下面的样子：

```javascript
...
import { SharedModule } from '../shared/shared.module';
...
@NgModule({
  imports: [
    SharedModule,
    ...
  ],
  declarations: [
    TodoComponent,
    ...
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
    ],
})
export class TodoModule {}
```

### 关于模块的最佳实践

Angular团队对于共享特性模块有如下建议

 - 坚持在shared目录中创建名叫SharedModule的特性模块（例如在app/shared/shared.module.ts中定义SharedModule）。
 - 坚持把可能被应用其它特性模块使用的公共组件、指令和管道放在SharedModule中，这些资产倾向于共享自己的新实例（而不是单例）。
 - 坚持在SharedModule中导入所有模块都需要的资产（例如CommonModule和FormsModule）。
 - 坚持在SharedModule中声明所有组件、指令和管道。
 - 坚持从SharedModule中导出其它特性模块所需的全部符号。
 - **避免**在SharedModule中指定应用级的单例服务提供商。但如果是故意设计的单例也可以，不过还是要小心。

很显然，我们的共享模块还没有全部做到，大家可以作为练习自己试验一下。

同样的对于核心特性模块，官方的建议是

- 坚持把那些“只用一次”的类收集到CoreModule中，并对外隐藏它们的实现细节。简化的AppModule会导入CoreModule，并且把它作为整个应用的总指挥。
- 坚持在core目录下创建一个名叫CoreModule的特性模块（例如在app/core/core.module.ts中定义CoreModule）。
- 坚持把一个要共享给整个应用的单例服务放进CoreModule中（例如ExceptionService和LoggerService）。
- 坚持导入CoreModule中的资产所需要的全部模块（例如CommonModule和FormsModule）。
- 坚持把应用级、只用一次的组件收集到CoreModule中。 只在应用启动时从AppModule中导入它一次，以后再也不要导入它（例如NavComponent和SpinnerComponent等）。
- 坚持从CoreModule中导出AppModule需导入的所有符号，使它们在所有特性模块中可用。
- 坚持防范多次导入CoreModule，并通过添加守卫逻辑来尽快失败。
- **避免**在AppModule之外的任何地方导入CoreModule
 
## 多个不同组件间的通信

下面我们要实现这样一个功能：在用户未登录时，顶部菜单中只有Login一个链接可见，用户登录后，顶部菜单中有三个链接，一个是Todo，一个是用户个人信息，另一个是Logout。按这个需求将顶部菜单改造成如下：

```html
<!--src\app\app.component.html-->
<mdl-layout mdl-layout-fixed-header mdl-layout-header-seamed>
  <mdl-layout-header>
    <mdl-layout-header-row>
      <mdl-layout-title>{{title}}</mdl-layout-title>
      <mdl-layout-spacer></mdl-layout-spacer>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation" *ngIf="auth?.user?.username !== null">
        <a class="mdl-navigation__link" routerLink="todo">Todos</a>
      </nav>
      <nav class="mdl-navigation" *ngIf="auth?.user?.username !== null">
        <a class="mdl-navigation__link" routerLink="profile">{{auth.user.username}}</a>
      </nav>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" *ngIf="auth?.user?.username === null" (click)="login()">
          Login
        </a>
        <a class="mdl-navigation__link" *ngIf="auth?.user?.username !== null" (click)="logout()">
          Logout
        </a>
      </nav>
    </mdl-layout-header-row>
  </mdl-layout-header>
  <mdl-layout-drawer>
    <mdl-layout-title>{{title}}</mdl-layout-title>
    <nav class="mdl-navigation">
      <a class="mdl-navigation__link">Link</a>
    </nav>
  </mdl-layout-drawer>
  <mdl-layout-content class="content">
    <router-outlet></router-outlet>
  </mdl-layout-content>
</mdl-layout>
```

这样改造完后的页面结构是顶部菜单只加载一次，底下的内容随着不同路由显示不同内容。但如果我们要在login后顶部菜单也随之改变的话，我们一定要实现某种通信机制。前面我们讲过EventEmiiter，当然我们可以将整个页面当成父控件，顶部菜单是子控件的形式，但这时你发现由于我们是用路由插座（`<router-outlet></router-outlet>`） l来显示内容的，所以无法采用子控件的形式传递信息。

这种情况就要引入Rx了，rx的学习门槛较高，也不是本教程的重点，但我还是这里尝试着解释一下。Rx是响应式编程的利器，它的学习门槛来自于思维方式的转变，从传统的编程思维转成流式思维：Rx总体来看是一个数据流或信号流，所有的操作符都是为了对这个流进行控制。写Rx时要对系统数据或信号的完整逻辑流程先想清楚，然后就比较好写了。

其实在Angular2中，Rx是无处不在的，还记得我们之前总用到toPromise()这个方法吗？其实这个方法是给不太熟悉Rx的同学用的，Angular本身返回的就是Observable。我们现在把UserService改成Rx版本

```javascript
import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../domain/entities';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';

  constructor(private http: Http) { }

  getUser(userId: number): Observable<User> {
    const url = `${this.api_url}/${userId}`;
    return this.http.get(url)
              .map(res => res.json() as User);
  }
  findUser(username: string): Observable<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
              .map(res => {
                let users = res.json() as User[];
                return (users.length>0) ? users[0] : null;
              });
  }
}
```

大家可能注意到了，其实有没有Promise都无所谓，大概的写法也是类似的，只不过返回的是Observable。这里改了之后，相关调用的地方都要改一下，比如LoginComponent：

```javascript
import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../domain/entities';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  password = '';
  auth: Auth;
  constructor(@Inject('auth') private service, private router: Router) { }

  onSubmit(){
    this.service
      .loginWithCredentials(this.username, this.password)
      .subscribe(auth => {
        this.auth = Object.assign({}, auth);
        if(!auth.hasError){
          this.router.navigate(['todo']);
        }
      });
  }
}
```

AuthService也需要改写成下面的样子。这里注意到我们引入了一个新概念：Subject。Subject 既是Observer（观察者）也是Observable（被观察对象）。这里采用Subject的原因是我们在Login时改变了Auth的属性，但由于这个Login方法是Login页面显性调用的，其他需要观察Auth变化的地方调用的是getAuth()方法。这样的话，我们需要在Auth发生变化时推送变化出去，我们在loginWithCredentials方法中以`this.subject.next(this.auth);`写入其变化，在getAuth()中用`return this.subject.asObservable();`将Subject转换成Observable。

```javascript
import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { ReplaySubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Auth } from '../domain/entities';

@Injectable()
export class AuthService {
  auth: Auth = {hasError: true, redirectUrl: '', errMsg: 'not logged in'};
  subject: ReplaySubject<Auth> = new ReplaySubject<Auth>(1);
  constructor(private http: Http, @Inject('user') private userService) {
  }
  getAuth(): Observable<Auth> {
    return this.subject.asObservable();
  }
  unAuth(): void {
    this.auth = Object.assign(
      {},
      this.auth,
      {user: null, hasError: true, redirectUrl: '', errMsg: 'not logged in'});
    this.subject.next(this.auth);
  }
  loginWithCredentials(username: string, password: string): Observable<Auth> {
    return this.userService
      .findUser(username)
      .map(user => {
        let auth = new Auth();
        if (null === user){
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (password === user.password) {
          auth.user = user;
          auth.hasError = false;
          auth.errMsg = null;
        } else {
          auth.user = null;
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        this.auth = Object.assign({}, auth);
        this.subject.next(this.auth);
        return this.auth;
      });
  }
}
```

但为什么是ReplaySubject呢？我们共有2处需要监听Auth的变化：一处是导航栏，导航栏会依据不同的Auth值来显示/隐藏不同菜单；另一处是todo的路由守卫，它会依据Auth是否有错误来判断是否允许进入该路由url。我们来以时间维度分析一下流程：我们在执行登录时，如果鉴权成功，会导航到某个路由（这里是todo），这时会引发CanActivate的检查，而此时最新的Auth已经发射完毕（因为我们在loginWithCredentials中写入了变化值），CanActivate检查时会发现没有Auth数据。

```
getAuth() Auth:{}  Auth{user: {id: 1...}} getAuth()-没有Auth数据发射了
|==========|==============|===========================|=====
导航栏    登录前          登录后              todo路由守卫激活
```

这种情况下我们需要缓存最近的一份Auth数据，无论谁，什么时间订阅，只要没有更新的数据，我们就推送最近的一份给它，这就是ReplaySubject的意义所在。

下面我们改写路由守卫

```javascript
import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot }    from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    @Inject('auth') private authService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;

    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
  canLoad(route: Route): Observable<boolean> {
    let url = `/${route.path}`;

    return this.authService.getAuth()
      .map(auth => !auth.hasError);
  }
}
```

这里你会发现多了一个canLoad方法，canActivate是用于是否可以进入某个url，而canLoad是决定是否加载某个url对应的模块。所以需要再改下路由

```javascript
import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL',
    canLoad: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
```
现在打开浏览器欣赏一下我们的成果。

![改造后的首页登录后效果图][66]

本节代码：https://github.com/wpcfan/awesome-tutorials/tree/chap06/angular2/ng2-tut

---

# 第七章：给组件带来活力

这节我们的主题是“专注酷炫一百年”；-）其实...没那么夸张了，但我们还是要在这一节了解MDL css框架、Angular2 内建的动画特性、更复杂的组件和概括一下Angular2的组件生命周期。

## 更炫的登陆页

大家不知道有没有试用过bing（必应）搜索引擎（在Google无法访问的情况下，bing的英文搜索还是不错的选择），这个搜索引擎的主页很有特点：每日都会有一张非常好看的图作为背景。

![bing搜索的首页有每日一图][67]

我们想做的一个特效呢是类似地给登陆页增加一个背景，但更酷的一点是，我们的背景每隔3秒会自动替换一张。由于涉及到布局，我们先来熟悉一下CSS的框架设计。

### 响应式的CSS框架

目前主流的响应式css框架都有网格的概念，在我们现在使用的MDL（Material Design Lite）框架中叫做grid。在MDL中，一个页面在PC浏览器上的展现宽度有12个格子（cell），在平板上有8个格子，在手机上有4个格子。即一个grid的一行在PC上是12个cell，在平板上是8个cell，在手机上是4个cell。如果一行中的cell数目大于限制数目（比如在PC上超过12个），MDL会做折行处理。标识一个grid容器也很简单，在对应标签加上`class="mdl-grid"`即可。类似的每个cell需要在对应标签内加上`class="mdl-cell"`。如果要定制化grid的话，我们需要给class添加多个样式类名，比如如果希望grid内是没有间隔的，可以写成`class="mdl-grid mdl-grid--no-spacing"`；如果希望添加更多自己的定义，类似的可以写成`mdl-grid my-grid-style`，然后在css中定义这个`my-grid-style`即可。

```html
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
  <div class="mdl-cell mdl-cell--1-col">1</div>
</div>
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--4-col">4</div>
  <div class="mdl-cell mdl-cell--4-col">4</div>
  <div class="mdl-cell mdl-cell--4-col">4</div>
</div>
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--6-col">6</div>
  <div class="mdl-cell mdl-cell--4-col">4</div>
  <div class="mdl-cell mdl-cell--2-col">2</div>
</div>
<div class="mdl-grid">
  <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">6 (8 tablet)</div>
  <div class="mdl-cell mdl-cell--4-col mdl-cell--6-col-tablet">4 (6 tablet)</div>
  <div class="mdl-cell mdl-cell--2-col mdl-cell--4-col-phone">2 (4 phone)</div>
</div>
```

![响应式布局在PC浏览器的展现][68]

你可以尝试把浏览器的窗口缩小，让宽度变窄，调整到一定程度后你会发现，布局改变了，变成了下面的样子，这就是同样的代码在平板上的效果。你会发现原本的第一行折成了两行，因为在平板上8个cell是一行。你可以试试继续把浏览器的宽度变窄，看看在手机上的效果。

![响应式布局在小窗口时的变化][69]

下面我们看看怎么对Login页面做改造，首先在`form`外套一层`div`，并应用grid相关的css类，当然为了设置背景图，我们使用了一个angular属性ngStyle，这样让我们可以动态的改变背景图。grid里面我们仅有一个有实际内容的cell，就是form了，这个form在PC和平板上都占3个cell，在手机上占4个cell。但为了使这个form可以放在页面靠右的位置，我们添加了2个占位标签`mdl-layout-spacer`，标签的作用使将cell剩余的横向空间占满。

```html
<div
  class="mdl-grid mdl-grid--no-spacing login-container"
  [ngStyle]="{'background-image': 'url(' + photo + ')'}">
  <mdl-layout-spacer
    class="mdl-cell mdl-cell--8-col mdl-cell--4-col-tablet mdl-cell--hide-phone">
  </mdl-layout-spacer>
  <form
    class="mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet mdl-cell--4-col-phone login-form"
    (ngSubmit)="onSubmit()"
    >
    <!--...(这里省略掉其他控件的内容)-->
  </form>
  <mdl-layout-spacer></mdl-layout-spacer>
</div>
```

在我们还没有找到可以动态配置的图片源之前，为了看看页面效果，我们可以先找一张图片放在`src\assets`目录下面，然后在LoginComponent中将其赋值给photo: `photo = '/assets/login_default_bg.jpg';`。接下来就看看现在的页面效果吧。

![在asset目录配置图片资源][70]

### 寻找免费的图片源

当然我们可以找到一些免费的图片，然后存到本地来实现这个功能，但如果有一个海量的图片库，我们可以根据关键字搜索不同的图片不是更酷了吗？幸运的是Bing搜索是有API的，去 https://www.microsoft.com/cognitive-services/en-us/bing-image-search-api 点击`Get Started for free`后点选`Bing Image Search`申请获得一个API key即可。

![申请Bing Image API][71]

申请完毕后可以在`My Account`中看到你的key，默认是隐藏的，点击`Show`链接即可看到了，点击Copy链接可以拷贝key到剪贴板。

![查找API Key][72]

Bing Image Search API的Request Url是:`https://api.cognitive.microsoft.com/bing/v5.0/images/search`，后面可以跟随一系列参数，其中q是必选参数，指明搜索的关键字。

|参数|是否必选|类型|功能描述|
|---|:---|:---:|---:|
|q|是|string|搜索关键字|
|count|否|number|返回的图片数量，实际返回值可能小于指定值|
|offset|否|number|要跳过的结果数量|
|mkt|否|string|从那个国家搜索，比如美国就是`en-US`|
|safeSearch|否|string|应用过滤器过滤掉不良成人内容|

知道了这些参数的意义后，我们可以在`login`目录下新建一个`BingImageService`：

```javascript
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Image } from '../domain/entities';

@Injectable()
export class BingImageService {

  imageUrl: string;
  headers = new Headers({
    'Content-Type': 'application/json',
    //把你获得API key在这里替换掉下面的enter-your-api-key-here
    'Ocp-Apim-Subscription-Key': 'enter-your-api-key-here'
  });

  constructor(private http: Http) {
    const q = '北极+墙纸';
    const baseUrl: string = `https://api.cognitive.microsoft.com/bing/v5.0/images/search`;
    this.imageUrl = baseUrl + `?q=${q}&count=5&mkt=zh-CN&imageType=Photo&size=Large`;
  }

  getImageUrl(): Observable<Image[]>{
    return this.http.get(this.imageUrl, { headers: this.headers })
            .map(res => res.json().value as Image[])
            .catch(this.handleError);
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
```
然后在LoginComponent中即可调用这个服务，在得到返回的图片结果后我们就可以去替换掉默认本地图片的地址了。由于我们是得到一个图片地址的数组，所以我们还需要一个对这个数组中的每张图片做一个4秒的等待。而且我们还做了一个小处理 `i = (i + 1) % length;`，使得图片可以循环播放。

注意到我们让LoginComponent实现了`OnDestroy`接口，这是由于我们希望在页面销毁时也同时销毁观察者的订阅，而不是让它一直跑在后台。

```javascript
//代码片段
export class LoginComponent implements OnDestroy {

  username = '';
  password = '';
  auth: Auth;
  slides: Image[] = [];
  photo = '/assets/login_default_bg.jpg';
  subscription: Subscription;

  constructor(
    @Inject('auth') private authService,
    @Inject('bing') private bingService,
    private router: Router) {
    this.bingService.getImageUrl()
      .subscribe((images: Image[]) => {
        this.slides = [...images];
        this.rotateImages(this.slides);
      });
  }
  ...
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  rotateImages(arr: Image[]){
    const length = arr.length
    let i = 0;
    setInterval(() => {
      i = (i + 1) % length;
      this.photo = this.slides[i].contentUrl;
    }, 4000);
  }
}
```

来喝杯咖啡，欣赏一下我们的成果吧！

![每隔4秒换一张背景图的登录页面][73]

![等待4秒后背景切换了][74]

## 自带动画技能的Angular2

Angular2的目标是一站式解决方案，当然会自带动画技能。动画会被定义在`@Component`描述性元数据中。在添加动画之前，先引入一些与动画有关的类库：
```javascript
import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnDestroy
} from '@angular/core';
```
然后就可以在`@Component`元数据中去添加动画相关的元数据了，我们这里定义了一个叫`loginState`的动画触发器（trigger）。这个触发器会在`inactive`和`active`两个状态间转换。`scale(1.1)`是放缩比例，意味着我们对控件做了1.1倍的放大。这个动画的逻辑就是，当触发器处于`active`状态时，对应用这个触发器状态的控件做1.1倍放大处理。

```javascript
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
```

我们刚刚定义了一个动画，但它还没有被用到任何地方。要想使用它，可以在模板中用`[@triggerName]="xxx"`的形式来把它附加到一个或多个元素上。

```html
      <button
        mdl-button mdl-button-type="raised"
        mdl-colored="primary"
        mdl-ripple type="submit"
        [@loginState]="loginBtnState"
        (mouseenter)="toggleLoginState(true)"
        (mouseleave)="toggleLoginState(false)">
        Login
      </button>
```

这里我们对Login这个按钮应用了`loginState`触发器，并且绑定这个触发器的状态值到一个成员变量`loginBtnState`。而且我们定义了在鼠标进入按钮区域和离开按钮区域时应该通过一个函数`toggleLoginState`来改变`loginBtnState`的值。在`LoginComponent`中定义这个方法即可，我们要实现的这个功能非常简单，一行代码就搞定了：

```javascript
  toggleLoginState(state: boolean){
    this.loginBtnState = state ? 'active' : 'inactive';
  }
```
试着将鼠标放在按钮上和离开按钮区域，看看按钮的变化的效果。

![鼠标离开和进入按钮区域时不同的按钮大小][75]

## 完成遗失已久的注册功能

我们自从完成了基本的多用户待办事项后就没有增加注册功能，现在来填补这个缺憾吧。我们打算在点击登录页的Register按钮时弹出一个注册用户的对话框。

![我们要实现的注册对话框效果][76]

如果实现一个对话框，利用我们已经引入的`angular2-mdl`库，需要几个步骤：

我们需要在`src\index.html`中增加一个“对话框插座”（`<dialog-outlet></dialog-outlet>`），就是在`<app-root>`下面添加即可。

```html
<!doctype html>
<html>
<head>
...
</head>
<body>
  <app-root>Loading...</app-root>
  <dialog-outlet></dialog-outlet>
</body>
</html>
```

建立dialog页面：`angular2-mdl`中有很多方便内建对话框和声明式方式，但我们这里介绍一种定制化程度比较高，也略显复杂的方式。打开一个命令行终端，输入 `ng g c login/register-dialog`。

对话框的模板比较简单，由一个用户名输入框、一个密码输入框、一个重复密码输入框、一个加载状态和一个注册按钮组成。其中我们希望按钮在表单验证正确后才可用，而且在处理注册过程中，按钮应该不可用。在处理注册过程中，应该有一个用户提示。

```html
<form [formGroup]="form">
  <h3 class="mdl-dialog__title">Register</h3>
  <div class="mdl-dialog__content">
    <mdl-textfield
      #firstElement
      type="text"
      label="Username"
      formControlName="username"
      floating-label>
    </mdl-textfield>
    <br/>
    <mdl-textfield
      type="password"
      label="Password"
      formControlName="password"
      floating-label>
    </mdl-textfield>
    <br/>
    <mdl-textfield
      type="password"
      label="Repeat Password"
      formControlName="repeatPassword"
      floating-label>
    </mdl-textfield>
  </div>
  <div class="status-bar">
    <p class="mdl-color-text--primary">{{statusMessage}}</p>
    <mdl-spinner [active]="processingRegister"></mdl-spinner>
  </div>
  <div class="mdl-dialog__actions">
    <button
      type="button"
      mdl-button
      (click)="register()"
      [disabled]="!form.valid || processingRegister"
      mdl-button-type="raised"
      mdl-colored="primary" mdl-ripple>
      Register
    </button>
  </div>
</form>
```

那么对应的组件文件中，我们这次没有使用双向绑定，而是完全采取表单的方式进行。这里介绍几个新面孔：

 - FormBuilder：这个其实是一个工具类，用于快速构造一个表单。
 - FormGroup：顾名思义是一组表单控件，一个表单可以有多个FormGroup，这个常常在比较复杂的表单中使用，用于更好的分类和控制。如果这一组中的任何一个控件验证失败，这个FormGroup的验证状态也是失败的。
 - FormControl：跟踪表单控件的值和验证状态。

Angular2 的FormControl中内置了常用的验证器（Validator），我们在这个例子中除此之外还给出了一个自定义的验证器 `passwordMatchValidator`，用于判断是否两次密码输入的是相同的。

此外呢我们还用到了一个新修饰符 `@HostListener` ，这个修饰符是指我们要监听宿主（这里是浏览器）的某些动作和变化。比如本例中，我们想要用户在按Esc键时关闭对话框，但这个动作并不局限在某个控件上，只要用户点击了Esc我们就关闭对话框，这时我们就得监听宿主的 `keydown.esc` 事件了。

```javascript
//省略掉Import代码段和修饰符代码段
...
export class RegisterDialogComponent{
  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;
  public form: FormGroup;
  public processingRegister = false;
  public statusMessage = '';
  private subscription: Subscription;

  constructor(
    private dialog: MdlDialogReference,
    private fb: FormBuilder,
    private router: Router,
    @Inject('auth') private authService) {
      this.form = fb.group({
        'username':  new FormControl('',  Validators.required),
        'passwords': fb.group({
          'password': new FormControl('', Validators.required),
          'repeatPassword': new FormControl('', Validators.required)
        },{validator: this.passwordMatchValidator})
      });
      // just if you want to be informed if the dialog is hidden
      this.dialog.onHide().subscribe( (auth) => {
        console.log('login dialog hidden');
        if (auth) {
          console.log('authenticated user', auth);
        }
      });
      this.dialog.onVisible().subscribe( () => {
        this.inputElement.setFocus();
      });
  }

  passwordMatchValidator(group: FormGroup){
    this.statusMessage = '';
    let password = group.get('password').value;
    let confirm = group.get('repeatPassword').value;

    // Don't kick in until user touches both fields
    if (password.pristine || confirm.pristine) {
      return null;
    }
    if(password===confirm) {
      return null;
    }
    return {'mismatch': true};
  }

  public register() {
    this.processingRegister = true;
    this.statusMessage = 'processing your registration ...';

    this.subscription = this.authService
      .register(
        this.form.get('username').value,
        this.form.get('passwords').get('password').value)
      .subscribe( auth => {
        this.processingRegister = false;
        this.statusMessage = 'you are registered and will be signed in ...';
        setTimeout( () => {
          this.dialog.hide(auth);
          this.router.navigate(['todo']);
        }, 500);
    }, err => {
      this.processingRegister = false;
      this.statusMessage = err.message;
    });
  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    if(this.subscription !== undefined)
      this.subscription.unsubscribe();
    this.dialog.hide();
  }
}
```

这样做完后，打开浏览器却发现报错了，这是由于我们未引入 `ReactiveFormsModule` 造成的， `FormGroup` 是由 `ReactiveFormsModule` 提供的，因此要在 `src\app\login\login.module.ts` 中引入这个模块。

![未引入ReactiveForms引起的报错][77]

### Restful API的实验

现在还需要完成服务器端的API。和以前类似的，我们需要先实验一下json-server的API，确定各参数可行的条件下再进行编码。由于现在我们需要进行GET以外的操作，所以如果有专业工具来辅助会比较方便，这里推荐一个Chrome App：Postman，可以自行科学上网后在Chrome商店搜索安装。安装后点左上角的应用即可看到Postman了

![Chrome应用：Postman][78]

点击Postman，输入`http://localhost:3000/users`可以看到返回的json数据了

![PostMan的功能区介绍][79]

我们来试验一下新增一个用户，但这个时候我们已经给User的id定义成数字类型了，实在不想改成UUID了，怎么办呢？幸运的是json-server其实是很聪明的，如果在POST时你不给它传入id字段，它会认为这个id是自增长的。在Postman中将HTTP方法设成POST，在Headers中写上 `Content-Type` 和 `application/json`。然后在Body中选择 `raw` ，并写入

```javascript
{
	"username": "testUser",
	"password": "testPassword"
}
```

点击Send后可以看到，新的id自动被写入了，这简直太方便了，也符合一般后端开发的套路。

![用Postman测试自增长ID][80]

知道这点后，我们着手写对应方法就很简单了，首先在 `UserService` 中添加addUser方法。

```javascript
  addUser(user: User): Observable<User>{
    return this.http.post(this.api_url, JSON.stringify(user), {headers: this.headers})
            .map(res => res.json() as User)
            .catch(this.handleError);
  }
```

在AuthService中添加一个register方法，正如我们刚刚实验的那样，我们只需构造一个没有id的User对象即可。当然我们要检查一下用户名是否存在，如果不存在的话才可以注册新用户。这里又碰到一个新的Rx方法 `switchMap`，是用来对原来流中的对象做变换后，发射变换后的流。用一个图示来表示我们下面代码的逻辑是这样的

```
                                  null               null
                                   /                 /
应用filter前：User=====User=====User=====...=====User======...
应用filter后：==================User=====...=====User======...
(把user===null的滤出来)          |                |
应用switchMap后：              Auth======...======Auth=====... 

```

```javascript
  register(username: string, password: string): Observable<Auth> {
    let toAddUser = {
      username: username,
      password: password
    };
    return this.userService
            .findUser(username)
            .filter(user => user === null)
            .switchMap(user => {
              return this.userService.addUser(toAddUser).map(u => {
                this.auth = Object.assign(
                  {},
                  { user: u, hasError: false, errMsg: null, redirectUrl: null}
                );
                this.subject.next(this.auth);
                return this.auth;
              });
            });
  }
```

打开浏览器，检查所有功能是否完整可用，正常情况下点Register你可以看到下面的界面，试着注册一个新用户，开始管理你的待办事项吧。

![完成注册功能的页面][81]

## Angular 2的组件生命周期

![angular 2 的组件生命周期函数][82]

每个组件都有一个被Angular管理的生命周期：Angular创建、渲染控件；创建、渲染子控件；当数据绑定属性改变时做检查；在把控件移除DOM之前销毁控件等等。

Angular提供生命周期的“钩子”（Hook）以便于开发者可以得到这些关键过程的数据以及在这些过程中做出响应的能力。

指令也有类似的生命周期“钩子”函数，除了一些组件特有的函数外。

下面这段代码展现了如何利用 `ngOnInit` 这个钩子函数

```javascript
export class PeekABoo implements OnInit {
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() { this.logIt(`OnInit`); }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
```

钩子函数的接口 （比如上面例子中的 `OnInit` ） 从纯技术的角度来说不是必须的，这是由于Javascript本身没有接口这个概念，而Typescript最终是转换成Javascript的。

Angular其实是通过检查指令或组件的类中是否定义了相关方法来进行的，比如上面例子中即使不实现 `OnInit` 接口，只要定义了 `ngOnInit()` 方法，Angular就会在对应的生命周期调用这个方法。但是还是推荐大家使用接口，因为强类型会给我们带来其他好处。

|函数|应用范围|目的和触发时机|
|---|---|---|
|ngOnChanges|组件和指令|在ngInit之前触发，当Angular设置数据绑定属性或输入性属性时会得到一个包含当前和之前属性值的对象（SimpleChanges）|
|ngOnInit|组件和指令|只调用一次，在设置完输入性属性后，通过这个函数初始化组件或指令|
|ngDoCheck|组件和指令|在ngInit之后，每次检测到变化时触发，可以在此检查一些angular自身无法检查的变化|
|ngAfterContentInit|组件|在ngDoCheck后触发，只调用一次，把要装载到组件视图的内容初始化后|
|ngAfterContentChecked|组件|ngAfterContentInit之后每次ngDoCheck都会在之后触发ngAfterContentChecked，对要装载到组件视图的内容进行检查后|
|ngAfterViewInit|组件|在第一个ngAfterContentInit被调用后触发，只调用一次，在angular初始化视图后响应|
|ngAfterViewChecked|组件|在ngAfterViewInit后及每个ngAfterContentChecked后触发 |
|ngOnDestroy|组件和指令|在组件或指令被销毁前，清理环境，可以在此处取消Observable的订阅|

本节代码：https://github.com/wpcfan/awesome-tutorials/tree/chap07/angular2/ng2-tut

---

# 番外：Rx--隐藏在Angular 2.x中利剑

Rx（Reactive Extension -- 响应式扩展 http://reactivex.io ）最近在各个领域都非常火。其实Rx这个货是微软在好多年前针对C#写的一个开源类库，但好多年都不温不火，一直到Netflix针对Java平台做出了RxJava版本后才在开源社区热度飞速蹿升。

这里还有个小故事，Netflix之所以做RxJava完全是一个偶然。个中缘由是由于Netflix的系统越做越复杂，大家都绞尽脑汁琢磨怎么才能从这些复杂逻辑的地狱中把系统拯救出来。一天，一个从微软跳槽过来的员工和主管说，我们原来在微软做的一个叫Rx的东东挺好的，可以非常简单的处理这些逻辑。主管理都没理，心想微软那套东西肯定又臃肿又不好用，从来没听说过微软有什么好的开源产品。但那位前微软的哥们锲而不舍，非常执着，不断和组内员工和主管游说，宣传这个Rx思想有多牛X。终于有一天，大家受不了了，说，这么着吧，给你个机会，你给大家仔细讲讲这个Rx，我们讨论看看到底适不适合。于是这哥们一顿喷，把大家都惊住了，微软竟然有这么好的东西。但是这东西是.Net的，怎么办呢，那就写一个吧（此处略去高山仰止的3000字）。

八卦讲完，进入正题，那么什么叫响应式编程呢？这里引用一下Wikipedia的解释：

> 英文原文：In computing, reactive programming is a programming paradigm oriented around data flows and the propagation of change. This means that it should be possible to express static or dynamic data flows with ease in the programming languages used, and that the underlying execution model will automatically propagate changes through the data flow.
> 
> 我的翻译：在计算领域，响应式编程一种面向数据流和变化传播的编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。

这都说的什么啊？没关系，概念永远是抽象的，我们来举几个例子。比如说在传统的编程中 `a=b+c`，表示将表达式的结果赋给a，而之后改变b或c 的值不会影响a。但在响应式编程中，a的值会随着b或c的更新而更新。

![传统编程中b,c的变化不会影响a][83]

那么用响应式编程方法写出来就是这个样子，可以看到随着b和c的变化a也会随之变化。

![响应式编程版本的a=b+c][84]

看出来一些不一样的思维方式了吗？响应式编程需要描述数据流，而不是单个点的数据变量，我们需要把数据的每个变化汇聚成一个数据流。如果说传统编程方式是基于离散的点，那么响应式编程就是线。

上面的代码虽然很短，但体现出Rx的一些特点

1. Lamda表达式，对，就是那个看上去像箭头的东西 `=>` 。你可以把它想象成一个数据流的指向，我们从箭头左方取得数据流，在右方做一系列处理后或者输出成另一个数据流或者做一些其他对于数据的操作。
2. 操作符：这个例子中的 `from`, `zip` 都是操作符。Rx中有太多的操作符，从大类上讲分为：创建类操作符、变换类操作符、过滤类操作符、合并类操作符、错误处理类操作符、工具类操作符、条件型操作符、数学和聚集类操作符、连接型操作符等等。

## Rx再体验

还是从例子开始，我们逐渐的来熟悉Rx。
为了更直观的看到Rx的效果，推荐大家去JSBin这个在线Javascript IDE http://jsbin.com 去实验我们下面的练习。这个IDE非常方便，一共有5个功能窗口：HTML、CSS、Javascript、Console和Output

![JSBin在线IDE][85]

首先在HTML中引入Rx类库，然后定义一个id为todo的文本输入框：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script src="https://unpkg.com/@reactivex/rxjs@5.0.0-beta.7/dist/global/Rx.umd.js"></script>
</head>
<body>
<input id="todo" type="text"/>
</body>
</html>
```

在Javascript标签中选择 `ES6/Babel`，因为这样可以直接使用ES6的语法，在文本框中输入以下javascript。在RxJS领域一般在Observable类型的变量后面加上`$`标识这是一个“流变量”（由英文Stream得来，Observable就是一个Stream，所以用`$`标识），不是必须的，但是属于约定俗成。

```javascript
let todo = document.getElementById('todo');
let input$ = Rx.Observable.fromEvent(todo, 'keyup');
input$.subscribe(input => console.log(input.target.value));
```

如果Console窗口默认没有打开的话，请点击 `Console` 标签，然后选中右侧的 `Run with JS` 旁边的Auto-run js复选框。在Output窗口中应该可以看到一个文本输入框，在这个输入框中输入任意你要试验的字符，观察Console

![Console和Output窗口][86]

这几行代码很简单：首先我们得到HTML中id为todo的输入框对象，然后定义一个观察者对象将todo这个输入框的keyup事件转换成一个数据流，最后订阅这个数据流并在console中输出我们接收到的input事件的值。我们从这个例子中可以观察到几个现象：

1. 数据流：你每次在输入框中输入时都会有新的数据被推送过来。本例中，你会发现连续输入“1，2，3，4”，在console的输出是“1，12，123，1234”，也就是说每次keyup事件我们都得到了完整的输入框中的值。而且这个数据流是无限的，只要我们不停止订阅，它就会一直在那里待命。
2. 我们观察的是todo上发生的keyup这个事件，那如果我一直按着某个键不放会怎么样呢？你的猜测是对的，一直按着的时候，数据流没有更新，直到你抬起按键为止（你看到截图里面有2条一模一样的含有多个5的数据是因为我用的Surface Pro截图时的快捷键也被截获了，但由于是控制键所以文字内容没有改变）

![一直按着5不放几秒之后的输出][87]

如果观察的足够仔细的话，你会发现console中输出的值其实是 `input.target.value`，我们观察的对象其实是id为todo的这个对象上发生的keyup事件（`Rx.Observable.fromEvent(todo, 'keyup')`）。那么其实在订阅的代码段中的input其实是keyup事件才对。好，我们看看到底是什么，将 `console.log(input.target.value)` 改写成 `console.log(input)`，看看会怎样呢？是的，我们得到的确实是KeyboardEvent

![事件被输出到Console][88]

不太过瘾？那么我们再来做几个小练习，首先将代码改成下面的样子，其实不用我讲，你应该也可以猜得到，这是要过滤出 `keyCode=32` 的事件，keyCode是Ascii码，那么这就是要把空格滤出来

```javascript
let todo = document.getElementById('todo');
let input$ = Rx.Observable.fromEvent(todo, 'keyup');
input$
  .filter(ev=>ev.keyCode===32)
  .subscribe(ev=>console.log(ev.target.value));
```

结果我们看到了，按123456789都没有反应，直到按了空格

![只在空格键抬起时触发的数据流][89]

你可能一直在奇怪，我们最终只对输入框的值有兴趣，能不能数据流只传值过来呢？当然可以，使用map这个变换类操作符就可以完成这个转换了

```javascript
let todo = document.getElementById('todo');
let input$ = Rx.Observable.fromEvent(todo, 'keyup');
input$
  .map(ev=>ev.target.value)
  .subscribe(value=>console.log(value));
```

map这个操作符做的事情就是允许你对原数据流中的每一个元素应用一个函数，然后返回并形成一个新的数据流，这个数据流中的每一个元素都是原来的数据流中的元素应用函数后的值。比如下面的例子，对于原数据流中的每个数应用一个函数10*x，也就是扩大了10倍，形成一个新的数据流。

![map变换操作符][90]

## 常见操作

最常见的两个操作符我们上面已经了解了，我们继续再来认识新的操作符。类似 `.map(ev=>ev.target.value)` 的场景太多了，以至于rxjs团队搞出来一个专门的操作符来应对，这个操作符就是 `pluck`。这个操作符专业从事从一系列嵌套的属性种把值提取出来形成新的流。比如上面的例子可以改写成下面的代码，效果是一样的。那么如果其中某个属性为空怎么办？这个操作符负责返回一个 `undefined` 作为值加入流中。

```javascript
let todo = document.getElementById('todo');
let input$ = Rx.Observable.fromEvent(todo, 'keyup');
input$
  .pluck('target', 'value')
  .subscribe(value=>console.log(value));
```

下面我们稍微给我们的页面加点料，除了输入框再加一个按钮

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script src="https://unpkg.com/@reactivex/rxjs@5.0.0-beta.7/dist/global/Rx.umd.js"></script>
</head>
<body>
  <input id="todo" type="text"/>
  <button id="addBtn">Add</button>
</body>
</html>
```

在Javascript中我们同样方法得到按钮的DOM对象以及声明对此按钮点击事件的观察者：

```javascript
let addBtn = document.getElementById('addBtn');
let buttonClick$ = Rx.Observable
                      .fromEvent(addBtn, 'click')
                      .mapTo('clicked');
```

由于点击事件没有什么可见的值，所以我们利用一个操作符叫 `mapTo` 把对应的每次点击转换成字符 `clicked`。其实它也是一个 `map` 的简化操作。

![mapTo操作符将每次点击转换成一个][91]

### 合并类操作符

#### combineLatest操作符

既然现在我们已经有了两个流，应该试验一下合并类操作符了，先来试试 `combineLatest`，我们合并了按钮点击事件的数据流和文本框输入事件的数据流，并且返回一个对象，这个对象有两个属性，第一个是按钮事件数据流的值，第二个是文本输入事件数据流的值。也就是说应该是类似 `{ ev: 'clicked', input: '1'}` 这样的结构。

```javascript
Rx.Observable.combineLatest(buttonClick$, input$, (ev, input)=>{
  return {
    ev: ev,
    input: input
  }
})
  .subscribe(value => console.log(value))

```

那看看结果如何，在文本输入框输入1，没反应，再输入2，还是没反应

![CombineLatest实验一：先输入文本][92]

那我们点击一下按钮试试，这回有结果了，但有点没明白为什么是12，输入的数据流应该是： `1，12，...` 但那个1怎么丢了呢？

![CombineLatest实验二：点击按钮][93]

再来文本框输入3，4看看，这回倒是都出来了

![CombineLatest实验二：再次输入][94]

我们来解释一下combineLatest的机制就会明白了，如下图所示，上面的2条线是2个源数据流（我们分别叫它们源1和源2吧），经过combineLatest操作符后产生了最下面的数据流（我们称它为结果流）。

当源1的数据流发射时，源2没有数据，这时候结果流也不会有数据产生，当源2发射第一个数据（图中A）后，combineLatest操作符做的处理是，把A和源1的最近产生的数据（图中2）组合在一起，形成结果流的第一个数据（图中2A）。当源2产生第二个数据（图中B）时，源1这时没有新的数据产生，那么还是用源1中最新的数据（图中2）和源2中最新的数据（图中B）组合。

也就是说 `combineLatest` 操作符其实是在组合2个源数据流中选择最新的2个数据进行配对，如果其中一个源之前没有任何数据产生，那么结果流也不会产生数据。

![CombineLatest操作符][95]

讲到这里，有童鞋会问，原理是明白了，但什么样的实际需求会需要这个操作符呢？其实有很多，我这里只举一个小例子，现在健身这么热，比如说我们做一个简单的BMI计算器，BMI的计算公式是：体重（公斤）／（身高*身高）（米*米）。那么我们在页面给出两个输入框和一个用于显示结果的div：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <script src="https://unpkg.com/@reactivex/rxjs@5.0.0-beta.7/dist/global/Rx.umd.js"></script>
</head>
<body>
  Weight: <input type="number" id="weight"> kg
  <br/>
  Height: <input type="number" id="height"> cm
  <br/>
  Your BMI is <div id="bmi"></div>
</body>
</html>
```

那么在JS中，我们想要达成的结果是只有两个输入框都有值的时候才能开始计算BMI，这时你发现combineLatest的逻辑不要太顺溜啊。

```javascript
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let bmi = document.getElementById('bmi');

let weight$ = Rx.Observable
                .fromEvent(weight, 'input')
                .pluck('target', 'value');

let height$ = Rx.Observable
                .fromEvent(height, 'input')
                .pluck('target', 'value');

let bmi$ = Rx.Observable
              .combineLatest(weight$, height$, (w, h) => w/(h*h/100/100));

bmi$.subscribe(b => bmi.innerHTML=b);
```

![简单的BMI计算器][96]

#### zip操作符

除了 `combineLatest` ，Rxjs还提供了多个合并类的操作符，我们再试验一个 `zip` 操作符。 `zip` 和 `combineLatest` 非常像，但重要的区别点在于 `zip` 严格的需要多个源数据流中的每一个的相同顺序的元素配对。

比如说还是上面的例子，`zip` 要求源1的第一个数据和源2的第一个数据组成一对，产生结果流的第一个数据；源1的第二个数据和源2的第二个数据组成一对，产生结果流的第二个数据。而 `combineLatest` 不需要等待另一个源数据流产生数据，只要有一个产生，结果流就会产生。 

![zip操作符有对齐的特性][97]

`zip` 这个词在英文中有拉链的意思，记住这个有助于我们理解这个操作符，就像拉链一样，它需要拉链两边的齿一一对应。从效果角度上讲，这个操作符有减缓发射速度的作用，因为它会等待合并序列中最慢的那个。

下面我们还是看个例子，在我写第七章的使用Bing Image API变换背景时，我最开始的想法是取得图片数组后，把这个数组中的元素每隔一段时间发送出去一个，这样组件端就不用关心图片变化的逻辑，只要服务发射一个地址，我就加载就行了。我就是用zip来实现的，我们在这个逻辑中有2个源数据流：基于一个数组生成的数据流以及一个时间间隔数据流。前者的发射速度非常快，后者则速度均匀，我们希望按后者的速度对齐前者，以达到每隔一段时间发射前者的数据的目的。

```javascript
   yieldByInterval(items, time) {
     return Observable.from(items).zip(
       Observable.interval(time),
       (item, index) => item
     );
   }
```

为了更好的让大家体会，我改写一个纯javascript版本，可以在JSBin上面直接跑的，它的本质逻辑和上面讲的相同：

```javascript
let greetings = ['Hello', 'How are you', 'How are you doing'];
let time = 3000;
let item$ = Rx.Observable.from(greetings);
let interval$ = Rx.Observable.interval(time);

Rx.Observable.zip(
    item$,
    interval$,
    (item, index) => {
      return {
        item: item,
        index: index
      }
    }
  )
  .subscribe(result => 
             console.log(
              'item: ' + result.item + 
              ' index: ' + result.index + 
              ' at ' + new Date()));

```

我们看到结果如下图所示，每隔3000毫秒，数组中的欢迎文字被输出一次。

![zip操作符示例][98]

这两个操作符应该是Rx中最常用的2个合并类操作符了。其他的操作符大家可以去 http://reactivex.io/documentation/operators.html 查看，注意不是所有的操作符RxJS都有。而且RxJS 5.0 目前整体的趋势是减少不必要的以及冗余的操作符，所以我们只介绍最常用的一些操作符。

### 创建类操作符

通常来讲，Rx团队不鼓励新手自己从0开始创建Observable，因为状态太复杂，会遗漏一些问题。Rx鼓励的是通过已有的大量创建类转换操作符来去建立Observable。我们其实之前已经见过一些了，包括 `from` 和 `fromEvent`。

#### from操作符

`from` 可以支持从数组、类似数组的对象、Promise、iterable 对象或类似Observable的对象（其实这个主要指ES2015中的Observable）来创建一个Observable。

这个操作符应该是可以创建Observable的操作符中最常使用的一个，因为它几乎可以把任何对象转换成Observable。

```javascript
var array = [10, 20, 30];
var result$ = Rx.Observable.from(array);
result$.subscribe(x => console.log(x));
```

![from转换一个数组为Observable][99]

#### fromEvent操作符

这个操作符是专门为事件转换成Observable而制作的，非常强大且方便。对于前端来说，这个方法用于处理各种DOM中的事件再方便不过了。

```javascript
var click$ = Rx.Observable.fromEvent(document, 'click');
click$.subscribe(x => console.log(x));
```

![fromEvent转换事件为Observable][100]

#### fromEventPattern

我们经常会遇到一些已有的代码，这些代码和类库往往不受我们的控制，无法重构或代价太大。我们需要在这种情况下可以利用Rx的话，就需要大量的可以从原有的代码中可以转换的方法。addXXXHandler和removeXXXHandler就是大家以前经常使用的一种模式，那么在Rx中也提供了对应的方法可以转换，那就是

```javascript
function addClickHandler(handler) {
  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  document.removeEventListener('click', handler);
}

var click$ = Rx.Observable.fromEventPattern(
  addClickHandler,
  removeClickHandler
);
click$.subscribe(x => console.log(x));
```

![fromEventPattern专门处理addHandler/removeHandler][101]

#### defer操作符

`defer` 是直到有订阅者之后才创建Observable，而且它为每个订阅者都会这样做，也就是说其实每个订阅者都是接收到自己的单独数据流序列。

![defer操作符为每个订阅者单纯创建序列][102]

```javascript
Rx.Observable.defer(()=>{
  let result = doHeavyJob();
  return result?'success':'failed';
})
  .subscribe(x=>console.log(x))

function doHeavyJob(){
  setTimeout(function() {console.log('doing something');}, 2000);
  return true;
}
```

![defer惰性创建Observable][103]

#### Interval

Rx提供内建的可以创建和计时器相关的Observable方法，第一个是Interval，它可以在指定时间间隔发送整数的自增长序列。

![Interval在指定时间间隔发送整数序列][104]

例如下面代码，我们每隔500毫秒发送一个整数，这个数列是无穷的，我们取前三个好了：

```javascript
let source = Rx.Observable
    .interval(500 /* ms */)
    .take(3);

let subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });
```

那么输出是

![Interval每隔500毫秒发送一个整数，取前三个的结果][105]

这里大家可能注意到我们没有采用箭头的方式，而是用传统的写法，写了 `function(x){...}` ，哪种方式其实都可以，箭头方式会更简单。

另一个需要注意的地方是，在subscribe方法中我们多了2个参数：一个处理异常，一个处理完成。Rx认为所有的数据流会有三个状态：next，error和completed。这三个函数就是分别处理这三种状态的，当然如果我们不写某个状态的处理，也就意味着我们认为此状态不需要特别处理。而且有些序列是没有completed状态的，因为是无限序列。本例中，如果我们去掉 `.take(3)` 那么completed是永远无法触发的。

#### Timer

下面我们来看看Timer，一共有2种形式的Timer，一种是指定时间后返回一个序列中只有一个元素（值为0）的Observable。

```javascript
//这里指定一开始的delay时间
//也可以输入一个Date，比如“2016-12-31 20:00:00”
//这样变成了在指定的时间触发
let source = Rx.Observable.timer(2000);

let subscription = source.subscribe(
    x => console.log('Next: ' + x),
    err => console.log('Error: ' + err),
    () => console.log('Completed'));
```

![不指定间隔时间时，Timer只发射1个元素][106]

第二种Timer很类似于Interval。除了第一个参数是一开始的延迟时间，第二个参数是间隔时间，也就是说，在一开始的延迟时间后，每隔一段时间就会返回一个整数序列。这个和Interval基本一样除了Timer可以指定什么时间开始（延迟时间）。

```javascript
var source = Rx.Observable.timer(2000, 100)
    .take(3);
    
var subscription = source.subscribe(
    x => console.log('Next: ' + x),
    err => console.log('Error: ' + err),
    () => console.log('Completed'));
```

![第二种Timer和Interval很类似][107]

当然还有其他创建类的操作符，大家可以去 http://reactivex.io/documentation/operators 查阅自行试验一下。

### 过滤类操作符

之前我们见过好几个过滤类操作符：filter，distinct，take和debounce。

#### filter

Filter操作只允许数据流中满足其predicate测试的元素发射出去，这个predicate函数接受3个参数：

1. 原始数据流元素
2. 索引，这个是指该元素在源数据流中的位置（从0开始）
3. 源Observable对象

如下的代码将0-5中偶数过滤出来：

```javascript
let source = Rx.Observable.range(0, 5)
  .filter(function (x, idx, obs) {
    return x % 2 === 0;
  });

let subscription = source.subscribe(
    x => console.log('Next: ' + x),
    err => console.log('Error: ' + err),
    () => console.log('Completed'));
```

![Filter是可以依据一个函数来过滤数据流][108]

#### debounceTime

对于一些发射频率比较高的数据流，我们有时会想给它安个“整流器”。比如在一个搜索框中，输入一些字符后希望出现一些搜索建议，这是个非常好的功能，很多时候可以减少用户的输入。

但是由于这些搜索建议需要联网完成数据的传递，如果太频繁操作的话，对于用户的数据流量和服务器的性能承载都是有副作用的。所以我们一般希望在用户连续快速输入时不去搜索，而是等待有相对较长的间隔时再去搜索。

下面的代码从输入上做了这样的一个“整流器”，滤掉了间隔时间小于400毫米的输入事件（输入本身不受影响），只有用户出现较明显的停顿时才把输入值发射出来。

```javascript
let todo = document.getElementById('todo');
let input$ = Rx.Observable.fromEvent(todo, 'keyup');
input$
  .debounceTime(400)
  .subscribe(input => console.log(input.target.value));
```

快速输入“12345”，在这种情况下得到的是一条数据

![快速输入12345得到一条数据][109]

但如果不应用debounceTime，我们得到5条记录

![不应用debounceTime的结果][110]

其他的过滤类操作符也很有趣，比如Distinct就是可以把重复的元素过滤掉，skip就可以跳过几个元素等等，可以自行研究，这里就不一一举例了。

Rx的操作符实在太多了，我只能列举一些较常见的给大家介绍一下，其他的建议大家去官方文档学习。

## Angular2中的内建支持

Angular2中对于Rx的支持是怎么样的呢？先试验一下吧，简单粗暴的一个组件模版页面

```html
<p>
  {{clock}}
</p>
```

和在组件中定义一个简单粗暴的成员变量

```javascript
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent{
  clock = Observable.interval(1000);

  constructor() { }

}

```

搞定！打开浏览器，显示了一个 `[object Object]`，晕倒。

![直接把Observable对象显示在页面中的效果：啥也没有][111]

当然经过前面的学习，我们知道Observable是个异步数据流，我们可以把代码改写一下，在订阅方法中去赋值就一切ok了。

```javascript
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent{
  clock: number;

  constructor() { 
    Observable.interval(1000)
      .subscribe(value => this.clock= value)
  }

}

```

![利用subscribe赋值成功显示的效果][112]

但是这样做还是有一个问题，我们加入一个do操作符，在每次订阅前去记录就会发现一些问题。当我们离开页面再回来，每次进入都会创建一个新的订阅，，但原有的没有释放。

```javascript
Observable.interval(1000)
      .do(_ => console.log('observable created'))
      .subscribe(value => this.clock= value);
```

观察console中在‘observable created’之前的数字和页面显示的数字，大概是页面每增加1，console的数字增加2，这说明我们后面运行着2个订阅。

![原有的订阅没有释放掉][113]

原因是我们没有在页面销毁时取消订阅，那么我们利用生命周期的onDestroy来完成这一步：

```javascript
import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnDestroy{
  clock: number;
  subscription: Subscription;

  constructor() { 
    this.subscription = Observable.interval(1000)
      .do(_ => console.log('observable created'))
      .subscribe(value => this.clock= value);
  }

  ngOnDestroy(){
    if(this.subscription !== undefined)
      this.subscription.unsubscribe();
  }
}

```

现在再来观察，同样进入并离开再进入页面后，页面每增加1，console也会增加1。

![通过onDestory中unsubscribe来防止内存泄露][114]

### Async管道

现在看起来还是挺麻烦的，有没有更简单的方法呢？答案当然是肯定的：Angular2提供一个管道叫：async，有了这个管道，我们无需管理琐碎的取消订阅，以及订阅了。

让我们回到最开始的简单粗暴版本，模版文件稍微改写一下

```html
<p>
  {{ clock | async }}
</p>
```

这个 `| async` 是什么东东？async是Angular2提供的一种转换器，叫管道（Pipe）。

每个应用开始的时候差不多都是一些简单任务：获取数据、转换它们，然后把它们显示给用户。一旦取到数据，我们可以把它们原始值的结果直接显示。 但这种做法很少能有好的用户体验。比如，几乎每个人都更喜欢简单的日期格式，几月几号星期几，而不是原始字符串格式 —— Fri Apr 15 1988 00:00:00 GMT-0700 (Pacific Daylight Time)。通过管道我们可以把不友好的值转换成友好的值显示在页面中。

Angular内置了一些管道，比如DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe和PercentPipe。它们全都可以直接用在任何模板中。Async管道也是内置管道之一。

当然这样在页面写完管道后，我们的组件版本也回归了简单粗暴版本:

```javascript
import { Component, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  clock = Observable.interval(1000).do(_=>console.log('observable created'));

  constructor() { }

}

```

现在打开浏览器，看一下页面的效果

![使用async pipe的版本][115]

你做这个试验时很可能会遭遇一个错误，说async pipe无法找到

![aync pipe无法找到的错误][116]

这种情况一般是由于CommonModule没有导入造成的，遇到这种错误，请导入CommonModule。

### Rx版本的Todo

这一节我们通过改造我们的待办事项应用来进一步体会Rx的威力。首先我们把TodoService中原来采用的Promise方式都替换成Observable的方式。

在进行改动之前，我们来重新分析一下逻辑：我们原有的实现方式中，组件中保留了一个todos数组的本地拷贝，服务器API逻辑在Service中完成。其实组件最好不关心逻辑，即使是本地拷贝的逻辑，也不应该放到组件中。组件本身的数据都是监听Service中的数据变化而得到的。

那么我们应该在Service中建立本地的内存“数据库”，我们叫它 `dataStore` 吧。这个“数据库”中只有一个“表”：todos。

```javascript
//TodoService.ts
  private dataStore: {  // todos的内存“数据库”
    todos: Todo[]
  };
```

为了让组件可以监听到这个数据的变化，我们需要一个Observable，但是在Service中我们还需要写入变化，这样的话，我们选择一个既是Observable又是Observer的对象，在Rx中，Subject就是这样的对象：

```javascript
//TodoService.ts
...
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class TodoService {
    ...
    private _todos: BehaviorSubject<Todo[]>; 
    constructor(private http: Http, @Inject('auth') private authService) {
        this.dataStore = { todos: [] };
        this._todos = new BehaviorSubject<Todo[]>([]);
    }
    ...
  get todos(){
    return this._todos.asObservable();
  }
  ...
```

我们使用了一个BehaviorSubject，它的一个特点是存储了发射的最新的值，这样无论什么订阅者订阅时都会得到“当前值”。我们之前通过ReplaySubject也实现过类似功能，但Replay是可以缓存多个值的。

我们在构造中分别初始化了 `dataStore` 和 `_todos`，然后提供了一个get的属性方法让其他订阅者可以订阅todos的变化。在这个属性方法中，我们把Subject转成了Observable（通过`.asObservable()`）。

那么我们如何写入变化呢？拿增加一个代办事项（ `addTodo(desc:string)` ）的逻辑来看一下吧。

```javascript
  addTodo(desc:string){
    let todoToAdd = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId: this.userId
    };
    this.http
      .post(this.api_url, JSON.stringify(todoToAdd), {headers: this.headers})
      .map(res => res.json() as Todo)
      .subscribe(todo => {
        this.dataStore.todos = [...this.dataStore.todos, todo];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }
```

由于 `this.http.post` 返回的本身就是Observable，所以我们不再需要 `.toPromise()` 这个方法了。直接用 `map` 将response的数据流转换成Todo的数据流，然后更新本地数据，然后使用Subject的 `next` 方法（`this._todos.next`）把本地数据写入数据流。这个next的含义就是让推送一个新元素到数据流。

按照这种逻辑，我们把整个 `TodoService` 改造成下面的样子。

```javascript
import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UUID } from 'angular2-uuid';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Todo } from '../domain/entities';

@Injectable()
export class TodoService {

  private api_url = 'http://localhost:3000/todos';
  private headers = new Headers({'Content-Type': 'application/json'});
  private userId: string;
  private _todos: BehaviorSubject<Todo[]>; 
  private dataStore: {  // todos的内存“数据库”
    todos: Todo[]
  };

  constructor(private http: Http, @Inject('auth') private authService) {
    this.authService.getAuth()
      .filter(auth => auth.user != null)
      .subscribe(auth => this.userId = auth.user.id);
    this.dataStore = { todos: [] };
    this._todos = new BehaviorSubject<Todo[]>([]);
  }

  get todos(){
    return this._todos.asObservable();
  }

  // POST /todos
  addTodo(desc:string){
    let todoToAdd = {
      id: UUID.UUID(),
      desc: desc,
      completed: false,
      userId: this.userId
    };
    this.http
      .post(this.api_url, JSON.stringify(todoToAdd), {headers: this.headers})
      .map(res => res.json() as Todo)
      .subscribe(todo => {
        this.dataStore.todos = [...this.dataStore.todos, todo];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }
  // PATCH /todos/:id 
  toggleTodo(todo: Todo) {
    const url = `${this.api_url}/${todo.id}`;
    const i = this.dataStore.todos.indexOf(todo);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
      .patch(url, JSON.stringify({completed: !todo.completed}), {headers: this.headers})
      .subscribe(_ => {
        this.dataStore.todos = [
          ...this.dataStore.todos.slice(0,i),
          updatedTodo,
          ...this.dataStore.todos.slice(i+1)
        ];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }
  // DELETE /todos/:id
  deleteTodo(todo: Todo){
    const url = `${this.api_url}/${todo.id}`;
    const i = this.dataStore.todos.indexOf(todo);
    this.http
      .delete(url, {headers: this.headers})
      .subscribe(_ => {
        this.dataStore.todos = [
          ...this.dataStore.todos.slice(0,i),
          ...this.dataStore.todos.slice(i+1)
        ];
        this._todos.next(Object.assign({}, this.dataStore).todos);
      });
  }
  // GET /todos
  getTodos(){
    this.http.get(`${this.api_url}?userId=${this.userId}`)
      .map(res => res.json() as Todo[])
      .do(t => console.log(t))
      .subscribe(todos => this.updateStoreAndSubject(todos));
  }
  // GET /todos?completed=true/false
  filterTodos(filter: string) {
    switch(filter){
      case 'ACTIVE': 
        this.http
          .get(`${this.api_url}?completed=false&userId=${this.userId}`)
          .map(res => res.json() as Todo[])
          .subscribe(todos => this.updateStoreAndSubject(todos));
          break;
      case 'COMPLETED': 
        this.http
          .get(`${this.api_url}?completed=true&userId=${this.userId}`)
          .map(res => res.json() as Todo[])
          .subscribe(todos => this.updateStoreAndSubject(todos));
          break;
      default:
        this.getTodos();
    }
  }
  toggleAll(){
    this.dataStore.todos.forEach(todo => this.toggleTodo(todo));
  }
  clearCompleted(){
    this.dataStore.todos
      .filter(todo => todo.completed)
      .forEach(todo => this.deleteTodo(todo));
  }
  private updateStoreAndSubject(todos) {
    this.dataStore.todos = [...todos];
    this._todos.next(Object.assign({}, this.dataStore).todos);
  }
}

```

接下来我们看一下 `src/app/todo/todo.component.ts`，由于大部分逻辑已经在 `TodoService` 中实现了，我们可以删除客户端的逻辑代码：

```javascript
import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from './todo.service';
import { Todo } from '../domain/entities';

import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos : Observable<Todo[]>;

  constructor(
    @Inject('todoService') private service,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.params
      .pluck('filter')
      .subscribe(filter => {
        this.service.filterTodos(filter);
        this.todos = this.service.todos;
      })
  }
  addTodo(desc: string) {
    this.service.addTodo(desc);
  }
  toggleTodo(todo: Todo) {
    this.service.toggleTodo(todo);
  }
  removeTodo(todo: Todo) {
    this.service.deleteTodo(todo);
  } 
  toggleAll(){
    this.service.toggleAll();
  }
  clearCompleted(){
    this.service.clearCompleted();
  }
}

```

可以看到 `addTodo` 、 `toggleTodo` 、 `removeTodo` 、`toggleAll` 和 `clearCompleted` 基本上已经没有业务逻辑代码了，只是简单调用service的方法而已。

还有一个比较明显的变化是，我们接收路由参数的方式也变成了Rx的方式，之前我们提过，像Angular2这种深度嵌合Rx的平台框架，几乎处处都有Rx的影子。

当然，我们的组件中的todos变成了一个Observable，在构造时直接把Service的属性方法todos赋值上去了。这样改造后，我们只需改动模版的两行代码就大功告成了，那就是替换原有的`="todos..."`为 `= " todos | async"`。

```html
<div>
  <app-todo-header
    placeholder="What do you want"
    (onEnterUp)="addTodo($event)" >
  </app-todo-header>
  <app-todo-list
    [todos]="todos | async"
    (onToggleAll)="toggleAll()"
    (onRemoveTodo)="removeTodo($event)"
    (onToggleTodo)="toggleTodo($event)"
    >
  </app-todo-list>
  <app-todo-footer
    [itemCount]="todos?.length | async"
    (onClear)="clearCompleted()">
  </app-todo-footer>
</div>

```

启动浏览器看看吧，一切功能正常，代码更加简洁，逻辑更加清楚。

![改造成的响应式Todo，所有功能一切正常][117]

## 小结

我们的Angular学习之旅从零开始到现在，完整的搭建了一个小应用。相信大家现在应该对Angular2有一个大概的认识了，而且也可以参与到正式的开发项目中去了。但Angular2作为一个完整框架，有很多细节我们是没有提到的，大家可以到官方文档 https://angular.cn/ 去查找和学习。

本章代码：https://github.com/wpcfan/awesome-tutorials/tree/master/angular2/ng2-tut


# 第八章：查缺补漏大合集(上)

这一章其实是我在前七章读者评论和私信交流时发现很多点我是要么漏掉了，要么自己理解有误。那这第八和第九章就来做一个小总结吧。本章我们讨论如何在Angular2中引入第三方JS库、惰性加载路由和子路由。

## 第三方JS类库的引入

这个是许多人的困惑，我们在Angular2中使用了TypeScript，但大量的类库是没有TypeScript怎么办？其实不用担心，非常简单。但在讲方法前，我们最好还是理解一下背景。

### 为什么JS不能直接使用

由于TypeScript是一个强类型语言，所以对于第三方类库，我们需要知道它们的JavaScript里面的暴露给外部使用的这些对象和方法的类型定义是什么。

这个类型定义文件长什么样呢？我们来看一看，你可以进入工程下的node_modules中的 `@angular/common/src/directives/ng_class.d.ts`:

```javascript

import { DoCheck, ElementRef, IterableDiffers, KeyValueDiffers, Renderer } from '@angular/core';
/**
 * @ngModule CommonModule
 *
 * @whatItDoes Adds and removes CSS classes on an HTML element.
 *
 * @description
 *
 * The CSS classes are updated as follows, depending on the type of the expression evaluation:
 * - `string` - the CSS classes listed in the string (space delimited) are added,
 * - `Array` - the CSS classes declared as Array elements are added,
 * - `Object` - keys are CSS classes that get added when the expression given in the value
 *              evaluates to a truthy value, otherwise they are removed.
 *
 * @stable
 */
export declare class NgClass implements DoCheck {
    private _iterableDiffers;
    private _keyValueDiffers;
    private _ngEl;
    private _renderer;
    private _iterableDiffer;
    private _keyValueDiffer;
    private _initialClasses;
    private _rawClass;
    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer);
    klass: string;
    ngClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    ngDoCheck(): void;
    private _cleanupClasses(rawClassVal);
    private _applyKeyValueChanges(changes);
    private _applyIterableChanges(changes);
    private _applyInitialClasses(isCleanup);
    private _applyClasses(rawClassVal, isCleanup);
    private _toggleClass(klass, enabled);
}

```

可以看到这个文件其实就是用来做类型定义声明的，我们一般把这种以 .d.ts 后缀结尾的文件叫做类型定义文件（Type Definition）。有了这个声明定义，我们就可以在TypeScript中使用了。这个文件看起来也挺麻烦的，事实上真正需要你自己动手写的类库很少。我们来看一下一般的集成第三方类库的过程是什么样子的。

### 标准的JS库引入方法

我们拿百度的echarts （https://github.com/ecomfe/echarts）图表类库的集成来说明一下。我们先安装其npm包，在命令行窗口输入 `npm install --save echarts` ，然后我们安装其类型定义文件，在命令行窗口输入 `npm install --save-dev @types/echarts` 。然后。。就没有然后了。这么简单吗？是滴。

注意两件事，首先我们安装时使用了 `--save-dev` 开关，因为这个类型定义文件只对开发时有用，它并不是我们工程的依赖，只是为了编写时的方便。
第二件事我们使用了 `@types/echarts` 这样一个有点怪的名称，其实是这样的，微软维护了一个海量的类型定义数据中心，这个就是 `@types`。那么我们为了寻找echarts就会在 `@types` 这个目录下搜索它的二级目录。

这样安装之后，你可以在本地工程目录下的 `node_modules/@types/echarts/index.d.ts` 找到echarts的定义：

```javascript
// Type definitions for echarts
// Project: http://echarts.baidu.com/
// Definitions by: Xie Jingyang <https://github.com/xieisabug>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ECharts {
    function init(dom:HTMLDivElement|HTMLCanvasElement, theme?:Object|string, opts?:{
        devicePixelRatio?: number
        renderer?: string
    }):ECharts;

   …//此处省略大部分声明，可以查阅本地文件
}

declare module "echarts" {
    export = ECharts;
}
```

一般情况下，到这步就结束了，此时我们可以试验一下是否可以使用了，在一个组件文件中尝试引入echarts，如果你看到了智能提示中有你希望引入的类库中的方法或对象，那就一切顺利，接下来就可以正常使用这个类库了。

![引入echarts看到智能提示][118]

### 引入库的特殊情况

但有的时候，我们执行第二步 `npm install --save-dev @types/echarts` 时，会发现没有找到对应的类型定义文件。这个时候怎么办呢？
这时候要分两种情况看，首先应该去检查一下node_modules目录中的你要使用的类库子目录（本例中是echarts）中是否有类型定义文件，因为有的类库会把类型定义文件直接打包在npm的包中。比如我们前几章接触的angular-uuid，这个类库其实就是直接把类型定义文件打包在npm package中的。看下图，如果是这种情况，那么我们什么都不需要做，直接使用就好了。

![有的类库直接将类型定义打包在npm中][119]

当然还有一种情形就是，这样也找不到，或者这个类库是我们的团队已有的、自己写的等等情况。这时候就得自己写一下，也很简单，在 `src/typings.d.ts` 中加上一行:

```javascript
declare module 'echarts';
```

然后在要使用此类库的组件中引入：

```javascript
import * as echarts from 'echarts';
```

后面就可以正常使用了，当然这种添加方式是没有智能提示和自动完成的，你需要自己保证调用的正确性。如果觉得不爽，还是希望有提示、类型检查等等，那就得自己写一个类型定义文件了，可以参考 https://basarat.gitbooks.io/typescript/content/docs/types/ambient/d.ts.html 去编写自己的类型定义文件。

## 惰性路由和子路由

### 惰性路由

在需求和功能不断添加和修改之后，应用的尺寸将会变得更大。在某一个时间点，我们将达到一个顶点，应用 将会需要过多的时间来加载。这会带来一定的性能问题。
如何才能解决这个问题呢？Angular2引进了异步路由，我们可以惰性加载指定的模块或组件。这样给我们带来了下列好处：

- 可以继续开发我们的新功能，但不再增加初始加载文件的大小。
- 只有在用户请求时才加载特定模块。
- 为那些只访问应用程序某些区域的用户加快加载速度

还是我们一起打造一个例子说明一下，之后大家就可以清楚的理解这个概念了。我们新建一个叫Playground的module。打开一个命令行窗口，输入 `ng g m playgorund` ，这样Angular CLI非常聪明的帮我们建立了PlaygroundModule，不光如此，它还帮我们建立了一个PlaygroundComponent。因为一般来说，我们新建一个模块肯定会至少有一个组件的。
由于要做惰性加载，我们并不需要在根模块AppModule中引入这个模块，所以我们检查一下根模块 `src/app/app.module.ts` 中是否引入了PlaygroundModule，如果有，请去掉。
首先为PlaygroundModule建立自己模块的路由，我们如果遵守Google的代码风格建议的话，那么就应该为每个模块建立独立的路由文件。

```javascript
const routes: Routes = [
  { path: '', component: PlaygroundComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }
```

在src/app/app-routing.module.ts中我们要添加一个惰性路由指向PlaygroundModule

```javascript
import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './core/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
…
  {
    path: 'playground',
    loadChildren: 'app/playground/playground.module#PlaygroundModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
```

在这段代码中我们看到一个新面孔，`loadChildren` 。路由器用 `loadChildren` 属性来映射我们希望惰性加载的模块文件，这里是 `PlaygroundModule` 。路由器将接收我们的 `loadChildren` 字符串，并把它动态加载进 `PlaygroundModule` ，它的路由被动态合并到我们的配置中，然后加载所请求的路由。但只有在首次加载该路由时才会这样做，后续的请求都会立即完成。
`app/playground/playground.module#PlaygroundModule`  这个表达式是这样的规则：模块的路径#模块名称
现在我们回顾一下，在应用启动时，我们并没有加载PlaygroundModule，因为在AppModule中没有它的引用。但是当你在浏览器中手动输入  `http://localhost:4200/playground` 时，系统在此时加载 `PlaygroundModule`。

### 子路由

程序复杂了之后，一层的路由可能就不会够用了，在一个模块内部由于功能较复杂，需要再划分出二级甚至更多级别的路径。这种情况下我们就需要Angular2提供的一个内建功能叫做：子路由。
我们向来认为例子是最好的说明，所以还是来做一个小功能：现在我们需要对一个叫playground的路径下添加子路由，子路由有2个：one和two。其中one下面还有一层路径叫three。形象的表示一下，就像下面的结构一样。

```
/playground---|
              |/one
              |--------|three
              |/two
```

那么我们还是先在项目工程目录输入 `ng g c playground/one`，然后再执行 `ng g c playground/two` ，还有一个three，所以再来：`ng g c playground/three` 。
现在我们有了三个组件，看看怎么处理路由吧，原有的模块路由文件如下：

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';

const routes: Routes = [
  { 
    path: '', 
    component: PlaygroundComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }
```

我们首先需要在模块的根路由下添加one和two，Angular2在路由定义数组中对于每个路由定义对象都有一个属性叫做children，这里就是指定子路由的地方了。所以在下面代码中我们把one和two都放入了children数组中。

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  { 
    path: '', 
    component: PlaygroundComponent,
    children: [
      {
        path: 'one',
        component: OneComponent,
      },
      {
        path: 'two',
        component: TwoComponent
      }
    ] 
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }
```

这只是定义了路由数据，我们还需要在某个地方显示路由指向的组件，那么这里面我们还是在PlaygroundComponent的模版中把路由插座放入吧。

```html
<ul>
  <li><a routerLink="one">One</a></li>
  <li><a routerLink="two">Two</a></li>
</ul>

<router-outlet></router-outlet>
```

现在我们试验一下，打开浏览器输入 `http://localhost:4200/playground` 我们看到两个链接，你可以分别点一下，观察地址栏。应该可以看到，点击one时，地址变成 `http://localhost:4200/playground/one` 在我们放置路由插座的位置也会出现one works。当然点击two时也会有对应的改变。这说明我们的子路由配置好用了！

![子路由的小例子][120]

当然有的时候还需要更深的层级的子路由，其实也很简单。就是重复我们刚才做的就好，只不过要在对应的子路由节点上。下面我们还是演练一下，在点击one之后我们希望到达一个有子路由的页面（也就是子路由的子路由）。于是我们在OneComponent节点下又加了children，然后把ThreeComponent和对应的路径写入

```javascript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  { 
    path: '', 
    component: PlaygroundComponent,
    children: [
      {
        path: 'one',
        component: OneComponent,
        children: [
          {
            path: 'three',
            component: ThreeComponent
          }
        ]
      },
      {
        path: 'two',
        component: TwoComponent
      }
    ] 
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }
```

当然，还是一样，我们需要改造一下OneComponent的模版以便于它可以显示子路由的内容。改动 `src/app/playground/one/one.component.html`  为如下内容

```html
<p>
  one works!
</p>
<ul>
  <li><a routerLink="three">Three</a></li>
</ul>
<router-outlet></router-outlet>
```

这回我们看到如果在浏览器中输入 `http://localhost:4200/playground/one/three` 会看到如图所示的结果：

![更多层级的子路由][121]

经过这个小练习，相信再复杂的路由你也可以搞定了。但是我要说一句，个人不是很推荐过于复杂的路由（复杂这里指层级嵌套太多）。层级多了之后意味着这个模块太大了，负责了过多它不应该负责的事情。也就是说当要使用子路由时，一定多问自己几遍，这样做是必须的吗？可以用别的方式解决吗？是不是我的模块改拆分了？

# 第九章：查缺补漏大合集(下)

## Angular2 动画再体验

### State和Transition

我写文章的习惯是先试验再理论，所以我们接下来梳理下Angular2提供的动画技能。还是从最简单的例子开始，一个非常简单的模版：

```html
<div class="traffic-light"></div>
```

同样非常简单的样式（其实就是画一个小黑块）：

```css
.traffic-light{  
  width: 100px;  
  height: 100px;  
  background-color: black;
}
```

现在的效果就是这个样子，如图所示，一点都不酷啊，没关系，我们一点点来，越简单的越容易弄懂概念。

![一点也不酷的小黑块][122]

下面我们为组件添加一个animations的元数据描述：

```javascript
import { 
  Component, 
  trigger,
  state,
  style
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green' 
      }))
    ])
  ]
})
export class PlaygroundComponent {
  
  constructor() { }

}
```

我们注意到animations中接受的是一个数组，这个数组里面我们使用了一个叫trigger的函数，trigger接受的第一个参数是触发器的名字，第二个参数是一个数组。这个数组是由一种叫state的函数和叫transition的函数组成的。

那么什么是state？state表示一种状态，当这种状态激活时，state所附带的样式就会附着在应用trigger的那个控件上。transition又是什么呢？tranistion描述了一系列动画的步骤，在状态迁移时这些动画步骤就会执行。
我们现在的这个版本中暂时只有state而没有transition，让我们先来看看效果，当然在可以看到效果前我们先要把这个trigger应用到某个控件上。那在我们的例子里就是模版中的那个div了。

```html
<div
    [@signal]="'go'"
    class="traffic-light">
</div>
```

返回浏览器，你会发现那个小黑块变成小绿块了，如图所示

![小黑块变成小绿块](https://dn-mhke0kuv.qbox.me/c572451e47f11c47b13b.gif)

这说明什么？我们的state的样式附着在div上了。为什么呢？因为 [@signal]="'go'" 定义了trigger的状态是go。但这一点也不酷是吗？是的，暂时是这样，还是那句话，不要急。
接下来，我们再加一个状态 stop，在stop激活时我们要把小方块的背景色设为红色，那么我们需要把animations改成下面的样子：

```javascript
animations: [
    trigger('signal', [
      state('go', style({
        'background-color': 'green' 
      })),
      state('stop', style({
          'background-color':'red'
      }))
    ])
  ]

```

同时我们需要给模板加两个按钮Go和Stop。现在的模版看起来是下面的样子

```html
<div
  [@signal]="signal"
  class="traffic-light">
</div>
<button (click)="onGo()">Go</button>
<button (click)="onStop()">Stop</button>

```

当然你看得到，我们点击按钮时需要处理对应的点击事件。在这里我们希望点击Go时，方块变绿，点击Stop时方块变红。如果要达成这个目的，我们需要一个叫signal的成员变量，在点击的处理函数中更改相应的状态。

```javascript
export class PlaygroundComponent {

  signal: string;

  constructor() { }

  onGo(){
    this.signal = 'go';
  }
  onStop(){
    this.signal = 'stop';
  }
}

```

现在打开浏览器，试验一下，我们会发现点击Go变绿，而点击Stop变红。但是还是没动起来啊，是的，这是因为我们还没加transition呢，我们只需把animations改写一下，你分别点Go和Stop就能看到动画效果了。为了让效果更明显一些，我们为两种状态指定一下高度。

```javascript
import { 
  Component, 
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green', 
        'height':'100px'
      })),
      state('stop', style({
          'background-color':'red',
          'height':'50px'
      })),
      transition('void => *', animate(5000))
    ])
  ]
})
export class PlaygroundComponent {
  
  signal: string;

  constructor() { }

  onGo(){
    this.signal = 'go';
  }
  onStop(){
    this.signal = 'stop';
  }
}
```

那么 `transition('* => *', animate(500))` 这句什么意思呢？前面那个 `'* => *'` 是一个状态迁移表达式，`*`  表示任意状态，所以这个表达式告诉我们，只要有状态的变化就会激发后面的动画效果。后面的就是告诉Angular做500毫秒的动画，这个动画默认是从一个状态过渡到另一个状态。现在大家打开浏览器体验一下，分别点击Go和Stop，会发现我们的小方块从一个正方形变成一个长方形，红色变成绿色的过程。体验完之后再来看这句话：动画其实就是由若干个状态组成，由transition定义状态过渡的步骤。

![有了形状和颜色变化的动画](https://dn-mhke0kuv.qbox.me/ba29827ec46d67f30252.gif)

那么下面我们介绍一个void 状态（空状态），为什么会有void状态呢？其实刚刚我们也体验了，只不过没有定义这个void 状态而已。我们在组件中并没有给signal赋初始值，这就意味着一开始trigger的状态就是void。我们往往在实现进场或离场动画时需要这个void状态。void状态就是描述没有状态值时的状态。

```javascript
animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green', 
        'height':'100px'
      })),
      state('stop', style({
          'background-color':'red',
          'height':'50px'
      })),
      transition('* => *', animate(500))
    ])
  ]

```

上面代码定义了一个void状态，而且样式上有一个按Y轴做的-100%的位移，其实这就是一开始让小方块从场景外进入场景内，这样就是实现了一种进场动画，大家可以在浏览器中试验一下。

![用void状态实现的进场动画](https://dn-mhke0kuv.qbox.me/8f917381d0e3dd5dc94d.gif)

### 奇妙的animate函数

上面的我们的实验中，你会发现transition中有个animate函数，可能你认为它就是指定一个动画的时间的函数。它的身手可不止那么简单呢，我们来仔细挖掘一下。
首先呢，我们来对上面的代码做一个小改造，把animations数组改成下面的样子：

```javascript
animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green', 
        'height':'100px'
      })),
      state('stop', style({
          'background-color':'red',
          'height':'50px'
      })),
      transition('* => *', animate('.5s 1s'))
    ])
  ]

```

我们其实只对animate中的参数做了一点小改动，就是把animate(500) 改成animate('.5s 1s')。那么.5s表示动画过渡时间为0.5秒（其实和上面设置的500毫秒是一样的），1s表示动画延迟1秒后播放。现在我们打开浏览器，看看效果如何吧。

当然还有更狠的大招，这个字符串表达式还可以变成 '.5s 1s ease-out'，后面的这个ease-out是一种缓动函数，它是可以让动画效果更真实的一种方式。
现实世界中物体照着一定节奏移动，并不是一开始就移动很快的，也不可能是一直匀速运动的。怎么理解呢？当皮球往下掉时，首先是越掉越快，撞到地上后回弹，最终才又碰触地板。而缓动函数可以使动画的过渡效果按照这样的真实场景抽象出的对应函数来进行绘制。ease-out只是众多的缓动函数的其中一种，我们当然可以指定其他函数。
另外需要说明的一点是诸如ease-out只是真实函数的一个友好名称，我们当然可以直接指定背后的函数：cubic-bezier(0, 0, 0.58, 1) 。我们下个小例子不用这个ease-out，因为效果可能不是特别明显，我们找一个明显的，使用 cubic-bezier(0.175, 0.885, 0.32, 1.275) 。现在我们打开浏览器，你仔细观察一下是否看到了小方块回弹的效果

```javascript
animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green', 
        'height':'100px'
      })),
      state('stop', style({
          'background-color':'red',
          'height':'50px'
      })),
      transition('* => *', animate('.5s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ])
  ]

```

![加上了缓动函数的进场动画](https://dn-mhke0kuv.qbox.me/a28dc317d1a5963c0962.gif)

关于缓动函数的更多资料可以访问 http://easings.net/zh-cn 在这里可以看到各种函数的曲线和效果，以及cubic-bezier函数的各种参数

![easing.net上列出了各种缓动函数的曲线和效果][123]

需要注意的一点是Angular2实现动画的机制其实是基于W3C的Web Animation标准，这个标准暂时无法支持所有的cubic-bezier函数，只有部分函数被支持。这样的话我们如果要实现某些不被支持的函数怎么办呢？那就得有请我们的关键帧出场了。

### 关键帧

何谓关键帧？首先需要知道什么是帧？百度百科给了定义：
帧——就是动画中最小单位的单幅影像画面，相当于电影胶片上的每一格镜头。在动画软件的时间轴上帧表现为一格或一个标记。
关键帧——相当于二维动画中的原画。指角色或者物体运动或变化中的关键动作所处的那一帧。关键帧与关键帧之间的动画可以由软件来创建，叫做过渡帧或者中间帧。
先来做一个小实验，我们把入场动画改造成关键帧形式。

```javascript
import { 
  Component, 
  OnDestroy,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css'],
  animations: [
    trigger('signal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      state('go', style({
        'background-color': 'green', 
        'height':'100px'
      })),
      state('stop', style({
          'background-color':'red',
          'height':'50px'
      })),
      transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)'}),
        style({'transform': 'scale(0.1)'}),
        style({'transform': 'scale(0.5)'}),
        style({'transform': 'scale(0.9)'}),
        style({'transform': 'scale(0.95)'}),
        style({'transform': 'scale(1)'})
      ]))),
      transition('* => *', animate('.5s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
    ])
  ]
})
export class PlaygroundComponent {
  // clock = Observable.interval(1000).do(_=>console.log('observable created'));
  signal: string;

  constructor() { }

  onGo(){
    this.signal = 'go';
  }
  onStop(){
    this.signal = 'stop';
  }
}
```

保存后返回浏览器，你应该可以看到一个正方形由小变大的进场动画。

![关键帧实现的入场动画](https://dn-mhke0kuv.qbox.me/edc849700dcdfea6d9d6.gif)

现在我们来分析一下代码，这个入场动画是5秒的时间，我们给出6个关键帧，也就是0s，1s，2s，3s，4s和5s这几个。对于每个关键帧，我们给出的样式都是放缩，而放缩的比例逐渐加大，而且是先快后慢，也就是说我们可以模拟出缓动函数的效果。

如果我们不光做放缩，而且在style中还指定位置的话，这个动画就会出现边移动边变大的效果了。把入场动画改成下面的样子试试看吧。

```javascript
transition('void => *', animate(5000, keyframes([
        style({'transform': 'scale(0)', 'padding': '0px'}),
        style({'transform': 'scale(0.1)', 'padding': '50px'}),
        style({'transform': 'scale(0.5)', 'padding': '100px'}),
        style({'transform': 'scale(0.9)', 'padding': '120px'}),
        style({'transform': 'scale(0.95)', 'padding': '135px'}),
        style({'transform': 'scale(1)', 'padding': '140px'})
]))),
```

![加上位移的效果](https://dn-mhke0kuv.qbox.me/dd5e62fd71249c5f6f36.gif)

最后的结果可能还是不酷，但是这样的话利用关键帧我们如果结合好CSS样式，就会做出比较复杂的动画了。

## 方便的管道--PIPE

我们一直没有提到的一点就是管道，虽然我们的例子中没有用到，但其实这是Angular 2中提供非常方便的一个特性。这个特性可以让我们很快的将数据在界面上以我们想要的格式输出出来。还是拿例子说话，比如我们在页面上显示一个日期，先建立一个简单的模版：

```html
<p> Without Pipe: Today is {{ birthday }} </p>
<p> With Pipe: Today is {{ birthday | date:"MM/dd/yy" }} </p>
```

再来建立对应的组件文件：

```javascript
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  birthday = new Date();
  constructor() { }

}
```

![无管道和有管道的日期输出][124]

上面的例子可能还没太明显，我们 进一步改造一下模板：

```html
<p> Without Pipe: Today is {{ birthday }} </p>
<p> With Pipe: Today is {{ birthday | date:"MM/dd/yy" }} </p>
<p>The time is {{ birthday | date:'shortTime' }}</p>
<p>The time is {{ birthday | date:'medium' }}</p>

```

![同一数据可以显示成不同样子][125]

而且更牛的是多个Pipes可以串起来使用，比如说上图中最下面那个日期我们希望把Dec大写，就可以这样使用：

```html
<p>The time is {{ birthday | date:'medium' | uppercase }}</p>
```

![多个Pipe连用][126]

### 自定义一个Pipe

那么自己写一个Pipe是怎样的体验呢？创建一个Pipe非常简单，我们来体会一下。首先创建一个 `src/app/playground/trim-space.pipe.ts` 的文件：

```javascript
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'trimSpace'
})
export class TrimSpacePipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return value.replace(/ /g, '');
  }
}
```

在Module文件中声明这个Pipe：`declarations: [PlaygroundComponent, TrimSpacePipe]` 以便于其他控件可以使用这个Pipe：

```javascript
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent }   from './playground.component';
import { PlaygroundService } from './playground.service';
import { TrimSpacePipe } from './trim-space.pipe';

@NgModule({
    imports: [
        SharedModule,
        PlaygroundRoutingModule
    ],
    providers:[
        PlaygroundService
    ],
    declarations: [PlaygroundComponent, TrimSpacePipe]
})
export class PlaygroundModule { }
```

然后在组件的模板文件中使用即可 `{{ birthday | date:'medium' | trimSpace}}` ：

```html
<p> Without Pipe: Today is {{ birthday }} </p>
<p> With Pipe: Today is {{ birthday | date:"MM/dd/yy" }} </p>
<p>The time is {{ birthday | date:'shortTime' }}</p>
<p>The time is {{ birthday | date:'medium' | trimSpace}} with trim space pipe applied</p>
<p>The time is {{ birthday | date:'medium' | uppercase }}</p>
```

打开浏览器看一下效果，我们看到应用了trimSpace管道的日期的空格被移除了，如图所示：

![自定义一个移除空格的Pipe][127]

### 内建的Pipe

#### Decimal Pipe

DatePipe和UpperCase Pipe我们刚刚已经见识过了，现在我们看一看内建的其他Pipe。首先是用于数字格式化的DecimalPipe。DecimalPipe的参数是以  `{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}` 的表达式形式体现的。其中：

 1. minIntegerDigits 是最小的整数位数，默认是1。 
 2. minFractionDigits 表示最小的小数位数，默认是0。
 3. maxFractionDigits 表示最大的小数位数，默认是3。

```html
<p>pi (no formatting): {{pi}}</p>
<p>pi (.5-5): {{pi | number:'.5-5'}}</p>
<p>pi (2.10-10): {{pi | number:'2.10-10'}}</p>
<p>pi (.3-3): {{pi | number:'.3-3'}}</p>
```

如果我们在组件中定义 `pi: number = 3.1415927;` 的话，上面的数字会被格式化成下图的样子

![Decimal Pipe用于数字的格式化][128]

#### Currency Pipe

顾名思义，这个Pipe是格式化货币的，这个Pipe的表达式形式是这样的：  `currency[:currencyCode[:symbolDisplay[:digitInfo]]]`，也就是说在currency管道后用分号分隔不同的属性设置：

```html
<p>A in USD: {{a | currency:'USD':true}}</p>
<p>B in CNY: {{b | currency:'CNY':false:'4.2-2'}}</p>
```

上面的代码中 `USD `或 `CNY` 表面货币代码，`true` 或 `false` 表明是否使用该货币的默认符号，后面如果再有一个表达式就是规定货币的位数限制。这个限制的具体规则和上面Decimal Pipe的类似，如下图所示。

![Currecy Pipe用于格式化货币][129]

#### Percent Pipe

这个管道当然就是用来格式化百分数的，百分数的整数位和小数位的规则也和上面提到的Decimal Pipe和Currency Pipe一致。如果在组件中定义 `myNum: number = 0.1415927`; 下面的代码会输出成下图的样子：

```html
<p>myNum : {{myNum | percent}}</p>
<p>myNum (3.2-2) : {{myNum | percent:'3.2-2'}}</p>

```

![Percent Pipe用来格式化百分数][130]

#### Json Pipe

这个管道个人感觉更适合在调试中使用，它可以把任何对象格式化成JSON格式输出。如果我们在组件中定义了一个对象： 

```javascript
object: Object = {
  foo: 'bar', 
  baz: 'qux', 
  nested: {
    xyz: 3, 
    numbers: [1, 2, 3, 4, 5]
  }
}; 
```

那么下面的模板会输出下图的样子，在调试阶段，这个特性很好帮助你输出可读性很强的对象格式。当然如果你使用了现代化的IDE，这么使用的意义就不是很大了：

```html
<div>
  <p>Without JSON pipe:</p>
  <pre>{{object}}</pre>
  <p>With JSON pipe:</p>
  <pre>{{object | json}}</pre>
</div>

```

![Json Pipe用于以Json形式格式化对象][131]

## 指令——Directive

另一个我们一直没有提到的重要概念就是指令了，但这个虽然我们没提到，却已经用过了。比如 `*ngFor` ，`*ngIf` 等，这些都叫做结构性指令，而像 `*ngModel` 等属于属性型指令。
Angular 2中的指令分成三种：结构型（Structural）指令和属性型（Attribute）指令，还有一种是什么呢？就是Component，组件本身就是一个带模板的指令。
结构型指令可以通过添加、删除DOM元素来更改DOM树的布局，比如我们前面使用 `*ngFor`在todo-list的模板中添加了多个todo-item。而属性型指令可以改变一个DOM元素的外观或行为，比如我们利用 `*ngModel` 进行双向绑定，改变了该组件的默认行为（我们在组件中改变某个变量值，这种改变会直接反应到组件上，这并不是组件自身定义的行为，而是我们通过 `*ngModel` 来改变的）。
Angular 2中给出的内建结构型指令如下表所示：

|名称|用法|说明|
|---|---|---|
|ngIf|`<div*ngIf="canShow">`|基于canShow表达式的值移除或重新创建部分DOM树。|
|ngFor| `<li *ngFor="let todo of todos">` | 把li元素及其内容转化成一个模板，并用它来为列表中的每个条目初始化视图。|
|ngSwitch, ngSwitchCase, ngSwitchDefault| `<div [ngSwitch]="someCondition"></div>` |基于someCondition的当前值，从内嵌模板中选取一个，有条件的切换div的内容。|

自定义一个指令也很简单，我们动手做一个。这个指令非常简单就是使任何控件加上这个指令后，其点击动作都会在console中输出 “I am clicked”。由于我们要监视其宿主的click事件，所以我们引入了 HostListener，在onClick方法上用 `@HostListen(‘click’)` ，表明在检测到宿主发生click事件时调用这个方法。

```javascript
import {
  Directive,
  HostListener
} from '@angular/core';

@Directive({
    selector: "[log-on-click]",
})
export class LogOnClickDirective {

    constructor() {}
    @HostListener('click')
    onClick() { console.log('I am clicked!'); }
}
```

在模板中简单写一句就可以看效果了

`<button log-on-click>Click Me</button>`

![自定义指令使得点击按钮会log一条消息][132]

代码： https://github.com/wpcfan/awesome-tutorials/tree/master/angular2/ng2-tut

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
  [15]: http://static.zybuluo.com/wpcfan/2k52lgyw9say0bk0pzudz4qk/image_1b3i1ig2aqnq17ac1gk31lvtu579.png
  [16]: http://static.zybuluo.com/wpcfan/djkgkmm92yjakfp1tf53a8tu/image_1b2aksv68uhs3mf64j1h9st7o9.png
  [17]: http://static.zybuluo.com/wpcfan/4xrvfcelykg9dbmft73rm3ym/c1_s1_ng_serve.png
  [18]: http://static.zybuluo.com/wpcfan/1fhyangnbqqjemxr5md4qa2p/c1_s1_project_1st_browser.png
  [19]: http://static.zybuluo.com/wpcfan/00ujvqg9m6ir0km0nzp54x4d/c1_s1_project_1st_browser_update.png
  [20]: http://static.zybuluo.com/wpcfan/cemx8k69lys6xcjtecvgns3o/image_1b27r02qlo6f11f19qg1q9k1fclm.png
  [21]: http://static.zybuluo.com/wpcfan/hykairb7gc7indb3ytousn2r/image_1b27qsmhp1nlrb8g1uh6cp71qcj9.png
  [22]: http://static.zybuluo.com/wpcfan/g2c5iklgoiefb4gwf032ewy3/c2_s1_input_button_added.png
  [23]: http://static.zybuluo.com/wpcfan/vguefg9j7ogiyrnqyymb0tkd/c2_s1_handle_click_method.png
  [24]: http://static.zybuluo.com/wpcfan/6v6bvj0yj60rrei7y8bhk0t3/c2_s1_input_button_ref.png
  [25]: http://static.zybuluo.com/wpcfan/opkt3h9vqpne88q3e988oghr/c2_s1_username_password_ref.png
  [26]: http://static.zybuluo.com/wpcfan/ep2fv9smcl6wpesjd9lyymn5/c2_s2_form_validation.png
  [27]: http://static.zybuluo.com/wpcfan/r5or515a7vbbaegcumt1szrg/c2_s2_form_validation_errors.png
  [28]: http://static.zybuluo.com/wpcfan/o1581cncbnl7zi8hvhvo9vn4/c2_s2_form_validation_errors_multiple.png
  [29]: http://static.zybuluo.com/wpcfan/vngx0hc0nusbyyfzhb1tfjro/c2_s2_form_validation_form_submit.png
  [30]: http://static.zybuluo.com/wpcfan/vy66ed38x1rr3686bkzbbcfy/c2_s2_form_validation_fieldset.png
  [31]: http://static.zybuluo.com/wpcfan/cvugsjs3o68u9aeb30xvwsr2/c2_s2_form_validation_form_styling.png
  [32]: http://static.zybuluo.com/wpcfan/b7kn9wpntcooxbucnddg59xg/c2_s2_form_validation_style_fail.png
  [33]: http://static.zybuluo.com/wpcfan/t85mj8zde5zgjxwymtbvh6mg/c2_s2_form_validation_style_pass.png
  [34]: http://www.w3schools.com/cssref/css_selectors.asp
  [35]: http://static.zybuluo.com/wpcfan/8jg6bdnos6i7an84mt1zqoov/image_1b0hgdsiu87n1lha1kcahl51ckb9.png
  [36]: http://static.zybuluo.com/wpcfan/s7fmz6gcsek66kc5y2729j10/image_1b0k2ba0d1qqraa51mj51hpdpeo9.png
  [37]: http://static.zybuluo.com/wpcfan/slqndbbtc8v2chwgtfb5cmoc/image_1b0kgg9mnppf16pkip81b2hhbrm.png
  [38]: http://static.zybuluo.com/wpcfan/vuqanfa8jbnt6hwqmtdr05bc/image_1b0kr7gpn17td7v1p4s1qucuu313.png
  [39]: http://static.zybuluo.com/wpcfan/m9xxtfp9xebdrsv4tfl1oihj/image_1b11jlmes1nithths9q1n8ijqg9.png
  [40]: http://static.zybuluo.com/wpcfan/b0daucv4po2molx9kff47efe/image_1b11kjibcelb6upnb21su41dilm.png
  [41]: http://static.zybuluo.com/wpcfan/5xf7rkb3wyhxx51dbpjoha0b/image_1b3emaalc6bk1j168qkni215gj9.png
  [42]: http://static.zybuluo.com/wpcfan/crrogqqkksstx3ztoh2mk1bi/image_1b12b5v4onlm16ai1bdn7pu143e9.png
  [43]: http://static.zybuluo.com/wpcfan/3im2e8fi5fhgxy2olfg6kp3x/image_1b17mtibdkjn105l1ojl1dgr9il9.png
  [44]: http://static.zybuluo.com/wpcfan/3t0c5c4q1o0n7t5d0rflx9zd/image_1b17o06nv10ob13d6pb1f5613pnm.png
  [45]: http://static.zybuluo.com/wpcfan/2s1k9xfhfwo4ya6gc1kyi8sg/image_1b17o6qjlb31grg1o7edjm1q4l13.png
  [46]: http://static.zybuluo.com/wpcfan/kd81ovbb5t1tix59oyft2doy/image_1b1c8if181tld15hlj531aasi8a9.png
  [47]: http://static.zybuluo.com/wpcfan/8bm5aa4ux233zro0vpqh9oun/image_1b23h2m601puv1q9664c52c1jem9.png
  [48]: http://static.zybuluo.com/wpcfan/f2z6lh68bsymwnqhbb6z8ovf/image_1b23h3l811dn4g9h16qu1jm11htbm.png
  [49]: http://static.zybuluo.com/wpcfan/y5ar6642glaj2y0jbtsjp75n/image_1b23hdv51l621elh1uucsri32213.png
  [50]: http://static.zybuluo.com/wpcfan/xpf46qrbe9wrdwi2d5r1rp4s/image_1b23hjd3rble1nb11u7i19qgjqb1g.png
  [51]: http://static.zybuluo.com/wpcfan/0b7dqnyzc2a50z5jvohr2nxz/image_1b23htavu19i412obd751h8kusj1t.png
  [52]: http://static.zybuluo.com/wpcfan/p7dr7hd1wkwcz1rn9bdlmlrm/image_1b23igfkdhn71ug71cng3in94t2a.png
  [53]: http://static.zybuluo.com/wpcfan/r7juuikjd8mgwbjjoka4fi24/image_1b3erpn3016sl17i2vcnr3cg7lm.png
  [54]: http://static.zybuluo.com/wpcfan/enoypw8hkt4rs5qpwby7fey3/image_1b2m0102o1d721c438jr18r9f889.png
  [55]: http://static.zybuluo.com/wpcfan/km6fx7cleicpzpuqn681my0m/image_1b2m07bdvqk91aaodsd16pd2kuv.png
  [56]: http://static.zybuluo.com/wpcfan/df0pajt5bei3pbw0b854a2n1/image_1b2m0l4teqja2f016s61g5o14261c.png
  [57]: https://github.com/angular/material2 "Material 2"
  [58]: https://getmdl.io
  [59]: https://github.com/mseemann/angular2-mdl
  [60]: http://sass-lang.com/
  [61]: http://mseemann.io/angular2-mdl/theme
  [62]: http://static.zybuluo.com/wpcfan/8hpn0dypdubf83zftj7rcqoz/image_1b3eq6qhv1kfo14ug1osh1nb5h3e9.png
  [63]: http://static.zybuluo.com/wpcfan/d01y1qp5ke1mvm56b4s7db7m/image_1b2g0jju71mdsnd3k2v174k7129.png
  [64]: http://static.zybuluo.com/wpcfan/c8s2lzrgia8kc0iouy3gcuwu/image_1b2g1csop1684jfghpphffui9m.png
  [65]: http://static.zybuluo.com/wpcfan/tu60u4nrupshfjhmz8xnvr8o/image_1b2g1e0261mkmtp61kjm6f94g513.png
  [66]: http://static.zybuluo.com/wpcfan/nks5h5wn6cf3mcjmxem301mm/image_1b2o9tso51ald1u0e1nr59gi119i9.png
  [67]: http://static.zybuluo.com/wpcfan/rpvxg5kcdy1gs6pka50wieda/image_1b36ghm4o179516kdikkbc14qp9.png
  [68]: http://static.zybuluo.com/wpcfan/fwq8nslpo6j6g4dwv534xhfy/image_1b36l1ajl1qqm1t091m89gbe1cr7m.png
  [69]: http://static.zybuluo.com/wpcfan/d749paatwa3if5lagm9sbg86/image_1b36lq1ikh3vnfkadg8rpnrm13.png
  [70]: http://static.zybuluo.com/wpcfan/du7mdyjtiszhuusvo8acicp4/image_1b37me9ik1eba1ruq98s1n041siq9.png
  [71]: http://static.zybuluo.com/wpcfan/r4fnf9io4dky0a3gp9oso82i/image_1b36ncud0epmjsjsrjqds1tka9.png
  [72]: http://static.zybuluo.com/wpcfan/tv2fvnqqv12o1nnobd0ip64l/image_1b36npfqlhkq0l1fge1o8jon0m.png
  [73]: http://static.zybuluo.com/wpcfan/a1gsg1mcsyd4r96bypd55nvd/image_1b38vhduajb5bng1o3a1f73ua79.png
  [74]: http://static.zybuluo.com/wpcfan/z3ok1yhh8lsuxg1aub49qifr/image_1b3912qu9bbduuokqe12031853m.png
  [75]: http://static.zybuluo.com/wpcfan/0pbxveqx8yjt9xyb23m941te/image_1b396i9rc1jg9hbsgj5e44sns13.png
  [76]: http://static.zybuluo.com/wpcfan/yfppqsaemxgviktatn6l3jyh/image_1b39tfmnni8hsnnila1c5cj701g.png
  [77]: http://static.zybuluo.com/wpcfan/4zesdanc1zzz9pv5684i6agp/image_1b3c404ni7qe1vv69uu6ubvhh9.png
  [78]: http://static.zybuluo.com/wpcfan/cj4w92jxeoox33sn82xbjf4g/image_1b39uniimjrnv31kr7ajvei1t.png
  [79]: http://static.zybuluo.com/wpcfan/6m32j6pmfzyx4uv52mhnjrl0/image_1b39v6ibl4peqcgmhckc4ka2a.png
  [80]: http://static.zybuluo.com/wpcfan/qwga78sqyohp5syyemdjsva5/image_1b3a2in1k145g15rej8icr51i4p2n.png
  [81]: http://static.zybuluo.com/wpcfan/sarm4ukcxyd8wrnqssdy6xr2/image_1b3c5t3g11edk83n1c1olrci739.png
  [82]: http://static.zybuluo.com/wpcfan/jqvbexkvo0ubcu8ozhq7sjd5/image_1b3c6vnk21sj13831cec16n0gsnm.png
  [83]: http://static.zybuluo.com/wpcfan/7paaruzx7t2qawk9jw8qzqb0/image_1b3evrm0rk1c1kb11mh9st6kao1g.png
  [84]: http://static.zybuluo.com/wpcfan/0sy27j23jkyqw7gbazdf5v95/image_1b3f17o21b9o16f1dr21nur12nq2n.png
  [85]: http://static.zybuluo.com/wpcfan/8md686e6awhplbn27wyktc1r/image_1b3fa3qmrrbj14hhl9af241555m.png
  [86]: http://static.zybuluo.com/wpcfan/t6n4jjppb7i27s3gd3k0n54d/image_1b3faklqvbjc1p4sdhr1bhu9vt13.png
  [87]: http://static.zybuluo.com/wpcfan/0t8qcbb4jxnyyhzkbe1ngerk/image_1b3fglc3vgonb9d1ieagt71sq59.png
  [88]: http://static.zybuluo.com/wpcfan/wvzuefr1g1hflifipzzytc36/image_1b3fh5bgtrjmfk211hvg5i17bam.png
  [89]: http://static.zybuluo.com/wpcfan/w5svpj9wxm00577z5h3vxgcx/image_1b3figmk91fjv60dnjdprkhei13.png
  [90]: http://static.zybuluo.com/wpcfan/nbj0pecdxxtakak50agu41op/image_1b3fk3qo612471ai71egg1i1515s31g.png
  [91]: http://static.zybuluo.com/wpcfan/0w4nt3vkxv0yainw0wabm1bx/image_1b3hjgl1gqaklnj1qr31572j2c2a.png
  [92]: http://static.zybuluo.com/wpcfan/bv632opol178ghdqn79e1lee/image_1b3hk0fov1g2aeeb1310j0kjp52n.png
  [93]: http://static.zybuluo.com/wpcfan/ybxd8dfsayq3oe0jurid9qqe/image_1b3hk3ori2jt1svl6km1csh70c34.png
  [94]: http://static.zybuluo.com/wpcfan/frdxvg3isp0ma0ict95ozhgv/image_1b3hka3a1rkp1n7b14ul2dlu23h.png
  [95]: http://static.zybuluo.com/wpcfan/wk4gwatqc3edd8zks0j40lyw/image_1b3hj4e748enu99jnd1m9aa1g1t.png
  [96]: http://static.zybuluo.com/wpcfan/e3syscof2mrqovk8r28h4sq4/image_1b3i9947b1edq1ffa40i1vsmlj16.png
  [97]: http://static.zybuluo.com/wpcfan/yzvihbjat2l8jbodprpsxifp/image_1b3j8dn9p1072ohjhqv1ful1cmp.png
  [98]: http://static.zybuluo.com/wpcfan/kgggh41asqvfqp6flxnzxs6d/image_1b3n526sd1vgp12df13s7ihj2b1j.png
  [99]: http://static.zybuluo.com/wpcfan/vr3mn0ltkpzqbxbzets82b0w/image_1b3n7jn3t16tp1jej14ve8qh1gfe20.png
  [100]: http://static.zybuluo.com/wpcfan/hiqajty1tlq4xkr5enst340n/image_1b3n7sopd1fmceco10ud1is1ub2d.png
  [101]: http://static.zybuluo.com/wpcfan/walv43zw68z0mzxl5qkeyubi/image_1b3n7vtqc1jat2861f8k1e8i1r1d2q.png
  [102]: http://static.zybuluo.com/wpcfan/3p780opb45pm3obvgrsew2jr/image_1b3ogpb371mli7ccdii4ebdhc9.png
  [103]: http://static.zybuluo.com/wpcfan/ftcnqjgl43l36teutf39x10k/image_1b3ocltsq16br1ec19d72mbbsl37.png
  [104]: http://static.zybuluo.com/wpcfan/jpku44htoy1zjjiy7eu77dju/image_1b3oib0fgf4p1ns1u7j1cm2pi7m.png
  [105]: http://static.zybuluo.com/wpcfan/oxkyh4fd6h05rduw1b2fatwu/image_1b3oj0vlmh2s1hlr1nslj908a31j.png
  [106]: http://static.zybuluo.com/wpcfan/0hmmxq9lbrggivbovf7mb2ae/image_1b3okg3fkh6l1t9bsum1kukor42d.png
  [107]: http://static.zybuluo.com/wpcfan/m0b23nq3nft68wp929gnnwwz/image_1b3ok3b1f1r0vlku1sq7k6413p620.png
  [108]: http://static.zybuluo.com/wpcfan/tgoo0p0u6t4gbrxgo272o2na/image_1b3p0ng7lhbh1vdnq1a10up6f52q.png
  [109]: http://static.zybuluo.com/wpcfan/yuueok3tniz06zj5lptidztr/image_1b3p6ldg019851kgn1fa7fls146q37.png
  [110]: http://static.zybuluo.com/wpcfan/iv36fzqpjfsco3wy6wt2akwk/image_1b3p6ntv310o0rifqj91kv41htb3k.png
  [111]: http://static.zybuluo.com/wpcfan/rtgm2jlj5duf76pa1xyqy71o/image_1b3ppc1i216qj1707phb1kr672t9.png
  [112]: http://static.zybuluo.com/wpcfan/glham35rwcyatdtvshljwpcl/image_1b3prc8sc6u51pj61qrm1tk3hbvm.png
  [113]: http://static.zybuluo.com/wpcfan/k10mmbl9co5o7l9tffwm11mi/image_1b3psun3cjcpkrg13rp1knh1trk2a.png
  [114]: http://static.zybuluo.com/wpcfan/2u8j3y5ewuqu55smx2ek25gi/image_1b3psq94lc031b5111mhgqc1ltu1g.png
  [115]: http://static.zybuluo.com/wpcfan/zw7jylvaagfo2a50jnwb2owf/image_1b3pug0tr18oeotp172p1pgqr4s2n.png
  [116]: http://static.zybuluo.com/wpcfan/xhjkqdq5pazdds7iarrbwwc3/image_1b3pun648fsd1u2d5nu1nv21bf3h.png
  [117]: http://static.zybuluo.com/wpcfan/zivgv8dk2uobpk36rc5nan6l/image_1b3rggpls1ah5tdb1hlm13804op3u.png
  [118]: http://static.zybuluo.com/wpcfan/x7npi3fmr3cnyhhmspi9ste3/6.10.png
  [119]: http://static.zybuluo.com/wpcfan/u88hazpyr830l9v7ylyg9gfl/6.11.png
  [120]: http://static.zybuluo.com/wpcfan/n4f7mxyvlnucuphuwq4avrgn/5.4.png
  [121]: http://static.zybuluo.com/wpcfan/o251nxe81e2dhjdiatp8et3u/5.5.png
  [122]: http://static.zybuluo.com/wpcfan/npguujhlx1lg6ox5gg46hjph/image_1b60vr91vij817c910e311ce18959.png
  [123]: http://static.zybuluo.com/wpcfan/t94vzsfn9gfsep1tb6ih6kj9/image_1b61214078q71b4c1f2akq314o413.png
  [124]: http://static.zybuluo.com/wpcfan/wtmiwicze7prizjal2glrbe8/image_1b614b7qbf3j1f007of19hac852a.png
  [125]: http://static.zybuluo.com/wpcfan/gk94zxzw2aq2zgstgwp3y70y/image_1b614fvu3u0t14h1dt61evl5o337.png
  [126]: http://static.zybuluo.com/wpcfan/576oyox10thg11weujczy9en/image_1b614jq928jl1meh3dm1p103vj3k.png
  [127]: http://static.zybuluo.com/wpcfan/uwilfv8b9r199xw3bt84s41a/image_1b6154tek1inkpgi1vsh1m6fjte41.png
  [128]: http://static.zybuluo.com/wpcfan/fnjetw6lycpsfp7y15zscvye/image_1b615fh9u1r5f4l1i0e88s68i4u.png
  [129]: http://static.zybuluo.com/wpcfan/xx0ab7h47ot5amh2c2yspaqi/image_1b615np1d29315jko2rsju1g555b.png
  [130]: http://static.zybuluo.com/wpcfan/jil5a4vbtwt9b6ungv508z8u/image_1b615s7nh14afairf8j1ghu1geu5o.png
  [131]: http://static.zybuluo.com/wpcfan/z4n2w5sf3qdev43411wr88cr/image_1b6164jo91nc310rg17bv12lr1qdd65.png
  [132]: http://static.zybuluo.com/wpcfan/kr1j72fqr22jmo5ctyso1qau/image_1b616r2dk92p1a14fe1idlt926v.png