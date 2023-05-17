import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [filterKey, setFilterKey] = useState("all");

  const handleFilter = (type) => {
    setFilterKey(type);
  };

  return (
    <MenuContext.Provider value={{ filterKey, handleFilter }}>
      {children}
    </MenuContext.Provider>
  );
};
