import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [filterKey, setFilterKey] = useState("All Items");

  const [showBasket, setShowBasket] = useState(false);

  const [addedToBasket, setAddedToBasket] = useState([]);

  const handleFilter = (category) => {
    setFilterKey(category);
  };

  const addDishToBasket = ({
    id,
    image,
    title,
    composition,
    price,
    quantity,
  }) => {
    const dish = { id, image, title, composition, price, quantity };
    setAddedToBasket((prev) => [...prev, dish]);
  };

  return (
    <MenuContext.Provider
      value={{
        filterKey,
        handleFilter,
        showBasket,
        setShowBasket,
        addedToBasket,
        addDishToBasket,
        setAddedToBasket,        
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
