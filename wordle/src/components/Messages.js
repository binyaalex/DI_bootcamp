import {connect} from 'react-redux';

const Messages = (props) => {
	const {dailyWord} = props
	return (
		<div className='messages'>
			<div className='well'>
				well done!
			</div>
			<div className='loser'>
				You finished your tryes, the word is {dailyWord}, maybe next time
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
