import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'


//Allows us to use redux sagas with applyMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    // tells the saga middleware to use the rootReducer
    // rootSaga contains all of our other reducers
    rootReducer,
    // adds all middleware to our project including saga and logger
    applyMiddleware( sagaMiddleware, logger),
    );
    
sagaMiddleware.run(rootSaga)

export default store