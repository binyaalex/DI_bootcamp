import {Link} from 'react-router-dom';

const Navbar = (props) => {
	return (
		<div className='navbar'>
			<Link to={'/'}>
				<h1 className='h1Nav'>MovieSeriesInfo</h1>
			</Link>
			<div className='icons'>
				<i class="fab fa-imdb fa-5x" id='imdb'></i>
				<i class="fab fa-react fa-5x" id='react'></i>
			</div>
		</div>
	)
}
export default Navbar