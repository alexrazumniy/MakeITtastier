import { useState, useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import chicken from "../assets/food_select_menu/chicken.png";
import burger from "../assets/food_select_menu/burger.png";
import pizza from "../assets/food_select_menu/pizza.png";
import salads from "../assets/food_select_menu/salads.png";
import donut from "../assets/food_select_menu/donut.png";
import drinks from "../assets/food_select_menu/drinks.png";

const list = [
  { title: "All ", name: "all", icon: chicken },
  { title: "Burgers", name: "burger", icon: burger },
  { title: "Pizza", name: "pizza", icon: pizza },
  { title: "Salads", name: "salad", icon: salads },
  { title: "Donuts", name: "donut", icon: donut },
  { title: "Drinks", name: "drink", icon: drinks },
];

const DishSelectionMenu = () => {
  const [selected, setSelected] = useState(list[0]);
  const { handleFilter } = useContext(MenuContext);

  const handleClick = (name) => {
    setSelected(list.find((x) => x.name === name));
    handleFilter(name);
  };

  return (
    <div>
      <nav className="food_select_menu">
        <ul className="food_select_menu__list">
          {list.map(({ title, name, icon }) => (
            <li
              key={name}
              className={
                selected.name === name
                  ? "food_select_menu__item food_select_menu__item-active"
                  : "food_select_menu__item"
              }
              onClick={() => handleClick(name)}
            >
              <div className="food_select_menu__item-icon">
                <img src={icon} alt="food_group" />
              </div>
              <p className="food_select_menu__item-title">{title}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DishSelectionMenu;
