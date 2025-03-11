
import MyCarousel from "./components/Carousel"
import Offers from "./components/Offers";
import CategoryList from "./components/categorylist/CategoryList";

const Home= () =>  {
  return (
    <div style={{backgroundColor:"whitesmoke", textAlign:"center"}}>
   <MyCarousel/>
   <CategoryList/>
   <Offers/>
    </div>
  );
}
export default Home;