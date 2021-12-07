export const clickAction = (input) => {
	return (dispatch) => {
		fetch(`http://www.omdbapi.com/?apikey=b0fbafc&s=${input}`)
		.then(res=>res.json())
		.then(data => {
			dispatch(
				{type: 'CLICK', payload:data.Search}
			)
		})
		.catch(e=> {
			console.log(e)
		})
	}
}

export const changeAction = (value) => {
	return {
		type: 'CHANGE',
		payload: value
	}
}

export const details = (id) => {
	return (dispatch) => {
	console.log(1)
		fetch(`http://www.omdbapi.com/?apikey=b0fbafc&i=${id}`)
		.then(res=>res.json())
		.then(data => {
			console.log(data)
			dispatch(
				{type: 'DETAILS', payload:data}
			)
		})
		.catch(e=> {
			console.log(e)
		})
	}
}