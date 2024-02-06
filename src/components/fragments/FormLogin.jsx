import InputForm from "../elements/Input";
import Button from "../elements/Button";
import { api } from "../../api/api";

const FormLogin = () => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      user: e.target.username.value,
      pass: e.target.password.value,
    };

    try {
      const response = await api.post("/login", data);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("name", response.data.user.name);
      window.location.href = "/notes";

      console.log(response, "respon");
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        name="username"
        type="text"
        placeholder="Insert Your Username..."
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="**"
      />
      <Button variant="bg-blue-900 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
