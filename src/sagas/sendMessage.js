import {takeLatest, put} from 'redux-saga/effects'

function* sendMessage(action) {
    // yield put({type: 'SET_MESSAGES', payload: 'hi'})
    // yield socket.emit('SEND_MESSAGE', );

    const socketAction = {
        type: 'ADD_TODO',
        payload: action.payload,
        meta: {
          socket: {
            channel: 'SEND_MESSAGE',
          },
        },
      };

    yield put(socketAction)
}

function* messagesSaga() {
    yield takeLatest('SEND_MESSAGE', sendMessage)
}

export default messagesSaga