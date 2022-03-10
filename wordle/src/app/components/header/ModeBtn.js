const ModeBtn = (props) => {
	const {clickFunction, title, explanation, inputClassName} = props
	return (
		<section className='sectionMode'>
			<div className='modeTitle hebrewChangeFlex'>
				<h6>{title}</h6>
				<div className='btnExplanation'>{explanation}</div>
			</div>
			<label className="switch">
				<input onClick={clickFunction} className={inputClassName} type="checkbox" />
				<span className="slider round"></span>
			</label>
		</section>
	)
}


export default ModeBtn