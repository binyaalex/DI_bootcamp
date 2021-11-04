let person = document.getElementById('person')
let btn = document.querySelector(`button`)
let xhr = new XMLHttpRequest();

btn.addEventListener(`click`, send)


function send() {
    console.log(person.firstElementChild)
    person.firstElementChild.remove()
    let newD = document.createElement(`div`)
    person.appendChild(newD)
    let load = document.createElement(`i`)
    load.setAttribute(`class`, `fa-6x fas fa-cog fa-spin`)
    newD.appendChild(load);
    let random = Math.floor(Math.random() * 84)
    xhr.open('GET', `https://swapi.dev/api/people/${random}/`);
    xhr.responseType = 'json';
    console.log(xhr)
    xhr.send()
}


xhr.onload = function() {
    if (xhr.status != 200) {
        displayError(xhr)
    } else {
        person.firstElementChild.firstElementChild.style.display = `none`
        displayStar(xhr.response) 
    }
};

const displayStar = async (stars) => {
    let array = []
    let home
    await fetch(stars.homeworld)
        .then(response => {
            if(response.status == 200){ //or response.ok
                // console.log(response.json())                
                return response.json();
            } 
            else {
                throw new Error("not 200")
            }
        })
        .then(data => home = data)
    array.push(`Height: ${stars.height}`)
    array.push(`gender: ${stars.gender}`)
    array.push(`Birth Year: ${stars.birth_year}`)
    array.push(`Home World: ${home.name}`)
    let newh1 = document.createElement(`h1`)
    person.firstElementChild.appendChild(newh1)
    newh1.textContent = stars.name
    for (let i = 0; i < 4; i++) {
        let newp = document.createElement(`p`)
        person.firstElementChild.appendChild(newp)
        newp.textContent = array[i]
    }
}

const displayError = (xhr) => {
    person.firstElementChild.textContent = `Oh No! That person isn't available`
}