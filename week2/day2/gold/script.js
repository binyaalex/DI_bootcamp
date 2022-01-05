let lang = prompt(`which language do you speak?`).toLowerCase()
if (lang === `french`) {
	alert(`Bonjour`)
} else if (lang === `english`) {
	alert(`Hello`)
} else if (lang === `hebrew`) {
	alert(`Shalom`)
} else {
	alert(`01110011 01101111 01110010 01110010 01111001`)
}

let grade = prompt(`write your grade`)
if (grade > 90) {
	console.log(`A`)
} else if (80 < grade && grade <= 90) {
	console.log(`B`)
} else if (70 <= grade && grade <= 80) {
	console.log(`C`)
} else if (grade < 70) {
	console.log(`D`)
}

let verb = prompt(`write your verb`)
if (verb.length > 2 && !verb.endsWith(`ing`)) {
	verb += `ing`
} else if (2 < verb.length) {
	verb += `ly`
}