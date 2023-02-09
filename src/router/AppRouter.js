import React from "react";
import { Routes, Route } from "react-router-dom";
import Active from "../pages/Active.js";
import ClientLogin from "../pages/ClientLogin.js";
import ClientRegister from "../pages/ClientRegister.js";
import DriverLogin from "../pages/DriverLogin.js";
import DriverRegister from "../pages/DriverRegister.js";
import Main from "../pages/Main.js";
import PrivateRouter from "./PrivateRouter.js";
import PrivateRouter2 from "./PrivateRouter2.js";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/driver" element={<DriverLogin />} />
      <Route path="/dregister" element={<DriverRegister />} />
      <Route path="/cregister" element={<ClientRegister />} />
      <Route path="/client" element={<ClientLogin />} />
      <Route path="/main" element={<PrivateRouter />}>
        <Route path="" element={<Main />} />
      </Route>
      <Route path="/active" element={<PrivateRouter2 />}>
        <Route path="" element={<Active />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
