import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../redux/actions';


const Keyboard = (props) => {
  const {change2, enter, del} = props
	return (
	  <div>      
      <div className='keyboard'>
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
          <button onClick={enter} className='notL'>ENTER</button>
          <button onClick={change2} className='boardLetter'>Z</button>
          <button onClick={change2} className='boardLetter'>X</button>
          <button onClick={change2} className='boardLetter'>C</button>
          <button onClick={change2} className='boardLetter'>V</button>
          <button onClick={change2} className='boardLetter'>B</button>
          <button onClick={change2} className='boardLetter'>N</button>
          <button onClick={change2} className='boardLetter'>M</button>
          <button onClick={del} className='notL'>DEL</button>
        </div>
      </div>

      <div className='hebrewKeyboard'>
        <div className='qToP'>
          <div onClick={change2} className='boardLetter'>ק</div>
          <div onClick={change2} className='boardLetter'>ר</div>
          <div onClick={change2} className='boardLetter'>א</div>
          <div onClick={change2} className='boardLetter'>ט</div>
          <div onClick={change2} className='boardLetter'>ו</div>
          <div onClick={change2} className='boardLetter'>ן</div>
          <div onClick={change2} className='boardLetter'>ם</div>
          <div onClick={change2} className='boardLetter'>פ</div>
        </div>
        <div className='aToL'>
          <div onClick={change2} className='boardLetter'>ש</div>
          <div onClick={change2} className='boardLetter'>ד</div>
          <div onClick={change2} className='boardLetter'>ג</div>
          <div onClick={change2} className='boardLetter'>כ</div>
          <div onClick={change2} className='boardLetter'>ע</div>
          <div onClick={change2} className='boardLetter'>י</div>
          <div onClick={change2} className='boardLetter'>ח</div>
          <div onClick={change2} className='boardLetter'>ל</div>
          <div onClick={change2} className='boardLetter'>ך</div>
          <div onClick={change2} className='boardLetter'>ף</div>
        </div>
        <div className='enterToBackspace'>
          <div onClick={enter} className='hebrewEnter'>ENTER</div>
          <div onClick={change2} className='boardLetter'>ז</div>
          <div onClick={change2} className='boardLetter'>ס</div>
          <div onClick={change2} className='boardLetter'>ב</div>
          <div onClick={change2} className='boardLetter'>ה</div>
          <div onClick={change2} className='boardLetter'>נ</div>
          <div onClick={change2} className='boardLetter'>מ</div>
          <div onClick={change2} className='boardLetter'>צ</div>
          <div onClick={change2} className='boardLetter'>ת</div>
          <div onClick={change2} className='boardLetter'>ץ</div>
          <div onClick={del}>DEL</div>
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
