
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

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([])

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  }
  return (
    <div>
       <NavBar setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}/>
       <Routes>
        <Route path="/" element={<Home setShoppingCart={setShoppingCart}/>}/>
        <Route path="/all-categories" element={<AllCategrories setShoppingCart={setShoppingCart}/>}/>
        <Route path="/Desktops" element={<Computers setShoppingCart={setShoppingCart}/>}/>
        <Route path="/Notebooks" element={<Notebooks setShoppingCart={setShoppingCart}/>}/>
        <Route path="/Consoles" element={<Consoles setShoppingCart={setShoppingCart}/>}/>
        <Route path="/Monitors" element={<Monitors setShoppingCart={setShoppingCart}/>}/>
        <Route path="/Headsets" element={<Headsets setShoppingCart={setShoppingCart}/>}/>
        <Route path="/BuildYourOwnPc" element={<BuildYourOwnPc/>}/>
        <Route path="/Checkout" element={<CheckOut/>}/>
      
      
      
      
      </Routes>
    </div>
    );
}

export default App;
