const { Server } = require('socket.io')

function initSocketIO(server){
  const io = new Server(server, {
    cors: {
      origin: "https://chat-app-ten-eta-66.vercel.app",
      methods: ['GET', 'POST'],
    },
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