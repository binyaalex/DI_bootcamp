const div = document.querySelector(`div`)
let xhr = new XMLHttpRequest();
const results = document.getElementById('results')
let go = document.getElementById(`go`)
let allData = {}
const dltAll = document.getElementById(`dltAll`)

go.addEventListener(`click`, search)
dltAll.addEventListener(`click`, deleteAll)

xhr.open('GET', `https://api.giphy.com/v1/gifs/trending?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

xhr.responseType = 'json';
xhr.send();


xhr.onload = function() {
    if (xhr.status != 200) {
        console.log("error status")
        displayError(xhr)
    } else {
        console.log("Finished Loading")
        console.log(xhr.response)
        displayUser(xhr.response)
        allData = xhr.response
    }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
    console.log(event)
    console.log(event.lengthComputable)
  }
};

xhr.onerror = function() {
  console.log('Error something wrong###');
};

const displayUser = (gifs) => {
    console.log(gifs)
    
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => response.json())
    .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let newD = document.createElement('div')
        let dlt = document.createElement('button')
        let img = document.createElement('img')
        dlt.addEventListener(`click`, dltImg)
        img.src = url
        dlt.textContent = `delete`
        newD.appendChild(img)
        newD.appendChild(dlt)
        results.appendChild(newD)
        // console.log(`1`)
      })
     })
    .catch(error => document.body.appendChild = error)

}

const displayError = (xhr) => {
    console.log("in display error")
}

const dltImg = (e) => {
    e.target.previousSibling.style.display = `none`
    e.target.style.display = `none`
}

 let input = document.querySelector(`input`)
function search() {
   
    allData.data.forEach((element, i) => {
        if (element.title.toLowerCase().includes(input.value.toLowerCase())) {
            results.children[i].style.display = `block`
        } else {
            results.children[i].style.display = `none`
        }
    })
}

function deleteAll() {
    results.style.display = `none`
}