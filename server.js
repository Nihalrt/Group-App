import socketIo from "socket.io";

const express = require('express')
const next = require('next')
const http = require('http')
const socketio = require('socketio')
const connectDB = require('./backend/db')
const Message = require('./backend/models/Message');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    connectDB();

    server.use(express.json());

    //Handling the NextJS pages

    server.all('*', (req, res) => {
        return handle(req, res);
    })

    //Creating HTTP Server and initializing Socket.IO

    const httpServer = http.createServer(server);
    const io = socketIo(httpServer);

    io.on('connection', (socket) => {
        console.log("New client connected");
        socket.on('join', ({studyGroupId}) => {
            socket.join(studyGroupId);
        });
    })

    

})


