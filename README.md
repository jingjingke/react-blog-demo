# react-blog-demo #

最近正在学习react，首先尝试的就是做一个blog的demo,逻辑比较简单，适合初学练习。（里面的接口都是开放的，如果接口有问题可以直接联系我）

另外项目使用的是官方推荐的Create React App脚手架，同时使用yarn进行包管。

## 项目地址 ##

可访问[http://www.showke.club/](http://www.showke.club/)进行浏览效果


## 前置知识 ##

使用了react、react-router、axios、es6所以建议阅读：

[React 文档](http://reactjs.cn/react/docs/getting-started-zh-CN.html)

[React Router 文档](http://react-guide.github.io/react-router-cn/)

另外需要注意的是router我使用的是3.X版本（之前使用4.X时运行有问题）

## 关于缓存 ##

页面使用的是封装localstorage的[store.js](https://github.com/nbubna/store)小插件。需要注意两点：
##### （1）页面2天清空一次缓存 #####
　　这个主要通过缓存中的“localTime”时间戳进行判断实现。
##### （2）通过ctrl+F5组合键强制清除缓存 #####
　　这个需要注意的是组合按键时，需要将“焦点”放到页面上，可通过鼠标轻点页面任意空白位置。

　　若焦点在URL位置或其它位置（如控制台等），ctrl+F5实现的就是普通浏览器组合键效果，而不能起到清空缓存的目的。

## 目录结构 ##

```pre
├── build                    // 线上发布
│   └── 省略                 // 省略
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
├── CNAME                    // 别名指定
├── package.json             // 项目配置信息
├── yarn.lock                // 安装包管理文件

```

## 注意事项 ##

#### 1、如果已经下载到你的本地了，运行时还需要安装依赖 ####
在已经安装yarn的前提下执行：

```pre
	yarn install
```
如果本地没有安装yarn的话需要先安装，[可以点这里了解如何安装？](https://yarnpkg.com/zh-Hans/docs/getting-started)

#### 2、生成时需要修改react-scripts配置 ####
之前在使用vue-cli脚手架时就有将publicPath改成绝对地址，在这边好像也同时需要。不过Create React App是使用react-scripts配置的，所以我是在node_modules文件夹下的react-scripts文件夹 >> config文件夹 >> paths.js文件中去修改的。找到：
```pre
	publicUrl ? url.parse(publicUrl).pathname : '/'
```
修改为：
```pre
	publicUrl ? url.parse(publicUrl).pathname : '绝对地址目录'
```
例如我的：
```pre
	publicUrl ? url.parse(publicUrl).pathname : 'http://www.showke.club/build/'
```
#### 3、将index.html文件生成到根目录下 ####
默认react-script使用webpack打包时是将index.html打包在build下，若想直接就从根目录下访问，就需要将它生成在根目录下。在react-scripts文件夹 >> config文件夹 >> webpack.config.prod.js文件中找到：
```pre
	template: paths.appHtml,
```
在它下面添加一行：
```pre
	filename:'../index.html',
```

#### 4、默认生成时，静态js与css会有同名.map后缀的文件 ####
若不需要.map后缀的文件，可以同第3点所在的webpack.config.prod.js文件中隐藏：
```pre
//	devtool: 'source-map',
```

#### 5、默认生成时，static文件夹下会有asset-manifest.json文件 ####
若不需要该文件，可以同样在webpack.config.prod.js文件中隐藏：
```pre
//  new ManifestPlugin({
//    fileName: 'asset-manifest.json'
//  })
```
