import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../context/DriverContext";
const Active = () => {
  const { driver } = useGlobalContext();
  const [active, setActive] = useState("");
  const handleActive = async () => {
    await axios
      .post(`http://localhost:5000/api/actives/${driver?._id}`, {
        username: driver?.name,
        user_id: driver?._id,
      })
      .then((res) => {
        console.log(res.data);
        setActive(res.data);
      })
      .catch((err) => console.log(err));
  };
  const deleteActive = async () => {
    await axios
      .delete(`http://localhost:5000/api/actives/${active?._id}/${driver?._id}`)
      .then((res) => {
        console.log(res.data);
        setActive("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Welcome {driver.name}</h1>

      {!active && (
        <>
          <h2>Do you want to be ACTİVE?</h2>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => handleActive()}
          >
            YES
          </button>
        </>
      )}
      {active && (
        <>
          <h2>Do you want to be OFF?</h2>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => deleteActive()}
          >
            YES
          </button>
        </>
      )}
    </div>
  );
};

export default Active;
