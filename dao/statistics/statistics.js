const mongoose = require('../main'),
    Schema = mongoose.Schema;

const StatisticsSchema = new Schema({
  time: { type: String },  //时间
  type: { type: Boolean }, //类型，属于收入还是支出，true收入，false支出
  money: { type: String }   //金额
});

module.exports = mongoose.model('Statistics', StatisticsSchema);