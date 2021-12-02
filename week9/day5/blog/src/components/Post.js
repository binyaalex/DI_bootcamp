import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deletePost} from '../redux/actions';

class Post extends React.Component {
	handleClick = (id) => {
		console.log(1)
		this.props.deleteClick(this.props.post.id)
		this.props.history.push('/')
	}
	render() {
		console.log(this.props)
		return (
			<>
				<h1>{this.props.post.title}</h1>
				<p>{this.props.post.body}</p>
				<button onClick={this.handleClick}>delete post</button>
			</>
		)
	}
}
const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.post_id
	console.log(ownProps)
	return {
		post:state.posts.find(post => post.id === id)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteClick: (id) => dispatch(deletePost(id))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Post);

