import React from 'react'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link, useNavigate } from 'react-router-dom'
import "./CategoryPage.css"

function Headsets() { 
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
     
   return (
    <div className='container'>
        <div className='category-header'>
        <Link to="/all-categories"><button onClick={goBack}>←</button></Link>
    <div className='routes-container gap-3'>
      <h3>Home</h3>
      <h4>/</h4>
      <h3>Categories</h3>
      <h4>/</h4>
      <h2>Headsets</h2>
    </div>
  </div>
         
        <ItemDisplayer category="Headset"/>
     </div>
   )
 }
 
 export default Headsets