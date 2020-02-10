const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const socket = require('socket.io')


// // Route includes
// const favoriteRouter = require('./routes/favorite.router');
// const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));



// /* Routes */
// app.use('/api/favorite', favoriteRouter);
// app.use('/api/category', categoryRouter);



// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
server = app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});



let messages = [];
//Start of websocket work
//Creating a socket on the server
io = socket(server)

//When someone connects, we attach some events to their socket
io.on('connection', (socket) => {
  console.log(socket.id);
  
  io.to(socket.id).emit('SOCKET_MESSAGES', messages)

  socket.on('SEND_MESSAGE', function (data) {
    console.log(`Getting Message from ID: ${socket.id}`);
    console.log(`USERNAME: ${data.username}- - - - MESSAGE: ${data.message}`);
  
    messages = [...messages, data];
    io.emit('SOCKET_MESSAGES', messages);

    //Sending a socket message back to the socket file
    
  })
})
