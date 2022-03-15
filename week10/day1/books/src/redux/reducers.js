export const initState = {
	text: '',
	data: [],
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'INPUT':
		  return {...state, text:action.payload}
	  	case 'SEARCH':
	  	console.log(action.payload)
		  return {...state, data:action.payload.items}	  
		default:
		  return {...state}	
	}
}