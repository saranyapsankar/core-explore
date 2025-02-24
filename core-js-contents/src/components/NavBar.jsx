import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="h-12 w-full bg-teal-900 fixed top-0 left-0 flex gap-5 justify-start justify-self-center items-center">
      <li className="p-2">
        <Link
          to="/"
          className="text-white hover:text-teal-700 hover:font-semibold hover:bg-gray-200 p-1 rounded"
        >
          Home
        </Link>
      </li>
      {/* <li className="p-2">two</li> */}
    </ul>
  );
};

export default NavBar;
