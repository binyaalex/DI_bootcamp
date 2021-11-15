/*
function getUser(){
  console.log('w')
  fetch('http://localhost:3000/user')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    showUsers(data);
  })
  .catch(e => {
    console.log(e);
  })
}

function showUsers(obj) {
  const root = document.getElementById('root');
  for (let user in obj) {
  	let h1 = document.createElement('h1')
  	h1.textContent = user
  	root.appendChild(h1)
  }
}

function hello () {
  alert(`hello from js`)
}*/

let btn = document.querySelector(`button`)
btn.addEventListener(`click`, sendData)
function img (data) {
  console.log(data)
  const img = document.createElement(`img`)
  img.setAttribute(`src`, data)
  const root = document.getElementById('root');
  root.appendChild(img)
}

function pic () {
  console.log(1)
  fetch('http://localhost:3000/pic')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    img(data);
  })
  .catch(e => {
    console.log(e);
  })
}

function sendData() {
  let username = document.getElementById('email').value;
  let password = document.getElementById('massage').value;
  fetch('http://localhost:3000/login',{
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({username,password})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })
}

pic()