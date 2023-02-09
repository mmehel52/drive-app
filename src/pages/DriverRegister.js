import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DriverRegister = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    phone_prefix: "",
    profilPicture: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const Register = () => {
    axios
      .post("http://localhost:5000/api/auth/register", inputs)
      .then((res) => {
        console.log(res.data);
        navigate("/client");
        setInputs("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Driver</h1>

      <input
        name="name"
        onChange={handleChange}
        type="text"
        value={inputs.name}
        placeholder="Name"
      />
      <br />
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
      <input
        name="phone_number"
        onChange={handleChange}
        type="number"
        value={inputs.phone_number}
        placeholder="Phone"
      />
      <br />
      <input
        name="phone_prefix"
        onChange={handleChange}
        type="number"
        value={inputs.phone_prefix}
        placeholder="Phone Prefix"
      />
      <br />
      <input
        name="profilPicture"
        onChange={handleChange}
        type="text"
        value={inputs.profilPicture}
        placeholder="ProfilPicture"
      />
      <br />
      <button onClick={() => Register()}>Sign up</button>
    </div>
  );
};

export default DriverRegister;
