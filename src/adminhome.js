import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHomePage.css'; // Import your CSS file
import image1 from './logo2.png';
import image2 from './NWRCLOGO2.png';
function AdminHomePage() {
      return (
        <div className="container">
          <h1>Does Water Scarcity seems like a problem?</h1>
          <h2>"Let's embrace the essence of water, preserve its vitality, and ensure it flows freely for all."</h2>
        <h3>HYDROTRACK</h3>
          <div className="bottom-buttons">
            <Link to="/Map water-source" className="button">Map Water-Resource</Link>
            <Link to="/Add proofs" className="button">Add Proofs</Link>
            <Link to="/Manage Certificates" className="button">Manage Feedbacks</Link>
            <img src={image1} alt="logo" className="image1" />
      <img src={image2} alt="nwrclogo" className="image2" />
          </div>
        </div>
      );
    }
    
   

export default AdminHomePage;
