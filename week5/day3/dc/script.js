// dc1
function makeAllCaps(arr) {
    return new Promise((resolve, reject) =>{
        if (!arr.some(el => typeof(el) !== `string`)) {
            arr.forEach((el, i, arr)=>arr[i] = el.toUpperCase())
            resolve(arr)
        } else {
            throw new Error(`your array not full of strings`)
        }
    })
}

function sortWords (arr) {
    return new Promise((resolve, reject) =>{
        arr.sort()
        resolve(arr)
    })
}

let arr1 = [`wer`, `sd`]
makeAllCaps(arr1)
    .then(res => sortWords(res))
    .then(res => console.log(res))
    .catch(err => console.log(err))

// dc2
let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

toJs(morse)
    .then(toMorse)
    .then(joinWords)
    .catch(err=> console.log(err))

//convert json to string
function toJs(jsonString) {
    return new Promise((resolve, reject) =>{
        if (jsonString.length > 0) {
            resolve(JSON.parse(jsonString))
        } else {
            reject(`your json is empety`)
        }
    })
}

function toMorse(morse) {
    let wordOk
    let wordMorse = []
    let word = prompt(`write a word`)
    let morseKeyArr = Object.keys(morse)
    return new Promise((resolve, reject) =>{
        for (let letter of word) {
            wordOk = morseKeyArr.some(el => el === letter) // check if all chart character good
            for (let key in morse) {
                if (key === letter) {
                    wordMorse.push(morse[key]) //make array of the morse letters of the word
                }
            }
        }
        if (wordOk) {
            resolve(wordMorse)
        } else {
            reject(`you use character that not allowed`)
        }
    })
}

function joinWords (morseWord) {
    let letter = ``
    for (let i = 0; i < morseWord.length; i++) {
        letter += morseWord[i] + `\n`
    }
    console.log(letter)
}