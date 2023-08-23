import React, { useState } from 'react'
import { useShoppingCart } from '../Components/ShoppingCartContext';
import SideCartItem from '../Components/SideCartItem/SideCartItem';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Modal from "react-bootstrap/Modal"
import { Link } from 'react-router-dom';
import "./CheckOut.css"


function simulatePayment() {
  const minProcessingTime = 2000; // 2 seconds
  const maxProcessingTime = 7000; // 7 seconds
  const randomProcessingTime = Math.floor(Math.random() * (maxProcessingTime - minProcessingTime + 1)) + minProcessingTime;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(); // Simulate payment completion
    }, randomProcessingTime);
  });
}

function CheckOut() {
  const { shoppingCart, setShoppingCart } = useShoppingCart();
  const [validated, setValidated] = useState(false);
  const [validated2, setValidated2] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false);

  const handleInputChange = (e) => {
    const form = e.currentTarget.form;
    if (form.checkValidity()) {
      setShowPaymentOptions(true);
    } else {
      setShowPaymentOptions(false);
    }
    setValidated(true);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    const form = e.currentTarget.form;
    if (form.checkValidity()) {
      setShowSpinner(true); // Show loading spinner
      await simulatePayment(); // Simulate payment processing time
      setShowSpinner(false); // Hide loading spinner

      setShowPayment(true); // Show payment success message
    } else {
      setValidated2(true);
    }
  };

  

  const removeItem = (index) => {
    const updatedCart = [...shoppingCart];
    updatedCart.splice(index, 1);
    setShoppingCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of shoppingCart) {
      totalPrice += item.price;
    }
    return totalPrice;
  };
  return (
    <div className='page-container container'>
      <h1 className='checkout-title'>Check Out</h1>
      {shoppingCart.length>0 ?
      <div className='row g-4'>
      <div className='col-12 col-lg-6 shopping-cart'>
        <div className='items-container h-50 overflow-scroll overflow-x-hidden'>
        {shoppingCart.map((item, index) => <SideCartItem removeItem={removeItem} item={item} index={index}/>)}
        </div>
        <h5 className='checkout-footer'>Total Price: {calculateTotalPrice()}$</h5>
        </div>
        <div className='col-12 col-lg-6 '>
          <h2 className='payment-options'>Personal Information</h2>  
          <Form noValidate validated={validated}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            
            
          />
          <Form.Control.Feedback type="invalid">Pleas provide a first name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type="invalid">Please provide a last name</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3 mt-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          <Form.Label>Phone Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+49</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="123456789"
              aria-describedby="inputGroupPrepend"
              required
              
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustom03">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" required  />
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="number" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Zip code.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
          
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email address.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
         <Form.Group as={Col} className='text-center mb-3 mt-3' md="5">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
         </Form.Group>
        <Form.Group as={Col} md="7" className='text-center mb-3 mt-3'>
          <Button className="w-75" onClick={handleInputChange}>Proceed</Button>
        </Form.Group>
       </Row>
    </Form>

        
          
          <Modal className="payment-modal" show={showPaymentOptions} onHide={() => setShowPaymentOptions(false)}>
            <Modal.Header closeButton>
                    <Modal.Title><h2 className='payment-options'>Payment Options</h2></Modal.Title>
            </Modal.Header>
            <Modal.Body  scrollable>
                
            
              {showPayment?
              <div className='succesful-payment'>
                <h4 >Payment successful! Your order has been completed. Please check your email for further details.</h4>
                <button onClick={() => setShoppingCart([])}><Link to="/">Home</Link></button>
              </div>
               :
              <Form noValidate validated={validated2}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            required
            type="card"
            placeholder="1234 5678 9012 3456"
          />
          
        </Form.Group>
         </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Name on Card</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="John Doe"
            
          />
          
        </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} md="8" controlId="validationCustomUsername">
          <Form.Label>Expiration Date</Form.Label>
          <InputGroup hasValidation>
            
            <Form.Control
              type="number"
              maxLength={2}
              placeholder="01"
              aria-describedby="inputGroupPrepend"
              
              required
              
            />
            <InputGroup.Text id="inputGroupPrepend">/</InputGroup.Text>
            <Form.Control
              type="number"
              // placeholder="2024"
              aria-describedby="inputGroupPrepend"
              defaultValue="2023"
              required
              
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid expiration date.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>CVC</Form.Label>
          <Form.Control type="number" placeholder="253" required  />
          <Form.Control.Feedback type="invalid">
            Please provide a valid CVC Code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className='mt-4'>           
            <h4 className='col-7'>Total Price: {calculateTotalPrice()}$</h4>  
            <Button className='col-4' onClick={handlePayment}>{showSpinner ? (
                    <div className='spinner-border text-primary-outline' role='status'>
                      <span className='visually-hidden'>Loading...</span>
                    </div>
                  ) : (
                    'Pay Now'
                  )}</Button>
            </Row>
      </Form>
            }                     
           </Modal.Body>
                    
        </Modal>
        </div>
        </div> :
        <div className='text-center font-weight-bold'>Looks like your Cart is empty :{"("}</div>}
    </div>
  )
}

export default CheckOut