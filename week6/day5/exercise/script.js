let inputs = document.querySelectorAll(`input`)
let name = inputs[0]
let description = inputs[1]
let start = inputs[2]
let end = inputs[3]
let add = document.querySelector(`button`)

let tasksArr = []

add.addEventListener(`click`, addTask)

function addTask(e) {
    e.preventDefault()
    let counter = 0
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== ``) {
            counter++
        }
    }
    console.log(counter)
    if (counter === 4) {
        let taskObj = {}
        taskObj.name = name.value
        taskObj.description = description.value
        taskObj.start = start.value
        taskObj.end = end.value
        tasksArr.push(taskObj)
        console.log(tasksArr)
        localStorage.setItem("tasks", JSON.stringify(tasksArr))
    }
} 
