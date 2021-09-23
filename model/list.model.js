const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  star:Number,
});

const List = mongoose.model("updates", listSchema);
module.exports = List;
//
