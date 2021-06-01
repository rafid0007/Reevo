import React, { createContext, useState, useEffect } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal,
} from "./cart.utils";
import {cartItemConst} from "../../consts/localstorage";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  //  temp
  const [onceRendered, setOnceRendered] = useState(true);
  const toggleOnceRendered = () => {
    setOnceRendered((onceRendered) => !onceRendered);
  };
  //
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    const data = localStorage.getItem(cartItemConst);
    if (data) {
      setCartItems(JSON.parse(data));
      // console.log("got local data");
    }
  }, []);

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
    localStorage.setItem(cartItemConst, JSON.stringify(cartItems));
    // console.log("set local data");
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        //  temp
        onceRendered,
        toggleOnceRendered,
        //
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
