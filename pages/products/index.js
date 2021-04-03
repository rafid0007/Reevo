import Layout from "../../components/layout/layout";
import SortBox from "../../components/SortBox/sortBox";
import productPageStyles from './productPage.module.scss';
import Card from "../../components/card/card";
import utilityStyles from '../../styles/utility.module.scss';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import React from "react";


const Products = ({products}) => {
    return (
        <Layout>
            <div className={productPageStyles.gridOuter}>
                <div>
                    <div className={`${productPageStyles.actionBar} ${utilityStyles.mbMd}`}>
                        <p className="">3 products found</p>
                        <div className={productPageStyles.grow}/>
                        <h4>Sort by</h4>
                        <SortBox/>
                    </div>
                    <Grid container spacing={2}>
                        {
                            products.map((item, i) => (<Grid item xs={6} sm={6} md={4} lg={3} key={i}>
                                <Card {...item}/>
                            </Grid> ))
                        }
                    </Grid>
                </div>
                <div>
                    <div className={productPageStyles.filter}>
                        filter  {/*will be replaced by filter component*/}
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export const getStaticProps = async (context) => {
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();

    return {
        props:{
            products
        }
    }
};

export default Products;