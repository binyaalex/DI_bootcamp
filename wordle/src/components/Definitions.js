import {connect} from 'react-redux';
import {changeLanguageAction, changeHardModeAction, changeScreenModeAction} from '../redux/actions';


const Definitions = (props) => {
	const {changeLanguage, changeHardMode, changeScreenMode, language, endOfGame} = props

	return (
		<div className='Definitions'>
			<header className='definitionsHeader'>
				<h5>SETTING</h5>
				<div onClick={props.displayDefinitions} className='x'>X</div>
			</header>
			<main>
				<section className='languageMode'>
					<h6>Hebrew</h6>
					<label className="switch">
		    			{/*<button onClick={changeLanguage}  className='languageBtn'>עב</button>*/}
						<input type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
				<section className='hardMode'>
					<div className='hardModeTitle'>
						<h6>Hard Mode</h6>
						<div className='btnExplanation'>Any revealed hints must be used in subsequent guesses</div>
					</div>
						<label className="switch">
		    				{/*{<button onClick={changeHardMode}></button>}*/}
							<input onClick={changeHardMode} type="checkbox" />
							<span className="slider round"></span>
						</label>
				</section>
				<section className='darkMode'>
					<h6>Dark Mode</h6>
					<label className="switch">
						{/*<button onClick={changeScreenMode} className='hardModeBtn'>Dark Mode</button>*/}
						<input onClick={changeScreenMode} type="checkbox" />
						<span className="slider round"></span>
					</label>
				</section>
			</main>
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
