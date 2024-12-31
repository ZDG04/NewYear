import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Fireworks = () => {
    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reinicia el sonido
            audioRef.current.play().catch(err => {
                console.error("Error al reproducir el sonido:", err);
            });
        }
    };

    const particlesInit = async (engine) => {
        await loadFireworksPreset(engine);
    };

    const options = {
        preset: "fireworks",
        particles: {
            move: {
                speed: 3,
            },
            life: {
                duration: {
                    value: 25,
                },
            },
        },
        emitters: {
            rate: {
                delay: 2,
                quantity: 1,
            },
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            playSound();
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <audio ref={audioRef} src="/firework-sound.mp3" />
            <Particles
                id="fireworks"
                init={particlesInit}
                options={options}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />
        </div>
    );
};

export default Fireworks;
