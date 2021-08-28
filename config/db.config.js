const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/chat'


async function connect() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to Database')
    }
    catch (err) {
        console.log('Something went wrong')
    }
}



connect();

module.exports = mongoose;