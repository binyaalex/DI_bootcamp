import {connect} from 'react-redux';

const Try = (props) => {
	const {userWord, i} = props
	console.log(i)
	console.log(userWord)
	return (
		<>
        <div className='try'>
          <div>
            {userWord[i][0]}
          </div>
          <div>
            {userWord[i][1]}
          </div>
          <div>
            {userWord[i][2]}
          </div>
          <div>
            {userWord[i][3]}
          </div>
          <div>
            {userWord[i][4]}
          </div>
        </div>
		</>
	)
}

const mapStateToProps = (state) => {
  return {
    userWord: state.userWord,
  }
}

export default connect(mapStateToProps)(Try) 

