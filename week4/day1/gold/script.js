console.log(1)

const sum = (arr) => {
	let total = 0;
	for (let i of arr) {
		total += i;
	}
	console.log(total);
}

const unduplicate = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let d = 0; d < arr.length; d++) {
			i !== d && arr[i] === arr[d] ? arr.splice(d, 1) : console.log(``)
		}	
	}
	console.log(arr)
}

const untrue = (arr) => {
	let arr1 = []
	for (let i = 0; i < arr.length; i++) {
		(arr[i] && arr[i]) ? arr1.push(arr[i]) : console.log(``);
	}
	console.log(arr1)		
}

const repeat = (string, num = 0) => {
	let sentece = string
	for (let i = 0; i < num; i++) {
		sentece += string
	}
	console.log(sentece)
}

const startLine = '     ||<- Start line';
let turtle = 't';
let rabbit = 'r';

i = startLine.indexOf(`<`)
turtle = turtle.padStart(i+1, ` `)
rabbit = rabbit.padStart(i+1, ` `)

console.log(startLine);
console.log(turtle);
console.log(rabbit);