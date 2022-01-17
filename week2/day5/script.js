let numbers = []
let showBack = []
let show
let operatorUse
let result
let check = 1
let operNum = 0
function number (num) {
	console.log(num)
	if (check !== 0) {
		numbers.push(num);
	} else {
		numbers.splice(numbers.length-1, 1, numbers[numbers.length-1] + `${num}`)
		console.log(numbers[numbers.length-1])
	}
	showBack.push(num)
	show = showBack.join(``)
	document.getElementById("demo").innerHTML = show;
	check = 0
	return num;
}

function operator (oper) {
	console.log(oper)
	if (operNum !== 0) {
		result = eval(`${numbers[numbers.length - 2]} ${operatorUse} ${numbers[numbers.length - 1]}`)
		numbers.push(result)
	}
	showBack.push(oper)
	show = showBack.join(``)
	document.getElementById("demo").innerHTML = show;
	operatorUse = oper;
	check = 1
	operNum++
	return oper;
}

function equal () {
	result = eval(`${numbers[numbers.length - 2]} ${operatorUse} ${numbers[numbers.length - 1]}`)
	show = result
	document.getElementById("demo").innerHTML = show
	showBack = []
	check = 1
	// if (operNum !== 0) {
	// 	numbers.push(result)
	operNum = 0
	// }
	console.log(numbers)
	console.log(result)
	// for (var i = operNum; i < numbers.length; i++) {
	// 	numbers[i]
	// }
}

function clear1 () {
numbers = []
	showBack = []
	show = ``
	document.getElementById("demo").innerHTML = show
	console.log(`clear`)
}

