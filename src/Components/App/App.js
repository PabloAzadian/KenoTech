
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

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [shoppingCart, setShoppingCart] = useState([ItemData[0][0],ItemData[1][3],ItemData[2][2],ItemData[1][1],ItemData[2][2],ItemData[0][0],ItemData[1][1],ItemData[2][2]])

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  }
  return (
    <div>
       <NavBar setShoppingCart={setShoppingCart} shoppingCart={shoppingCart}/>
      {/*<Categories handleCategory={categoryHandler}/>
      <ItemDisplayer />   */}
      {/* <AllCategrories/> */}
      <Home setShoppingCart={setShoppingCart}/>
      {/* <Headsets/> */}
    </div>
    );
}

export default App;
