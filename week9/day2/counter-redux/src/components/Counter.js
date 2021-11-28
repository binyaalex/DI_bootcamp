import React from 'react';
import {connect} from 'react-redux';

import {INCREASE_COUNT, DECREASE_COUNT} from '../actions/index'

class Counter extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.handelPlusApp}>+</button>
				<span>{this.props.count}</span>
				<button onClick={this.props.handelMinusApp}>-</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		count:state.count
	}
}
const mapDispatchToProps = (dispatch) => {
  return {
    handelPlusApp: (e) => dispatch(INCREASE_COUNT(e.target.value)),
    handelMinusApp: (e) => dispatch(DECREASE_COUNT(e.target.value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
