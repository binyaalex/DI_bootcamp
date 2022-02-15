// change language function
const changeLanguage = () => {
	let languageBtn = document.querySelector('.languageBtn')
	if (languageBtn.textContent === 'עב') {
		languageBtn.textContent = 'EN'
		document.querySelector('.englishKeyboard').style.display = 'none'
		document.querySelector('.hebrewKeyboard').style.display = 'block'
	} else {
		languageBtn.textContent = 'עב'
		document.querySelector('.hebrewKeyboard').style.display = 'none'
		document.querySelector('.englishKeyboard').style.display = 'block'
	}
}

// function for make the letterbox black border after writing a letter
const blackBox = (turn) => {
	if (turn === 6) {
		turn = 5
	}
    const squares = document.querySelectorAll('.try')[turn].children
    for (let i = 0; i < squares.length; i++) {
		if (squares[i].textContent !== '') {
			squares[i].style.borderColor = 'black'
		} else {
			squares[i].style.borderColor = 'lightgray'
		}
    }
}

// when the user write a letter or press the keyboard
export const changeAction = (e) => {
	return (dispatch, getState) => {
		// change language
		if (e.key === '=') {
			let language = document.querySelector('.languageBtn').textContent
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
		    blackBox(getState().turn);
		}, 1)
	
		// check that it's a one letter (not enter or backspace for example)
		if (letter.length < 2) {

			// check that the user write in the right language
			if (getState().language === 'EN' && letter.match(".*[א-ת].*")) {
	        	document.querySelector('.messages').style.display = 'block'
			  	document.querySelector('.wrongLanguageMsg').style.display = 'block'
			  	const undisplay = () => {
	        		document.querySelector('.messages').style.display = 'none'
			  		document.querySelector('.wrongLanguageMsg').style.display = 'none'
			  	}
			  	setTimeout(undisplay, 800)
			  	dispatch ({
					type:'EMPTY'
				})
			} else if (getState().language === 'עב' && letter.match(".*[A-Z].*")) {
	        	document.querySelector('.messages').style.display = 'block'
			  	document.querySelector('.wrongLanguageMsg').style.display = 'block'
			  	const undisplay = () => {
	        		document.querySelector('.messages').style.display = 'none'
			  		document.querySelector('.wrongLanguageMsg').style.display = 'none'
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
	        const playAgain = document.querySelector('.playAgain')
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
				let language = document.querySelector('.languageBtn').textContent
		        document.querySelector('.messages').style.display = 'none'
		        document.querySelector('.well').style.display = 'none'
		        let loser = document.querySelector('.loser').style.display
		        if (loser !== 'block') {
		     		document.querySelector('.winner').classList.remove('winner')
		        }
		        document.querySelector('.loser').style.display = 'none'
		        document.querySelector('.playAgain').style.display = 'none'
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
		    blackBox(getState().turn);
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
        document.querySelector('.loser').style.display = 'none'		        
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
