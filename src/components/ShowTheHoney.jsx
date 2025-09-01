import React, { useState, useEffect } from "react";
import { honeyProducts } from "../utils/api";
import "../styles/components/ShowTheHoney.css";

const ShowTheHoney = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? honeyProducts.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % honeyProducts.length);
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  // Add TM to UMF in title1
  const formatTitle1 = (title) => {
    if (title.includes("UMF")) {
      return title.replace("UMF", "UMF™");
    }
    return title;
  };

  return (
    <div className="show-honey-container">
      <h2>SHOW ME THE HONEY</h2>

      {/* Carousel */}
      <div className="carousel-wrapper">
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${honeyProducts[currentSlide].bg})` }}
        >
          {/* Product Image Only */}
          <img
            src={honeyProducts[currentSlide].img}
            alt={honeyProducts[currentSlide].title1}
            className="carousel-img"
          />

          {/* Navigation Buttons */}
          <button className="carousel-nav left" onClick={prevSlide}>
            <svg width="18" height="40" viewBox="0 0 18 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 39L4.36396 26.364C0.849244 22.8492 0.849244 17.1508 4.36396 13.636L17 1" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
            </svg>
          </button>
          <button className="carousel-nav right" onClick={nextSlide}>
            <svg fill="none" height="40" viewBox="0 0 18 40" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m1 1 12.636 12.636c3.5148 3.5148 3.5148 9.2132 0 12.728l-12.636 12.636" stroke="#000" strokeLinecap="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>

        {/* Text Section */}
        <div className="carousel-text-wrapper">
          <div className="carousel-text-left">
            <h2>{formatTitle1(honeyProducts[currentSlide].title1)}</h2>
            {honeyProducts[currentSlide].title2 && <h3>{honeyProducts[currentSlide].title2}</h3>}
          </div>
          <div className="carousel-text-right">
            <p>{honeyProducts[currentSlide].description}</p>
          </div>
        </div>

        {/* Button below carousel */}
        <div className="carousel-button-container">
          <button style={{ backgroundColor: honeyProducts[currentSlide].color }}>
            MEET THIS HONEY
          </button>
        </div>
      </div>

      {/* UL list under everything */}
      <ul className="honey-list">
        {honeyProducts.map((item, index) => (
          <li
            key={index}
            style={{ "--hover-color": item.color }}
            className={index === currentSlide ? "active" : ""}
          >
            {formatTitle1(item.title1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowTheHoney;
