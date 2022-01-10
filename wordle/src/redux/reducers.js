const initState = {

	}


export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'DELETE':
		console.log(state)
		  return {...state}
	  	default:
	  	  return {...state}
	}
}