import { useInput } from "../hooks/useInput";
import Input from "../components/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import app from "../base";
import smiling_face from "../assets/header/smiling-face-emoji.svg";
import grapes from "../assets/fruit_svgs/grapes.svg";
import leaf from "../assets/fruit_svgs/leaf.svg";
import bitten_apple from "../assets/fruit_svgs/bitten-apple.svg";
import orange from "../assets/fruit_svgs/orange.svg";

const auth = getAuth(app);

const Auth = () => {
  const email = useInput();
  const password = useInput();

  const { setCurrentUser } = useContext(AuthContext);

  const handleSignIn = async (event) => {
    event.preventDefault();

    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setCurrentUser(user);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage); //////////////
      });
  };

  return (
    <div className="form_page">
      <div className="form_title">
        Welcome To Yelp App
        <img className="form_smiling_face" src={smiling_face} alt={smiling_face} />
      </div>
      <img className="grapes" src={grapes} alt="grapes" />
      <img className="leaf" src={leaf} alt="leaf" />
      <img className="bitten_apple" src={bitten_apple} alt="bitten_apple" />
      <img className="orange" src={orange} alt="orange" />
      <form className="form" onSubmit={handleSignIn}>
        <Input
          label="email"
          placeholder="email"
          name="email"
          value={email.value}
          onChange={email.onChange}
        />
        <Input
          label="password"
          placeholder="password"
          name="password"
          type="password"
          password={password.value}
          onChange={password.onChange}
        />

        <button className="form_button" type="submit">
          Login
        </button>
        <span className="having_account">dont have an account</span>
      </form>
    </div>
  );
};

export default Auth;
