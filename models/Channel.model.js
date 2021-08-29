const { Schema } = require('mongoose');
const mongoose = require('../config/db.config')

const ChannelSchema = new Schema({
    channel: Array
});



let ChannelModel = mongoose.model('channel', ChannelSchema);

module.exports = ChannelModel