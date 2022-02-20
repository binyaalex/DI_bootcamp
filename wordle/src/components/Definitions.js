import {connect} from 'react-redux';
import {changeLanguageAction, changeHardModeAction, changeScreenModeAction} from '../redux/actions';


const Definitions = (props) => {
	const {changeLanguage, changeHardMode, changeScreenMode, language, endOfGame} = props
	
	return (
		<div className='Definitions'>
				<div onClick={changeScreenMode} className='hardModeBtn'>dark Mode</div>
	    		{<img onClick={changeHardMode} src='brain.jpg' />}
	    		<div onClick={changeLanguage}  className='languageBtn'>עב</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (e) => dispatch(changeLanguageAction(e.target)),
    changeHardMode: (e) => dispatch(changeHardModeAction(e.target)),
    changeScreenMode: (e) => dispatch(changeScreenModeAction(e.target)),
  }
}

export default connect(null, mapDispatchToProps)(Definitions) 
