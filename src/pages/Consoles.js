import React from 'react'
import ConsoleBox from '../Components/ConsoleBox/ConsoleBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link } from 'react-router-dom'
import "./CategoryPage.css"

function Consoles({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
      <div className='category-header'>
        <Link to="/all-categories"><button>←</button></Link>
        <h1>Consoles</h1>
      </div>
         
        <ItemDisplayer type="Consoles" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Consoles