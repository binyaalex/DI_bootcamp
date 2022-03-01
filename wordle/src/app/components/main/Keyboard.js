import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../../redux/actions';


const Keyboard = (props) => {
  const {change2, enter, del} = props
	return (
	  <div className='keyboards'>   

      <div className='englishKeyboard'>
        <div className='qToP'>
          <button onClick={change2} className='boardLetter'>Q</button>
          <button onClick={change2} className='boardLetter'>W</button>
          <button onClick={change2} className='boardLetter'>E</button>
          <button onClick={change2} className='boardLetter'>R</button>
          <button onClick={change2} className='boardLetter'>T</button>
          <button onClick={change2} className='boardLetter'>Y</button>
          <button onClick={change2} className='boardLetter'>U</button>
          <button onClick={change2} className='boardLetter'>I</button>
          <button onClick={change2} className='boardLetter'>O</button>
          <button onClick={change2} className='boardLetter'>P</button>
        </div>
        <div className='aToL'>
          <button onClick={change2} className='boardLetter'>A</button>
          <button onClick={change2} className='boardLetter'>S</button>
          <button onClick={change2} className='boardLetter'>D</button>
          <button onClick={change2} className='boardLetter'>F</button>
        	<button onClick={change2} className='boardLetter'>G</button>
          <button onClick={change2} className='boardLetter'>H</button>
          <button onClick={change2} className='boardLetter'>J</button>
          <button onClick={change2} className='boardLetter'>K</button>
          <button onClick={change2} className='boardLetter'>L</button>
        </div>
        <div className='enterToBackspace'>
          <button onClick={enter} className='notL boardLetter'>ENTER</button>
          <button onClick={change2} className='boardLetter'>Z</button>
          <button onClick={change2} className='boardLetter'>X</button>
          <button onClick={change2} className='boardLetter'>C</button>
          <button onClick={change2} className='boardLetter'>V</button>
          <button onClick={change2} className='boardLetter'>B</button>
          <button onClick={change2} className='boardLetter'>N</button>
          <button onClick={change2} className='boardLetter'>M</button>
          <button onClick={del} className='notL boardLetter'>DEL</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    change2: (e) => dispatch(changeAction(e.target.textContent)),
    enter: () => dispatch(enterAction()),
    del: () => dispatch(delAction()),
  }
}

export default connect(null, mapDispatchToProps)(Keyboard) 
