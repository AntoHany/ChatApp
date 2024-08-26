const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/router')
const cors = require('cors');
const { createServer } = require('node:http');
const initSocketIO = require('./socket.io');

const port = 5000 || process.env.PORT;
const pass = 'amcOcSFnQvhLEazy';
const app = express();
const server = createServer(app);
const io = initSocketIO(server)

app.use(cors());
app.use(express.json({limit: '100mb'}));


app.get('/', (req, res) => {
  res.send('<h1 style="color:#14ac79">Hi Admin</h1>')
})

mongoose.connect(`mongodb+srv://antonhany67:${pass}@cluster0.xhsdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => {
  console.log('Connected Succsesfuly To DataBase!');
  app.use(router);
  // === Socket.io
  server.listen(port, () => {
    console.log(`Server run at PORT ${port}!`);
  });
})
.catch((err) => {
  console.log(`Can NOT Connecte To DataBase! => ${err}`);
})