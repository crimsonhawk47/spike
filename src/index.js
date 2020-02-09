import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store'
// import socket from './socket/receiveMessage.socket'
// import createSocketIoMiddleware from 'redux-socket.io';

//Attaching socket.io-redux middleware to socket so we can send actions to server sockets



// let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
