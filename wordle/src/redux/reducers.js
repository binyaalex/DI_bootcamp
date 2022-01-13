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
		  try1[0] += action.payload
		  console.log(state)
		  return {...state, userWord: try1}
		case 'CHANGE1':
		  try1[1] += action.payload
		  return {...state, userWord: try1}
		case 'CHANGE2':
	   	  try1[2] += action.payload
		  return {...state, userWord: try1}
		case 'CHANGE3':
		  try1[3] += action.payload
		  return {...state, userWord: try1}
		case 'CHANGE4':
		  try1[4] += action.payload
		  return {...state, userWord: try1}
		case 'CHANGE5':
		  try1[5] += action.payload
		  return {...state, userWord: try1}
		case 'ENTER':
		console.log(state)
		  let arr = []
		  for (let i = 0; i < state.userWord[state.turn].length; i++) {
		  	for (let d = 0; d < state.dailyWord.length; d++) {
		  		console.log(state.userWord[state.turn][i])
		  		console.log(state.dailyWord[d])
		  		console.log(i)
		  		if (state.userWord[state.turn][i].toLowerCase() === state.dailyWord[d] && d === i) {
		  		    console.log(`${state.userWord[state.turn][i]} ${state.dailyWord[d]}: green`)
		  		    arr[i] = '#6AAA64'
		  	    } else if (state.userWord[state.turn][i].toLowerCase() === state.dailyWord[d]) {
		  	    	console.log(`${state.userWord[state.turn][i]} ${state.dailyWord[d]}: yellow`)
		  		    arr[i] = '#C9B458'
		  	    } else if (!arr[i]) {
		  	    	console.log(`${state.userWord[state.turn][i]} ${state.dailyWord[d]}: gray`)
		  	    	arr[i] = 'gray'
		  	    }
		  	    console.log(arr)
		  	}
		  }
		  console.log(arr)
		  return {...state, result: arr, turn: ++state.turn}
	  	default:
	  	  return {...state}
	}
}