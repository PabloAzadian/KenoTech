import React from 'react'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link } from 'react-router-dom'
import "./CategoryPage.css"


function Notebooks({setShoppingCart}) { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
        <div className='category-header'>
        <Link to="/all-categories"><button>←</button></Link>
        <h1>Notebooks</h1>
      </div>
         
        <ItemDisplayer type="Notebooks" setShoppingCart={setShoppingCart} />
     </div>
   )
 }
 
 export default Notebooks