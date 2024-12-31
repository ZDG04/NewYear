// Carga todas las imágenes de la carpeta
const importAllImages = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

const images = importAllImages(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => (
  <div className="gallery">
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Family ${index + 1}`} />
    ))}
  </div>
);

export default Gallery;
