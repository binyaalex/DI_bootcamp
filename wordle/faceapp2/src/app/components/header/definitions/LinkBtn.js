import {connect} from 'react-redux';

const LinkBtn = (props) => {
	const {screenMode, link, title, icon} = props
	return (
		<a className='hebrewChangeFlex' href={link} target="_blank" rel="noreferrer">
			<section className='sectionMode' style={{color: screenMode.color}}>
				<div className='modeTitle hebrewChangeFlex'>
					<h6>{title}</h6>
				</div>
				<i className={icon}></i>
			</section>
		</a>
	)
}

const mapStateToProps = (state) => {
  return {
    screenMode: state.screenMode,
  }
}

export default connect(mapStateToProps)(LinkBtn)