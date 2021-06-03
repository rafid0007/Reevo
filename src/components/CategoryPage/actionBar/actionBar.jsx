import React, { useContext } from "react";
import styles from "./actionBar.module.scss";
import SortBox from "../SortBox/sortBox";
import { SortContext } from "../../../providers/Sort";

const ActionBar = ({ backgroundColor = "#fff" }) => {
  const { productsToView } = useContext(SortContext);
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
