import {connect} from 'react-redux';
import {changeLanguageAction} from '../../redux/actions';
import Help from './Help'
import Definitions from './Definitions'

const Header = (props) => {
	const {language, endOfGame, gameName, HelpComponent, changeLanguage} = props
	const hebrewKeyboard = document.body.querySelector('.hebrewKeyboard')
	const playAgain = document.querySelector('.playAgain')	
	const messages = document.querySelector('.messages')	
	const displayTuggle = (pageClass) => {
		if (language === 'עב' && hebrewKeyboard.style.display === 'block') {
			hebrewKeyboard.style.display = 'none'
		} else if (language === 'עב') {
			hebrewKeyboard.style.display = 'block'
		}

		// all the conditions are for know if to display help and play again button or not
		const helpPage = document.querySelector(pageClass)
		const tries = document.querySelector('.tries')
		if (helpPage.style.display !== 'block' && !endOfGame) {
			tries.style.display = 'none'
			helpPage.style.display = 'block'
		} else if (helpPage.style.display !== 'block') {
		    playAgain.style.display = 'none'	
		    messages.style.display = 'none'	
			tries.style.display = 'none'
			helpPage.style.display = 'block'
		} else if (endOfGame) {
			helpPage.style.display = 'none'
			tries.style.display = 'block'
		    playAgain.style.display = 'block'	
		} else {			
			tries.style.display = 'block'
			helpPage.style.display = 'none'
		}
	}

	return (
		<header className='mainHeader'>
	    	<div>
				<div onClick={() => displayTuggle('.helpPage')} className='helpBtn'>?</div>
			</div>
			<div className='helpPage'>
				<Help displayTuggle={displayTuggle} />
			</div>
			<div className='definitionsPage'>
				<Definitions displayTuggle={displayTuggle} />
			</div>
	    	<div className='gameName'>
	    		<h4>{gameName}</h4>
			</div>
	    	<div className='leftHeader'>
	    		<div onClick={changeLanguage}  className='languageBtn'>עב</div>
	    		<img onClick={() => displayTuggle('.definitionsPage')} className='definitionsBtn' src='gear_gray.svg' alt='DfnBtn' />
	    	</div>
		</header>
	)
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    endOfGame: state.endOfGame,
    gameName: state.gameName,
    HelpComponent: 'Help',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (e) => dispatch(changeLanguageAction(e.target)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 
