import React, { useContext } from "react";
import CartItem from "../cartItem/cartItem";

import style from "./cartContent.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { CartContext } from "../../../providers/Cart";

const CartContent = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className={style.cartContent}>
      <div className={style.cartItems}>
          {
              cartItems.map(item => <CartItem key={item.id} item={item}/>)
          }
      </div>

      <div className={style.cartCheckout}>
        <div className={style.cartTotal}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">৳ {cartTotal}.00</Typography>
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
