const serviceStatistics = require('./../../service/statistics/statistics');

module.exports = function () {

  const year = new Date().getFullYear();

  // 这里，如果找不到数据，需要进行初始化数据操作

  // 收入
  const input = new Promise((resolve, reject) => {
    serviceStatistics.find(year, true).then(res => {
      if (!res) {
        // 没有，在数据库里面进行创建
        serviceStatistics.initInsertSta({
          type: true,
          year: year
        });
      }
      resolve(res);
    });
  });

  // 支出
  const output = new Promise((resolve, reject) => {
    serviceStatistics.find(year, false).then(res => {
      if (!res) {
        // 没有，在数据库里面进行创建
        serviceStatistics.initInsertSta({
          type: false,
          time: year
        });
      }
      resolve(res);
    });
  })

  return Promise.all([input, output]);
}