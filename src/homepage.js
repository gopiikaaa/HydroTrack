// HomePage.js
import React from 'react';

import './styles.css'; // Import your CSS file
import DropdownMenu from './DropdownMenu';
import image1 from './logo2.png';
import image2 from './NWRCLOGO2.png';

function HomePage() {
  return (
    <div className="container">
      <DropdownMenu />
      <h1>Does Water Scarcity seem like a problem?</h1>
      <h2>"Let's embrace the essence of water, preserve its vitality, and ensure it flows freely for all."</h2>
     
      {/* Add image elements here */}
      <img src={image1} alt="logo" className="image1" />
      <img src={image2} alt="nwrclogo" className="image2" />
     
    </div>
  );
}

export default HomePage;
