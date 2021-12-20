import Navbar from './components/Navbar'
import Home from './components/Home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="all">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
