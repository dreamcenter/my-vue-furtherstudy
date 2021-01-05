# vue阶段二
---
### 描述
阶段一的学习是利用的导入vue的js文件学习的，
而该阶段是对vuecli的一个初步认识和应用，
会涉及到大部分的知识点。

整个项目依据b站客户端界面制作一个单页面应用，
不会完整的做完，只是大概的意思，如果日后有兴趣可能会来完善[不大可能]
实则用来检测vuecli学习状况，
顺便记录学习过程中遇到的问题

### 示例网站
👉[my-vue-furtherstudy](http://www.dreamcenter.top/my-vue-furtherstudy)
<d style='color:red;font-size:10px;font-weight:bold'>*手机网页</d>
### 技术使用
* vue
* vue-router
* vuex
* axios
* sass
* vue-cookies
* 反向代理

## 问题记录
1. 由于刚安装一个脚手架，删掉原有的views,components后router内部的需要注释掉部分，同时main.js对router的引用也要去掉，否则eslint无法通过
2. 整个开发过程要时刻注意eslint规范，否则无法通过规范
3. 对于vue2.5+,scope已被代替，需要写在template标签处slot-scope
4. 一个组件就单独一个组件，不要写子组件，子组件通过引入的方式加入
5. 写了script就必须有export default
6. style样式的覆盖解决不是scope而是scope**d**
7. 对于每个组件的样式都加上scoped，以免产生后续干扰
8. 对于头部固定和底部绝对定位，可能会产生悬空，为了实现组件的更加优化，需要外套一层div来塞满悬空
9. 配置文件修改完需要重新启动服务器才能生效
10. @click="func"，里面写的是方法，而不是语句，比如console.log(1)都是不正确的
11. 采用路由跳转可以有效避免刷新导致的页面重新加载
12. 对于vuex异步处理时,dispatch写在需要的页面mounted时刻，先判断store中是否有数据，有则直接使用，无则dispatch，没必要在本页面再创建一个变量来存储这个异步的数据，因为我们要的就是这个异步结果
13. 当我们进行路由拦截的时候，如果是用router.push前往这个路由，会报错，因为push被拦截了，这时候如果不想显示报错，需要在push后面补上捕获.catch(res=>{})
14. 发布到域的相对路径时[e.g. /test]，需要配置publicPath[在vue.config,js中]，但是设置的时候有这么几个坑，
    * router和publicPath有一定的关联，也有区别
    * 为了能够实现开发生产不用重复配置，设置publicPath: process.env.NODE_ENV === "production" ? "/test" : "/",
    * 当然/test也可以省略不写或者写成./
    * 当/test**不写**的时候，如果router为**history**模式base: process.env.BASE_URL时，生产环境会发现router是**以/为base路径**
    * 当/test**不写**的时候，如果router为**hash**模式base: process.env.BASE_URL时，生产环境会发现router是**以/test为base路径**
    * 当/test**写**的时候，如果router为**history/hash**模式base: process.env.BASE_URL时，生产环境会发现router是**以/test为base路径**
    * 如果router为history/hash模式**base: "/test"时**，生产环境会发现router是**以/test为base路径**
    * 不管是哪种写法，如果是history模式，只要刷新带路由的页面，向后端就会真的发送请求，如果没有处理就会返回404，如果没有刷新带路由页面，不会发送请求
    > 所以总结来说，publicPath: process.env.NODE_ENV === "production" ? "/test" : "/", mode: history, base: process.env.BASE_URL最为方便
15. 后端处理history模式，这里我用的是tomcat部署的
    1. 添加文件夹 WEB-INF , 在此文件夹中添加文件: web.xml 
    2. 写入以下代码保存即可
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
           http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
  version="3.1" metadata-complete="true">
  <display-name>Router for Tomcat</display-name>
  <error-page>
    <error-code>404</error-code>
    <location>/</location>
  </error-page>
</web-app>
```