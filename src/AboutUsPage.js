// components/AboutUsPage.js
import React from 'react';
import './AboutUsPage.css'; // Import custom CSS file
import image1 from './christie.jpeg'; 
import image2 from './gopika.jpeg';
import image3 from './abu.jpeg';
import image4 from './hakkim.jpeg';
function AboutUsPage() {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h2 className="about-us-heading">About Us</h2>
        <div className="image-container">
          <img src= {image1} alt="christie" className="about-us-image" />
          <img src={image2} alt="gopika" className="about-us-image" />
          <img src={image3} alt="abu" className="about-us-image" />
          <img src={image4} alt="hakkim" className="about-us-image" />
        </div>
        <p className="about-us-text">
        Welcome to HydroTrack! We're a team of innovators committed to making a difference through our mini project. Our mission is clear: to [Briefly Describe Mission].
Driven by integrity, collaboration, and customer-centricity, we're dedicated to delivering exceptional solutions that inspire and empower. With a diverse team of experts, we foster creativity, innovation, and continuous learning.
Thank you for joining us on this journey. Together, let's create something remarkable.
Sincerely,
Team HYDROTRACK
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
