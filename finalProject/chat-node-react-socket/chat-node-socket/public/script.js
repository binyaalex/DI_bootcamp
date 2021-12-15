console.log('script node')
const socket = io()

const userInputName = document.querySelector('.userInputName')
const userInputNumber = document.querySelector('.userInputNumber')
const sendInputNumber = document.querySelector('.sendInputNumber')
const userInputRoom = document.querySelector('.userInputRoom')
const chat = document.querySelector('.chat-form')
const Input = document.querySelector('.chat-input')
const chatWindow = document.querySelector('.chat-window') 
console.log(userInputName)
const namef = (e) => {
	socket.emit('userName', e.target.value)
}
userInputName.addEventListener('change', namef)
const userNumberf = (e) => {
  socket.emit('userNumber', e.target.value)
}
userInputNumber.addEventListener('change', userNumberf)
const sendNumberf = (e) => {
  console.log(e.target.value)
  socket.emit('sendNumber', e.target.value)
}
sendInputNumber.addEventListener('change', sendNumberf)
// const roomf = (e) => {
// 	socket.emit('userRoom', e.target.value)
// }
// userInputRoom.addEventListener('change', roomf)


chat.addEventListener('submit', event => {
  console.log(1)
  event.preventDefault()
  socket.emit('chat', Input.value)
  Input.value = ''
})

socket.on('chat', chat => {
  console.log('From server: ', chat)
  let div = document.createElement('div')
  let strong = document.createElement('strong')
  let p = document.createElement('p')
  strong.textContent = chat.userName + ': '
  p.appendChild(strong)
  let text = document.createTextNode(chat.message);
  p.appendChild(text)
  div.appendChild(p)
  chatWindow.appendChild(div)
})