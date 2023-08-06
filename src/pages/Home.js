import Categories from "../Components/Categories/Categories";
import ImageCarrousel from "../Components/ImageCarrousel/ImageCarrousel";
import ItemDisplayer from "../Components/ItemDisplayer/ItemDisplayer";

function Home() {
return (
    <>
        <ImageCarrousel/>
        <Categories/>
        <ItemDisplayer type="discounted"/>
    </>
  )  
}
export default Home