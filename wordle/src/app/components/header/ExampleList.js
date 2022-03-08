import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import Example from './Example';

const ExampleList = (props) => {
	const {colors, displayTuggle, screenMode, help, color, language} = props
  	const arr = ['gray', 'yellow', 'green']
  	useEffect(() => {
		const examplesLetters = document.querySelectorAll('.helpLetterBox')
			if (language === 'EN') {
				examplesLetters[3].style.backgroundColor = colors.gray
				examplesLetters[3].classList.add('helpColorLetter')
				examplesLetters[6].style.backgroundColor = colors.yellow
				examplesLetters[6].classList.add('helpColorLetter')
				examplesLetters[10].style.backgroundColor = colors.green
				examplesLetters[10].classList.add('helpColorLetter')
			}
		// }
 	});
 	console.log(help)
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