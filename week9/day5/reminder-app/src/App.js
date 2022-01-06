import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {addAction, textAction} from './redux/actions';


const App = (props) => {
  const {add, text, remindersArr} = props
    return (
      <div className='App'>
        <h1 className='title'>Reminder App</h1>
        <div className='inputs'>
          <input id='text' onChange={text} type='text' placeholder='I have to...' />
          <button onClick={add}>Add Reminder</button>
        </div>
        <div className='reminders'>
          {
            remindersArr.map((item, i) => {
              return <div key={i}>{item}</div>
            })
          }
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

const mapStateToProps = (state) => {
  return {
    remindersArr: state.reminders  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
