let section = document.querySelector(`section`)


    let res = JSON.parse(localStorage.getItem("tasks"))     
for (let i = 0; i < res.length; i++) {
    console.log(res)
    let task = document.createElement(`div`)
    task.classList.add(`task`)
    section.appendChild(task)
    let divCheck = document.createElement(`div`)
    divCheck.classList.add(`divCheck`)
    task.appendChild(divCheck)
    let done = document.createElement(`input`)
    done.setAttribute(`type`, `checkbox`)
    done.addEventListener(`click`, colorDone)
    divCheck.appendChild(done)
    let name = document.createElement(`h1`)
    name.addEventListener(`click`, showDescrip)
    name.addEventListener(`dblclick`, addInput)
    name.textContent = res[i].name
    divCheck.appendChild(name)
    let descrip = document.createElement(`h4`)
    descrip.addEventListener(`dblclick`, addInput)
    descrip.textContent = res[i].description
    descrip.style.display = `none`
    task.appendChild(descrip)
    let start = document.createElement(`h3`)
    start.addEventListener(`dblclick`, addInput)
    start.textContent = `start: ${res[i].start}`
    task.appendChild(start)
    let endDateArr = []
    endDateArr.push(res[i].end[8])
    endDateArr.push(res[i].end[9])
    let endDate = Number(endDateArr.join(``))
    console.log(endDate)
    let dayLeft = document.createElement(`h3`)
    dayLeft.textContent = `there is ${endDate - new Date().getDate()} days left to complete the task`
    task.appendChild(dayLeft)
    let dlt = document.createElement(`button`)
    dlt.textContent = `delete`
    dlt.addEventListener(`click`, deleteTask)
    task.appendChild(dlt)
}
  

function showDescrip(e) {
    let descrip = e.target.parentElement.nextSibling
    if (descrip.style.display === `none`) {
        descrip.style.display = `block`    
    } else {
        descrip.style.display = `none`    
    }
    
}

function colorDone (e) {
    console.log(e.target.nextSibling)
    if (e.target.checked) {
        e.target.parentElement.parentElement.style.color = `green`
    } else {
        e.target.parentElement.parentElement.style.color = `red`
    }
}

past()
function past () {
    for (let i = 0; i < res.length; i++) {
        let endDateArr = []
        endDateArr.push(res[i].end[8])
        endDateArr.push(res[i].end[9])
        let endDate = Number(endDateArr.join(``))
        if (endDate < new Date().getDate()) {
            section.children[i+1].style.color = `gray`
        }
    }
}

function deleteTask(e) {
    if (confirm(`are you sure you want to delete the task`)) {
    e.target.parentElement.remove()        
    }
}

function addInput(e) {
    console.log(e)
    console.log(e.path[0].localName)
    let input = document.createElement(`input`)
    input.addEventListener(`keydown`, edit)
    e.target.appendChild(input)
    if (e.path[0].localName === `h3`) {
        input.setAttribute(`type`, `datetime-local`)
    }
}

function edit(e) {
    if (e.keyCode === 13) {
        e.target.parentElement.textContent = e.target.value
        e.target.remove()
    }
}

function addInput2(e) {
    console.log(e)
    let input = document.createElement(`input`)
    input.addEventListener(`keydown`, edit2)
    e.target.parentElement.appendChild(input)
}

function edit2(e) {
    if (e.keyCode === 13) {
        e.target.previousElementSibling.textContent = e.target.value
        e.target.remove()
    }
}