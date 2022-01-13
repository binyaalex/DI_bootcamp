import {connect} from 'react-redux';
import {changeAction, enterAction, delAction} from '../redux/actions';


const Keyboard = (props) => {
  const {change1, change2, enter, del} = props
	return (
	  <div>      
{/*        <input onChange={change1} type='text' />
        <button onClick={enter}>Enter</button>*/}
        <div className='keyboard'>
          <div className='qToP'>
            <div onClick={change2} className='boardLetter'>Q</div>
            <div onClick={change2} className='boardLetter'>W</div>
            <div onClick={change2} className='boardLetter'>E</div>
            <div onClick={change2} className='boardLetter'>R</div>
            <div onClick={change2} className='boardLetter'>T</div>
            <div onClick={change2} className='boardLetter'>Y</div>
            <div onClick={change2} className='boardLetter'>U</div>
            <div onClick={change2} className='boardLetter'>I</div>
            <div onClick={change2} className='boardLetter'>O</div>
            <div onClick={change2} className='boardLetter'>P</div>
          </div>
          <div className='aToL'>
            <div onClick={change2} className='boardLetter'>A</div>
            <div onClick={change2} className='boardLetter'>S</div>
            <div onClick={change2} className='boardLetter'>D</div>
            <div onClick={change2} className='boardLetter'>F</div>
          	<div onClick={change2} className='boardLetter'>G</div>
            <div onClick={change2} className='boardLetter'>H</div>
            <div onClick={change2} className='boardLetter'>J</div>
            <div onClick={change2} className='boardLetter'>K</div>
            <div onClick={change2} className='boardLetter'>L</div>
          </div>
          <div className='enterToBackspace'>
            <div onClick={enter} className='notL'>ENTER</div>
            <div onClick={change2} className='boardLetter'>Z</div>
            <div onClick={change2} className='boardLetter'>X</div>
            <div onClick={change2} className='boardLetter'>C</div>
            <div onClick={change2} className='boardLetter'>V</div>
            <div onClick={change2} className='boardLetter'>B</div>
            <div onClick={change2} className='boardLetter'>N</div>
            <div onClick={change2} className='boardLetter'>M</div>
            <div onClick={del} className='notL'>DEL</div>
          </div>
        </div>
      </div>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    change1: (e) => dispatch(changeAction(e.target.value)),
    change2: (e) => dispatch(changeAction(e.target.textContent)),
    enter: () => dispatch(enterAction()),
    del: () => dispatch(delAction()),
  }
}

export default connect(null, mapDispatchToProps)(Keyboard) 
