import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { useState } from "react";
import bin from "../assets/basket/bin.svg";
import minus from "../assets/basket/minus.svg";
import plus from "../assets/basket/plus.svg";

const BasketItem = (dish) => {
  const [quantity, setQuantity] = useState(1);
  const {
    removeDishFromBasket,
    increaseDishAmount,
    decreaseDishAmount,
  } = useContext(MenuContext);

  return (
    <div className="basket_item">
      <div className="selected_dish">
        <div
          className="selected_dish_pic_wrapper"
          onClick={removeDishFromBasket}
        >
          <img className="selected_dish_pic" src={dish.image} alt="item_img" />
        </div>
        <div className="selected_dish_description">
          <p className="selected_dish_title">{dish.title}</p>
          <p className="selected_dish_composition">{dish.composition}</p>
          <button
            className="selected_dish_quantity"
            onClick={increaseDishAmount(dish.id)}
          >
            х{quantity}
          </button>

          <div className="basket-content-buttons">
            <button
              className="basket-plus-button basket-button"
              onClick={() => {
                increaseDishAmount(dish.id);
              }}
            >
              <img className="basket-plus-img" src={plus} alt="plusLogo" />
            </button>
            <button
              className="basket-minus-button basket-button"
              onClick={() => {
                decreaseDishAmount(dish.id);
              }}
            >
              <img className="basket-minus-img" src={minus} alt="minusLogo" />
            </button>
            <button
              onClick={() => {
                removeDishFromBasket(dish.id);
              }}
              className="basket-bin-button basket-button"
            >
              <img className="basket-bin-img" src={bin} alt="binLogo" />
            </button>
          </div>

          <p className="selected_dish_price">${dish.price}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
