import React, { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Fireworks = () => {
    const particlesInit = async (engine) => {
        await loadFireworksPreset(engine);
    };

    // Ref para reproducir el sonido
    const audioRef = useRef(null);

    // Función para reproducir el sonido
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reinicia el sonido
            audioRef.current.play();
        }
    };

    const options = {
        preset: "fireworks",
        particles: {
            move: {
                speed: 3, // Velocidad de las partículas
            },
            life: {
                duration: {
                    value: 25, // Duración de vida de las partículas
                },
            },
        },
        emitters: {
            rate: {
                delay: 2, // Tiempo entre emisiones
                quantity: 1, // Cantidad de fuegos artificiales emitidos a la vez
            },
            on: {
                emit: playSound, // Llama a la función cuando se emiten partículas
            },
        },
    };

    useEffect(() => {
        // Precarga del sonido
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, []);

    return (
        <div>
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
