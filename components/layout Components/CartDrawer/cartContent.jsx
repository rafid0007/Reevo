import React from 'react';
import CartItem from "../cartItem/cartItem";

import style from './cartContent.module.scss';
import  Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const cartItems = [
    {
      productImg: "https://i.ibb.co/zscCfcm/black-tee-1.png",
      productName: "Black Tee Shirt with 100% fiber with cotton",
      productPriceRate:500,
      productQuantity:1,
    },
    {
      productImg: "https://i.ibb.co/zscCfcm/black-tee-1.png",
      productName: "Black Tee Shirt with 100% fiber with cotton",
      productPriceRate:500,
      productQuantity:3,
    },
    {
      productImg: "https://i.ibb.co/zscCfcm/black-tee-1.png",
      productName: "Black Tee Shirt with 100% fiber with cotton",
      productPriceRate:500,
      productQuantity:4,
    },
  ];

const CartContent = () => {
    return (
        <div className={style.cartContent}>

            <div className={style.cartItems}>
            {
                [1,2,3,4,5].map((item,i) => (
                    <CartItem/>
                ))
            }
            </div>

            <div className={style.cartCheckout}>
                <div className={style.cartTotal}>
                    <Typography variant='h6'>Total</Typography>
                    <Typography variant='h6'>৳ 1300.00</Typography>
                </div>
                <Button color="secondary" variant="contained" startIcon={<ShoppingCartIcon/>} fullWidth>
                    Go to Checkout
                </Button>
            </div>
        </div>

    );
};

export default CartContent;

