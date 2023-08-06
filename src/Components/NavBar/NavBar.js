import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BasketCart from "../../media/icons/basket-cart-icon-27.png"
import KenoTech from "../../media/icons/Logo.png"
import "./NavBar.css"

function NavBar() {
  return (
    <div>
      <div className='navbar-placeholder'></div>
    <Navbar id="NavBar" className="justify-content-space-between" collapseOnSelect expand="lg" bg="primary" data-bs-theme="light">
        <Container>
          
          <Navbar.Brand variant="primary" href="#home" id="brand">
              <img
                alt=""
                src={KenoTech}
                width="160"
                height="60"
              />{' '}
              {/* <h2>Keno<span>Tech</span></h2> */}
              </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav className='gap-4'>
            <Nav.Link  className="m-auto p-2">Home</Nav.Link>
            <NavDropdown className="m-auto p-2" title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Desktop Computers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Notebooks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Consoles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Monitors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Headsets</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                All Categories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className="m-auto p-2">Build your PC</Nav.Link>
            <Nav.Link  className="m-auto p-2">About Us</Nav.Link>
            <Nav.Link  className="m-auto p-2">Contact</Nav.Link>
            {/* <Nav.Link  className="m-auto p-2">Build your Own PC</Nav.Link> */}
            <Nav.Link  className="m-auto p-2"><img
                alt=""
                src={BasketCart}
                width="40"
                height="40"/>
             </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;