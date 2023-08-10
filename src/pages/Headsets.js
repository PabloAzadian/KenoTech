import React from 'react'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link } from 'react-router-dom'
import "./CategoryPage.css"

function Headsets() { 
    
     
 
    
 
   
     
   return (
     <div className='container'>
      <div className='category-header'>
        <Link to="/all-categories"><button>←</button></Link>
        <h1>Headsets</h1>
      </div>
         
        <ItemDisplayer type="Headsets"  />
     </div>
   )
 }
 
 export default Headsets