import {WORDS, WORDSCheckList} from '../components/wordList'
import {HebrewWords, HebrewWordsCheckList} from '../components/HebrewWordList'

let randomNum = Math.floor(Math.random() * WORDS.length);
let hebrewRandomNum = Math.floor(Math.random() * HebrewWords.length);
console.log(HebrewWords[hebrewRandomNum])

// function that change final letters to regular
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
		writingDirection: [0,1,2,3,4],
		wordList: WORDSCheckList,
		dailyWord: WORDS[randomNum],
		userWord: ['','','','','',''],
		result: [],
		turn: 0,
		hardMode: false,
		screenMode: {
			BGC: 'white',
			color: 'black',
			letterBG: '#3A3A3C',
			letterBorderC: 'lightgray',
			fullLetterBorderC: 'black',
			keyboardRegularBG: 'lightgray',
			headerBorderBottom: '1px solid lightgray',
			// keyboardColor: 'white'
		},
		endOfGame: false,
		messages: {
			win: ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'],
			loser: 'Game over, the word is',
			noWord: 'there is no such a word!',
			gray: `You can't use the gray letters in there spot!`,
			green: 'You must use the green letters in there spot!',
			yellow: 'You must use the yellow letters not in the same spot!',
			wrongLanguage: 'Bro you on Hebrew'
		}
	}

