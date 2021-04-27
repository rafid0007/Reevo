import Layout from "../../components/layout/layout/layout";
import ActionBar from "../../components/collectionPage/actionBar/actionBar";
import { data } from "../api/data";

import productPageStyles from "./productPage.module.scss";
import CardsContainer from "../../components/collectionPage/cardsContainer/cardsContainer";
import Filter from "../../components/collectionPage/filter/filter";

const Products = ({ products }) => {

  return (
    <Layout>
      <div className={productPageStyles.gridOuter}>
        <div>
          <ActionBar />
          <CardsContainer cardsArray={products} />
        </div>

        <div>
          <Filter />
        </div>
      </div>
    </Layout>
  );
};

export default Products;


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
      params: { category: cat },
    })
  );

  return {
    paths,
    fallback: false,
  };
};