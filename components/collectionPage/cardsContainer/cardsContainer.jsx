import React from "react";
import Card from "../../common/card/card";

import styles from './cardsContainer.module.scss';

const CardsContainer = ({cardsArray}) => {
  return (
    <div className={styles.gridInner}>
      {cardsArray.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default CardsContainer;
