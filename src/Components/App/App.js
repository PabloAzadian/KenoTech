
import './App.css';
import Categories from '../Categories/Categories';
import NavBar from "../NavBar/NavBar";
import "../../global.css"
import ItemDisplayer from '../ItemDisplayer/ItemDisplayer';
import { useState } from 'react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const categoryHandler = (category) => {
    setSelectedCategory(category);
  }
  return (
    <div>
      <NavBar/>
      {/* <Categories handleCategory={categoryHandler}/>*/}
      <ItemDisplayer />  
    </div>
    );
}

export default App;
