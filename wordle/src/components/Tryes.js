import {connect} from 'react-redux';
import {delOwnAction} from '../redux/actions';
import Try from './Try'

const Tryes = (props) => {
	const {userWord, i, direction, delOwn} = props
  const arr = [0, 1, 2, 3, 4, 5]
	return (
		<div className='tryes'>
      {
        arr.map((el, i) => {
          return (
            <Try i={i} key={i} />
          )
        })
      }
		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tryes) 

