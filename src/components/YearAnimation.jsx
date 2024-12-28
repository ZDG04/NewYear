import React, { useState, useEffect } from "react";
import "./YearAnimation.css";

const YearAnimation = () => {
    const [year, setYear] = useState("2024");
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimate(true);
            setTimeout(() => {
                setYear("2025");
                setAnimate(false);
            }, 1000); // Duración de la animación
        }, 3000); // Tiempo antes de cambiar el año

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="year-container">
            <span className={`digit ${animate ? "flip" : ""}`}>2</span>
            <span className={`digit ${animate ? "flip" : ""}`}>0</span>
            <span className={`digit ${animate ? "flip" : ""}`}>2</span>
            <span className={`digit ${animate ? "flip" : ""}`}>{year[3]}</span>
        </div>
    );
};

export default YearAnimation;
