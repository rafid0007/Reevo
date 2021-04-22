import React, { useEffect, useState } from "react";

import Layout from "../../components/layout/layout/layout";
// import SortBox from "../../components/collectionPage/SortBox/sortBox";
import Button from "@material-ui/core/Button";
import Card from "../../components/common/card/card";
import { data } from "../api/data";

import productPageStyles from "./productPage.module.scss";
import utilityStyles from "../../styles/utility.module.scss";
import { Menu, MenuItem } from "@material-ui/core";
import { Sort } from "@material-ui/icons";

export const getStaticProps = async (context) => {
  const param = context.params.category;

  const products = data.filter((item) => item.categories.includes(param));

  return {
    props: {
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = ["shoes", "clothing", "gears", "men", "women", "kid's"].map(
    (cat) => ({
      params: { category: cat },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

const Products = ({ products }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setProductList(products);
    }
    console.log("initial list");
    console.log(products);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortByRelevence = () => {
    setProductList(products);
    handleClose();
  };

  const handleSortByLatest = () => {
    let newlist = [...productList];

    newlist.sort((a, b) => {
      return b.dateAdded - a.dateAdded;
    });

    setProductList(newlist);

    console.log(newlist);
    handleClose();
  };

  const handleSortByOldest = () => {
    let newlist = [...productList];

    newlist.sort((a, b) => {
      return a.dateAdded - b.dateAdded;
    });

    setProductList(newlist);

    console.log(newlist);
    handleClose();
  };

  return (
    <Layout>
      <div className={productPageStyles.gridOuter}>
        {/************************* Action bar and cards container start **********************/}
        <div>
          {/********* Action bar container *******/}
          <div
            className={`${productPageStyles.actionBar} ${utilityStyles.mbMd}`}
          >
            <p className="">3 products found</p>
            <div className={productPageStyles.grow} />
            <Button onClick={handleClick} startIcon={<Sort />}>
              <h4>Sort by</h4>
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleSortByRelevence}>Relevence</MenuItem>
              <MenuItem onClick={handleSortByLatest}>Latest</MenuItem>
              <MenuItem onClick={handleSortByOldest}>Oldest</MenuItem>
            </Menu>
          </div>

          {/********* cards container *******/}
          <div className={productPageStyles.gridInner}>
            {productList.map((item, i) => (
              <Card key={i} {...item} />
            ))}
          </div>
        </div>

        {/************************* Action bar and cards container end **********************/}

        {/******************************* Filter container start ****************************/}
        <div>
          <div className={productPageStyles.filter}>
            filter {/*will be replaced by filter component*/}
          </div>
        </div>
        {/******************************* Filter container end ****************************/}
      </div>
    </Layout>
  );
};

export default Products;
