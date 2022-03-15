import {connect} from 'react-redux';
import {getData, getChange} from '../redux/actions';

const Main = (props) => {
	const {handleClick, handleChange, weather, city, country, location, temperature, humidity, condition, display} = props
	return (
		<main>
			<h1>Weather Finder</h1>
			<h2>Find out temperature, conditions and more...</h2>
			<section>
				<div>	
					<input onChange={handleChange} type='text' placeholder='City'/>
					<button onClick={() => handleClick(city)}>Get Weather</button>
				</div>
				<data style={{display: display}}>
					<p><span>Location:</span> {location}, {country}</p>
					<p><span>Temperature:</span> {temperature}</p>
					<p><span>Humidity:</span> {humidity}</p>
					<p><span>Condition:</span> {condition}</p>
				</data>
			</section>
		</main>
	)
}

const mapStateToProps = (state) => {
	return {
		city: state.city,
		weather: state.data,
		country: state.country,
		location: state.location,
		temperature: state.temperature,
		humidity: state.humidity,
		condition: state.condition,
		display: state.display
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleChange: (e) => dispatch(getChange(e.target.value)),
		handleClick: (city) => dispatch(getData(city))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);