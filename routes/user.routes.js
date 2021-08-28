const router = require('express').Router();
const UserModel = require('../models/User.model')


router.get('/', async function (req, res) {
    var response = await UserModel.find();
    res.json(response);
});


router.post('/', async function (req, res) {
    var response = await UserModel.create({
        name: 'New User',
        age: 21,
        email: 'new@example.com',
        password: 'password',
    });
    res.json(response);
})


router.get('/:id', async (req, res) => {
    var { id } = req.params;
    var response = await UserModel.findById(id);
    res.json(response);
})

router.put('/', async function (req, res) {
    var id = '6129d0045b94e70e46c945b9';
    var response = await UserModel.updateOne({
        _id: id,
    }, {
        password: 'update_password',
    });

    res.json(response);
})


router.delete('/', async function (req, res) {
    var id = '6129d0045b94e70e46c945b9';
    var response = await UserModel.deleteOne({
        _id: id,
    });

    res.json(response);
})



module.exports = router;