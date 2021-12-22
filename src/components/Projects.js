import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<div className='projects'>
			<div className='cards'>
				<a href='https://github.com/binyaalex/DI_bootcamp/tree/main/hackathon' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="liars-dice.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Liar's Dice</Card.Title>
					    <Card.Text className='cardText'>
					      Nice dice game for two players, using javascript.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				<a href='https://github.com/binyaalex/DI_bootcamp/tree/main/week8/day5/memory-game' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="memory-game.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Memory Game</Card.Title>
					    <Card.Text className='cardText'>
					      Great memory game, using react and fetch api.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
				<a href='https://github.com/binyaalex/DI_bootcamp/tree/main/week10/day2/weather' target='-blank'>
					<Card className='card'>
					  <Card.Img className='projectImg' variant="top" src="weather.jpg" />
					  <Card.Body>
					    <Card.Title className='title'>Weather App</Card.Title>
					    <Card.Text className='cardText'>
					      Simple weather app, using react and redux.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</a>
			</div>
		</div>
	)
}
export default Projects