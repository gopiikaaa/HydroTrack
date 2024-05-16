import React, { useState } from 'react';
import './map.css'; // Import your CSS file
import DropdownMenu from './DropdownMenu';
import MapComponent from './MapComponent'; // Adjust the path as necessary

function HydrotrackSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      setSubmitted(true);
    } else {
      alert('Please enter a location to search on the map.');
    }
  };

  return (
    <div className="map-container">
      <DropdownMenu />
      <h1>Water Resources in Kerala</h1>
      <form onSubmit={handleSearchSubmit} className="map-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Enter location"
          className="map-input"
        />
        <button type="submit" className="map-button">Search on Map</button>
      </form>
      {submitted && <MapComponent searchTerm={searchTerm} />}
    </div>
  );
}

export default HydrotrackSearchPage;


