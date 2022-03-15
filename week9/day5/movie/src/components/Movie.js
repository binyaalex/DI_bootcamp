import {connect} from 'react-redux';
import {details} from '../redux/actions';
import { useEffect } from 'react';

const Movie = (props) => {
	useEffect(() => handleClick(props.match.params.id), [])
	const {movieObj, handleClick} = props
	console.log(movieObj)
	const {Poster, Title, Genre, Released, Rated, imdbRating, Director, Writer, Actors} = movieObj
	return (
		<>
			<section>
				<div className='imgDiv'>
					<img id='imgMovie' src={Poster}/>
				</div>
				<div className='infoTitle'>
					<h1 className='titleMovie'>{Title}</h1>
					<div className='info'>
						<p><strong>Genre:</strong> {Genre}</p>
						<p><strong>Released:</strong> {Released}</p>
						<p><strong>Rated:</strong> {Rated}</p>
						<p><strong>IMDB Rating:</strong> {imdbRating}</p>
						<p><strong>Director:</strong> {Director}</p>
						<p><strong>Writer:</strong> {Writer}</p>
						<p><strong>Actors:</strong> {Actors}</p>
					</div>
				</div>
			</section>
		</>
	)
}
const mapStateToProps = (state) => {
	return {
		movieObj: state.movie		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (id) => dispatch(details(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);