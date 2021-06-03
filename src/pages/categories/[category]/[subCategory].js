import React from "react";
import CategoryPage from "../../../components/CategoryPage";
import SortProvider from "../../../providers/Sort";
import { data } from "../../../consts/data";
import Layout from "../../../components/Layout";

export const getStaticPaths = async () => {
  const categoryArray = ["shoes", "clothing", "gears", "men", "women", "kid's"];
  const paths = [];

  categoryArray.forEach((cat) => {
    categoryArray.forEach((cat2) => {
      if (cat !== cat2) {
        paths.push({ params: { category: cat, subCategory: cat2 } });
      }
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const param1 = context.params.category;
  const param2 = context.params.subCategory;
  const products = data.filter(
    (item) =>
      item.categories.includes(param1) && item.categories.includes(param2)
  );

  return {
    props: {
      products,
    },
  };
};

const SubCategory = ({ products }) => (
  <Layout>
      <CategoryPage products={products} />
  </Layout>
);

export default SubCategory;
