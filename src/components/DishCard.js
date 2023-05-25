import { useContext, useState, useCallback, useEffect, useMemo } from "react";
import { MenuContext } from "../context/MenuContext";
import check_mark from "../assets/foodmenu/check_mark.svg";
import plus from "../assets/foodmenu/plus.svg";
import fire from "../assets/foodmenu/fire.svg";
import like from "../assets/foodmenu/like.svg";

const DishCard = (dish) => {
  const [selectedDish, setSelectedDish] = useState(false);
  const { setShowBasket, addedToBasket, setAddedToBasket } = useContext(
    MenuContext
  );

  const updateBasket = useCallback(
    (isAdded) => {
      if (isAdded) {
        const updatedBasket = addedToBasket.filter(
          (item) => item.title !== dish.title
        );
        setAddedToBasket(updatedBasket);
      } else {
        const newItem = {
          id: dish.id,
          image: dish.image,
          title: dish.title,
          composition: dish.composition,
          price: dish.price,
        };
        setAddedToBasket((prevItems) => [...prevItems, newItem]);
      }
    },
    [
      setAddedToBasket,
      addedToBasket,
      dish.id,
      dish.image,
      dish.title,
      dish.composition,
      dish.price,
    ]
  );

  const isBasketEmpty = useMemo(() => addedToBasket.length === 0, [
    addedToBasket,
  ]);

  const handleClick = useCallback(() => {
    setSelectedDish((prev) => !prev);
    updateBasket(selectedDish);
  }, [selectedDish, updateBasket]);

  useEffect(() => {
    setShowBasket(!isBasketEmpty);
  }, [isBasketEmpty, setShowBasket]);

  useEffect(() => {
    const isItemInBasket = addedToBasket.some(
      (item) => item.title === dish.title
    );
    setSelectedDish(isItemInBasket);
  }, [addedToBasket, dish.title]);

  return (
    <div className="dish_card">
      <img className="dish_img" src={dish.image} alt="" />
      <img
        className="dish_add_reaction"
        src={selectedDish ? fire : like}
        alt=""
      />
      <div className="dish_description">
        <p className="dish_title">{dish.title}</p>
        <p className="dish_composition">{dish.composition}</p>
        <button className="dish_add_button" onClick={handleClick}>
          <img src={selectedDish ? check_mark : plus} alt="" />
        </button>
        <p className="dish_price">${dish.price}</p>
        <p>{dish.id}</p>
      </div>
    </div>
  );
};

export default DishCard;
