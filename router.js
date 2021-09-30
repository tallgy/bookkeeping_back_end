const express = require('express');
const router = express.Router();

const networkController = require('./controller/main');

const path = {
  getStatistics: '/statistics/getInfo',
  addBookkeeping: '/bookkeeping/add'
}



router.get(path.getStatistics, function(req, res) {
  //会返回一个json的数据，包含了收入和支出
  //msg is json
  const msg = networkController.statistics();

  res.json(msg);
})

router.post(path.addBookkeeping, function(req, res) {
  //返回失败成功和状态信息
  //msg is json
  console.log('------------------------------');
  console.log(req)
  console.log('------------------------------');
  const msg = networkController.bookkeeping();
  res.json(msg);
})



module.exports = router;