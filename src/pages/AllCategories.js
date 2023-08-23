import Categories from "../Components/Categories/Categories";
import ItemDisplayer from "../Components/ItemDisplayer/ItemDisplayer";
import {Link} from "react-router-dom"


function AllCategrories({setShoppingCart}) {
return (
    <div className="page-container container mb-1">
      <div className="category-header">
        <div className='routes-container gap-3'>
          <h3><Link to="/">Home</Link></h3>
          <h4>/</h4>
          <h2>Categories</h2>
        </div>
        </div>
        <h1>All Our Items</h1>
        <Categories/>
        <ItemDisplayer setShoppingCart={setShoppingCart} type="all"/>

    </div>
  )  
}
export default AllCategrories