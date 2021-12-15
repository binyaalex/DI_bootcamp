
const cors = require('cors')
const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 5000
const socketio = require('socket.io')
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});
app.use(cors())

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};
// import path among other dependencies
const path = require('path')
app.use(express.static(path.join(__dirname + '/public')))

io.on('connection', socket => {
  socket.userName = 'Anonymous'
  console.log('Some client connected')
  socket.on('userName', userName => {
    console.log('From client: ', userName)
    socket.userName = userName
  })

  socket.on('userNumber', userNumber => {
    console.log('From client: ', userNumber)
    socket.userNumber = userNumber
  })

  socket.on('sendNumber', sendNumber => {
    console.log('From client: ', sendNumber)
    socket.sendNumber = sendNumber
  })

  socket.on('sendRoom', roomNumber => {
    console.log(roomNumber)
    socket.roomNumber = roomNumber
    socket.join(socket.roomNumber)
  })

  socket.on('chat', message => {
    console.log('room',socket.roomNumber)
    console.log('massage: ', message)
    console.log('username: ', socket.userName)
    io.to(socket.roomNumber).emit('chat', {message : message, userName : socket.userName, userRoom : socket.roomNumber})
  })
})	

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})