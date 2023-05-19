import React, { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [filterKey, setFilterKey] = useState("all");
  const [isOpenBasket, setOpenBasket] = useState(false);
  const [addDish, setAddDish] = useState([]);

  const handleFilter = (type) => {
    setFilterKey(type);
  };

  const handleOpenBasket = () => {
    setOpenBasket((prev) => !prev);
  };

  const handleAddDish = (myDish) => {
    setAddDish((prev) => [...prev, myDish]);
  };

  return (
    <MenuContext.Provider
      value={{
        filterKey,
        handleFilter,
        isOpenBasket,
        handleOpenBasket,
        addDish,
        handleAddDish,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
