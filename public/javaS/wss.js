import * as store from './store.js';
import * as ui from './ui.js';
import * as webRTCHandler from './handlerWebRTC.js';

let socketIO = null;

export const registerSocketEvents = (socket) => {
  socketIO = socket;
  socket.on('connect', () => {
    console.log('Successfull connected to socket.io server');
    console.log(socket.id);
    store.setSocketId(socket.id);
    ui.updatePersonalCode(socket.id);
  });
  socket.on('pre-offer', (data) => {
    //console.log('pre-offer came');
    webRTCHandler.handlePreOffer(data);
  });
  socket.on('pre-offer-answer', (data) => {
    webRTCHandler.handlePreOfferAnswer(data);
  });
};
export const sendPreOffer = (data) => {
  console.log('emiitting to server to pre offer event');
  socketIO.emit('pre-offer', data);
};

export const sendPreOfferAnswer = (data) => {
  console.log('Inside-Send_preoffer');
  socketIO.emit('pre-offer-answer', data);
};
