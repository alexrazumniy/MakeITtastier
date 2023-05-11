import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useInput } from "../hooks/useInput";
import { useNav } from "../hooks/useNav";
import Input from "./Input";

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
    <form onSubmit={handleRegister}>
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

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
