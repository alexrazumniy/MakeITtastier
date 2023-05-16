import check_mark from "../assets/foodmenu/check_mark.svg";
import plus from "../assets/foodmenu/plus.svg";
import fire from "../assets/foodmenu/fire.svg";
import like from "../assets/foodmenu/like.svg";
import star from "../assets/foodmenu/star.svg";

const DishCard = ({ image, title, composition, price }) => {
  return (
    <div className="dish_card">
      <img className="dish_img" src={image} alt="" />

      <img className="fire" src={fire} alt="" />
      <img className="like" src={like} alt="" />
      <img className="star" src={star} alt="" />

      <div className="dish_description">
        <p className="dish_title">{title}</p>

        <p className="dish_composition">{composition}</p>
        <img className="dish_add_plus" src={plus} alt="" />
        <img className="dish_checked_mark" src={check_mark} alt="" />

        <p className="dish_price">${price}</p>
      </div>      
    </div>
  );
};

export default DishCard;
