const router = require('express').Router();

const controller = require('../controller/channel.controller')


router.get('/:userId', controller.getAllChannels)


router.post('/', controller.createNewChannel)






module.exports = router;