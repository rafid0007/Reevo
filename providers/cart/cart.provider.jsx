import React, { createContext, useState, useEffect } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal
} from './cart.utils';

export const CartContext = createContext();

// {
//   hidden: true,
//   toggleHidden: () => {},
//   cartItems: [],
//   addItem: () => {},
//   removeItem: () => {},
//   clearItemFromCart: () => {},
//   cartItemsCount: 0,
//   cartTotal: 0
// }

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
      const data = localStorage.getItem('reevoCartData');
        if (data) {
            setCartItems(JSON.parse(data));
            console.log('got local data')
        }
  },[])

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
    localStorage.setItem('reevoCartData', JSON.stringify(cartItems));
    console.log('set local data')

  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
