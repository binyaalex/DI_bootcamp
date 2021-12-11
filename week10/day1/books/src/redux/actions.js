
export const searchAction = () => {
	return (dispatch, getState) => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=search+${getState().text}`)
		.then(res=>res.json())
		.then(data => {
			if (getState().sort == 'oldest') {
				let orderArr = data.items
				orderArr.sort((a, b) => a.volumeInfo.publishedDate.split("-")[0] - b.volumeInfo.publishedDate.split("-")[0])
				dispatch(
					{type: 'SEARCH&SORT', payload:orderArr}
				)
			} else if (getState().sort == 'newest') {
				let orderArr = data.items
				orderArr.sort((a, b) => b.volumeInfo.publishedDate.split("-")[0] - a.volumeInfo.publishedDate.split("-")[0])
				dispatch(
					{type: 'SEARCH&SORT', payload:orderArr}
				)
			} else {
				dispatch(
					{type: 'SEARCH', payload:data}
				)
			}
		})
		.catch(e=> {
			console.log(e)
		})
	}
}

export const sortAction = (value) => {
	return (dispatch, getState) => {
		console.log(value)
		let orderArr = [...getState().data]
		console.log(orderArr)
		if (orderArr.length === 0) {
			console.log(1)
			dispatch (
				{type: 'sortbefore', payload:value}
			)
		} else {
			if (value == 'oldest') {
				orderArr.sort((a, b) => a.volumeInfo.publishedDate.split("-")[0] - b.volumeInfo.publishedDate.split("-")[0])
			} else if (value == 'newest') {
				orderArr.sort((a, b) => b.volumeInfo.publishedDate.split("-")[0] - a.volumeInfo.publishedDate.split("-")[0])
			}
			dispatch(
				{type: 'SORT', payload:orderArr}
			)
		}
	}
}

export const inputAction = (value) => {
	return {
		type: 'INPUT',
		payload: value
	}
}