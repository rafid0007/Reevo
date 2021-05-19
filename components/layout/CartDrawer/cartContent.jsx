import React from "react";
import CartItem from "../cartItem/cartItem";

import style from "./cartContent.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const CartContent = () => {

  return (
    <div className={style.cartContent}>
      <div className={style.cartItems}>
          <CartItem/>
      </div>

      <div className={style.cartCheckout}>
        <div className={style.cartTotal}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">৳ 500.00</Typography>
        </div>
        <Button
          color="secondary"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          fullWidth
        >
          Go to Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartContent;
