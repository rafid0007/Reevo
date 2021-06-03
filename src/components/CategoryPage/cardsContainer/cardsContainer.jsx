import React, { useContext } from "react";
import Card from "../../common/Card";
import { SortContext } from "../../../providers/Sort";
import styles from "./cardsContainer.module.scss";

const CardsContainer = () => {
  const { productsToView } = useContext(SortContext);

  return (
    <div className={styles.gridInner}>
      {productsToView.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default CardsContainer;
