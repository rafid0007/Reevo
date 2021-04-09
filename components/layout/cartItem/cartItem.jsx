import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import cartItemStyles from "./cartItem.module.scss";
import { Typography } from "@material-ui/core";

const CartItem = ({
  itemId,
  productImg,
  productName,
  productPriceRate,
  productQuantity,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
}) => {
  return (
    <div className={cartItemStyles.cartItem}>
      <div className={cartItemStyles.imgContainer}>
        <img src={productImg} alt={productName} />
      </div>
      <div className={cartItemStyles.cartPriceAndTitle}>
        <h5>{productName}</h5>
        <h6>৳ {productPriceRate}.00</h6>
      </div>
      <div className={cartItemStyles.quantity}>
        <IconButton onClick={() => decrementQuantity(itemId)}>
          <ArrowBackIosIcon style={{ fontSize: "1.6rem", cursor: "pointer" }} />
        </IconButton>
        <Typography>{productQuantity}</Typography>
        <IconButton onClick={() => incrementQuantity(itemId)}>
          <ArrowForwardIosIcon
            style={{ fontSize: "1.6rem", cursor: "pointer" }}
          />
        </IconButton>
      </div>
      <div className={cartItemStyles.totalPrice}>
        <h4>৳ {productPriceRate * productQuantity}.00</h4>
        <IconButton onClick={() => deleteItem(itemId)}>
          <DeleteIcon style={{ fontSize: "2rem", cursor: "pointer" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
