import {connect} from 'react-redux';

const Messages = (props) => {
	const {dailyWord, messages, turn} = props
	return (
		<div className='messages'>
			<div className='well'>{messages.win[turn-1]}</div>
			<div className='loser'>{messages.loser} {dailyWord}</div>
			<div className='noWord'>{messages.noWord}</div>
			<div className='grayMsg'>{messages.gray}</div>
			<div className='greenMsg'>{messages.green}</div>
			<div className='yellowMsg'>{messages.yellow}</div>
			<div className='wrongLanguageMsg'>{messages.wrongLanguage}</div>
			<div className='darkModeDisable'>{messages.darkModeDisable}</div>
			<div className='highContrastModeDisable'>{messages.highContrastModeDisable}</div>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    dailyWord: state.dailyWord,
    messages: state.messages,
    turn: state.turn
  }
}

export default connect(mapStateToProps)(Messages) 
