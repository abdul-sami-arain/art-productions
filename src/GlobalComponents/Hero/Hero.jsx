import React from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import camera2 from "../../Assets/about/camera2.png";

const Hero = ({ welcomText, mainHeading, heroDesc, heroImg }) => {
  const location = useLocation(); // Hook to get the current location

  return (
    <div className='hero-main-section'>
      {/* Conditionally render video on homepage or background image on other pages */}
      {location.pathname === '/' ? (
        <video
          className="hero-video"
          autoPlay
          loop
          muted 
          // style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        >
          <source src="https://events.edengardensbanquet.com/assets/video-CSBiWcJu.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className="hero-image-background"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
      )}

      <div className="hero-overlay">
        <Navbar />
        <div className='hero-overlay-text'>
          <p>{welcomText}</p>
          <h1>{mainHeading}</h1>
          <p className='hero-desc'>{heroDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
