const MessageModel = require("../models/Message.model");

exports.getAllMessages = async function (req, res) {

    var { channelId } = req.params;
    var response = await MessageModel.find({
        channelId: channelId
    })
        .sort({ createdAt: 'asc' })
    res.json(response);
}



exports.createMessage = async function (req, res) {

    var { channelId, senderId, text } = req.body;
    var response = await MessageModel.create({
        channelId: channelId,
        senderId: senderId,
        text: text
    })
    res.json(response);
}