import Categories from "../Components/Categories/Categories";
import ImageCarrousel from "../Components/ImageCarrousel/ImageCarrousel";
import ItemDisplayer from "../Components/ItemDisplayer/ItemDisplayer";
import BuildYourOwnPcBanner from "../Components/BuildYourOwnPc/BuildYourOwnPcBanner";

function Home({setShoppingCart}) {
return (
    <>
        <ImageCarrousel/>
        <Categories/>
        
        <ItemDisplayer type="discounted" setShoppingCart={setShoppingCart} inline={true} title="Monthly Sales"/>
        <BuildYourOwnPcBanner/>
        <ItemDisplayer type="new" setShoppingCart={setShoppingCart} inline={true} title="Our New Items"/>
    </>
  )  
}
export default Home