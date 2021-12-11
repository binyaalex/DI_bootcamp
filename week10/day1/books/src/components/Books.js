import {connect} from 'react-redux';
import BookCard from './BookCard';
import Row from 'react-bootstrap/Row';
import {sortAction} from '../redux/actions';


const Books = (props) => {
	const {booksArr, sortChange} = props
	console.log(booksArr)
	if (!booksArr) {
		return null
	}
	return (
		<div className='books'>
			<Row md="auto" xs="auto">
				{
					booksArr.map(item => {
						return <BookCard book={item} key={item.id}/>
					})
				}
			</Row>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		booksArr: state.data	
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		sortChange: () => dispatch(sortAction()),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
