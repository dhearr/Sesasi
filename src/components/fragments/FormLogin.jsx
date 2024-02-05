import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { login } from "../../services/login.services";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      user: e.target.username.value,
      pass: e.target.password.value,
    };
    login(data);
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Insert Your Name..."
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <Button variant="bg-blue-900 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
