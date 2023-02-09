import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ClientLogin = () => {
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

  const Login = () => {
    axios
      .post("http://localhost:5000/api/authclients/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/main");
        setInputs("");
      })
      .catch((err) => console.log(err));
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
      <button onClick={() => Login()}>Login</button>
      <br />
      <Link to="/cregister"> Don't you have account?</Link>
    </div>
  );
};

export default ClientLogin;
