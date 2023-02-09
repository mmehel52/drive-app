import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ClientRegister = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    country: { code: "", dialCode: "", name: "" },
    name: "",
    email: "",
    password: "",
    phone: "",
    profilPicture: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target);
  };
  const Register = () => {
    axios
      .post("http://localhost:5000/api/authclients/register", { inputs })
      .then((res) => {
        console.log(res.data);
        navigate("/driver");
        setInputs("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Client</h1>
      <input
        name="country.code"
        onChange={handleChange}
        type="text"
        value={inputs.country.code}
        placeholder="Country Code"
      />
      <br />
      <input
        name="country.dialCode"
        onChange={handleChange}
        type="number"
        value={inputs.country.dialCode}
        placeholder="Country DialCode"
      />

      <br />
      <input
        name="country.name"
        onChange={handleChange}
        type="text"
        value={inputs.country.name}
        placeholder="Country Name"
      />
      <br />
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
        name="phone"
        onChange={handleChange}
        type="number"
        value={inputs.phone}
        placeholder="Phone"
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

export default ClientRegister;
