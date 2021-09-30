module.exports = function (info) {

  //添加操作
  console.log('service add bookkeeping');
  console.log(info);

  return {
    stateCode: 200,
    message: '添加成功!'
  }
}