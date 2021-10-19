let square = document.body.children[1].firstElementChild;
let boxes = document.getElementsByClassName('box')

square.addEventListener("dragstart", dragStart);

for (let box of boxes) {
	box.addEventListener("drop", dragDrop);
	box.addEventListener("dragover", dragOver);

}


function dragStart (e) {
	e.target.classList.add(`hold`);
	event.dataTransfer.setData("text/plain",event.target.id)
}

function dragOver (event) {
	event.preventDefault();
}


function dragDrop (e) {
	console.log(`nuuuu`)
	e.preventDefault();
	e.target.appendChild(square)
}