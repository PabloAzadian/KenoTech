import React from 'react'
import MonitorBox from '../Components/MonitorBox/MonitorBox'
import '../Components/ItemDisplayer/ItemDisplayer.css'
import { ItemData } from "../Components/ItemData"
import ItemDisplayer from '../Components/ItemDisplayer/ItemDisplayer'
import { Link, useNavigate } from 'react-router-dom'
import "./CategoryPage.css"


function Monitors() { 
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
      <h2>Monitors</h2>
    </div>
  </div>
         
        <ItemDisplayer category="Monitor"/>
     </div>
   )
 }
 
 export default Monitors