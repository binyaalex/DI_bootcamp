let input = document.getElementById('input')
let value
let lastValue

input.addEventListener(`keydown`, keyDown);
// input.addEventListener(`keydown`, keyDown);

function notNumbers (e) {
	console.log(e.keyCode)
		if (47 < e.keyCode && e.keyCode < 58) {
		e.preventDefault()
		}
}
function keyDown (e) {
	notNumbers(e)
}

function keyUp (e) {
	notNumbers(e)
}


