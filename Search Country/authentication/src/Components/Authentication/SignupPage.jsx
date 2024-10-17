import { useState } from "react";
import "./Css/SignupPage.css";
import { Link, useNavigate } from "react-router-dom";

let keyName = "signupData";

let SignupPage = () => {
  let navigate = useNavigate();
  let dataFormat = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [inputData, setInputData] = useState(dataFormat);
  const [totalData, setTotalData] = useState(
    JSON.parse(localStorage.getItem("signupData")) || []
  );

  let handleInput = (event) => {
    setInputData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  let signupClick = (e) => {
    e.preventDefault();

    if (
      inputData.firstName !== "" &&
      inputData.lastName !== "" &&
      inputData.email !== "" &&
      inputData.password !== ""
    ) {
      if (inputData.password === inputData.confirmPassword) {
        let updatedData = [...totalData, inputData];
        setTotalData(updatedData);

        localStorage.setItem(keyName, JSON.stringify(updatedData));

        console.log("Total Data:", updatedData);

        navigate("/login");
      } else {
        console.log("Passwords do not match");
      }
    } else {
      console.log("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="signup-form">
          <h1>Create Your Account</h1>
          <form method="post">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="firstName"
                value={inputData.firstName}
                id="first-name"
                placeholder="Enter first name"
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={inputData.lastName}
                id="last-name"
                placeholder="Enter last name"
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={inputData.email}
                id="email"
                placeholder="Enter email"
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={inputData.phone}
                placeholder="Enter phone number"
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                name="password"
                value={inputData.password}
                onChange={handleInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
                name="confirmPassword"
                value={inputData.confirmPassword}
                onChange={handleInput}
              />
            </div>

            <button type="submit" className="signup-btn" onClick={signupClick}>
              Sign Up
            </button>
            <div className="account-already">
              <p>Already Have an Account?</p>{" "}
              <Link className="login" to="/login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
