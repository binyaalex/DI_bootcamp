import {connect} from 'react-redux';

const Try = (props) => {
	const {userWord, i} = props
	console.log(i)
	console.log(userWord)
  const blackBox = () => {
    console.log('blackBox')
  }
	return (
		<>
        <div className='try'>
          <div className='letterBox' onInput={blackBox}>
            {userWord[i][0]}
          </div>
          <div className='letterBox'>
            {userWord[i][1]}
          </div>
          <div className='letterBox'>
            {userWord[i][2]}
          </div>
          <div className='letterBox'>
            {userWord[i][3]}
          </div>
          <div className='letterBox'>
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

