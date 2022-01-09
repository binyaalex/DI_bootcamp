const initState = {
	text: '',
	date: '',
	reminders: []
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'TEXT':
		  return {...state, text:action.payload}
		case 'DATE':
		console.log(state)
		  return {...state, date:action.payload}
		case 'ADD':
		  return {...state, reminders:[...state.reminders, state.text]}
		case 'DLT':
			let newArray = state.reminders.slice();
			newArray.splice(action.payload, 1);
			return {...state, reminders: newArray}
		case 'CLEAR':
		  return {...state, reminders: []}
		default:
		  return {...state}	
	}
}