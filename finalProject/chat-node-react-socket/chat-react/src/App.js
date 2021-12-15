import React, { useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Sign from './components/Sign';
import Main from './components/Main';
import io from 'socket.io-client';

let socket = io("http://localhost:5000", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
});

function App() {
  // const [userInputName, setUserInputName] = useState('');
  // const [userInputNumber, setUserInputNumber] = useState('');
  // const [sendInputNumber, setSendInputNumber] = useState('');
  // const [chatInput, setChatInput] = useState('');

  const ENDPOINT = 'http://localhost:5000/';

  useEffect(() => {
        socket = io(ENDPOINT);
        socket.on('chat', chat => {
          const conversation = document.querySelector('.conversation')
          console.log(conversation)
          console.log('From server: ', chat)
          let div = document.createElement('div')
          div.classList.add('message')
          if (userInputName == chat.userName) {
            div.classList.add('userMessage')  
          } else { 
            div.classList.add('otherMessage')  
          }
          // let userName = document.createElement('div')
          let text = document.createElement('div')
          // userName.textContent = chat.userName + ': '
          // div.appendChild(userName)
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
    socket.emit('userName', userInputName)
    socket.emit('userNumber', userInputNumber)
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

  let roomNumber
  const add = () => {
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
    socket.emit('sendRoom', roomNumber)    
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
    socket.emit('sendRoom', roomNumber)    
    console.log(e.target.classList[0])
    const rooms = document.querySelector('.conversation').children
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
      <Route exact path="/main">
        <Main saveSendNum={saveSendNum} saveSendName={saveSendName} add={add}  sendMessage={sendMessage} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
