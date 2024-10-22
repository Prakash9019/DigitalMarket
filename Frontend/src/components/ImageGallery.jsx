import React, { forwardRef } from 'react';

const ImageGallery = forwardRef(({ images, className }, ref) => {
  return (
    <div ref={ref} className={`flex flex-col ${className}`}>
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          src={image.src}
          alt={image.alt}
          className={`object-contain image ${image.className}`}
        />
      ))}
    </div>
  );
});

export default ImageGallery;
