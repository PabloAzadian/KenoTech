import React from 'react'
import buildPc from "../../media/BuildYourOwn.jpg"
import "./BuildYourOwnPc.css"
import logo from "../../media/icons/Logo.png"
import { Link } from 'react-router-dom'

function BuildYourOwnPcBanner() {
  return (
    <div className='banner-container'>
        
        <row className='row position-relative container m-auto'>
            <div className='main-img col-12  col-lg-5'>
                <img width="100%" src={buildPc}/>
            </div>
            <div className='banner-text col-12  col-lg-7'>
                <h2>Build Your Own PC</h2>
                <h4>Design Your Perfect PC Build:</h4>
                <h5>Tell us your dream specifications, and we'll create a tailored 
                custom PC just for you. Whether you're a gamer, content creator, or professional, we've got you covered. Our experts at <span>KenoTech</span> will help you choose
                the best components to optimize performance, aesthetics, and budget. 
                Start building your dream PC today!</h5>
                <Link to="/build-your-pc"><button>Get Started </button></Link>
                <div className="logo-container">
                    <img width="200px" src={logo} alt="KenoTech Logo" />
                </div>
            </div>
        </row>
    </div>
  )
}

export default BuildYourOwnPcBanner