import React from "react";
import './family.css';
import Gallery from "../components/Gallery"; // Asegúrate de que la ruta sea correcta
import Accordion from "../components/Accordion";

const FamilyPage = () => {

    const items = [
        {
            label: 'Familia Gómez Vargas',
            children: [
                {
                    label: "Fabian"
                },
                {
                    label: "Emilce"
                },
                {
                    label: "Alejandra"
                },
                {
                    label: "Zarith"
                }
            ]
        },
        {
            label: 'Familia Diaz Gómez',
            children: [
                {
                    label: 'Humberto',
                },
                {
                    label: 'Lucely',
                },
                {
                    label: 'Familia Tarazona Diaz',
                    children: [
                        {
                            label: 'Jeimy',
                        },
                        {
                            label: 'Felipe',
                        },
                        {
                            label: 'Isabella',
                        },
                    ],
                },
                {
                    label: 'Familia Beltran Diaz',
                    children: [
                        {
                            label: 'Albeiro',
                        },
                        {
                            label: 'Julieth',
                        },
                        {
                            label: 'Julian',
                        },
                        {
                            label: 'Sebastian',
                        },
                    ],
                },
                {
                    label: "Camilo"
                }
            ],
        },
        {
            label: 'Familia Gómez Sanchez',
            children: [
                {
                    label: "Augusto"
                },
                {
                    label: "Patricia"
                },
                {
                    label: "Yurani"
                },
                {
                    label: "Daniel"
                }
            ]
        },
        {
            label: 'Familia Alarcón Gómez',
            children: [
                {
                    label: "Nelsy"
                },
                {
                    label: "Marionel"
                },
                {
                    label: "Santiago"
                },
                {
                    label: "Sofia"
                }
            ]
        },
        
        {
            label: 'Sonia',
        },
        
    ];

    return (
        <div className="family-page-main">
            <div className="family-container-tittle">
                <h1 >Family</h1>
            </div>
            <div className="family-container-menu-option">
                <div className="family-container-acordeon">
                <Accordion items={items} />
                </div>
                <div className="family-container-gallery">
                    <Gallery></Gallery>
                </div>
            </div>
        </div>
    );
};

export default FamilyPage;
