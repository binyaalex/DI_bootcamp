import React from 'react';

class Garage extends React.Component {
	constructor() {
		super();
		this.state = {
		    brand: "Samsung",
		    model: "Galaxy S20",
		    color: "black",
		    year: 2020
		};
	}
	changeColor = () => {
		this.setState({color:'blue'})
	}
	render() {
		return (
			<>
				<h3>My phon is a {this.state.brand}</h3>
				<p>It is a {this.state.color} {this.state.model} from {this.state.year}</p>
				<button onClick={this.changeColor}>Change Color</button>
			</>
		)
	}
}
export default Garage