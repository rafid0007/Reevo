import React, {useContext, useEffect} from "react";
import Layout from "../../components/layout/layout/layout";
import ActionBar from "../../components/collectionPage/actionBar/actionBar";
import CardsContainer from "../../components/collectionPage/cardsContainer/cardsContainer";
import Filter from "../../components/collectionPage/filter/filter";

import styles from "./collection.module.scss";
import {SortContex} from "../../providers/sort/sort.provider";

const Collection = ({ products }) => {

  const {initializeProductsToView } = useContext(SortContex);
  useEffect(() => {
    console.log('setting initial products!!!', products);
    initializeProductsToView(products);
  },[products])

  return (
    <Layout>
      <div className={styles.gridOuter}>
        <div>
          <ActionBar/>
          <CardsContainer/>
        </div>

        <div>
          <Filter />
        </div>
      </div>
    </Layout>
  );
};

export default Collection;