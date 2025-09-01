import React, { useState } from 'react';
import LogosSection from '../components/LogosSection';
import TwoColumnsSection from '../components/TwoColumnsSection';
import "../styles/components/Home.css";
import ShowTheHoney from '../components/ShowTheHoney';
import ImageCarousel from '../components/ImageCarousel';



const Home = () => {
 
  return (
    <>
      <ImageCarousel/>
<ShowTheHoney/>
      <TwoColumnsSection />
      <LogosSection />
    </>
  );
};

export default Home;
