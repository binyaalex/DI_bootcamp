import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {addAction, textAction, dltAction, clearAction} from './redux/actions';


const App = (props) => {
  const {add, text, remindersArr, dlt, clear} = props
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
              return  <div key={i}>
                        <p>{item}</p>
                        <div onClick={dlt} id={i}>X</div>
                      </div>
            })
          }
        </div>
        <button onClick={clear}>Clear Reminders</button>
      </div>
    );  
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addAction()),
    text: (e) => dispatch(textAction(e.target.value)),
    dlt: (e) => dispatch(dltAction(e.target.id)),
    clear: () => dispatch(clearAction()),
  }
}

const mapStateToProps = (state) => {
  return {
    remindersArr: state.reminders  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
