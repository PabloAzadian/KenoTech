import React, { useState } from 'react'
import "./MonitorBox.css"
import Card from "react-bootstrap/Card"
import { Row, Col, Container, Modal } from 'react-bootstrap';
import BasketCart from "../../media/icons/basket-cart-icon-27.png"
import star from "../../media/icons/star icon.png"


const discountBadge = (value) => (<h6 className='discount-badge'>{value}$ OFF</h6>)


    const item = {
        name: "ASUS ROG Swift PG279Q",
        price: 700,
        category: "Monitor",
        imgSrc: "ASUSROGSwiftPG279Q.jpg",
        displaySize: "27 inches",
        resolution: "2560 x 1440 (Quad HD)",
        refreshRate: "165Hz",
        panelType: "IPS",
        colors: ["Black"],
        discount: 0,
      }


function MonitorBox(props) {
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
                <h5>Display Size:</h5>
                <p>{props.item.displaySize}</p>

            </Col>
            <Col>
                <h5>Resolution:</h5>
                <p>{props.item.resolution}</p>
            </Col>
        </Row>
        <Row>
            <Col className='dataCol'>
            <h5>Refresh Rate:</h5>
                <div>
                    <p>{props.item.refreshRate}</p>
                </div> 
            </Col>
            <Col className='dataCol'>
                <h5>Panel Type:</h5>
                <div>
                    <p>{props.item.panelType}</p>
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

export default MonitorBox;