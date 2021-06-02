import React, {useContext, useEffect} from "react";
// components
import ActionBar from "./actionBar/actionBar";
import CardsContainer from "./cardsContainer/cardsContainer";
import Filter from "./filter/filter";
// context
import {SortContex} from "../../providers/Sort";
// style
import styles from "./CategoryPage.module.scss";

const CategoryPage = ({ products }) => {
  const { initializeProductsToView } = useContext(SortContex);

  useEffect(() => {
    // console.log('setting initial products!!!', products);
    initializeProductsToView(products);
  },[products]);

  return (
      <div className={styles.gridOuter}>
        <div>
          <ActionBar/>
          <CardsContainer/>
        </div>
        <div>
          <Filter />
        </div>
      </div>
  );
};

export default CategoryPage;