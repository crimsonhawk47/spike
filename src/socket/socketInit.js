import io from 'socket.io-client'

import store from '../store'

const socket = io('localhost:5000');

// socket.on('RECEIVE_MESSAGE', (data) => {
//     console.log(`LOGGING DATA`);
//     console.log(data);
//     // put({type: 'SET_MESSAGES', action: data.message})
//     store.dispatch({ type: 'SET_MESSAGES', payload: data.message })
// })

export default socket

