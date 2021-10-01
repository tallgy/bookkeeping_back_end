const Bookkeeping = require("./bookkeepingInfo");

/**
 *  插入
 * @param info {Object}
 * @param callback {function}
 */
function insert(info) {

  const bookkeeping = new Bookkeeping({
    consumptionType: info.type,   //消费类型
    theme: info.title,  // 主题
    type: info.flag, // 属于收入还是支出
    money: info.money,  // 金额
    time: info.time, // 时间
    describe: info.describe,// 描述
  });

  return bookkeeping.save();
  // return new Promise((resolve, reject) => {
  //   bookkeeping.save().then(res => {
  //     console.log('save info success');
  //     console.log(res);
  //     resolve(true);
  //   }, err => {
  //     console.log('save info err');
  //     console.log(err);
  //     reject(false);
  //   });
  // })
}


/**
 *  更新
 * @param info
 */
function update(info) {

}

/**
 * 查询
 */
function find() {

}

/**
 * 删除
 * @param info
 */
function del(info) {

}


module.exports = {
  insert,
  update,
  find,
  del
};