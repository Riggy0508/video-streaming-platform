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

let connectedPeers = [];

io.on('connection', (socket) => {
  connectedPeers.push(socket.id);
  console.log('user Connected');
  console.log(connectedPeers);

  socket.on('pre-offer', (data) => {
    console.log('Pre-Offer-came');
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log('User Disconnected');

    const newConnectedPeers = connectedPeers.filter((peerSocketId) => {
      return peerSocketId !== socket.id;
    });

    connectedPeers = newConnectedPeers;
    console.log(connectedPeers);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
