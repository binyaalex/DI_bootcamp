function emp (string) {
	console.log(string===undefined)
}
emp()
function abbrevName(name) {
	let arr = name.split(` `)
	console.log(arr[0] + ` ` + arr[1][0])
}

abbrevName("Robin Singh")

function swap(string) {
	let arr = string.split(``)
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i].toLowerCase()) {
			arr[i] = arr[i].toUpperCase()	
		} else {
			arr[i] = arr[i].toLowerCase()
		}
	}
	console.log(arr.join(``))
}
swap('The Quick Brown Fox')

function isOmnipresent(arr, num) {
	let answer = arr.every((el, i, arr) => el.includes(num))
	console.log(answer)
}
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)