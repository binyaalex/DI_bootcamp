import {connect} from 'react-redux';

const Messages = (props) => {
	const {dailyWord} = props
	return (
		<div className='messages'>
			<div className='well'>
				well done!
			</div>
			<div className='loser'>
				Game over, the word is {dailyWord}, maybe next time.
			</div>
			<div className='noWord'>
				there is no such a word!
			</div>
			<div className='yellowAndGreen'>
				You must use the green and the yellow letters!
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    dailyWord: state.dailyWord
  }
}

export default connect(mapStateToProps)(Messages) 
