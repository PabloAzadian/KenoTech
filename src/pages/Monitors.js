import React from 'react'
import MonitorBox from '../Components/MonitorBox/MonitorBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link } from 'react-router-dom'
import "./CategoryPage.css"


function Monitors({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <div className='category-header'>
        <Link to="/all-categories"><button>←</button></Link>
        <h1>Monitors</h1>
      </div>
         
        <ItemDisplayer type="Monitors" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Monitors