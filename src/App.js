import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="all">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
            <Contacts />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
