import React, { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";


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

  const [index, setIndex] = useState(-1);

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
    <>
      <RowsPhotoAlbum
        photos={photos}
        spacing={3}
        targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
