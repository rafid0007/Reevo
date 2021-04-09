import React, { useEffect, useState } from "react";
import CartItem from "../cartItem/cartItem";

import style from "./cartContent.module.scss";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { cartItemConst } from "../../../consts/localstorage";

const dummyCartItems = [
  {
    cartItemId: "1",
    productImg: "https://i.ibb.co/zscCfcm/black-tee-1.png",
    productName: "Black Tee Shirt with 100% fiber with cotton",
    productPriceRate: 500,
    productQuantity: 6,
  },
  {
    cartItemId: "2",
    productImg: "https://i.ibb.co/zscCfcm/black-tee-1.png",
    productName: "Black Tee Shirt with 100% fiber with cotton",
    productPriceRate: 300,
    productQuantity: 3,
  },
  {
    cartItemId: "3",
    productImg: "https://i.ibb.co/zscCfcm/black-tee-1.png",
    productName: "Black Tee Shirt with 100% fiber with cotton",
    productPriceRate: 360,
    productQuantity: 4,
  },
];

const CartContent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  //   loads cart item data from localstorage to component state
  useEffect(() => {
    let cItems = JSON.parse(localStorage.getItem(cartItemConst));
    if (cItems && cItems.length > 0) {
      setCartItems(cItems);
    } else {
      localStorage.setItem(cartItemConst, JSON.stringify(dummyCartItems));
    }
  }, []);

  //   updates total price
  const updateTotal = () => {
    let total = 0;
    for (let i in cartItems) {
      total += cartItems[i].productPriceRate * cartItems[i].productQuantity;
    }
    setTotalPrice(total);
  };
  useEffect(() => {
    updateTotal();
  }, [cartItems]);

  const incrementQuantity = (itemId) => {
    let index = cartItems.findIndex((item) => item.cartItemId == itemId);
    if (index === -1) {
      return;
    } else {
      const newList = [
        ...cartItems.slice(0, index),
        Object.assign({}, cartItems[index], {
          productQuantity: cartItems[index].productQuantity + 1,
        }),
        ...cartItems.slice(index + 1),
      ];
      setCartItems(newList);
      localStorage.setItem(cartItemConst, JSON.stringify(newList));
    }
  };

  const decrementQuantity = (itemId) => {
    let index = cartItems.findIndex((item) => item.cartItemId == itemId);
    if (index === -1 || cartItems[index].productQuantity === 1) {
      return;
    } else {
      const newList = [
        ...cartItems.slice(0, index),
        Object.assign({}, cartItems[index], {
          productQuantity: cartItems[index].productQuantity - 1,
        }),
        ...cartItems.slice(index + 1),
      ];
      setCartItems(newList);
      localStorage.setItem(cartItemConst, JSON.stringify(newList));
    }
  };

  const deleteItem = (itemId) => {
    const newList = cartItems.filter((item) => item.cartItemId !== itemId);
    if (newList) {
      setCartItems(newList);
      localStorage.setItem(cartItemConst, JSON.stringify(newList));
    }
  };

  return (
    <div className={style.cartContent}>
      <div className={style.cartItems}>
        {cartItems.map((item, i) => (
          <CartItem
            key={item.cartItemId}
            itemId={item.cartItemId}
            productImg={item.productImg}
            productName={item.productName}
            productPriceRate={item.productPriceRate}
            productQuantity={item.productQuantity}
            incrementQuantity={(itemId) => {
              incrementQuantity(itemId);
            }}
            decrementQuantity={(itemId) => {
              decrementQuantity(itemId);
            }}
            deleteItem={(itemId) => {
              deleteItem(itemId);
            }}
          />
        ))}
      </div>

      <div className={style.cartCheckout}>
        <div className={style.cartTotal}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">৳ {totalPrice}.00</Typography>
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
