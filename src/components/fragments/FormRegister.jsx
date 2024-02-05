import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { register } from "../../services/register.services";

const FormRegister = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      user: e.target.username.value,
      pass: e.target.password.value,
    };
    register(user);
  };

  return (
    <form onSubmit={handleRegister}>
      <InputForm
        label="Name"
        name="name"
        type="text"
        placeholder="Insert your name"
      />
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Insert your username"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <Button variant="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
