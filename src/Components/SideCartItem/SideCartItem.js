import React, { useState } from 'react';
import Card from "react-bootstrap/Card"
import "./SideCartItem.css"

function SideCartItem(props) {
    // const [price, setPrice] = useState(props.item.price)
    // const [quantity, setQuantity] = useState(1)

    // const handleAdd = () =>{
    //     setQuantity(quantity+1)
    //     setPrice(props.item.price * (quantity+1))
        
    // }
    // const handleMinus = () =>{
    //     setQuantity(quantity-1)
    //     setPrice(props.item.price * (quantity -1))
    // }
  return (
    <div className="side-cart-item p-2">
      <Card className="d-flex flex-row w-100">
        <Card.Img variant="top" width="150px" height="150px" src={props.item.imgSrc} />
        <Card.Body>
            <Card.Title >{props.item.name}  <button className='remove-item' onClick={() => props.removeItem(props.index)}>x</button></Card.Title>
            <Card.Text className="d-flex flex-column justify-content-around h-100">
                <div className='sidecart-item-modifiers'>
                    <p>Color: {props.item.color}</p>
                    <p>{props.item.ram? `Modified Ram: ${props.item.ram.name} (+${props.item.ram.priceDifference}$) `: null}</p>
                    <p>{props.item.storage? `Modified Storage: ${props.item.storage.name} (+${props.item.storage.priceDifference}$) `: null}</p>
                </div>
                <div className='prices gap-2 d-flex'>
                    {/* <button onClick={handleAdd} disabled={quantity >= 5}>+</button>
                    <p>{quantity}</p>
                    <button onClick={handleMinus} disabled={quantity <= 1}>-</button> */}
                    <div>
                    <h3>{props.item.price}$ </h3>
                    </div>
                </div>
            </Card.Text>
        </Card.Body>
        </Card>
    </div>
  );
}

export default SideCartItem;