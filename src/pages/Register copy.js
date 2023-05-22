import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useInput } from "../hooks/useInput";
import { useNav } from "../hooks/useNav";
import Input from "../components/Input";
import smiling_face from "../assets/header/smiling-face-emoji.svg";
import grapes from "../assets/fruit_svgs/grapes.svg"
import leaf from "../assets/fruit_svgs/leaf.svg"
import bitten_apple from "../assets/fruit_svgs/bitten-apple.svg"
import orange from "../assets/fruit_svgs/orange.svg"

import app from "../base";

const auth = getAuth(app);

const Register = () => {
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const { goTo } = useNav();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (password.value.trim() !== confirmPassword.value.trim()) return;

    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);

      goTo("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_page">
      <div className="form_title">
        Welcome To Yelp App
        <img className="form_smiling_face" src={smiling_face} alt={smiling_face} />
      </div>
      <img className="grapes"src={grapes} alt="grapes"/>
      <img className="leaf"src={leaf} alt="leaf"/>
      <img className="bitten_apple" src={bitten_apple} alt="bitten_apple"/>
      <img className="orange"src={orange} alt="orange"/>
      <form className="form" onSubmit={handleRegister}>
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
          value={password.value}
          onChange={password.onChange}
        />
        <Input
          label="confirm password"
          placeholder="confirm password"
          name="confirm password"
          type="password"
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
        />

        <button className="form_button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
