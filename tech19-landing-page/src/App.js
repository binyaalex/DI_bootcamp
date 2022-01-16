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
    <div className='all'>
      <Navigation />
      <div className='allWithoutNav'>
        {/*<Main />*/}
        {/*<About />*/}
        {/*<Positions />*/}
        {/*<Contacts />*/}
        {/*<Sw />*/}
        {<IT />}
        {/*<Mechanics />*/}
      </div>
    </div>
  );
}

export default App
