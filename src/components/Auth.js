import { useInput } from "../hooks/useInput";
import Input from "./Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import app from "../base";

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
        console.log(user); ////////////

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
    <form onSubmit={handleSignIn}>
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

      <button type="submit">Login</button>
    </form>
  );
};

export default Auth;
