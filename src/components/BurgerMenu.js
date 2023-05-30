import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";

const BurgerMenu = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const {showBasket, setShowBasket} = useContext(MenuContext);

  const setChecked = () => {
    setCheckboxChecked((prev) => !prev);
  };

  const menuShowBasket = () => {
    setShowBasket((prev) => !prev);
  };

  return (
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
              className={checkboxChecked ? "header_link" : "header_link_hidden"}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="header_li">
            <a
              className={checkboxChecked ? "header_link" : "header_link_hidden"}
              href="#"
            >
              Menu
            </a>
          </li>
          <li className="header_li">
            <a
              className={checkboxChecked ? "header_link" : "header_link_hidden"}
              href="#"
            >
              Trending
            </a>
          </li>
          <li className="header_li">
            <a
              className={checkboxChecked ? "header_link" : "header_link_hidden"}
              href="#"
            >
              Settings
            </a>
          </li>          
          <li className="header_li">
            <a onClick={() => menuShowBasket()}
              className={checkboxChecked ? "header_link" : "header_link_hidden"}
              href="#"
            >
              Look at Basket
              <span>🍔🍒</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
