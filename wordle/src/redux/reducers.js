import WORDS from '../components/wordList'
const randomNum = Math.floor(Math.random() * WORDS.length);
console.log(WORDS.length)

export const initState = {
		wordList: WORDS,
		dailyWord: WORDS[randomNum],
		userWord: ['','','','','',''],
		result: [],
		turn: 0
	}
console.log(initState.dailyWord)
export const reducer = (state=initState, action={}) => {
	console.log(state.userWord)
	let try1 = {...state.userWord}
	console.log(try1)
	switch (action.type) {
		case 'CHANGE':
		  if (state.userWord[state.turn].length < 5) {
		  	try1[state.turn] += action.payload
		  	return {...state, userWord: try1}	
		  } else {
		  	return {...state}
		  }
		case 'DEL':
		  console.log(state.turn)
		  try1[state.turn] = try1[state.turn].slice(0, -1);
		  console.log(try1)
		  return {...state, userWord: try1}
		case 'ENTER':
		console.log(state)
		  let arr = []
		  let isWordInWordList = state.wordList.some(ele => ele.toUpperCase() === state.userWord[state.turn])
		  if (isWordInWordList) {
		  	for (let i = 0; i < state.userWord[state.turn].length; i++) {
			  	for (let d = 0; d < state.dailyWord.length; d++) {
			  		console.log(state.userWord[state.turn][i])
			  		console.log(state.dailyWord[d])
			  		console.log(i)
			  		if (state.userWord[state.turn][i].toLowerCase() === state.dailyWord[d] && d === i) {
			  		    console.log(`${state.userWord[state.turn][i]} ${state.dailyWord[d]}: green`)
			  		    arr[i] = '#6AAA64'
			  	    } else if (state.userWord[state.turn][i].toLowerCase() === state.dailyWord[d] && arr[i] !== '#6AAA64') {
			  	    	console.log(`${state.userWord[state.turn][i]} ${state.dailyWord[d]}: yellow`)
			  		    arr[i] = '#C9B458'
			  	    } else if (!arr[i]) {
			  	    	console.log(`${state.userWord[state.turn][i]} ${state.dailyWord[d]}: gray`)
			  	    	arr[i] = 'gray'
			  	    }
			  	    console.log(arr)
			  	}
		  	}
		  } else {
		  	document.querySelector('.shake').style.display = 'block'
		  	const undisplay = () => {
		  		document.querySelector('.shake').style.display = 'none'
		  	}
		  	setTimeout(undisplay, 800)
		  	return {...state}
		  }
		  
		  console.log(arr)
		  return {...state, result: arr, turn: ++state.turn}
		case 'EMPTY':
	  	  return {...state}
	  	default:
	  	  return {...state}
	}
}