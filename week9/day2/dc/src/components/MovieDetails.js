import React from 'react';
import {connect} from 'react-redux';

class MovieDetails extends React.Component {
  render(){
    const {movie, selectedMovie} = this.props;
    if(selectedMovie+1) {
      return(
        <div>
          <h2>Movie Details</h2>
            <p><strong>Title:</strong> {movie[selectedMovie].title}</p>
            <p><strong>Release Date:</strong> {movie[selectedMovie].releaseDate}</p>
            <p><strong>Rating:</strong> {movie[selectedMovie].rating}</p>
        </div>
      )
    } else {
      return (
        <>
          <h2>Movie Details</h2>
          <p>Select Movie</p>
        </>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.selectedMovieReducer.movies,
    selectedMovie: state.selectedMovieReducer.selectedMovie
  }
}

export default connect(mapStateToProps, null)(MovieDetails)