import React from 'react'
import ComputerBox from '../Components/ComputerBox/ComputerBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link, useNavigate } from 'react-router-dom'
import "./CategoryPage.css"


function Computers() { 
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
      <h2>Desktop Computers</h2>
    </div>
  </div>
         
        <ItemDisplayer category="Desktop Computer"/>
     </div>
   )
 }
 
 export default Computers