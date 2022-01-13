import {initState} from './reducers'

let turn = 0
console.log(initState)
export const changeAction = (word) => {
	const myGreeting = () => {
        const squares = document.querySelectorAll('.letterBox')
	    console.log('hi')
	    for (let i = 0; i < squares.length; i++) {
	      if (squares[i].textContent !== '') {
	        squares[i].style.borderColor = 'black'
	        console.log(1)
	      }
	    }
    }
    setTimeout(myGreeting, 1)
	
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