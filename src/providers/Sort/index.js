import React, {createContext, useState} from "react";
import {data} from "../../consts/data";
import {filterProducts} from "./utils";

export const SortContext = createContext({});

const SortProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(data);
  const [productsToView, setProductsToView] = useState([]);
  const [products, setProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const initializeProductsToView = item => {
      setProductsToView(item);
      setProducts(item);
      handleSortByRelevance();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortByRelevance = () => {
    productsToView.sort((a, b) => {
      return b.dateAdded - a.dateAdded;
    });

    // console.log("Sort by relevance fired");
    handleClose();
  };

  const handleSortByHighToLow = () => {
    productsToView.sort((a, b) => {
      return b.priceCurrent - a.priceCurrent;
    });

    // console.log("Sort by High to Low fired");
    handleClose();
  };

  const handleSortByLowToHigh = () => {
    productsToView.sort((a, b) => {
      return a.priceCurrent - b.priceCurrent;
    });

    // console.log("Sort by low to high fired");
    handleClose();
  };

  const handleFilter = (filter) => {
      setProductsToView(filterProducts(products, filter));

  };

  return (
    <SortContext.Provider
      value={{
        allProducts,
        productsToView,
        anchorEl,
        initializeProductsToView,
        handleClick,
        handleClose,
        handleSortByRelevance,
        handleSortByHighToLow,
        handleSortByLowToHigh,
        handleFilter,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

export default SortProvider;
