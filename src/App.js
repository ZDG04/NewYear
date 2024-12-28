import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Fireworks from "./components/Fireworks";
import YearAnimation from "./components/YearAnimation";
import FamilyPage from "./pages/Family"; // Cambio aquí: usar FamilyPage con mayúscula

// Componente HomePage
const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/family"); // Redirige a "/family" usando react-router
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      <Fireworks />
      <YearAnimation />
      <button
        onClick={handleButtonClick}
        style={{
          position: "absolute",
          bottom: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        VER
      </button>
    </div>
  );
};

// Componente App
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/family" element={<FamilyPage />} /> {/* Cambio aquí: usar FamilyPage */}
      </Routes>
    </Router>
  );
};

export default App;
