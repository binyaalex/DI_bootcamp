import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../../redux/actions';
import KeyboardLetter from './KeyboardLetter'

const Keyboard = (props) => {
  const {change2, enter, del, keyboard} = props
	return (
	  <div className='keyboards'>   

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

      <div className='hebrewKeyboard'>
        <div className='qToP'>
          <button onClick={change2} className='boardLetter'>ק</button>
          <button onClick={change2} className='boardLetter'>ר</button>
          <button onClick={change2} className='boardLetter'>א</button>
          <button onClick={change2} className='boardLetter'>ט</button>
          <button onClick={change2} className='boardLetter'>ו</button>
          <button onClick={change2} className='boardLetter'>ן</button>
          <button onClick={change2} className='boardLetter'>ם</button>
          <button onClick={change2} className='boardLetter'>פ</button>
        </div>
        <div className='aToL'>
          <button onClick={change2} className='boardLetter'>ש</button>
          <button onClick={change2} className='boardLetter'>ד</button>
          <button onClick={change2} className='boardLetter'>ג</button>
          <button onClick={change2} className='boardLetter'>כ</button>
          <button onClick={change2} className='boardLetter'>ע</button>
          <button onClick={change2} className='boardLetter'>י</button>
          <button onClick={change2} className='boardLetter'>ח</button>
          <button onClick={change2} className='boardLetter'>ל</button>
          <button onClick={change2} className='boardLetter'>ך</button>
          <button onClick={change2} className='boardLetter'>ף</button>
        </div>
        <div className='enterToBackspace'>
          <button onClick={enter} className='boardLetter hebrewEnter'>ENTER</button>
          <button onClick={change2} className='boardLetter'>ז</button>
          <button onClick={change2} className='boardLetter'>ס</button>
          <button onClick={change2} className='boardLetter'>ב</button>
          <button onClick={change2} className='boardLetter'>ה</button>
          <button onClick={change2} className='boardLetter'>נ</button>
          <button onClick={change2} className='boardLetter'>מ</button>
          <button onClick={change2} className='boardLetter'>צ</button>
          <button onClick={change2} className='boardLetter'>ת</button>
          <button onClick={change2} className='boardLetter'>ץ</button>
          <button onClick={del} className='boardLetter hebrewDel'>DEL</button>
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
