let d = `Here come dots`
let b = `The Morse Code`
const anagram = (string1, string2) => {
  let string1Arr = string1.toLowerCase().split(``).sort()
  let string2Arr = string2.toLowerCase().split(``).sort()
  let i1 = string1Arr.lastIndexOf(` `)
  string1Arr.splice(0, i1+1)
  let i2 = string2Arr.lastIndexOf(` `)
  string2Arr.splice(0, i2+1)
  console.log(string2Arr.join() === string1Arr.join())
}

anagram(d, b)