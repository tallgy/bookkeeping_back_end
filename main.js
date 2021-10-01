const express = require('express')
const bodyParser = require('body-parser');
const router = require('./router')
const app = express()


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.listen(3000, function () {
  console.log('app is running at port 3000.');
})

app.all('/*', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");

  next();
})

app.use(router);

app.use(function (req, res) {
  // 所有未处理的请求路径都会跑到这里
  // 404
  console.log('404')
  res.send();
})