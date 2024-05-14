import React, { useState } from 'react';
import './map.css'; // Import your CSS file

function MapButton() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const redirectToGoogleMap = () => {
    if (searchTerm.trim() !== '') {
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`;
      window.location.href = googleMapsUrl;
    } else {
      alert('Please enter a location to search on Google Maps.');
    }
  };

  return (
    <div className="map-button-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter location"
        className="map-input"
      />
      <button onClick={redirectToGoogleMap} className="map-button">Search on Google Maps</button>
    </div>
  );
}

export default MapButton;
