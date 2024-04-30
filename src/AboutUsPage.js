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
          <img src={image1} alt="christie" className="about-us-image" />
          <img src={image2} alt="gopika" className="about-us-image" />
          <img src={image3} alt="abu" className="about-us-image" />
          <img src={image4} alt="hakkim" className="about-us-image" />
        </div>
        <h4>Team HydroTrack</h4>
        <p className="about-us-text">
       
" Where innovation meets integrity to revolutionize water management and create a sustainable future."
        </p>
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>We'd love to hear from you! If you have any questions, feedback, or collaboration opportunities, feel free to reach out to us:</p>
          <p>Email: hydrotrack@gmail.com</p>
          <p>Phone: +1234567890</p>
          
          <p>Thank you for your interest in HydroTrack. Together, let's make a difference in the world of water management and conservation.</p>
          <p>Sincerely,</p>
          <p>Team HydroTrack</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
