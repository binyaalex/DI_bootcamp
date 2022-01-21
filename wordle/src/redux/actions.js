
const blackBox = () => {
    const squares = document.querySelectorAll('.letterBox')
    console.log('hi')
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].textContent !== '') {
        squares[i].style.borderColor = 'black'
      } else {
        squares[i].style.borderColor = 'lightgray'
      }
    }
}

const isItGray = (letter, grayLettersArr) => {
	let trueOrFalse = grayLettersArr.some(ele => ele === letter)
	return trueOrFalse
}
console.log(isItGray('Y', ['O', 'J', 'Y']))

export const changeAction = (e) => {
	console.log(e)
	let letter
	if (typeof(e) === 'string') {
		letter = e
	} else {
		letter = e.key.toUpperCase()
	}
    setTimeout(blackBox, 1)
    const boardLetters = document.querySelectorAll('.boardLetter')
    let greyLetters = []
    for (let i = 0; i < boardLetters.length; i++) {
    	if (boardLetters[i].style.backgroundColor === 'gray') {
    		greyLetters.push(boardLetters[i].textContent)
    	}
    }
	console.log(greyLetters)
	console.log(isItGray(letter, ['D', 'I', 'S']))

	console.log(letter)
	if (((letter.match(".*[A-Z].*") && letter.length < 2) || letter.match(".*[א-ת].*")) && !isItGray(letter, greyLetters)) {
		return {
			type:'CHANGE',
			payload: letter
		}
	} else if (e.key === 'Enter') {
		return {
			type:'ENTER'
		}
	} else if (e.keyCode === 8) {
		return {
			type:'DEL'
		}
	} else {
		return {
			type:'EMPTY'
		}
	}
}

export const enterAction = () => {
	console.log('enter')
	return {
		type:'ENTER',
	}
}

export const delAction = () => {

    setTimeout(blackBox, 1)

	console.log('del')
	return {
		type:'DEL',
	}
}

export const changeLanguageAction = (languageBtn) => {
	console.log(languageBtn)
	let language = languageBtn.textContent
	if (languageBtn.textContent === 'עב') {
		languageBtn.textContent = 'EN'
		document.querySelector('.keyboard').style.display = 'none'
		document.querySelector('.hebrewKeyboard').style.display = 'block'
	} else {
		languageBtn.textContent = 'עב'
		document.querySelector('.hebrewKeyboard').style.display = 'none'
		document.querySelector('.keyboard').style.display = 'block'
	}
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