'use client'

import { useState, useEffect } from 'react';

interface Image {
  src: string;
}

const BannerCarousel = ({ images }: { images: Image[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [currentIndex, images.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap transition-transform duration-500"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src} // Access the src property of the Image object
              className={`w-full inline-block`}
              alt={`Banner ${index}`}
            />
          ))}
        </div>
      </div>
      {/* Removed buttons for navigation */}
    </div>
  );
};

export default BannerCarousel;
