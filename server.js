require('dotenv').config();
const express = require('express');
const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*"
    }
});
const cors = require("cors");
const userRoutes = require("./routes/user.routes")
const authRoutes = require("./routes/auth.routes")
const channelRoutes = require("./routes/channel.routes")
const messageRoutes = require('./routes/message.routes')

var users = [];


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/channel', channelRoutes)
app.use('/message', messageRoutes);


var users = [];

function addUserInList(user, socketId) {
    var ele = users.find(u => u.id == user.userId);
    if (ele) return;
    users.push({
        id: user.userId,
        name: user.name,
        socketId: socketId
    });
}


function removeUserFromList(socketId) {
    users = users.filter(user => user.socketId !== socketId);
}


io.on('connection', socket => {

    console.log('A new user is connected')

    socket.on('addUser', user => {
        addUserInList(user, socket.id);
        io.emit('getUsers', users);
    });

    socket.on('join', ({ name }, callback) => {
        users = [...users, name];
        callback(users);
    })


    socket.on('newMessage', data => {
        console.log(data)
        io.to(data.receiverSocketId).emit('message', data);
    });

    socket.on('disconnect', () => {
        removeUserFromList(socket.id)
        io.emit('getUsers', users);
        console.log('User had disconnected')

    });

});



const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log('listening on port ' + port)
})