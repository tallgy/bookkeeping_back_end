/**
 * 账单信息
 */
const mongoose = require('../main'),
    Schema = mongoose.Schema;

const BookkeepingSchema = new Schema({
  consumptionType: { type: String },   //消费类型
  theme: { type: String },  // 主题
  type: { type: Boolean }, // 属于收入还是支出,true收入，false支出
  money: { type: Number },  // 金额
  time: { type: String }, // 时间
  describe: { type: String },// 描述
});

module.exports = mongoose.model('Bookkeeping',BookkeepingSchema);