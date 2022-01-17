let random = Math.floor(Math.random() * 100) + 1;
for (let i = 0; i < random; i++) {
	if (i%2 === 0) {
		console.log(i)
	}
}

function cap(string) {
	let arr = []
	let even = ``
	let odd = ``
	for (let i = 0; i < string.length; i++) {
		if (i%2 === 0) {
			even += string[i].toUpperCase()
			odd += string[i]
		} else {
			odd += string[i].toUpperCase()
			even += string[i]
		}
	}
	arr.push(even)
	arr.push(odd)
	console.log(arr)
}

cap(`abcdefg`)

function palindrome(string) {
	let counter = 0
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[string.length-1-i]) {
			counter++
		}
	}
	console.log(counter === string.length)
}

palindrome (`madam`)

function biggestNumberInArray(arr) {
	if (arr.length > 0) {
		let strings = []
		for (let i = 0; i < arr.length; i++) {
			if (typeof(arr[i]) === `string`) {
				strings.push(i)
			}
		}
		console.log(strings)
		let c = 0
		for (let i = 0; i < strings.length; i++) {
				arr.splice(strings[i]-c, 1)
				c++
		}
		for (let i = 0; i < arr.length; i++) {
			if (arr.every(el=> arr[i]>=el)) {
				console.log(arr[i])
			}		
		}
	} else {
		console.log(0)
	}
}

biggestNumberInArray([])

function unique(arr) {
	let counter = 0
	let doubles = []
	for (let i = 0; i < arr.length; i++) {
		for (let d = 0; d < arr.length; d++) {
			if (arr[i] === arr[d]) {
				counter++
			}
		}
		if (counter >= 2) {
			doubles.push(i)
		}
		counter=0
	}
	let c = 0
	for (let i = 0; i < doubles.length-1; i++) {
			arr.splice(doubles[i]-c, 1)
			c++
	}
	console.log(arr)
}

unique([1,2,3,3,3,3,4,5])