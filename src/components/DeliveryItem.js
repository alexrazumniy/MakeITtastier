import delivery_man from "../assets/delivery_item/delivery_man.png";
import arrow_right from "../assets/articles_icons/arrow_right.svg";

const DeliveryItem = () => {
  return (
    <div className="delivery_item">
      <img className="delivery_man" src={delivery_man} alt="delivery_man" />
      <p className="faster_delivery">Faster delivery!</p>
      <p className="know_more_delivery">Know More</p>
      <img className="delivery_arrow" src={arrow_right} alt="" />
    </div>
  );
};

export default DeliveryItem;
