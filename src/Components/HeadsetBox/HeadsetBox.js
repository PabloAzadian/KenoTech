import React, { useState } from 'react'
import DesktopPC from "../../media/Objects/Headset.png"
import "./HeadsetBox.css"
import Card from "react-bootstrap/Card"
import { Row, Col, Container, Modal } from 'react-bootstrap';
import BasketCart from "../../media/basket-cart-icon-27.png"


const discountBadge = (value) => (<h6 className='discount-badge'>{value}$ OFF</h6>)


    const item = {
        name: "HyperX Cloud II",
        price: 100,
        category: "Headset",
        imgSrc: "HyperXCloudII.jpg",
        connectionType: "Wired (USB)",
        compatibility: "PC, PS4, Xbox One",
        soundType: "7.1 Virtual Surround Sound",
        microphone: "Detachable Noise-Canceling",
        colors: ["Black", "Red"],
        discount: 0,
      }


function HeadsetBox(props) {
    const [selectedColor, setSelectedColor] = useState(props.item.colors[0])
    const [activeModal, setActiveModal] = useState(false)

    const handleOpenModal = () => {
        setActiveModal(true);
    }

    const handleCloseModal = () => {
        setActiveModal(false);
    }

  
    props.item.discountedPrice= (props.item.price-props.item.discount) 
    props.item.finalPrice = (props.item.price - props.item.discount)
  return (
    <div className='col-lg-4 col-md-5 col-sm-7 col-7 p-3 card-container'>

    <Card onClick={handleOpenModal}style={{ width: '18rem' }}>
      <Card.Img variant="top" src={DesktopPC} />
      <Card.Body className='card-img-overlay'>
        <Card.Title className='d-flex flex-row gap-2'>{props.item.name} {props.item.discount? discountBadge(props.item.discount): ""} </Card.Title>
        <Card.Text>
        {props.item.discount? 
            (<div className='d-flex flex-row gap-2'> <span>{props.item.price}$</span><p>{props.item.discountedPrice}$</p> </div>)
            :
             props.item.price + "$"} 
        </Card.Text>
      </Card.Body>
    </Card>

<div>
<Modal show={activeModal} onHide={handleCloseModal}>
  <Modal.Header closeButton>
    <Modal.Title>{props.item.name}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Container>
        <Row>
            <Col xs={"12"}className='imgCol'>
                <img width="240" height="240" src={DesktopPC}/>
            </Col>
        </Row>
        <div className='modal-text-container'>
        <Row>
            <Col className='dataCol'>
                <h5>Sound Type:</h5>
                <p>{props.item.soundType}</p>

            </Col>
            <Col>
                <h5>Microphone:</h5>
                <p>{props.item.microphone}</p>
            </Col>
        </Row>
        <Row>
            <Col className='dataCol'>
                <p>
                    <h5>Available Colors:</h5>
                    <div className="color-buttons">
                        {props.item.colors.map((color) => (
                        <button
                            key={color}
                            className={`color-button ${selectedColor === color ? "active" : ""}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        >
                            
                        </button>
                        ))}
                    </div>
                </p>
            </Col>
            <Col className='dataCol'>
                <h5>Compatibility:</h5>
                <div>
                    <p>{props.item.compatibility}</p>
                </div> 
            </Col>    
        </Row>
        </div>
        
        
                </Container>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
            <h5>Final Price: {props.item.finalPrice}$</h5>
            <button>
                Add to Cart{" "}{" "}
                <img width="40px" src={BasketCart}/>

            </button>
            </Modal.Footer>
            </Modal>
            </div>
</div>
    

    
  )
}

export default HeadsetBox;