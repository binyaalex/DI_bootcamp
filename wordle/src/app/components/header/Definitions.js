import {connect} from 'react-redux';
import {changeHardModeAction, changeScreenModeAction, changeHighContrastModeAction} from '../../redux/actions';


const Definitions = (props) => {
	const {
		   changeHardMode,
		   changeScreenMode, 
		   changeHighContrastMode, 
		   displayTuggle, 
		   turn, 
		   screenMode, 
		   definitions
		} = props

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
		<div style={{backgroundColor: screenMode.BGC}} className='definitionsPage'>
			<header className='definitionsHeader'>
				<h5>{definitions.head}</h5>
				<div onClick={() => displayTuggle('.definitionsPage')} className='x'>X</div>
			</header>
			<main>
				<section className='sectionMode'>
					<div className='modeTitle hebrewChangeFlex'>
						<h6>{definitions.hardModeHead}</h6>
						<div className='btnExplanation'>{definitions.hardModeExplanation}</div>
					</div>
					<label className="switch">
						<input onClick={changeHardMode} className='hardModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
				<section className='sectionMode'>
					<h6>{definitions.darkModeHead}</h6>
					<label onClick={() => showModeDisableMsg('.darkModeDisable')} className="switch">
						<input onClick={changeScreenMode} className='darkModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
				<section className='sectionMode'>
					<div className='modeTitle hebrewChangeFlex'>
						<h6>{definitions.highContrastModeHead}</h6>
						<div className='btnExplanation'>{definitions.highContrastModeExplanation}</div>
					</div>
					<label onClick={() => showModeDisableMsg('.highContrastModeDisable')} className="switch">
						<input onClick={changeHighContrastMode} className='highContrastModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
				<a className='hebrewChangeFlex' href="https://github.com/binyaalex/DI_bootcamp/tree/main/wordle" target="_blank" rel="noreferrer">
					<section className='sectionMode' style={{color: screenMode.color}}>
						<div className='modeTitle hebrewChangeFlex'>
							<h6>{definitions.github}</h6>
						</div>
						<i className="fab fa-brands fa-github"></i>
					</section>
				</a>
				<a className='hebrewChangeFlex' href="https://www.linkedin.com/in/benjamin-alexander-b39863195" target="_blank" rel="noreferrer">
					<section className='sectionMode' style={{color: screenMode.color}}>
						<div className='modeTitle hebrewChangeFlex'>
							<h6>{definitions.linkedin}</h6>
						</div>
						<i style={{color: screenMode.color}} className="fab fa-brands fa-linkedin"></i>
					</section>
				</a>
			</main>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    turn: state.turn,
    screenMode: state.screenMode,
    definitions: state.definitions,
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
