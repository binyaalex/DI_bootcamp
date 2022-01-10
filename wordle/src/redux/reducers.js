const initState = {
		dailyWord: 'raise',
		userWord: ''
	}


export const reducer = (state=initState, action={}) => {
	switch (action.type) {
		case 'CHANGE':
		console.log(state)
		  return {...state, userWord: action.payload}
		case 'ENTER':
		console.log(state)
		  for (let i = 0; i < state.userWord.length; i++) {
		  	for (let d = 0; d < state.dailyWord.length; d++) {
		  		if (state.userWord[i] === state.dailyWord[d] && d === i) {
		  		    console.log(state.userWord[i],': green')
		  	    } else (state.userWord[i] === state.dailyWord[d]) {
		  	    	console.log(state.userWord[i],': yellow')
		  	    }
		  	}
		  }
		  return {...state}
	  	default:
	  	  return {...state}
	}
}