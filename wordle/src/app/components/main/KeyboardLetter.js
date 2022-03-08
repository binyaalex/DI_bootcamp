import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../../redux/actions';

const KeyboardLetter = (props) => {
	const {letter, change2, enter, del} = props
	let className = 'boardLetter'
	let clickFunction = change2
	if (letter === 'enter') {
		clickFunction = enter
		className = 'boardLetter notLetter'
	} else if (letter === 'del') {
		clickFunction = del
		className = 'boardLetter notLetter'
	}

	return (
		<button onClick={clickFunction} className={className}> 
			{letter.toUpperCase()}
		</button>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    change2: (e) => dispatch(changeAction(e.target.textContent)),
    enter: () => dispatch(enterAction()),
    del: () => dispatch(delAction()),
  }
}
export default connect(null, mapDispatchToProps)(KeyboardLetter) 
