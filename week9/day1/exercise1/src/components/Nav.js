import React from "react";
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
	return (
		<Nav>
			<Nav.Link>
			<Link to='/'>Home</Link>
			</Nav.Link>
			<Nav.Link>
			<Link to='/profile'>Profile</Link>
			</Nav.Link>
			<Nav.Link>
			<Link to='/shop'>Shop</Link>
			</Nav.Link>
		</Nav>
	)
}
export default Navbar