import { render } from "react-dom";
import {
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Projects from './Projects'
import Contacts from './Contacts'
// import logo from './logo.svg';
import './../App.css';

function All() {
  return (
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
  );
}

export default All;
