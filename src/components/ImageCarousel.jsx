import React, { useState } from 'react'
import "../styles/components/ImageCarousel.css"


const images = [
    "https://newzealandhoneyco.com/cdn/shop/files/web-banner-besktop.jpg",
    "https://newzealandhoneyco.com/cdn/shop/files/web-banner-besktop.jpg",
  ];

  
  
const ImageCarousel = () => {
     const [current, setCurrent] = useState(0);
      const [startX, setStartX] = useState(null);
    
      const goToSlide = (index) => setCurrent(index);
    
      const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
    
      const handleTouchEnd = (e) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        const threshold = 50; // minimum swipe distance
    
        if (diff > threshold && current < images.length - 1) {
          setCurrent(current + 1); // swipe left
        } else if (diff < -threshold && current > 0) {
          setCurrent(current - 1); // swipe right
        }
    
        setStartX(null);
      };
    
  return (
    <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="carousel-slide">
              <img src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
  )
}

export default ImageCarousel