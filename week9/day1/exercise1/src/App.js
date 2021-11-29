import React from 'react';
import {Route, Routes, NavLink } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Shop from './components/Shop';
import ErrorBoundary from './components/ErrorBoundary';
import "bootstrap/dist/css/bootstrap.min.css";
// import Info from './components/Info'
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

{
  // class App extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       title: '',
  //       author: '',
  //       genre: '',
  //       year: ''
  //     }
  //   }

  //   render() {
  //     const submit = () => {
  //       let form = {
  //         title: document.querySelectorAll('input')[0].value,
  //         author: document.querySelectorAll('input')[1].value,
  //         genre: document.querySelectorAll('input')[2].value,
  //         year: document.querySelectorAll('input')[3].value
  //       }
  //       this.setState(
  //         form
  //       )
  //       document.querySelector('p').textContent = 'data sent'
  //       console.log(form)
  //     }
  //     return (
  //       <>
  //         <h1>new book</h1>
  //         <p></p>
  //         title<input type='text'/><br/>
  //         author<input type='text'/><br/>
  //         genre<input type='text'/><br/>
  //         year published<input type='text'/><br/>
  //         <button onClick={submit}>Submit</button>
  //       </>
  //     );  
  //   }
    
  // }

  // class App extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       first: '',
  //       last: '',
  //       phone: '',
  //       email: '',
  //       page: 'home'
  //     }
  //   }
    
  //   reset = () => {
  //     this.setState({
  //       first: '',
  //       last: '',
  //       phone: '',
  //       email: '',
  //       page:'home'
  //     })
  //   }
  //   render() {
  //     const {form, page} = this.state

  //     const submit = () => {
  //     const form = {
  //         first: document.querySelectorAll('input')[0].value,
  //         last: document.querySelectorAll('input')[1].value,
  //         phone: document.querySelectorAll('input')[2].value,
  //         email: document.querySelectorAll('input')[3].value,
  //         page: 'info'
  //       }
  //       this.setState(
  //         form
  //       )
  //       console.log(form)
  //       console.log(this.state)
  //     } 
  //     switch (page) {
  //       case 'home':
  //         return (
  //           <>
  //             <h1>welcome</h1>
  //             <p>please provide your information below</p>
  //             <input type='text' placeholder='first name'/><br/>
  //             <input type='text' placeholder='last name'/><br/>
  //             <input type='number' placeholder='phone number'/><br/>
  //             <input type='text' placeholder='email address'/><br/>
  //             <button onClick={submit}>Submit</button>
  //           </>
  //         ); 
  //       case 'info':
  //       console.log({form})
  //         return (
  //           <>
  //             <Info form={this.state} reset={this.reset}/>
  //           </>      
  //         )
  //     }
  //   }

    
  // }

  // export default App;
}

function App() {
  return (
  <>
    <Nav/>
      <Routes>
        <Route path='/' element={
          <ErrorBoundary>
          <Home/>
          </ErrorBoundary>
        }/>
        <Route path='/profile' element={
          <ErrorBoundary>
          <Profile/>
          </ErrorBoundary>
        }/>
        <Route path='/shop' element={
          <ErrorBoundary>
          <Shop/>
          </ErrorBoundary>
        }/>
      </Routes>
  </>
  )
}
export default App;
