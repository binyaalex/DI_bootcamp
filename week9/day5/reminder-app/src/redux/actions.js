export const textAction = (value) => {
	return {
		type: 'TEXT',
		payload: value
	}
}

export const dateAction = (value) => {
	return {
		type: 'DATE',
		payload: value
	}
}

export const addAction = () => {
	document.getElementById('text').value = ''
	return {
		type: 'ADD',
	}
}

export const dltAction = (value) => {
	console.log(value)
	return {
		type: 'DLT',
		payload: value
	}
}

export const clearAction = () => {
	console.log('clear')
	return {
		type: 'CLEAR',
		payload: 'value'
	}
}