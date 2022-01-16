import {Nav,  Navbar, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';


const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="white" className='nav'>
          <Navbar.Brand href="#home">Tech-19</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Nav className="links">
                  <Nav.Link href="#features">About</Nav.Link>
                  <Nav.Link href="#pricing">Open Positions</Nav.Link>
                  <Nav.Link href="#deets">Contact us</Nav.Link>
                  <DropdownButton variant="outline-secondary" title="Our Services" id='services'>
                    <Dropdown.Item href="#">Tech19 SW</Dropdown.Item>
                    <Dropdown.Item href="#">Tech19 IT</Dropdown.Item>
                    <Dropdown.Item href="#">Tech19 Mechanics</Dropdown.Item>
                  </DropdownButton>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation