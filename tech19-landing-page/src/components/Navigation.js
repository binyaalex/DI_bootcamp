import {Nav,  Navbar, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';


const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="white" className='nav'>
          <Navbar.Brand href="/">Tech-19</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Nav className="links">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/positions">Open Positions</Nav.Link>
                  <Nav.Link href="contacts">Contact us</Nav.Link>
                  <DropdownButton variant="outline-secondary" title="Our Services" id='services'>
                    <Dropdown.Item href="/sw">Tech19 SW</Dropdown.Item>
                    <Dropdown.Item href="/it">Tech19 IT</Dropdown.Item>
                    <Dropdown.Item href="/mechanics">Tech19 Mechanics</Dropdown.Item>
                  </DropdownButton>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation