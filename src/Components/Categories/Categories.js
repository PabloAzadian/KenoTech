import React from 'react'
import Computer from "../../media/categories/Desktop.png"
import Laptop from "../../media/categories/Notebook.png"
import Console from "../../media/categories/Console.png"
import Monitor from "../../media/categories/Monitor.png"
import Headset from "../../media/categories/Headset.png"
import "./Categories.css"

function Categories({ handleCategory}) {

    const handleClick = (e) => {
        handleCategory(e);
      };
  return (
   <section>
            <div className='container'>
              <div className='row categories-container  gap-2'>
                <button  className='col-7 col-md-4 col-lg-2 m-auto button-computer'>
                  <img src={Computer} alt="Computer" />
                  <h2>Desktop Pc's</h2>
                </button>
                <button  className='col-7 col-md-4 col-lg-2 m-auto button-laptop'>
                  <img src={Laptop} alt="Laptop" />
                  <h2>Notebooks</h2>
                </button>
                <button className='col-7 col-md-4 col-lg-2 m-auto button-console'>
                  <img  src={Console} alt="Console" />
                  <h2>Consoles</h2>
                </button>
                <button  className='col-7 col-md-4 col-lg-2 m-auto button-monitor'>
                  <img  src={Monitor} alt="Monitor" />
                  <h2>Monitors</h2>
                </button>
                <button className='col-7 col-md-4 col-lg-2 m-auto button-headset'>
                  <img src={Headset} alt="Headset" />
                  <h2>Headsets</h2>
                </button>
          
                
               </div>
            </div>
   </section>  

  )
}

export default Categories