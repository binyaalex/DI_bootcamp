import './App.css';
import Try from './components/Try'
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {changeAction, enterAction} from './redux/actions';


const App = (props) => {
  const {change, enter, userWord, result, turn} = props
  
  useEffect(() => {
    console.log(turn)
    let firstTurn
    if (turn === 0) {
      firstTurn = 1
    } else {
      firstTurn = false
    }
    console.log(firstTurn)
    const letters = document.querySelector('.tryes').children[firstTurn || turn-1].children
    for (let i = 0; i < letters.length; i++) {
      letters[i].style.backgroundColor = result[i]
    }
  });

  return (
    <>
      <div>      
        <input onChange={change} type='text' />
        <button onClick={enter}>Enter</button>
      </div>
      <div className='tryes'>
        <Try i={0} />
        <Try i={1} />
        <Try i={2} />
        <Try i={3} />
        <Try i={4} />
        <Try i={5} />
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    change: (e) => dispatch(changeAction(e.target.value)),
    enter: () => dispatch(enterAction()),
  }
}

const mapStateToProps = (state) => {
  return {
    userWord: state.userWord,
    result: state.result,
    turn: state.turn 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 

