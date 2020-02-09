import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'
import socket from './socket'
// import createSocketIoMiddleware from 'redux-socket.io';

//Attaching socket.io-redux middleware to socket so we can send actions to server sockets

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
    applyMiddleware( sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
