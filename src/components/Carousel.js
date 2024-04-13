import React, { useState, useEffect } from 'react';


const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'images/web.png',
    'images/app.jpg',
    'images/ui.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, images]);

  const currentImage = images[currentImageIndex];

  const imageStyle = {
    width: '800px',
    zIndex: '1', 
    marginLeft: '9.5rem',
    height: '500px',
    borderRadius: '20px', 
    objectFit: 'cover',
  };

  return (
    <div className="image-carousel ml-[10%]">
      <img
        src={currentImage}
        alt={`Image ${currentImageIndex + 1}`}
        style={{ ...imageStyle, transition: 'opacity 0.5s', opacity: 1 }}
        className={`image-fade ${currentImageIndex === 0 ? 'animate-slide-in' : ''}`}
      />
    </div>
  );
};

export default Carousel;
