import './App.css';
import Header from './components/Header'
import Try from './components/Try'
import Keyboard from './components/Keyboard'
import Messages from './components/Messages'
import Noword from './components/Noword'
import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import {changeAction} from './redux/actions';
import {finalToRegular} from './redux/reducers';



const App = (props) => {
  const {result, turn, change2, change1} = props
  
  useEffect(() => {
    document.body.addEventListener('keydown', change1) // for real keyboard

    // make squre black after write a letter inside
    const squares = document.querySelectorAll('.letterBox')
    console.log('hi')
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].textContent !== '') {
        squares[i].style.border = '2px solid black'
        console.log(1)
      }
    }
    console.log(turn)

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
          console.log(boardLetter)
          console.log('board', boardLetters[d].style.backgroundColor)
          console.log('user', letters[i].textContent)
          if (boardLetter === letters[i].textContent &&
              boardLetters[d].style.backgroundColor !== 'rgb(106, 170, 100)')
          {
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
      if (win && firstLoad) {
        document.querySelector('.messages').style.display = 'block'
        document.querySelector('.well').style.display = 'block'
      } else if (turn === 6) {
        document.querySelector('.messages').style.display = 'block'
        document.querySelector('.loser').style.display = 'block'
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
      <Messages />
      <Noword />
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

