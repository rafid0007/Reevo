import Layout from "../components/layout/layout/layout";
import Carousel from "../components/homePage/carousel/carousel";

import homePageStyles from "./index.module.scss";
import ProductsHorizontalScroll from "../components/homePage/productsHorizontalScroll/productsHorizontalScroll";

export const getStaticProps = async (context) => {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();
    return {
        props:{products},
        revalidate: 3600
    }
};

const Index = ({products}) => {
  return (
    <Layout>
      <section style={{width:'100%'}}>

        <Carousel height={300}/>    {/******************** Carousal Component ********************/}

        <div className={homePageStyles.homeContent}>
            <ProductsHorizontalScroll title={'Trending'} itemsArr={products}/>
            <ProductsHorizontalScroll title={'Hot Products'} itemsArr={products}/>
            <ProductsHorizontalScroll title={'Latest'} itemsArr={products}/>
        </div>

      </section>
    </Layout>
  );
};

export default Index;