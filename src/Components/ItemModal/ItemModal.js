import React, { useState } from 'react'
import DesktopPC from "../../media/Objects/DesktopPC.png"
import "./ItemModal.css"
import { Row, Col, Container, Modal } from 'react-bootstrap';
import BasketCart from "../../media/basket-cart-icon-27.png"


const discountBadge = (value) => (<h6 className='discount-badge'>{value}$ OFF</h6>)

const item = {
    name: "Core i7 Desktop PC",
    price: 1800,
    category: "Desktop Computer",
    imgSrc: DesktopPC,
    processor: "Intel Core i7-11700K",
    rams: [
      { name: "32GB DDR4", priceDifference: 0 },
      { name: "64GB DDR4", priceDifference: 300 },
      { name: "128GB DDR4", priceDifference: 600 },
    ],
    storages: [
      { name: "1TB NVMe SSD", priceDifference: 0 },
      { name: "2TB NVMe SSD", priceDifference: 200 },
      { name: "4TB NVMe SSD", priceDifference: 500 },
    ],
    gpu: "Nvidia RTX 3070",
    colors: ["Black", "Silver", "White"],
    discount: 0,
  }


  function ItemModal(props) {
    const [selectedColor, setSelectedColor] = useState(props.item.colors[0])
    const [selectedRam, setSelectedRam] = useState(props.item.rams[0].name)
    const [selectedStorage, setSelectedStorage] = useState(props.item.storages[0].name)
    props.item.finalPrice = (props.item.price - props.item.discount + selectedRam.priceDifference + selectedStorage.priceDifference)
    return (
      <div>
        <Modal show={props.show} onHide={props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{props.item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
                <Row>
                    <Col className='imgCol'>
                        <img width="150" height="200" src={DesktopPC}/>
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
                                >
                                    
                                </button>
                                ))}
                            </div>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='dataCol p-3' xs={12} >
                        <h5>Select your desired RAM</h5>
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
    );
  }
  
  export default ItemModal;