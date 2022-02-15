import './App.css';
import Header from './components/Header'
import Tryes from './components/Tryes'
import Keyboard from './components/Keyboard'
import Messages from './components/Messages'
import Result from './components/Result'
import PlayAgain from './components/PlayAgain'
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {changeAction, endTheGameAction} from './redux/actions';
import {finalToRegular} from './redux/reducers';



const App = (props) => {
  const {result, turn, change1, dailyWord, endTheGame, writingDirection} = props
  
  useEffect(() => {
    console.log(dailyWord)
    document.body.addEventListener('keydown', change1) // for real keyboard
    // make squre black after write a letter inside
    const squares = document.querySelectorAll('.letterBox')
    // const squares = document.querySelectorAll('.try')[turn].children
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].backgroundColor !== 'white' && squares[i].backgroundColor !== undefined && turn !== 0) { 
        squares[i].style.border = '0'
      } else if (squares[i].textContent === '' || turn === 0) {
        squares[i].style.border = '2px solid lightgray'
      } else {
      }
    }

    // for not try to color the last try in first load and then stuck
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
      let i = 0;                  
      // do it in a loop by timeout for showing letter by letter
      function myLoop() {         
        setTimeout(function() {   
          letters[writingDirection[i]].style.backgroundColor = result[writingDirection[i]]
          letters[writingDirection[i]].style.color = 'white'
          const squares = document.querySelectorAll('.try')[turn-1].children
          squares[writingDirection[i]].style.border = '0'

          // color the letters of the screen keyboard according the result
          for (let d = 0; d < boardLetters.length; d++) {
            let boardLetter = finalToRegular(boardLetters[d].textContent)
            // prevent writing while showing result
            if (i === 0) {
              boardLetters[d].disabled = true
              document.body.removeEventListener('keydown', change1)
            }
            let letter = finalToRegular(letters[i].textContent)
            if (boardLetter === letter &&
                boardLetters[d].style.backgroundColor !== 'rgb(106, 170, 100)')
            {
              if (result[i] === 'gray' &&
                  boardLetters[d].style.backgroundColor === 'rgb(201, 180, 88)') {
              } else {
                boardLetters[d].style.backgroundColor = result[i]
                boardLetters[d].style.color = 'white'
                const squares = document.querySelectorAll('.try')[turn-1].children
                squares[writingDirection[i]].style.border = '0'
              }
            }
            // stop prevent writing after finshed showing result
            if (i === 4) {
              boardLetters[d].disabled = false  
              document.body.addEventListener('keydown', change1) 
            }
          }
          i++;                    
          if (i < letters.length) {           
            myLoop();                
          }                       
        }, 500)
      }

      myLoop();

    // for initialize the design (background color of letters in the tryes and keyboard)
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

    // when the user win or lose by finish his tryes
    const win = result.every(el => el === '#6AAA64')
    const myGreeting = () => {
      // user win
      if (win && firstLoad) {
        document.querySelector('.messages').style.display = 'block'
        document.querySelector('.well').style.display = 'block'
        document.querySelector('.tryes').children[turn-1].classList.add('winner')
        setTimeout(function() {   
          document.querySelector('.playAgain').style.display = 'block'
        }, 3000)
        endTheGame()

      // user lose
      } else if (turn === 6) {
        document.querySelector('.messages').style.display = 'block'
        document.querySelector('.loser').style.display = 'block'
        document.querySelector('.playAgain').style.display = 'block'
        endTheGame()
      } 
    }
    setTimeout(myGreeting, 2800)
    });

  return (
    <div className='allDad'>
      <div className='all'>
        <Header />
        <Tryes />
        <Keyboard />
        <Messages />
        <Result />
        <PlayAgain />
      </div>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    result: state.result,
    turn: state.turn,
    dailyWord: state.dailyWord,
    writingDirection: state.writingDirection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change1: (e) => dispatch(changeAction(e)),
    endTheGame: () => dispatch(endTheGameAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) 

