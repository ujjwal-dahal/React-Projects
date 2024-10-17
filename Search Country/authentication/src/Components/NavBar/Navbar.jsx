import { NavLink, useNavigate } from "react-router-dom";
import "../NavBar/Navbar.css";

function Navbar({ isLogin, setIsLogin }) {
  let navigate = useNavigate();

  const handleLogout = () => {
    setIsLogin(false); // Update the login state
    navigate("/"); // Navigate to logout page or homepage
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/" className={(e) => (e.isActive ? "active-link" : null)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={(e) => (e.isActive ? "active-link" : null)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={(e) => (e.isActive ? "active-link" : null)}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={(e) => (e.isActive ? "active-link" : null)}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/country" className={(e) => (e.isActive ? "active-link" : null)}>
            Country Details
          </NavLink>
        </li>
        {isLogin ? (
          <li>
            <button className="login-link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <button className="signup-link" onClick={() => navigate("/signup")}>
                Signup
              </button>
            </li>
            <li>
              <button className="login-link" onClick={() => navigate("/login")}>
                Login
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
