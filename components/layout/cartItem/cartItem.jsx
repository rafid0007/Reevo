import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import cartItemStyles from "./cartItem.module.scss";
import { Typography } from "@material-ui/core";

const ArrowStyle = { fontSize: "1.5rem", cursor: "pointer" };

const CartItem = () => {
  return (
    <div className={cartItemStyles.cartItem}>
      <div className={cartItemStyles.imgContainer}>
        <img src="https://i.ibb.co/Tm0bpM8/jackets.png" alt='cart image' />
      </div>
      <div className={cartItemStyles.cartPriceAndTitle}>
        <h5>cart item</h5>
        <h6>৳ 500</h6>
      </div>
      <div className={cartItemStyles.quantity}>
        <IconButton>
          <ArrowBackIosIcon style={ArrowStyle} />
        </IconButton>
        <Typography>2</Typography>
        <IconButton>
          <ArrowForwardIosIcon
            style={ArrowStyle}
          />
        </IconButton>
      </div>
      <div className={cartItemStyles.totalPrice}>
        <h4>৳ 500</h4>
        <IconButton>
          <DeleteIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
