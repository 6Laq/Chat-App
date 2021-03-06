const express = require('express');
const app = express();

const server = app.listen(3001, function(){
  console.log('server is running on port 3001')
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log(socket.id)
  socket.on('Send_Message', function(data) {
    io.emit('Message', data)
  })
});