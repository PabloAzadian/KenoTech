import React from 'react'
import HeadsetBox from '../Components/HeadsetBox/HeadsetBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'

function Headsets({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Headsets</h1>
         
        <ItemDisplayer type="Headsets" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Headsets