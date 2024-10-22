import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const cartValue = useSelector((state) => state.addToCart.value);

  return (
    <nav className="flex justify-between items-center h-16 bg-gray-800 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-2xl font-bold uppercase hover:text-yellow-400 transition duration-300">
            UjjwaL
          </NavLink>
        </div>
        <div className="flex space-x-8 text-white text-lg font-medium">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400 transition duration-300")}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400 transition duration-300")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400 transition duration-300")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) => (isActive ? "text-yellow-400" : "hover:text-yellow-400 transition duration-300")}
          >
            Store
          </NavLink>
        </div>
        <div className="flex items-center">
          <button onClick={() => navigate("/cart")} className="relative">
            <FaShoppingBag className="text-white text-2xl" />
            {cartValue > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                {cartValue}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
