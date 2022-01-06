const initState = {
	text: ''
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'TEXT':
		console.log(state)
		  return {...state, text:action.payload}
		case 'ADD':
		console.log(action.payload)
		  return {...state, text:action.payload}
		default:
		  return {...state}	
	}
}