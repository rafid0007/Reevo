import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CircularProgress from "@material-ui/core/CircularProgress";


import Layout from "../components/layout/layout";
import Card from "../components/card/card";
import Carousel from "../components/carousel/carousel";

import homePageStyles from "./index.module.scss";

const Index = ({products}) => {

  return (
    <Layout>
      <div className={homePageStyles.homeContent}>

        {/********************************* Carousal Component**********************************/}

        <Carousel height={300}/>

        {/********************************* HomePage Content Grid **********************************/}

        {/******* Main Container Start*******/}
        <Grid
          container
          spacing={2}
          component={Box}
          mt={2}
          aria-describedby="spinner"
          aria-busy="true"
        >

          {/******* Nested Container Grid Start*******/}

          <Grid
            container
            justify="space-between"
            component={Box}
            py={3}
            px={1}
            mt={4}
          >
            <h2>Trending</h2>
            <Box display={"flex"} alignItems={"center"}>
              <h4>See All &nbsp;</h4>
              <ArrowBackIosIcon style={{ fontSize: 14 }} />
              <ArrowForwardIosIcon style={{ fontSize: 14 }} />
            </Box>
          </Grid>

          {/******* Nested Container Grid End*******/}

          {products ? (
              products.map((item, i) => (
                  <Grid key={i} item xs={6} sm={4} md={3} lg={3}>
                    <Card {...item} />
                  </Grid>
              ))
          ) : (
              <CircularProgress
                  id="spinner"
                  color="secondary"
                  size="8rem"
                  style={{ margin: `0 auto` }}
              />
          )}
        </Grid>

        {/******* Main Container End *******/}

      </div>
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
