const { Schema } = require('mongoose');
const mongoose = require('../config/db.config')

const MessageSchema = new Schema({
    channelId: String,
    senderId: String,
    text: String
});



let MessageModel = mongoose.model('message', MessageSchema);

module.exports = MessageModel