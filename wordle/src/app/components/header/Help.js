const Help = (props) => {
	const {displayTuggle} = props
	return (
		<>
			<div className='englishHelp'>
				<div className='help'>
					<header className='helpHeader'>
						<h5>HOW TO PLAY</h5>
						<div onClick={() => displayTuggle('.helpPage')} className='x'>X</div>
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
					        <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
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
					        <p>The letter <strong>U</strong> is not in the word in any spot.</p>
						</section>
						<p><strong>A new WORDLE will be available each refresh!</strong></p>
					</main>
				</div>
			</div>

			<div className='hebrewHelp'>
				<div className='help'>
					<header className='helpHeader'>
						<h5 className='hebrewHelpHead'>הוראות</h5>
						<div onClick={() => displayTuggle('.helpPage')} className='x'>X</div>
					</header>
					<main className='hebrewHelpMain'>
						<section className='hebrewSection'>
							<p>.נחש את  <strong>המילה</strong> בשישה נסיונות</p>
							<p>.כל נסיון חייב להיות מילה בת 5 אותיות. לחץ על אנטר  על מנת לבדוק אם זו המילה</p>
							<p>.אחרי כל ניחוש, הצבע של האות יתשנה להראות כמה הניסיון קרוב למילה</p>
						</section>
						<section className='hebrewSection'>
							<p className='examples'>דוגמאות</p>
							<div className='example'>
					          <div className='helpLetterBox'>
					            ן
					          </div>
					          <div className='helpLetterBox'>
					            ו
					          </div>
					          <div className='helpLetterBox'>
					            י
					          </div>
					          <div className='helpLetterBox'>
					            ס
					          </div>
					          <div className='helpLetterBox hebrewFirstLetter gray helpColorLetter'>
					            נ
					          </div>
					        </div>
					        <p>.האות  <strong>נ</strong> לא במילה  בשום מקום</p>
					        <div className='example'>
					          <div className='helpLetterBox'>
					            ן
					          </div>
					          <div className='helpLetterBox'>
					            ו
					          </div>
					          <div className='helpLetterBox'>
					            ק
					          </div>
					          <div className='helpLetterBox yellow helpColorLetter'>
					            י
					          </div>
					          <div className='helpLetterBox hebrewFirstLetter'>
					            ת
					          </div>
					        </div>
					        <p>.האות  <strong>י</strong> במילה  אבל לא במקום הנכון</p>
		    			    <div className='example'>
					          <div className='helpLetterBox'>
					            ה
					          </div>
					          <div className='helpLetterBox'>
					            ב
					          </div>
					          <div className='helpLetterBox green helpColorLetter'>
					            ו
					          </div>
					          <div className='helpLetterBox'>
					            ש
					          </div>
					          <div className='helpLetterBox hebrewFirstLetter'>
					            ת
					          </div>
					        </div>
					        <p>.האות  <strong>ו</strong> במילה ובמקום הנכון</p>
						</section>
						<p><strong>!מילה חדשה זמינה בכל רענון של המשחק</strong></p>
					</main>
				</div>
			</div>
		</>
	)
}
export default Help