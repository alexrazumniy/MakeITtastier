import { useContext, useState, useCallback } from "react";
import { MenuContext } from "../context/MenuContext";
import basket_arrow from "../assets/basket/arrow_right.svg";
import stopwatch from "../assets/basket/stopwatch.png";
import BasketItem from "./BasketItem";

const Basket = () => {
  const {
    showBasket,
    setShowBasket,
    addedToBasket,
    setAddedToBasket,
  } = useContext(MenuContext);

  const [ordered, setOrdered] = useState(false);

  const handleCloseBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const getSum = () => {
    let totalPrice = 0;
    addedToBasket.map((dish) => {
      if (dish.quantity > 1) {
        totalPrice += dish.price * dish.quantity;
      } else {
        totalPrice += dish.price;
      }
    });
    return totalPrice;
  };

  const orderMore = useCallback(() => {
    setOrdered((prev) => !prev);
    if (ordered) {
      setAddedToBasket([]);
    }
  }, [ordered, setOrdered, setAddedToBasket]);

  return (
    <div className="basket">
      {!ordered && (
        <div className={"basket_header"}>
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
      )}
      <div
        className={
          !ordered
            ? "selected_dishes_container"
            : "selected_dishes_container_hidden"
        }
      >
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
      </div>

      {ordered && (
        <>
          <img className="basket_stopwatch" src={stopwatch} alt=""></img>
          <p className="basket_cooking_alert">in the process of cooking...</p>
        </>
      )}

      {ordered ? (
        <button className="basket_button basket_button-ordered" onClick={orderMore}>
          Order more
        </button>
      ) : (
        <button className="basket_button" onClick={orderMore}>
          Order - ${getSum()}
        </button>
      )}
    </div>
  );
};

export default Basket;
