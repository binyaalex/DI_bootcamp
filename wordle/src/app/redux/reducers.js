import {WORDS, WORDSCheckList} from '../words-arrays/WordList'
import {HebrewWords, HebrewWordsCheckList} from '../words-arrays/HebrewWordList'

// for check how many of certain letter there is in the word
function count(str, find) {
    return (str.split(find)).length - 1;
}

let randomNum = Math.floor(Math.random() * WORDS.length);
				  		
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
		gameName: 'WORDLE',
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
		},
		endOfGame: false,
		messages: {
			win: ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'],
			loser: 'Game over, the word is',
			noWord: 'there is no such a word!',
			gray: `You can't use the gray letters!`,
			green: 'You must use the green letters in there spot!',
			yellow: 'You must use the yellow letters not in the same spot!',
			wrongLanguage: 'Bro you on Hebrew',
			darkModeDisable: 'Dark mode can only be enabled at the start of a round'
		}
	}

export const reducer = (state=initState, action={}) => {
	const messages = document.querySelector('.messages')

	let userWord = {...state.userWord}
	console.log(userWord)
	switch (action.type) {
		// take the letters the user write
		case 'CHANGE':
		// check the user not finish his tries
		  if (state.userWord[state.turn].length < 5) {
		  	// put the letters in the right try
		  	userWord[state.turn] += action.payload.toLowerCase()
		  	return {...state, userWord: userWord}	
		  } else {
		  	return {...state}
		  }

		// delete the last letter from the last user try
		case 'DEL':
		  userWord[state.turn] = userWord[state.turn].slice(0, -1);
		  return {...state, userWord: userWord}

		case 'ENTER':
		// make last letter good for hebrew in user word and daily word
		userWord = userWord[state.turn]
		let dailyWord = state.dailyWord
		userWord = userWord.slice(0,4) + finalToRegular(userWord[4])
		dailyWord = dailyWord.slice(0,4) + finalToRegular(dailyWord[4])
		

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
	    		if (grayLetters.includes(userWord[i].toUpperCase())) {
	    			return false
	    		}	
		    }
		    return true
		}
		console.log(isGrayLetterInUserWord())

		// make two array to check the user use all the hints, green and yellow.
		const tries = document.querySelectorAll('.try')
		const lastTry = tries[state.turn]
		let isYellowLetterInUserWordArr = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], ]
		// let isGreenLetterInUserWordArr = [[[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], [[], [], [], [], []], ]
		let newIsGreenLetterInUserWord = true
		let newIsYellowLetterInUserWord = false
		let noYellowLettersInUserTries = 1
		const checkTheYellowLetters = () => {
			for (let c = 0; c < state.turn; c++) {
				for (let b = 0; b < tries[c].children.length; b++) {
					let letter
					letter = finalToRegular(tries[c].children[state.writingDirection[b]].textContent)

					// new check the green letters
					if (tries[c].children[state.writingDirection[b]].style.backgroundColor === 'rgb(106, 170, 100)') {
						if (letter !== userWord[b]) {
							newIsGreenLetterInUserWord = false
						}
					}

					// check the green letters
					// if (tries[c].children[state.writingDirection[b]].style.backgroundColor === 'rgb(106, 170, 100)') {
						
					// 	if (userWord[b] === letter) {
					// 		isGreenLetterInUserWordArr[c][state.writingDirection[b]].push(true)
					// 	} else {	
					// 		isGreenLetterInUserWordArr[c][state.writingDirection[b]].push(false)
					// 	}
					if (tries[c].children[state.writingDirection[b]].style.backgroundColor === 'rgb(201, 180, 88)') {
						noYellowLettersInUserTries = false
						console.log(noYellowLettersInUserTries)
						// check the yellow letters
						for (let a = 0; a < userWord.length; a++) {
							if (userWord[a] === letter && a !== b) {
								newIsYellowLetterInUserWord = true
							} else if (userWord[a] === letter && a === b) {
								newIsYellowLetterInUserWord = false
								return false
							}
						}
						// if you put the same yellow letter twice and one of them on the same place
						// this loop here will stop you
						// for (let a = 0; a < userWord.length; a++) {
						// 	if (userWord[a] === letter && a === b) {
						// 		console.log(1)
						// 		isYellowLetterInUserWordArr[c] = [[false], [false], [false], [false], [false]]
						// 	}
						// }
					}
				}
			}
		}

		// for not stop in the first try and if there is no yellow letters yet
		checkTheYellowLetters()
		if (noYellowLettersInUserTries) {
			console.log(0)
			newIsYellowLetterInUserWord = true
		}
		console.log(newIsYellowLetterInUserWord)

		// const isYellowLetterInUserWord = () => {
		// 	for (let i = 0; i < isYellowLetterInUserWordArr.length; i++) {
		// 		for (var d = 0; d < isYellowLetterInUserWordArr[i].length; d++) {
		// 			if (isYellowLetterInUserWordArr[i][d].length > 0) {
		// 				if (isYellowLetterInUserWordArr[i][d].some(ele => ele === true)) {
		// 				} else {
		// 					return false
		// 				}
		// 			}
		// 		}
		// 	}
		// 	return true
		// }

		// const isGreenLetterInUserWord = () => {
		// 	for (let i = 0; i < isGreenLetterInUserWordArr.length; i++) {
		// 		for (var d = 0; d < isGreenLetterInUserWordArr[i].length; d++) {
		// 			if (isGreenLetterInUserWordArr[i][d].length > 0) {
		// 				if (isGreenLetterInUserWordArr[i][d].some(ele => ele === true)) {
		// 				} else {
		// 					return false
		// 				}
		// 			}
		// 		}
		// 	}
		// 	return true
		// }

		  let arr = ['gray', 'gray', 'gray', 'gray', 'gray']
		  let isWordInWordList = state.wordList.some(ele => ele === state.userWord[state.turn])
		  // check if there is such a word
		  if (isWordInWordList) {
		  	if (isGrayLetterInUserWord() || !state.hardMode) {
		  		// check the user use all the green letters in there place
			  	if (newIsGreenLetterInUserWord || !state.hardMode) {
			  		// check the user use all the yellow letters and not in the same place
				  	if (newIsYellowLetterInUserWord || !state.hardMode) {
				  		let forDoubleLetters = {}
				  		for (let i = 0; i < userWord.length; i++) {
				  			forDoubleLetters[userWord[i]] = []
				  			forDoubleLetters[userWord[i]].push(0)
				  			// for check letar if its green in double letters
				  			forDoubleLetters[userWord[i]].push(false)
				  			// for check letar if its gray in double letters
				  			forDoubleLetters[userWord[i]].push(false)
				  			// check if the user letters are used in the daily word
				  			// and if so color them in yellow
				  			if (dailyWord.includes(userWord[i])) {
				  				arr[state.writingDirection[i]] = '#C9B458' // yellow
				  				
				  				// check if the user letters are in the right place
				  				if (userWord[i] === dailyWord[i]) {
						  			arr[state.writingDirection[i]] = '#6AAA64' // green
				  				}
				  			}


				  			// for (let d = 0; d < dailyWord.length; d++) {
				  			// 	if (userWord[i].toLowerCase() === dailyWord[d]) {
				  			// 		arr[state.writingDirection[i]] = '#C9B458' // yellow

				  			// 		check if the user letters are in the right place
						  	// 		// and if so color them in green
						  	// 		if (userWord[i].toLowerCase() === dailyWord[i]) {
						  	// 			arr[state.writingDirection[i]] = '#6AAA64' // green
						  	// 		}
				  			// 	}
				  			// }				  					  	 					  	    
					  	}


					  	// new check for double letters
				  		for (let i = userWord.length-1; i >= 0; i--) {
				  			console.log(userWord[i])
				  			forDoubleLetters[userWord[i]][0]++
				  			if (count(userWord, userWord[i]) > 1) {
				  				console.log('more than one in the user word')
				  				if (count(dailyWord, userWord[i]) === count(userWord, userWord[i])) {
				  					console.log('dont need to color')
				  				} else if (count(dailyWord, userWord[i]) === 1) {
				  					console.log('the letter is once in the daily word')
				  					console.log(forDoubleLetters[userWord[i]])
				  					console.log(count(userWord, userWord[i]))
				  					if (arr[state.writingDirection[i]] !== '#6AAA64') {
				  						if (forDoubleLetters[userWord[i]][0] < count(userWord, userWord[i]) || forDoubleLetters[userWord[i]][1]) {
				  							console.log(userWord[state.writingDirection[i]])
				  							console.log(state.writingDirection[i])
				  							console.log('gray')
				  							arr[state.writingDirection[i]] = 'gray'					  							
				  						}
				  					} else if (arr[state.writingDirection[i]] !== 'gray') {
				  						forDoubleLetters[userWord[i]][1] = true
				  					}
				  				} else if (count(dailyWord, userWord[i]) === 2) {
				  					if (arr[state.writingDirection[i]] !== '#6AAA64') {
				  						if (!forDoubleLetters[userWord[i]][2]) {
					  						arr[state.writingDirection[i]] = 'gray'				  							
					  						forDoubleLetters[userWord[i]][2] = true			  							
				  						}
				  					}
				  				}
				  			}
					  	}

					 //  	let isItTheSecondTimeOfThisLetter = {}
					 //  	for (let i = 0; i < userWord.length; i++) {
				  // 			isItTheSecondTimeOfThisLetter[userWord[i]] = false
					 //  	}
					 //  	for (let i = 0; i < userWord.length; i++) {
					 //  		// check if its the second time of this letter in the user word
						// 	if ((isItTheSecondTimeOfThisLetter[userWord[i]]
						// 		 //check if the second time of the letter is green
						// 	     || arr[state.writingDirection[userWord.lastIndexOf(userWord[i])]] === '#6AAA64')
						// 		 // check the first time of the letter is not green
						// 	     && arr[state.writingDirection[i]] !== '#6AAA64')
						// 	{
						// 		// check if this double letter of the user
						// 		// are also double in the daily word
						// 		if (dailyWord.indexOf(userWord[i]) === dailyWord.lastIndexOf(userWord[i])) {
						// 			arr[state.writingDirection[i]] = 'gray'
						// 		}
						// 	} else {
						// 		// change the letter for true that if it will show again
						// 		// we will know its the second time of this letter 
				  // 				isItTheSecondTimeOfThisLetter[userWord[i]] = true
						// 	}
						// }
				  	} else {
				  		// put message that the user need to use the yellow letters
						const yellowMsg = document.querySelector('.yellowMsg')	
				  		messages.style.display = 'block'
					  	yellowMsg.style.display = 'block'
					  	lastTry.classList.add('shake')
					  	const undisplay = () => {
					  		lastTry.classList.remove('shake')
			        		messages.style.display = 'none'
					  		yellowMsg.style.display = 'none'
					  	}
					  	setTimeout(undisplay, 800)
				  		return {...state}
				  	}
			  	} else {
				  	// put message that the user need to use the green letters
					const greenMsg = document.querySelector('.greenMsg')	
			  		messages.style.display = 'block'
				  	greenMsg.style.display = 'block'
				  	lastTry.classList.add('shake')
				  	const undisplay = () => {
				  		lastTry.classList.remove('shake')
		        		messages.style.display = 'none'
				  		greenMsg.style.display = 'none'
				  	}
				  	setTimeout(undisplay, 800)
			  		return {...state}
			  	}
		  	} else {
		  		// put message that the user can't use the gray letters
		  		messages.style.display = 'block'
				const grayMsg = document.querySelector('.grayMsg')	
			  	grayMsg.style.display = 'block'
			  	lastTry.classList.add('shake')
			  	const undisplay = () => {
			  		lastTry.classList.remove('shake')
	        		messages.style.display = 'none'
			  		grayMsg.style.display = 'none'
			  	}
			  	setTimeout(undisplay, 800)
		  		return {...state}
		  	}
		  	
		  } else {
			// put message that there is no such a word
			const noWord = document.querySelector('.noWord')	
        	messages.style.display = 'block'
		  	noWord.style.display = 'block'
		  	lastTry.classList.add('shake')
		  	const undisplay = () => {
		  		lastTry.classList.remove('shake')
        		messages.style.display = 'none'
		  		noWord.style.display = 'none'
		  	}
		  	setTimeout(undisplay, 800)
		  	return {...state}
		  }
		  
		  return {...state, result: arr, turn: ++state.turn}

		// change language to hebrew
		case 'עב':
		  randomNum = Math.floor(Math.random() * HebrewWords.length);
		  return {...state,
					language: 'עב',
					gameName: 'פיצוח',
					letters: ".*[א-ת].*",
					writingDirection: [4,3,2,1,0], 
					wordList: HebrewWordsCheckList, 
					dailyWord: HebrewWords[randomNum],
					userWord: ['','','','','',''],
					result: [],
					turn: 0,
					endOfGame: false,
					messages: {
						win: ['די נו תגלה לנו איך רימית', 'פשששששש על השני סחתיין', '!ניחוש שלישי יא תותח', '!מעולה', '!כל הכבוד', 'פיו זה היה קרוב'],
						loser: 'אוי, לא נורא אולי פעם הבאה, המילה היא',
						noWord: '!אין מילה כזאת',
						gray: '!אתה לא יכול להשתמש באותיות  האפורות',
						green: '!חייבים להשתמש באותיות  הירוקות במקום שלהן',
						yellow: '!חייבים להשתמש באותיות  הצהובות  ולא באותו מקום',
						wrongLanguage: 'אחותי את על אנגלית',
						darkModeDisable: 'מצב לילה אפשר להפעיל רק בתחילת סיבוב'
					}
				 }

		// change language to english
		case 'EN':
		  randomNum = Math.floor(Math.random() * WORDS.length);
		  const oldScreenMode = state.screenMode
		  const oldHardMode = state.hardMode
		  return {...initState, dailyWord: WORDS[randomNum], screenMode: oldScreenMode, hardMode: oldHardMode}
		case 'CHANGE_HARD_MODE':
		  console.log('CHANGE_HARD_MODE')
		  let newHardMode
		  if (state.hardMode) {
		  	newHardMode = false
		  } else {
		  	newHardMode = true
		  }
		  return {...state, hardMode: newHardMode}
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
				keyboardRegularBG: '#3A3A3C',
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