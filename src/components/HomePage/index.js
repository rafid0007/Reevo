import StartupDialog from "../common/startupDialog";
import homePageStyles from "./HomePage.module.scss";
import CarouselContainer from "./Carousel";
import ProductsHorizontalScroll from "./productsHorizontalScroll/productsHorizontalScroll";

const HomePage = ({ products }) => {
  return (
    <section style={{ width: "100%" }}>
        <CarouselContainer height='60vh'/>

      <div className={homePageStyles.homeContent}>
        <ProductsHorizontalScroll title={"Trending"} itemsArr={products} />
        <ProductsHorizontalScroll title={"Hot Products"} itemsArr={products} />
        <ProductsHorizontalScroll title={"Latest"} itemsArr={products} />
      </div>

      <StartupDialog
          buttonColor='secondary'
          content={"This site is under development. Some of the features may not work. All the data are for test purposes."}/>
    </section>
  );
};

export default HomePage;