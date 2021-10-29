let d = `Here come dots`
let b = `The Morse Code`
const anagram = (string1, string2) => {
  let string1Arr = string1.toLowerCase().split(``).sort().join(``).replace(/ /g, ``)
  let string2Arr = string2.toLowerCase().split(``).sort().join(``).replace(/ /g, ``)
  console.log(string2Arr == string1Arr)
}
anagram(d, b)
