import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { api } from "../../api/api";

const FormRegister = () => {
  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      user: e.target.username.value,
      pass: e.target.password.value,
    };

    try {
      const response = await api.post("/register", data);
      console.log("register success");
      console.log(response);
      window.location.href = "/login";
    } catch (error) {
      console.error("register failed", error);
    }
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
