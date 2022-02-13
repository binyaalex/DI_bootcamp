import {connect} from 'react-redux';

const Try = (props) => {
	const {userWord, turn, writingDirection} = props
  console.log(turn)
	return (
		<>
        <div className='try'>
          <div className='letterBox'>
        {/* taking the letter from the state,
            using writingDirection for hebrew right to left */}
            {userWord[turn][writingDirection[0]]}
          </div>
          <div className='letterBox'>
            {userWord[turn][writingDirection[1]]}
          </div>
          <div className='letterBox'>
            {userWord[turn][writingDirection[2]]}
          </div>
          <div className='letterBox'>
            {userWord[turn][writingDirection[3]]}
          </div>
          <div className='letterBox'>
            {userWord[turn][writingDirection[4]]}
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

export default connect(mapStateToProps)(Try) 

