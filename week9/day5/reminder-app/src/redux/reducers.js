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
		case 'DLT':
		console.log(state)
			let newArray = state.reminders.slice();
			newArray.splice(action.payload, 1);
			return {...state, reminders: newArray}
		case 'CLEAR':
		console.log(state)
		  return {...state, reminders: []}
		default:
		  return {...state}	
	}
}