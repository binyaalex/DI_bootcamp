import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='home'>
			<div className='about'>
				<h2 className='homeHeader'>Benjamin Alexander, A Full Stack Web Devoleper</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
				<Link to="/projects" className='projectsBtn'>My Projects</Link>
			</div>
			<div className='imgDiv'>
				<img className='profileImg' src='profile-photo.jpg' />
			</div>
		</div>
	)
}
export default Home