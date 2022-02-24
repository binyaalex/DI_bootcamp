const get = document.getElementById('get')
get.addEventListener(`click`, getItem)
const getAll = document.getElementById('getAll')
getAll.addEventListener(`click`, getAllF)
const post = document.getElementById('post')
post.addEventListener(`click`, postItem)
// const dlt = document.getElementById('dlt')
// dlt.addEventListener(`click`, dltCountry)


function getItem(){
  const id = document.getElementById('id').value
  console.log('w')
  fetch(`http://localhost:3000/items/${id}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    console.log(data[0].name)
    const div = document.getElementById('div')
    const item = document.createElement('h1')
    item.textContent = `${data[0].name} price: ${data[0].price}$`
    div.appendChild(item)
  })
  .catch(e => {
    console.log(e);
  })
}

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

// function dltCountry(){
//   const name = document.getElementById('name').value
//   console.log('w')
//   fetch(`http://localhost:3000/api/countries/${name}`, {
//     method: 'DELETE', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     // body: JSON.stringify(name),
//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     console.log(data[0].country)
//     const div = document.getElementById('div')
//     const country = document.createElement('h1')
//     country.textContent = data[0].country
//     div.appendChild(country)
//   })
//   .catch(e => {
//     console.log(e);
//   })
// }