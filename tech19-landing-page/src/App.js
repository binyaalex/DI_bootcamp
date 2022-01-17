import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation'
import Main from './components/Main'
import About from './components/About'
import Positions from './components/Positions'
import Contacts from './components/Contacts'
import Sw from './components/Sw'
import IT from './components/IT'
import Mechanics from './components/Mechanics'
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <BrowserRouter>
    <div className='all'>
        <Navigation />
        <div className='allWithoutNav'>
          <Routes>
            <Route path='/' element=<Main /> />
            <Route path='/about' element=<About /> />
            <Route path='/positions' element=<Positions /> />
            <Route path='/contacts' element=<Contacts /> />
            <Route path='/sw' element=<Sw /> />
            <Route path='/it' element=<IT /> />
            <Route path='/mechanics' element=<Mechanics /> />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
