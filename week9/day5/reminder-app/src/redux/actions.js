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
		payload: 'its work'
	}
}