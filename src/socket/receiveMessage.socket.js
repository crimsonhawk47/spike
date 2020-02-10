
import socket from './socketInit'

import store from '../store'

socket.on('RECEIVE_MESSAGE', (data) => {
    console.log(`LOGGING DATA`);
    console.log(data);
    // put({type: 'SET_MESSAGES', action: data.message})
    store.dispatch({ type: 'SET_MESSAGES', payload: data.message })
})

export default socket