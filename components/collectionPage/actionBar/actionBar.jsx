import React, { useContext } from "react";
import styles from "./actionBar.module.scss";
import SortBox from "../SortBox/sortBox";
import { SortContex } from "../../../providers/sort/sort.provider";

const ActionBar = ({ backgroundColor = "#fff" }) => {
  const { productsToView } = useContext(SortContex);
  const number = productsToView.length;

  return (
    <div className={styles.actionBar} style={{ backgroundColor }}>
      <p>{number} products found</p>
      <div className={styles.grow} />
      <SortBox />
    </div>
  );
};

export default ActionBar;
