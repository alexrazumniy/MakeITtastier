import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import basket_arrow from "../assets/basket/arrow_right.svg";
import stopwatch from "../assets/basket/stopwatch.png";
import BasketItem from "./BasketItem";

const Basket = () => {
  const { showBasket, setShowBasket, addedToBasket } = useContext(MenuContext);

  const handleCloseBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const getSum = (addedToBasket) => {
    const total = addedToBasket.reduce(
      (sum, dish) => sum + dish.amount * dish.price,
      0
    );
    return total;
  };

  console.log({ addedToBasket });

  return (
    <div className={showBasket ? "basket" : "basket_closed"}>
      <div className="basket_header">
        <p className="basket_title">Basket</p>
        <div className="basket_arrow">
          <img
            className="basket_arrow_pic"
            src={basket_arrow}
            alt="arrow_pic"
            onClick={() => handleCloseBasket()}
          />
        </div>
      </div>
      {addedToBasket.map((dish) => {
        return (
          <BasketItem
            key={dish.id}
            image={dish.image}
            title={dish.title}
            composition={dish.composition}
            price={dish.price}
            quantity={dish.quantity}
          />
        );
      })}
      <div className="chosen_dish">
        {/* <p className="chosen_dish_amount">{dish.quantity}</p>
        <p className="chosen_dish_price">{dish.price}</p> */}
        {/* <img className="basket_stopwatch" src={stopwatch} alt=""></img>
        <p className="basket_cooking_alert">in the process of cooking...</p> */}
      </div>

      <button className="basket_button">
        Order - ${getSum(addedToBasket)}
      </button>


      {/* <button className="basket_button">Order more</button> */}
    </div>
  );
};

export default Basket;
