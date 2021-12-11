import Books from './components/Books';
import Search from './components/Search';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
	console.log('app')
  return (
    <>
      <Navbar/>
      <Search/>
      <Books/>
    </>
  );
}

export default App;
