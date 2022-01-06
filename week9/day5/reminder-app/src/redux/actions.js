export const textAction = (value) => {
	return {
		type: 'TEXT',
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