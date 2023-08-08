import React from 'react'
import ComputerBox from '../Components/ComputerBox/ComputerBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'


function Notebooks({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Notebooks</h1>
         
        <ItemDisplayer type="Notebooks" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Notebooks