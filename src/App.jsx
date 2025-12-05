import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ConversorGPON from "./pages/ConversorGPON";
import Sobre from "./pages/Sobre";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route
          path="/conversor-gpon"
          element={
            <PrivateRoute>
              <ConversorGPON />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
