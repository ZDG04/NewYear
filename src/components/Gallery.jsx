import React, { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// Cargar imágenes dinámicamente usando require.context
const importAllImages = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    key, // Usar la clave para identificar la imagen
  }));

// Función para obtener las dimensiones reales de la imagen
const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
  });
};

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Obtener las imágenes con sus dimensiones
    const images = importAllImages(require.context("./images", false, /\.(jpg|jpeg|png|gif)$/));
    const loadImageDimensions = async () => {
      const photosWithDimensions = await Promise.all(
        images.map(async (image) => {
          const { width, height } = await getImageDimensions(image.src);
          return {
            src: image.src,
            width,
            height,
            srcSet: [
              { src: image.src, width: Math.floor(width / 2), height: Math.floor(height / 2) },
              { src: image.src, width: Math.floor(width / 3), height: Math.floor(height / 3) },
            ],
          };
        })
      );
      setPhotos(photosWithDimensions);
    };
    
    loadImageDimensions();
  }, []);

  // Asegúrate de que las imágenes se hayan cargado
  if (photos.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <RowsPhotoAlbum
      photos={photos}
      sizes={{
        size: "1168px",
        sizes: [
          {
            viewport: "(max-width: 1200px)",
            size: "calc(100vw - 32px)",
          },
        ],
      }}
    />
  );
}
