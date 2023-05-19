import React, { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [filterKey, setFilterKey] = useState("all");
  const [addDish, setAddDish] = useState([]);
  const [showBasket, setShowBasket] = useState(false);
	const [basketItems, setBasketItems] = useState([]);

  const handleFilter = (type) => {
    setFilterKey(type);
  };

  const handleAddDish = (myDish) => {
    setAddDish((prev) => [...prev, myDish]);
  };

  return (
    <MenuContext.Provider
      value={{
        filterKey,
        handleFilter,
        showBasket,
        setShowBasket,
        addDish,
        handleAddDish,
        basketItems,
        setBasketItems,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
