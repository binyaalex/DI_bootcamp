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
		languageBtn: 'עב',
		gameName: 'WORDLE',
		playAgain: 'Play Again',
		letters: ".*[A-Z].*",
		writingDirection: [0,1,2,3,4],
		wordList: WORDSCheckList,
		dailyWord: WORDS[randomNum],
		userWord: ['','','','','',''],
		colors: {
			gray: 'rgb(120, 124, 126)',
			yellow: 'rgb(201, 180, 88)',
			green: 'rgb(106, 170, 100)',
		},
		result: [],
		keyboard: {
			qToP: ['q','w','e','r','t','y','u','i','o','p'],
  			aToL: ['a','s','d','f','g','h','j','k','l'],
  			enterToDel: ['enter','z','x','c','v','b','n','m','del'],
  			size: '',
		},
		turn: 0,
		hardMode: false,
		screenMode: {
			BGC: 'white',
			color: 'black',
			letterBG: '#3A3A3C',
			letterBorderC: 'lightgray',
			fullLetterBorderC: 'black',
			keyboardRegularBG: '#D3D6DA',
			headerBorderBottom: '1px solid lightgray',
		},
		endOfGame: false,
		messages: {
			win: ['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'],
			loser: 'Game over, The word is',
			noWord: 'there is no such a word!',
			gray: `You can't use the gray letters!`,
			green: 'You must use the green letters in there spot!',
			yellow: 'You must use the yellow letters not in the same spot!',
			wrongLanguage: 'Bro you on Hebrew',
			darkModeDisable: 'Dark mode can only be enabled at the start of a round',
			highContrastModeDisable: 'High contrast mode can only be enabled at the start of a round'
		},
		help: {
			helpHead: 'HOW TO PLAY',
			instructionP1A: 'Guess the ',
			instructionP1Strong: 'WORDLE',
			instructionP1B: ' in six tries.',
			instructionP2: 'Each guess must be a valid 5 letter word. Hit the enter button to submit.',
			instructionP3: 'After each guess, the color of the tiles will change to show how close your guess was to the word.',
			examplesHead: 'Examples',
			examplesOrder: [ 'green', 'yellow', 'gray'],
			gray: {
				letters: ['V', 'A', 'G', 'U', 'E'],
				strongLetter: 'U',
				explanationB: ' is not in the word in any spot.',	
			},
			yellow: {
				letters: ['P', 'I', 'L', 'L', 'S'],
				strongLetter: 'I',
				explanationB: ' is in the word but in the wrong spot.',	
			},
			green: {
				letters: ['W', 'E', 'A', 'R', 'Y'],
				strongLetter: 'W',
				explanationB: ' is in the word and in the correct spot.',	
			},
			explanationA: 'The letter ',
			footer: 'A new WORDLE will be available each refresh!',
		},
		definitions: {
			head: 'SETTING',
			hardModeHead: 'Hard Mode',
			hardModeExplanation: 'Any revealed hints must be used in subsequent guesses',
			darkModeHead: 'Dark Mode',
			highContrastModeHead: 'High Contrast Mode',
			highContrastModeExplanation: 'For improved color vision',
			github: 'Github',
			linkedin: 'Linkedin',
		},
	}

