import './App.css';
import Header from './components/Header'
import Try from './components/Try'
import Keyboard from './components/Keyboard'
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {changeAction} from './redux/actions';



const App = (props) => {
  const {result, turn, dailyWord, change2, change1} = props
  
  useEffect(() => {
    document.body.addEventListener('keydown', change1)
    const squares = document.querySelectorAll('.letterBox')
    console.log('hi')
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].textContent !== '') {
        squares[i].style.border = '2px solid black'
        console.log(1)
      }
    }
    console.log(turn)
    let firstTurn
    if (turn !== 0) {
      firstTurn = 1
    } else {
      firstTurn = false
    }
    console.log(firstTurn)
    if (firstTurn) {
      const letters = document.querySelector('.tryes').children[turn-1].children
      const boardLetters = document.querySelectorAll('.boardLetter')
      for (let i = 0; i < letters.length; i++) {
        letters[i].style.backgroundColor = result[i]
        letters[i].style.color = 'white'
        for (let d = 0; d < boardLetters.length; d++) {
          console.log('board', boardLetters[d].style.backgroundColor)
          console.log('user', letters[i].textContent)
          if (boardLetters[d].textContent === letters[i].textContent &&
              boardLetters[d].style.backgroundColor !== 'rgb(106, 170, 100)')
          {
            console.log(1)
            boardLetters[d].style.backgroundColor = result[i]
            boardLetters[d].style.color = 'white'
          } 
        }
      }
    }
    console.log(result)
    const win = result.every(el => el === '#6AAA64')
    console.log(win)
    const myGreeting = () => {
      if (win && firstTurn) {
        alert('Well done you found the word')
      } else if (turn === 6) {
        alert(`You finished your tryes, the word is ${dailyWord} maybe next time`)
      } 
    }
    setTimeout(myGreeting, 300)
    });

  return (
    <div className='allDad'>
      <div className='all'>
        <Header />
        <div className='tryes'>
          <Try i={0} />
          <Try i={1} />
          <Try i={2} />
          <Try i={3} />
          <Try i={4} />
          <Try i={5} />
        </div>
        <Keyboard />
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    result: state.result,
    turn: state.turn,
    dailyWord: state.dailyWord
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change1: (e) => dispatch(changeAction(e)),
    change2: (e) => dispatch(changeAction(e.target.textContent)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 

