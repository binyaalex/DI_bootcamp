// Create a function that takes in two strings as two parameters and returns a boolean
// that indicates whether or not the first string is an anagram of the second string.

const anagram = (string1, string2) => {
  let string1Arr = string1.toLowerCase().split(``).sort().join(``).replace(/ /g, ``)
  let string2Arr = string2.toLowerCase().split(``).sort().join(``).replace(/ /g, ``)
  console.log(string2Arr == string1Arr)
}


let d = `Here come dots`
let b = `The Morse Code`
anagram(d, b)
