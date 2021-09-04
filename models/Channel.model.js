const { Schema } = require('mongoose');
const mongoose = require('../config/db.config')

const ChannelSchema = new Schema({
    channel: Array,
    user1: String,
    user2: String
});



let ChannelModel = mongoose.model('channel', ChannelSchema);

module.exports = ChannelModel