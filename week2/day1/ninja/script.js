let sentence = prompt(`give me a sentence containing the word Nemo`)
if (sentence.includes(`Nemo`)) {
	console.log(`I found Nemo at ${sentence.indexOf(`Nemo`)}`)
} else {
	console.log(`I can't find Nemo`)
}

    // 5 >= 1 true
    // 0 === 1 false
    // 4 <= 1 false
    // 1 != 1 false
    // "A" > "B" false
    // "B" < "C" true
    // "a" > "A" true
    // "b" < "A" false
    // true === false false
    // true != true false

let numbers = prompt(`give me two numbers separated by commas`)
console.log(Number(numbers[0]) + Number(numbers[2]))
let boom
let number = prompt(`give me a number`)

if (number<3) {
	boom = `boom`
} else if (number%2===0 && number%5===0) {
	boom = `b`+`o`.repeat(number)+`m`+`!`
	boom = boom.toUpperCase()
} else if (number%2===0) {
	boom = `b`+`o`.repeat(number)+`m`+`!`
} else if (number%5===0) {
	boom = `b`+`o`.repeat(number)+`m`
	boom = boom.toUpperCase()
} else {
	boom = `b`+`o`.repeat(number)+`m`
}
console.log(boom)

