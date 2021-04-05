import React from 'react';

import {Paper} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DeleteIcon from '@material-ui/icons/Delete';


import cartItemStyles from './cartItem.module.scss';

const CartItem = () => {
    return (
        <div className={cartItemStyles.cartItem}>
            <div className={cartItemStyles.imgContainer}>
                <img src="https://i.ibb.co/zscCfcm/black-tee-1.png" alt="tee shirt"/>
            </div>
            <div className={cartItemStyles.cartPriceAndTitle}>
                <h5>Black Tee shirt with 100% fiber with cotton</h5>
                <h6>৳ 500.00</h6>
            </div>
            <div className={cartItemStyles.quantity}>
                <ArrowBackIosIcon style={{fontSize:'1.6rem', cursor:'pointer'}}/>
                <span>X 1</span>
                <ArrowForwardIosIcon style={{fontSize:'1.6rem', cursor:'pointer'}}/>
            </div>
            <div className={cartItemStyles.totalPrice}>
                <h4>৳ 500.00</h4>
                <DeleteIcon style={{fontSize:'2rem', cursor:'pointer'}}/>
            </div>
        </div>
    );
};

export default CartItem;