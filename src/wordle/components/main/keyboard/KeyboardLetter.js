import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../../../redux/actions';

const KeyboardLetter = (props) => {
	const {letter, change2, enter, del, language, keyboard} = props
	let className = 'boardLetter'
	let clickFunction = change2
	let fontSize = keyboard.size
	let width = ''
	if (letter === 'enter') {
		clickFunction = enter
		fontSize = ''
		if (language === 'EN') {			
			width = '91px'
		} else {
			width = '80px'
		}
	} else if (letter === 'del') {
		clickFunction = del
		fontSize = ''
	}

	return (
		<button style={{fontSize: fontSize, width: width}} onClick={clickFunction} className={className}> 
			{letter.toUpperCase()}
		</button>
	)
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    keyboard: state.keyboard,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change2: (e) => dispatch(changeAction(e.target.textContent)),
    enter: () => dispatch(enterAction()),
    del: () => dispatch(delAction()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(KeyboardLetter) 
