
import './App.css';
import Categories from '../Categories/Categories';
import NavBar from "../NavBar/NavBar";
import "../../global.css"
import { useState } from 'react';
import Computers from "../../pages/Computers"
import Notebooks from "../../pages/NoteBooks"
import Consoles from "../../pages/Consoles"
import Monitors from "../../pages/Monitors"
import Headsets from "../../pages/Headsets"
import AllCategrories from '../../pages/AllCategories';
import Home from "../../pages/Home"
import { ItemData } from "../ItemData"
import { Route, Routes } from 'react-router-dom';
import BuildYourOwnPc from '../../pages/BuildYourOwnPc';
import CheckOut from "../../pages/CheckOut"
import AboutUs from '../../pages/AboutUs';
import Contact from '../../pages/Contact';
import Footer from "../../Components/Footer/Footer"
import { ShoppingCartProvider } from '../../Components/ShoppingCartContext';

function App() {
  
  const [shoppingCart, setShoppingCart] = useState([])


  return (
    <div>
      <ShoppingCartProvider>
       <NavBar/>
       <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/all-categories" element={<AllCategrories />}/>
        <Route path="/desktops" element={<Computers />}/>
        <Route path="/notebooks" element={<Notebooks />}/>
        <Route path="/consoles" element={<Consoles />}/>
        <Route path="/monitors" element={<Monitors />}/>
        <Route path="/headsets" element={<Headsets />}/>
        <Route path="/build-your-pc" element={<BuildYourOwnPc/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      
      
      
      
      </Routes>
      <Footer/>
      </ShoppingCartProvider>
    </div>
    );
}

export default App;
