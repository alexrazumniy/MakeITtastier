import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import smiling_face from "../assets/header/smiling-face-emoji.svg";
import search_icon from "../assets/header/search-icon.svg";
import basket_shop from "../assets/header/basket_shop.svg";
import basket_order from "../assets/header/basket_sign.svg";

const Header = () => {
  const { showBasket, setShowBasket, addedToBasket } = useContext(MenuContext);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const changeShowBasket = () => {
    setShowBasket((prev) => !prev);
  };

  const setChecked = () => {
    setCheckboxChecked((prev) => !prev);
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
        <img
          className={
            addedToBasket.length === 0 ? "basket_sign_none" : "basket_sign"
          }
          src={basket_order}
          alt=""
        />
      </div>
      <div className="burger_menu">
        <input
          type="checkbox"
          className="header_checkbox"
          onClick={() => setChecked()}
        />
        <div className="check-wrapper">
          <div className="check"></div>
          <div className="check"></div>
          <div className="check"></div>
        </div>
        <div className="menu-all">
          <ul className="header_ul">
            <li className="header_li">
              <a
                className={
                  checkboxChecked ? "header_link" : "header_link_hidden"
                }
                href="#"
              >
                Home
              </a>
            </li>
            <li className="header_li">
              <a
                className={
                  checkboxChecked ? "header_link" : "header_link_hidden"
                }
                href="#"
              >
                Menu
              </a>
            </li>
            <li className="header_li">
              <a
                className={
                  checkboxChecked ? "header_link" : "header_link_hidden"
                }
                href="#"
              >
                Trending
              </a>
            </li>
            <li className="header_li">
              <a
                className={
                  checkboxChecked ? "header_link" : "header_link_hidden"
                }
                href="#"
              >
                Settings
              </a>
            </li>
            <li className="header_li">
              <a
                className={
                  checkboxChecked ? "header_link" : "header_link_hidden"
                }
                href="#"
              >
                Delivery
              </a>
            </li>
            <li className="header_li">
              <a
                className={
                  checkboxChecked ? "header_link" : "header_link_hidden"
                }
                href="#"
              >
                Articles
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
