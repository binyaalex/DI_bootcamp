import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1 className='title'>Reminder App</h1>
        <div className='inputs'>
          <input type='text' placeholder='I have to...' />
          <button>Add Reminder</button>
        </div>
      </div>
    );  
  }
  
}

export default App;
