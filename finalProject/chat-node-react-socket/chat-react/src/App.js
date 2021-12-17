import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Sign from './components/Sign';
import Main from './components/Main';
import Login from './components/Login';
import io from 'socket.io-client';
import { useHistory } from "react-router-dom";

let socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function App() {

  const ENDPOINT = 'http://localhost:5000/';
  const history = useHistory();

  useEffect(() => {
        socket = io(ENDPOINT);

        socket.on('signinfailed', data=> {
          alert('this phone number already sign in, try to log in')
        })

        socket.on('loginfailed', data=> {
          alert('there is not a user with this phone number you need to sign in')
        })

        socket.on('passworduncorrect', data=> {
          alert('your password is not correct please try again')
        })

        socket.on('roomexist', data=> {
          alert('you already have this person at your contact list')
        })

        socket.on('getrooms', data=> {
          console.log(data)
          getRoomsF(data)
        })

        socket.on('getuser', user=> {
          console.log(user)
          let greeting = document.createElement('h1')
          greeting.textContent = `Hello ${user[0].username}`
          const conversation = document.querySelector('.conversation')
          conversation.appendChild(greeting)
        })

        socket.on('getmessageshistory', data=> {
          console.log(data)
          const conversation = document.querySelector('.conversation')
          console.log(conversation)
          for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div')
            div.classList.add('message')
            if (userInputNumber == data[i].message_send) {
              div.classList.add('userMessage')  
            } else { 
              div.classList.add('otherMessage')  
            }
            let text = document.createElement('div')
            text.textContent = data[i].message_text
            div.appendChild(text)
            for (let i = 0; i < conversation.children.length; i++) {
              if (conversation.children[i].className == data[i].room_id) {
                conversation.children[i].children[1].appendChild(div)
                conversation.children[i].children[1].scrollTop = conversation.children[i].children[1].scrollHeight
              } 
            }  
          }
        })

        socket.on('chat', chat => {
          console.log(chat.userNumber)
          const conversation = document.querySelector('.conversation')
          console.log(conversation)
          console.log('From server: ', chat)
          let div = document.createElement('div')
          div.classList.add('message')
          if (userInputNumber == chat.userNumber) {
            div.classList.add('userMessage')  
          } else { 
            div.classList.add('otherMessage')  
          }
          let text = document.createElement('div')
          text.textContent = chat.message
          div.appendChild(text)
          for (let i = 0; i < conversation.children.length; i++) {
            if (conversation.children[i].className == chat.userRoom) {
              conversation.children[i].children[1].appendChild(div)
              conversation.children[i].children[1].scrollTop = conversation.children[i].children[1].scrollHeight
            } 
          }
        })
  }, []);

  let userInputName
  let userInputNumber
  const signInF = () => {
    console.log(1)
    userInputName = document.getElementById('userInputName').value
    userInputNumber = document.getElementById('userInputNumber').value
    let userInputPassword = document.getElementById('userInputPassword').value
    console.log(userInputPassword)
    socket.emit('userName', userInputName)
    socket.emit('userPassword', userInputPassword)
    socket.emit('userNumber', userInputNumber)
    // window.location.href = '/main'
  }

  const LogInF = () => {
    console.log(1)
    userInputNumber = document.getElementById('userInputNumber').value
    let userInputPassword = document.getElementById('userInputPassword').value
    socket.emit('loginUserPassword', userInputPassword)
    socket.emit('loginUserNumber', userInputNumber)
  }

  let sendNum
  const saveSendNum = (e) => {
    sendNum = e.target.value
  }

  let sendName
  const saveSendName = (e) => {
    sendName = e.target.value
    console.log(sendName)
  }

  const getRoomsF = (data) => {
    const contactList = document.querySelector('.contactList')
    const conversation = document.querySelector('.conversation')
    for (let i = 0; i < data.length; i++) {
      let person = document.createElement('p')
      person.textContent = data[i].username
      person.addEventListener('click', getInRoom)
      contactList.appendChild(person)
      person.setAttribute('class', data[i].room_id)
      let personRoom = document.createElement('div')
      personRoom.setAttribute('class', data[i].room_id)
      let personRoomName = document.createElement('div')
      personRoomName.textContent = data[i].username
      personRoom.appendChild(personRoomName)
      personRoom.style.display = 'none'
      let messages = document.createElement('div')
      messages.classList.add('messages')
      personRoom.appendChild(messages)
      conversation.appendChild(personRoom)
    }
  }

  let roomNumber = ''
  const add = () => {
    console.log('userInputNumber:', userInputNumber)
    const contactList = document.querySelector('.contactList')
    let person = document.createElement('p')
    person.textContent = sendName
    socket.emit('sendNumber', sendNum)    
    person.addEventListener('click', getInRoom)
    contactList.appendChild(person)
    const conversation = document.querySelector('.conversation')
    let personRoom = document.createElement('div')
    if (sendNum > userInputNumber) {
      roomNumber = userInputNumber + sendNum
    } else {      
      roomNumber = sendNum + userInputNumber
    }
    console.log(roomNumber)
    person.setAttribute('class', roomNumber)
    socket.emit('joinRoom', roomNumber)    
    personRoom.setAttribute('class', roomNumber)
    let personRoomName = document.createElement('div')
    personRoomName.textContent = sendName
    personRoom.appendChild(personRoomName)
    personRoom.style.display = 'none'
    let messages = document.createElement('div')
    messages.classList.add('messages')
    personRoom.appendChild(messages)
    conversation.appendChild(personRoom)
    console.log(contactList)
    document.querySelector('.sendInputNumber').value = ''
    document.querySelector('.sendInputName').value = ''
  }

  const getInRoom = (e) => {
    roomNumber = e.target.classList[0]
    socket.emit('inRoom', roomNumber)    
    console.log(e.target.classList[0])
    const rooms = document.querySelector('.conversation').children
    console.log(rooms)
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].localName === 'h1') {
        rooms[i].remove()
      } 
    }
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].className == roomNumber) {
        document.querySelector('.conversation').children[i].style.display = 'unset'
      } else {
        document.querySelector('.conversation').children[i].style.display = 'none'
      }
    }
    document.querySelector('.sendMessageDiv').style.display = 'flex'
  }

  const sendMessage = () => {
    let messageText = document.getElementById('messageInput').value
    socket.emit('chat', messageText)
    document.getElementById('messageInput').value = ''
  }

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Sign  signInF={signInF} />
      </Route>
      <Route exact path="/login">
        <Login  LogInF={LogInF} />
      </Route>
      <Route exact path="/main">
        <Main saveSendNum={saveSendNum} saveSendName={saveSendName} add={add}  sendMessage={sendMessage} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
