import {connect} from 'react-redux';
import KeyboardLetter from './KeyboardLetter'

const Keyboard = (props) => {
  const {keyboard} = props
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

export default connect(mapStateToProps)(Keyboard) 
