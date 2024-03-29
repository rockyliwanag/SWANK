var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
var bcrypt = require("bcrypt");
var SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
    uppercase: true,
  },
  country: {
    type: String,
    required: true,
  },
  // items: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Item",
  // }, ],
}, {
  timestamps: true,
});

userSchema.plugin(uniqueValidator);

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", userSchema);