import {connect} from 'react-redux';

const Help = (props) => {
	const {colors, displayTuggle, screenMode, help} = props
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
    			    <div className='example'>
			          <div style={{backgroundColor: colors.gray}} className='helpLetterBox firstLetter helpColorLetter'>
			            {help.grayExample1}
			          </div>
			          <div className='helpLetterBox'>
			            {help.grayExample2}
			          </div>
			          <div className='helpLetterBox'>
			            {help.grayExample3}
			          </div>
			          <div className='helpLetterBox'>
			            {help.grayExample4}
			          </div>
			          <div className='helpLetterBox lastLetter'>
			            {help.grayExample5}
			          </div>
			        </div>
			        <p>{help.grayExplanationA}<strong>{help.grayExplanationStrong}</strong>{help.grayExplanationB}</p>
			        <div className='example'>
			          <div className='helpLetterBox firstLetter'>
			            {help.yellowExample1}
			          </div>
			          <div style={{backgroundColor: colors.yellow}} className='helpLetterBox helpColorLetter'>
			            {help.yellowExample2}
			          </div>
			          <div className='helpLetterBox'>
			            {help.yellowExample3}
			          </div>
			          <div className='helpLetterBox'>
			            {help.yellowExample4}
			          </div>
			          <div className='helpLetterBox lastLetter'>
			            {help.yellowExample5}
			          </div>
			        </div>
			        <p>{help.yellowExplanationA}<strong>{help.yellowExplanationStrong}</strong>{help.yellowExplanationB}</p>
					<div className='example'>
			          <div className='helpLetterBox firstLetter'>
			            {help.greenExample1}
			          </div>
			          <div className='helpLetterBox'>
			            {help.greenExample2}
			          </div>
			          <div style={{backgroundColor: colors.green}} className='helpLetterBox helpColorLetter'>
			            {help.greenExample3}
			          </div>
			          <div className='helpLetterBox'>
			            {help.greenExample4}
			          </div>
			          <div className='helpLetterBox lastLetter'>
			            {help.greenExample5}
			          </div>
			        </div>
			        <p>{help.greenExplanationA}<strong>{help.greenExplanationStrong}</strong>{help.greenExplanationB}</p>
				</section>
				<p><strong>{help.footer}</strong></p>
			</main>

			{/*<div className='hebrewHelpPage'>
				<div className='help'>
					<header className='helpHeader'>
						<h5 className='hebrewHelpHead'>הוראות</h5>
						<div onClick={() => displayTuggle('HelpPage')} className='hebrewX x'>X</div>
					</header>
					<main className='hebrewHelpMain'>
						<section className='hebrewSection'>
							<p>.נחש את  <strong>המילה</strong> בשישה נסיונות</p>
							<p>.כל נסיון חייב להיות מילה בת 5 אותיות. לחץ על אנטר  על מנת לבדוק אם זו המילה</p>
							<p>.אחרי כל ניסיון, הצבע של האות יתשנה להראות כמה הניסיון קרוב למילה</p>
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
					          <div style={{backgroundColor: colors.gray}} className='helpLetterBox hebrewFirstLetter helpColorLetter'>
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
					          <div style={{backgroundColor: colors.yellow}} className='helpLetterBox helpColorLetter'>
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
					          <div style={{backgroundColor: colors.green}} className='helpLetterBox helpColorLetter'>
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
			</div>*/}
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
    screenMode: state.screenMode,
    help: state.help,
  }
}

export default connect(mapStateToProps)(Help) 