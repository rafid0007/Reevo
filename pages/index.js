import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CircularProgress from "@material-ui/core/CircularProgress";


import Layout from "../components/layout/layout/layout";
import Card from "../components/common/card/card";
import Carousel from "../components/homePage/carousel/carousel";

import homePageStyles from "./index.module.scss";
import ProductsHorizontalScroll
    from "../components/homePage/productsHorizontalScroll/productsHorizontalScroll";

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
        {/********************************* HomePage Content Grid **********************************/}

        {/******* Main Container Start *******/}
        {/*<Grid*/}
        {/*  container*/}
        {/*  spacing={2}*/}
        {/*  component={Box}*/}
        {/*  mt={2}*/}
        {/*  aria-describedby="spinner"*/}
        {/*  aria-busy="true"*/}
        {/*>*/}

        {/*  /!******* Nested Container Grid Start*******!/*/}

        {/*  <Grid*/}
        {/*    container*/}
        {/*    justify="space-between"*/}
        {/*    component={Box}*/}
        {/*    py={3}*/}
        {/*    px={1}*/}
        {/*    mt={4}*/}
        {/*  >*/}
        {/*    <h2>Trending</h2>*/}
        {/*    <Box display={"flex"} alignItems={"center"}>*/}
        {/*      <h4>See All &nbsp;</h4>*/}
        {/*      <ArrowBackIosIcon style={{ fontSize: 14 }} />*/}
        {/*      <ArrowForwardIosIcon style={{ fontSize: 14 }} />*/}
        {/*    </Box>*/}
        {/*  </Grid>*/}


        {/*  /!******* Nested Container Grid End*******!/*/}

        {/*  <div>*/}
        {/*  {*/}
        {/*      products ? (*/}
        {/*          products.map((item, i) => (*/}
        {/*              <div key={i}>*/}
        {/*                  <Card {...item} />*/}
        {/*              </div>*/}
        {/*          ))*/}
        {/*      ) : (*/}
        {/*          <CircularProgress*/}
        {/*              id="spinner"*/}
        {/*              color="secondary"*/}
        {/*              size="8rem"*/}
        {/*              style={{ margin: `0 auto` }}*/}
        {/*          />*/}
        {/*      )*/}
        {/*  }*/}
        {/*  </div>*/}
        {/*</Grid>*/}
        {/******* Main Container End *******/}

      </section>
    </Layout>
  );
};

export const getStaticProps = async (context) => {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();

    return {
        props:{
            products
        },
        revalidate: 3600   //add revalidate before deploying to production
    }
};

export default Index;
