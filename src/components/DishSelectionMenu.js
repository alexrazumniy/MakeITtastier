import { useState, useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import chicken from "../assets/dish_select_menu/chicken.png";
import burger from "../assets/dish_select_menu/burger.png";
import pizza from "../assets/dish_select_menu/pizza.png";
import salads from "../assets/dish_select_menu/salads.png";
import donut from "../assets/dish_select_menu/donut.png";
import drinks from "../assets/dish_select_menu/drinks.png";

export const menuItems = [
  { category: "All Items", icon: chicken },
  { category: "Burgers", icon: burger },
  { category: "Pizza", icon: pizza },
  { category: "Salads", icon: salads },
  { category: "Donuts", icon: donut },
  { category: "Drinks", icon: drinks },
];

const DishSelectionMenu = () => {
  const [selected, setSelected] = useState(menuItems[0]);
  const { handleFilter } = useContext(MenuContext);

  const handleClick = (category) => {
    setSelected(menuItems.find((x) => x.category === category));
    handleFilter(category);
  };

  return (
    <div>
      <nav className="dish_select_menu">
        <ul className="dish_select_menu__list">
          {menuItems.map(({ category, icon }) => (
            <li
              key={category}
              className={
                selected.category === category
                  ? "dish_select_menu__item dish_select_menu__item-active"
                  : "dish_select_menu__item"
              }
              onClick={() => handleClick(category)}
            >
              <div className="dish_select_menu__item-icon">
                <img src={icon} alt="dish_group" />
              </div>
              <p className="dish_select_menu__item-title">{category}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DishSelectionMenu;
