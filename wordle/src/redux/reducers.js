import {WORDS, WORDSCheckList} from '../components/wordList'
import {HebrewWords, HebrewWordsCheckList} from '../components/HebrewWordList'

let randomNum = Math.floor(Math.random() * WORDS.length);
let hebrewRandomNum = Math.floor(Math.random() * HebrewWords.length);
console.log(HebrewWords[hebrewRandomNum])

export const finalToRegular = (letter) => {
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
		language: 'EN',
		letters: ".*[A-Z].*",
		direction: [0,1,2,3,4],
		wordList: WORDSCheckList,
		dailyWord: WORDS[randomNum],
		userWord: ['','','','','',''],
		result: [],
		turn: 0,
		messages: {
			win: 'well done!',
			loser: 'Game over, the word is',
			noWord: 'there is no such a word!',
			green: 'You must use the green letters in there spot!',
			yellow: 'You must use the yellow letters not in the same spot!'
		}
	}

export const reducer = (state=initState, action={}) => {
	let try1 = {...state.userWord}
	switch (action.type) {
		case 'CHANGE':
		  if (state.userWord[state.turn].length < 5) {
		  	try1[state.turn] += action.payload
		  	return {...state, userWord: try1}	
		  } else {
		  	return {...state}
		  }
		case 'DEL':
		  try1[state.turn] = try1[state.turn].slice(0, -1);
		  return {...state, userWord: try1}
		case 'ENTER':
		// make last letter good for hebrew in user word and daily word
		let userWord = state.userWord[state.turn]
		let dailyWord = state.dailyWord
		let userWordLastLetter = finalToRegular(userWord[4])
		let dailyWordLastLetter = finalToRegular(dailyWord[4])
		userWord = userWord.slice(0,4) + userWordLastLetter
		dailyWord = dailyWord.slice(0,4) + dailyWordLastLetter
		
		// make two array to check the user use all the hints, green and yellow.
		const tryes = document.querySelectorAll('.try')
		let isYellowLetterInUserWordArr = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], ]
		let isGreenLetterInUserWordArr = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], ]
		for (let c = 0; c < tryes.length; c++) {
				for (let b = 0; b < tryes[c].children.length; b++) {
					// check the green letters
					if (tryes[c].children[state.direction[b]].style.backgroundColor === 'rgb(106, 170, 100)') {
						let letter
						letter = finalToRegular(tryes[c].children[state.direction[b]].textContent)
						if (userWord[b] === letter) {
							isGreenLetterInUserWordArr[c][state.direction[b]].push(true)
						} else {	
							isGreenLetterInUserWordArr[c][state.direction[b]].push(false)
						}
					} else if (tryes[c].children[state.direction[b]].style.backgroundColor === 'rgb(201, 180, 88)') {
						let letter
						letter = finalToRegular(tryes[c].children[state.direction[b]].textContent)
						// check the yellow letters
						for (let a = 0; a < userWord.length; a++) {
							if (userWord[a] === letter && a !== b) {
								isYellowLetterInUserWordArr[c][state.direction[b]].push(true)
							} else {
								isYellowLetterInUserWordArr[c][state.direction[b]].push(false)
							}
						}
						// if you put the same yellow letter twice and one of them on the same place
						// the loop here will stop you
						for (let a = 0; a < userWord.length; a++) {
							if (userWord[a] === letter && a === b) {
								console.log('here')
								isYellowLetterInUserWordArr[c] = [[false], [false], [false], [false], [false]]
							}
						}
					}
				}
			}
		const isYellowLetterInUserWord = () => {
			for (let i = 0; i < isYellowLetterInUserWordArr.length; i++) {
				for (var d = 0; d < isYellowLetterInUserWordArr[i].length; d++) {
					if (isYellowLetterInUserWordArr[i][d].length > 0) {
						if (isYellowLetterInUserWordArr[i][d].some(ele => ele === true)) {
						} else {
							return false
						}
					}
				}
			}
			return true
		}
		const isGreenLetterInUserWord = () => {
			for (let i = 0; i < isGreenLetterInUserWordArr.length; i++) {
				for (var d = 0; d < isGreenLetterInUserWordArr[i].length; d++) {
					if (isGreenLetterInUserWordArr[i][d].length > 0) {
						if (isGreenLetterInUserWordArr[i][d].some(ele => ele === true)) {
						} else {
							return false
						}
					}
				}
			}
			return true
		}
		  let arr = ['gray', 'gray', 'gray', 'gray', 'gray']
		  let isWordInWordList = state.wordList.some(ele => ele.toUpperCase() === state.userWord[state.turn])
		  if (isWordInWordList) {
		  	if (isGreenLetterInUserWord()) {
			  	if (isYellowLetterInUserWord()) {
			  		for (let i = 0; i < userWord.length; i++) {
			  			for (let d = 0; d < dailyWord.length; d++) {
			  				if (userWord[i].toLowerCase() === dailyWord[d]) {
			  					arr[state.direction[i]] = '#C9B458' // yellow
			  				}
			  			}
			  			if (userWord[i].toLowerCase() === dailyWord[i]) {
			  				arr[state.direction[i]] = '#6AAA64' // green
			  			}				  					  	 					  	    
				  	}
				  	let isItTheSecondTimeOfThisLetter = {}
				  	for (let i = 0; i < userWord.length; i++) {
			  			isItTheSecondTimeOfThisLetter[userWord[i]] = false
				  	}
				  	for (let i = 0; i < userWord.length; i++) {
						if ((isItTheSecondTimeOfThisLetter[userWord[i]]
						     || arr[state.direction[userWord.lastIndexOf(userWord[i])]] === '#6AAA64')
						     && arr[state.direction[i]] !== '#6AAA64')
						{
							if (dailyWord.indexOf(userWord[i]) === dailyWord.lastIndexOf(userWord[i])) {
								arr[state.direction[i]] = 'gray'
							}
						} else {
			  				isItTheSecondTimeOfThisLetter[userWord[i]] = true
						}
					}
			  	} else {
			  		document.querySelector('.messages').style.display = 'block'
				  	document.querySelector('.yellowMsg').style.display = 'block'
				  	tryes[state.turn].classList.add('shake')
				  	const undisplay = () => {
				  		tryes[state.turn].classList.remove('shake')
		        		document.querySelector('.messages').style.display = 'none'
				  		document.querySelector('.yellowMsg').style.display = 'none'
				  	}
				  	setTimeout(undisplay, 800)
			  		return {...state}
			  	}
		  	} else {
		  		document.querySelector('.messages').style.display = 'block'
			  	document.querySelector('.greenMsg').style.display = 'block'
			  	tryes[state.turn].classList.add('shake')
			  	const undisplay = () => {
			  		tryes[state.turn].classList.remove('shake')
	        		document.querySelector('.messages').style.display = 'none'
			  		document.querySelector('.greenMsg').style.display = 'none'
			  	}
			  	setTimeout(undisplay, 800)
		  		return {...state}
		  	}
		  } else {
        	document.querySelector('.messages').style.display = 'block'
		  	document.querySelector('.noWord').style.display = 'block'
		  	tryes[state.turn].classList.add('shake')
		  	const undisplay = () => {
		  		tryes[state.turn].classList.remove('shake')
        		document.querySelector('.messages').style.display = 'none'
		  		document.querySelector('.noWord').style.display = 'none'
		  	}
		  	setTimeout(undisplay, 800)
		  	return {...state}
		  }
		  
		  return {...state, result: arr, turn: ++state.turn}
		case 'עב':
		  hebrewRandomNum = Math.floor(Math.random() * HebrewWords.length);
		  return {...state,
					language: 'עב',
					letters: ".*[א-ת].*",
					direction: [4,3,2,1,0], 
					wordList: HebrewWordsCheckList, 
					dailyWord: HebrewWords[hebrewRandomNum],
					userWord: ['','','','','',''],
					result: [],
					turn: 0,
					messages: {
						win: '!כל הכבוד',
						loser: 'אוי, לא נורא אולי פעם הבאה, המילה היא',
						noWord: '!אין מילה כזאת',
						green: '!חייבים להשתמש באותיות  הירוקות במקום שלהן',
						yellow: '!חייבים להשתמש באותיות  הצהובות  ולא באותו מקום'
					}
				 }
		case 'EN':
		  randomNum = Math.floor(Math.random() * WORDS.length);
		  console.log(randomNum)
		  return {...state, 
		  			language: 'EN', 
					letters: ".*[A-Z].*",
		  			direction: [0,1,2,3,4], 
		  			wordList: WORDSCheckList, 
		  			dailyWord: WORDS[randomNum],
		  			userWord: ['','','','','',''],
					result: [],
					turn: 0,
					messages: {
						win: 'well done!',
						loser: 'Game over, the word is',
						noWord: 'there is no such a word!',
						green: 'You must use the green letters in there spot!',
						yellow: 'You must use the yellow letters not in the same spot!'
					}
		  		 }
		case 'EMPTY':
	  	  return {...state}
	  	default:
	  	  return {...state}
	}
}