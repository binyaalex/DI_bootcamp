import './App.css';
import React from 'react';
import {connect} from 'react-redux';
import {addAction, textAction, dltAction} from './redux/actions';


const App = (props) => {
  const {add, text, remindersArr, dlt} = props
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
      </div>
    );  
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addAction()),
    text: (e) => dispatch(textAction(e.target.value)),
    dlt: (e) => dispatch(dltAction(e.target.id)),
  }
}

const mapStateToProps = (state) => {
  return {
    remindersArr: state.reminders  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 
