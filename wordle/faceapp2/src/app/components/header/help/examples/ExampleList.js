import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import Example from './Example';

const ExampleList = (props) => {
	const {colors, help, language} = props
  	useEffect(() => {
		const examplesLetters = document.querySelectorAll('.helpLetterBox')
		examplesLetters.forEach((letter, i) =>{
			letter.classList.remove('helpColorLetter')
			letter.style.backgroundColor = ''
			if (language === 'EN') {
				if (i === 0 || i === 6 || i === 13) {
					letter.classList.add('helpColorLetter')
				}
				examplesLetters[0].style.backgroundColor = colors.green
				examplesLetters[6].style.backgroundColor = colors.yellow
				examplesLetters[13].style.backgroundColor = colors.gray
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
		        help.examplesOrder.map((el, i) => {
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
    help: state.help,
    language: state.language,
  }
}

export default connect(mapStateToProps)(ExampleList) 