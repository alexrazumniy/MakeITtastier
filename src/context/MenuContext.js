import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [filterKey, setFilterKey] = useState("all");

  const [showBasket, setShowBasket] = useState(false);

  const [addedToBasket, setAddedToBasket] = useState([]);
  
  const [selectedDish, setSelectedDish] = useState([]);


  const handleFilter = (category) => {
    setFilterKey(category);
  };

  const addDishToBasket = (dish) => {
    setAddedToBasket((prev) => [...prev, dish]);
  };

  const removeDishFromBasket = (id) => {
    addDishToBasket(addedToBasket.filter((item) => item.id !== id));
    setSelectedDish(selectedDish.filter((itemId) => itemId !== id));
  };

  const increaseDishAmount = (id) => {
    addDishToBasket((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1,
          };
        }
        return item;
      })
    );
  };

  const decreaseDishAmount = (id) => {
    addDishToBasket((prev) =>
      prev.map((item) => {
        if (item.id === id && item.amount !== 0) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      })
    );
  };

  return (
    <MenuContext.Provider
      value={{
        filterKey,
        handleFilter,
        showBasket,
        setShowBasket,
        selectedDish,
        setSelectedDish,
        addedToBasket,
        addDishToBasket,
        setAddedToBasket,
        removeDishFromBasket,
        increaseDishAmount,
        decreaseDishAmount,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
