import {connect} from 'react-redux';
import {playAgainAction} from '../../redux/actions';

const PlayAgain = (props) => {
	const {playAgain, playAgainName} = props
	return (
		<button onClick={playAgain} className='playAgain'>
			{playAgainName}
		</button>
	)
}

const mapStateToProps = (state) => {
  return {
    playAgainName: state.playAgain,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playAgain: () => dispatch(playAgainAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayAgain) 
