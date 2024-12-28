import React from 'react';
import { useNavigate } from 'react-router-dom';  // Asegúrate de importar useNavigate
import Fireworks from './components/Fireworks';
import YearAnimation from './components/YearAnimation';

const HomePage = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleButtonClick = () => {
        navigate("/otra-pagina"); // Redirige a "/otra-pagina" usando react-router
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

export default HomePage;
