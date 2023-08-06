import React from 'react'
import ComputerBox from '../Components/ComputerBox/ComputerBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"


function Notebooks() { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <h1>Notebooks</h1>
         
         <div className='group-container'>
           <div className='card-group row'>    
            {ItemData[1].map((item, index) => <ComputerBox key={index} item={item}/>)}
             
           </div>
         </div>
     </div>
   )
 }
 
 export default Notebooks