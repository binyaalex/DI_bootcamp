import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Movie from './components/Movie'
import Footer from './components/Footer'
import {BrowserRouter,Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="inner">
	      <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
