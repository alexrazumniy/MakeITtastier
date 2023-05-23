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
      (sum, dish) => sum + dish.quantity * dish.price,
      0
    );
    return total;
  };

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
      <div className="selected_dishes_container">
        {addedToBasket.map(
          ({ id, image, title, composition, price, quantity }) => {
            return (
              <BasketItem
                key={id}
                image={image}
                title={title}
                composition={composition}
                price={price}
                quantity={quantity}
              />
            );
          }
        )}
      </div>
      {/* <img className="basket_stopwatch" src={stopwatch} alt=""></img>
      <p className="basket_cooking_alert">in the process of cooking...</p> */}

      <button className="basket_order_button">
        Order - ${getSum(addedToBasket)}
      </button>

      {/* <button className="basket_button">Order more</button> */}
    </div>
  );
};

export default Basket;
