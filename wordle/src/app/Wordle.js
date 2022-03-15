import './Wordle.css';
import Header from './components/header/Header'
import Tries from './components/main/tries/Tries'
import Keyboard from './components/main/keyboard/Keyboard'
import Messages from './components/temporary-components/Messages'
import PlayAgain from './components/temporary-components/PlayAgain'
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {changeAction, endTheGameAction} from './redux/actions';
import {finalToRegular} from './redux/reducers';


const Wordle = (props) => {
  const {result, turn, change1, dailyWord, endTheGame, writingDirection, screenMode, colors, hardMode} = props
  useEffect(() => {
    const triesBoxes = document.querySelectorAll('.letterBox')
    const boardLetters = document.querySelectorAll('.boardLetter')
    const messages = document.querySelector('.messages')
    const playAgainBtn = document.querySelector('.playAgain')
    const darkModeInput = document.querySelector('.darkModeInput')
    const highContrastModeInput = document.querySelector('.highContrastModeInput')

    console.log(dailyWord)
    document.body.addEventListener('keydown', change1) // for real keyboard

    // get screenMode
    document.querySelector('.allDad').style.backgroundColor = screenMode.BGC
    // document.querySelector('.definitionsPage').style.backgroundColor = screenMode.BGC
    // document.querySelector('.helpPage').style.backgroundColor = screenMode.BGC
    // document.querySelector('.allDad').style.color = screenMode.color
    // document.querySelector('.mainHeader').style.borderBottom = screenMode.headerBorderBottom

    // make dark mode and high contrast btns disabled during the game
    if (turn > 0) {
      darkModeInput.disabled = true
      highContrastModeInput.disabled = true
    } else {
      darkModeInput.disabled = false
      highContrastModeInput.disabled = false
    }

    // for not try to color the last try in first load and then stuck
    let firstLoad
    if (turn !== 0) {
      firstLoad = true
    } else {
      firstLoad = false
    }
    if (firstLoad) {
      const lastTry = document.querySelector('.tries').children[turn-1].children 
      // color the letters of the last try according the result
      let i = 0;                  
      // do it in a loop by timeout for showing letter by letter
      function myLoop() {         
        setTimeout(function() {   
          lastTry[writingDirection[i]].style.backgroundColor = result[writingDirection[i]]
          lastTry[writingDirection[i]].style.color = 'white'
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
            let letter = finalToRegular(lastTry[writingDirection[i]].textContent).toUpperCase()
            if (boardLetter === letter &&
                boardLetters[d].style.backgroundColor !== colors.green)
            {
              if (result[writingDirection[i]] === colors.gray &&
                  boardLetters[d].style.backgroundColor === colors.yellow) {
              } else {
                boardLetters[d].style.backgroundColor = result[writingDirection[i]]
                boardLetters[d].style.color = 'white'
                lastTry[writingDirection[i]].style.border = '0'
              }
            }
            // stop prevent writing after finshed showing result
            if (i === 4) {
              boardLetters[d].disabled = false  
              document.body.addEventListener('keydown', change1) 
            }
          }
          i++;                    
          if (i < lastTry.length) {           
            myLoop();                
          }                       
        }, 500)
      }

      myLoop();


    // when the user win or lose by finish his tries
    const win = result.every(el => el === colors.green)
    const myGreeting = () => {
      // user win
      if (win && firstLoad) {
        messages.style.display = 'block'
        document.querySelector('.well').style.display = 'block'
        lastTry[0].parentElement.classList.add('winner')
        setTimeout(function() {   
          playAgainBtn.style.display = 'block'
        }, 3000)
        endTheGame()

      // user lose
      } else if (turn === 6) {
        messages.style.display = 'block'
        document.querySelector('.loser').style.display = 'block'
        playAgainBtn.style.display = 'block'
        endTheGame()
      } 
    }
    setTimeout(myGreeting, 2800)

    // for initialize the design (background and border color of letters in the tries and keyboard)
    } else {
      for (let i = 0; i < triesBoxes.length; i++) {
        triesBoxes[i].style.backgroundColor = `${screenMode.BGC}`
        triesBoxes[i].style.borderColor = `${screenMode.letterBorderC}`
        triesBoxes[i].style.color = `${screenMode.color}`
        if (turn === 0) {
          triesBoxes[i].style.border = `2px solid ${screenMode.letterBorderC}`
        }  
      }

      // for taking the letters after change language
      setTimeout(function() { 
        const boardLetters2 = document.querySelectorAll('.boardLetter')
        for (let i = 0; i < boardLetters2.length; i++) {
          boardLetters2[i].style.backgroundColor = `${screenMode.keyboardRegularBG}`
          boardLetters2[i].style.color = `${screenMode.color}`
        }
      }, 1)        
    }

  });

  return (
    <div style={{color: screenMode.color}} className='allDad'>
      <div className='wordleAll'>
        <Header />
        <Tries />
        <Keyboard />
        <Messages />
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
    writingDirection: state.writingDirection,
    screenMode: state.screenMode,
    colors: state.colors,
    hardMode: state.hardMode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change1: (e) => dispatch(changeAction(e)),
    endTheGame: () => dispatch(endTheGameAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wordle) 

