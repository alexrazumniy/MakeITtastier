import { useContext } from "react";
import { useNav } from "../hooks/useNav";
import { AuthContext } from "../context/AuthContext";
import NavMenu from "../components/NavMenu";
import UserProfile from "../components/UserProfile";
import DeliveryItem from "../components/DeliveryItem";
import Header from "../components/Header";
import DishSelectionMenu from "../components/DishSelectionMenu";
import DiscountItem from "../components/DiscountItem";
import Dishlist from "../components/DishList";
import DishCard from "../components/DishCard";
import Articles from "../components/Articles";
import Basket from "../components/Basket";
import logout from "../assets/header/logout.svg";

import app from "../base";
import { getAuth, signOut as out } from "firebase/auth";

const auth = getAuth();

const Home = () => {
  const { goTo } = useNav();
  const { setCurrentUser } = useContext(AuthContext);

  const signOut = async (event) => {
    event.preventDefault();

    await out(auth);

    setCurrentUser(null);
    goTo("/");
    localStorage.setItem("user", "null");
  };

  return (
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
          {/* <DishCard /> */}
          <Articles />
          {/* <Basket /> */}
        </div>
        <button className="logout_button" type="submit" onClick={signOut}>
          <img className="logout_img" src={logout} alt={logout} />
        </button>
      </section>
    </div>
  );
};

export default Home;
