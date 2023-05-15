import burger_1 from "../assets/foodmenu/burgers/burger_1.png";
import basket_arrow from "../assets/basket/arrow-right.png";
import stopwatch from "../assets/basket/stopwatch.png";

const Basket = (chosen_dish) => {
  return (
    <div className="basket">
      <div className="basket_header">
        <p className="basket_title">Basket</p>
        <div className="basket_arrow">
          <img className="basket_arrow_pic" src={basket_arrow} alt="" />
        </div>
      </div>
      <div className="chosen_dish">
        <div className="chosen_dish_pic_wrapper">
          <img className="chosen_dish_pic" src={burger_1} alt="burger_1" />
          {/* <img className="chosen_dish_pic" src={chosen_dish}/> */}
        </div>
        <div className="chosen_dish_description">
          {/* <p className="chosen_dish_title">{title}</p> */}
          <p className="chosen_dish_title">Burger Chikken</p>
          {/* <p className="chosen_dish_composition">
            {composition}
          </p> */}
          <p className="chosen_dish_composition">
            Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade
          </p>
          {/* <p className="dish_price">{price}</p> */}
        </div>
        <p className="chosen_dish_amount">x2</p>
        <p className="chosen_dish_price">$29</p>
        <img className="basket_stopwatch" src={stopwatch} alt=""></img>
      </div>
      <p className="basket_cooking_alert">in the process of cooking...</p>
      <button className="basket_button">Order - $12</button>
      {/* <button className="basket_button">Order - ${total_price}</button> */}
      {/* <button className="basket_button">Order more</button> */}
    </div>
  );
};

export default Basket;
