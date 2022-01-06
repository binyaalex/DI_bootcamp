import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {addAction, textAction} from './redux/actions';


const App = (props) => {
  const {add, text} = props
    return (
      <div className='App'>
        <h1 className='title'>Reminder App</h1>
        <div className='inputs'>
          <input onChange={text} type='text' placeholder='I have to...' />
          <button onClick={add}>Add Reminder</button>
        </div>
      </div>
    );  
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addAction()),
    text: (e) => dispatch(textAction(e.target.value))
  }
}

export default connect(null, mapDispatchToProps)(App) 
// export default App