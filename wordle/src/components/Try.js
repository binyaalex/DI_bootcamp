import {connect} from 'react-redux';
import {delOwnAction} from '../redux/actions';

const Try = (props) => {
	const {userWord, i, writingDirection, delOwn} = props
	return (
		<>
        <div className='try'>
          <div className='letterBox'>
            {userWord[i][writingDirection[0]]}
          </div>
          <div onClick={delOwn} className='letterBox'>
            {userWord[i][writingDirection[1]]}
          </div>
          <div className='letterBox'>
            {userWord[i][writingDirection[2]]}
          </div>
          <div className='letterBox'>
            {userWord[i][writingDirection[3]]}
          </div>
          <div className='letterBox'>
            {userWord[i][writingDirection[4]]}
          </div>
        </div>
		</>
	)
}

const mapStateToProps = (state) => {
  return {
    userWord: state.userWord,
    writingDirection: state.writingDirection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delOwn: (e) => dispatch(delOwnAction(e.target.textContent)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Try) 

