import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/DriverContext";

const PrivateRouter2 = () => {
  const { driver } = useGlobalContext();
  return driver ? <Outlet /> : <Navigate to="/driver" replace />;
};

export default PrivateRouter2;
