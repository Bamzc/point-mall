# point-mall

微信积分商城-单页面应用程序

## 特点

# 速度：更好的用户体验，让用户在web app感受native app的速度和流畅，
# MVC：经典MVC开发模式，前后端各负其责。
# ajax：重前端，业务逻辑全部在本地操作，数据都需要通过AJAX同步、提交。
# 路由：在URL中采用#号来作为当前视图的地址,改变#号后的参数，页面并不会重载。

requireJS+ director+ mui + art-template +zepto = 一个时髦的单页程序

### 解决的问题

#微信缓存问题
*采用gulp-rev-collector技术
*路由添加拦截器，动态获取rev-manifest包含的版本文件
*巧妙的利用requirejs config map，对其赋值rev-manifest获取的版本对象集合

