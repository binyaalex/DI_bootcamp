import {connect} from 'react-redux';
import {changeLanguageAction, changeHardModeAction} from '../redux/actions';
import Help from './Help'
// import Result from './Result'

const Header = (props) => {
	const {changeLanguage, changeHardMode, language, endOfGame} = props
	
	const displayHelpTuggle = (e) => {
		const hebrewKeyboard = document.body.querySelector('.hebrewKeyboard').style.display
		if (language === 'עב' && hebrewKeyboard === 'block') {
			console.log(1)
			document.body.querySelector('.hebrewKeyboard').style.display = 'none'
		} else if (language === 'עב') {
			document.body.querySelector('.hebrewKeyboard').style.display = 'block'
		}

		// all the conditions are for know if to display help and play again button or not
		const helpDisplay = document.body.querySelector('.helpPage').style.display
		if (helpDisplay !== 'block' && !endOfGame) {
			document.body.querySelector('.helpPage').style.display = 'block'
		} else if (helpDisplay !== 'block') {
		    document.querySelector('.playAgain').style.display = 'none'	
		    document.querySelector('.messages').style.display = 'none'	
			document.body.querySelector('.helpPage').style.display = 'block'
		} else if (endOfGame) {
			document.body.querySelector('.helpPage').style.display = 'none'
		    document.querySelector('.playAgain').style.display = 'block'	
		} else {			
			document.body.querySelector('.helpPage').style.display = 'none'
		}
	}

	// const getResult = () => {
	// 	document.querySelector('.resultPage').style.display = 'block'
	// 	const tryes = document.querySelector('.tryes').children
	// 	for (let i = 0; i < tryes.length; i++) {
	// 		for (let d = 0; d < tryes[i].children.length; d++) {
	// 			console.log(tryes[i].children[d].style.backgroundColor)	
	// 		}
	// 	}
	// }

	return (
		<header className='mainHeader'>
	    	<div>
				<div onClick={displayHelpTuggle} className='helpBtn'>?</div>
			</div>
			<div className='helpPage'>
				<Help displayHelpTuggle={displayHelpTuggle} />
			</div>
	    	<div>
	    		<h4>WORDLE</h4>
			</div>
	    	<div className='leftHeader'>
	    		<div onClick={changeHardMode}>Hard Mode</div>
	    		{/*<i class="fas fa-solid fa-heart"></i>*/}
	    		{/*<img onClick={changeHardMode} src='stats.jpg' />*/}
	    		<div onClick={changeLanguage}  className='languageBtn'>עב</div> 
	    	</div>
		</header>
	)
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    endOfGame: state.endOfGame,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (e) => dispatch(changeLanguageAction(e.target)),
    changeHardMode: (e) => dispatch(changeHardModeAction(e.target)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 
