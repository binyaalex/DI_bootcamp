const Help = (props) => {
	return (
		<>
			<header className='helpHeader'>
				<h5>HOW TO PLAY</h5>
				<div onClick={props.displayHelpTuggle} className='x'>X</div>
			</header>
			<main>
				<section className='instructions'>
					<p>Guess the <strong>WORDLE</strong> in 6 tries.</p>
					<p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
					<p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
				</section>
				<section>
					<p className='examples'>Examples</p>
					<div className='try'>
			          <div className='letterBox firstLetter green white'>
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
			        <p>The letter <strong>W</strong> is in the word and in the correct spot</p>
			        <div className='try'>
			          <div className='letterBox firstLetter'>
			            P
			          </div>
			          <div className='letterBox yellow white'>
			            I
			          </div>
			          <div className='letterBox'>
			            L
			          </div>
			          <div className='letterBox'>
			            L
			          </div>
			          <div className='letterBox'>
			            S
			          </div>
			        </div>
			        <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
    			    <div className='try'>
			          <div className='letterBox firstLetter'>
			            V
			          </div>
			          <div className='letterBox'>
			            A
			          </div>
			          <div className='letterBox'>
			            G
			          </div>
			          <div className='letterBox gray white'>
			            U
			          </div>
			          <div className='letterBox'>
			            E
			          </div>
			        </div>
			        <p>The letter <strong>U</strong> is not in the word in any spot</p>
				</section>
				<p><strong>A new WORDLE will be available each refresh!</strong></p>
			</main>
		</>
	)
}
export default Help