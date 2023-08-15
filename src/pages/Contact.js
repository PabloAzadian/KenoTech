import React, {useState} from 'react'
import { AiFillMail, AiFillPhone, AiOutlineInbox } from "react-icons/ai";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import InputGroup from 'react-bootstrap/InputGroup';
import "./Contact.css"

function Contact() {
  const [validated, setValidated] = useState(false);

  function handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  }
  return (
    <div className='container'>
        
        <row className='p-4 row position-relative container m-auto'>
          <div className="contact-text col-12 col-lg-6">
            <h2>Get in Touch</h2>
            <p>We're here to help! Feel free to reach out if you have any questions or inquiries. 
            Whether you're looking for product information, technical assistance, or anything else related to our hardware offerings, 
            we're ready to assist you. We pride ourselves on delivering prompt and accurate responses to all your queries.
            </p>
            <p><AiFillMail /> contact@kenotech.com</p>
            <p><AiFillPhone /> +49 123 45678912</p>
          </div>
            <div className='col-12  col-lg-6'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
              <h2>Personal Information</h2>
              <Form.Group as={Col} md="6" controlId="validationCustom01">
              
              <InputGroup hasValidation>
                <FloatingLabel
                  controlId="floatingInput"
                  label="First Name"
                  className="mb-3"
                >
                      <Form.Control
              type="text"
              placeholder='John'
              required
              
            />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              Please provide a first name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
        <InputGroup hasValidation>
          <FloatingLabel
        controlId="floatingInput"
        label="Last Name"
        className="mb-3"
      >
            <Form.Control
              type="text"
              placeholder='Doe'
              required
              
            />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              Please provide a last name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-3 mt-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          
          <InputGroup hasValidation>
          <FloatingLabel
            controlId="floatingInput"
            label="Phone Number"
            className="mb-3"
          >
            <Form.Control
              type="number"
              placeholder="123456789"
              required
              
            />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-3 mt-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          
          <InputGroup hasValidation>
          <FloatingLabel
        controlId="floatingInput"
        label="Email Adress"
        className="mb-3"
      >
            <Form.Control
              type="email"
              placeholder="123456789"
              required
              
            />
            </FloatingLabel>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
      
      <h2>Message</h2>
      <Row className="mb-3 mt-3">
        <Form.Group as={Col} md="12" controlId="validationCustomUsername">
          
          <InputGroup hasValidation>
          
            <Form.Control
              
              as="textarea" 
              rows={6}
              placeholder="Your message here..."
              required
              
            />
            
            <Form.Control.Feedback type="invalid">
              Write a message.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        </Row>
        <Row className="mb-3 mt-3">
              <button onSubmit={handleSubmit} className="submit-button" type="submit"><AiOutlineInbox/> Submit your message</button>
        </Row>
      
      </Form>
            </div>
        </row>
    </div>
  )
}

export default Contact