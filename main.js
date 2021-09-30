const express = require('express')
const router = require('./router')
const app = express()


app.listen(3000, function () {
  console.log('app is running at port 3000.');
})

app.all('/*', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");

  console.log(req.method)
  next();
})

app.use(router);

app.use(function (req, res) {
  // 所有未处理的请求路径都会跑到这里
  // 404
  console.log('404')
  res.send();
})