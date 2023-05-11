import { useState } from "react";
import { Icon } from "./Icon";

const list = [
  { id: 1, title: "Home", name: "home", svgName: "home" },
  { id: 2, title: "Menu", name: "menu", svgName: "menu" },
  { id: 3, title: "Trending", name: "trending", svgName: "trending" },
  { id: 4, title: "Settings", name: "settings", svgName: "settings" },
];

const NavMenu = () => {
  const [active, setActive] = useState(list[0]);

  const click = (name) => {
    setActive(list.find((x) => x.name === name));
  };

  return (
    <nav className="menu">
      <ul className="menu__list">
        {list.map(({ title, name, svgName }) => (
          <li
            key={name}
            className="menu__link"
            // className={
            //   active.name === name ? "menu__link-active" : "menu__link"
            // }
            onClick={() => click(name)}
          >
            <div className="menu-icon">
              <Icon name={svgName} />
            </div>
            <span className="menu__title">{title}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
