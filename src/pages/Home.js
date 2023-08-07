import Categories from "../Components/Categories/Categories";
import ImageCarrousel from "../Components/ImageCarrousel/ImageCarrousel";
import ItemDisplayer from "../Components/ItemDisplayer/ItemDisplayer";

function Home() {
return (
    <>
        <ImageCarrousel/>
        <Categories/>
        
        <ItemDisplayer type="discounted" inline={true} title="This Month's Sales"/>
        <Categories/>
    </>
  )  
}
export default Home