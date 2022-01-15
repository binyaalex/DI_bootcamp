import Help from './Help'

const Header = () => {
	
	const displayHelpTuggle = (e) => {
		const helpDisplay = document.body.querySelector('.help').style.display
		if (helpDisplay === 'block') {			
			document.body.querySelector('.help').style.display = 'none'
		} else {			
			document.body.querySelector('.help').style.display = 'block'
		}
	}

	return (
		<header className='mainHeader'>
			<div onClick={displayHelpTuggle} className='helpBtn'>?</div>
			<div className='help'>
				<Help displayHelpTuggle={displayHelpTuggle} />
			</div>
	    	<h4>WORDLE</h4>
		</header>
	)
}
export default Header