import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <input type='text' placeholder='I have to...' />
        <button>Add Reminder</button>
      </div>
    );  
  }
  
}

export default App;
