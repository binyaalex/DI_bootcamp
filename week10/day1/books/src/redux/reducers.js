export const initState = {
	text: '',
	data: [],
	sort: null
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'INPUT':
		  return {...state, text:action.payload}
	  	case 'SEARCH':
	  	console.log(action.payload)
		  return {...state, data:action.payload.items}
		case 'SORT':
		console.log('action', action)
		console.log('state', state)
		  return {...state, data:action.payload}
		case 'sortbefore':
		  return {...state, sort:action.payload}
		case 'SEARCH&SORT':
		console.log(action)
		  return {...state, data:action.payload}		  
		default:
		  return {...state}	
	}
}