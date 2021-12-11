import {connect} from 'react-redux';
import {searchAction, inputAction, sortAction} from '../redux/actions';

const Search = (props) => {
	const {handleClick, inputChange, sortChange} = props
	return (
		<div className="searchDiv">
			<input placeholder="Search Books" onChange={inputChange} type='text'/>
			<select onChange={sortChange}>
				<option value="unsort">Sort</option>
   				<option value="newest">Newest</option>
    			<option value="oldest">Oldest</option>
			</select>
			<button onClick={handleClick}>Search</button>
		</div>
	)
}
const mapDispatchToProps = (dispatch) => {
	return {
		inputChange: (e) => dispatch(inputAction(e.target.value)),
		sortChange: (e) => dispatch(sortAction(e.target.value)),
		handleClick: () => dispatch(searchAction())
	}
}
export default connect(null, mapDispatchToProps)(Search) 