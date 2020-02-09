import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import logger from 'redux-logger';
import io from 'socket.io-client'

const socket = io('localhost:5000');

socket.on('RECEIVE_MESSAGE', (data) => {
    console.log(`LOGGING DATA`);
    console.log(data);
    // put({type: 'SET_MESSAGES', action: data.message})
    store.dispatch({type: 'SET_MESSAGES', payload: data.message})
    
})

function* watcherSaga() {
    yield takeEvery('SEND_MESSAGE', sendMessage)
}

function* sendMessage(action) {
    // yield put({type: 'SET_MESSAGES', payload: 'hi'})
    yield socket.emit('SEND_MESSAGE', {
        author: action.payload.username,
        message: action.payload.message
    });

}

const sagaMiddleware = createSagaMiddleware();

const messages = (state = [], action) => {
    if(action.type === 'SET_MESSAGES'){
        return [...state, action.payload]
    }
    
    return state
}

const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
    combineReducers({messages}),
    // adds all middleware to our project including saga and logger
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
