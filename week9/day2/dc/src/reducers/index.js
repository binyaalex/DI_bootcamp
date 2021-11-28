import {combineReducers} from 'redux';

const initialState = {
	movies:
	[
	    {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
	    {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
	    {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
	    {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
	    {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
	],
	selectedMovie: null
}

export const movieReducer = (state=initialState , action={}) => {
	switch (action.type) {
		default:
			return {...state}
	}
}



export const selectedMovieReducer = (state=initialState , action={}) => {
	console.log(action.payload)
	switch (action.type) {
		case 'MOVIE_SELECTED':
			return{...state, selectedMovie: action.payload}
		default:
			return {...state}
	}
}

export const reducers = combineReducers({movieReducer, selectedMovieReducer})