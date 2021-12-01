import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const readMore = () => {
  console.log('ggod3')
}

const Item = (props) => {
	const {hero, choose} = props
	const{id,clicked,name,image,occupation} = hero
	return (
		<Col cs={6} md={3}>
			<Card onClick={() => choose(id)} className='card'>
			  <Card.Img variant="top" src={image} />
			  <Card.Body className='text'>
			    <Card.Title className='title'>{name}</Card.Title>
			    <Card.Text>
			      <strong>occupation: </strong>{occupation}
			    </Card.Text>
			  </Card.Body>
			</Card>	
		</Col>
	)
}
export default Item