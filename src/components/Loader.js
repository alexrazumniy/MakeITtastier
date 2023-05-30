import bitten_apple from "../assets/loader/apple.svg";
import grapes from "../assets/loader/grapes.svg";
import orange from "../assets/loader/orange.svg";
import cheese from "../assets/loader/cheese.svg";
import burger from "../assets/loader/big-burger.png";
import fire from "../assets/loader/fire.svg";

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
