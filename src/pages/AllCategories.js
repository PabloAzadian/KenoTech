import Categories from "../Components/Categories/Categories";
import ItemDisplayer from "../Components/ItemDisplayer/ItemDisplayer";

function AllCategrories({setShoppingCart}) {
return (
    <div className="container mb-1">

        <h1>Our Items</h1>
        <Categories/>
        <ItemDisplayer setShoppingCart={setShoppingCart} type="all"/>

    </div>
  )  
}
export default AllCategrories