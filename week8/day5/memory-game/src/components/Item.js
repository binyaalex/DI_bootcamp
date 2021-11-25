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
			<Card onClick={() => choose(id)} style={{ width: '100px', height: '300px', border: '1px solid black' }}>
			  <Card.Img variant="top" src={image} width='100px' />
			  <Card.Body>
			    <Card.Title>{name}</Card.Title>
			    <Card.Text>
			      {occupation}
			    </Card.Text>
			  </Card.Body>
			</Card>	
		</Col>
	)
}
export default Item