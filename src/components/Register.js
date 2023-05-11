import { useInput } from "../hooks/useInput";
import Input from "./Input";

const Register = () => {
  const email = useInput();
  const password = useInput();
  const confirmPassword = useInput();

  const handleRegister = (event) => {
    event.preventDefault();
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
