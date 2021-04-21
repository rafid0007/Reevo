import React from "react";

import Layout from "../../components/layout/layout/layout";
import SortBox from "../../components/collectionPage/SortBox/sortBox";
import Card from "../../components/common/card/card";
import {data} from "../api/data";

import productPageStyles from './productPage.module.scss';
import utilityStyles from '../../styles/utility.module.scss';

export const getStaticProps = async (context) => {
    const param = context.params.category;

    const products = data.filter(item => item.categories.includes(param));

    return {
        props:{
            products
        }
    }
};

export const getStaticPaths = async () => {
    const paths = ['shoes','clothing','gears','men','women',"kid's"].map((cat) => ({
        params:{category:cat}
    }));

    return {
        paths,
        fallback:false
    }
};

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

export default Products;