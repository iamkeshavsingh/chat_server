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

var users = [];


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/channel', channelRoutes)


io.on('connection', socket => {

    console.log('A new user is connected')

    socket.on('join', ({ name }, callback) => {
        users = [...users, name];
        callback(users);
    })

    socket.on('disconnect', () => {
        console.log('User had disconnected')

    });
    console.log(socket);
});



const port = process.env.PORT || 5000;

httpServer.listen(port, () => {
    console.log('listening on port ' + port)
})