export const reducer = (state=initState, action={}) => {
	const messages = document.querySelector('.messages')

	let userWord = {...state.userWord}
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
		
		// preparing all the restrictions - gray, green, yellow and word list 
		// push all the gray letters to array that the user wouldn't be able to use them
	    const boardLetters = document.querySelectorAll('.boardLetter')
	    let grayLetters = []
	    for (let i = 0; i < boardLetters.length; i++) {
	    	if (boardLetters[i].style.backgroundColor === state.colors.gray) {
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

		// make two variable to check if the user use the hints, green and yellow.
		const tries = document.querySelectorAll('.try')
		const lastTry = tries[state.turn]
		let IsGreenLetterInUserWord = true
		let IsYellowLetterInUserWord = false
		let noYellowLettersInUserTries = 1
		const checkGreenAndYellowLetters = () => {
			for (let c = 0; c < state.turn; c++) {
				for (let b = 0; b < tries[c].children.length; b++) {
					let letter
					letter = finalToRegular(tries[c].children[state.writingDirection[b]].textContent)

					// check the green letters
					console.log(tries[c].children[state.writingDirection[b]])
					console.log(tries[c].children[state.writingDirection[b]].style.backgroundColor)
					console.log(state.colors.green)
					if (tries[c].children[state.writingDirection[b]].style.backgroundColor === state.colors.green) {
						console.log(letter)
						console.log(userWord[b])
						if (letter !== userWord[b]) {
							IsGreenLetterInUserWord = false
						}
					}

					// check the yellow letters
					if (tries[c].children[state.writingDirection[b]].style.backgroundColor === state.colors.yellow) {
						noYellowLettersInUserTries = false
						for (let a = 0; a < userWord.length; a++) {
							if (userWord[a] === letter && a !== b) {
								IsYellowLetterInUserWord = true
							} else if (userWord[a] === letter && a === b) {
								IsYellowLetterInUserWord = false
								return false
							}
						}
					}
				}
			}
		}

		// for not stop when there is no yellow letters yet
		checkGreenAndYellowLetters()
		if (noYellowLettersInUserTries) {
			IsYellowLetterInUserWord = true
		}

		let arr = [state.colors.gray, state.colors.gray, state.colors.gray, state.colors.gray, state.colors.gray]
		let isWordInWordList = state.wordList.some(ele => ele === state.userWord[state.turn])
		
		  // start check all the restrictions - word list, gray, green and yellow
		  // check if there is such a word
		  if (isWordInWordList) {
		  	if (isGrayLetterInUserWord() || !state.hardMode) {
		  		// check the user use all the green letters in there place
			  	if (IsGreenLetterInUserWord || !state.hardMode) {
			  		// check the user use all the yellow letters and not in the same place
				  	if (IsYellowLetterInUserWord || !state.hardMode) {
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
				  				arr[state.writingDirection[i]] = state.colors.yellow
				  				
				  				// check if the user letters are in the right place
				  				if (userWord[i] === dailyWord[i]) {
						  			arr[state.writingDirection[i]] = state.colors.green
				  				}
				  			}				  					  	 					  	    
					  	}

					  	// new check for double letters
				  		for (let i = userWord.length-1; i >= 0; i--) {
				  			forDoubleLetters[userWord[i]][0]++
				  			if (count(userWord, userWord[i]) > 1) {
				  				if (count(dailyWord, userWord[i]) === count(userWord, userWord[i])) {
				  				} else if (count(dailyWord, userWord[i]) === 1) {
				  					if (arr[state.writingDirection[i]] !== state.colors.green) {
				  						if (forDoubleLetters[userWord[i]][0] < count(userWord, userWord[i]) || forDoubleLetters[userWord[i]][1]) {
				  							arr[state.writingDirection[i]] = state.colors.gray					  							
				  						}
				  					} else if (arr[state.writingDirection[i]] !== state.colors.gray) {
				  						forDoubleLetters[userWord[i]][1] = true
				  					}
				  				} else if (count(dailyWord, userWord[i]) === 2) {
				  					if (arr[state.writingDirection[i]] !== state.colors.green) {
				  						if (!forDoubleLetters[userWord[i]][2]) {
					  						arr[state.writingDirection[i]] = state.colors.gray				  							
					  						forDoubleLetters[userWord[i]][2] = true			  							
				  						}
				  					}
				  				}
				  			}
					  	}
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
		console.log(state.hardMode)
		  randomNum = Math.floor(Math.random() * HebrewWords.length);
		  return {...state,
					language: 'עב',
					languageBtn: 'EN',
					gameName: 'פיצוח',
					playAgain: 'עוד פעם',
					letters: ".*[א-ת].*",
					writingDirection: [4,3,2,1,0], 
					wordList: HebrewWordsCheckList, 
					dailyWord: HebrewWords[randomNum],
					userWord: ['','','','','',''],
					result: [],
					keyboard: {
						qToP: ['ק','ר','א','ט','ו','ן','ם','פ'],
			  			aToL: ['ש' ,'ד','ג','כ','ע','י','ח','ל','ך','ף'],
			  			enterToDel: ['enter','ז','ס','ב','ה','נ','מ','צ','ת','ץ','del'],
			  			size: '16px',
					},
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
						darkModeDisable: 'מצב לילה אפשר להפעיל רק בתחילת סיבוב',
						highContrastModeDisable: 'מצב  ניגודיות גבוהה אפשר להפעיל רק בתחילת סיבוב',
					},
					help: {
						helpHead: 'הוראות',
						instructionP1A: '.נחש את ',
						instructionP1Strong: 'המילה',
						instructionP1B: ' בשישה נסיונות',
						instructionP2: '.כל נסיון חייב להיות מילה בת 5 אותיות. לחץ על אנטר  על מנת לבדוק אם זו המילה',
						instructionP3: '.אחרי כל ניסיון, הצבע של האות ישתנה להראות כמה הניסיון קרוב למילה',
						examplesHead: 'דוגמאות',
						examplesOrder: ['gray', 'yellow', 'green'],
						gray: {
							letters: ['ן', 'ו', 'י', 'ס', 'נ'],
							strongLetter: 'נ',
							explanationB: ' לא במילה  בשום מקום',	
							},
							yellow: {
								letters: ['ן', 'ו', 'ק', 'י', 'ת'],
								strongLetter: 'י',
								explanationB: ' במילה  אבל לא במקום הנכון',	
							},
							green: {
								letters: ['ה', 'ב', 'ו', 'ש', 'ת'],
								strongLetter: 'ו',
								explanationB: ' במילה ובמקום הנכון',	
							},
						explanationA: '.האות  ',
						footer: '!מילה חדשה זמינה בכל רענון של המשחק',
					},
					definitions: {
						head: 'הגדרות',
						hardModeHead: 'רמה קשה',
						hardModeExplanation: 'מחויב להשתמש בכל הרמזים מניחושים קודמים',
						darkModeHead: 'מצב לילה',
						highContrastModeHead: 'מצב עיוורון צבעים',
						highContrastModeExplanation: 'לשיפור  ניגודיות הצבעים',
						github: 'גיטהאב',
						linkedin: 'לינקדאין',
					},
				 }

		// change language to english
		case 'EN':
		console.log(state.hardMode)
		  randomNum = Math.floor(Math.random() * WORDS.length);
		  const oldScreenMode = state.screenMode
		  const oldHardMode = state.hardMode
		  const oldColors = state.colors
		  return {...initState, dailyWord: WORDS[randomNum], screenMode: oldScreenMode, hardMode: oldHardMode, colors: oldColors}
		case 'CHANGE_HARD_MODE':
		  let newHardMode
		  if (state.hardMode) {
		  	newHardMode = false
		  } else {
		  	newHardMode = true
		  }
		  return {...state, hardMode: newHardMode}
		case 'CHANGE_SCREEN_MODE':
	 	  let screenMode
	 	  let changeScreenModeColors
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
			changeScreenModeColors = {
				gray: 'rgb(58, 58, 60)',
				yellow: state.colors.yellow,
				green: state.colors.green,
			}
		  } else {
			screenMode = initState.screenMode
			changeScreenModeColors = {
				gray: 'rgb(120, 124, 126)',
				yellow: state.colors.yellow,
				green: state.colors.green,
			}
		  }
		  return {...state, screenMode: screenMode, colors: changeScreenModeColors}	
		case 'CHANGE_HIGE_CONTRAST_MODE':
	 	  let colors
		  if (state.colors.green === 'rgb(106, 170, 100)') {
			colors = {
				gray: state.colors.gray,
				yellow: 'rgb(230, 113, 54)',
				green: 'rgb(133, 192, 249)',
			}
		  } else {
			colors = initState.colors
		  }
		  return {...state, colors: colors}	
		case 'END':
		  return {...state, endOfGame: true}

		// when the user press keyboard button that doesn't do anything
		case 'EMPTY':
	  	  return {...state}

	  	default:
	  	  return {...state}
	}
}