import { useInput } from "../hooks/useInput";
import Input from "./Input";

const Auth = () => {
  const email = useInput();
  const password = useInput();

  const handleSignIn = (event) => {
    event.preventDefault();    
  }

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
