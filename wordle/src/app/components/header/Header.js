import {connect} from 'react-redux';
import {changeLanguageAction} from '../../redux/actions';
import Help from './help/Help'
import Definitions from './definitions/Definitions'

const Header = (props) => {
	const {endOfGame, gameName, screenMode, languageBtn, changeLanguage} = props
	const playAgain = document.querySelector('.playAgain')	
	const messages = document.querySelector('.messages')

	const displayTuggle = (pageClass) => {
		// all the conditions are for know if to display help and play again button or not
		const helpOrDefinitionsPage = document.querySelector(pageClass)
		if (helpOrDefinitionsPage.style.display !== 'block' && !endOfGame) {
			helpOrDefinitionsPage.style.display = 'block'
		} else if (helpOrDefinitionsPage.style.display !== 'block') {
		    playAgain.style.display = 'none'	
		    messages.style.display = 'none'	
			helpOrDefinitionsPage.style.display = 'block'
		} else if (endOfGame) {
			helpOrDefinitionsPage.style.display = 'none'
		    playAgain.style.display = 'block'	
		} else {			
			helpOrDefinitionsPage.style.display = 'none'
		}
	}

	return (
		<header style={{borderBottom: screenMode.headerBorderBottom}} className='mainHeader'>
	    	<div>
				<div onClick={() => displayTuggle('.helpPage')} className='helpBtn'>?</div>
			</div>
			<Help displayTuggle={displayTuggle} />
			<Definitions displayTuggle={displayTuggle} />
	    	<div className='gameName'>
	    		<h4>{gameName}</h4>
			</div>
	    	<div className='leftHeader'>
	    		<div onClick={changeLanguage}  className='languageBtn'>{languageBtn}</div>
	    		<img onClick={() => displayTuggle('.definitionsPage')} className='definitionsBtn' src='gear_gray.svg' alt='DfnBtn' />
	    	</div>
		</header>
	)
}

const mapStateToProps = (state) => {
  return {
    endOfGame: state.endOfGame,
    gameName: state.gameName,
    screenMode: state.screenMode,
    languageBtn: state.languageBtn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (e) => dispatch(changeLanguageAction(e.target)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 
