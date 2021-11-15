
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
}