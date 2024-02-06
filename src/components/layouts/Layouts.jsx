import { Link } from "react-router-dom";
import Button from "../elements/Button";

const Layouts = ({ children }) => {
  return (
    <>
      <nav className="h-16 py-5 px-3 w-full bg-blue-600 flex items-center justify-between">
        <ul className="flex space-x-10 ml-10">
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <div className="mr-10 space-x-10">
          <Button variant="bg-white text-black">
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="bg-white text-black">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Layouts;
