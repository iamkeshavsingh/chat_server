const ChannelModel = require('../models/Channel.model');

exports.createNewChannel = async function (req, res) {
    var { senderId, receiverId, senderName, receiverName } = req.body;
    var response = await ChannelModel.create({
        channel: [senderId, receiverId],
        user1: senderName,
        user2: receiverName
    });
    return res.json(response)
}



exports.getAllChannels = async function (req, res) {
    var { userId } = req.params;
    var response = await ChannelModel.find({
        channel: {
            $in: [userId]
        }
    })
    return res.json(response)
}