import {connect} from 'react-redux';
import React, { useEffect } from 'react';

const ExampleLetter = (props) => {
	const {colors, displayTuggle, screenMode, help, color, d, className} = props
  	useEffect(() => {

 	});
	return (
		<div className={className}>
			{help[color].letters[d]}
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    screenMode: state.screenMode,
    help: state.help,
  }
}

export default connect(mapStateToProps)(ExampleLetter) 