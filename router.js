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
  networkController.statistics().then(result => {

    const data = {
      data1: result[0] && {
        type: result[0].type,
        money: result[0].money
      },
      data2: result[1] && {
        type: result[1].type,
        money: result[1].money
      }
    };

    res.json({
      stateCode: 200,
      data: data
    })
  }, err => {

  });
})

router.post(path.addBookkeeping, function(req, res) {
  //返回失败成功和状态信息
  //msg is json
  networkController.bookkeeping(req.body.info).then(result => {
    res.json({
      stateCode: 200,
      message: '添加成功!'
    });
  }, err => {
    res.json({
      stateCode: 400,
      message: '保存失败!'
    });
  });
})



module.exports = router;