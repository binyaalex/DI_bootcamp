import {connect} from 'react-redux';
import ExampleLetter from './ExampleLetter';

const Example = (props) => {
	const {help, color} = props
  	const arr = [0, 1, 2, 3, 4]
  	
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
    help: state.help,
  }
}

export default connect(mapStateToProps)(Example) 