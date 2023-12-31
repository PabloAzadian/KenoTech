import React, { useState, useEffect } from 'react'
import ComputerBox from '../ComputerBox/ComputerBox'
import ConsoleBox from '../ConsoleBox/ConsoleBox'
import MonitorBox from "../MonitorBox/MonitorBox"
import HeadsetBox from '../HeadsetBox/HeadsetBox'
import Computer from "../../media/categories/Desktop.png"
import Laptop from "../../media/categories/Notebook.png"
import Console from "../../media/categories/Console.png"
import Monitor from "../../media/categories/Monitor.png"
import Headset from "../../media/categories/Headset.png"
import "./ItemDisplayer.css"
import { ItemData } from "../ItemData"


function ItemDisplayer(props) { 
  
    const [displayOption, setDisplayOption] = useState("all")
    const [scrollOffset, setScrollOffset] = useState(432)
    const itemsToRender = []

    

  const handleScrollLeft = () => {
    let slider = document.getElementById(`slider-${props.type}`);
    slider.scrollLeft = slider.scrollLeft - scrollOffset;
  };

  const handleScrollRight = () => {
    let slider = document.getElementById(`slider-${props.type}`);
    slider.scrollLeft = slider.scrollLeft + scrollOffset;
  };

   const renderComponent = (item, index) => {
    
    switch (item.category) {
      
      case 'Desktop Computer':
        return <ComputerBox key={index}  setScrollOffset={setScrollOffset} item={item}/>
      case 'Laptop and Notebook':
        return <ComputerBox key={index}  setScrollOffset={setScrollOffset} item={item}/>
      case 'Console':
        return <ConsoleBox key={index}  setScrollOffset={setScrollOffset} item={item}/>
      case 'Headset':
        return <HeadsetBox key={index}  setScrollOffset={setScrollOffset} item={item}/>;
      case 'Monitor':
        return <MonitorBox key={index}  setScrollOffset={setScrollOffset} item={item}/>;
      default:
        return null; 
    }
  }

      const filtering = () => {
        if (props.type === "all")
        { ItemData.map((category, index) =>
           category.map((item, index) =>
             itemsToRender.push(item) ))}
        else if (props.type ==="new") {
          ItemData.map((category, index) =>
           category.map((item, index) =>
             item.new? itemsToRender.push(item): null ))}
        else if (props.type ==="discounted") {
          ItemData.map((category, index) =>
           category.map((item, index) =>
             item.discount? itemsToRender.push(item): null ))
        }
          if (props.category) {ItemData.map((category, index) =>
            category.map((item, index) =>
            item.category===props.category? itemsToRender.push(item) : null
            )
          )
          }
      }
  return (
    <div className='container'>
        {props.title && <h1>{props.title}</h1>}
        
        <div className='group-container d-flex'>
          <div id={`slider-${props.type}`} className={props.inline? "card-group flex-nowrap w-100% overflow-hidden m-auto"  : "card-group row"}>  
          {filtering() } 
          {itemsToRender.map((item,index) => 
          renderComponent(item))}
          
          </div>
          {props.inline && <div className="scroll-buttons">
            <button className="left" onClick={handleScrollLeft}>←</button>
            <button className="right" onClick={handleScrollRight}>→</button>
          </div>}
        </div>
        {/* <div className="scroll-buttons">
          <button className="left" onClick={handleScrollLeft}>{"<"}</button>
          <button className="right" onClick={handleScrollRight}>{">"}</button>
      </div> */}
    </div>
  )
}

export default ItemDisplayer

