import Container from 'react-bootstrap/Container';
import React, {useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import BasketCart from "../../media/icons/basket-cart-icon-27.png"
import KenoTech from "../../media/icons/Logo.png"
import "./NavBar.css"
import SideCartItem from '../SideCartItem/SideCartItem';

function NavBar(props) {
  const [show, setShow] = useState(false);
  

  const removeItem = (index) => {
    const updatedCart = [...props.shoppingCart];
    updatedCart.splice(index, 1);
    props.setShoppingCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of props.shoppingCart) {
      totalPrice += item.price;
    }
    return totalPrice;
  };

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
            <Nav.Link  className="cart-img m-auto p-2"><img
            
                onClick={() => setShow(true)}
                alt=""
                src={BasketCart}
                width="40"
                height="40"/>
                {props.shoppingCart.length>0 && <button onClick={() => setShow(true)} className='cart-item-quantity'>{props.shoppingCart.length}</button>}
             </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    
      
    <div>
      <Modal dialogClassName="sidebar-modal" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title >
            Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='overflow-scroll'>
        {props.shoppingCart.map((item, index) => <SideCartItem removeItem={removeItem} item={item} index={index}/>)}
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
            <h5>Total Price: {calculateTotalPrice()}$</h5>
            <button>
                Go to Checkout
            </button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
}

export default NavBar;