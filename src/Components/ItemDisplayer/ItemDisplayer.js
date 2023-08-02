import React, { useState } from 'react'
import ComputerBox from '../ComputerBox/ComputerBox'
import ConsoleBox from '../ConsoleBox/ConsoleBox'
import MonitorBox from "../MonitorBox/MonitorBox"
import HeadsetBox from '../HeadsetBox/HeadsetBox'
import Computer from "../../media/categories/Category_Computer.png"
import Laptop from "../../media/categories/Category_Laptop.png"
import Console from "../../media/categories/Category_Console.png"
import Monitor from "../../media/categories/Category_Monitor.png"
import Headset from "../../media/categories/Category_Headset.png"
import "./ItemDisplayer.css"
import { ItemData } from "../ItemData"


function ItemDisplayer() { 
   const [selectedCategory, setSelectedCategory] = useState("Computers")
    

   const handleClick = (e) => 
   {setSelectedCategory(e.target.value)}
    
  return (
    <div className='container'>
        <div className='row categories-container  gap-2'>
          <button onClick={() => setSelectedCategory("Computers")} className='col-8 col-md-4 col-lg-2 m-auto button-computer'>
            <img src={Computer} alt="Computer" />
            <h2>Computers</h2>
          </button>
          <button  onClick={() => setSelectedCategory("Laptops")} className='col-8 col-md-4 col-lg-2 m-auto button-laptop'>
            <img src={Laptop} alt="Laptop" />
            <h2>Laptops</h2>
          </button>
          <button onClick={() => setSelectedCategory("Consoles")} className='col-8 col-md-4 col-lg-2 m-auto button-console'>
            <img  src={Console} alt="Console" />
            <h2>Consoles</h2>
          </button>
          <button onClick={() => setSelectedCategory("Monitors")} className='col-8 col-md-4 col-lg-2 m-auto button-monitor'>
            <img  src={Monitor} alt="Monitor" />
            <h2>Monitors</h2>
          </button>
          <button onClick={() => setSelectedCategory("Headsets")} className='col-8 col-md-4 col-lg-2 m-auto button-headset'>
            <img src={Headset} alt="Headset" />
            <h2>Headsets</h2>
          </button>
                
        </div>
        <div className='group-container'>
          <div className='card-group row'>    
            {selectedCategory==="Computers" && ItemData[0].map((item, index) => <ComputerBox key={index} item={item}/>)}
            {selectedCategory==="Laptops" && ItemData[1].map((item, index) => <ComputerBox img={"laptop"}key={index} item={item}/>)}
            {selectedCategory==="Consoles" && ItemData[2].map((item, index) => <ConsoleBox key={index} item={item}/>)}
            {selectedCategory==="Monitors" && ItemData[3].map((item, index) => <MonitorBox key={index} item={item}/>)}
            {selectedCategory==="Headsets" && ItemData[4].map((item, index) => <HeadsetBox key={index} item={item}/>)}
          </div>
        </div>
    </div>
  )
}

export default ItemDisplayer