import React from 'react';
import './AdminHomePage.css'; // Import your CSS file
import DropdownMenuAdmin from './DropdownMenuAdmin';
import image1 from './logo2.png';
import image2 from './NWRCLOGO2.png';
function AdminHomePage() {
      return (
        <div className="container">
          <DropdownMenuAdmin />
          <h1>Does Water Scarcity seems like a problem?</h1>
          <h2>"Let's embrace the essence of water, preserve its vitality, and ensure it flows freely for all."</h2>
            <img src={image1} alt="logo" className="image1" />
      <img src={image2} alt="nwrclogo" className="image2" />
          </div>

      );
    }
    
   

export default AdminHomePage;
