const Statistics = require("./statistics");

/**
 *  插入
 * @param info {Object}
 */
function insert(info) {

  const statistics = new Statistics({
    time: info.time,  //时间
    type: info.type, //类型，属于收入还是支出，true收入，false支出
    money: info.money   //金额
  });

  return statistics.save();
}


/**
 *  更新
 * @param condition {Object}
 * @param update {Object}
 */
function update(condition, update, callback) {

  Statistics.updateOne(condition, update, callback);

}

/**
 * 查询
 */
function find(condition) {
  return Statistics.findOne(condition);
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