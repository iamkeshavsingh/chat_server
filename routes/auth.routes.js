const router = require('express').Router();

var controller = require('../controller/auth.controller')


router.post('/signin', controller.signin);

router.post('/signup', controller.signup);






module.exports = router;