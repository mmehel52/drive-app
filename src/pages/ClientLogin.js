import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/DriverContext";

const ClientLogin = () => {
  const { clientLogin, client } = useGlobalContext();
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
    clientLogin(inputs, setInputs);
    navigate("/main");
    setInputs("");
    console.log(client);
  };

  return (
    <div>
      <h1>Client</h1>
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
      <Link to="/cregister"> Don't you have account?</Link>
    </div>
  );
};

export default ClientLogin;
