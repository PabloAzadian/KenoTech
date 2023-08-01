import React, { useState } from 'react'
import ComputerBox from '../ComputerBox/ComputerBox'
import ConsoleBox from '../ConsoleBox/ConsoleBox'
import { ItemData } from "../ItemData"


function ItemDisplayer() { 
   const [selectedCategory, setSelectedCategory] = useState(0)
    

    
  return (
    <div className='container'>
        <select onChange={(e) => setSelectedCategory(parseInt(e.target.value, 10))}>
            <option value={0}>Computers</option>
            <option value={1}>Laptops</option>
            <option value={2}>Consoles</option>
            <option value={3}>Monitors</option>
            <option value={4}>Headsets</option>
        </select>
        <div className='card-group gap-3'>    
        {ItemData[selectedCategory].map((item, index) => <ConsoleBox key={index} item={item}/>)}
        </div>
    </div>
  )
}

export default ItemDisplayer