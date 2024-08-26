const { Server } = require('socket.io')

function initSocketIO(server){
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000"
    }
  }) 

  io.on('connection', (socket) => {
    console.log(`${socket.id} A User Connected!`);

    socket.on('sendMessage', (msg) => {
      io.emit('receiveMessage', msg)
    });

    socket.on('disconnect', (socket) => {
      console.log(`${socket.id} Client Disconnected`);
    });
  });
}

module.exports = initSocketIO;