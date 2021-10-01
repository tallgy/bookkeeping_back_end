const bookkeepingOption = require('./../../dao/bookkeeping/option');
const statisticsOption = require('./../../dao/statistics/option');

const moneyDate = {
  month: [0,  1, 2, 3, 4, 5,  6, 7, 8, 9, 10, 11],
  day: [0,  1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
}

module.exports = function (info) {

  /**
   * 思路：
   *  使用数组，然后转化为字符串，然后存放月，每个的日的消耗
   *  和每年和每月的消耗。
   *  先使用，find查找，然后再转化，然后在修改。
   */

  const [ year, month, day ]  = info.time.split('-');

  statisticsOption.find({
    'time': year,
  }).then(res => {
    // res 没有数据就会为 null，所以需要创建
    judgeFind(res, {
      year: year * 1,
      month: month * 1,
      day: day * 1,
      money: info.money,
      type: info.flag
    });
  });

  return bookkeepingOption.insert(info);
}

function judgeFind(res, obj) {
  if (res) {
    // update
    const updateRes = modify(res, obj);
    statisticsOption.update({
      'time': obj.year
    }, {
      money: updateRes
    }, (err, res) => {
      if (err) {
        console.log('service bookkeeping 统计数据更新失败!');
      } else {
        console.log('service bookkeeping 统计数据更新成功!');
      }
    });
  } else {
    // init
    const moneyStr = initMoney(obj);
    statisticsOption.insert({
      time: obj.year,
      type: obj.type,
      money: moneyStr
    }).then(res => {
      console.log('service bookkeeping 统计数据插入成功!');
    }, err => {
      console.log('service bookkeeping 统计数据插入失败!');
    });
  }
}

function initMoney(obj) {
  moneyDate.month[obj.month] = obj.money;
  moneyDate.day[obj.day] = obj.money;

  return JSON.stringify(moneyDate);
}

function modify(res, obj) {
  const resJSON = JSON.parse(res.money);

  resJSON.month[obj.month] += obj.money;
  resJSON.day[obj.day] += obj.money;

  return JSON.stringify(resJSON);
}