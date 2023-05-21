import { useContext, useState, useCallback } from "react";
import { MenuContext } from "../context/MenuContext";
import check_mark from "../assets/foodmenu/check_mark.svg";
import plus from "../assets/foodmenu/plus.svg";
import fire from "../assets/foodmenu/fire.svg";
import like from "../assets/foodmenu/like.svg";

const DishCard = (dish) => {
  const [isSelected, setSelected] = useState(false);
  const { setShowBasket } = useContext(MenuContext);

  const handleClick = useCallback(() => {
    setSelected((prev) => !prev);
    setShowBasket(true);
  }, [setShowBasket, setSelected]);

  return (
    <div className="dish_card">
      <img className="dish_img" src={dish.image} alt="" />
      {isSelected ? (
        <img className="fire" src={fire} alt="" />
      ) : (
        <img className="like" src={like} alt="" />
      )}
      <div className="dish_description">
        <p className="dish_title">{dish.title}</p>
        <p className="dish_composition">{dish.composition}</p>
        <button className="dish_add_button" onClick={handleClick}>
          {isSelected ? (
            <img className="dish_checked_mark" src={check_mark} alt="" />
          ) : (
            <img className="dish_add_plus" src={plus} alt="" />
          )}
        </button>
        <p className="dish_price">${dish.price}</p>
      </div>
    </div>
  );
};

export default DishCard;
