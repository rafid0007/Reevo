import React from "react";
import CategoryPage from "../../../components/CategoryPage";
import SortProvider from "../../../providers/Sort";
import Layout from "../../../components/Layout";
import { data } from "../../../consts/data";

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

export const getStaticProps = async (context) => {
  const param = context.params.category;
  const products = data.filter((item) => item.categories.includes(param));

  return {
    props: {
      products,
    },
  };
};

const Category = ({ products }) => (
  <Layout>
    <SortProvider>
      <CategoryPage products={products} />
    </SortProvider>
  </Layout>
);

export default Category;
