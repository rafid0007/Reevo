import Layout from "../../components/layout/layout/layout";
import SortBox from "../../components/collectionPage/SortBox/sortBox";
import productPageStyles from './productPage.module.scss';
import Card from "../../components/common/card/card";
import utilityStyles from '../../styles/utility.module.scss';
import Grid from "@material-ui/core/Grid";
import React from "react";


const Products = ({products}) => {
    return (
        <Layout>
            <div className={productPageStyles.gridOuter}>
                {/************************* Action bar and cards container start **********************/}
                <div>
                    {/********* Action bar container *******/}
                    <div className={`${productPageStyles.actionBar} ${utilityStyles.mbMd}`}>
                        <p className="">3 products found</p>
                        <div className={productPageStyles.grow}/>
                        <h4>Sort by</h4>
                        <SortBox/>
                    </div>

                    {/********* cards container *******/}
                    <div className={productPageStyles.gridInner}>
                        {
                            products.map((item, i) => (
                                <Card key={i} {...item}/>
                             ))
                        }
                    </div>

                </div>

                {/************************* Action bar and cards container end **********************/}

                {/******************************* Filter container start ****************************/}
                <div>
                    <div className={productPageStyles.filter}>
                        filter  {/*will be replaced by filter component*/}
                    </div>
                </div>
                {/******************************* Filter container end ****************************/}

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