import smiling_face from "../assets/header/smiling-face-emoji.svg";
import search_icon from "../assets/header/search-icon.svg";
import basket_shop from "../assets/header/basket_shop.svg";
import basket_sign from "../assets/header/basket_sign.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_title">
        Welcome To Lucknow
        <img className="smiling_face" src={smiling_face} alt={smiling_face} />
      </div>
      <div className="shop_header_items">
        <img className="search_icon" src={search_icon} alt={search_icon} />
        <img className="basket_shop" src={basket_shop} alt={basket_shop} />
        <img className="basket_sign" src={basket_sign} alt={basket_sign} />
      </div>
    </div>
  );
};

export default Header;
