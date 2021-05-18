import React from 'react';
import CollectionContainer from "../../../containers/Collection/collection";
import SortProvider from "../../../providers/sort/sort.provider";

import { data } from "../../../data";

const CollectionPage = ({products}) => {

  return (
      <SortProvider>
        <CollectionContainer products={products}/>
      </SortProvider>
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
