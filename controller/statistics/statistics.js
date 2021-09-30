const serviceStatistics = require('./../../service/statistics/statistics');

module.exports = function () {

  console.log('get statistics');

  const data = serviceStatistics();

  return data;
}