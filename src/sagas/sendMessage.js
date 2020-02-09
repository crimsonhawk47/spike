import {takeLatest, put} from 'redux-saga/effects'
import socket from '../socket/socket'

function* sendMessage(action) {
    // yield put({type: 'SET_MESSAGES', payload: 'hi'})
    // yield socket.emit('SEND_MESSAGE', );


    yield socket.emit('SEND_MESSAGE', action.payload)
}

function* messagesSaga() {
    yield takeLatest('SEND_MESSAGE', sendMessage)
}

export default messagesSaga