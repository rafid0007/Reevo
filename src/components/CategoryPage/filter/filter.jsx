import React from 'react';
import styles from "./filter.module.scss";

const Filter = ({backgroundColor = '#fff'}) => {
    return (
        <div className={styles.filter} style={{backgroundColor}}>
            Filter component
        </div>
    );
};

export default Filter;