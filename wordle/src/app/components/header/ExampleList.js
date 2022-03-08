import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import Example from './Example';

const ExampleList = (props) => {
	const {colors, displayTuggle, screenMode, help, color, language} = props
  	const arr = ['gray', 'yellow', 'green']
  	useEffect(() => {
		const examplesLetters = document.querySelectorAll('.helpLetterBox')
		examplesLetters.forEach((letter, i) =>{
			letter.classList.remove('helpColorLetter')
			letter.style.backgroundColor = ''
			if (language === 'EN') {
				if (i === 3 || i === 6 || i === 10) {
					letter.classList.add('helpColorLetter')
				}
				examplesLetters[3].style.backgroundColor = colors.gray
				examplesLetters[6].style.backgroundColor = colors.yellow
				examplesLetters[10].style.backgroundColor = colors.green
			} else {
				if (i === 4 || i === 8 || i === 12) {
					letter.classList.add('helpColorLetter')
				}
				examplesLetters[4].style.backgroundColor = colors.gray
				examplesLetters[8].style.backgroundColor = colors.yellow
				examplesLetters[12].style.backgroundColor = colors.green
			}
		})
 	});
	return (
		<>
	          {
		        arr.map((el, i) => {
		          return (
		            <Example i={i} key={i} color={el} />
		          )
		        })
		      }
		</>
	)
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    screenMode: state.screenMode,
    help: state.help,
    language: state.language,
  }
}

export default connect(mapStateToProps)(ExampleList) 