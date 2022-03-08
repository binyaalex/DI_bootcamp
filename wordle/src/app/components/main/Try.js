import {connect} from 'react-redux';
import TryLetter from './TryLetter'

const Try = (props) => {
	const {userWord, turn, writingDirection} = props
  const arr = [0, 1, 2, 3, 4]

	return (
		<>
        <div className={`try try${turn}`}>
                {
                  arr.map((el, i) => {
                    return (
                      <TryLetter turn={turn} i={i} key={i} />
                    )
                  })
                }
          {/*<div className='letterBox letterBoxWT'>
            {userWord[turn][writingDirection[0]]}
          </div>
          <div className='letterBox letterBoxWT'>
            {userWord[turn][writingDirection[1]]}
          </div>
          <div className='letterBox letterBoxWT'>
            {userWord[turn][writingDirection[2]]}
          </div>
          <div className='letterBox letterBoxWT'>
            {userWord[turn][writingDirection[3]]}
          </div>
          <div className='letterBox letterBoxWT'>
            {userWord[turn][writingDirection[4]]}
          </div>*/}
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

