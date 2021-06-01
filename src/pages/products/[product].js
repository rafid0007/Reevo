import React from "react";
import ProductPage from "../../components/ProductPage";
import Layout from "../../components/Layout";
import { data } from "../../consts/data";

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const param = context.params.product;
  const product = data.filter((item) => item.id === param)[0];

  return {
    props: { product },
    revalidate: 2,
  };
};

const Product = ({ product }) => {
  return (
    <Layout>
      <ProductPage product={product} />
    </Layout>
  );
};

export default Product;
