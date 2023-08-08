import React from 'react'
import MonitorBox from '../Components/MonitorBox/MonitorBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'

function Monitors({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Monitors</h1>
         
        <ItemDisplayer type="Monitors" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Monitors