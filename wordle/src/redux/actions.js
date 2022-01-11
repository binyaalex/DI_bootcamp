import {initState} from './reducers'

let turn = 0
console.log(initState)
export const changeAction = (word) => {
	console.log(turn)
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