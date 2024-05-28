import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageGalleryComponent = ({ images }) => {
  const formattedImages = images.map(image => ({
    original: image.src,
    thumbnail: image.src,
    description: image.alt,
  }));

  return (
    <ImageGallery items={formattedImages} />
  );
};

export default ImageGalleryComponent;
