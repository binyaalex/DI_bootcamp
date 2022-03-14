import {connect} from 'react-redux';

const ExampleLetter = (props) => {
	const {help, color, d, className} = props
	return (
		<div className={className}>
			{help[color].letters[d]}
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    help: state.help,
  }
}

export default connect(mapStateToProps)(ExampleLetter) 