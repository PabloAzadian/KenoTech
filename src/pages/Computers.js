import React from 'react'
import ComputerBox from '../Components/ComputerBox/ComputerBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link } from 'react-router-dom'
import "./CategoryPage.css"


function Computers({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <div className='category-header'>
        <Link to="/all-categories"><button>←</button></Link>
        <h1>Desktop Computers</h1>
      </div>
         
        <ItemDisplayer type="Desktops" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Computers