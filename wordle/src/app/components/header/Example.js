import {connect} from 'react-redux';
import React, { useEffect } from 'react';
import ExampleLetter from './ExampleLetter';

const Example = (props) => {
	const {colors, displayTuggle, screenMode, help, color} = props
  	const arr = [0, 1, 2, 3, 4]
  	useEffect(() => {
		
 	});
	return (
		<>
		    <div className='example'>
	          {
		        arr.map((el, d) => {
		          return (
		            <ExampleLetter d={d} key={d} color={color} className={`helpLetterBox letter${d} ${color}${d}`}/>
		          )
		        })
		      }
	        </div>
	        <p>{help.explanationA}<strong>{help[color].strongLetter}</strong>{help[color].explanationB}</p>
		</>
	)
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    screenMode: state.screenMode,
    help: state.help,
  }
}

export default connect(mapStateToProps)(Example) 