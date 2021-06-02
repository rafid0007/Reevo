import Layout from "../components/Layout";
import {data} from "../consts/data";
import HomePage from "../components/HomePage";
import {useContext, useEffect} from "react";
import {CartContext} from "../providers/Cart";

export const getStaticProps = async (context) => {
    const products = data;

    return {
        props:{products},
        revalidate: 3600
    }
};

const Home = ({products}) => {
  return (
    <Layout>
        <HomePage products={products}/>
    </Layout>
  );
};

export default Home;