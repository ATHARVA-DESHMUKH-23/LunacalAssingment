import React from 'react';
import './styles/Imggallery2.css'; // Ensure you have this CSS file
import galleryimg from './img/gallery.jpeg';

const images = [
  [galleryimg, galleryimg, galleryimg],
  [galleryimg, galleryimg, galleryimg]
];

const ImageGallery = () => {
  return (
    <div className="gallery">
      {images.map((imageRow, rowIndex) => (
        <div key={rowIndex}>
          {imageRow.map((imageSrc, imgIndex) => (
            <span key={imgIndex}>
              <img 
                src={imageSrc} 
                alt={`Image ${rowIndex * 3 + imgIndex + 1}`} 
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
