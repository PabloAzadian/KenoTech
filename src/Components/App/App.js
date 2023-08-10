
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
import { ShoppingCartProvider } from '../../Components/ShoppingCartContext';

function App() {
  
  const [shoppingCart, setShoppingCart] = useState([])


  return (
    <div>
      <ShoppingCartProvider>
       <NavBar/>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all-categories" element={<AllCategrories />}/>
        <Route path="/Desktops" element={<Computers />}/>
        <Route path="/Notebooks" element={<Notebooks />}/>
        <Route path="/Consoles" element={<Consoles />}/>
        <Route path="/Monitors" element={<Monitors />}/>
        <Route path="/Headsets" element={<Headsets />}/>
        <Route path="/BuildYourOwnPc" element={<BuildYourOwnPc/>}/>
        <Route path="/Checkout" element={<CheckOut/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      
      
      
      
      </Routes>
      </ShoppingCartProvider>
    </div>
    );
}

export default App;
