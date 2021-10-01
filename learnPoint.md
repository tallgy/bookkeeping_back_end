跨域问题

    设置拦截
    app.all('/*',function(){})
    res.setHeader("Access-Control-Allow-Origin", "*");

    // 提示OPTIONS预检时，后端需要设置的两个常用自定义头
    这个用于post，因为post会有个提前检查
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");



问题，post请求的参数还是没有获取到，应该是哪个地方不对

express 没有自带的方式获取post数据，要使用 body-parser

    npm install -S body-parser


数据库
    使用mongodb，加上了第三方包 mongoose。


数据库的异步操作，

    数据库是异步操作的方式，所以会返回promise方法，于是就一直return出原来的
    promise，然后在使用then方法进行回调。

2021.10.1
    
    将数据的存储和读取完成，使用的是mongodb搭配的mongoose封装包，
    因为将数据进行了 dao ， controller， service 层的封装，
    所以，是在router.js 里面调用的then方法，然后其他层里面，进行处理，
    和返回promise 对象。数据存储使用的是将总金额从json转为string，大大方便了思考
    