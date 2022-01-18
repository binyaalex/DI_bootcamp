import {connect} from 'react-redux';
import {delOwnAction} from '../redux/actions';

const Try = (props) => {
	const {userWord, i, direction, delOwn} = props
	return (
		<>
        <div className='try'>
          <div className='letterBox'>
            {userWord[i][direction[0]]}
          </div>
          <div onClick={delOwn} className='letterBox'>
            {userWord[i][direction[1]]}
          </div>
          <div className='letterBox'>
            {userWord[i][direction[2]]}
          </div>
          <div className='letterBox'>
            {userWord[i][direction[3]]}
          </div>
          <div className='letterBox'>
            {userWord[i][direction[4]]}
          </div>
        </div>
		</>
	)
}

const mapStateToProps = (state) => {
  return {
    userWord: state.userWord,
    direction: state.direction
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delOwn: (e) => dispatch(delOwnAction(e.target.textContent)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Try) 

