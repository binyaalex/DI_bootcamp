const Help = (props) => {
	return (
		<div className='help'>
			<header className='helpHeader'>
				<h5>HOW TO PLAY</h5>
				<div onClick={props.displayHelpTuggle} className='x'>X</div>
			</header>
			<main>
				<section className='instructions'>
					<p>Guess the <strong>WORDLE</strong> in six tries.</p>
					<p>Each guess must be a valid 5 letter word. Hit the enter button to submit.</p>
					<p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
				</section>
				<section>
					<p className='examples'>Examples</p>
					<div className='example'>
			          <div className='helpLetterBox firstLetter green helpColorLetter'>
			            W
			          </div>
			          <div className='helpLetterBox'>
			            E
			          </div>
			          <div className='helpLetterBox'>
			            A
			          </div>
			          <div className='helpLetterBox'>
			            R
			          </div>
			          <div className='helpLetterBox'>
			            Y
			          </div>
			        </div>
			        <p>The letter <strong>W</strong> is in the word and in the correct spot</p>
			        <div className='example'>
			          <div className='helpLetterBox firstLetter'>
			            P
			          </div>
			          <div className='helpLetterBox yellow helpColorLetter'>
			            I
			          </div>
			          <div className='helpLetterBox'>
			            L
			          </div>
			          <div className='helpLetterBox'>
			            L
			          </div>
			          <div className='helpLetterBox'>
			            S
			          </div>
			        </div>
			        <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
    			    <div className='example'>
			          <div className='helpLetterBox firstLetter'>
			            V
			          </div>
			          <div className='helpLetterBox'>
			            A
			          </div>
			          <div className='helpLetterBox'>
			            G
			          </div>
			          <div className='helpLetterBox gray helpColorLetter'>
			            U
			          </div>
			          <div className='helpLetterBox'>
			            E
			          </div>
			        </div>
			        <p>The letter <strong>U</strong> is not in the word in any spot</p>
				</section>
				<p><strong>A new WORDLE will be available each refresh!</strong></p>
			</main>
		</div>
	)
}
export default Help