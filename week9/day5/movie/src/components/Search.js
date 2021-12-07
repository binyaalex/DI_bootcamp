import {connect} from 'react-redux';
import {clickAction, changeAction} from '../redux/actions'
const Search = (props) => {
	const {handleClick, handleChange, input} = props
	return (
		<div className='searchDiv'>
			<h2><i class="fa fa-search"></i> Search for a movie ,TV series ..</h2>
			<input type='text' onChange={handleChange} className='searchInput'/>
			<button className='searchBtn' onClick={() => handleClick(input)}>search</button>
		</div>
	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleClick: (input) => dispatch(clickAction(input)),
		handleChange: (e) => dispatch(changeAction(e.target.value))	
	}
}
const mapStateToProps = (state) => {
	return {
		input:state.text
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Search) 