import React from "react";
import Layout from "../../components/layout/layout/layout";
import ActionBar from "../../components/collectionPage/actionBar/actionBar";
import CardsContainer from "../../components/collectionPage/cardsContainer/cardsContainer";
import Filter from "../../components/collectionPage/filter/filter";

import styles from "./collection.module.scss";

const Collection = ({ products }) => {

  return (
    <Layout>
      <div className={styles.gridOuter}>
        <div>
          <ActionBar number={products.length}/>
          <CardsContainer cardsArray={products} />
        </div>

        <div>
          <Filter />
        </div>
      </div>
    </Layout>
  );
};

export default Collection;