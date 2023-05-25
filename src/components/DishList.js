import { useContext, useRef, useState, useCallback, useEffect } from "react";
import { MenuContext } from "../context/MenuContext";
import DishCard from "./DishCard";
import filter from "../assets/foodmenu/filter.svg";
import { AllDishesMenu } from "./AllDishesMenu";

const Dishlist = () => {
  const { filterKey } = useContext(MenuContext);

  const scrollRef = useRef(null);
    const scrollToTop = useCallback(() => {    
      scrollRef.current.scrollTop = 0;    
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [filterKey, scrollToTop]);

  const filteredData =
    filterKey === "All Items"
      ? AllDishesMenu
      : AllDishesMenu.filter((dish) => dish.category === filterKey);

  return (
    <div className="dish_items">
      <p className="dish_items-title">{filterKey}</p>
      <img className="dish_items-filter-icon" src={filter} alt="food_group" />
      <div className="dish_list" ref={scrollRef}>
        {filteredData.map((dish) => (
          <DishCard
            key={dish.id}
            title={dish.title}
            composition={dish.composition}
            image={dish.image}
            price={dish.price}
            category={dish.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Dishlist;
