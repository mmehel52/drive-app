import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/DriverContext";

const Main = () => {
  const [actives, setActives] = useState([]);
  const [driver, setDriver] = useState("");

  const { client } = useGlobalContext();
  useEffect(() => {
    getActive();
  }, []);
  const getActive = async () => {
    await axios
      .get("http://localhost:5000/api/actives/")
      .then((res) => {
        console.log(res.data);
        setActives(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    Request();
  }, []);
  const Request = (userId) => {
    axios.get(`http://localhost:5000/api/drivers/${userId}`).then((res) => {
      console.log(res.data);
      setDriver(res.data);
    });
  };
  return (
    <div>
      <h1>Welcome {client?.name}</h1>
      <h2>All Active Drivers</h2>
      {actives?.map((el) => (
        <div key={el?._id} onClick={() => Request(el?.user_id)}>
          <h5>{el?.username}</h5>
        </div>
      ))}
    </div>
  );
};

export default Main;
