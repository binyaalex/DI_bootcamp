import './App.css';
import Header from './components/Header'
import Tryes from './components/Tryes'
import Keyboard from './components/Keyboard'
import Messages from './components/Messages'
import Result from './components/Result'
import PlayAgain from './components/PlayAgain'
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {changeAction} from './redux/actions';
import {finalToRegular} from './redux/reducers';



const App = (props) => {
  const {result, turn, change1, dailyWord} = props
  
  useEffect(() => {
    console.log(dailyWord)
    document.body.addEventListener('keydown', change1) // for real keyboard

    // for not do it first load and then stack
    let firstLoad
    if (turn !== 0) {
      firstLoad = true
    } else {
      firstLoad = false
    }
    if (firstLoad) {
      // color the letters of the last try according the result
      const letters = document.querySelector('.tryes').children[turn-1].children
      const boardLetters = document.querySelectorAll('.boardLetter')
      for (let i = 0; i < letters.length; i++) {
        letters[i].style.backgroundColor = result[i]
        letters[i].style.color = 'white'
      // color the letters of the screen keyboard according the result
        for (let d = 0; d < boardLetters.length; d++) {
          let boardLetter = finalToRegular(boardLetters[d].textContent)
          let letter = finalToRegular(letters[i].textContent)
          if (boardLetter === letter &&
              boardLetters[d].style.backgroundColor !== 'rgb(106, 170, 100)')
          {
            if (result[i] === 'gray' &&
                boardLetters[d].style.backgroundColor === 'rgb(201, 180, 88)') {
            } else {
              boardLetters[d].style.backgroundColor = result[i]
              boardLetters[d].style.color = 'white'
            }
          }
          if (boardLetters[d].style.backgroundColor === 'gray') {
            boardLetters[d].disabled = true
          } 
        }
      }
    } else {
      const letters = document.querySelectorAll('.letterBox')
      const boardLetters = document.querySelectorAll('.boardLetter')
      for (let i = 0; i < letters.length; i++) {
        letters[i].style.backgroundColor = 'white'
        letters[i].style.borderColor = 'lightgray'
        letters[i].style.color = 'black'      }
      for (let i = 0; i < boardLetters.length; i++) {
        boardLetters[i].style.backgroundColor = 'lightgray'
        boardLetters[i].style.color = 'black'
      }
    }
    const win = result.every(el => el === '#6AAA64')
    const myGreeting = () => {
      if (win && firstLoad) {
        document.querySelector('.messages').style.display = 'block'
        document.querySelector('.well').style.display = 'block'
        document.querySelector('.playAgain').style.display = 'block'
      } else if (turn === 6) {
        document.querySelector('.messages').style.display = 'block'
        document.querySelector('.loser').style.display = 'block'
        document.querySelector('.playAgain').style.display = 'block'
      } 
    }
    setTimeout(myGreeting, 300)
    });

  return (
    <div className='allDad'>
      <div className='all'>
        <Header />
        <Tryes />
        <Keyboard />
      </div>
      <Messages />
      <Result />
      <PlayAgain />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 

