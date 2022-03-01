import {connect} from 'react-redux';
import {playAgainAction} from '../../redux/actions';

const PlayAgain = (props) => {
	const {playAgain} = props
	return (
		<button onClick={playAgain} className='playAgain'>
			Play Again
		</button>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    playAgain: () => dispatch(playAgainAction()),
  }
}

export default connect(null, mapDispatchToProps)(PlayAgain) 
