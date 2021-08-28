const app = require("express")();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*"
    }
});
const cors = require("cors");
const userRoutes = require("./routes/user.routes")

var users = [];


app.use(cors())

app.use('/user', userRoutes);


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