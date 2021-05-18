import React, {useContext} from "react";
import Card from "../../common/card/card";

import styles from './cardsContainer.module.scss';
import {SortContex} from "../../../providers/sort/sort.provider";

const CardsContainer = () => {

  const {productsToView} = useContext(SortContex);

  return (
    <div className={styles.gridInner}>
      {productsToView.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default CardsContainer;
