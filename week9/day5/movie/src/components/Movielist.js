import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Movielist = (props) => {
	const {moviesArr} = props
	if (!moviesArr) {
		return (
			<h1>we didnt find this movie</h1>
		)
	} else {
		return (
		<>
			<Container className='container'>
				{
					moviesArr.map(item => {
						return (
									<MovieCard movie={item} key={item.imdbID}/>
						)			
					})
				}
			</Container>		
		</>
	)
	}
}

const mapStateToProps = (state) => {
	return {
		moviesArr: state.movies		
	}
}
export default connect(mapStateToProps)(Movielist);
