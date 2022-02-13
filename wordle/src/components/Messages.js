import {connect} from 'react-redux';

const Messages = (props) => {
	const {dailyWord, messages} = props
	return (
		<div className='messages'>
			<div className='well'>
				{messages.win}
			</div>
			<div className='loser'>
				{messages.loser} {dailyWord}
			</div>
			<div className='noWord'>
				{messages.noWord}
			</div>
			<div className='greenMsg'>
				{messages.green}
			</div>
			<div className='yellowMsg'>
				{messages.yellow}
			</div>
			<div className='wrongLanguageMsg'>
				{messages.wrongLanguage}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    dailyWord: state.dailyWord,
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Messages) 
