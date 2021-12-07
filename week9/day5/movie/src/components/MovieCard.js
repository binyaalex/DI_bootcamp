import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';
import {details} from '../redux/actions'

const MovieCard = (props) => {
	const {movie} = props
	const {Title, Poster, imdbID} = movie
	return (
		<>
				<Card className='card'>
				  <Card.Img className='imgCard' variant="top" src={Poster} />
				  <Card.Body className='text'>
				    <Card.Title className='title'>{Title}</Card.Title>
				    <Link to={'/movie/' + imdbID}>
				    	<Button className="primary">get details</Button>
				  	</Link>
				  </Card.Body>
				</Card>	
		</>
	)
}

export default MovieCard;