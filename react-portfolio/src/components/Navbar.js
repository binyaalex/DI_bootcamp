import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
	return (
		<>
			<Nav activeKey="/home">
			  <Nav.Item>
			    <Nav.Link>Home</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link eventKey="link-1">Projects</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link eventKey="link-2">Contact</Nav.Link>
			  </Nav.Item>
			</Nav>
		</>
	)
}
export default Navbar