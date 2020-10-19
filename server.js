'use strict';

const express = require('express');
const socketio = require('socket.io');

// Constants
const PORT = 8081;
const HOST = 'localhost';

// App
const app = express();
const server = require("http").createServer(app);
const io = socketio.listen(server);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);