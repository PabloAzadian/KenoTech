import React from 'react'
import { Link } from 'react-router-dom'
import AbtUsImg from "../media/About us/AbtUs.png"
import Cart from "../media/About us/Cart.jpg"
import rating from "../media/About us/Positive ratings.jpg"
import orders from "../media/About us/Succesfull orders.jpg"
import Workers from "../media/About us//Workers.jpg"
import worldwide from "../media/About us/customers around the world.jpg"
import tradition from "../media/About us/yearlong tradition.jpg"
import "./AboutUs.css"

function AboutUs() {
  return (
    <div className='page-container container'>
      <div className="category-header">
        <div className='routes-container gap-3'>
          <h3><Link to="/">Home</Link></h3>
          <h4>/</h4>
          <h2>About Us</h2>
        </div>
        </div>
      <div className='row'>
        <div className='col-12  col-lg-6'>
      <h1>Empowering Your Tech Journey: Discover KenoTech's Story</h1>

      {/* <h4>At KenoTech, we're not just a hardware store – we're 
        your partners on the path to technological excellence. Our About Us 
        story is one of passion, innovation, and commitment to providing you
         with the best hardware solutions for your every need.</h4> */}

         <p>🔧 Our Genesis: Born from Passion KenoTech was founded with a burning 
          passion for technology. Our journey began in 1990 when 
          a group of tech enthusiasts came together with a shared vision: to make 
          cutting-edge hardware accessible to all. What started as a small initiative 
          has now grown into a thriving platform where tech dreams come true.</p>

          <p>🚀 Our Mission: Fueling Your Potential At KenoTech, we believe that 
          technology should be a catalyst for unleashing your potential. Our mission is to 
          equip you with the tools you need to push boundaries, innovate, and create. We 
          meticulously curate our hardware selection, ensuring that each product we offer 
          aligns with our commitment to quality and performance.</p>

          <p>💡 Our Vision: Your Future, Our Focus
          Our vision extends beyond just selling hardware. We see ourselves as enablers of dreams,
          helping you build a future where technology propels you forward. Whether you're a seasoned
          professional, a DIY enthusiast, or just beginning to explore the world of tech, KenoTech 
          is here to guide you every step of the way.</p>
          </div>
          <div className='aboutus-img text-center m-auto col-12  col-lg-6'>
            <img width="auto" src={AbtUsImg}/>
          </div>

</div>
<div className='row aboutus-img-container gap-2'>
    <div className="m-auto text-center col-6  col-lg-3 p-4">
      <img width="150px" src={Workers}/>
      <div className='p-3'>
      <h2>50</h2>
      <h5>Total Employees</h5>
      </div>
    </div>
    <div className="m-auto text-center col-6  col-lg-3 p-4">
      <img width="150px" src={Cart}/>
      <div className='p-3'>
      <h2>2369</h2>
      <h5>Products in Storage</h5>
      </div>
    </div>
    <div className="m-auto text-center col-6  col-lg-3 p-4">
      <img width="150px" src={tradition}/>
      <div className='p-3'>
      <h2>33</h2>
      <h5>Years working with you</h5>
      </div>
    </div>
    <div className="m-auto text-center col-6  col-lg-3 p-4">
      <img width="150px" src={worldwide}/>
      <div className='p-3'>
      <h2>98.365</h2>
      <h5>Customers around the globe</h5>
      </div>
    </div>
    <div className="m-auto text-center col-6  col-lg-3 p-4">
      <img width="150px" src={rating}/>
      <div className='p-3'>
      <h2>2.548</h2>
      <h5>Testimonials with a 5 star rating</h5>
      </div>
    </div>
    <div className="m-auto text-center col-6  col-lg-3 p-4">
      <img width="150px" src={orders}/>
      <div className='p-3'>
      <h2>197.362</h2>
      <h5>Orders Completed</h5>
      </div>
    </div>

</div>
    
    </div>
      
  )
}

export default AboutUs