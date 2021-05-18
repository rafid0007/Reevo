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
  const param1 = context.params.category;
  const param2 = context.params.subCategory;

  const products = data.filter((item) => item.categories.includes(param1) && item.categories.includes(param2));

  return {
    props: {
      products,
    },
  };
};

export const getStaticPaths = async () => {
  const categoryArray = ["shoes", "clothing", "gears", "men", "women", "kid's"];
  const paths = [];

  categoryArray.forEach(cat => {
    categoryArray.forEach(cat2 => {
      if(cat !== cat2){
        paths.push({params:{category: cat, subCategory: cat2}});
      }
    })
  });

  return {
    paths,
    fallback: false,
  };
};