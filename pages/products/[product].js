import React from "react";
import {data} from "../../data";
import ProductContainer from "../../containers/Product/product";


const Product = ({product}) => {
    return (
        <ProductContainer product={product}/>
);
};

export default Product;


export const getStaticProps = async (context) => {
    const param = context.params.product;
    const product = data.filter(item => item.id === param)[0];

    return {
        props: {product},
        revalidate:2
    }
};

export const getStaticPaths = async () => {
    return {
        paths:[],
        fallback: 'blocking'
    }
};