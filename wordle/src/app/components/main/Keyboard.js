import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../../redux/actions';
import KeyboardLetter from './KeyboardLetter'

const Keyboard = (props) => {
  const {change2, enter, del, keyboard} = props
	return (
	  <div className='keyboard'>   
      <div className='englishKeyboard'>
        <div className='qToP'>
          {
            keyboard.qToP.map((letter) => {
              return (
                <KeyboardLetter letter={letter} key={letter} />
              )
            })
          }
        </div>
        <div className='aToL'>
          {
            keyboard.aToL.map((letter) => {
              return (
                <KeyboardLetter letter={letter} key={letter} />
              )
            })
          }
        </div>
        <div className='enterToDel'>
          {
            keyboard.enterToDel.map((letter) => {
              return (
                <KeyboardLetter letter={letter} key={letter} />
              )
            })
          }
        </div>
      </div>
    </div>
	)
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard) 
