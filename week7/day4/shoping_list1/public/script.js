const getAll = document.getElementById('getAll')
getAll.addEventListener(`click`, getAllF)
const post = document.getElementById('post')
post.addEventListener(`click`, postItem)


function getAllF(){
  console.log('w')
  fetch(`http://localhost:3000/items/`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(data[0].name)
    const div = document.getElementById('div')
    for (let i = 0; i < data.length; i++) {
      const item = document.createElement('h1')
      item.textContent = `${data[i].name} price: ${data[i].price}$`
      div.appendChild(item)
    } 
  })
  .catch(e => {
    console.log(e);
  })
}
function postItem(){
  const nameV = document.getElementById('name').value
  const priceV = document.getElementById('price').value
  const obj = {
    name: nameV,
    price: priceV
  }
  console.log('w')
  fetch(`http://localhost:3000/items/${nameV}/${priceV}`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),})
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(data[0].name)
    const div = document.getElementById('div')
    for (let i = 0; i < data.length; i++) {
      const item = document.createElement('h1')
      item.textContent = `add ${data[i].name} price: ${data[i].price}$`
      div.appendChild(item)
    }
  })
  .catch(e => {
    console.log(e);
  })
}