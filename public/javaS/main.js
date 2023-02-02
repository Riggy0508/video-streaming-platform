const socket = io('/');

socket.on('connect', () => {
  console.log('Successfull connected to socket.io server');
  console.log(socket.id);
});
