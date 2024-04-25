// components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import your CSS file
import image1 from './logo2.png';
import image2 from './NWRCLOGO2.png';

function HomePage() {
  return (
    <div className="container">
      <h1>Does Water Scarcity seems like a problem?</h1>
      <h2>"Let's embrace the essence of water, preserve its vitality, and ensure it flows freely for all."</h2>
      <div className="top-links">
        <Link to="/login" className="link">Login</Link>
        <Link to="/signup" className="link">Signup</Link>
        <Link to="/proofs" className="link">Proofs</Link>
        <Link to="/aboutus" className="link">AboutUs</Link>
      </div>
      {/* Add image elements here */}
      <img src={image1} alt="logo" className="image1" />
      <img src={image2} alt="nwrclogo" className="image2" />
      <div className="bottom-buttons">
        <Link to="/locate-water-source" className="button">Locate a Water Source</Link>
        <Link to="/request-supply" className="button">Request for Supply</Link>
        <Link to="/inform-new-source" className="button">Inform Us of a New Source</Link>
      </div>
    </div>
  );
}

export default HomePage;
