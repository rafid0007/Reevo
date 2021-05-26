import React, { useContext } from "react";
import Card from "../../common/card/card";
import { SortContex } from "../../../providers/sort/sort.provider";
import styles from "./cardsContainer.module.scss";

const CardsContainer = () => {
  const { productsToView } = useContext(SortContex);

  return (
    <div className={styles.gridInner}>
      {productsToView.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default CardsContainer;
