import React, { useState } from 'react'
import DesktopPC from "../../media/Objects/ps5.png"
import "./ConsoleBox.css"
import Card from "react-bootstrap/Card"
import { Row, Col, Container, Modal } from 'react-bootstrap';
import BasketCart from "../../media/icons/basket-cart-icon-27.png"
import star from "../../media/icons/star icon.png"

const discountBadge = (value) => (<h6 className='discount-badge'>{value}$ OFF</h6>)


    const item = {
    name: "PlayStation 5",
    price: 500,
    category: "Console",
    imgSrc: "PlayStation5.jpg",
    processor: "Custom AMD Ryzen Zen 2",
    storage: "825GB SSD",
    gpu: "AMD Radeon RDNA 2",
    colors: ["White", "Black"],
    discount: 0,
    }


function ConsoleBox(props) {
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

<Card onClick={handleOpenModal} >
    <Card.Img variant="top" src={props.item.imgSrc} />  
        <Card.Body>
            <Card.Title >{props.item.name} {props.item.discount? discountBadge(props.item.discount): ""} </Card.Title>
            <Card.Text >
                <div className='ratings'>
                    <p>{props.item.rating}/5 <img src={star} height={"30px"} width={"20px"}/> <span class="bi bi-star"></span>({props.item.reviews} reviews)</p>
                </div>
                <div className='prices'>
            {props.item.discount? 
                (<div className='gap-2'> <span>{props.item.price}$</span><h3>{props.item.discountedPrice}$</h3> </div>)
                :
                <div>
                
                <h3>{props.item.price}$ </h3>
                </div>} 
                </div>
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
                <img width="240" height="240" src={props.item.imgSrc}/>
            </Col>
        </Row>
        <div className='modal-text-container'>
        <Row>
            <Col className='dataCol'>
                <h5>Processor:</h5>
                <p>{props.item.processor}</p>

            </Col>
            <Col>
                <h5>Graphic Card:</h5>
                <p>{props.item.gpu}</p>
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
            <Col>
                <h5>Storage Capacity:</h5>
                <div className="storage-buttons d-flex  gap-3">
                            <p>{props.item.storage}</p>
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

export default ConsoleBox;