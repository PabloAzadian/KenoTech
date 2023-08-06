import React, { useState } from 'react'
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

   const renderComponent = (item, index) => {
    switch (item.category) {
      case 'Desktop Computer':
        return <ComputerBox key={index} item={item}/>
      case 'Laptop and Notebook':
        return <ComputerBox key={index} item={item}/>
      case 'Console':
        return <ConsoleBox key={index} item={item}/>
      case 'Headset':
        return <HeadsetBox key={index} item={item}/>;
      case 'Monitor':
        return <MonitorBox key={index} item={item}/>;
      default:
        return null; 
    }
  }
    
  return (
    <div className='container'>
        
        <div className='group-container'>
          <div className='card-group row'>    
          {props.type === "all" && ItemData.map((category, index) =>
          category.map((item, index) =>
            renderComponent(item)) 
          )}
          {props.type === "discounted" && ItemData.map((category, index) =>
            category.map((item, index) =>
              item.discount !== 0 ? renderComponent(item) : null
            )
          )}
          </div>
        </div>
    </div>
  )
}

export default ItemDisplayer

