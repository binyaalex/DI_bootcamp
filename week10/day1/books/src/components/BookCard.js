import {connect} from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const BookCard = (props) => {
	const {book} = props
	const {volumeInfo} = book
	const {title, imageLinks, publishedDate, authors} = volumeInfo
	if (!book) {
		return (
			null
		)
	}
	return (
		<>
			<Col className='book'>
				<Card style={{width: '250px'}}>
				  <Card.Img variant="top" src={imageLinks.smallThumbnail} />
				  <Card.Body style={{height: '200px'}}>
				    <Card.Title>{title}</Card.Title>
				    <Card.Text>
						<p>Author: {authors[0]}</p>			      
						<p>Published: {publishedDate}</p>			      
	  			    </Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		</>
	)
}

export default connect()(BookCard);
