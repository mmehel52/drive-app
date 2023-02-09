import axios from "axios";
import { useContext, useState, createContext } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [driver, setDriver] = useState(null);
  const Login = (inputs, setInputs) => {
    axios
      .post("http://localhost:5000/api/auth/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res.data);
        setDriver(res?.data);
        setInputs("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AppContext.Provider value={{ Login, driver }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
