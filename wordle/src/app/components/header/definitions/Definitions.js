import {connect} from 'react-redux';
import ModeBtn from './ModeBtn'
import LinkBtn from './LinkBtn'
import {changeHardModeAction, changeScreenModeAction, changeHighContrastModeAction} from '../../../redux/actions';


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
			// for hard mode that can change during the game
			if (messageClass !== '.notDisable') {
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
	}

	return (
		<div style={{backgroundColor: screenMode.BGC}} className='definitionsPage'>
			<header className='definitionsHeader'>
				<h5>{definitions.head}</h5>
				<div onClick={() => displayTuggle('.definitionsPage')} className='x'>X</div>
			</header>
			<main>
				<ModeBtn clickFunction={changeHardMode} showModeDisableMsg={showModeDisableMsg} disableParameter={'.notDisable'} title={definitions.hardModeHead} explanation={definitions.hardModeExplanation} inputClassName={'hardModeInput'} />
				<ModeBtn clickFunction={changeScreenMode} showModeDisableMsg={showModeDisableMsg} disableParameter={'.darkModeDisable'} title={definitions.darkModeHead} inputClassName={'darkModeInput'} />
				<ModeBtn clickFunction={changeHighContrastMode} showModeDisableMsg={showModeDisableMsg} disableParameter={'.highContrastModeDisable'} title={definitions.highContrastModeHead} explanation={definitions.highContrastModeExplanation} inputClassName={'highContrastModeInput'} />
{/*				<section className='sectionMode'>
					<h6>{definitions.darkModeHead}</h6>
					<label onClick={() => showModeDisableMsg('.darkModeDisable')} className="switch">
						<input onClick={changeScreenMode} className='darkModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>*/}
				<LinkBtn link={'https://github.com/binyaalex/DI_bootcamp/tree/main/wordle'} title={definitions.github} icon={"fab fa-brands fa-github"} />
{/*				<a className='hebrewChangeFlex' href="https://github.com/binyaalex/DI_bootcamp/tree/main/wordle" target="_blank" rel="noreferrer">
					<section className='sectionMode' style={{color: screenMode.color}}>
						<div className='modeTitle hebrewChangeFlex'>
							<h6>{definitions.github}</h6>
						</div>
						<i className="fab fa-brands fa-github"></i>
					</section>
				</a>*/}
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
