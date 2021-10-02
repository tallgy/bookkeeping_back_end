const serviceBookkeeping = require('./../../service/bookkeeping/bookkeeping');
const statisticsOption = require('./../../service/statistics/statistics');


module.exports = function (info) {
  //添加 记账的记录，并返回，成功还是失败
  //格式 stateCode，and message

  statisticsOption.update(info);

  return serviceBookkeeping(info);
}