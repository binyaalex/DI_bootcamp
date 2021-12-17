const cors = require('cors')
const express = require('express')
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: '5432',
    user: 'postgres',
    password: 'test',
    database: 'chatapp'
  }
})


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

  socket.on('userPassword', userPassword => {
    console.log('From client: ', userPassword)
    socket.userPassword = userPassword

  })

  socket.on('loginUserPassword', userPassword => {
    console.log('From client: ', userPassword)
    socket.userPassword = userPassword
  })

  socket.on('loginUserNumber', userNumber => {
    console.log('From client: ', userNumber)
    socket.userNumber = userNumber
    db.select('*').from('users')
    .where({phone_number: socket.userNumber})
    .returning('*')
    .then(data => {
      console.log(data)
      if (data.length > 0) {
        if (data[0].phone_number == socket.userNumber && data[0].password == socket.userPassword) {
          db.select('username', 'room_id').from('users')
          .where({phone_number_1: socket.userNumber})
          .whereNot({phone_number: socket.userNumber})
          .orWhere({phone_number_2: socket.userNumber})
          .whereNot({phone_number: socket.userNumber})
          .join('rooms', function() {
            this.on('phone_number_1', '=', 'phone_number').orOn('phone_number_2', '=', 'phone_number')
          })
          .returning('*')
          .then(data => {
            console.log(data)
            socket.emit('getrooms', data)
          })
          .catch(e => {
            console.log(e)
          })
          db.select('*').from('users')
          .where({phone_number: socket.userNumber})
          .then(data => {
            socket.emit('getuser', data)
          })
          .catch(e => {
            console.log(e)
          })
        } else { 
          console.log('else')       
          socket.emit('passworduncorrect')
        }
      } else {
        socket.emit('loginfailed')         
      }
    })
    .catch( e => {
      console.log(e)
    })

  })

  socket.on('userNumber', userNumber => {
    console.log('From client: ', userNumber)
    socket.userNumber = userNumber
    db.select('phone_number').from('users')
    .where({phone_number: socket.userNumber})
    .returning('*')
    .then(data => {
      console.log('data:', data)
      if (data.length === 0) {
        db('users')
        .insert(
          [
            {
              phone_number: socket.userNumber,
              username: socket.userName,
              password: socket.userPassword
            }
          ]
        )
        .returning('*')
        .then( data => {
          console.log('data:', data)
        })
        .catch(e => {
          console.log('error:',e)
        })
        db.select('*').from('users')
        .where({phone_number: socket.userNumber})
        .then(data => {
          socket.emit('getuser', data)
        })
        .catch(e => {
          console.log(e)
        }) 
      } else {
        socket.emit('signinfailed')         
      }
    })
    .catch(e => {
      console.log(e)
    })
  })

  socket.on('sendNumber', sendNumber => {
    console.log('From client: ', sendNumber)
    socket.sendNumber = sendNumber
  })

  socket.on('joinRoom', roomNumber => {
    console.log(roomNumber)
    socket.roomNumber = roomNumber
    socket.join(socket.roomNumber)
    db.select('room_id').from('rooms')
    .where({room_id: socket.roomNumber})
    .returning('*')
    .then(data =>{
      console.log('roomdata:', data)
      console.log(data === [])
      if (data.length === 0) {
        console.log(true)
        db('rooms')
        .insert(
          [
            {
              room_id: socket.roomNumber,
              phone_number_1: socket.userNumber,
              phone_number_2: socket.sendNumber
            }
          ]
        )
        .returning('*')
        .then( data => {
          console.log('data:', data)
        })
        .catch(e => {
          console.log('error:',e)
        })
      } else {
        socket.emit('roomexist')         
      }
    })
    .catch(e =>{
      console.log(e)
    })
  })

  socket.on('inRoom', roomNumber => {
    console.log(roomNumber)
    socket.roomNumber = roomNumber
    socket.join(socket.roomNumber)
    db.select('room_id').from('rooms')
    .where({room_id: socket.roomNumber})
    .returning('*')
    .then(data =>{
      console.log('roomdata:', data)
      console.log(data === [])
      if (data.length === 0) {
        console.log(true)
        db('rooms')
        .insert(
          [
            {
              room_id: socket.roomNumber,
              phone_number_1: socket.userNumber,
              phone_number_2: socket.sendNumber
            }
          ]
        )
        .returning('*')
        .then( data => {
          console.log('data:', data)
        })
        .catch(e => {
          console.log('error:',e)
        })
      } else {
        db.select('room_id', 'message_send', 'message_text')
        .from('chats')
        .where({room_id: socket.roomNumber})
        .whereNot({message_send: 'null'})
        .returning('*')
        .then(data => {
          socket.emit('getmessageshistory', data)
        })
        .catch(e => {
          console.log(e)
        })
      }
    })
    .catch(e =>{
      console.log(e)
    })
  })

  socket.on('chat', message => {
    console.log('room',socket.roomNumber)
    console.log('massage: ', message)
    console.log('username: ', socket.userName)
    io.to(socket.roomNumber).emit('chat', {
      message : message,
      userName : socket.userName,
      userNumber: socket.userNumber,
      userRoom : socket.roomNumber
    })
    db('chats')
    .insert(
      [
        {
          room_id: socket.roomNumber,
          message_send: socket.userNumber,
          message_get: socket.sendNumber,
          message_text: message
        }
      ]
    )
    .returning('*')
    .then( data => {
      console.log('data:', data)
    })
    .catch(e => {
      console.log('error:',e)
    })
  })
})	


server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})