import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/DriverContext";

const PrivateRouter = () => {
  const { client } = useGlobalContext();
  return client ? <Outlet /> : <Navigate to="/client" replace />;
};

export default PrivateRouter;
