import React from 'react'
import HeadsetBox from '../Components/HeadsetBox/HeadsetBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"

function Headsets() { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Headsets</h1>
         
         <div className='group-container'>
           <div className='card-group row'>    
            {ItemData[4].map((item, index) => <HeadsetBox key={index} item={item}/>)}
             
           </div>
         </div>
     </div>
   )
 }
 
 export default Headsets