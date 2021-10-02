const statisticsOption = require('./../../dao/statistics/option');
const {statistics} = require('../../controller/main')

const moneyDate = {
  month: [
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0
  ],
  day: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ],
}

exports.find = function (year, type) {

  //想数据库中获取出当月数据和当年的数据，没有月份的数据被置为0

  return statisticsOption.find({
    'time': year,
    'type': type
  });
}

exports.update = function(info) {
  const [ year, month, day ]  = info.time.split('-');

  const obj = {
    year: year * 1,
    month: month * 1,
    day: day * 1,
    money: info.money,
    type: info.flag
  }

  statisticsOption.find({
    'time': year,
    'type': info.flag
  }).then(res => {
    if (res) {
      updateData(res, obj);
    } else {
      initInsertData(obj);
    }
  });
}

function initInsertData (obj) {
  // init
  const moneyStr = initMoney(obj);

  console.log(obj);

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

exports.initInsertSta = initInsertData




function updateData(res, obj) {
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
}

/**
 * 将res的数据进行写入
 * @param res
 * @param obj
 * @returns {string}
 */
function modify(res, obj) {
  const resJSON = JSON.parse(res.money);

  resJSON.month[obj.month] += obj.money;
  resJSON.day[obj.day] += obj.money;

  return JSON.stringify(resJSON);
}

function initMoney(obj) {
  moneyDate.month[obj.month] = obj.money;
  moneyDate.day[obj.day] = obj.money;

  return JSON.stringify(moneyDate);
}