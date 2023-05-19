import { useContext, useCallback, useState, useMemo } from "react";
import { MenuContext } from "../context/MenuContext";
import burger_1 from "../assets/foodmenu/burgers/burger_1.png";
import basket_arrow from "../assets/basket/arrow_right.svg";
import stopwatch from "../assets/basket/stopwatch.png";
import Dishlist from "./DishList";
import BasketItem from "./BasketItem";

const Basket = (dishlist) => {
  const { setShowBasket, basketItems, setBasketItems } = useContext(
    MenuContext
  );
  const [isOrdered, setIsOrdered] = useState(false);

  console.log(dishlist);


  const changeShowBasket = useCallback(() => {
    setShowBasket((prev) => !prev);
  }, [setShowBasket]);

  const calculateTotalPrice = useMemo(() => {
    let totalPrice = 0;
    basketItems.forEach((item) => {
      if (item.quantity > 1) {
        totalPrice += item.price * item.quantity;
      } else {
        totalPrice += item.price;
      }
    });
    return totalPrice;
  }, [basketItems]);

  const order = useCallback(() => {
    setIsOrdered((prev) => !prev);
    if (isOrdered) {
      setBasketItems([]);
    }
  }, [isOrdered, setIsOrdered, setBasketItems]);


  return (
    <div className="basket">
      {!isOrdered ? (
        <>
          <div className="basket-header">
            <p className="basket_title">Basket</p>
            <button className="basket_arrow" onClick={changeShowBasket}>
              <img src={basket_arrow} alt="basket_arrow" />
            </button>
          </div>
          <div className="basket-items">
            {basketItems.map((item) => {
              const dishItem = dishlist.find(
                (dish) => dish.title === item.type
              );
              return (
                <BasketItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  composition={item.composition}
                  src={dishItem ? item.image : ""}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          {basketItems.length > 0 ? (
            <div className="basket_stopwatch">
              <img src={stopwatch} alt="stopwatch" />
              <p className="basket_cooking_alert">in the process of cooking...</p>
            </div>
          ) : (
            <div className="order-error">You didn't add any dishes</div>
          )}
        </>
      )}
      <button
        className={basketItems.length ? "basket_button" : "none"}
        onClick={order}
      >
        {!isOrdered ? `Order - ${calculateTotalPrice} $` : "Order More"}
      </button>
    </div>
  );
};

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

export default Basket;
