import Categories from "../Components/Categories/Categories";
import ImageCarrousel from "../Components/ImageCarrousel/ImageCarrousel";
import ItemDisplayer from "../Components/ItemDisplayer/ItemDisplayer";
import BuildYourOwnPcBanner from "../Components/BuildYourOwnPc/BuildYourOwnPcBanner";

function Home() {
return (
    <>
        <ImageCarrousel/>
        <Categories/>
        
        <ItemDisplayer type="discounted" inline={true} title="Monthly Sales"/>
        <BuildYourOwnPcBanner/>
        <ItemDisplayer type="new"  inline={true} title="Our New Items"/>
    </>
  )  
}
export default Home