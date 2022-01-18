import WORDS from '../components/wordList'
import HebrewWords from '../components/HebrewWordList'

console.log(HebrewWords)
let randomNum = Math.floor(Math.random() * WORDS.length);
const hebrewRandomNum = Math.floor(Math.random() * HebrewWords.length);
console.log(WORDS.length)

const finalToRegular = (letter) => {
	if (letter === 'ם') {
		letter = 'מ'
	} else if (letter === 'ף') {
		letter = 'פ'
	} else if (letter === 'ץ') {
		letter = 'צ'
	} else if (letter === 'ן') {
		letter = 'נ'
	} else if (letter === 'ך') {
		letter = 'כ'
	}
	return letter
}

export const initState = {
		language: 'E',
		direction: [0,1,2,3,4],
		wordList: WORDS,
		dailyWord: WORDS[randomNum],
		userWord: ['','','','','',''],
		result: [],
		turn: 0
	}

randomNum = Math.floor(Math.random() * initState.wordList.length);
console.log(initState.dailyWord)
export const reducer = (state=initState, action={}) => {
	console.log(state.userWord)
	let try1 = {...state.userWord}
	console.log(try1)
	switch (action.type) {
		case 'CHANGE':
		  if (state.userWord[state.turn].length < 5) {
		  	try1[state.turn] += action.payload
		  	return {...state, userWord: try1}	
		  } else {
		  	return {...state}
		  }
		case 'DEL':
		  console.log(state.turn)
		  try1[state.turn] = try1[state.turn].slice(0, -1);
		  console.log(try1)
		  return {...state, userWord: try1}
		case 'ENTER':
		// make last letter good for hebrew in user word and daily word
		let userWord = state.userWord[state.turn]
		let dailyWord = state.dailyWord
		let userWordLastLetter = finalToRegular(userWord[4])
		let dailyWordLastLetter = finalToRegular(dailyWord[4])
		userWord = userWord.slice(0,4) + userWordLastLetter
		dailyWord = dailyWord.slice(0,4) + dailyWordLastLetter
		console.log(dailyWord)
		console.log(state)
		  let arr = []
		  let isWordInWordList = state.wordList.some(ele => ele.toUpperCase() === state.userWord[state.turn])
		  if (isWordInWordList) {
		  	for (let i = 0; i < userWord.length; i++) {
		  		console.log(dailyWord)
			  	for (let d = 0; d < dailyWord.length; d++) {
			  		console.log(userWord[i])
			  		console.log(dailyWord[d])
			  		console.log(i)
			  		if (userWord[i].toLowerCase() === dailyWord[d] && d === i) {
			  		    console.log(`${userWord[i]} ${dailyWord[d]} ${state.direction[i]}: green`)
			  		    arr[state.direction[i]] = '#6AAA64'
			  	    } else if (userWord[i].toLowerCase() === dailyWord[d] && arr[state.direction[i]] !== '#6AAA64') {
			  	    	console.log(`${userWord[i]} ${dailyWord[d]} ${state.direction[i]}: yellow`)
			  		    arr[state.direction[i]] = '#C9B458'
			  	    } else if (!arr[state.direction[i]]) {
			  	    	console.log(`${userWord[i]} ${dailyWord[d]} ${state.direction[i]}: gray`)
			  	    	arr[state.direction[i]] = 'gray'
			  	    }
			  	    console.log(arr)
			  	}
		  	}
		  } else {
		  	document.querySelector('.shake').style.display = 'block'
		  	const undisplay = () => {
		  		document.querySelector('.shake').style.display = 'none'
		  	}
		  	setTimeout(undisplay, 800)
		  	return {...state}
		  }
		  
		  console.log(arr)
		  return {...state, result: arr, turn: ++state.turn}
		case 'ע':
		  console.log(HebrewWords)
		  console.log(randomNum)
		  return {...state, language: 'ע', direction: [4,3,2,1,0], wordList: HebrewWords, dailyWord: HebrewWords[hebrewRandomNum]}
		case 'EMPTY':
	  	  return {...state}
	  	default:
	  	  return {...state}
	}
}