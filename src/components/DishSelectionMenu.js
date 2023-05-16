import { useState } from "react";
// import FoodSelectMenuItem from "./FoodSelectionMenuItem";
import chicken from "../assets/food_select_menu/chicken.png";
import burger from "../assets/food_select_menu/burger.png";
import pizza from "../assets/food_select_menu/pizza.png";
import salads from "../assets/food_select_menu/salads.png";
import donut from "../assets/food_select_menu/donut.png";
import drinks from "../assets/food_select_menu/drinks.png";

const list = [
  { id: 1, title: "All", name: "chicken", icon: chicken },
  { id: 2, title: "Burger", name: "burger", icon: burger },
  { id: 3, title: "Pizza", name: "pizza", icon: pizza },
  { id: 4, title: "Salads", name: "salads", icon: salads },
  { id: 5, title: "Donut", name: "donut", icon: donut },
  { id: 6, title: "Drinks", name: "drinks", icon: drinks },
];

const FoodSelectionMenu = () => {
  const [selected, setSelected] = useState(list[0]);

  const click = (name) => {
    setSelected(list.find((x) => x.name === name));
  };

  return (
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
            onClick={() => click(name)}
          >
            <div className="food_select_menu__item-icon">
              <img src={icon} alt="food_group" />
            </div>
            <p className="food_select_menu__item-title">{title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FoodSelectionMenu;
