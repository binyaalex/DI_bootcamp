const Help = (props) => {
	return (
		<>
			<header>
				<h6>HOW TO PLAY</h6>
				<div onClick={props.displayHelpTuggle}>X</div>
			</header>
			<main>
				<section className='instructions'>
					<p>Guess the <strong>WORDLE</strong> in 6 tries.</p>
					<p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
					<p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
				</section>
				<section>
					<div className='examples'>Examples</div>
					<div className='try'>
			          <div className='letterBox green white'>
			            W
			          </div>
			          <div className='letterBox'>
			            E
			          </div>
			          <div className='letterBox'>
			            A
			          </div>
			          <div className='letterBox'>
			            R
			          </div>
			          <div className='letterBox'>
			            Y
			          </div>
			        </div>
				</section>
			</main>
		</>
	)
}
export default Help