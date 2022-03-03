import {connect} from 'react-redux';
import {changeHardModeAction, changeScreenModeAction} from '../../redux/actions';


const Definitions = (props) => {
	const {changeHardMode, changeScreenMode, turn} = props

	const showDarkModeDisableMsg = () => {
		const messages = document.querySelector('.messages')
		if (turn) {
			// put message that the user can't change dark mode during the game
			const darkModeDisable = document.querySelector('.darkModeDisable')	
	  		messages.style.display = 'block'
		  	darkModeDisable.style.display = 'block'
		  	const undisplay = () => {
        		messages.style.display = 'none'
		  		darkModeDisable.style.display = 'none'
		  	}
		  	setTimeout(undisplay, 800)
		}
	}

	return (
		<div className='Definitions'>
			<header className='definitionsHeader'>
				<h5>SETTING</h5>
				<div onClick={props.displayDefinitionsTuggle} className='x'>X</div>
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
					<label onClick={showDarkModeDisableMsg} className="switch">
						<input onClick={changeScreenMode} className='darkModeInput' type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
				<section className='highContracstMode'>
					<div className='modeTitle'>
						<h6>High Contrast Mode</h6>
						<div className='btnExplanation'>For improved color vision</div>
					</div>
					<label className="switch">
						<input className='highContracstModeInput' type="checkbox" />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Definitions) 
