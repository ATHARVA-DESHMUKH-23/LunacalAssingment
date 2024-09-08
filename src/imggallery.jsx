import React, { useState } from 'react';
import galleryimg from './img/gallery.jpeg'; // The single image you're using
import './styles/Imggallery.css'; // Assuming you use external CSS for styling

const Imggallery = () => {
  const [images, setImages] = useState([
    galleryimg, galleryimg, galleryimg, galleryimg, galleryimg
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImage = () => {
    setImages([...images, galleryimg]);
  };

  const handleNext = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
      </div>

      <div className="controls">
        <button className="prev" onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button className="next" onClick={handleNext} disabled={currentIndex + 3 >= images.length}>
          Next
        </button>
        <button className="add" onClick={handleAddImage}>
          Add Image
        </button>
      </div>
    </div>
  );
};

export default Imggallery;
