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
import Wordle from './wordle/Wordle'
import All from './components/All'
import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projects/wordle' element={<Wordle />} />
        <Route path='/*' element={<All />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
