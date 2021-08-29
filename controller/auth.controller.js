const jwt = require('jsonwebtoken');
const _ = require('lodash');
const UserModel = require("../models/User.model");
var secret = process.env.SECRET;

exports.signin = async function (req, res) {


    var { username, password } = req.body;
    var user = await UserModel.findOne({
        username: username,
        password: password
    })
    if (user) {
        let userCopy = user.toJSON();
        user = _.omit(userCopy, 'password')
        let token = jwt.sign(userCopy, secret);
        return res.json({
            success: true,
            token,
            decodedToken: { ...userCopy }
        });
    }

    return res.json({
        success: false,
        msg: 'User not found'
    })
}



exports.signup = async function (req, res) {

    await UserModel.create(req.body);
    user = _.omit(req.body, 'password')
    let token = jwt.sign(user, secret);
    return res.json({
        success: true,
        token,
        decodedToken: user
    });
}