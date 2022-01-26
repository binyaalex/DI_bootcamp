let x = document.getElementById('x')
let zero = document.getElementById(`zero`)
let one = document.getElementById(`one`)
let two = document.getElementById(`two`)
let three = document.getElementById(`three`)
let four = document.getElementById(`four`)
let five = document.getElementById(`five`)
let six = document.getElementById(`six`)
let seven = document.getElementById(`seven`)
let eight = document.getElementById(`eight`)
let comSol = ``
let plSol = ``
let turn = `pl`
let array = [0,1,2,3,4,5,6,7,8]
let lastPick
let counter = 0
let plArray = []

x.addEventListener(`click`, pick)
o.addEventListener(`click`, pick)
zero.addEventListener(`click`, fill)
one.addEventListener(`click`, fill)
two.addEventListener(`click`, fill)
three.addEventListener(`click`, fill)
four.addEventListener(`click`, fill)
five.addEventListener(`click`, fill)
six.addEventListener(`click`, fill)
seven.addEventListener(`click`, fill)
eight.addEventListener(`click`, fill)

function pick (e) {
	console.log(e.target.textContent)
	if (e.target.textContent === `X`) {
		console.log(1)
		comSol = `O`
		plSol = `X`
	} else {
		comSol = `X`
		plSol = `O`
	}
	console.log(comSol)
	console.log(plSol)
}

function fill(e) {
	if (turn === `pl` && plSol === `X`) {
		array[e.target.textContent] = `X`
		lastPick = e.target.textContent
		e.target.textContent = `X`
		turn = `com`
	} else if (turn === `pl` && plSol === `O`) {
		array[e.target.textContent] = `O`
		lastPick = e.target.textContent
		e.target.textContent = `O`
		turn = `com`
	// } else if (turn === `com` && comSol === x) {
	// 	array[e.target.textContent] = `X`
	// 	e.target.textContent = `X`
	// 	turn = `pl`
	// } else {
	// 	array[e.target.textContent] = `O`
	// 	e.target.textContent = `O`
	// 	turn = `pl`
	}
	console.log(array)
	comPlay(plSol, comSol)
}

function comPlay (plShape, comShape) {
		if (lastPick == 4) {
			array[0] = comShape
			zero.textContent = comShape
			turn = `pl`
				if (lastPick === 1) {
					array[7] = comShape
					seven.textContent = comShape
					turn = `pl`
				}
		} else {
			array[4] = comShape
			four.textContent = comShape
			turn = `pl`
		}
}


if (array.includs(3))