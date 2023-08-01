import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasketCart from "../../media/basket-cart-icon-27.png"
import KenoTech from "../../media/Logo.png"
import "./NavBar.css"

function NavBar() {
  return (
    
    <Navbar id="NavBar" className="justify-content-space-between" collapseOnSelect expand="lg" bg="primary" data-bs-theme="light">
        <Container>
          
          <Navbar.Brand variant="primary" href="#home" id="brand">
              <img
                alt=""
                src={KenoTech}
                width="80"
                height="80"
              />{' '}
              {/* <h2>Keno<span>Tech</span></h2> */}
              </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav >
              <Nav.Link  className="m-auto p-2">Categories</Nav.Link>
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
  );
}

export default NavBar;