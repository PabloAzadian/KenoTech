import React from 'react';
import { Link } from 'react-router-dom';
import buildPc from "../../media/BuildYourOwn.jpg";
import "./Footer.css";
import logo from "../../media/icons/Logo.png";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='row position-relative container m-auto'>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2><Link to="/all-categories">Product Categroies</Link></h2>
          <p><Link to="/Desktops">Desktop PCs</Link></p>
          <p><Link to="/Notebooks">Notebooks</Link></p>
          <p><Link to="/Consoles">Gaming Consoles</Link></p>
        </div>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2>Our Locations</h2>
          <p>Cologne, Germany</p>
          <p>Berlin, Germany</p>
          <p>Rotterdam, Holland</p>
        </div>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2>Opening Hours</h2>
          <p>Monday to Friday: 09:00 AM - 10:00 PM</p>
          <p>Saturday: 09:00 AM - 08:00 PM</p>
          <p>Sunday: 12:00 PM - 04:00 PM</p>
        </div>
        <div className='footer-item col-12 col-md-6 col-lg-3'>
          <h2><Link to="/Contact">Contact Us</Link></h2>
          <p><AiOutlineMail /> contact@kenotech.com</p>
          <p><AiOutlinePhone /> +49 123 45678912</p>
          <p>We will respond to you promptly.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
