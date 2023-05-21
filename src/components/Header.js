import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import smiling_face from "../assets/header/smiling-face-emoji.svg";
import search_icon from "../assets/header/search-icon.svg";
import basket_shop from "../assets/header/basket_shop.svg";
import basket_sign from "../assets/header/basket_sign.svg";
// import logout from "../assets/header/logout.svg";

const Header = () => {  
  const { showBasket, setShowBasket } = useContext(MenuContext);
  
  const changeShowBasket = () => {
    setShowBasket((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header_title">
        Welcome To Lucknow
        <img className="smiling_face" src={smiling_face} alt={smiling_face} />
      </div>
      <div className="header_order_items">
        <div className="search">
          <input className="search_input" />
          <img className="search_icon" src={search_icon} alt={search_icon} />
        </div>
        <img
          className="basket_shop"
          src={basket_shop}
          alt={basket_shop}
          onClick={changeShowBasket}
        />
        <img className="basket_sign" src={basket_sign} alt={basket_sign} />
        {/* <img className="logout" src={logout} alt={logout} /> */}
      </div>
    </div>
  );
};

export default Header;
