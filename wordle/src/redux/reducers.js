export const initState = {
		dailyWord: 'raise',
		userWord: ['','','','','',''],
		result: [],
		turn: 0
	}

export const reducer = (state=initState, action={}) => {
	console.log(state.userWord)
	let try1 = {...state.userWord}
	console.log(try1)
	switch (action.type) {
		case 'CHANGE0':
		  console.log(state)
		  try1[0] = action.payload
		  console.log(state)
		  return {...state, userWord: try1}
		case 'CHANGE1':
		  console.log(try1)
		  console.log(state)
		  try1[1] = action.payload
		  return {...state, userWord: try1}
		case 'CHANGE2':
		  return {...state, userWord: action.payload}
		case 'CHANGE3':
		  return {...state, userWord: action.payload}
		case 'CHANGE4':
		  return {...state, userWord: action.payload}
		case 'CHANGE5':
		  return {...state, userWord: action.payload}
		case 'ENTER':
		console.log(state)
		  let arr = []
		  for (let i = 0; i < state.userWord[0].length; i++) {
		  	for (let d = 0; d < state.dailyWord.length; d++) {
		  		console.log(state.userWord[0][i])
		  		if (state.userWord[0][i] === state.dailyWord[d] && d === i) {
		  		    console.log(state.userWord[0][i],': green')
		  		    arr[i] = 'green'
		  	    } else if (state.userWord[0][i] === state.dailyWord[d]) {
		  	    	console.log(state.userWord[0][i],': yellow')
		  		    arr[i] = 'yellow'
		  	    } else if (i === 0) {
		  	    	arr[d] = 'gray'
		  	    }
		  	}
		  }
		  return {...state, result: arr, turn: ++state.turn}
	  	default:
	  	  return {...state}
	}
}