import {connect} from 'react-redux';
import ExampleList from './examples/ExampleList';

const Help = (props) => {
	const {displayTuggle, screenMode, help} = props
	return (
		<div style={{backgroundColor: screenMode.BGC}} className='helpPage'>
			<header className='helpHeader'>
				<h5>{help.helpHead}</h5>
				<div onClick={() => displayTuggle('.helpPage')} className='x'>X</div>
			</header>
			<main className= 'hebrewChangeFlex'>
				<section className='instructions hebrewChangeFlex'>
					<p>{help.instructionP1A}<strong>{help.instructionP1Strong}</strong>{help.instructionP1B}</p>
					<p>{help.instructionP2}</p>
					<p>{help.instructionP3}</p>
				</section>
				<section className='examples hebrewChangeFlex'>
					<p className='examplesHead'>{help.examplesHead}</p>
					<ExampleList />
			        <p>{help.greenExplanationA}<strong>{help.greenExplanationStrong}</strong>{help.greenExplanationB}</p>
				</section>
				<p><strong>{help.footer}</strong></p>
			</main>
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    screenMode: state.screenMode,
    help: state.help,
  }
}

export default connect(mapStateToProps)(Help) 