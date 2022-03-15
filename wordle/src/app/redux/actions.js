// change language function
const changeLanguage = () => {
	const languageBtn = document.querySelector('.languageBtn')
	const sectionModes = document.querySelectorAll('.sectionMode')
	const hebrewChangeFlexs = document.querySelectorAll('.hebrewChangeFlex')
	const h5s = document.querySelectorAll('h5')
	const closes = document.querySelectorAll('.x')

	if (languageBtn.textContent === 'עב') {
		// languageBtn.textContent = 'EN'

		// for design hebrew pages will start from the right
		sectionModes.forEach(sectionMode => sectionMode.classList.add('hebrewSectionMode'))
		hebrewChangeFlexs.forEach(hebrewChangeFlex => hebrewChangeFlex.classList.add('hebrewflex'))
		h5s.forEach(h5 => h5.classList.add('hebrewHead'))
		closes.forEach(close => close.classList.add('hebrewX'))
	} else {
		// languageBtn.textContent = 'עב'
		sectionModes.forEach(sectionMode => sectionMode.classList.remove('hebrewSectionMode'))
		hebrewChangeFlexs.forEach(hebrewChangeFlex => hebrewChangeFlex.classList.remove('hebrewflex'))
		h5s.forEach(h5 => h5.classList.remove('hebrewHead'))
		closes.forEach(close => close.classList.remove('hebrewX'))
	}
}

// function for make the letterbox black border after writing a letter
const blackBox = (turn, fullBorder, emptyBorder) => {
	if (turn === 6) {
		turn = 5
	}
    const squares = document.querySelectorAll('.try')[turn].children
    for (let i = 0; i < squares.length; i++) {
		if (squares[i].textContent !== '') {
			squares[i].style.borderColor = fullBorder
		} else {
			squares[i].style.borderColor = emptyBorder
		}
    }
}

// when the user write a letter or press the keyboard
export const changeAction = (e) => {
	let language = document.querySelector('.languageBtn').textContent
    const messages = document.querySelector('.messages')
    const wrongLanguageMsg = document.querySelector('.wrongLanguageMsg')
	const playAgain = document.querySelector('.playAgain')

	return (dispatch, getState) => {
		// change language
		if (e.key === '=') {
			changeLanguage()
			dispatch ({
				type: language,
			})
		}

		let letter
		// when the user use the screen keyboard
		if (typeof(e) === 'string') {
			letter = e
		// when the user use the real keyboard
		} else {
			letter = e.key.toUpperCase()
		}

		setTimeout(function() {
		    blackBox(getState().turn, getState().screenMode.fullLetterBorderC, getState().screenMode.letterBorderC);
		}, 1)
	
		// check that it's a one letter (not enter or backspace for example)
		if (letter.length < 2) {

			// check that the user write in the right language
			if (getState().language === 'EN' && letter.match(".*[א-ת].*")) {
	        	messages.style.display = 'block'
			  	wrongLanguageMsg.style.display = 'block'
			  	const undisplay = () => {
	        		messages.style.display = 'none'
			  		wrongLanguageMsg.style.display = 'none'
			  	}
			  	setTimeout(undisplay, 800)
			  	dispatch ({
					type:'EMPTY'
				})
			} else if (getState().language === 'עב' && letter.match(".*[A-Z].*")) {
	        	messages.style.display = 'block'
			  	wrongLanguageMsg.style.display = 'block'
			  	const undisplay = () => {
	        		messages.style.display = 'none'
			  		wrongLanguageMsg.style.display = 'none'
			  	}
			  	setTimeout(undisplay, 800)
			  	dispatch ({
					type:'EMPTY'
				})

			// check that is a letter and not numbers for example	
			} else if (letter.match(getState().letters)) {
				dispatch ({
					type:'CHANGE',
					payload: letter
				})
			}

		} else if (e.key === 'Enter') {
	        // check if it's the end of the game
			if (playAgain.style.display === '' || playAgain.style.display === 'none') {
				// when the user want to make his try
				dispatch ({
					type:'ENTER'
				})

			// when it's the end of the game pressing enter will start new game
			// by doing the same like when the user change the language
			// but stay in the same language
			} else {
		        messages.style.display = 'none'
		        document.querySelector('.well').style.display = 'none'
		        let loser = document.querySelector('.loser').style.display
		        if (loser !== 'block') {
		     		document.querySelector('.winner').classList.remove('winner')
		        }
		        document.querySelector('.loser').style.display = 'none'
		        playAgain.style.display = 'none'
				if (language === 'עב') {
					language = 'EN'
				} else {
					language = 'עב'
				}
				dispatch ({
					type: language,
				})
			}

		// when the user press Backspace
		} else if (e.keyCode === 8) {
			dispatch ({
				type:'DEL'
			})

		// when the user press keyboard that doesn't do anything
		} else {
			dispatch ({
				type:'EMPTY'
			})
		}
	}
}

// when the user press Enter on the screen keyboard
export const enterAction = () => {
	return {
		type:'ENTER',
	}
}

// when the user press Backspace on the screen keyboard
export const delAction = () => {
	return (dispatch, getState) => {
		// for gray border after delete by screen border
		setTimeout(function() {
		    blackBox(getState().turn, getState().screenMode.fullLetterBorderC, getState().screenMode.letterBorderC);
		}, 1)
		dispatch ({
			type:'DEL',
		})
	}
}

// when the user press change language on the screen keyboard
export const changeLanguageAction = (languageBtn) => {
	let language = languageBtn.textContent
	changeLanguage()
	return {
		type: language,
	}
}

// when user press on the play again button
export const playAgainAction = () => {
	let language = document.querySelector('.languageBtn').textContent
    document.querySelector('.messages').style.display = 'none'
    document.querySelector('.well').style.display = 'none'
    let loser = document.querySelector('.loser').style.display
    if (loser !== 'block') {
 		document.querySelector('.winner').classList.remove('winner')
    }
    loser = 'none'		        
    document.querySelector('.playAgain').style.display = 'none'
	if (language === 'עב') {
		language = 'EN'
	} else {
		language = 'עב'
	}
	return {
		type: language,
	}
}

// when the game end win or lose
export const endTheGameAction = () => {
	return {
		type:'END',
	}
}

export const changeHardModeAction = () => {
	return {
		type:'CHANGE_HARD_MODE',
	}
}

export const changeScreenModeAction = () => {
	return {
		type:'CHANGE_SCREEN_MODE',
	}
}

export const changeHighContrastModeAction = () => {
	return {
		type:'CHANGE_HIGE_CONTRAST_MODE',
	}
}