const initState = {
	city: '',
	country: '',
	location: '',
	temperature: '',
	humidity: '',
	condition: '',
	display: 'none',
	data: {}
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'GET':
		console.log(action.payload)
			return {...state, 
				country:action.payload.sys.country,
				location:action.payload.name,
				temperature:action.payload.main.temp,
				humidity:action.payload.main.humidity,
				condition:action.payload.weather[0].description,
				display: 'unset'
			}
		case 'CHANGE':
		console.log(action.payload)
			return {...state, city:action.payload}
		default:
			return{...state}
	}
}