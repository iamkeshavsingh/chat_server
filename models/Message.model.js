const { Schema } = require('mongoose');
const mongoose = require('../config/db.config')

const MessageSchema = new Schema({
    channelId: String,
    senderId: String,
    text: String
}, {
    timestamps: true
});



let MessageModel = mongoose.model('message', MessageSchema);

module.exports = MessageModel