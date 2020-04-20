var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  itemType: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  cover: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("Item", itemSchema);