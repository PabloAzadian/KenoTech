import React from 'react'
import MonitorBox from '../Components/MonitorBox/MonitorBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"

function Monitors() { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Monitors</h1>
         
         <div className='group-container'>
           <div className='card-group row'>    
            {ItemData[3].map((item, index) => <MonitorBox key={index} item={item}/>)}
             
           </div>
         </div>
     </div>
   )
 }
 
 export default Monitors