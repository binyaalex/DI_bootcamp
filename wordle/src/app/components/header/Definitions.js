import {connect} from 'react-redux';
import {changeHardModeAction, changeScreenModeAction, changeHighContrastModeAction} from '../../redux/actions';


const Definitions = (props) => {
	const {changeHardMode, changeScreenMode, changeHighContrastMode, displayTuggle, turn} = props

	const showModeDisableMsg = (messageClass) => {
		const messages = document.querySelector('.messages')
		if (turn) {
			// put message that the user can't change dark mode during the game
			const message = document.querySelector(messageClass)	
	  		messages.style.display = 'block'
		  	message.style.display = 'block'
		  	const undisplay = () => {
        		messages.style.display = 'none'
		  		message.style.display = 'none'
		  	}
		  	setTimeout(undisplay, 2500)
		}
	}

	return (
		<div className='Definitions'>
			<header className='definitionsHeader'>
				<h5>SETTING</h5>
				<div onClick={() => displayTuggle('.definitionsPage')} className='x'>X</div>
			</header>
			<main>
				<section className='hardMode'>
					<div className='modeTitle'>
						<h6>Hard Mode</h6>
						<div className='btnExplanation'>Any revealed hints must be used in subsequent guesses</div>
					</div>
						<label className="switch">
							<input onClick={changeHardMode} className='hardModeInput' type="checkbox" />
							<span className="slider round"></span>
						</label>
				</section>
				<section className='darkMode'>
					<h6>Dark Mode</h6>
					<label onClick={() => showModeDisableMsg('.darkModeDisable')} className="switch">
						<input onClick={changeScreenMode} className='darkModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
				<section className='highContracstMode'>
					<div className='modeTitle'>
						<h6>High Contrast Mode</h6>
						<div className='btnExplanation'>For improved color vision</div>
					</div>
					<label onClick={() => showModeDisableMsg('.highContrastModeDisable')} className="switch">
						<input onClick={changeHighContrastMode} className='highContrastModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>				
			</main>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHardMode: () => dispatch(changeHardModeAction()),
    changeScreenMode: () => dispatch(changeScreenModeAction()),
    changeHighContrastMode: () => dispatch(changeHighContrastModeAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Definitions) 
