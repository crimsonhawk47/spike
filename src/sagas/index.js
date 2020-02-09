import {all} from 'redux-saga/effects'
import messagesSaga from './sendMessage'



export default function* rootSaga() {
    yield all([
        messagesSaga(),
    ]);
  }