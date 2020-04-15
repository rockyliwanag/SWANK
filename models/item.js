var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    // required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema);