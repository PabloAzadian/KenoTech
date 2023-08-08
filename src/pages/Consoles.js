import React from 'react'
import ConsoleBox from '../Components/ConsoleBox/ConsoleBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'

function Consoles({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Consoles</h1>
         
        <ItemDisplayer type="Consoles" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Consoles