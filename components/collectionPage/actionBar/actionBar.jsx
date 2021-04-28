import React from "react";
import styles from "./actionBar.module.scss";
import SortBox from "../SortBox/sortBox";

const ActionBar = ({number, backgroundColor = '#fff'}) => {
  return (
    <div className={styles.actionBar} style={{backgroundColor}}>
      <p>{number} products found</p>
      <div className={styles.grow} />
      <SortBox/>
    </div>
  );
};

export default ActionBar;
