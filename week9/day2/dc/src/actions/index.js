export const detailsClicked = (movie) => {
	console.log(movie)
	return {
		type: 'MOVIE_SELECTED',
		payload: movie,
	}
}
	