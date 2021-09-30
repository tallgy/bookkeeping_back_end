const serviceBookkeeping = require('./../../service/bookkeeping/bookkeeping');

module.exports = function (info) {
  //添加 记账的记录，并返回，成功还是失败
  //格式 stateCode，and message
  console.log('add bookkeeping')

  const responseInfo = serviceBookkeeping(info);

  return responseInfo;
}