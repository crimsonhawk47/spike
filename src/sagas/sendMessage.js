import {takeLatest} from 'redux-saga/effects'
import socket from '../socket'

function* sendMessage(action) {
    //Sending a payload to server socket
    yield socket.emit('SEND_MESSAGE', action.payload)
}

function* messagesSaga() {
    yield takeLatest('SEND_MESSAGE', sendMessage)
}

export default messagesSaga