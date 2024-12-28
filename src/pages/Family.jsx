import React from "react";
import './family.css';
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";


// Importar imágenes desde 'src/pages/images/'
import image1 from './images/image1.jpg';
import image2 from './images/image1.jpg';

const FamilyPage = () => {
    const photos = [
        { src: image1, width: 800, height: 600 },
        { src: image2, width: 1600, height: 900 },
    ];

    return (
        <div className="family-page-main">
            <h1>Casa</h1>
            <ColumnsPhotoAlbum photos={photos} />
        </div>
    );
};

export default FamilyPage;
