import React, { useContext } from "react";
import Image from 'next/image';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import cartItemStyles from "./cartItem.module.scss";
import { Typography } from "@material-ui/core";
import { CartContext } from "../../../providers/Cart";

const ArrowStyle = { fontSize: "1.5rem", cursor: "pointer" };

const CartItem = ({item}) => {
  const {name, price, imageUrl, quantity} = item;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <div className={cartItemStyles.cartItem}>
      <div className={cartItemStyles.imgContainer}>
          <Image src={imageUrl} alt={name} layout='fill' objectFit='cover'/>
      </div>
      <div className={cartItemStyles.cartPriceAndTitle}>
        <h5>{name}</h5>
        <h6>৳ {price}</h6>
      </div>
      <div className={cartItemStyles.quantity}>
        <IconButton onClick={() => removeItem(item)}>
          <ArrowBackIosIcon style={ArrowStyle}/>
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton  onClick={() => addItem(item)}>
          <ArrowForwardIosIcon style={ArrowStyle}/>
        </IconButton>
      </div>
      <div className={cartItemStyles.totalPrice}>
        <h4>৳ {price * quantity}</h4>
        <IconButton onClick={() => clearItemFromCart(item)}>
          <DeleteIcon style={{ fontSize: "2rem", cursor: "pointer" }}/>
        </IconButton>
      </div>
    </div>
  );
};

export default CartItem;
