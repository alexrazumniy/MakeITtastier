import big_burger from "../assets/discount_item/big-burger.png";
import bitten_apple from "../assets/discount_item/bitten-apple-small.png";
import cheese_small from "../assets/discount_item/cheese-small.png";
import orange_small from "../assets/discount_item/orange-small.png";

const DiscountItem = () => {
  return (
    <div className="discount_item">
      <p className="discount_value">-50% Off</p>
      <p className="discount_name">the full price of burgers</p>
      <img className="big_burger" src={big_burger} alt="" />
      <img className="bitten_apple" src={bitten_apple} alt="" />
      <img className="cheese_small" src={cheese_small} alt="" />
      <img className="orange_small" src={orange_small} alt="" />
    </div>
  );
};

export default DiscountItem;
