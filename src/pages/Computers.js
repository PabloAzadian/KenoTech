import React from 'react'
import ComputerBox from '../Components/ComputerBox/ComputerBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'

function Computers({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Computers</h1>
         
        <ItemDisplayer type="Desktops" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Computers