export const getData = (city) => {
	return (dispatch) => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1960fd6fb8a29cd48e5a7cf88bf9b8c`)
		.then(res=>res.json())
		.then(data => {
			dispatch(
				{type: 'GET', payload:data}
			)
		})
		.catch(e => {
			console.log(e)
		})
	}
}

export const getChange = (value) => {
	return {
		type: 'CHANGE',
		payload: value
	}
}