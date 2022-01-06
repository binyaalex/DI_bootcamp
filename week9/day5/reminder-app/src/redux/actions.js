export const textAction = (value) => {
	return {
		type: 'TEXT',
		payload: value
	}
}

export const addAction = () => {
	return {
		type: 'ADD',
		payload: 'its work'
	}
}