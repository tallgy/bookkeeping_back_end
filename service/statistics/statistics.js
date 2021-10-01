const statisticsOption = require('./../../dao/statistics/option');

module.exports = function (year) {

  //想数据库中获取出当月数据和当年的数据，没有月份的数据被置为0

  return statisticsOption.find({
    'time': year
  });

  // const data = {
  //   day: {
  //     input: [1, 23, 123, 42, 12, 24, 12, 42, 12, 42, 12, 42, 12, 41, 23],
  //     output: [12, 1234, 22, 42, 52, 5, 2, 5,23 , 52,5 ,35,5, 3,535,3,3,5,3,53,25,235,4]
  //   },
  //   month: {
  //     input: [12342, 12342, 512, 425, 2523, 523, 5234, 4123],
  //     output: [132, 123, 12, 23, 123, 23, 123, 32],
  //   }
  // }
  //
  // return data;
}