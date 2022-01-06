import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {addAction} from './redux/actions';


const App = (props) => {
  const {add} = props
    return (
      <div className='App'>
        <h1 className='title'>Reminder App</h1>
        <div className='inputs'>
          <input type='text' placeholder='I have to...' />
          <button onClick={add}>Add Reminder</button>
        </div>
      </div>
    );  
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addAction())
  }
}

export default connect(null, mapDispatchToProps)(App) 
// export default App