let randomBtn = document.getElementById('random')
let previousBtn = document.getElementById('previous')
let nextBtn = document.getElementById('next')
let end = document.getElementById('end')
let img = document.querySelector(`img`)
let name = document.getElementById('name')
let id = document.getElementById('id')
let height = document.getElementById('height')
let weight = document.getElementById('weight')
let type = document.getElementById('type')
let randomNum

randomBtn.addEventListener(`click`, random)
previousBtn.addEventListener(`click`, previous)
nextBtn.addEventListener(`click`, next)


function random() {
    randomNum = Math.floor(Math.random() * 100)
    console.log(randomNum)
    pokimon()
}

function pokimon() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
        .then(res=> res.json())
        .then(json=> json.results)
        .then(res=> {
            console.log(res)
            fetch(res[randomNum].url)
                .then(res => res.json())
                .then(res=> {
                    console.log(res)
                    img.style.height = `200px`
                    img.style.width = `300px`
                    img.style.marginBottom = `130px`
                    img.setAttribute(`src`, res.sprites.front_default)
                    name.textContent = res.name
                    id.textContent = `id: ${res.id}`
                    height.textContent = `height: ${res.height}`
                    weight.textContent = `weight: ${res.weight}`
                    type.textContent = `type: ${res.types[0].type.name}`
                })
                .catch(img.setAttribute(`src`, `http://www.complicite.org/_images/loading.gif`))
        })
        .catch(name.textContent = `Oh no! That Pokemon isn't available`)

}

function previous() {
    if (randomNum>0) {
        end.textContent = ``
        randomNum--
        pokimon()  
    } else {
        end.textContent = `unown is the first pokimon`
    }

}

function next() {
    if (randomNum<99) {
        randomNum++
        end.textContent = ``
        pokimon()
    } else {
        end.textContent = `skitty is the last pokimon`
    }
}