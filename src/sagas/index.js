import {all} from 'redux-saga/effects'
import messagesSaga from './messagesSaga'

export default function* rootSaga() {
    yield all([
        messagesSaga(),
    ]);
  }