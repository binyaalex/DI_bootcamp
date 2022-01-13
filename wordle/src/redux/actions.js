import {initState} from './reducers'

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

let turn = 0
console.log(initState)
export const changeAction = (word) => {

    setTimeout(blackBox, 1)

	console.log(word)
	return {
		type:'CHANGE' + turn.toString(),
		payload: word
	}
}

export const enterAction = () => {
	console.log('enter')
	turn++
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