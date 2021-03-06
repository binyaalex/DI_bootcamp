import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='home'>
			<div className='about'>
				<h2 className='homeHeader'>Benjamin Alexander, A Full Stack Web Devoleper</h2>
				<p>Knowledge with Javascript, React, Node.js, Redux, Html, Css, Bootstrap and Github</p>
				<Link to="/projects" className='projectsBtn'>My Projects</Link>
			</div>
			<div className='imgDiv'>
				<img className='profileImg' src='profile-photo.jpg' alt='my-photo' />
			</div>
		</div>
	)
}
export default Home