export const reducer = (state=initState, action={}) => {
	let userTry = {...state.userWord}
	switch (action.type) {
		// take the letters the user write
		case 'CHANGE':
		// check the user not finish his tryes
		  if (state.userWord[state.turn].length < 5) {
		  	// put the letters in the right try
		  	userTry[state.turn] += action.payload
		  	return {...state, userWord: userTry}	
		  } else {
		  	return {...state}
		  }

		// delete the last letter from the last user try
		case 'DEL':
		  userTry[state.turn] = userTry[state.turn].slice(0, -1);
		  return {...state, userWord: userTry}

		case 'ENTER':
		// make last letter good for hebrew in user word and daily word
		let userWord = state.userWord[state.turn]
		let dailyWord = state.dailyWord
		let userWordLastLetter = finalToRegular(userWord[4])
		let dailyWordLastLetter = finalToRegular(dailyWord[4])
		userWord = userWord.slice(0,4) + userWordLastLetter
		dailyWord = dailyWord.slice(0,4) + dailyWordLastLetter
		
		// make two array to check the user use all the hints, green and yellow.

		// push all the gray letters to array that the user wouldn't be able to use them
	    const boardLetters = document.querySelectorAll('.boardLetter')
	    let grayLetters = []
	    for (let i = 0; i < boardLetters.length; i++) {
	    	if (boardLetters[i].style.backgroundColor === 'gray') {
	    		grayLetters.push(boardLetters[i].textContent)
	    	}
	    }

		const isGrayLetterInUserWord = () => {
		    for (let i = 0; i < userWord.length; i++) {
		    	for (let d = 0; d < grayLetters.length; d++) {
		    		if (userWord[i] === grayLetters[d]) {
		    			return false
		    		}	
		    	}
		    }
		    return true
		}
		console.log(isGrayLetterInUserWord())

		const tryes = document.querySelectorAll('.try')
		let isYellowLetterInUserWordArr = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], ]
		let isGreenLetterInUserWordArr = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], ]
		for (let c = 0; c < tryes.length; c++) {
				for (let b = 0; b < tryes[c].children.length; b++) {
					let letter
					letter = finalToRegular(tryes[c].children[state.writingDirection[b]].textContent)
					// check the green letters
					if (tryes[c].children[state.writingDirection[b]].style.backgroundColor === 'rgb(106, 170, 100)') {
						
						if (userWord[b] === letter) {
							isGreenLetterInUserWordArr[c][state.writingDirection[b]].push(true)
						} else {	
							isGreenLetterInUserWordArr[c][state.writingDirection[b]].push(false)
						}
					} else if (tryes[c].children[state.writingDirection[b]].style.backgroundColor === 'rgb(201, 180, 88)') {
						// check the yellow letters
						for (let a = 0; a < userWord.length; a++) {
							if (userWord[a] === letter && a !== b) {
								isYellowLetterInUserWordArr[c][state.writingDirection[b]].push(true)
							} else {
								isYellowLetterInUserWordArr[c][state.writingDirection[b]].push(false)
							}
						}
						// if you put the same yellow letter twice and one of them on the same place
						// this loop here will stop you
						for (let a = 0; a < userWord.length; a++) {
							if (userWord[a] === letter && a === b) {
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
		  // check there is such a word
		  if (isWordInWordList) {
		  	if (isGrayLetterInUserWord() || !state.hardMode) {
		  		// check the user use all the green letters in there place
			  	if (isGreenLetterInUserWord() || !state.hardMode) {
			  		// check the user use all the yellow letters and not in the same place
				  	if (isYellowLetterInUserWord() || !state.hardMode) {
				  		for (let i = 0; i < userWord.length; i++) {
				  			// check if the user letters are used in the daily word
				  			// and if so color them in yellow
				  			for (let d = 0; d < dailyWord.length; d++) {
				  				if (userWord[i].toLowerCase() === dailyWord[d]) {
				  					arr[state.writingDirection[i]] = '#C9B458' // yellow

				  					// check if the user letters are in the right place
						  			// and if so color them in green
						  			if (userWord[i].toLowerCase() === dailyWord[i]) {
						  				arr[state.writingDirection[i]] = '#6AAA64' // green
						  			}
				  				}
				  			}
				  							  					  	 					  	    
					  	}
					  	let isItTheSecondTimeOfThisLetter = {}
					  	for (let i = 0; i < userWord.length; i++) {
				  			isItTheSecondTimeOfThisLetter[userWord[i]] = false
					  	}
					  	for (let i = 0; i < userWord.length; i++) {
					  		// check if its the second time of this letter in the user word
							if ((isItTheSecondTimeOfThisLetter[userWord[i]]
								 //check if the second time of the letter is green
							     || arr[state.writingDirection[userWord.lastIndexOf(userWord[i])]] === '#6AAA64')
								 // check the first time of the letter is not green
							     && arr[state.writingDirection[i]] !== '#6AAA64')
							{
								// check if this double letter of the user
								// are also double in the daily word
								if (dailyWord.indexOf(userWord[i]) === dailyWord.lastIndexOf(userWord[i])) {
									arr[state.writingDirection[i]] = 'gray'
								}
							} else {
								// change the letter for true that if it will show again
								// we will know its the second time of this letter 
				  				isItTheSecondTimeOfThisLetter[userWord[i]] = true
							}
						}
				  	} else {
				  		// put message that the user need to use the yellow letters
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
				  	// put message that the user need to use the green letters
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
		  		// put message that the user need to use the gray letters
		  		document.querySelector('.messages').style.display = 'block'
			  	document.querySelector('.grayMsg').style.display = 'block'
			  	tryes[state.turn].classList.add('shake')
			  	const undisplay = () => {
			  		tryes[state.turn].classList.remove('shake')
	        		document.querySelector('.messages').style.display = 'none'
			  		document.querySelector('.grayMsg').style.display = 'none'
			  	}
			  	setTimeout(undisplay, 800)
		  		return {...state}
		  	}
		  	
		  } else {
			// put message that there is no such a word
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

		// change language to hebrew
		case 'עב':
		  hebrewRandomNum = Math.floor(Math.random() * HebrewWords.length);
		  return {...state,
					language: 'עב',
					letters: ".*[א-ת].*",
					writingDirection: [4,3,2,1,0], 
					wordList: HebrewWordsCheckList, 
					dailyWord: HebrewWords[hebrewRandomNum],
					userWord: ['','','','','',''],
					result: [],
					turn: 0,
					endOfGame: false,
					messages: {
						win: ['די נו תגלה לנו איך רימית', 'פשששששש על השני סחתיין', 'ניחוש שלישי יא תותח!', 'מעולה!', '!כל הכבוד', 'פיו זה היה קרוב'],
						loser: 'אוי, לא נורא אולי פעם הבאה, המילה היא',
						noWord: '!אין מילה כזאת',
						gray: '!אתה לא יכול להשתמש באותיות  האפורות',
						green: '!חייבים להשתמש באותיות  הירוקות במקום שלהן',
						yellow: '!חייבים להשתמש באותיות  הצהובות  ולא באותו מקום',
						wrongLanguage: 'אחותי את על אנגלית'
					}
				 }

		// change language to english
		case 'EN':
		  randomNum = Math.floor(Math.random() * WORDS.length);
		  console.log(initState)
		  return {...initState, dailyWord: WORDS[randomNum]}
		case 'CHANGE_HARD_MODE':
		  console.log('CHANGE_HARD_MODE')
		  let hardMode
		  if (state.hardMode === false) {
		  	hardMode = true
		  } else {
		  	hardMode = false
		  }
		  return {...state, hardMode: hardMode}
		case 'CHANGE_SCREEN_MODE':
		  console.log('CHANGE_SCREEN_MODE')
		  let screenMode
		  if (state.screenMode.BGC === 'white') {
		  	screenMode = {
				BGC: 'black',
				color: 'white',
				letterBG: '#3A3A3C',
				letterBorderC: '#3A3A3C',
				fullLetterBorderC: '#818384',
				keyboardRegularBG: '#818384',
				headerBorderBottom: '1px solid #3A3A3C',
		  	}
		  } else {
		  	screenMode = initState.screenMode
		  }
		  return {...state, screenMode: screenMode}
		case 'END':
		  return {...state, endOfGame: true}

		// when the user press keyboard button that doesn't do anything
		case 'EMPTY':
	  	  return {...state}

	  	default:
	  	  return {...state}
	}
}