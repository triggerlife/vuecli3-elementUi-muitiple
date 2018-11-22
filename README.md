## 1：项目结构
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122105846892.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
 **assets目录**：放置静态文件的地方
 **filtres**: 放置全局过滤器的地方
 **pages**:放置页面
 **plugins**: 放配置文件
      
> 1. axios.js  设置axios
> 2. check-token：操作token的地方
> 3. element 全局注册element的地方
> 4. http: axios的二次封装请求中转处理

**store**： vuex存放的位置

## 2：多页开发
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122111258298.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
 pages下面的两个目录（index, user），访问页面就是http://localhost:8080/index.html#/+自定义路由 / http://localhost:8080/user.html#/+自定义路由
 每个项目都由每个目录下面的router，app.js, app.Vue 单独控制
 ## 3： 环境配置
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122112129373.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122112324792.png)
 在package.json文件中配置了三个打包环境和一个本地运行环境
 serve:  本地开发环境配置文件 .env.development
 local: 本地打包测试环境配置文件.env.local
 test: 测试打包环境配置文件.env.test
 build: 线上打包环境配置文件 .env.production
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122112603276.png)

> VUE_APP_TOKEN_VALID_SECOND=28   token自动刷新时间
> VUE_APP_NAME = base 保存token在cookie里面前面的参数

![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122113207740.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
因为我配置这个框架的时候有些数据会在其他的地方拉。所以配置的接口地址有几个。 
登录地址因为全平台统一所以写在配置文件里，不同的环境调不同的地址（你如果是项目内的登录的话可以删掉，并且把里面引用这个地址的地方改成你自己的登录路由）
打包地址也会根据后端的配置不同的环境不同的打包地址
## 4：axios的封装
plugins/axios.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122115714895.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
plugins/http.js
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122115830483.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
根据你的环境配置里面的接口地址可以一直写下去。
回调的数据进行了全局处理，
## 5： 权限控制
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122120042240.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
每个页面里面的created事件里面都调用了重置刷新token的一个事件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181122120225235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4ODUwMDU4,size_16,color_FFFFFF,t_70)
在router里面每个跳转之前判断一次token是否存在，不存在就跳转登录。
