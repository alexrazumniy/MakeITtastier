import { useContext } from "react";
import { useNav } from "../hooks/useNav";
import { AuthContext } from "../context/AuthContext";
import NavMenu from "../components/NavMenu";
import UserProfile from "../components/UserProfile";
import DeliveryItem from "../components/DeliveryItem";
import Header from "../components/Header";
import FoodSelectionMenu from "../components/FoodSelectionMenu";
impo

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
        <FoodSelectionMenu />
        <DiscountItem />
      </section>
      {/* <div>Home</div> */}
      {/* <button type="submit" onClick={signOut}>
        Sign out
      </button> */}
    </div>
  );
};

export default Home;
