import {connect} from 'react-redux';

const Try = (props) => {
	const {userWord, i, writingDirection} = props
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

export default connect(mapStateToProps)(Try) 

