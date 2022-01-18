import {connect} from 'react-redux';

const Try = (props) => {
	const {userWord, i, direction} = props
	return (
		<>
        <div className='try'>
          <div className='letterBox'>
            {userWord[i][direction[0]]}
          </div>
          <div className='letterBox'>
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

export default connect(mapStateToProps)(Try) 

