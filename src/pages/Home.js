import { useContext } from "react";
import { useNav } from "../hooks/useNav";
import { AuthContext } from "../context/AuthContext";

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
    <div>
      <div>Home</div>
      <button type="submit" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
};

export default Home;
