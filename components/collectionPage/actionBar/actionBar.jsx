import React from "react";
import styles from "./actionBar.module.scss";
import SortBox from "../SortBox/sortBox";

const ActionBar = ({backgroundColor = '#fff'}) => {
  return (
    <div className={styles.actionBar} style={{backgroundColor}}>
      <p className="">3 products found</p>
      <div className={styles.grow} />
      <SortBox/>
    </div>
  );
};

export default ActionBar;
