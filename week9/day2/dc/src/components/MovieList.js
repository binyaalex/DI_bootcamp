import React from 'react';
import {connect} from 'react-redux';

import {detailsClicked} from '../actions/index'

class MovieList extends React.Component {
	render() {
		return (
			<>
				<h1>Redux Movies</h1>
				<div className="container">
					<div className="list-container">
						<h2>Movie List</h2>
						<ul>
							{
								this.props.movies.map((movie, i) => {
									return <div key={i}>
									 		<span>{movie.title}</span>
									 		<button onClick={() => this.props.getDetails(i)}>details</button>
										   </div>	
								})				
							}
						</ul>
					</div>
				</div>
			</>
		)
	}
}

 const mapStateToProps = (state) => {
 	return {
 		movies:state.movieReducer.movies
 	}
 }
 const mapDispatchToProps = (dispatch) => {
   return {
     getDetails: (e) => dispatch(detailsClicked(e)),
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
