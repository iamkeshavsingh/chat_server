const ChannelModel = require('../models/Channel.model');

exports.createNewChannel = async function (req, res) {
    var { senderId, receiverId } = req.body;
    var response = await ChannelModel.create({
        channel: [senderId, receiverId]
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