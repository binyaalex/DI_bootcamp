
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

	console.log(typeof(letter))
	if (e.keyCode !== 13 && letter.match(".*[A-Z].*")) {
		return {
			type:'CHANGE',
			payload: letter
		}
	} else if (e.key === 'Enter') {
		return {
			type:'ENTER'
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