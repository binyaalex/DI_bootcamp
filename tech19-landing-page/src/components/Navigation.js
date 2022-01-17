import React, { useEffect, useState } from 'react';
import {Nav,  Navbar, NavDropdown, DropdownButton, Dropdown } from 'react-bootstrap';


const Navigation = () => {
  const [dropdownClicked, setdropdownClicked] = useState(false);
  const dropdown = () => {
    setdropdownClicked(true)
  }
  const location = window.location.pathname.slice(1)
  console.log(location)
  useEffect(() => {
        console.log(dropdownClicked)

    if (location === 'about' || location === 'positions' || location === 'contacts') {
      document.querySelector(`.${location}Link`).style.color = 'black'
    } else if (dropdownClicked) {
      const dropdown = document.querySelector('.dropdown-menu').classList
      if (dropdown.length > 1) {
        document.querySelector(`.${location}Link`).style.color = 'black'
      }
    }
  });

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="white" className='nav'>
          <Navbar.Brand href="/" id='brand'>Tech-19</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
              <Nav className="links">
                  <Nav.Link href="/about" className='aboutLink'>About</Nav.Link>
                  <Nav.Link href="/positions" className='positionsLink'>Open Positions</Nav.Link>
                  <Nav.Link href="/contacts" className='contactsLink'>Contact us</Nav.Link>
                  <DropdownButton onClick={dropdown} expanded='true' variant="outline-secondary" title="Our Services" id='services'>
                    <Dropdown.Item href="/sw" className='swLink'>Tech19 SW</Dropdown.Item>
                    <Dropdown.Item href="/it" className='itLink'>Tech19 IT</Dropdown.Item>
                    <Dropdown.Item href="/mechanics" className='mechanicsLink'>Tech19 Mechanics</Dropdown.Item>
                  </DropdownButton>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation