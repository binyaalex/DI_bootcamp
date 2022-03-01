import {connect} from 'react-redux';
import {changeLanguageAction} from '../../redux/actions';
import Help from './Help'
import Definitions from './Definitions'

const Header = (props) => {
	const {language, endOfGame, gameName, changeLanguage} = props
	
	const displayHelpTuggle = (e) => {
		const hebrewKeyboard = document.body.querySelector('.hebrewKeyboard').style.display
		if (language === 'עב' && hebrewKeyboard === 'block') {
			document.body.querySelector('.hebrewKeyboard').style.display = 'none'
		} else if (language === 'עב') {
			document.body.querySelector('.hebrewKeyboard').style.display = 'block'
		}

		// all the conditions are for know if to display help and play again button or not
		const helpDisplay = document.body.querySelector('.helpPage').style.display
		if (helpDisplay !== 'block' && !endOfGame) {
			document.body.querySelector('.tries').style.display = 'none'
			document.body.querySelector('.helpPage').style.display = 'block'
		} else if (helpDisplay !== 'block') {
		    document.querySelector('.playAgain').style.display = 'none'	
		    document.querySelector('.messages').style.display = 'none'	
			document.body.querySelector('.tries').style.display = 'none'
			document.body.querySelector('.helpPage').style.display = 'block'
		} else if (endOfGame) {
			document.body.querySelector('.helpPage').style.display = 'none'
			document.body.querySelector('.tries').style.display = 'block'
		    document.querySelector('.playAgain').style.display = 'block'	
		} else {			
			document.body.querySelector('.tries').style.display = 'block'
			document.body.querySelector('.helpPage').style.display = 'none'
		}
	}

	const displayDefinitions = (e) => {
		const hebrewKeyboard = document.body.querySelector('.hebrewKeyboard').style.display
		if (language === 'עב' && hebrewKeyboard === 'block') {
			document.body.querySelector('.hebrewKeyboard').style.display = 'none'
		} else if (language === 'עב') {
			document.body.querySelector('.hebrewKeyboard').style.display = 'block'
		}

		// all the conditions are for know if to display help and play again button or not
		const helpDisplay = document.body.querySelector('.definitionsPage').style.display
		if (helpDisplay !== 'block' && !endOfGame) {
			document.body.querySelector('.tries').style.display = 'none'
			document.body.querySelector('.definitionsPage').style.display = 'block'
		} else if (helpDisplay !== 'block') {
		    document.querySelector('.playAgain').style.display = 'none'	
		    document.querySelector('.messages').style.display = 'none'	
			document.body.querySelector('.tries').style.display = 'none'
			document.body.querySelector('.definitionsPage').style.display = 'block'
		} else if (endOfGame) {
			document.body.querySelector('.definitionsPage').style.display = 'none'
			document.body.querySelector('.tries').style.display = 'block'
		    document.querySelector('.playAgain').style.display = 'block'	
		} else {			
			document.body.querySelector('.tries').style.display = 'block'
			document.body.querySelector('.definitionsPage').style.display = 'none'
		}
	}

	return (
		<header className='mainHeader'>
	    	<div>
				<div onClick={displayHelpTuggle} className='helpBtn'>?</div>
			</div>
			<div className='helpPage'>
				<Help displayHelpTuggle={displayHelpTuggle} />
			</div>
			<div className='definitionsPage'>
				<Definitions displayDefinitions={displayDefinitions} />
			</div>
	    	<div className='gameName'>
	    		<h4>{gameName}</h4>
			</div>
	    	<div className='leftHeader'>
	    		<div onClick={changeLanguage}  className='languageBtn'>עב</div>
	    		<img onClick={displayDefinitions} className='definitionsBtn' src='gear_gray.svg' />
	    	</div>
		</header>
	)
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    endOfGame: state.endOfGame,
    gameName: state.gameName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (e) => dispatch(changeLanguageAction(e.target)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 
