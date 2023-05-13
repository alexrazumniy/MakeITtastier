import burger_1 from "../assets/foodmenu/burgers/burger_1.png";

const DishCard = () => {
  return (
    <div className="dish_card">
      <div className="dish_img_wrapper">
        <img className="dish_img" src={burger_1} alt="" />
      </div>
        <div className="dish_description">
          <p className="dish_title">Burger Chikken</p>
          <p className="dish_composition">
            Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade
          </p>
          <p className="dish_price">$29</p>
        </div>
    </div>
  );
};

export default DishCard;
