
const changeLanguage = () => {
	let languageBtn = document.querySelector('.languageBtn')
	if (languageBtn.textContent === 'עב') {
		languageBtn.textContent = 'EN'
		document.querySelector('.keyboard').style.display = 'none'
		document.querySelector('.hebrewKeyboard').style.display = 'block'
	} else {
		languageBtn.textContent = 'עב'
		document.querySelector('.hebrewKeyboard').style.display = 'none'
		document.querySelector('.keyboard').style.display = 'block'
	}
}

// color the boxes with letter in black border
const blackBox = () => {
    const squares = document.querySelectorAll('.letterBox')
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

	// change language
	if (e.key === '=') {
		let language = document.querySelector('.languageBtn').textContent
		changeLanguage()
		return {
			type: language,
		}
	}

	let letter
	// when the user use the screen keyboard
	if (typeof(e) === 'string') {
		letter = e
	// when the user use the real keyboard
	} else {
		letter = e.key.toUpperCase()
	}

    setTimeout(blackBox, 1)

    // push all the gray letters to array that the user wouldn't be able to use them
    const boardLetters = document.querySelectorAll('.boardLetter')
    let greyLetters = []
    for (let i = 0; i < boardLetters.length; i++) {
    	if (boardLetters[i].style.backgroundColor === 'gray') {
    		greyLetters.push(boardLetters[i].textContent)
    	}
    }

	return (dispatch, getState) => {
		// check that it's a letter, in the right language and that it's only one letter
		if (letter.match(getState().letters) && letter.length < 2
			// check that the letter is not one of the gray letters
			&& !letter.match(`.*[${greyLetters}].*`)) {
			dispatch ({
				type:'CHANGE',
				payload: letter
			})

		} else if (e.key === 'Enter') {
	        const playAgain = document.querySelector('.playAgain')
	        // check if it's the end of the game
			if (playAgain.style.display === '' || playAgain.style.display === 'none') {
				// when the user want to make his try
				dispatch ({
					type:'ENTER'
				})

			// when it's the end of the game pressing enter will start new game
			// by doing the same like wehn the user change the language
			// but stay in th same language
			} else {
				let language = document.querySelector('.languageBtn').textContent
		        document.querySelector('.messages').style.display = 'none'
		        document.querySelector('.well').style.display = 'none'
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

	// for unblack the box of the deleted letter
    setTimeout(blackBox, 1)

	console.log('del')
	return {
		type:'DEL',
	}
}

// when the user press change language on the screen keyboard
export const changeLanguageAction = (languageBtn) => {
	console.log(languageBtn)
	let language = languageBtn.textContent
	changeLanguage()
	return {
		type: language,
	}
}

export const delOwnAction = (letter) => {

    setTimeout(blackBox, 1)

	console.log('delown')
	return {
		type:'DELOWN',
		payload: letter
	}
}

export const playAgainAction = () => {
	let language = document.querySelector('.languageBtn').textContent
        document.querySelector('.messages').style.display = 'none'
        document.querySelector('.well').style.display = 'none'
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