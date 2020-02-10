import store from './store'

import io from 'socket.io-client'

const socket = io('localhost:5000');

socket.on('RECEIVE_MESSAGE', (data) => {
    console.log(`LOGGING DATA`);
    console.log(data);
    //Logging the socket message in the messages reducer
    store.dispatch({ type: 'SET_MESSAGES', payload: data })
})


export default socket