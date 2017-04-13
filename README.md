# react-blog-demo #

最近正在学习react，真正开始着手的第一个demo就是想做一个blog。而当前阶段还在开发中，有空的时候会慢慢做起来，所以暂时还不太适用克隆。

另外项目使用的是官方推荐的Create React App，并且随着yarn渐渐进入视线，Create React App也开始使用yarn进行包管理了。


## 前置知识 ##

使用了react、react-router、axios、es6所以建议阅读：

[React 文档](http://reactjs.cn/react/docs/getting-started-zh-CN.html)

[React Router 文档](http://react-guide.github.io/react-router-cn/)

另外需要注意的是router我使用的是3.X版本（之前使用4.X时运行有问题）

## 目录结构 ##

```pre

├── public                   // 静态资源
│   ├── favicon.ico          // 网站图标
│   └── index.html           // 首页静态模板
├── src                      // 生产目录
│   ├── assets               // 静态资源(css,img,js)
│   ├── components           // 组件(一块一块组件)
│   ├── containers           // 暂住根模块（APP.js）
│   ├── views                // 业务页面（home.js/list.js/...）
│   ├── index.js             // 入口文件
│   └── routes.js            // 路由配置
├── .gitignore               // git项目忽略上传的文件/文件夹配置
├── .project                 // 我编辑器生成的，对项目无用
├── README.md                // 说明文档
├── package.json             // 项目配置信息
├── yarn.lock                // 安装包管理文件

```