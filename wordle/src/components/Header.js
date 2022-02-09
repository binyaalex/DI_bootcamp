import {connect} from 'react-redux';
import {changeLanguageAction} from '../redux/actions';
import Help from './Help'
// import Result from './Result'

const Header = (props) => {
	const {changeLanguage, endOfGame} = props
	
	const displayHelpTuggle = (e) => {
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
	    		{/*<img onClick={getResult} src='stats.jpg' />*/}
	    		<div onClick={changeLanguage}  className='languageBtn'>עב</div> 
	    	</div>
		</header>
	)
}

const mapStateToProps = (state) => {
  return {
    endOfGame: state.endOfGame,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (e) => dispatch(changeLanguageAction(e.target)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) 
