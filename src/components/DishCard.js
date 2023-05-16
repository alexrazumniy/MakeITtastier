import burger_1 from "../assets/foodmenu/burgers/burger_1.png";

const DishCard = ({ image, title, composition, price }) => {
  return (
    <div className="dish_card">
      <img className="dish_img" src={image} alt="" />
      {/* <img className="dish_img" src={burger_1} alt="" /> */}
      <div className="dish_description">
        <p className="dish_title">{title}</p>
        {/* <p className="dish_title">Burger Chikken</p> */}
        <p className="dish_composition">{composition}</p>
        {/* <p className="dish_composition">
            Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade
          </p> */}
        <p className="dish_price">${price}</p>
        {/* <p className="dish_price">$29</p> */}
      </div>
    </div>
  );
};

export default DishCard;
