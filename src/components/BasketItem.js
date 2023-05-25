import { useContext, useState, useCallback } from "react";
import { MenuContext } from "../context/MenuContext";

const BasketItem = (dish) => {
  const [quantity, setQuantity] = useState(1);
  const { setAddedToBasket } = useContext(MenuContext);

  const removeDishFromBasket = useCallback(() => {
    setAddedToBasket((prevItems) =>
      prevItems.filter((item) => item.title !== dish.title)
    );
  }, [setAddedToBasket, dish.title]);

  const increaseDishAmount = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setAddedToBasket((addedToBasket) => {
      const updatedDishAmount = addedToBasket.map((item) => {
        if (item.title === dish.title) {
          return { ...item, quantity: quantity + 1 };
        }
        return item;
      });
      return updatedDishAmount;
    });
  }, [setAddedToBasket, dish.title, quantity]);

  const decreaseDishAmount = useCallback(() => {
    if (quantity === 1) {
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
    setAddedToBasket((prevItems) => {
      const updatedDishAmount = prevItems.map((item) => {
        if (item.title === dish.title) {
          return { ...item, quantity: quantity - 1 };
        }
        return item;
      });
      return updatedDishAmount;
    });
  }, [setAddedToBasket, dish.title, quantity]);

  return (
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
      </div>
      <button
        className="selected_dish_quantity_change_button"
        onClick={decreaseDishAmount}
      >
        -
      </button>
      <p className="selected_dish_quantity">х{quantity}</p>

      <button
        className="selected_dish_quantity_change_button"
        onClick={increaseDishAmount}
      >
        +
      </button>
      <p className="selected_dish_price">${dish.price}</p>
      <p>{dish.id}</p>
    </div>
  );
};

export default BasketItem;
