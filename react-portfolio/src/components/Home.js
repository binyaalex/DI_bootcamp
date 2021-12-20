const Home = () => {
	return (
		<div className='home'>
			<div className='about'>
				<h2 className='homeHeader'>Im Benjamin Alexander, A Full Stack Web Devoleper</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
				<button className='projectsBtn'>My Projects</button>
			</div>
			<div className='imgDiv'>
				<img className='profileImg' src='./profile-photo.jpg' />
			</div>
		</div>
	)
}
export default Home