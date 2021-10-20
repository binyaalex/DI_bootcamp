let listTasks = [];
let btn = document.getElementById('btn');
let input = document.getElementById(`input`);
let inputValue
let divList = document.getElementById(`list`)

btn.addEventListener(`click`, addTask)

function addTask (e) {
	e.preventDefault();
	inputValue = input.value
	console.log(inputValue);
	if (inputValue !== ``) {
		listTasks.push(inputValue)
	}
	console.log(listTasks)
	let newLi = document.createElement(`li`);
	let newInp = document.createElement(`input`);
	newInp.setAttribute(`type`, `checkbox`);
	let newI = document.createElement(`i`);
	newI.classList.add(`fas`);
	newI.classList.add(`fa-times`);
	newLi.textContent = listTasks[listTasks.length-1]
	newLi.appendChild(newInp)	
	divList.appendChild(newLi);
	newLi.appendChild(newI);
}