import React from 'react'
import Computer from "../../media/categories/Desktop.png"
import Laptop from "../../media/categories/Notebook.png"
import Console from "../../media/categories/Console.png"
import Monitor from "../../media/categories/Monitor.png"
import Headset from "../../media/categories/Headset.png"
import "./Categories.css"
import { Link } from 'react-router-dom'

function Categories({ handleCategory}) {

    const handleClick = (e) => {
        handleCategory(e);
      };
  return (
   <section>
            <div className='container'>
              <div className='row categories-container  gap-2'>
                
                <button  className='col-7 col-md-4 col-lg-2 m-auto button-computer'>
                <Link to="/desktops">
                  <img src={Computer} alt="Computer" />
                  <h2>Desktop Pc's</h2>
                 </Link>

                </button>
                <button  href="/Notebooks" className='col-7 col-md-4 col-lg-2 m-auto button-laptop'>
                <Link to="/notebooks">
                  <img src={Laptop} alt="Laptop" />
                  <h2>Notebooks</h2>
                  </Link>
                </button>
                
                <button className='col-7 col-md-4 col-lg-2 m-auto button-console'>
                <Link to="/consoles">
                  <img  src={Console} alt="Console" />
                  <h2>Consoles</h2>
                </Link>
                </button>
                
                <button  className='col-7 col-md-4 col-lg-2 m-auto button-monitor'>
                <Link to="/monitors">
                  <img  src={Monitor} alt="Monitor" />
                  <h2>Monitors</h2>
                </Link>
                </button>
                <button className='col-7 col-md-4 col-lg-2 m-auto button-headset'>
                <Link to="/headsets">
                  <img src={Headset} alt="Headset" />
                  <h2>Headsets</h2>
                </Link>
                </button>
          
                
               </div>
            </div>
   </section>  

  )
}

export default Categories