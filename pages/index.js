import Layout from "../components/layout/layout";
import homePageStyles from "./index.module.scss";
import { Grid } from "@material-ui/core";
import Card from "../components/card/card";
import Box from "@material-ui/core/Box";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useState } from "react";
import Carousel from "../components/carousel/carousel";

// const timeout = ms => new Promise(res => setTimeout(res, ms)); // test code

const Index = () => {
  const [products, setProducts] = useState(null);

  useEffect(async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const products = await response.json();
    // await timeout(2000); // test code
    setProducts(products);
    console.log(products); //test code
  },[] );

  return (
    <Layout>
      <div className={homePageStyles.homeContent}>

        {/********************************* Carousal **********************************/}

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

          {/******* Nested Container Start*******/}

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

          {/******* Nested Container End*******/}

          {products ? (
            products.map((item, i) => (
              <Grid key={i} item xs={6} sm={4} md={3} lg={2}>
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

export default Index;
