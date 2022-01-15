
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

export const changeAction = (e) => {
	console.log(e)
	let letter
	if (typeof(e) === 'string') {
		letter = e
	} else {
		letter = e.key.toUpperCase()
	}
    setTimeout(blackBox, 1)

	console.log(letter)
	if ((e.keyCode > 64 && e.keyCode < 91) || (letter.match(".*[A-Z].*") && letter.length < 2)) {
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