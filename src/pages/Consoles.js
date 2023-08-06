import React from 'react'
import ConsoleBox from '../Components/ConsoleBox/ConsoleBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"

function Consoles() { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Consoles</h1>
         
         <div className='group-container'>
           <div className='card-group row'>    
            {ItemData[2].map((item, index) => <ConsoleBox key={index} item={item}/>)}
             
           </div>
         </div>
     </div>
   )
 }
 
 export default Consoles