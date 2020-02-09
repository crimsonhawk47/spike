import {all} from 'redux-saga/effects'
import messagesSaga from './sendMessage'
import socket from '../socket/socket'


export default function* rootSaga() {
    yield all([
        messagesSaga(),
    ]);
  }