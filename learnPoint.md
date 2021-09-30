跨域问题

    设置拦截
    app.all('/*',function(){})
    res.setHeader("Access-Control-Allow-Origin", "*");

    // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
    这个用于post，因为post会有个提前检查
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");



问题，post请求的参数还是没有获取到，应该是哪个地方不对