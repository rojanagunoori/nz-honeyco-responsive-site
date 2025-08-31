import React, { useState, useRef, useEffect } from "react";
import "../styles/components/LogosSection.css";

const logos = [
  { src: "https://newzealandhoneyco.com/cdn/shop/files/Good_House_keeping_Pink_logo_c9e1b90c-b3e3-4426-8142-bb20421e27ec_600x.png", alt: "Good Housekeeping" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/logos-3_16850eab-6d5b-40c4-839d-ce34c07fafe0_600x.png", alt: "Logo 3" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/New_York_Magazine_Logo_cabcc538-a4d9-4568-bc71-f8127e2d7dc8_600x.png", alt: "New York Magazine" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/logo_7_c2edbf4c-740c-4f02-bc96-9784e91939c6_600x.png", alt: "Logo 7" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/Daytime_Chicago_Logo_Inverse_db2f4647-b832-4e22-8cad-61255c065ca3_600x.png", alt: "Daytime Chicago" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/logos-6_07d3d7ed-eea9-4338-ac96-9e0a23f9f2d3_600x.png", alt: "Logo 6" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/The_Atlanta_Journal-Constitution__04_2021__svg_7a5c6a7b-436a-4bab-b853-acd92a871c75_600x.png", alt: "Atlanta Journal" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/logos-8_0c30599d-6363-4293-9f8e-c43da70199cd_600x.png", alt: "Logo 8" },
  { src: "https://newzealandhoneyco.com/cdn/shop/files/Rolling_Stone_logo_PNG7_75cc283c-fa08-4744-b716-4232363c0f3c_600x.png", alt: "Rolling Stone" },
];

const LogosSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const logosPerSlide = 3;
  const totalSlides = Math.ceil(logos.length / logosPerSlide);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToSlide = (index) => {
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: index * width,
      behavior: "smooth",
    });
  };

  return (
    <section className="logos-section">
      <div className="container">
        <h2>As seen in:</h2>

        {/* Desktop Grid */}
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="logos-carousel" ref={scrollRef} onScroll={handleScroll}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-item-carousel">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="carousel-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={index === activeIndex ? "dot active" : "dot"}
              onClick={() => scrollToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
