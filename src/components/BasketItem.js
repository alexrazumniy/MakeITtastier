import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import { useState } from "react";

const BasketItem = ({ id, image, title, composition, price, quantity }) => {
  // const [quantity, setQuantity] = useState(1);
  const {
    addedToBasket,
    setAddedToBasket,
    setSelectedDish,
    decreaseDishAmount,
    addDishToBasket,
    selectedDish
  } = useContext(MenuContext);

  console.log({ title, price, quantity });

  const increaseDishAmount = () => {
    setAddedToBasket((addedToBasket) => {
      const updatedDishAmount = addedToBasket.map((dish) => {
        if (dish.title === title) {
          return { ...dish, quantity: quantity + 1 };
        }
        return dish;
      });
      console.log("updatedItems", { updatedDishAmount });
      return updatedDishAmount;
    });
  };

const removeDishFromBasket = (title) => {
    addDishToBasket(addedToBasket.filter((dish) => dish.title !== title));
    setSelectedDish(selectedDish.filter((itemId) => itemId !== id));
  };

  // const remove = useCallback(() => {
  // 	setBasketItems(prevItems =>
  // 		prevItems.filter(item => item.name !== props.name)
  // 	);
  // }, [setBasketItems, props.name]);

  // const add = useCallback(() => {
  // 	setQuantity(prevQuantity => prevQuantity + 1);
  // 	setBasketItems(prevItems => {
  // 		const updatedItems = prevItems.map(item => {
  // 			if (item.name === props.name) {
  // 				return { ...item, quantity: quantity + 1 };
  // 			}
  // 			return item;
  // 		});
  // 		return updatedItems;
  // 	});
  // }, [setBasketItems, props.name, quantity]);

  return (
    <div className="selected_dish">
      <div
        className="selected_dish_pic_wrapper"
        onClick={() => removeDishFromBasket(id)}
      >
        <img className="selected_dish_pic" src={image} alt="item_img" />
      </div>
      <div className="selected_dish_description">
        <p className="selected_dish_title">{title}</p>
        <p className="selected_dish_composition">{composition}</p>
      </div>

      <button
        className="selected_dish_quantity_change_button"
        onClick={() => {
          decreaseDishAmount(id);
        }}
      >
        -
      </button>

      <p className="selected_dish_quantity">х{quantity}</p>

      <button
        className="selected_dish_quantity_change_button"
        onClick={() => {
          increaseDishAmount(id);
        }}
      >
        +
      </button>
      <p className="selected_dish_price">${price}</p>
    </div>
  );
};

export default BasketItem;
