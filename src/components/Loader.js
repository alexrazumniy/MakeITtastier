import bitten_apple from "../assets/fruit_svgs/bitten-apple.svg";
import grapes from "../assets/fruit_svgs/grapes.svg";
import orange from "../assets/fruit_svgs/orange.svg";
import cheese from "../assets/discount_item/cheese-small.png";
import burger from "../assets/discount_item/big-burger.png";
import fire from "../assets/foodmenu/fire.svg";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader_left" />
      <div className="loader_right" />
      <div className="loader_container">
        <h1 className="loader_title">Yelp App</h1>
        <p className="loader_pretitle">developed by Alex Razumniy</p>
        <img className="loader_apple" src={bitten_apple} alt="apple" />
        <img className="loader_grapes" src={grapes} alt="grapes" />
        <img className="loader_orange" src={orange} alt="orange" />
        <img className="loader_cheese" src={cheese} alt="cheese" />
        <img className="loader_burger" src={burger} alt="burger" />
        <img className="loader_fire" src={fire} alt="fire" />
      </div>
    </div>
  );
};

export default Loader;
