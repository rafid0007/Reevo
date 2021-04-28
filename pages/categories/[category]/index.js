import React from 'react';
import CollectionContainer from "../../../containers/Collection/collection";
import { data } from "../../api/data";

const CollectionPage = ({products}) => {
  return (
      <CollectionContainer products={products}/>
  );
};

export default CollectionPage;


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
      params: { category: cat},

    })
  );

  return {
    paths,
    fallback: false,
  };
};