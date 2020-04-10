var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: String,
    city: String,
    zipcode: {
        type: Number,
        min: 5,
        max: 5,
    }
}, {
    timestamps: true
});

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});