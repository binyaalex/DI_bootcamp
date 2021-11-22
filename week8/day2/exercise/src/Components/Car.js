import React from 'react';
import Garage from './Garage'

class Car extends React.Component {
	constructor() {
		super();
		this.state = {
			color: '',
		}
	}
	render() {
		return (
			<>
			<h2>Hi, I am a {this.state.color} Car!</h2>
			<Garage/>
			</>
		)	
	}
	
	componentDidMount () {
		this.setState({color: 'yellow'})
	}
}
export default Car