import Layout from "../components/layout/layout/layout";
import Carousel from "../components/homePage/carousel/carousel";

import homePageStyles from "./index.module.scss";
import ProductsHorizontalScroll from "../components/homePage/productsHorizontalScroll/productsHorizontalScroll";
import {data} from "../data";

export const getStaticProps = async (context) => {
    const products = data;
    return {
        props:{products},
        revalidate: 3600
    }
};

const Index = ({products}) => {
  return (
    <Layout>
      <section style={{width:'100%'}}>

        <Carousel height={'25vw'}/>    {/******************** Carousal Component ********************/}

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