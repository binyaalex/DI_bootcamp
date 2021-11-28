import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
  	<div className="App">
        <MovieList/>
        <MovieDetails/>
	</div>  
  );
}

export default App;
