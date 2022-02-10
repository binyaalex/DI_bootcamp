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
    console.log(turn)
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].backgroundColor !== 'white' && squares[i].backgroundColor !== undefined && turn !== 0) { 
        squares[i].style.border = '0'
        console.log(1)
      } else if (squares[i].textContent === '' || turn === 0) {
        console.log(squares[i])
        squares[i].style.border = '2px solid lightgray'
      } else {
        console.log(2)
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
      let i = 0;                  //  set your counter to 1
      document.querySelectorAll('.boardLetter')[30].disabled = true
      boardLetters[0].disabled = true
      function myLoop() {         //  create a loop function
        setTimeout(function() {   //  call a 3s setTimeout when the loop is called
          letters[writingDirection[i]].style.backgroundColor = result[writingDirection[i]]
          letters[writingDirection[i]].style.color = 'white'
          const squares = document.querySelectorAll('.try')[turn-1].children
          console.log(squares)
          squares[writingDirection[i]].style.border = '0'

          // color the letters of the screen keyboard according the result
          for (let d = 0; d < boardLetters.length; d++) {
            let boardLetter = finalToRegular(boardLetters[d].textContent)
            if (i === 0) {
              boardLetters[d].disabled = true
              console.log(boardLetters[d])
            }
            console.log(i)
            console.log(boardLetters[d].disabled)
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
                console.log(squares)
                squares[writingDirection[i]].style.border = '0'
              }
            }
            if (boardLetters[d].style.backgroundColor === 'gray') {
              boardLetters[d].disabled = true
            }
            if (i === 4) {
              console.log(boardLetters[d].disabled)
              boardLetters[d].disabled = false  
              console.log(boardLetters[d].disabled)
            }
          }
          i++;                    //  increment the counter
          console.log('in')
          if (i < letters.length) {           //  if the counter < 10, call the loop function
            myLoop();             //  ..  again which will trigger another             
          }                       //  ..  setTimeout()
        }, 500)
      }

      myLoop();
      console.log('out')
      // for (let i = 0; i < letters.length; i++) {
      //   letters[i].style.backgroundColor = result[i]
      //   letters[i].style.color = 'white'

      // // color the letters of the screen keyboard according the result
      //   for (let d = 0; d < boardLetters.length; d++) {
      //     let boardLetter = finalToRegular(boardLetters[d].textContent)
      //     let letter = finalToRegular(letters[i].textContent)
      //     if (boardLetter === letter &&
      //         boardLetters[d].style.backgroundColor !== 'rgb(106, 170, 100)')
      //     {
      //       if (result[i] === 'gray' &&
      //           boardLetters[d].style.backgroundColor === 'rgb(201, 180, 88)') {
      //       } else {
      //         boardLetters[d].style.backgroundColor = result[i]
      //         boardLetters[d].style.color = 'white'
      //       }
      //     }
      //     if (boardLetters[d].style.backgroundColor === 'gray') {
      //       boardLetters[d].disabled = true
      //     } 
      //   }
      // }

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
        document.querySelector('.playAgain').style.display = 'block'
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

