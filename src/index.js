import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import io from 'socket.io-client'
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'
// import createSocketIoMiddleware from 'redux-socket.io';
import socketIO from 'socket.io-redux';

const socket = io('localhost:5000');
//Attaching socket.io-redux middleware to socket so we can send actions to server sockets
let socketMiddleware = socketIO(socket)

socket.on('RECEIVE_MESSAGE', (data) => {
    console.log(`LOGGING DATA`);
    console.log(data);
    // put({type: 'SET_MESSAGES', action: data.message})
    store.dispatch({ type: 'SET_MESSAGES', payload: data.message })
})

// let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
    rootReducer,
    // adds all middleware to our project including saga and logger
    applyMiddleware( sagaMiddleware, logger, socketMiddleware),
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
