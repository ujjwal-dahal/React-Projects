import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/LoginPage.css";
import { myContext } from "../../App";

const LoginPage = () => {
  
  let { setIsLogin, localData } = useContext(myContext)
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = localData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsLogin(true); 
      navigate("/"); 
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="signup-redirect">
            <p>New here? <Link to="/signup">Create an account</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
