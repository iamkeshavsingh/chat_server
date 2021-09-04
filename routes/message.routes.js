const router = require('express').Router();

const controller = require('../controller/message.controller')

router.get('/:channelId', controller.getAllMessages);

router.post('/', controller.createMessage);



module.exports = router;