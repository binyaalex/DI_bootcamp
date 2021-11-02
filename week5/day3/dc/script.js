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
let morseO = {}
function toJs(json) {
    return new Promise((resolve, reject) =>{
        if (json.length > 0) {
            resolve(JSON.parse(json))
        } else {
            reject(`your json is empety`)
        }
    })
}
let objOk
let wordToMorse = []
toJs(morse)
    .then(res => res)
    .then(res => toMorse(res))
    .then(res => joinWords(res))

function toMorse(morse) {
    let word = prompt(`write a word`)
    // console.log(morse)
    let morseKeyArr = Object.keys(morse)
    // console.log(morseKeyArr)
    for (let i = word.length - 1; i >= 0; i--) {
        objOk = morseKeyArr.some(el => el === word[i])
    }
    for (let i = 0; i < word.length; i++) {
        for (let key in morse) {
            if (key === word[i]) {
                wordToMorse.push(morse[key])
            }
        } 
    }
    return new Promise((resolve, reject) =>{
        if (objOk) {
            resolve(wordToMorse)
        } else {
            reject(`you use character that not alowwed`)
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