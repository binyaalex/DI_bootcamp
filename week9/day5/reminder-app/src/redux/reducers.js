const initState = {
	text: '',
	reminders: []
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'TEXT':
		console.log(state)
		  return {...state, text:action.payload}
		case 'ADD':
		  return {...state, reminders:[...state.reminders, state.text]}
		default:
		  return {...state}	
	}
}