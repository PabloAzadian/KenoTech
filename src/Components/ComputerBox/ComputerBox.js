import React, { useState } from 'react'
import DesktopPC from "../../media/Objects/DesktopPC.png"
import Laptop from "../../media/Objects/Laptop.png"
import "./ComputerBox.css"
import Card from "react-bootstrap/Card"
import { Row, Col, Container, Modal } from 'react-bootstrap';
import BasketCart from "../../media/icons/basket-cart-icon-27.png"
import star from "../../media/icons/star icon.png"


const discountBadge = (value) => (<h6 className='discount-badge'>{value}$ OFF</h6>)

function ComputerBox(props) {
    const [selectedColor, setSelectedColor] = useState(props.item.colors[0])
    const [selectedRam, setSelectedRam] = useState(props.item.rams[0])
    const [selectedStorage, setSelectedStorage] = useState(props.item.storages[0])
    const [activeModal, setActiveModal] = useState(false)

    const handleOpenModal = () => {
        setActiveModal(true);
    }

    const handleCloseModal = () => {
        setActiveModal(false);
    }

    props.item.discountedPrice= (props.item.price-props.item.discount) 
    props.item.finalPrice = (props.item.price - props.item.discount + selectedRam.priceDifference + selectedStorage.priceDifference)
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
                <div className='prices gap-2'>
            {props.item.discount? 
                (<div className=''> <span>{props.item.price}$</span><h3>{props.item.discountedPrice}$</h3> </div>)
                :
                <div>
                
                <h3>{props.item.price}$ </h3>
                </div>} 
                </div>
            </Card.Text>
        </Card.Body>
        </Card>

        
         <Modal show={activeModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                    <Modal.Title>{props.item.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body scrollable>
                <Container>
                    <Row>
                        <Col className='imgCol'>
                            <img  height={"240px"} width={"240px"}src={props.item.imgSrc}/>
                        </Col>
                        <Col className='dataCol'>
                            <h5>Processor:</h5>
                            <p>{props.item.processor}</p>
                            <h5>Graphic Card:</h5>
                            <p>{props.item.gpu}</p>
                            <p>
                                <h5>Available Colors:</h5>
                                <div className="color-buttons">
                                    {props.item.colors.map((color) => (
                                     <button
                                        key={color}
                                        className={`color-button ${selectedColor === color ? "active" : ""}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setSelectedColor(color)}
                                    />))}
                                </div>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='dataCol p-3' xs={12} >
                            <h5>Select your desired RAM Capacity:</h5>
                            <div className="ram-buttons d-flex  gap-3">
                                
                                    {props.item.rams.map((ram) => (
                                    <button
                                        key={ram.name}
                                        className={`ram-button ${selectedRam.name === ram.name ? "active" : ""}`}
                                        
                                        onClick={() => setSelectedRam(ram)}
                                    >
                                        <h6>{ram.name}</h6>
                                        {ram.priceDifference? `+${ram.priceDifference}$` : "Already Included"}
                                    </button>
                                    ))}
                            </div>      
                        </Col>
                        <Col className='dataCol'xs={12}>
                                <h5>Select your desired Storage Capacity:</h5>
                                <div className="storage-buttons d-flex  gap-3">
                                
                                    {props.item.storages.map((storage) => (
                                    <button
                                        key={storage.name}
                                        className={`storage-button ${selectedStorage.name === storage.name ? "active" : ""}`}
                                        
                                        onClick={() => setSelectedStorage(storage)}
                                    >
                                        <h6>{storage.name}</h6>
                                        {storage.priceDifference? `+${storage.priceDifference}$` : "Already Included"}
                                    </button>
                                    ))}
                                </div>  
                            </Col>
                        </Row>
                        
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
    

    
  )
}

export default ComputerBox