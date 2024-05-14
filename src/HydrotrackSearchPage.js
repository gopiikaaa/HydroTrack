import React, { useState } from 'react';
import './map.css'; // Import your CSS file
import DropdownMenu from './DropdownMenu';

function HydrotrackSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const redirectToOpenStreetMap = () => {
    if (searchTerm.trim() !== '') {
      const openStreetMapUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(searchTerm)}`;
      window.location.href = openStreetMapUrl;
    } else {
      alert('Please enter a location to search on OpenStreetMap.');
    }
  };

  return (
    <div className="map-button-container">
      <DropdownMenu />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter location"
        className="map-input"
      />
      <button onClick={redirectToOpenStreetMap} className="map-button">Search on OpenStreetMap</button>
    </div>
  );
}

export default HydrotrackSearchPage;
