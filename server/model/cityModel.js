const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("city", citySchema);
