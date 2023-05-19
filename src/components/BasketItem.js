import { useContext, useCallback } from "react";
import { MenuContext } from "../context/MenuContext";
import { useState } from "react";

const BasketItem = (props) => {
  const [quantity, setQuantity] = useState(1);
  const { setBasketItems } = useContext(MenuContext);

  const removeItem = useCallback(() => {
    setBasketItems((prevItems) =>
      prevItems.filter((item) => item.name !== props.name)
    );
  }, [setBasketItems, props.name]);

  const addItem = useCallback(() => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setBasketItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.name === props.name) {
          return { ...item, quantity: quantity + 1 };
        }
        return item;
      });
      return updatedItems;
    });
  }, [setBasketItems, props.name, quantity]);

  return (
    <div className="basket_item">
      <div className="selected_dish">
        <div className="selected_dish_pic_wrapper" onClick={removeItem}>
          <img className="selected_dish_pic" src={props.src} alt="item_img" />
        </div>
        <div className="selected_dish_description">
          <p className="selected_dish_title">{props.title}</p>
          <p className="selected_dish_composition">{props.composition}</p>
          <button className="selected_dish_quantity" onClick={addItem}>
            х{quantity}
          </button>
          <p className="selected_dish_price">${props.price}</p>
        </div>
      </div>      
    </div>
  );
};

export default BasketItem;

//   <div className="selected_dish">
//     <div className="selected_dish_pic_wrapper">
//       <img className="selected_dish_pic" src={burger_1} />
//     </div>
//     <div className="selected_dish_description">
//       {/* <p className="chosen_dish_title">{title}</p> */}
//       <p className="selected_dish_title">Burger Chikken</p>
//       {/* <p className="chosen_dish_composition">
//         {composition}
//       </p> */}
//       <p className="selected_dish_composition">
//         Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade
//       </p>
//       {/* <p className="dish_price">{price}</p> */}
//     </div>
//     <p className="selected_dish_quantity">x2</p>
//     <p className="selected_dish_price">$29</p>
//     {/* <img className="basket_stopwatch" src={stopwatch} alt=""></img>
//     <p className="basket_cooking_alert">in the process of cooking...</p> */}
//   </div>
//   <button className="basket_button">Order - $12</button>
//   {/* <button className="basket_button">Order - ${total_price}</button> */}
//   {/* <button className="basket_button">Order more</button> */}
// </div>