const { Schema } = require('mongoose');
const mongoose = require('../config/db.config')


const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    username: String,
});



let UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel
