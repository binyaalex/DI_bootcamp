
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

export const changeAction = (word) => {
	console.log(1)

    setTimeout(blackBox, 1)

	console.log(word)
	return {
		type:'CHANGE',
		payload: word.toUpperCase()
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