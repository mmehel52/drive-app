import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/DriverContext";
const DriverLogin = () => {
  const { Login, driver } = useGlobalContext();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const Handle = () => {
    Login(inputs, setInputs);
    navigate("/active");
    setInputs("");
    console.log(driver);
  };

  return (
    <div>
      <h1>Driver</h1>
      <input
        name="email"
        onChange={handleChange}
        type="email"
        value={inputs.email}
        placeholder="Email"
      />
      <br />
      <input
        name="password"
        onChange={handleChange}
        type="password"
        value={inputs.password}
        placeholder="Password"
      />
      <br />
      <button onClick={() => Handle()}>Login</button>
      <br />
      <Link to="/dregister"> Don't you have account?</Link>
    </div>
  );
};

export default DriverLogin;
