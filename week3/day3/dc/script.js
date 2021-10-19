let input = document.getElementById('input')
let value
let lastValue

input.addEventListener(`keyup`, keyUp);
// input.addEventListener(`keydown`, keyDown);

function notNumbers (e) {
	value = e.target.value;
	lastValue = value[value.length-1]
	let numbers = [`1`, `2`, `3`, `4`, `5`, `6`, ,`7` ,`8`, `9`, `0`]
	for (let i = 0; i < numbers.length; i++) {
		if (lastValue === numbers[i]) {
		e.target.value = value.slice(0, value.length-1)
		}
	}
}
function keyDown (e) {
	notNumbers(e)
}

function keyUp (e) {
	notNumbers(e)
}


