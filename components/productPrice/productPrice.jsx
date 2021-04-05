import React from 'react';
import priceStyles from "./productPrice.module.scss";

const ProductPrice = ({price,priceBefore}) => {
    return (
        <div>
            <div className={priceStyles.priceBefore}>
                <span>৳ </span >
                <span>{parseFloat(priceBefore).toFixed(2)}</span>
            </div>
            <div className={priceStyles.priceNow}>
                <span style={{fontSize:'1.8rem',fontWeight:400}}>৳ </span >
                <span>{parseFloat(price).toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ProductPrice;