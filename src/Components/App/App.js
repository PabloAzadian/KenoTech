
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

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  }
  return (
    <div>
       <NavBar/>
      {/*<Categories handleCategory={categoryHandler}/>
      <ItemDisplayer />   */}
      {/* <AllCategrories/> */}
      <Home/>
    </div>
    );
}

export default App;
