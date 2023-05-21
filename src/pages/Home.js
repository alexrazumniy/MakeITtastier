import { useContext } from "react";
import { useNav } from "../hooks/useNav";
import { AuthContext } from "../context/AuthContext";
import { MenuContext } from "../context/MenuContext";
import NavMenu from "../components/NavMenu";
import UserProfile from "../components/UserProfile";
import DeliveryItem from "../components/DeliveryItem";
import Header from "../components/Header";
import DishSelectionMenu from "../components/DishSelectionMenu";
import DiscountItem from "../components/DiscountItem";
import Dishlist from "../components/DishList";
import Articles from "../components/Articles";
import Basket from "../components/Basket";
import logout from "../assets/header/logout.svg";
import Loader from "../components/Loader";

import app from "../base";
import { getAuth, signOut as out } from "firebase/auth";

const auth = getAuth();

const Home = () => {
  const { goTo } = useNav();
  const { setCurrentUser } = useContext(AuthContext);
  const { showBasket, setShowBasket } = useContext(MenuContext);

  const signOut = async (event) => {
    event.preventDefault();

    await out(auth);

    setCurrentUser(null);
    goTo("/");
    localStorage.setItem("user", "null");
  };

  const openBasket = () => {
    setShowBasket(true);
  };

  return (
    <>
      <Loader />
      <div className="container">
        <div className="left_side">
          <UserProfile />
          <NavMenu />
          <DeliveryItem />
        </div>
        <section className="main_section">
          <Header />
          <div className="content">
            <DishSelectionMenu />
            <DiscountItem />
            <Dishlist />
            <Articles />
            {showBasket && <Basket />}
          </div>
          <button className="logout_button" type="submit" onClick={signOut}>
            <img className="logout_img" src={logout} alt={logout} />
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
