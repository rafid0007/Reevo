import React, {useEffect, useState} from "react";
import CategoryPage from "../components/CategoryPage";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { data } from "../consts/data";
import {CircularProgress} from "@material-ui/core";

const Category = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const query = router.query.keyword;

  useEffect(() => {
    if (query) {
      setProducts( data.filter(item => item.title.toLowerCase().includes(query.toLowerCase())) )
    }
  },[query, data])

  return (
    <Layout>
      {
       products? <CategoryPage products={products}  /> : <CircularProgress color='secondary'/>
      }
    </Layout>
  );
};

export default Category;
