import React from 'react';
import {connect} from 'react-redux';
import Post from './Post'
import {Link} from 'react-router-dom';


class Home extends React.Component {
	render() {
		const {posts} = this.props
		console.log(posts)
		return (
			<>
				<h1>Home</h1>
				{
					posts.map(item => {
						return (
							<div>
							<Link to={'/' + item.id}>
								<h1>{item.title}</h1>
							</Link>
							<p>{item.body}</p>
							</div>
						)
					})
				}
			</>
		)
	}
}

const mapStateToProps = (state) => {
		console.log(state.posts)
	return {
		posts:state.posts
	}
}
export default connect(mapStateToProps)(Home);