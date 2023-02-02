const express = require('express');
const http = require('http');

const PORT = process.env.port || 3000; //we are using process.env.port becuase going ahead we will be usign heroku for setting up this project

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/start.html');
});

io.on('connection', (socket) => {
  console.log('User Connected to socket server');
  console.log(socket.id);
});

server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
