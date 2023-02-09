import "./App.css";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/DriverContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
