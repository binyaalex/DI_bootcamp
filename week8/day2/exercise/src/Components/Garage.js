import React from 'react';

class Garage extends React.Component {
	constructor() {
		super();
		this.state = {
			size: 'small',
		}
	}
	render() {
		return (
			<>
				<header>Who lives in my {this.state.size} Garage?</header>
			</>
		)
	}
}
export default Garage