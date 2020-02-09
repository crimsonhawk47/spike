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

io = socket(server)

io.on('connection', (socket) => {
  console.log(socket.id);

  // socket.on('SEND_MESSAGE', function (data) {
  //   io.emit('RECEIVE_MESSAGE', data);
  //   // console.log(data);
    
  // })
  socket.on('SEND_MESSAGE', (data)=>{
    io.emit('RECEIVE_MESSAGE', data.payload)
  })
});
