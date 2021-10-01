const serviceStatistics = require('./../../service/statistics/statistics');

module.exports = function () {

  const year = new Date().getFullYear();

  return serviceStatistics(year);
}