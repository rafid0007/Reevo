import React, {createContext, useState} from "react";

export const SortContex = createContext({});

const SortProvider = ({ children }) => {
  const [productsToView, setProductsToView] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const initializeProductsToView = item => {
    setProductsToView(item);
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

  return (
    <SortContex.Provider
      value={{
        productsToView,
        anchorEl,
        initializeProductsToView,
        handleClick,
        handleClose,
        handleSortByRelevance,
        handleSortByHighToLow,
        handleSortByLowToHigh,
      }}
    >
      {children}
    </SortContex.Provider>
  );
};

export default SortProvider;
