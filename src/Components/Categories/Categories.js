import React from 'react'
import Computer from "../../media/categories/Category_Computer.png"
import Laptop from "../../media/categories/Category_Laptop.png"
import Console from "../../media/categories/Category_Console.png"
import Monitor from "../../media/categories/Category_Monitor.png"
import Headset from "../../media/categories/Category_Headset.png"
import "./Categories.css"

function Categories({ handleCategory}) {

    const handleClick = (e) => {
        handleCategory(e);
      };
  return (
   <section>
            <div className='container'>
                <div className='row categories-container  gap-2'>
                <button onClick={() => handleClick(0)} className='col-8 col-md-4 col-lg-2 m-auto button-computer'>
            <img src={Computer} alt="Computer" />
            <h2>Computers</h2>
          </button>
          <button  onClick={() => handleClick(1)} className='col-8 col-md-4 col-lg-2 m-auto button-laptop'>
            <img src={Laptop} alt="Laptop" />
            <h2>Laptops</h2>
          </button>
          <button onClick={() => handleClick(2)} className='col-8 col-md-4 col-lg-2 m-auto button-console'>
            <img src={Console} alt="Console" />
            <h2>Consoles</h2>
          </button>
          <button onClick={() => handleClick(3)} className='col-8 col-md-4 col-lg-2 m-auto button-monitor'>
            <img src={Monitor} alt="Monitor" />
            <h2>Monitors</h2>
          </button>
          <button onClick={() => handleClick(4)} className='col-8 col-md-4 col-lg-2 m-auto button-headset'>
            <img src={Headset} alt="Headset" />
            <h2>Headsets</h2>
          </button>
                        
                </div>
            </div>
   </section>  

  )
}

export default Categories