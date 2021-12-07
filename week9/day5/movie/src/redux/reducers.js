const initState = {
  text: '',
  movies: [],
  loading: false,
  movie: {}
}

export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'CHANGE':
		  return {...state, text:action.payload}
		case 'CLICK':
		  return {...state, movies:action.payload}
	  	case 'DETAILS':
	  		console.log(action)
		  return {...state, movie:action.payload}
		default:
		  return {...state}	
	}
}