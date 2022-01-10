export const changeAction = (word) => {
	console.log(word)
	return {
		type:'CHANGE',
		payload: word
	}
}

export const enterAction = () => {
	console.log('enter')
	return {
		type:'ENTER',
		payload: 'word'
	}
}