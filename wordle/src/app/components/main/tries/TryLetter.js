import {connect} from 'react-redux';

const TryLetter = (props) => {
	const {userWord, turn, writingDirection, i} = props
	return (
    <div className='letterBox letterBoxWT'>
  {/* taking the letter from the state,
      using writingDirection for hebrew right to left */}
      {userWord[turn][writingDirection[i]]}
    </div>
	)
}

const mapStateToProps = (state) => {
  return {
    userWord: state.userWord,
    writingDirection: state.writingDirection
  }
}

export default connect(mapStateToProps)(TryLetter) 

